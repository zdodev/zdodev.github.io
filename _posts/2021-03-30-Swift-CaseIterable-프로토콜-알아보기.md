---
title: "Swift CaseIterable 프로토콜에 대해서 알아보기"
categories: 
  - Swift
last_modified_at: 2021-03-30 15:19:00
toc: true #Table of Contents
comments: true


---

## Basic Behaviors에서 제공하는 CaseIterable 프로토콜

Swift에서 배열 요소를 순회하듯이 열거형에서 값을 순회할 수 있도록 해주는 프로토콜이 있습니다. 바로 `CaseIterable` 이라는 프로토콜입니다.

우선 예제 코드를 먼저 보도록 하겠습니다.

### 첫 번째 예제

```swift
enum Beverage: CaseIterable {
    case coffee, tea, juice
}

let numberOfChoices = Beverage.allCases.count
print("\(numberOfChoices) beverages available.")
// 3 beverages available.

for beverage in Beverage.allCases {
    print(beverage)
}
// coffee
// tea
// juice
```

`Beverage` 열거형이 `CaseIterable` 프로토콜을 채택한 후 `allCases` 타입 프로퍼티를 통해 접근하는 것을 볼 수 있습니다. 이때 타입 프로퍼티 `allCases` 는 `[Beverage]` 인 것을 확인할 수 있습니다. 따라서 `count` 프로퍼티에 접근할 수 있으며 배열에서 각 요소를 순회하면서 `Beverage` 열거형 각 케이스에 접근할 수 있습니다.

### 두 번째 예제

```swift
enum CompassDirection: CaseIterable {
    case north, south, east, west
}

print("There are \(CompassDirection.allCases.count) directions.")
// There are 4 directions.

let caseList = CompassDirection.allCases.map {
    "\($0)"
}.joined(separator: ", ")
print(caseList)
// north, south, east, west
```

`CompassDirection` 열거형이 `CaseIterable` 프로토콜을 채택한 후 위와 마찬가지로 `allCases` 타입 프로퍼티에 접근하여 사용하는 것을 확인할 수 있습니다.

### CaseIterable 정의

`CaseIterable` 프로토콜은 애플 공식 홈페이지 Swift -> Swift Standard Library -> Basic Behaviors -> CaseIterable 에 나와 있으며 정의는 다음과 같습니다.

```swift
public protocol CaseIterable {
    associatedtype AllCases : Collection where Self == Self.AllCases.Element
    static var allCases: Self.AllCases { get }
}
```

 `CaseIterable` 프로토콜은 모든 값의 컬렉션을 제공하며, allCase 타입 프로퍼티를 사용하여 모든 케이스에 접근할 수 있습니다. `CaseIterable` 프로토콜의 경우 사용자가 요구사항을 구현하지 않더라도 컴파일러가 자동으로 요구사항을 구현하기 때문에 채택 시 따로 요구사항을 구현하지 않아도 바로 사용할 수 있습니다.

### 활용 방안

열거형을 사용할 때 케이스가 늘어나거나 줄어들 수 있습니다. 그때마다 수정되는 코드가 늘어날 수 있습니다. 다음 예제처럼 메뉴가 늘어나거나 줄어들면 `printMenu(_:)` 함수도 변경돼야 합니다.

```swift
enum CafeMenu: Int {
    case coffee
    case bread
}

func printMenu(_ number: Int) {
    switch number {
    case CafeMenu.coffee.rawValue:
        print("커피 나왔습니다.")
    case CafeMenu.bread.rawValue:
        print("빵 나왔습니다.")
    default:
        print("잘못된 메뉴입니다.")
    }
}
```

그런데 `CaseIterable` 프로토콜을 사용하면 `CafeMenu` 의 케이스가 늘어나거나 줄어들어도 `printMenu(_:)` 함수는 변경 없이 사용할 수 있습니다.

```swift
enum CafeMenu: Int, CaseIterable {
    case coffee
    case bread
    case milk
    case cake
}

func printMenu(_ number: Int) {
    CafeMenu.allCases.forEach {
        if $0.rawValue == number {
            print("\($0) 나왔습니다.")
        }
    }
}
```

😎

### 참고 URL

---

>   [Apple CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
>
>   [How to list all cases in an enum using CasesIterable](https://www.hackingwithswift.com/example-code/language/how-to-list-all-cases-in-an-enum-using-caseiterable)