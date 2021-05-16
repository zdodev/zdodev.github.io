---
title: "오늘의 지식: Test Driven Development"
categories: 
  - Software Engineering
last_modified_at: 2021-05-16 23:30:00
toc: true #Table of Contents
comments: true


---

### 생각의 전환

'어떤 기능을 구현하는데 어떤 객체를 만들까?' 이런 생각을 다음과 같이 바꿔보자.

'우선 어떤 테스트를 작성해야 할까?'

테스트를 작성할 때는 오퍼레이션의 완벽한 인터페이스를 상상해보는 것이 좋다.

다음과 같은 테스트 코드가 있다. 테스트 코드를 작성하고 테스트를 수행해보자.

```swift
func test_multiplication() {
    let five = Dollar(5)
    five.times(2)
    XCTAssertEqual(10, five.amount)
}
```

당연히 통과하지 못한다. 이 테스트를 통과하기 위해 무엇을 해야 할까?

테스트를 통과하기 위한 최소한의 할 일 리스트를 나열해보자.

- `Cannot find 'Dollar' in scope` Dollar 타입이 없다.
- `Argument passed to call that takes no arguments` Dollar 타입의 이니셜라이저에 매개변수가 없다.
- `Value of type 'Dollar' has no member 'times'` Dollar 타입에 times 멤버가 없다.
- `Value of type 'Dollar' has no member 'amount'` Dollar 타입에 amount 멤버가 없다.

### Cannot find 'Dollar' in scope

`Dollar` 타입이 없다고 한다. Dollar 타입을 만들어주자.

```swift
// 타입 정의
struct Dollar {
}
```

### Argument passed to call that takes no arguments

Dollar 타입의 이니셜라이저에 매개변수가 없다고 한다. 이니셜라이저를 만들고 매개변수를 하나 선언하자.

```swift
struct Dollar {
    // 이니셜라이저 정의
    init(_ amount: Int) {
    }
}
```

### Value of type 'Dollar' has no member 'times'

Dollar 타입에 time이라는 멤버가 없다고 한다. times 멤버를 만들고 매개변수를 하나 선언하자.

```swift
struct Dollar {
    init(_ amount: Int) {
    }
    
    // times 정의
    func times(_ multiplier: Int) {
    }
}
```

### Value of type 'Dollar' has no member 'amount'

Dollar 타입에 amount라는 멤버가 없다고 한다. amount 멤버를 만들자.

```swift
struct Dollar {
    // amount 정의
    let amount: Int = 0
    
    init(_ amount: Int) {
    }
    
    func times(_ multiplier: Int) {
    }
}
```

테스트를 수행할 수 있는 최소한의 기능 구현을 마쳤다. (컴파일 되도록) 이제 테스트를 다시 수행해보자.

### XCTAssertEqual failed: ("10") is not equal to ("0")

테스트에서는 기대하는 값이 10이지만 five.amount의 값은 0이라고 한다. 테스트가 실패한다. 여기서 테스트를 통과하기 위해 최소한의 작업을 해보자.

```swift
struct Dollar {
    let amount: Int = 0
    
    init(_ amount: Int) {
    }
    
    mutating func times(_ multiplier: Int) {
        self.amount = 10
    }
}
```

다시 테스트를 수행하면 통과하는 것을 확인할 수 있다. 이제 코드를 일반화하는 방식으로 개선해보자. 먼저 amount를 매개변수의 값으로 초기화하자.

```swift
struct Dollar {
    var amount: Int
    
    init(_ amount: Int) {
        // 매개변수 값으로 초기화
        self.amount = amount
    }
    
    mutating func times(_ multiplier: Int) {
        self.amount = 10
    }
}
```

다음으로 amount에 multiplier 값을 곱하는 방식으로 개선할 수 있다.

```swift
struct Dollar {
    var amount: Int
    
    init(_ amount: Int) {
        self.amount = amount
    }
    
    mutating func times(_ multiplier: Int) {
        amount *= multiplier
    }
}
```

테스트의 주기는 다음과 같다.

1. 테스트를 하나 작성한다.
2. 테스트에 필요한 코드를 작성하고 테스트가 실패하는 것을 확인한다.
3. 테스트를 통과할 수 있도록 최소한의 수정을 한다.
4. 테스트를 통과하는 것을 확인한다.
5. 중복을 제거하기 위해 리팩토링을 한다.

### 참고 링크

---

> [Test Driven Development: By Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)