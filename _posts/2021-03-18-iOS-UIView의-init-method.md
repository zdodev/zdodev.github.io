---
title: "iOS UIView의 init?(coder: NSCoder) 초기화 메서드란?"
categories: 
  - iOS
last_modified_at: 2021-03-18 00:15:00
toc: true #Table of Contents
comments: true


---

## iOS의 init?(coder: NSCoder) 메서드

UIView 클래스의 초기화 메서드를 보면 두 가지가 있습니다. 첫 번째 메서드는 이해가 가지만 두 번째 메서드가 이해가 가지 않아서 정리해보았습니다.

```swift
// UIView initializer method
init(frame: CGRect) // 첫 번째

init?(coder: NSCoder) // 두 번째
```

애플 공식 홈페이지에서 찾아봤습니다.

![2021-03-18 at 00.14.05 AM-init](/assets/image/2021-03-18 at 00.14.05 AM-init.png)

아무 설명이 없습니다.🤬

그래서 더 많은 검색을 시도하여 다음과 같은 결과를 확인했습니다.

첫 번째 `init(frame: CGRect)` 초기화 메서드는 `CGRect` 구조체에 정의된 위치와 크기를 통해 UIView를 생성합니다. 주로 코드로 UI를 개발할 때 사용합니다.

두 번째 `init?(coder: NSCoder)` 초기화 메서드는 코드로 생성하는 것이 아닌 스토리보드(또는 Xib)를 통해서 UIView를 생성할 때 사용합니다.

그래서 UIStoryboard에 대해서 찾아보았습니다.

![2021-03-18 at 00.15.05 AM-storyboard](/assets/image/2021-03-18 at 00.15.05 AM-storyboard.png)

다음과 같은 설명이 있습니다.

>   프로세스를 초기화하는 동안 UIStoryboard는 init(coder:) 메서드를 사용하여 프로그래밍 방식으로 뷰 컨트롤러를 생성합니다.

위에 적힌 내용처럼 init?(coder: NSCoder) 초기화 메서드는 스토리보드에서 사용하는 것을 알 수 있습니다.

### 참고 URL

---

- [UIView init?(coder: NSCoder)](https://developer.apple.com/documentation/uikit/uiview/1622477-init)
- [UIStoryboard](https://developer.apple.com/documentation/uikit/uistoryboard)