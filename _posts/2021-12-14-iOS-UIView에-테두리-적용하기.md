---
title: "iOS UIView에 테두리 적용하기"
categories:
  - iOS
last_modified_at: 2021-12-14 12:00:00
toc: true #Table of Contents
comments: true


---

UIView 전체 테두리를 적용하기 위해서는 뷰의 layer 프로퍼티를 사용하면 됩니다.

```swift
let myView = UIView(frame: CGRect(x: 0, y: 0, width: 50, height: 50))
// 테두리 굵기 설정
myView.layer.borderWidth = 1.0
// 테두리 색상 설정
myView.layer.borderColor = UIColor.blue.cgColor
view.addSubview(myView)
```

UIView의 특정 부분만 테두리를 적용하기 위해서는 다른 방법을 적용해야 합니다.

```swift
// CALayer에 익스텐션 추가
extension CALayer {
    func addBorder(_ edges: [UIRectEdge], color: UIColor, width: CGFloat) {
        for edge in edges {
            let border = CALayer()
            switch edge {
            case .top:
                addBorderEdge(border, x: 0, y: 0, width: frame.width, height: width)
            case .bottom:
                addBorderEdge(border, x: 0, y: frame.height - width, width: frame.width, height: width)
            case .left:
                addBorderEdge(border, x: 0, y: 0, width: width, height: frame.height)
            case .right:
                addBorderEdge(border, x: frame.width - width, y: 0, width: width, height: frame.height)
            default:
                break
            }
        }
        
        func addBorderEdge(_ border: CALayer, x: CGFloat, y: CGFloat, width: CGFloat, height: CGFloat) {
            border.frame = CGRect(x: x, y: y, width: width, height: height)
            border.backgroundColor = color.cgColor
            addSublayer(border)
        }
    }
}

// 뷰에서 사용
myView.layer.addBorder([.bottom, .left], color: .blue, width: 1)
```

### 참고 URL

---

>   [Apple UIView layer](https://developer.apple.com/documentation/uikit/uiview/1622436-layer)
