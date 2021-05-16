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

### 참고 링크

---

> [Test Driven Development: By Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)