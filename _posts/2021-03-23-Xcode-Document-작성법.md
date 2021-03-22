---
title: "Xcode Document 작성법"
categories: 
  - Xcode
last_modified_at: 2021-03-23 00:04:00
toc: true #Table of Contents
comments: true


---

## MARK / TODO / FIXME

Xcode 내에서 MARK, TODO, FIXME 구문을 사용해서 소스코드 내비게이터를 만들 수 있습니다.

-   // MARK:
-   // TODO:
-   // FIXME:

아래 그램은 소스코드 내비게이터입니다.

![2021-03-23 at 12.16.46 AM-navigator](/assets/image/2021-03-23 at 12.16.46 AM-navigator.png)

다음과 같이 작성할 수 있습니다.

```swift
// MARK: Defining and Calling Functions

func greet(person: String) -> String {
    let greeting = "Hello, " + person + "!"
    return greeting
}
print(greet(person: "Anna"))
print(greet(person: "Brian"))

func greetAgain(person: String) -> String {
    return "Hello again, " + person + "!"
}
print(greetAgain(person: "Anna"))

// MARK: - Function Parameters and Return Values

// MARK: Functions without Parameters

func sayHelloWorld() -> String {
    return "hello, world"
}
print(sayHelloWorld())

// MARK: Functions with Multiple Paramters

func greet(person: String, alreadyGreeted: Bool) -> String {
    if alreadyGreeted {
        return greetAgain(person: person)
    } else {
        return greet(person: person)
    }
}
print(greet(person: "Tim", alreadyGreeted: true))
```



### 참고 URL

---

>   [Swift Documentation - NSHipster](https://nshipster.com/swift-documentation/)

