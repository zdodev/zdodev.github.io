---
title: "iOS Xcode IB 친구들에 대해서"
categories: 
  - iOS
last_modified_at: 2021-04-12 00:30:00
toc: true #Table of Contents
comments: true


---

Xcode에서 `IB`는 `Interface Builder`를 의미합니다. 따라서 앞으로 나오는 IB 친구들은 스토리보드와 관련이 있습니다.

## @IBOutlet

스토리보드에서 생성한 객체(컴포넌트)와 소스코드를 연결하여 해당 객체를 제어할 때 사용합니다. @IBOutlet 변수로 연결하면 스토리보드 객체에 접근할 수 있습니다.

## @IBAction

스토리보드에서 생성한 객체(컴포넌트)와 소스코드를 연결하여 해당 객체에서 발생한 이벤트를 처리할 때 사용합니다. @IBAction 메서드로 연결하면 해당 객체에 이벤트가 발생할 때 연결한 메서드를 실행하고 이벤트를 처리합니다.

## @IBDesignable

스토리보드에서 생성한 객체(컴포넌트)와 소스코드를 연결하여 해당 객체의 현재 속성을 스토리보드에 반영하여 뷰를 그려줍니다. @IBDesignable 클래스로 연결하면 실행하지 않고도 뷰를 정의한 모습 그대로 스토리보드에서 확인할 수 있습니다.

## @IBInspectable

스토리보드에서 생성한 객체(컴포넌트)와 소스코드를 연결하여 소스코드에서 정의한 프로퍼티의 값을 스토리보드에서 변경할 수 있습니다. @IBInspectable 프로퍼티로 연결하면 스토리보드 attributes inspector에 해당 프로퍼티가 등록되어 쉽게 변경할 수 있습니다.

## @IBSegueAction

@IBSegueAction 이라는 친구도 있습니다. Xcode 11에서 추가된 친구인데 어떤 친구인지 좀 더 확인이 필요해보입니다.

### 참고 URL

---

>   https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-11-release-notes
>
>   https://sarunw.com/posts/better-dependency-injection-for-storyboards-in-ios13/

