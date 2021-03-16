---
title: "01. Swift The Basics"
categories: 
  - Swift
last_modified_at: 2021-03-16 21:37:00
toc: true #Table of Contents
comments: true


---

# 상수와 변수

상수(constant)는 값을 변경할 수 없으며, 변수(variable)은 값을 변경할 수 있습니다.

## 상수와 변수 선언하기

상수와 변수는 사용하기 전에 반드시 선언해야 합니다. 상수는 **let** 키워드를 사용하며 변수는 **var** 키워드를 사용하여 선언합니다.

```swift
// let - Let Declararion
// Creates a variable that cannot be changed.
let maximumNumberOfLoginAttempts = 10
// var - Var Declaration
// Creates a variable that can be changed.
var currentLoginAttemp = 0

let price = 100
var score = 100
```

콤마(,)를 사용하여 한 줄에 여러 상수, 변수를 선언할 수 있습니다.

```swift
var x = 0.0, y = 0.0, z = 0.0
```

## 타입 명시

상수 또는 변수 선언 시 타입을 명시하면 변수가 저장할 수 있는 값의 타입을 명확하게 선언할 수 있습니다. 타입은 콜론(:)을 사용하여 명시합니다.

```swift
var welcomeMessage: String
welcomeMessage = "Hello"
```

콤마(,)를 사용하여 한 줄에 같은 타입의 변수를 선언할 수 있습니다.

```swift
var red, green, blue: Double
```

실제로 타입을 명시하여 사용하지 않더라고 Swift의 타입 추론을 통해 Swift에서 타입을 추론하여 변수에 지정합니다.

## 상수와 변수 이름짓기

상수와 변수는 유니코드 문자를 포함하여 거의 모든 문자를 이름으로 사용할 수 있습니다.

```swift
let π = 3.14159
let 你好 = "你好世界"
let 🐶🐮 = "dogcow"
let 전공 = "컴퓨터공학"
```

변수의 이름은 공백, 수학 기호, 화살표, 사용자 정의 유니코드, line- and box-drawing 문자를 사용할 수 없습니다. 숫자의 경우 변수의 첫 번째 문자로 사용할 수 없지만 두 번째 문자 이후로 사용할 수 있습니다.

Swift에서 사용하는 예약된 키워드는 변수명으로 사용할 수 업습니다. 하지만 **\`** 억음 부호를 사용하면 예약된 키워드를 변수로 사용할 수 있습니다.

```swift
let `case` = 3

var friendlyWelcome = "Hello!"
friendlyWelcome = "Bonjour!"

let languageName = "Swift"
// Cannot assign to value: 'languageName' is a 'let' constant
// languageName = "Swift++"
```

## 상수와 변수 출력하기

상수와 변수의 값은 `print(_:separator:terminator:)` 함수를 사용하여 출력할 수 있습니다.

```swift
print(friendlyWelcome)
```

Swift의 `string interpolation`을 사용하면 문자열 내에 변수의 현재 값을 포함하여 문자열을 생성할 수 있습니다.

```swift
print("The current value of friendlyWelcome is \(friendlyWelcome)")
```

# 주석

주석은 코드 내 실행하지 않는 구문을 삽입하기 위해 사용합니다. 주로 메모, 설명, 기록을 위해 사용합니다.

한 줄 주석은 `//` 기호를 사용합니다.

```swift
// This is a comment.
```

여러 줄 주석은 `/*`기호로 시작하여 `*/`로 끝냅니다. 여러 줄에 걸쳐 주석을 표시할 수 있습니다.

```swift
/* This is also a comment
but is written over multiple lines. */
```

중첩 주석은 `/*`와 `*/`의 짝으로 주석을 사용합니다. (마지막 줄도 주석처리가 됩니다.)

```swift
/* This is the start of the first multiline comment.
 /* This is the second, nested multiline comment. */
//This is the end of the first multiline comment. */
```

# 세미콜론

스위프트는 코드 마지막에 세미콜론을 사용하지 않습니다. 그러나 한 줄에 여러 코드를 사용하기 위해서는 세미콜론을 사용해야 합니다.

```swift
let cat = "🐱"; print(cat)
```

# 정수

정수는 수학에서 이야기 하는 정수를 말하며, 양의 정수, 0, 음의 정수가 있습니다.

스위프트는 8bit, 16bit, 32bit, 64bit 형태의 정수를 제공합니다.

## 정수의 경계

UInt 형의 최솟값과 최솟값은 min, max 프로퍼티로 접근할 수 있습니다.

```swift
let minValue = UInt8.min  // minValue is equal to 0, and is of type UInt8
let maxValue = UInt8.max  // maxValue is equal to 255, and is of type UInt8
```

## Int

Int는 정수형(양수, 음수) 숫자를 나타내는 타입입니다. Swift에서 Int 타입은 현재 플랫폼의 아키텍처에 따라 그 크기가 결정됩니다.

- 32비트 아키텍처에서는 Int32 크기로 결정됩니다.
- 64비트 아키텍처에서는 Int64 크기로 결정됩니다.

특정한 정수 타입으로 동작해야하는 것이 아니면 기본적으로 Int 타입을 사용하는게 좋습니다.

|  Int  |        비트 수         |
| :---: | :--------------------: |
| Int8  | 8bit 부호 있는 정수형  |
| Int16 | 16bit 부호 있는 정수형 |
| Int32 | 32bit 부호 있는 정수형 |
| Int64 | 64bit 부호 있는 정수형 |

Int 타입을 사용할 경우 32bit 플랫폼에서는 Int32와 동일하며, 64bit 플랫폼에서는 Int64와 동일합니다.

```swift
let int8Value: Int8 = Int8.max
let int16Value: Int16 = Int16.max
let int32Value: Int32 = Int32.max
let int64Value: Int64 = Int64.max
```

## UInt

UInt는 정수형(양수) 숫자를 나타내는 타입입니다. Swift에서 UInt 타입은 현재 플랫폼의 아키텍처에 따라 그 크기가 결정됩니다.

- 32비트 아키텍처에서는 UInt32 크기로 결정됩니다.
- 64비트 아키텍처에서는 UInt64 크기로 결정됩니다.

|  UInt  |        비트 수         |
| :----: | :--------------------: |
| UInt8  | 8bit 부호 없는 정수형  |
| UInt16 | 16bit 부호 없는 정수형 |
| UInt32 | 32bit 부호 없는 정수형 |
| UInt64 | 64bit 부호 없는 정수형 |

UInt 타입을 사용할 경우 32bit 플랫폼에서는 UInt32와 동일하며, 64bit 플랫폼에서는 UInt64와 동일합니다.

```swift
let uInt8Value: UInt8 = UInt8.max
let uInt16Value: UInt16 = UInt16.max
let uInt32Value: UInt32 = UInt32.max
let uInt64Value: UInt64 = UInt64.max
```

# 부동소수점수

부동소수점수는 컴퓨터에서 실수를 표현하는 방법으로 3.14159, 0.1, -273.15와 같은 숫자들이 있습니다.

스위프트에서 부동소수점수를 표현하기 위한 타입은 다음과 같습니다.

| Float  |   비트 수    |
| :----: | :----------: |
| Float  | 32bit 실수형 |
| Double | 64bit 실수형 |

```swift
let floatValue: Float = Float.greatestFiniteMagnitude
let float80Value: Float80 = Float80.greatestFiniteMagnitude
let doubleValue: Double = Double.greatestFiniteMagnitude
```

# 타입 안전과 타입 추론

Swift는 타입 안전 언어입니다. 타입 안전은 코드에서 사용할 수 있는 값의 타입에 대해 명확하게 알려줍니다. 컴파일 시 타입 검사를 통해 일치하지 않는 타입에 대해 에러를 표시합니다.

Swift는 타입 추론 기능을 지원합니다. 변수 선언 시 할당된 값에 따라 자동으로 타입을 지정해줍니다.

타입 추론의 예시는 다음과 같습니다.

```swift
// 다음 구문은 Int 타입으로 추론합니다.
let meaingOfLife = 42

// 다음 구문은 Double 타입으로 추론합니다.
let pi = 3.141592
let pi2 = 3 + 0.141592

// 다음 구문은 String 타입으로 추론합니다.
let language = "Swift"
```

# 수치 상수값

수치 상수값은 프로그램에서 사용하는 일반적인 숫자를 말합니다. 10진수는 5, 8, 17과 같이 표현하며 2진수는 접두사 `0b`를 붙여서 0b1101과 같이, 8진수는 접두사 `0o`를 붙여서 0o435과 같이 그리고 16진수는 접두사 `0x`를 붙여서 0xFF와 같이 표현합니다. 정수형 상수값은 다음과 같이 표현할 수 있습니다. 각각 17을 표현한 값입니다.

|  진수  |  표현   |
| :----: | :-----: |
| 10진수 |   17    |
| 2진수  | 0b10001 |
| 8진수  |  0o21   |
| 16진수 |  0x11   |

실수형 상수값은 다음과 같이 표현할 수 있습니다. 16진수는 정수형과 같은 접두사 `0x`를 붙여서 표현할 수 있습니다.

|  지수   |     표현     |
| :-----: | :----------: |
| 1.25e2  | 1.25 x 10^2  |
| 1.25e-2 | 1.25 x 10^-2 |
|  0xFp2  |   15 x 2^2   |
| 0xFp-2  |  15 x 2^-2   |

다음의 모든 실수는 `12.1875`라는 10진수 값을 표현합니다.

```swift
let decimalDouble = 12.1875
let exponentDouble = 1.21875e1
let hexadecimalDouble = 0xC.3p0
```

16진수의 경우 밑이 2가 됩니다.

```swift
let floatingPointNumber3 = 0xFp2
let floatingPointNumber4 = 0xFp-2
```

수치 상수값은 읽기 쉽도록 하기 위해 추가적인 표현법을 가지고 있습니다. 상수 앞에 추가적으로 `0`을 채워 표현하거나 상수 내 `_` 특수문자를 사용하여 표현할 수 있습니다. 이러한 표현법은 실제 값에 영향을 미치지 않습니다.

```swift
let paddedDouble = 000123.456
let oneMillion = 1_000_000
let justOverOneMillion = 1_000_000.000_000_1
```

# 수치 타입 변환

## 정수 변환

변수에 값을 할당할 때에는 타입이 저장할 수 있는 범위 내의 값을 할당해야 합니다.

```swift
let cannotBeNegative: UInt8 = -1
// UInt8 타입은 음수를 저장할 수 없습니다.
let tooBig: Int8 = Int8.max + 1
// Int8 타입보다 큰 수를 저장할 수 없습니다.
```

같은 정수형이라도 수치 타입이 다르면 연산을 할 수 없습니다. 때문에 연산을 하기 위해 새로 초기화된 값을 생성하여 연산을 수행해야 합니다.

```swift
let twoThousand: UInt16 = 2_000
let one: UInt8 = 1
let twoThousandAndOne = twoThousand + UInt16(one)
```

## 정수와 실수 변환

정수를 실수 타입으로 변환하는 것은 반드시 명시적으로 수행해야 합니다.

```swift
let three = 3
let pointOneFourOneFiveNine = 0.14159
let pi = Double(three) + pointOneFourOneFiveNine
```

실수에서 정수 타입으로 변환하는 것 역시 명시적으로 수행해야 합니다.

```swift
let integerPi = Int(pi)
```

변수끼리의 연산과 수치 상수값끼리의 연산 규칙은 다릅니다.

# Type Aliase, 타입 별명, typealias

타입 별명은 기존에 선언되어 있는 이름에 새로운 이름을 지정하는 것입니다.`typealias` 키워드를 사용하여 새로운 이름을 정의합니다.

Language Reference -> Types -> Type Identifier

```swift
// 기존에 정의된 UInt16 타입에 AudioSample이라는 이름을 지정합니다.
typealias AudioSample = UInt16

var maxAmplitudeFound = AudioSample.min

// (Int, Int) 튜플 타입에 Point라는 이름을 지정합니다.
typealias Point = (Int, Int)

var point = Point(3, 4)

// 사용자가 정의한 클래스 Student 배열 타입에 Students 라는 이름을 지정합니다.
typealias Students = [Student]

class Student {}

var students = Students()

// 클로저에 대한 새로운 이름을 지정할 수도 있습니다.
typealias intHandler = (Int) -> ()

func typeAliasExample(completeHandler: intHandler) {}
```

# Boolean, 논리값

A value type whose instances are either true or false.
` @frozen struct Bool`

 스위프트는 `Bool`이라는 참과 거짓을 표현하는 타입을 가지고있습니다. Bool은 항상 `true` 또는 `false` 값만을 가질 수 있습니다.

```swift
let orangesAreOrange = true
let turnipsAreDelicious = false
```

Boolean 타입은 조건문에서 유용하게 쓰입니다.

```swift
if turnipsAreDelicious {
    print("Mmm, tasty turnips!")
} else {
    print("Eww, turnips are horrible.")
}
```

스위프트의 타입 안전장치에 의해 if 조건문에 Bool 타입이 아닌 다른 타입으로 참과 거짓을 구분하려고 할 때, 컴파일시 에러를 출력합니다.

```swift
let i = 1
if i {
    // this example will not compile, and will report an error
}
```

다음과 같이 논리 연산자를 사용할 경우 그 결과값이 Bool 타입이기 때문에 정상적으로 실행됩니다.

```swift
let i = 1
if i == 1 {
    // this example will compile successfully
}
```

# Tuples, 튜플

튜플은 여러 개의 값을 단일 값으로 묶어서 표현하는 타입입니다. 튜플 내 값은 어떤 타입이든 상관이 없습니다.

```swift
let http200Success: (Int, String) = (200, "Ok")
let http404Error = (404, "Not Found")
```

튜플이 가지고 있는 값은 각각의 변수로 대입할 수 있습니다.

```swift
let (statusCode, statusMessage) = http404Error
print("The status code is \(statusCode)")
print("The status message is \(statusMessage)")
```

튜플 내 일부분의 값만 필요할 경우 `_` 문자를 이용해 무시할 수 있습니다.

```swift
let (justTheStatusCode, _) = http404Error
print("The status code is \(justTheStatusCode)")
```

튜플에 있는 개별 원소에 접근하기 위해서 `.(index number)`를 사용할 수 있습니다.

```swift
print("The status code is \(http404Error.0)")
// Prints "The status code is 404"
print("The status message is \(http404Error.1)")
// Prints "The status message is Not Found"
```

튜플에 있는 개별 원소에 이름을 지정할 수 있습니다.

```swift
let http200Status = (statusCode: 200, description: "OK")
```

튜플에 있는 개별 원소에 이름을 지정한 경우, 그 원소의 값에 접근할 때 원소의 이름을 사용할 수 있습니다.

```swift
print("The status code is \(http200Status.statusCode)")
// "The status code is 200" 를 출력합니다.
print("The status message is \(http200Status.description)")
// "The status message is OK" 를 출력합니다.
```

튜플은 함수에서 두 개 이상의 값을 반환할 때 유용할 수 있습니다. 서로 관련된 값에 그룹을 지어 표현하기 좋습니다. 복잡한 값을 구성할 때에는 구조체나 클래스를 사용하는 것이 더 유용합니다.

# Optionals, 옵셔널, ?

옵셔널은 값이 존재하지 않을 수 있는 상황에서 사용할 수 있는 타입입니다.

다음의 구문은 문자열 타입을 정수형 타입으로 변환하기 위해 `Int()` 구문을 사용하고 있습니다. 문자열은 정수형으로 변환할 수 있습니다. 정수형으로 변환할 수 있는 문자열은 변환 성공 시 옵셔널 리터럴 상수가 반환되고, 문자열을 정수형으로 변환할 수 없으면 nil이 반환됩니다.

```swift
let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)
print(convertedNumber)
```

반환된 옵셔널 리터럴 상수의 타입은 'Int?' 타입입니다. 타입 뒤에 삽입된 특수문자 '?'는 옵셔널을 나타내는 표현입니다.

## nil, 닐

`nil`은 옵셔널 변수에 값이 없는 상태로 저장하기 위해 사용하는 키워드입니다. '값이 없음'을 나타냅니다.

```swift
// Int 옵셔널 변수에 404를 저장합니다.
var serverResponseCode: Int? = 404
// nil(값이 없음)을 할당합니다.
serverResponseCode = nil
```

옵셔널 변수를 정의하면서 초기화값을 지정하지 않으면 자동으로 `nil`로 설정됩니다.

```swift
var surveyAnswer: String?
print(surveyAnswer)
```

## If Statements and Forced Unwrapping, If 문과 강제 언래핑, !

if문을 사용해서 옵셔널 변수에 값이 존재하는지 확인할 수 있습니다.

```swift
if convertedNumber != nil {
    print("convertedNumber contains some integer value.")
}
```

옵셔널 변수가 nil이 아니면 옵셔널 변수 끝에 `!` 특수문자를 사용하여 옵셔널 변수의 값을 추출할 수 있습니다. `!` 특수문자를 사용하여 옵셔널 변수값을 추출하는 것을 옵셔널 강제 언래핑이라고 합니다.

```swift
if convertedNumber != nil {
    print("convertedNumber has an integer value of \(convertedNumber!).")
}
```

옵셔널 변수의 값이 nil일 경우 강제 언래핑을 시도하면 런타임 에러가 발생합니다. 항상 옵셔널 변수에 값이 존재하는지 검증을 하고 강제 언래핑을 해야 합니다.

## Optional Binding, 옵셔널 바인딩

옵셔널 바인딩을 통해 옵셔널에 값이 존재할 경우 값을 추출하여 임시로 변수에 할당할 수 있습니다. if let 또는 if var를 사용하여 옵셔널 바인딩을 할 수 있습니다. 옵셔널 강제 언래핑은 값이 존재하지 않을 경우 런타임 에러가 발생하므로, 옵셔널 바인딩을 통해 옵셔널 변수를 제어하는 것이 더 좋습니다.

```swift
if let constantName = someOptional {
    statements
}
```

옵셔널 강제 언래핑을 사용하는 대신에 옵셔널 바인딩을 사용하여 옵셔널 변수 값을 사용할 수 있습니다.

```swift
if let actualNumber = Int(possibleNumber) {
    print("The string \"\(possibleNumber)\" has an integer value of \(actualNumber)")
} else {
    print("The string \"\(possibleNumber)\" could not be converted to an integer")
}

if var actualNumber = Int(possibleNumber) {
    actualNumber += 3
    print("The string \"\(possibleNumber)\" has an integer value of \(actualNumber)")
} else {
    print("THe string \"\(possibleNumber)\" could not be converted to an integer")
}
```

다음의 두 구문은 서로 동일한 코드입니다. 콤마를 이용하여 여러 가지 조건을 한번에 판단할 수 있습니다.

```swift
if let firstNumber = Int("4") {
    if let secondNumber = Int("42") {
        if firstNumber < secondNumber && secondNumber < 100 {
            print("\(firstNumber) < \(secondNumber) < 100")
        }
    }
}

// 위 구문은 아래와 같이 다시 표현할 수 있습니다. 동일하지만 한 줄에 나열할 수 있습니다.
if let firstNumber = Int("4"), let secondNumber = Int("42"), firstNumber < secondNumber && secondNumber < 100 {
    print("\(firstNumber) < \(secondNumber) < 100")
}
```

if문 옵셔널 바인딩으로 임시로 할당된 변수는 해당 if문 영역 안에서만 사용할 수 있지만 guard문 옵셔널 바인딩으로 임시로 할당된 변수는 guard문을 작성한 영역에서 사용할 수 있습니다.

## Implicity Unwrapped Optionals, 암시적 언래핑 옵셔널

옵셔널 중에 암시적 언래핑 옵셔널이 있는데, 옵셔널 변수이지만 일반 변수처럼 사용할 수 있는 옵셔널 변수입니다. 암시적 언래핑 옵셔널은 값이 항상 존재한다는 것을 확신할 수 있을 때 사용합니다. 클래스 이니셜라이저 사용 시에 유용합니다.

```swift
let possibleString: String? = "An optional string."
let forcedString: String = possibleString!

let assumedString: String! = "An implicitly unwrapped optional string."
let implicitString: String = assumedString
```

암시적 언래핑 옵셔널은 기본적으로 옵셔널로 동작하지만 옵셔널로 사용할 수 없을 경우, 강제 언래핑을 수행하여 값을 추출하여 사용합니다.

```swift
let optionalString = assumedString
print("optioanlString type: \(type(of: optionalString))")
```

암시적 언래핑 옵셔널도 if문을 통해 nil값을 확인할 수 있습니다.

```swift
if assumedString != nil {
    print(assumedString!)
}
```

암시적 언래핑 옵셔널도 옵셔널 바인딩을 통해 값을 추출할 수 있습니다.

```swift
if let definiteString = assumedString {
    print(definiteString)
}
```

# Error Handling, 에러 처리

에러 처리는 프로그램 실행 중 일어날 수 있는 에러를 처리하거나 다른 곳으로 전달할 수 있는 기능입니다.

```swift
// 함수 정의 뒤에 'throws' 키워드를 사용하여 에러를 발생시킬 수 있다고 알린다.
func canThrowAnError() throws {
    // this function may or may not throw an error
}
```

에러를 발생시킬 수 있는 함수를 호출할 때는 do문 영역 내 `try` 키워드를 사용하여 호출합니다. 에러가 발생하면 catch문 영역으로 실행흐름이 전달됩니다.

```swift
do {
    try canThrowAnError()
    // no error was thrown
} catch {
    // an error was thrown
}
```

발생한 에러 종류별로 catch문 영역을 나눌 수 있습니다. 에러는 `throw` 키워드를 사용하여 발생시킬 수 있습니다.

```swift
func makeASandwich() throws {
    let one = 1
    
    if one == 1 {
        throw SandwichError.outOfCleanDishes
    } else {
        throw SandwichError.missingIngredients
    }
}

enum SandwichError: Error {
    case outOfCleanDishes
    case missingIngredients
}

func eatASandwich() {}
func washDishes() {}
func buyGroceries() {}

do {
    try makeASandwich()
    eatASandwich()
} catch SandwichError.outOfCleanDishes {
    washDishes()
} catch SandwichError.missingIngredients {
    buyGroceries()
}
```

# Assertions and Preconditions, 선언문과 선행조건문

 assertion과 precondition의 조건이 true면 코드가 계속 실행됩니다. assertion은 개발 과정에 있는 실수나 잘못된 가정들을 찾도록 해주며, precondition은 문제를 찾는것을 도와줍니다.

## Debugging with Assertions, 선언문으로 디버깅하기

`assert(_:_:file:line:)` 함수를 사용하여 디버깅을 할 수 있습니다.

```swift
let age = 3
assert(age >= 0, "A person's age can't be less than zero.")
```

코드 조건을 검사한 경우 `assertionFailture(_:file:line:)` 함수를 사용하여 디버깅 메시지를 남길 수 있습니다.

```swift
if age > 10 {
    print("You can ride the roller-coaster or the ferris wheel.")
} else if age >= 0 {
    print("You can ride the ferris wheel.")
} else {
    assertionFailure("A person's age can't be less than zero.")
}
```

## Enforcing Preconditions, 선행조건문 강제하기

assert와 precondition의 차이는 assert는 debug 모드에서만 동작하며, precondition은 debug, release 모드 두 가지에서 동작합니다.

```swift
precondition(age >= 3, "A person's can't be less than zero.")
```