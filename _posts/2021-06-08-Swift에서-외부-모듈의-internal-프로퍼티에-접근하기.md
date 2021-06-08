---
title: "Swift에서 외부 모듈의 internal 프로퍼티에 접근하기"
categories: 
  - Swift
last_modified_at: 2021-06-08 12:00:00
toc: true #Table of Contents
comments: true


---

원래 Swift에서는 외부 모듈의 internal 프로퍼티에 당연히? 접근할 수 없습니다. 접근레벨이 public이거나 open인 경우에만 외부에서 사용할 수 있습니다.

그런데 외부 모듈의 internal 프로퍼티에 접근할 수 있는? 케이스가 있습니다. UIAlertAction을 예로 설명해보겠습니다.

```swift
let action = UIAlertAction(title: "title", style: .default) { _ in
	print("alert!")
}

// 에러, handler는 공개되어 있지 않습니다.
let handler = action.handler??
```

위와 같은 UIAlertAction 코드가 있을 때 외부에서 handler에 접근할 방법이 없습니다. 그런데 다음과 같은 방법으로 handler에 접근할 수 있습니다.

```swift
// value(forKey:) 메서드를 통한 접근
let actionHandler = action.value(forKey: "handler")!
print(actionHandler)
// <__NSMallocBlock__: 0x600003c735a0>
```

handler를 가져왔지만, 타입이 NSMallocBlock 입니다. 이제 이것을 사용할 수 있도록 타입 캐스팅을 해보도록 하겠습니다. (위에서 정의한 handler의 타입은 `(UIAlertAction) -> Void` 입니다. 즉 함수인데, 첫 번째 소스코드에서 클로저를 전달한 것을 볼 수 있습니다.)

```swift
typealias AlertHandler = @convention(block) (UIAlertAction) -> Void

let actionHandler = action.value(forKey: "handler")!
let blockPtr = UnsafeRawPointer(Unmanaged<AnyObject>.passUnretained(actionHandler as AnyObject).toOpaque())
let handler = unsafeBitCast(blockPtr, to: AlertHandler.self)
handler(action)
// alert!!
```

handler를 타입 캐스팅하기 위해서는 위와 같은 과정이 필요합니다. actionHandler의 주소를 가져와서 변환?하는 것으로 보입니다.🤔 이러한 방식을 이용하면 다른 타입도 접근하여 가져올 수 있다고 보입니다.

반대로 외부 모듈의 internal 프로퍼티에 값을 할당할 수도 있습니다. 이때는 `setValue(forKey:)` 메서드를 사용합니다.

### 참고 URL

---

> [참고 사이트](https://www.coder.work/article/409963)
