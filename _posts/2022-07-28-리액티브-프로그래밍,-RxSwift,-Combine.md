---
title: "리액티브 프로그래밍, RxSwift, Combine"
categories:
  - iOS
  - Swift
  - RxSwift
  - Combine
last_modified_at: 2022-11-10 22:00:00
toc: true #Table of Contents
comments: true


---

# 리액티브 프로그래밍이란?

리액티브 프로그래밍이란 데이터 스트림 및 변경 전파와 관련된 선언적 프로그래밍 패러다임입니다. 보통의 명령형 프로그래밍은 작성한 명령문 순서대로 처리하지만, 리액티브 프로그래밍은 데이터의 흐름에 따라 동작합니다. 데이터의 발생, 가공, 전파를 중심으로 이루어진 프로그래밍 방식입니다.

개인적인 생각으로는 특정 이벤트(유저 인터랙션)가 발생하면 해당 이벤트에 따라 발생하는 일련의 모든 작업을 하나의 시퀀스적으로 동작하게 하여 구현해나가는 프로그래밍 방식이라는 느낌입니다.🧐

이러한 리액티브 프로그래밍의 구현체가 **ReactiveX** 라고 하는 라이브러리입니다. 언어별로 많은 구현체가 있지만, Swift 에서는 **RxSwift** 가 있습니다. RxSwift 는 서드파티 라이브러리이지만, Apple 공식 프레임워크인 **Combine** 도 있습니다. 리액티브 프로그래밍에 대한 구조와 동작 원리에 대한 이해가 있으면 RxSwift 와 Combine 을 쉽게 익힐 수 있을 거라 생각합니다.

## Observable

Observable 은 RxSwift 의 핵심입니다. Observable 은 정해진 생명 주기에 따라 이벤트를 생성합니다. 생성하는 이벤트는 그 어떤 것이든 될 수 있습니다. Observable 은 세 가지 이벤트를 생성하여 방출할 수 있습니다.

세 가지 이벤트는 다음과 같습니다.

```swift
/// **next\* (error | completed)**
@frozen public enum Event<Element> {
    /// Next element is produced.
    case next(Element)

    /// Sequence terminated with an error.
    case error(Swift.Error)

    /// Sequence completed successfully.
    case completed
}
```

next 이벤트는 생성한 데이터를 전달합니다. 에러(error)가 발생하거나 완료(completed)가 발생하지 않는 한 데이터를 계속 전달할 수 있습니다.

error 이벤트는 발생한 에러를 전달합니다. 에러 이벤트를 전달하면 Observable 의 이벤트 생성이 종료됩니다.

completed 이벤트는 데이터 전달의 완료를 전달합니다. 완료 이벤트를 전달하면 Observable 의 이벤트 생성이 종료됩니다.

Observable 은 구독하기 전까지 이벤트를 생성하지 않습니다. 구독을 해야만 이벤트를 전달합니다.

### Observable 종류

- Observable: 모든 이벤트를 발생시킬 수 있습니다. Observable 의 가장 기본이 되는 타입입니다.

```swift
/// AnyObserver.swift
switch event {
case .next(let value): // next 이벤트 전달
    onNext?(value)
case .error(let error): // error 이벤트 전달
    if let onError = onError {
        onError(error)
    }
    else {
        Hooks.defaultErrorHandler(callStack, error)
    }
    disposable.dispose() // Observable 종료
case .completed: // completed 이벤트 전달
    onCompleted?()
    disposable.dispose() // Observable 종료
```

Observable 은 다음과 같이 구독하여 사용할 수 있습니다.

```swift
Observable.just(1)
    .subscribe(onNext: { value in
        print(value)
    }, onError: { error in
        print(error)
    }, onCompleted: {
        print("completed")
    }, onDisposed: {
        print("disposed")
    })
    .disposed(by: disposeBag)
```


아래 Observable 은 Observable 의 특수한 형태로 사용하는 traits 입니다.

- Single: success 와 failure 이벤트를 발생시킬 수 있습니다. Observable 의 `Result` 타입 버전이라고 생각할 수 있습니다. success 이벤트는 단 하나의 데이터를 전달하고 종료하는 이벤트입니다. failure 이벤트는 error 이벤트처럼 에러 이벤트를 전달하고 종료하는 이벤트입니다.

```swift
/// Single.swift
public static func create(subscribe: @escaping (@escaping SingleObserver) -> Disposable) -> Single<Element> {
    let source = Observable<Element>.create { observer in
        return subscribe { event in
            switch event {
            case .success(let element): // success 이벤트
                observer.on(.next(element)) // 데이터를 전달하고
                observer.on(.completed) // 종료합니다.
            case .failure(let error): // failure 이벤트
                observer.on(.error(error)) // 에러를 전달합니다.
            }
        }
    }
    
    return PrimitiveSequence(raw: source)
}
```

Single 은 다음과 같이 구독하여 사용할 수 있습니다.

```swift
Single.just(1)
    .subscribe(onSuccess: { value in
        print(value)
    }, onFailure: { error in
        print(error)
    }, onDisposed: {
        print("onDisposed")
    })
    .disposed(by: disposeBag)
```

- Completable: completed 와 error 이벤트를 발생시킬 수 있습니다. 데이터는 전달할 수 없으며, 완료 또는 에러 이벤트만을 발생시킬 때 사용할 수 있습니다.

```swift
public static func create(subscribe: @escaping (@escaping CompletableObserver) -> Disposable) -> PrimitiveSequence<Trait, Element> {
    let source = Observable<Element>.create { observer in
        return subscribe { event in
            switch event {
            case .error(let error): // error 이벤트
                observer.on(.error(error))
            case .completed: // completed 이벤트
                observer.on(.completed)
            }
        }
    }
    
    return PrimitiveSequence(raw: source)
}
```

Completable 은 다음과 같이 구독하여 사용할 수 있습니다.

```swift
let completable = Completable.create { observer in
    let data = "data".data(using: .utf8)!
    
    do {
        _ = try JSONDecoder().decode(String.self, from: data)
        observer(.completed)
    } catch {
        observer(.error(error))
    }
    return Disposables.create()
}

completable.subscribe(onCompleted: {
    print("onCompleted")
}, onError: { error in
    print(error)
}, onDisposed: {
    print("onDisposed")
})
.disposed(by: disposeBag)
```

- Maybe: success, error, completed 이벤트를 발생시킬 수 있습니다. success 이벤트는 데이터를 전달하고 completed 이벤트를 전달합니다. error 이벤트는 에러 이벤트를 전달합니다. completed 이벤트는 완료 이벤트를 전달합니다.

```swift
public static func create(subscribe: @escaping (@escaping MaybeObserver) -> Disposable) -> PrimitiveSequence<Trait, Element> {
    let source = Observable<Element>.create { observer in
        return subscribe { event in
            switch event {
            case .success(let element): // success 이벤트
                observer.on(.next(element)) // 데이터를 전달하고
                observer.on(.completed) // 완료 이벤트 전달
            case .error(let error): // 에러 이벤트
                observer.on(.error(error))
            case .completed: // 완료 이벤트
                observer.on(.completed)
            }
        }
    }
    
    return PrimitiveSequence(raw: source)
}
```

Maybe 은 다음과 같이 구독하여 사용할 수 있습니다.

```swift
Maybe.just(1)
    .subscribe(onSuccess: { value in
        print(value)
    }, onError: { error in
        print(error)
    }, onCompleted: {
        print("onCompleted")
    }, onDisposed: {
        print("onDisposed")
    })
    .disposed(by: disposeBag)
```

- Infallible: next, completed 이벤트를 발생시킬 수 있습니다. 데이터 전달 또는 완료 이벤트만을 할 수 있으며, error 이벤트를 전달하지 않아 실패하지 않는 형태의 Observable 입니다.

```swift
public static func create(subscribe: @escaping (@escaping InfallibleObserver) -> Disposable) -> Infallible<Element> {
    let source = Observable<Element>.create { observer in
        subscribe { event in
            switch event {
            case .next(let element): // next 이벤트
                observer.onNext(element)
            case .completed: // completed 이벤트
                observer.onCompleted()
            }
        }
    }

    return Infallible(source)
}
```

Infallible 은 다음과 같이 구독하여 사용할 수 있습니다.

```swift
Infallible.just(1)
    .subscribe(onNext: { value in
        print(value)
    }, onCompleted: {
        print("onCompleted")
    }, onDisposed: {
        print("onDisposed")
    })
    .disposed(by: disposeBag)
```

- (RxCocoa) Driver: onNext, onCompleted 처리, MainScheduler

```swift
public func drive(
    onNext: ((Element) -> Void)? = nil,
    onCompleted: (() -> Void)? = nil,
    onDisposed: (() -> Void)? = nil
) -> Disposable
```

- (RxCocoa) Signal: onNext, onCompleted 처리, MainScheduler

```swift
public func emit(
    onNext: ((Element) -> Void)? = nil,
    onCompleted: (() -> Void)? = nil,
    onDisposed: (() -> Void)? = nil
) -> Disposable
```

### Subscribe 종류

- subscribe: Observable 기본 구독 방식

```swift
public func subscribe(
    onNext: ((Element) -> Void)? = nil,
    onError: ((Swift.Error) -> Void)? = nil,
    onCompleted: (() -> Void)? = nil,
    onDisposed: (() -> Void)? = nil
) -> Disposable
```

- (RxCocoa) bind: onError 를 처리하지 않는 구독 방식

```swift
public func bind(onNext: @escaping (Element) -> Void) -> Disposable
```

- (RxCocoa) drive: onError 를 처리하지 않고 메인 스케줄러에서만 동작하는 구독 방식

```swift
public func drive(
    onNext: ((Element) -> Void)? = nil,
    onCompleted: (() -> Void)? = nil,
    onDisposed: (() -> Void)? = nil
) -> Disposable
```

- (RxCocoa) emit: onError 를 처리하지 않고 메인 스케줄러에서만 동작하는 구독 방식

```swift
public func emit(
    onNext: ((Element) -> Void)? = nil,
    onCompleted: (() -> Void)? = nil,
    onDisposed: (() -> Void)? = nil
) -> Disposable
```

### Subject 종류, 정해진 데이터 뿐만 아니라, 새로운 데이터를 내보낼 수 있다.

- Subject: Async, Behavior, Publish, Replay

```swift
public func subscribe(
    onNext: ((Element) -> Void)? = nil,
    onError: ((Swift.Error) -> Void)? = nil,
    onCompleted: (() -> Void)? = nil,
    onDisposed: (() -> Void)? = nil
) -> Disposable
```

- (RxRelay) Relay: onNext 이벤트만을 처리한다.

```swift
public func accept(_ event: Element) {
    self.subject.onNext(event)
}
```

### 참고 URL

---

> [ReactiveX](https://reactivex.io)

> [리액티브 선언 (Reactive Menifesto)](https://www.reactivemanifesto.org)
