---
title: "린트(lint), 린터(linter)를 활용한 코딩스타일과 에러 검사하기"
categories: 
  - Swift
last_modified_at: 2021-04-21 00:30:00
toc: true #Table of Contents
comments: true


---

## 보다 나은 코드를 작성하기 위한 린트, 린터

린터 또는 린터는 프로그래밍 오류, 버그, 스타일 오류 및 의심스러운 구조에 플래그를 지정하는데 사용하는 정적 코드 분석도구입니다. 코딩스타일, 보다 나은 코드를 작성하기 위해 정해놓는 코딩 컨벤션을 가시적으로 적용하여 보여줄 수 있는 도구입니다.

Swift에서는 SwiftLint 라는 Swift Style Guide가 있습니다.

macOS에서는 다음과 같이 설치할 수 있습니다.

```bash
brew install swiftlint
```

적용은 프로젝트 -> 타겟(앱) > Build Phases -> 왼쪽 +(버튼) -> New Run Script Phase 로 들어가서 Run Script에 `swiftlint` 에 나와있는 스크립트 구문을 작성합니다.

```bash
if which swiftlint >/dev/null; then
  swiftlint
else
  echo "warning: SwiftLint not installed, download from https://github.com/realm/SwiftLint"
fi
```

swiftlint를 적용하면 다음과 같이 Xcode에서 보다 상세하게 코드 스타일 가이드를 받을 수 있습니다.

![2021-04-20 at 9.19.15 PM-swiftlint](/assets/image/2021-04-20 at 9.19.15 PM-swiftlint.png)

### 참고 링크

---

>   [Wikipedia lint](https://en.wikipedia.org/wiki/Lint_(software))
>
>   [SwiftLInt](https://github.com/realm/SwiftLint)