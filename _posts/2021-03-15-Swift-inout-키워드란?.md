---
title: "Swift inout 키워드란?"
categories: 
  - Swift
last_modified_at: 2021-03-15 10:47:00
toc: true #Table of Contents
comments: true


---

### inout

일반적인 Swift 함수의 파라미터는 상수입니다. 따라서 변경할 수 없습니다. 함수에 전달된 파라미터는 값이 복사되어 전달되기 때문에 원본 값에도 영향을 미치지 않습니다. 그러나 때에 따라 변경 가능한 파라미터를 전달하고 파라미터를 변경할 수 있는 방법이 있습니다. `inout` 키워드를 사용하면 전달한 파라미터를 변경할 수 있고 그 변경 내용이 원본 값에도 영향을 미칩니다.

`inout` 키워드를 사용하여 더하기를 할 수 있는 함수를 정의하고 그 값을 변경해보겠습니다.

```swift
func add(number: inout Int) {
    number += 1
}
```

이 함수를 사용하기 위해서는 변수를 사용해야 합니다. `inout` 키워드로 인한 값의 변경이 있을 수 있기 때문에 상수를 전달할 수 없습니다. 그리고 호출 시 `&`기호를 사용하여 호출해야 합니다.

```swift
var myNumber = 10
add(number: &myNumber)
print(myNumber)
// 11
```

inout 키워드는 변수의 주소를 전달하며 파라미터를 변경하면 실제 원본의 값도 변경되는 것을 확인할 수 있습니다.