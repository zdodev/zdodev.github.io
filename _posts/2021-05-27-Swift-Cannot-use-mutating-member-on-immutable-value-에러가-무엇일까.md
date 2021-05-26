---
title: "Swift Cannot use mutating member on immutable value 에러가 무엇일까"
categories: 
  - Swift
  - Trouble Shooting
last_modified_at: 2021-05-27 01:30:00
toc: true #Table of Contents
comments: true


---

## 왜 Cannot use mutating member on immutable value 에러가 발생할까?

구조체 메서드를 구현하다가 다음의 에러가 발생했습니다.

![Screen Shot 2021-05-27 at 12.45.25 AM](/assets/image/Screen Shot 2021-05-27 at 12.45.25 AM.png)

에러 내용을 보면 **불변 값에서 가변 멤버를 사용할 수 없습니다: 함수 호출은 불변 값을 반환합니다.** 라는 내용입니다. 위 구문에서 getTicketOffice() 메서드의 반환값의 `getTicket()` 메서드를 호출할 때 발생하는 것을 알게 되었습니다. 그래서 `getTicket()` 메서드를 찾아가보았습니다.

```swift
struct TicketOffice {
    private var tickets = [Ticket]()
    
    // getTicket() 메서드가 가변(mutating) 메서드!!
    mutating func getTicket() -> Ticket {
        tickets.removeFirst()
    }
    ...
}
```

소스코드를 보면 해당 메서드는 가변 메서드이며 구조체의 인스턴스 메서드인 것을 알 수 있습니다. `getTicket()` 메서드는 구조체의 내용을 변경하기 때문에 mutating 선언을 하고있습니다. 그럼 뭐가 문제냐? 잘 선언 것 아닌가? 🤔 싶은데??

그러나 중요한 것은 첫 번째 그림에서 `getTicketOffice()` 메서드가 반환하는 값(TicketOffice 구조체)의 가변 메서드를 사용했다는 것입니다!! 에러 메시지를 다시 보면 **function call returns immutable value** 문구를 확인할 수 있습니다. 네. 함수가 반환하는 값은 불변값입니다. 상수라고 볼 수 있습니다. 근데 이 값의 가변 메서드를 사용했기 때문에 에러가 발생하는 것입니다. 그러면 이 문제를 어떻게 해결할 수 있을까요?

다음과 같이 변수에 다시 할당한 후 사용하는 방법이 있을 수 있습니다. 이렇게 하면 `getTicketOffice()`의 반환값은 변수에 할당되고 변수는 가변 메서드를 사용할 수 있기 때문에 에러가 해결됩니다.

```swift
// 변수에 할당 후 
var ticketOffice = ticketSeller.getTicketOffice()
// 가변 메서드 호출
let ticket = ticketOffice.getTicket()
```

이렇게 하면 해결이 되었다고 볼 수 있을까요??

아니요. 해결되지 않습니다. Swift의 구조체는 값 타입이며 값 타입은 값의 복사가 이뤄집니다. 위와 같이 변수에 할당하게 되면 값의 복사가 일어나고 복사된 값에서 티켓을 가져오는 것이기 때문에 원본 인스턴스에는 반영되지 않아 나중에 더 큰 문제가 발생할 수 있습니다. 그리고 컴파일 단계에서 잡히지 않기 때문에 더 조심해야 합니다.

그럼 어떻게 해야 해결할 수 있을까요? 네 클래스를 사용하는 것입니다.

```swift
class TicketOffice {
    private var tickets = [Ticket]()

    func getTicket() -> Ticket {
        tickets.removeFirst()
    }
}
```

클래스는 참조 타입이기 때문에 함수에서 반환되어도 원본 인스턴스의 참조가 반환됩니다. 따라서 `getTicket()` 메서드를 호출하면 원본 인스턴스에 접근하여 수행됩니다. 그리고 클래스이기 때문에 mutating 키워드도 제거할 수 있습니다. 그리고 아래 코드처럼 변수에 할당하지 않고 `getTicket()` 메서드를 바로 호출할 수 있습니다! 🤗

```swift
if audience.getBag().hasInvitation() {
	var ticketOffice = ticketSeller.getTicketOffice().getTicket()
}
```

사실 이 문제는 모든 타입을 구조체로 구현하려다가 맞닥트린 문제였습니다. 그렇지만 덕분에 값 타입과 참조 타입을 더 이해해볼 수 있는 계기가 되었습니다.

자. 정리하자면.

1. **함수(메서드)가 반환하는 값은 불변 값이다! 불변 값에서 가변 메서드를 호출할 수 없다! 왜? 함수가 반환하는 값은 불변 값이기 때문에! 바꿀 수 없다고!**
2. **불변 값을 변수나 상수에 할당하면 값이 복사된 인스턴스며, 이 변수 조작해도 원본 인스턴스에 반영되지 않는다.**

😎
