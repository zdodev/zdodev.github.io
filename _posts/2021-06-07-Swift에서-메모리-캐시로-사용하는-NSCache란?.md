---
title: "Swift에서 메모리 캐시로 사용하는 NSCache란?"
categories: 
  - Swift
  - iOS
last_modified_at: 2021-06-07 23:30:00
toc: true #Table of Contents
comments: true


---

NSCache는 데이터를 임시로 저장할 수 있는 컬렉션입니다. 딕셔너리처럼 키-값 형태로 데이터를 저장할 수 있습니다. Mutable한 타입으로 중간에 데이터를 변경할 수 있습니다. 그리고 시스템의 자원이 부족해지면 데이터가 제거될 수 있습니다. 이러한 특징으로 Swift에서 메모리 캐시에 사용합니다.

NSCache의 선언 형태는 다음과 같습니다.

```swift
class NSCache<KeyType, ObjectType> : NSObject where KeyType : AnyObject, ObjectType : AnyObject
```

NSCache는 다른 컬렉션(배열, 딕셔너리, 집합)과 몇 가지 다른 점이 있습니다.

- NSCache 클래스는 다양한 메모리 자동 제거 정책을 가지고 있습니다. 그래서 캐시가 시스템 메모리를 너무 많이 사용하지 않도록 합니다. 다른 애플리케이션에서 메모리가 필요한 경우 이러한 정책은 캐시에서 일부 항목을 제거하여 메모리 공간을 확보합니다.
- NSCache는 Thread-Safe합니다. 캐시에 락을 걸지 않아도 캐시에 데이터를 추가, 제거 및 요청을 자유롭게 할 수 있습니다.
- NSMutableDictionary 객체와 달리, NSCache는 키 객체를 복사하지 않습니다.

일반적으로 NSCache는 생성할 때 비용이 많이 필요한 데이터 객체를 임시로 저장할 때 사용합니다. 비용이 많이 드는 객체를 NSCache에 저장해두면 다시 생성할 비용이 필요 없어지기 때문에 성능상 이점을 얻을 수 있습니다. NSCache의 데이터는 메모리가 부족해지면 제거될 수 있습니다. 제거된 데이터를 다시 저장하기 위해서는 객체를 다시 생성해야 합니다.

### 참고 URL

---

> [Apple NSCache](https://developer.apple.com/documentation/foundation/nscache)
