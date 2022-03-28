---
title: "UIKit에서 SwiftUI 프리뷰 사용하기"
categories:
  - UIKit
last_modified_at: 2021-03-28 11:30:00
toc: true #Table of Contents
comments: true


---

모든 UIViewController에서 사용할 수 있도록 다음과 같이 extension을 구현합니다.

```swift
extension UIViewController {
    private struct Preview: UIViewControllerRepresentable {
        let viewController: UIViewController
        
        func makeUIViewController(context: Context) -> some UIViewController {
            viewController
        }
        
        func updateUIViewController(_ uiViewController: UIViewControllerType, context: Context) {
            
        }
    }
    
    func toPreview() -> some View {
        Preview(viewController: self)
    }
}
```

프리뷰를 사용하고자 하는 뷰 컨트롤러 하단에 다음과 같이 선언합니다.

```swift
struct CounterView_Previews: PreviewProvider {
    static var previews: some View {
        CounterViewController().toPreview()
    }
}
```

이후 프리뷰(Canvas)를 활성화하면 다음과 같이 UIKit에서 프리뷰를 사용할 수 있습니다.

![2022-03-28-Preview](/assets/image/2022-03-28-Preview.png)

### 참고 URL

---

> [[iOS] UIKit에서 SwiftUI Preview 사용해보기](https://fomaios.tistory.com/entry/iOS-UIKit%EC%97%90%EC%84%9C-SwiftUI-Preview-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0)
