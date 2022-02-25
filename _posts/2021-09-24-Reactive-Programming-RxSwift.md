---
title: "Reactive Programming RxSwift"
categories:
  - Swift
last_modified_at: 2021-09-29 15:00:00
toc: true #Table of Contents
comments: true


---

### 리액티브(반응형) 프로그래밍이란?

>   리액티브 프로그래밍은 데이터 스트림의 변화와 전파에 관련된 선언형 프로그래밍 패러다임입니다. 이 패러다임은 배열과 같은 정적 데이터와 발생 이벤트와 같은 동적 데이터 스트림을 쉽게 표현할 수 있습니다. 또한 변경된 데이터 플로우의 전달을 쉽게 합니다.

### ReactiveX란?

리액티브 프로그래밍을 구현하기 위한 API입니다. 여러 리액티브 프로그래밍을 구현하기 위한 구현체 중 하나입니다.

### RxSwfit란?

리액티브 프로그래밍을 Swift에서 구현하기 위한 API입니다. 다른 많은 Swift 리액티브 API 구현체가 존재합니다.

### Combine이란?

애플에서 구현한 리액티브 프레임워크입니다. 비동기 이벤트 및 이벤트 처리 연산자를 사용할 수 있습니다. RxSwift 서드파티 라이브러리라면 Combine은 퍼스트파티라고 볼 수 있습니다.

### Observable

Observable은 ObservableType 프로토콜을 따르는 클래스입니다.

```swift
public class Observable<Element>: ObservableType
```

상태를 가지고 있지 않습니다. 하나의 Observable을 다중 subscribe해도 각 subscribe마다 각각의 observer 코드가 실행되고 결과를 전달합니다.

### Subject

Subject는 Observable을 상속하고 ObserverType 프로토콜을 채택하는 클래스입니다. 

```swift
public final class PublishSubject<Element>: Observable<Element>, SubjectType, Cancelable, ObserverType, SynchronizedUnsubscribeType
```

상태를 가지고 있습니다. 하나의 Subject를 다중 subscribe하면 모든 구독자가 하나의 실행 결과값을 받을 수 있습니다.

### Observable 살펴보기

데이터를 그대로 발행하는 observable의 just 연산자를 살펴봅시다. just 연산자는 ObservableType 프로토콜에서 선언 및 구현하고 있습니다. 구현 내용으로는 Just 클래스를 생성하여 반환합니다. 이제 Just 클래스를 살펴봅시다.

```swift
extension ObservableType {
    public static func just(_ element: Element) -> Observable<Element> {
        Just(element: element)
    }
}
```

Just 클래스는 Producer 클래스를 상속하고 subscribe 메서드를 가지고 있습니다. Just 클래스의 subscribe 메서드는 전달받은 observer에 element를 전달하고 completed를 호출합니다.

```swift
final private class Just<Element>: Producer<Element> {
    private let element: Element
    
    init(element: Element) {
        self.element = element
    }
    
    override func subscribe<Observer: ObserverType>(_ observer: Observer) -> Disposable where Observer.Element == Element {
        observer.on(.next(self.element))
        observer.on(.completed)
        return Disposables.create()
    }
}
```

ObservableType 프로토콜의 just 메서드(연산자)에서 알 수 있듯이 just는 observable을 생성, 반환합니다. 생성된 observable은 이후에 subscribe하여 데이터를 전달받게 됩니다.

### 참고 URL

---

> [Wikipedia Reactive programming](https://en.wikipedia.org/wiki/Reactive_programming)
>
> [Wikipedia Functional reactive programming](https://en.wikipedia.org/wiki/Functional_reactive_programming)
>
> [ReactiveX](http://reactivex.io/)
>
> [Why use Rx?](https://zeddios.tistory.com/689)
>
> [[RxSwift] 들어가기 전에 시리즈](https://sujinnaljin.medium.com/rxswift-%EC%8B%9C%EC%9E%91-497dfada1e22)
>
> [1. RxJava - Rxjava란? 시리즈](https://imleaf.tistory.com/28?category=911174)
>
> [RxSwift vs Combine - 스펙 / 성능 개념 비교](https://eunjin3786.tistory.com/67)
>
> [Combine (1) - Publisher, Subscriber 시리즈](https://zeddios.tistory.com/925?category=842493)
> 
> [Combine 🤝 RxSwift 🤝 ReactiveSwift](https://presto95.gitbook.io/combine-rxswift-reactiveswift/)