---
title: "02. Swift Basic Operators"
categories: 
  - Swift
last_modified_at: 2021-03-28 00:44:00
toc: true #Table of Contents
comments: true


---

연산자는 값을 검사하고 바꾸거나 조합하기 위해 사용하는 특수한 기호나 구절입니다. 예를 들어 더하기 연산자`+`는 두 수를 더하고 논리 곱 연산자`&&`는 두 개의 Boolean 값에 대한 논리를 반환합니다.

Swift는 C 언어 들을 통해 이미 알고 있을 법한 연산자를 지원합니다.

# Terminology, 용어

연산자에는 단항 연산자, 이항 연산자, 삼항 연산작 있습니다.

- 단항 연산자는 단일대상에 동작합니다. 단항 연산자는 피연산자 앞 또는 뒤에 위치할 수 있습니다.
- 이항 연산자는 두 대상에 대해 동작합니다. 이항 연산자는 두 피연산자 사이에 위치합니다.
- 삼항 연산자는 세 대상에 대해 동작합니다. 삼항 연산자는 세 피연산자 사이에 위치합니다.

# Assignment Operator, 할당 연산자

할당 연산자는 오른쪽의 값을 왼쪽에 할당합니다.

```swift
let b = 10
var a = 5
a = b
print(a, b)
```

튜플을 할당할 경우 각 요소들을 한번에 여러 개의 상수나 변수로 분해하여 할당할 수 있습니다. 마치 Python의 언패킹과 비슷하게 동작합니다.

```swift
let (x, y) = (1, 2)
print("x = \(x), y = \(y)")
```

할당 연산자는 값을 반환하지 않기 때문에 다음과 같이 사용할 수 없습니다. 이러한 특징은 동등 연산자 `==`를 사용하여 했는데 할당 연산자 `=`를 사용하는 것을 방지합니다. Swift는 코드에서 이러한 에러를 피하도록 해줍니다.

```swift
if x = y {
    // x = y 구문은 값을 반환하지 않습니다.
}
}
```

# Arithmetic Operators, 산술 연산자

Swift 는 다음의 네 가지 산술 연산자를 지원합니다.

- `+`, 더하기 연산자
- `-`, 빼기 연사자
- `*`, 곱하기 연산자
- `/`, 나누기 연산자

```swift
print(1 + 2)
print(5 - 3)
print(2 * 3)
print(10.0 / 2.5)
```

Swift는 C와 Objective-C 언어와 다르게 기본적으로 오버플로우를 허용하지 않습니다.

문자열 타입에 대해서 `+` 연산은 문자열을 연결합니다.

```swift
"hello, " + "world"  // equals "hello, world"
```

## Remainder Operator, 나머지 연산자

나머지 연산자 `%`는 나누기 연산 후 나머지를 반환합니다.

```swift
print(9 % 4)
print(-9 % 4)
```

## Unary Minus Operator, 단항 마이너스 연산자

변수 및 상수 앞에 단일 `-` 연산자를 사용하면 음수는 양수로, 양수는 음수로 표현합니다.

```swift
let three = -3
let minusThree = -three
let plusThree = -minusThree
print(three, minusThree, plusThree)
```

## Unary Plus Operator, 단항 플러스 연산자

변수 및 상수 앞에 단일 `+` 연산자를 사용할 수 있습니다. 해당 연산자는 어떠한 변경도 하지 않습니다.

```swift
let minusSix = -6
let alsoMinuxSix = +minusSix
print(minusSix, alsoMinuxSix)
```

# Compound Assignment Operators, 복합 할당 연산자

복합 할당 연산자는 `=` 연산자와 다른 연산자의 결합입니다. 다음과 같이 `+`, `-`, `*`, `/` 연산자와 결합하여 연산한 후 다시 변수에 할당합니다.

```swift
var addAndAssign = 1
addAndAssign += 2
print(addAndAssign)

var subtractAndAssign = 5
subtractAndAssign -= 3
print(subtractAndAssign)

var multiplyAndAssign = 3
multiplyAndAssign *= 4
print(multiplyAndAssign)

var remainderAndAssign = 7
remainderAndAssign %= 3
print(remainderAndAssign)
```

# Comparison Operators, 비교 연산자

Swift에서는 다음과 같은 비교 연산자를 사용할 수 있습니다.

- `==`
- `!=`
- `>`
- `<`
- `>=`
- `<=`

```swift
print(1 == 1)
print(2 != 1)
print(2 > 1)
print(1 < 2)
print(1 >= 1)
print(2 <= 1)
```

비교 연산자는 주로 조건 구문에서 사용합니다.

```swift
let name = "world"
if name == "world" {
    print("hello, world")
} else {
    print("I'm sorry \(name), but I don't recognize you")
}
```

튜플의 경우, 같은 요소의 수를 가지고 있으면 비교 연산자를 사용할 수 있습니다.

```swift
print((1, "zebra") < (2, "apple"))
print((3, "apple") < (3, "bird"))
print((4, "dog") == (4, "dog"))

print(("blue", -1) < ("purple", 1))
//print(("blue", false) < ("purple", true))
```

# Ternary Conditional Operator, 삼항 조건 연산자

삼항 조건 연산자는 세 부분으로 구성된 연산자입니다. 첫 번째 피연산자의 결과가 참이면 두 번째 피연산자가 반환되며 첫 번째 피연산자의 결과가 거짓이면 세 번째 연산자가 반환됩니다.

삼항 조건 연산자를 사용한 예시입니다.

```swift
let contentHeight = 40
let hasHeader = true
let rowHeight = contentHeight + (hasHeader ? 50 : 20)
print(rowHeight)
```

삼항 조건 연산자를 사용하지 않고 `if`문으로 표현한 예시입니다.

```swift
let contentHeight = 40
let hasHeader = true
let rowHeight: Int
if hasHeader {
    rowHeight = contentHeight + 50
} else {
    rowHeight = contentHeight + 20
}
// rowHeight is equal to 90
```

삼항 조건 연산자는 두 표현식 중 하나를 고르는 구문에서 효율적입니다. 하지만, 삼항 조건 연산자를 너무 과용하게 되면 코드를 이해하기 어려워지기 때문에 삼항 조건 연산자 구문을 결합해서 사용하는 것은 피해야 합니다.

# Nil-Coalescing Operator, Nil-병합 연산자

nil-병합 연산자는 `(a ?? b)`와 같이 사용하며 옵셔널 `a`에 값이 존재하면 옵셔널 `a`의 값을 추출하고 존재하지 않으면 `nil`을 반환합니다. a와 b는 타입이 동일해야 합니다.

삼항 조건 연산자를 사용하여 다음과 같이 표현할 수 있습니다.

```swift
a != nil ? a! : b
```

nil 병합 연산자를 사용하면 조건 검사와 옵셔널 언래핑을 쉽게 작성할 수 있습니다.

다음은 Nil 병합 연산자를 사용하는 예시입니다.

```swift
let defaultColorName = "red"
var userDefinedColorName: String?

var colorNameToUse = userDefinedColorName ?? defaultColorName
print(colorNameToUse)
// "red"

userDefinedColorName = "green"
colorNameToUse = userDefinedColorName ?? defaultColorName
print(colorNameToUse)
// "green"
```

myName 변수의 값이 nil이므로  "Anonymous"가 반환됩니다.

```swift
let myName: String?
let unwrappedName = myName ?? "Anonymous"
print("Hello, \(myName ?? "Anonymous")!")
```

username(for:) 메서드의 반환값이 nil 이므로 "anonymous"가 반환됩니다.

```swift
func username(for id: Int) -> String? {
    if id == 1{
        return "zdo"
    } else {
        return nil
    }
}
print("Hi, \(username(for: 1) ?? "anonymous")")
```

# Range Operators, 범위 연산자

- `a...b`
- `a..<b`
- `a...`
- `...a`
- `..<a`

## Closed Range Operator, 닫힌 범위 연산자

닫힌 범위 연산자(`a...b`)는 a에서 b까지 범위를 정의하며 `a`와 `b`의 값을 포함합니다.

다음은 닫힌 범위 연산자를 사용하는 예시입니다. 여기서 closedRangeOperator 변수의 타입은 `ClosedRange<Int>` 입니다.

```swift
let closedRangeOperator = 1...5
for index in closedRangeOperator {
    print("\(index) times 5 is \(index * 5)")
}
```

## Half-Open Range Operator, 반 열림 범위 연산자

반 열림 범위 연산자(`a..<b`)는 a에서 b까지 범위를 정의하며 `a`를 포함하고 `b`를 포함하지 않습니다.

```swift
let names = ["Anna", "Alex", "Brian", "Jack"]
let count = names.count
for i in 0..<count {
    print("Person \(i + 1) is called \(names[i])")
}
```

## One-Sided Ranges, 한쪽 범위 연산자

한쪽 범위 연산자(`...`)는 한쪽 범위만 지정하며 다른 한쪽은 생략할 수 있습니다.

```swift
for name in names[2...] {
    print(name)
}

for name in names[...2] {
    print(name)
}
```

한쪽 반 열림 범위 연산자 형태로도 사용할 수 있습니다.

```swift
for name in names[..<2] {
  print(name)
}
```

한쪽 범위 연산내 특정한 값을 가지고 있는지를 검사할 수도 있습니다.

```swift
let range = ...5
print(range.contains(7))
print(range.contains(4))
print(range.contains(-1))
```

한쪽 범위 연산자는 서브스크립트 구문 뿐만아니라, 다른 곳에서도 사용할 수 있습니다. 한쪽 범위 연산자에서 생략한 값이 첫 번째 값이면 반복동작을 적용할 수 없습니다.

# Logical Operators, 논리 연산자

Swift는 세 가지의 논리 연산자를 가지고 있습니다.

- `!a`
- `a && b`
- `a || b`

## Logical NOT Operator, 논리 NOT 연산

NOT 연산자(`!a`)는 참이면 거짓, 거짓이면 참으로 값을 반전합니다.

```swift
let allowedEntry = false
if !allowedEntry {
    print("ACCESS DENIED")
}
```

## Logical AND Operator, 논리 AND 연산

AND 연산자(`a && b`)는 두 값이 모두 참일 때, 참을 반환합니다.

```swift
let enteredDorrCode = true
let passedRetinaScan = false
if enteredDorrCode && passedRetinaScan {
    print("Welcome!")
} else {
    print("ACCESS DENIED")
}
```

## Logical OR Operator, 논리 OR 연산

OR 연산자(`a || b`)는 둘 또는 하나의 값이 참일 때, 참을 반환합니다.

```swift
let hasDoorKey = false
let knowsOverriedPassword = true
if hasDoorKey || knowsOverriedPassword {
    print("Welcome!")
} else {
    print("ACCESS DENIED")
}
```

## Combining Logical Operators, 논리 연산자의 결합

여러 개의 논리 연산자를 결합하여 긴 복합 표현식을 만들 수 있습니다.

```swift
if enteredDorrCode && passedRetinaScan || hasDoorKey || knowsOverriedPassword {
    print("Welcome!")
} else {
    print("ACCESS DENIED")
}
```

## Explicit Parentheses, 괄호 명시하기

괄호를 명시하여 표현식의 가독성을 높이고 우선순위를 정할 수 있습니다.

```swift
if (enteredDoorCode && passedRetinaScan) || hasDoorKey || knowsOverridePassword {
    print("Welcome!")
} else {
    print("ACCESS DENIED")
}
// Prints "Welcome!"
```