---
title: "오늘의 지식: Swift Automatic Reference Counting"
categories: 
  - Swift
last_modified_at: 2021-05-10 23:30:00
toc: true #Table of Contents
comments: true


---

## Automatic Reference Couting

Swift는 자동으로 메모리를 추적하고 관리하기 위해 ARC를 사용합니다. 메모리 관리를 자동으로 해주며, 프로그래머가 신경 쓰지 않게 해줍니다. ARC는 클래스 인스턴스를 참조하는 변수가 존재하지 않는 경우, 인스턴스가 사용하는 메모리를 자동으로 해제합니다.

Swift ARC는 Reference 타입인 클래스 인스턴스에만 적용됩니다. Value 타입인 구조체와 열거형은 적용되지 않습니다. Value 타입은 함수 종료와 동시에 메모리에서 알아서 정리됩니다.

## How ARC Works

Swift는 새로운 인스턴스를 생성할 때 ARC는 인스턴스 정보에 대한 정보를 저장하는 chunk를 할당합니다. reference couting은 Swift의 메모리 관리 기법으로 여기서 말하는 메모리 관리 기법은 동적 메모리를 자동으로 할당하고 해제하는 것을 말합니다.

생성한 인스턴스를 참조하는 변수가 없어서 인스턴스가 필요하지 않게 되면, ARC는 해당 인스턴스가 사용하는 메모리 공간을 해제하여 메모리 공간을 확보합니다. 인스턴스가 존재하는 동안에는 ARC가 현재 각 클래스 인스턴스를 몇 개의 변수들이 참조하고 있는지 reference counting을 추적합니다. 해당 인스턴스에 하나 이상의 변수가 참조하고 있으면 ARC는 인스턴스를 메모리에서 해제하지 않습니다.

## ARC in Action

ARC가 동작하는 방식을 설명하는 코드입니다.

```swift
class Person {
    let name: String
    
    init(name: String) {
        self.name = name
        print("\(name) is being initialized")
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

var reference1: Person?
var reference2: Person?
var reference3: Person?

// 인스턴스 생성됩니다. 현재 strong reference는 1입니다.
reference1 = Person(name: "John Appleseed")

// strong reference가 2증가합니다. 총 3입니다.
reference2 = reference1
reference3 = reference1

// strong reference 1 감소합니다. 나머지 2
reference1 = nil
// strong reference 1 감소합니다. 나머지 1
reference2 = nil
// 아직 deinitializer가 호출되지 않았습니다.

// 하나 남은 strong reference가 감소합니다. 나머지 0
reference3 = nil
// deinitializer가 호출됩니다.
```

## Strong Reference Cycles Between Class Instances

일반적인 경우에는 ARC가 알아서 reference count를 추적하여 메모리를 자동으로 해제합니다. 그러나 두 인스턴스 사이에서 서로를 참조하고 있을 경우 reference count가 줄어들지 않아 메모리에서 해제할 수 없는 상황이 발생할 수 있습니다. 이런 상황을 strong reference cycle이라고 합니다. 클래스 인스턴스 서로가 서로를 참조할 때 이러한 strong reference cycle이 발생할 수 있으므로 적절하게 이를 해결해야 합니다.

strong reference cycle이 발생하는 코드입니다.

```swift
class Person1 {
    let name: String
    // Apartment 타입 Strong Reference
    var apartment: Apartment?
    
    init(name: String) {
        self.name = name
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

class Apartment {
    let unit: String
    // Person1 타입 Strong Reference
    var tenant: Person1?
    
    init(unit: String) {
        self.unit = unit
    }
    
    deinit {
        print("Apartment \(unit) is being deinitialized")
    }
}

var john: Person1?
var unit4A: Apartment?

// person1 인스턴스가 생성됩니다. 현재 reference count는 1입니다.
john = Person1(name: "John Appleseed")
// apartment 인스턴스가 생성됩니다. 현재 reference count는 1입니다.
unit4A = Apartment(unit: "4A")

// apartment 인스턴스의 reference count는 2입니다.
john!.apartment = unit4A
// person 인스턴스의 reference count는 2입니다.
unit4A!.tenant = john
// strong reference cycle 발생

// person 인스턴스의 reference count는 1이 됩니다.
john = nil
// apartment 인스턴스의 reference count는 1이 됩니다.
unit4A = nil
// deinitializer가 호출되지 않습니다.
// 인스턴스 간의 strong reference로 인해 인스턴스가 메모리에서 해제되지 않습니다.
```

strong reference cycle이 발생하면 메모리 leak이 발생합니다. 따라서 이런 strong reference cycle이 발생하지 않도록 구현해야 합니다.

## Resolving Strong Reference Cycles Between Class Instances

Swift에서는 strong reference cycle을 해결하기 위해 두 가지 방법을 제공합니다. 하나는 weak reference, 다른 하나는 unowned reference입니다. weak reference와 unowned reference는 reference counting을 증가시키지 않고 참조하는 수단을 제공합니다. weak reference의 경우 인스턴스의 수명이 짧을 때 사용하며, unowned reference는 인스턴스의 수명이 길 때 사용합니다.

### Weak References

weak references는 인스턴스 reference counting을 증가시키지 않으며 weak reference로 참조하고 있더라도 ARC는 인스턴스 메모리를 정리할 수 있습니다. weak reference는 정의 앞에 weak 키워드를 붙여서 선언합니다. ARC는 인스턴스를 정리할 때 해당 인스턴스를 weak reference로 참조하고 있는 변수에 nil을 자동으로 할당합니다. weak reference 변수는 실행 중에 nil을 할당할 수 있어야 하므로 var 옵셔널 형태로 선언해야 합니다.

⭐️ ARC가 변수에 nil을 할당할 경우 해당 변수를 관찰하고 있는 property observer는 호출되지 않습니다.

weak reference가 동작하는 방식을 설명하는 코드입니다.

```swift
class Person2 {
    let name: String
    // Apartment 타입 strong reference
    var apartment: Apartment1?
    
    init(name: String) {
        self.name = name
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

class Apartment1 {
    let unit: String
    // Person2 타입 weak reference
    weak var tenant: Person2?
    
    init(unit: String) {
        self.unit = unit
    }
    
    deinit {
        print("Apartment1 \(unit) is being deinitialized")
    }
}

var john1: Person2?
var unit4A1: Apartment1?

// person2 인스턴스 reference count 1
john1 = Person2(name: "John Appleseed")
// apartment1 인스턴스 reference count 1
unit4A1 = Apartment1(unit: "4A")

// apartment1 인스턴스 reference count 2
john1!.apartment = unit4A1
// person2 인스턴스 reference count 1
unit4A1!.tenant = john1

// reference count 0으로 인해 메모리 해제
john1 = nil
// deinitializer 호출
// apartment1 인스턴스 reference count 1
// 인스턴스가 해제되었으므로 ARC가 tenant 프로퍼티에 nil을 할당
print(unit4A1?.tenant)
// nil

// reference count 0으로 인해 메모리 해제
unit4A1 = nil
// deinitializer 호출
```

### Unowned References

unowned reference는 인스턴스 reference counting을 증가시키지 않으며 unowned reference로 참조하고 있더라도 ARC는 인스턴스 메모리를 정리할 수 있습니다. unowned reference는 정의 앞에 unowned 키워드를 붙여서 선언합니다. unowned reference는 weak reference와 다르게 항상 인스턴스가 존재한다고 생각하고 접근합니다. 그래서 ARC는 unowned reference 변수에 nil을 할당하지 않습니다.

unowned reference는 인스턴스가 절대 해제되지 않을 거라고 생각될 때 사용합니다. 만약 인스턴스가 해제되어 메모리에서 제거된 후 unowned reference 변수로 접근하면 런타임 에러가 발생합니다.

```swift
class Customer {
    let name: String
    // 👀 신용카드는 옵셔널
    var card: CreditCard?
    
    init(name: String) {
        self.name = name
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

class CreditCard {
    let number: UInt64
    // 👀 고객은 unowned reference
    unowned let customer: Customer
    
    init(number: UInt64, customer: Customer) {
        self.number = number
        self.customer = customer
    }
    
    deinit {
        print("Card #\(number) is being deinitialized")
    }
}

// joy는 customer 인스턴스를 strong reference로 참조합니다.
// customer 인스턴스는 creditcard 인스턴스를 strong reference로 참조합니다.
// creditcard 인스턴스는 customer를 unowned reference로 참조합니다.
var joy: Customer? = Customer(name: "John Appleseed")
joy!.card = CreditCard(number: 1234_5678_9012_3456, customer: joy!)
// joy가 customer 인스턴스 참조를 해제하면 reference counting이 0이 되어 customer 인스턴스는 메모리에서 해제됩니다.
joy = nil
// customer deinitializer 호출
// creditcard deinitializer 호출
```

위 예제는 실행 중에 런타임 안전성 검사를 하는 safe unowned reference에 대한 예시입니다.

### Unsafe Unowned References

Swift에서는 런타임 시간에 안전성 검사를 하지 않는 unsafe unowned reference도 제공합니다. unsafe unowned reference는 unowned(unsafe) 키워드를 붙여서 선언합니다. unsafe unowned reference는 인스턴스가 해제되어도 해당 메모리에 접근합니다.

unsafe unowned reference는 성능상의 이유로 사용할 수 있습니다. unsafe unowned reference의 접근 시 안전성에 대한 검사는 작성자에게 책임이 있습니다.

```swift
class Coffee {
    // caramel unsafe unowned reference
    unowned(unsafe) let caramel: Caramel
    
    init(caramel: Caramel) {
        self.caramel = caramel
    }
}

class Caramel {
    let flavor = "caramel"
}

let coffee = Coffee(caramel: Caramel())
```



### 참고 링크

---

> [Swift Automatic Reference Counting](https://docs.swift.org/swift-book/LanguageGuide/AutomaticReferenceCounting.html)