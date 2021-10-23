---
title: "Swift 두 Dictionary 합치는 법(merge, merging)"
categories:
  - Swift
last_modified_at: 2021-10-23 15:30:00
toc: true #Table of Contents
comments: true


---

덧셈 연산자를 통해서 두 값을 합칠 수 있는 타입들이 많습니다. 배열이라든지 문자열이라든지 그런데 Dictionary에서는 덧셈 연산이 없어서 두 Dictionary를 합칠 수 있는 방법에 대해 알아보았습니다.

Swift에서 두 Dictionary를 합치기 위해서 `merge` 또는 `merging` 메서드를 이용합니다. 두 메서드의 차이는 연산 결과를 반환하느냐 안 하느냐에 따른 차이가 있습니다.

바로 예제 코드로 넘어가면

```swift
// dictA는 고유의 "z" 키를 가지고 있습니다. 나머지는 같은 키값입니다.
let dictA = ["x" : 1, "y": 2, "z": 3]
// dictBs는 고유의 "w" 키를 가지고 있습니다. 나머지는 같은 키값입니다.
let dictB = ["x" : 11, "y": 22, "w": 0]

// dictA와 dictB를 합쳐보겠습니다.
let resultA = dictA.merging(dictB, uniquingKeysWith: { (first, second) in
    print(first, second)
    return first
})
let resultB = dictA.merging(dictB, uniquingKeysWith: { (first, second) in
    print(first, last)
    return last
})

// 두 Dictionary가 합쳐지긴 했지만 uniquingKeysWith 클로저에 따라 결과가 달라지는 것을 볼 수 있습니다.
// resultA는 중복된 키에 대해서 첫 번째 Dictionary의 값을 가지고 있습니다.
print(resultA) // ["x": 1, "y": 2, "z": 3, "w": 0]
// resultB는 중복된 키에 대해서 두 번째 Dictionary의 값을 가지고 있습니다.
print(resultB) // ["x": 11, "y": 22, "z": 3, "w": 0]
```

`merging` 메서드의 `uniquingKeysWith:` 파라미터는 중복된 키값에 대한 처리를 담당합니다. 중복된 키값에 대하여 첫 번째 Dictionary의 값을 사용할지 두 번째 값을 사용할지 클로저로 전달해야 합니다.

따라서 첫 번째 Dictionary의 값을 사용하려면 첫 번째 인자를 반환하면 되고, 두 번째 Dictionary의 값을 사용하려면 두 번째 인자를 반환하면 됩니다. 중복되지 않는 키들에 대해서는 자동으로 합쳐집니다.

😎
