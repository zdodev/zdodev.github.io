---
title: "오늘의 지식: Swift Automatic Reference Counting"
categories: 
  - Swift
last_modified_at: 2021-11-25 11:30:00
toc: true #Table of Contents
comments: true


---

## Automatic Reference Couting

과거 Objective-C를 사용할 때는 인스턴스에 대한 참조 횟수 관리를 수동으로 해야 했습니다. 인스턴스에 대한 참조를 늘리는(retain) 동작과 참조를 줄이는(release) 동작을 수동으로 해주어야 했습니다. 이후 ARC가 도입되면서 메모리를 자동으로 관리해주기 시작했지만, Core Foundation은 수동으로 관리해주어야 합니다.

Swift는 자동으로 메모리를 추적하고 관리하기 위해 ARC를 사용합니다. 메모리 관리를 자동으로 해주며, 프로그래머가 신경 쓰지 않게 해줍니다. ARC는 클래스 인스턴스를 참조하는 변수가 존재하지 않는 경우, 인스턴스가 사용하는 메모리를 자동으로 해제합니다.

Swift의 reference counting은 참조 타입인 클래스 인스턴스에만 적용됩니다. 값 타입인 구조체와 열거형은 적용되지 않습니다. 값 타입은 함수 종료와 동시에 메모리에서 자동으로 정리됩니다.

## How ARC Works

ARC는 새로운 인스턴스를 생성할 때마다 인스턴스 정보에 대한 정보를 저장하는 chunk를 할당합니다. 이 메모리에는 해당 인스턴스와 연관된 저장 프로퍼티 값과 프로퍼티의 타입을 가지고 있습니다.

생성한 인스턴스를 참조하는 변수가 없어서 인스턴스가 필요하지 않게 되면, ARC는 해당 인스턴스가 사용하는 메모리 공간을 해제하여 메모리 공간을 확보합니다. 인스턴스가 존재하는 동안에는 ARC가 현재 각 클래스 인스턴스를 몇 개의 변수들이 참조하고 있는지 reference count를 추적합니다. 해당 인스턴스에 하나 이상의 변수가 참조하고 있으면 ARC는 인스턴스를 메모리에서 해제하지 않습니다.

---

retain count는 인스턴스 내부적으로 얼마나 많은 참조가 이루어졌는지에 대한 횟수입니다.

reference count는 인스턴스 외부적으로 얼마나 많은 변수가 인스턴스를 참조하고 있는지에 대한 횟수입니다.

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

// 인스턴스 생성됩니다. 현재 reference count는 1입니다.
reference1 = Person(name: "John Appleseed")

// reference1의 reference count가 2증가합니다. 현재 총 3입니다.
reference2 = reference1
reference3 = reference1

// reference count 1 감소합니다. 현재 나머지는 2입니다.
reference1 = nil
// reference count 1 감소합니다. 현재 나머지는 1입니다.
reference2 = nil
// 아직 deinitializer가 호출되지 않았습니다.

// 하나 남은 reference count가 감소합니다. 나머지는 0입니다.
reference3 = nil
// ARC에 의해 메모리에서 해제됩니다.
// deinitializer가 호출됩니다.
```

## Strong Reference Cycles Between Class Instances

일반적으로는 ARC가 알아서 reference count를 추적하여 메모리를 자동으로 해제합니다. 그러나 두 인스턴스 사이에서 서로를 참조하고 있으면 reference count가 줄어들지 않아 메모리에서 해제할 수 없는 상황이 발생할 수 있습니다. 이런 상황을 강한 참조 순환(strong reference cycle)이라고 합니다. 클래스 인스턴스 서로가 서로를 참조할 때 이러한 강한 참조 순환이 발생할 수 있으므로 적절하게 이를 해결해야 합니다.

강한 참조 순환이 발생하는 코드입니다.

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
// 변수는 모두 인스턴즈 참조를 해제했지만, 인스턴스끼리 참조하는 것을 해제하지 않아서 인스턴스가 메모리에서 제거되지 않습니다.
// 인스턴스 간의 strong reference로 인해 인스턴스가 메모리에서 해제되지 않습니다.
```

강한 참조 순환이 발생하면 메모리 누수가 발생합니다. 따라서 이런 강한 참조 순환이 발생하지 않도록 구현해야 합니다.

## Resolving Strong Reference Cycles Between Class Instances

Swift에서는 강한 참조 순환을 해결하기 위해 두 가지 방법을 제공합니다. 하나는 약한 참조(weak reference), 다른 하나는 미소유 참조(unowned reference)입니다. 약한 참조와 미소유 참조는 reference count를 증가시키지 않고도 인스턴스를 참조하는 수단을 제공합니다. 보통 약한 참조의 경우 인스턴스의 수명이 짧을 때 사용하며, 미소유 참조는 인스턴스의 수명이 길 때 사용하지만 절대적인 기준은 아닙니다.

### Weak References

약한 참조는 인스턴스 reference count를 증가시키지 않으며 약한 참조로 참조하고 있더라도 ARC는 인스턴스 메모리를 정리할 수 있습니다. 약한 참조는 정의 앞에 weak 키워드를 붙여서 선언합니다. ARC는 인스턴스를 정리할 때 해당 인스턴스를 약한 참조로 참조하고 있는 변수에 nil을 자동으로 할당합니다. 약한 참조 변수는 실행 중에 nil을 할당할 수 있어야 하므로 var 옵셔널 형태로 선언해야 합니다.

⭐️ ARC가 변수에 nil을 할당할때, 해당 변수를 관찰하고 있는 property observer는 호출되지 않습니다.

약한 참조가 동작하는 방식을 설명하는 코드입니다.

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
// person2 인스턴스 reference count 1 (weak에 할당)
unit4A1!.tenant = john1

// person2 인스턴스 reference count 0
// reference count 0으로 인해 메모리 해제
john1 = nil
// deinitializer 호출
// apartment1 인스턴스 reference count 1
// 인스턴스가 해제되었으므로 ARC가 tenant 프로퍼티에 nil을 할당
print(unit4A1?.tenant)
// nil

// apartment1 인스턴스 reference count 0으로 인해 메모리 해제
unit4A1 = nil
// deinitializer 호출
```

### Unowned References

미소유 참조는 인스턴스의 reference count를 증가시키지 않으며 미소유 참조로 참조하고 있더라도 ARC는 인스턴스 메모리를 정리할 수 있습니다. 미소유 참조는 정의 앞에 unowned 키워드를 붙여서 선언합니다. 미소유 참조는 약한 참조와 다르게 항상 인스턴스가 존재한다고 생각하고 접근합니다. 그래서 ARC는 미소유 참조 변수에 nil을 할당하지 않습니다.

미소유 참조와 약한 참조의 차이점

- 미소유 참조는 인스턴스에 접근할 때 인스턴스가 항상 존재한다는 가정으로 접근합니다. 말이 어려운데 일반 변수처럼 참조하고 사용할 수 있지만, reference count는 증가시키지 않습니다.
- 미소유 참조는 해당 인스턴스가 절대 해제되지 않을 때 사용합니다. 해당 인스턴스가 해제된 상태에서 접근하면 런타임 에러가 발생합니다.
- 참조하는 인스턴스가 제거된 경우, 약한 참조 변수는 nil로 변경되지만, 미소유 참조 변수는 nil로 변경되지 않습니다.
- 약한 참조는 해당 인스턴스가 해제될 수 있을 때 사용합니다. 해당 인스턴스 접근 시 옵셔널 바인딩을 통해 안전하게 접근할 수 있습니다.

미소유 참조는 인스턴스가 절대 해제되지 않을 거라고 생각될 때 사용합니다. 만약 인스턴스가 해제되어 메모리에서 제거된 후 미소유 참조 변수로 접근하면 런타임 에러가 발생합니다.

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
// customer 인스턴스는 CreditCard 인스턴스를 strong reference로 참조합니다.
// CreditCard 인스턴스는 customer를 unowned reference로 참조합니다.
var joy: Customer? = Customer(name: "John Appleseed")
joy!.card = CreditCard(number: 1234_5678_9012_3456, customer: joy!)
// joy가 customer 인스턴스 참조를 해제하면 reference count가 0이 되어 customer 인스턴스는 메모리에서 해제됩니다.
joy = nil
// customer deinitializer 호출
// creditcard deinitializer 호출
```

위 예제는 실행 중에 런타임 안전성 검사를 하는 안전한 미소유 참조에 대한 예시입니다.

### Unsafe Unowned References

Swift에서는 런타임 시간에 안전성 검사를 하지 않는 안전하지 않은 미소유 참조도 제공합니다. 안전하지 않은 미소유 참조는 unowned(unsafe) 키워드를 붙여서 선언합니다. 안전하지 않은 미소유 참조는 인스턴스가 해제되어도 해당 메모리에 접근합니다.

안전하지 않은 미소유 참조는 성능상의 이유로 사용할 수 있습니다. 안전하지 않은 미소유 참조에 접근 시 안전성에 대한 검사는 작성자에게 책임이 있습니다. 안전하지 않은 미소유 참조는 safety checker 기능이 비활성화됩니다. 메모리에 인스턴스가 해제되어도 다른 인스턴스가 해당 메모리에 생성되면 예상치 못한 동작이 발생할 수 있습니다.

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

### Unowned Optional References

Swift는 미소유 옵셔널 참조도  제공합니다. 미소유 옵셔널 참조와 약한 참조는 동일한 상황에서 사용할 수 있습니다. 미소유 옵셔널 참조 변수는 nil이 될 수 있습니다. 차이점은 미소유 옵셔널 참조를 사용하여 참조할 때는 유효한 인스턴스를 참조하고 있는지 해제된 인스턴스 메모리 공간을 참조하고 있는지 항상 확인해야 합니다. 

미소유 옵셔널 참조가 동작하는 방식을 설명한 코드입니다.

```swift
class Department {
    var name: String
    // Course strong reference
    var courses = [Course]()
    
    init(name: String) {
        self.name = name
    }
}

class Course {
    var name: String
    // Department unowned reference
    unowned var department: Department
    // Course unowned optional reference
    // nextCourse에 유효한 인스턴스가 있다는 것은 작성자의 책임입니다.
    unowned var nextCourse: Course?
    
    init(name: String, in department: Department) {
        self.name = name
        self.department = department
    }
}

// reference counting 1
let department = Department(name: "Horticulture")

// reference counting 1, department는 unowned
let intro = Course(name: "Survey of Plants", in: department)
// reference counting 1, department는 unowned
let intermediate = Course(name: "Growing Common Herbs", in: department)
// reference counting 1, department는 unowned
let advanced = Course(name: "Caring for Tropical Plants", in: department)
intro.nextCourse = intermediate
intermediate.nextCourse = advanced
department.courses = [intro, intermediate, advanced]
```

### Unowned References and Implicitly Unwrapped Optional Properties

두 변수가 항상 값을 가지고 있어야 하며, 어느 변수도 nil이 되면 안 되는 경우가 존재할 수 있습니다. 이때 초기화를 한 번 하고 나면, 강한 참조 순환을 피하고 옵셔널 언래핑없이 직접 접근할 방법이 있습니다.

```swift
class Country {
    let name: String
    // City strong reference
    // 이니셜라이저에서 self를 사용하기 위해 implicitly unwrapped optional 선언
    var capitalCity: City!
    
    init(name: String, capitalName: String) {
        self.name = name
        self.capitalCity = City(name: capitalName, country: self)
    }
}

class City {
    let name: String
    // Country unowned reference
    unowned let country: Country
    
    init(name: String, country: Country) {
        self.name = name
        self.country = country
    }
}

var country = Country(name: "Canada", capitalName: "Ottawa")
print("\(country.name)'s capital city is called \(country.capitalCity.name)")
```

## Strong Reference Cycles for Closures

강한 참조 순환은 클로저에서도 발생합니다. 클로저도 참조 타입이기 때문에 reference count를 가지고 있습니다. 클로저의 강한 참조 순환은 클래스 인스턴스에 할당한 다음, 해당 클로저가 해당 인스턴스를 캡처할 때 발생합니다. 클래스 인스턴스는 클로저에 강한 참조를 가지고, 클로저도 클래스 인스턴스에 강한 참조를 가지면 강한 참조 순환이 발생합니다.

클로저가 self를 여러 번 참조하더라도 reference count는 1만 증가합니다.

클래스 인스턴스와 클로저가 강한 참조 순환을 발생시키는 코드입니다.

```swift
class HTMLElement {
    let name: String
    let text: String?
    
    // 클로저를 strong reference
    lazy var asHTML: () -> String = {
        // 클래스 인스턴스 text를 strong reference
        if let text = self.text {
            // 클래스 인스턴스 text를 strong reference
            return "<\(self.name)>\(text)</\(self.name)>"
        } else {
            // 클래스 인스턴스 text를 strong reference
            return "<\(self.name) />"
        }
    }
    
    init(name: String, text: String? = nil) {
        self.name = name
        self.text = text
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

let heading = HTMLElement(name: "h1")
let defaultText = "some default text"
heading.asHTML = {
    "<\(heading.name)>\(heading.text ?? defaultText)</\(heading.name)>"
}
print(heading.asHTML())

var paragraph: HTMLElement? = HTMLElement(name: "p", text: "hello world")
print(paragraph!.asHTML())

paragraph = nil
// deinitializer가 호출되지 않습니다.
```

## Resolving Strong Reference Cycles for Closures

클래스 인스턴스와 클로저 사이에 발생하는 강한 참조 순환을 해결하기 위해서 캡처 리스트를 정의할 수 있습니다. 클로저가 참조 타입을 캡처할 때 약한 참조 또는 미소유 참조를 선언할 수 있습니다.

### Defining a Capture List

클로저 캡처란 클로저로 전달된 인자나 클로저 지역변수를 사용하는 것이 아니라 클로저 정의 범위 밖에있는 변수를 사용하기 위해 참조하는 것을 말합니다.

캡처할 대상을 대괄호 안에 작성합니다. 클로저의 맨 앞에 위치합니다. weak, unowned 정책을 알맞게 사용할 수 있습니다.

```swift
class Bread {
    let delegate = Caramel()
    
    lazy var someClosure = {
        // self, delegate를 캡처합니다.
        [unowned self, weak delegate = self.delegate]
        (index: Int, stringToProcess: String) -> String in
        // 캡처한 delegate는 weak 참조이므로 언래핑하여 사용
        delegate!.flavor
    }
    
    lazy var someClosure1 = {
        // self, delegate를 캡처합니다.
        [unowned self, unowned delegate = self.delegate]
        (index: Int, stringToProcess: String) -> String in
        // 캡처한 delegate는 unowned 참조이므로 바로 사용
        delegate.flavor
    }
}
```

### Weak and Unowned References

self를 weak 또는 unowned로 설정할 수 있습니다. self를 약한 참조하려면 [weak self], self를 미소유 참조하려면 [unowned reference]를 사용합니다.

```swift
class HTMLElement1 {
    let name: String
    let text: String?
    
    // 클로저를 strong reference
    lazy var asHTML: () -> String = {
        [unowned self] in
        // 클래스 인스턴스 text를 unowned reference
        if let text = self.text {
            // 클래스 인스턴스 text를 unowned reference
            return "<\(self.name)>\(text)</\(self.name)>"
        } else {
            // 클래스 인스턴스 text를 unowned reference
            return "<\(self.name) />"
        }
    }
    
    init(name: String, text: String? = nil) {
        self.name = name
        self.text = text
    }
    
    deinit {
        print("\(name) is being deinitialized")
    }
}

var paragraph1: HTMLElement1? = HTMLElement1(name: "p", text: "hello world")
print(paragraph1!.asHTML())
paragraph1 = nil
// p is being deinitialized

```

강한 참조 순환이 발생하는지 확인할 수 있는 방법의 하나는 deinit 메서드를 활용하는 것입니다. 마땅히 해제되어야 할 인스턴스가 해제되지 않는다면 deinit이 호출되지 않으므로 명시적으로 알아차릴 수 있습니다.

😎

### 참고 링크

---

> [Swift Automatic Reference Counting](https://docs.swift.org/swift-book/LanguageGuide/AutomaticReferenceCounting.html)
>
> [iOS 10 Programming Fundamentals with Swift](http://www.apeth.com/swiftBook/ch05.html#_memory_management)
>
> [클로저 캡쳐에 대해서 (about closure capture)](https://velog.io/@kimdo2297/클로져-캡쳐에-대해서-about-closure-capture)
>
> [Swift) 클로저(Closure) 정복하기(3/3) - 클로저와 ARC](https://babbab2.tistory.com/83)
>
> [unowned vs unowned(safe) vs unowned(unsafe)](https://eastjohntech.blogspot.com/2019/12/unowned-vs-unownedsafe-vs-unownedunsafe_71.html)