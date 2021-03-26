---
title: "XCode XCTest 테스트 메서드 실행 순서 정리"
categories: 
  - XCTest
last_modified_at: 2021-03-26 16:25:00
toc: true #Table of Contents
comments: true


---

## XCTest 프레임워크

Xcode에서 XCTest 프레임워크를 사용하여 테스트를 사용할 때 테스트 순서에 따라 실행되는 메서드가 있습니다. 이 메서드는 테스트 시작 전에 사전 작업을 설정해주거나 테스트가 끝나고 나서 정리하는 작업을 하는 용도로 사용합니다.

테스트를 사용할 때 사용하는 메서드는 다음과 같습니다.

- class func setUp()
- func setUpWithError()
- func setUp()
- func testMethod() & addTestdownBlock(_:)
- func testDown()
- func tearDownWithError()
- class funs tearDown()

위 순서는 테스트가 진행될 때 호출되는 순서로 작성해보았습니다. 차례대로 호출되며 각각 어떤 상황에 호출되는지 살펴보겠습니다.

### class func setUp()
이 메서드는 타입 메서드로 테스트 시작 전 딱 한 번만 호출됩니다. 그래서 모든 테스트 메서드에서 실행 전에 정의하거나 초기화할 작업을 오버라이드하여 구현합니다.

### func setUpWithError()
이 메서드는 각 테스트 메서드가 실행되기 전에 실행됩니다. 각각의 테스트 메서드 실행 전에 정의하거나 초기화할 작업을 오버라이드하여 구현합니다.

### func setUp()
이 메서드는 setUpWithError() 메서드와 동일하게 각 테스트 메서드가 실행되기 전에 실행됩니다. 두 메서드의 차이점은 setUpWithError() 메서드는 실행 도중 발생한 에러를 처리할 수 있다는 점입니다.

### func testMethod() & addTestdownBlock(_:)
testMethod() 메서드와 addTestdownBlock(_:) 메서드는 실질적인 테스트를 수행하는 메서드입니다. 꼭 테스트 메서드의 이름을 testMethod로 지을 필요없이 자유롭게 설정할 수 있습니다.

addTestdownBlock(_:) 메서드는 testMethod()가 종료될 때 실행되는 코드 블록입니다. addTestdownBlock(_:) 메서드 블록은 먼저 선언된 블럭이 나중에 실행되는 LIFO 구조의 방식으로 호출됩니다.

### func tearDown()
이 메서드는 각 테스트 메서드가 종료되고 나서 실행됩니다. 각각의 테스트 메서드를 수행하고 정리하는 작업을 오버라이드하여 구현합니다.

### func tearDownWithError()
이 메서드는 tearDown() 메서드와 마찬가지로 각 테스트 메서드가 종료되고 나서 실행됩니다. 두 메서드의 차이점은 setUpWithError() 메서드는 실행 도중 발생한 에러를 처리할 수 있다는 점입니다.

### class func tearDown()
이 메서드는 타입 메서드로 모든 테스트가 종료되고 딱 한 번만 호출됩니다. 그래서 모든 테스트를 마치고 정리해야 할 작업을 오버라이드하여 구현합니다.

다음 그림은 애플 공식 문서에 있는 테스트 메서드 호출 순서도입니다.
![2021-03-26 at 06.43.00 AM-xctest](/assets/image/2021-03-26 at 06.43.00 AM-xctest.png)

각 테스트 메서드를 호출 순서를 확인할 수 있도록 print() 함수 구문으로 예시를 작성해보았습니다.

```swift
import XCTest
@testable import SetUpAndTearDownExample

class SetUpAndTearDownExampleTests: XCTestCase {
    override class func setUp() {
        // This is the setUp() class method.
        // It is called before the first test method begins.
        // Set up any overall initial state here.
        super.setUp()
        print("*** called: override class func setUp()")
    }

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.
        // This is the setUpWithError() instance method.
        // It is called before each test method begins.
        // Set up any per-test state here.
        try super.setUpWithError()
        print("*** called: override func setUpWithError()")
    }
    
    override func setUp() {
        // This is the setUp() instance method.
        // It is called before each test method begins.
        // Use setUpWithError() to setu up any per-test state,
        // unless you have legacy tests using setUp().
        super.setUp()
        print("*** called: overried func setUp()")
    }
    
    func testMethod1() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        // This is the first test method.
        // Your testing code goes here.
        
        print("*** called: func testMethod1()")
        
        addTeardownBlock {
            // Called when testMethods1() end.
            print("*** called: addTeardownBlock in testMethod1")
        }
        
        print("*** called: func testMethod1() after")
    }
    
    func testMethod2() throws {
        // This is the second test method.
        // Your testing code goes here.
        
        print("*** called: func testMethod2()")
        
        addTeardownBlock {
            // Called when testMethod2() ends.
            
            print("*** called: addTeardownBlock1 in testMethod2")
        }
        
        addTeardownBlock {
            // Called when testMethod2() ends.
            
            print("*** called: addTeardownBlock2 in testMethod2")
        }
    }
    
    override func tearDown() {
        // This is the tearDown() instance method.
        // It is called after each test method completes.
        // Use tearDownWithError() for any per-test cleanup,
        // unless you have legacy tests using tearDown().
        print("*** called: overried func tearDown()")
        super.tearDown()
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        // This is the tearDownWithError() instance method.
        // Is it called after each test method completes.
        // Perforn any per-test cleanup here.
        print("*** called: override func tearDownWithError()")
        try super.tearDownWithError()
    }
    
    override class func tearDown() {
        // This is the tearDown() class method.
        // It is called after all test methods complete.
        // Perform any overall cleanup here.
        print("*** called: override class func tearDown()")
        super.tearDown()
    }

//    func testPerformanceExample() throws {
//        // This is an example of a performance test case.
//        self.measure {
//            // Put the code you want to measure the time of here.
//        }
//    }

}
```

### 참고 URL

---

>   [Understanding Setup and Teardown for Test Methods] https://developer.apple.com/documentation/xctest/xctestcase/understanding_setup_and_teardown_for_test_methods

