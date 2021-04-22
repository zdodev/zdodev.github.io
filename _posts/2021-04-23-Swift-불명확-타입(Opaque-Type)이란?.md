---
title: "Swift 불명확 타입(Opaque Type)이란?"
categories: 
  - Swift
last_modified_at: 2021-04-23 01:30:00
toc: true #Table of Contents
comments: true


---

## Swift 불명확 타입

결론부터 말하자면 어떤 프로토콜을 준수하는 불명확 타입 또는 특정 클래스를 말합니다. 불명확 타입은 함수나 메서드에서 반환 값의 실제 타입 정보를 숨긴 채 어떠한 값을 반환합니다.

제네릭의 경우 메서드를 호출하는 쪽에서 구체적인 타입을 지정하기 때문에 메서드 호출부에 의존성이 생깁니다. 불명확 타입을 반환하는 메서드는 메서드 구현부에서 함수 호출 부분과 관계없이 구현할 수 있으며 반환 값 또한 어떠한 프로토콜을 준수하는 타입 또는 클래스를 반환하면 됩니다.

불명확 타입은 `some` 키워드 뒤에 타입을 입력하여 사용합니다. Swift 공식 문서에서는 프로토콜을 채택한 예제만 있지만 불명확 타입이 될 수 있는 것은 포로토콜, 클래스, AnyObject, Any가 있습니다.

> An 'opaque' type must specify only 'Any', 'AnyObject', protocols, and/or a base class
>
> some Any
>
> some AnyObject
>
> some Equatable
>
> some NSObject

### 참고 링크

---

> [Swift Opaque Types](https://docs.swift.org/swift-book/LanguageGuide/OpaqueTypes.html#)