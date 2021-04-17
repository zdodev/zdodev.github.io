---
title: "소프트웨어(iOS)에서 Deprecated란?"
categories: 
  - iOS
last_modified_at: 2021-04-18 00:30:00
toc: true #Table of Contents
comments: true


---

## Deprecated

사전에서 `deprecate`를 검색하면 `반대, 비난하다` 라는 뜻이 나와서 애플에서 말하는 deprecated 용어가 명확하게 이해가 되지 않았습니다. 알아보니 소프트웨어에서 다른 의미로 이해할 수 있었습니다.

-   중요도가 떨어져 더 이상 사용하지 않고 앞으로 사라지게 될 (컴퓨터 시스템 등) 기능을 말한다.

-   어떤 기능을 아직 사용하고 있지만 새로운 기능이 나왔기 때문에 조만간 사라지게 될 상태를 말한다.

deprecated 될 기능은 iOS 하위 버전에서는 지원하지만 보다 최신 버전에서는 더 좋은 기능이 나왔기 때문에 이후 지원이 종료될 기능입니다. 예를 들어 `UIWebView` 는 iOS 12까지 지원합니다. 그 대안으로 나온 기능은 `WebKit` 프레임워크의 `WKWebView` 입니다. 따라서 iOS 13부터는 `WKWebView` 를 사용해야 합니다. (물론 `WKWebView` 는 iOS 8부터 지원하기 때문에 미리 적용하면 좋겠습니다.)

### 참고 링크

---

>   [네이버 사전 deprecated](https://en.dict.naver.com/#/entry/enko/c4dbe94228834e2597a64ca4094f3f22)