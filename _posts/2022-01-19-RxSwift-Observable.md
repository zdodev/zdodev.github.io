---
title: "RxSwift Observable"
categories:
  - iOS
last_modified_at: 2021-01-19 00:30:00
toc: true #Table of Contents
comments: true


---

`Observable` 정의

```swift
public class Observable<Element>: ObservableType {
    // ObservableType 프로토콜 요구 사항
    public func subscribe<Observer: ObserverType>(_ observer: Observer) -> Disposable {}
    public func asObservable() -> Observable<Element> {}
}
```

`ObservableType` 정의

```swift
public protocol ObservableType: ObservableConvertibleType {
    func subscribe<Observer: ObserverType>(_ observer: Observer) -> Disposable
}

extension ObservableType {
    public func asObservable() -> Observable<Element> {}
}

extension ObservableType {
    public func subscribe(_ on: @escaping (Event<Element>) -> Void) -> Disposable
    public func subscribe<Object: AnyObject>(
        with object: Object,
        onNext: ((Object, Element) -> Void)? = nil,
        onError: ((Object, Swift.Error) -> Void)? = nil,
        onCompleted: ((Object) -> Void)? = nil,
        onDisposed: ((Object) -> Void)? = nil
    ) -> Disposable
    public func subscribe(
        onNext: ((Element) -> Void)? = nil,
        onError: ((Swift.Error) -> Void)? = nil,
        onCompleted: (() -> Void)? = nil,
        onDisposed: (() -> Void)? = nil
    )
}
```

`Observable` 에 생성된, 정의된 스트림에서 방출되는 데이터를 받아서 로직을 수행합니다.

"`Observable` 이 데이터를 방출하면 그것을 가지고 연산을 수행하면 된다."

구독하는 동안에는 `Observable`이 데이터를 방출한다.

`Observable` 이 발생시키는 이벤트

- onNext: Action to invoke for each element in the observable sequence.
- onError: Action to invoke upon errored termination of the observable sequence.
- onCompleted: Action to invoke upon graceful termination of the observable sequence.
- onDisposed: Action to invoke upon any type of termination of sequence.

### 참고 URL

---

> [ReactiveX](https://reactivex.io)
