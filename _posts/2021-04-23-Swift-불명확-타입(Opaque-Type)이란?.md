---
title: "Swift 불명확 타입(Opaque Type)이란?"
categories: 
  - Swift
last_modified_at: 2022-02-28 12:00:00
toc: true #Table of Contents
comments: true


---

## Swift 불명확 타입

결론부터 말하자면 어떤 프로토콜을 준수하는 불명확 타입 또는 특정 클래스를 말합니다. 불명확 타입은 함수나 메서드에서 반환 값의 실제 타입 정보를 숨긴 채 어떠한 값을 반환합니다.

제네릭의 경우 메서드를 호출하는 쪽에서 구체적인 타입을 지정하기 때문에 메서드 호출부에 의존성이 생깁니다. 불명확 타입을 반환하는 메서드는 메서드 구현부에서 함수 호출 부분과 관계없이 구현할 수 있으며 반환 값 또한 어떠한 프로토콜을 준수하는 타입 또는 클래스를 반환하면 됩니다.

불명확 타입은 `some` 키워드 뒤에 타입을 입력하여 사용합니다. Swift 공식 문서에서는 프로토콜을 채택한 예제만 있지만 불명확 타입이 될 수 있는 것은 프로토콜, 클래스, AnyObject, Any가 있습니다.

> An 'opaque' type must specify only 'Any', 'AnyObject', protocols, and/or a base class
>
> some Any
>
> some AnyObject
>
> some Equatable
>
> some NSObject

프로토콜을 하나 정의합니다.

```swift
protocol Beverage {
    var count: Int { get }
}
```

그 다음 이 프로토콜을 준수하는 타입을 만듭니다.

```swift
struct Milk: Beverage {
    var count = 10
}
```

그 다음 정의한 프로토콜을 반환 타입으로 가지는 함수를 정의합니다.

```swift
func test() -> Beverage {
    Milk()
}
```

불명확 타입의 설명이 꼭 프로토콜을 반환 타입으로 지정 못하게 설명되어 있는 것처럼 느껴졌는데 위 코드를 컴파일하면 문제없이 컴파일하고 사용할 수 있습니다.

그런데 프로토콜을 반환 타입으로 사용하지 못하는 경우가 있습니다. 바로 프로토콜에 연관타입을 사용할 때 입니다. 위 코드의 프로토콜에 연관타입을 추가해보았습니다.

```swift
protocol Beverage {
    associatedtype MyType
    
    var count: MyType { get }
}

struct Milk: Beverage {
    var count = 10
}

func test() -> Beverage { // 여기에서 에러 발생!
    Milk()
}
```

test() 메서드에서 에러가 발생합니다. 에러 내용은 다음과 같습니다.

> Protocol 'Beverage' can only be used as a generic constraint because it has Self or associated type requirements.

Self 또는 연관타입에 대한 요구사항이 있기 때문에 사용할 수 없다는 것 입니다. 여기에서 불명확 타입을 적용하면 해당 프로토콜 타입을 반환 타입으로 사용할 수 있습니다.

```swift
func test() -> some Beverage {
    Milk()
}

let beverage = test() // beverage의 타입은 some Beverage
print(beverage.count)
```

불명확 타입을 적용하면 정상적으로 실행을 할 수 있습니다. 불명확 타입은 구체적인 타입(Milk)을 감추고 어떠한 프로토콜을 따른다는 값을 반환할 때 유용하게 사용할 수 있습니다.

불명확 타입을 반환하는 것과 프로토콜을 반환하는 것의 차이점은 타입의 정체성(identity) 유무의 차이가 있습니다.

불명확 타입의 경우 동일한 구체 타입을 반환해야 하지만, 프로토콜의 경우 해당 프로토콜을 준수하는 어떠한 구체 타입이든 반환할 수 있습니다.

프로토콜을 반환한 타입은 다른 제네릭 타입에 사용할 수 없습니다.
> Protocol 'someProtocol' as a type cannot conform to the protocol itself

불명확 타입은 라이브러리, 프레임워크를 작성하거나 프로토콜을 리턴할 때 Self, associated 요구 사항을 가진 경우 사용할 수 있습니다.

### 참고 링크

---

> [Swift Opaque Types](https://docs.swift.org/swift-book/LanguageGuide/OpaqueTypes.html#)
>
> [[Swift 5.1] Opaque Result Types 그리고 some (SE-0244)](https://seorenn.tistory.com/30)