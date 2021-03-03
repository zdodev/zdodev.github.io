---
title: "UML Class Diagram"
categories: 
  - UML
  - Swift
last_modified_at: 2021-03-03 16:29:00
toc: true #Table of Contents
comments: true

---

Class Diagram, 클래스 다이어그램

클래스 다이어그램은 클래스 내부의 정적인 내용이나 클래스 사이의 관계를 표현할 수 있는 다이어그램이다. 클래스 내부의 변수, 메서드를 표현하고 각 클래스간의 관계(상속, 참조 등)을 나타낼 수 있다. 한 마디로 소스코드에 나타난 타입간의 의존 관계를 모두 나타낸다.

클래스 다이어그램의 구성 요소

![2021-03-03-4-34-52-class-diagram-element](/assets/image/2021-03-03-4-34-52-class-diagram-element.png)

- abstract: 추상 클래스는 구현체가 없는 1개 이상의 추상 메서드를 가지고 있는 클래스입니다.
- annotation: annotation의 경우 Java 5에서 추가된 기능으로 @Override, @Deprecated 와 같은 annotation이 있다.
- class: 객체지향 언어에서의 클래스입니다.
- entity: 시스템이 동작할 때 오랫동안 그 값이 유지되어야 하는 클래스?
- enum: 열거형을 나타냅니다.
- interface: 인터페이스를 나타냅니다.

## 관계의 종류

클래스간에는 다양한 관계가 있을 수 있으며 표현 방식도 다양합니다.

### Association, 연관 관계

다른 객체의 참조를 가지는 인스턴스 변수를 가지고 있을 때 두 클래스는 연관 관계라고 한다. 아래 그램은 Phone 클래스가 Button 클래스를 참조하는 연관 관계를 보여줍니다.

![2021-03-03-5-06-02-association](/assets/image/2021-03-03-5-06-02-association.png)

연관 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.

```swift
class Phone {
  	// buttons 프로퍼티의 타입이 Button 클래스
    let buttons: Button = Button()
}

class Button {
    
}
```

