---
title: "UML Class Diagram with Swift"
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

- Association
- Inheritance, Generalization
- Implementation, Realization
- Dependency
- Aggregation
- Composition

### Association, 연관 관계

다른 객체의 참조를 가지는 인스턴스 변수를 가지고 있을 때 두 클래스는 연관 관계라고 합니다. 아래 그림은 Phone 클래스가 Button 클래스를 참조하는 연관 관계를 보여줍니다.

![2021-03-11 at 11.14.20 PM-association](/assets/image/2021-03-11 at 11.14.20 PM-association.png)

연관 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.

```swift
class Phone {
  	// buttons 프로퍼티의 타입이 Button 클래스
    let button: Button
}

class Button {
    
}
```

---

### Inheritance, Generalization, 상속 관계, 일반화 관계

객체지향 개념에서 상속을 나타내는 관계입니다. 한 클래스가 다른 클래스를 포함하는 상위 개념일 때 이를 일반화 관계라고 합니다. 아래 그림은 SalariedEmployee 클래스가 Employee 클래스를 상속하는 관계를 보여줍니다.

![2021-03-11 at 11.11.32 PM-Inheritance](/assets/image/2021-03-11 at 11.11.32 PM-Inheritance.png)

상속 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.

```swift
class Employee {
  
}

class SalariedEmployee: Employee {
  
}
```

---

### Implementation, Realization, 구현 관계, 실체화 관계

객체지향 개념에서 (인터페이스) 구현을 나타내는 관계입니다. 한 클래스가 인터페이스를 구현할 경우 이를 실체화 관계라고 합니다. 아래 그림은 ButtonListenerAdapter 클래스가 ButtonListener 프로토콜을 구현하는 관계를 보여줍니다.

![2021-03-11 at 11.20.38 PM-Implementation](/assets/image/2021-03-11 at 11.20.38 PM-Implementation.png)

구현 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.

```swift
protocol ButtonListener {
  
}

class ButtonListenerAdapter: ButtonListener {
  
}
```

---

### Dependency, 의존 관계

한 클래스가 다른 클래스를 참조하는 관계입니다. 한 클래스의 내부 프로퍼티에 저장하지 않고 사용하는 관계를 의존 관계라고 합니다. 아래 그림은 User 클래스가 Scheduel 클래스를 의존하는 관계를 보여줍니다.

![2021-03-11 at 11.23.54 PM-Dependency](/assets/image/2021-03-11 at 11.23.54 PM-Dependency.png)

의존 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.

```swift
class Schedule {
    func date() {
      
    }
}

class User {
    func createSchedule() -> Schedule {
        Schedule()
    }
  
    func useSchedule(schedule: Schedule) {
        schedule.date()
    }
}
```

---

### Aggregation, 집합 관계

클래스 사이에서 전체 또는 부분 같은 관계를 나타냅니다. 한 클래스가 다른 클래스를 내부 프로퍼티로 가지고 있지만 라이프 타임이 독립적인 관계를 집합 관계라고 합니다. 아래 그림은 Whole 클래스와 Part 클래스의 집합 관계를 보여줍니다.

![2021-03-11 at 11.26.46 PM-Aggregation](/assets/image/2021-03-11 at 11.26.46 PM-Aggregation.png)

집합 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.

```swift
class Part {
  
}

class Whole {
    let part: Part
		// 외부에서 Part를 받아옵니다. Whole 클래스가 deinit이 되어도 Part는 deinit 되지 않습니다.
    init(part: Part) {
        self.part = part
    }
}
```

---

### Composition, 합성 관계

클래스 사이에서 전체 또는 부분 같은 관계를 나타냅니다. 한 클래스가 다른 클래스를 직접 생성하고 내부 프로퍼티에 할당하여 가지고 있어 라이프 타임이 종속적인 관계를 합성 관계라고 합니다. 아래 그림은 Ward 클래스와 Owner 클래스가 합성 관계에 있는 것을 보여줍니다.

![2021-03-11 at 11.27.49 PM-Composition](/assets/image/2021-03-11 at 11.27.49 PM-Composition.png)

합성 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.

```swift
class Ward {
  
}

class Owner {
    let ward: Ward = Ward()
}
```

