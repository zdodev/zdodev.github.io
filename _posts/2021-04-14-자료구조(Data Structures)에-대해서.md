---
title: "자료구조(Data Structure)의 종류에 대해서"
categories: 
  - Data Structure
last_modified_at: 2021-04-19 00:00:00
toc: true #Table of Contents
comments: true


---

자료구조는 컴퓨터 과학에서 효율적인 접근 및 수정을 가능케 하는 자료의 조직, 관리, 저장을 의미합니다. 데이터 값의 모임, 또 데이터 간의 관계, 그리고 데이터에 적용할 수 있는 함수나 명령을 의미합니다. 즉, '데이터의 저장'을 담당하는 것이 자료구조입니다.

## 데이터 타입

### 원시 타입

원시 데이터 타입은 컴퓨터에서 프로그래밍 언어가 제공하는 자료형입니다.

| 타입 |
| -------- |
| Boolean |
| Character |
| Floating-point |
| Fixed-point |
| Integer |
| Reference |
| Enumerated type |
| Date time |



### 복합 타입

| 타입 |
| -------- |
| Array |
| Record |
| Union  |



### 추상 데이터 타입(Abstact Data Type, ADT)

추상 데이터 타입은 컴퓨터 과학에서 데이터와 그 데이터에 대한 연산을 정의한 것입니다. 추상 데이터 타입은 구현 방법을 명시하지 않고 어떠한 연산을 해야 한다는 정의만 하고 있습니다.

| 타입               |
| ------------------ |
| Container          |
| List               |
| Tuple              |
| Associative array, Map              |
| Multimap           |
| Set                |
| Multiset (bag)     |
| Stack              |
| Queue              |
| Double-ended queue |
| Graph              |



## 선형 자료구조

데이터를 일렬로 나란히 저장하고 있는 구조를 선형 자료구조라고 합니다. 데이터 간의 관계가 1:1로 매핑됩니다. 선형 자료구조에는 메모리 상에 데이터를 연속적으로 저장하는 배열 리스트와 노드의 연결로 저장하는 연결 리스트가 있습니다.

### 배열

배열은 메모리 상에 같은 타입의 자료가 연속적으로 저장됩니다.

### 리스트

연결 리스트는 노드를 단위로 하는 자료구조입니다. 노드는 데이터와 다음 노드를 가리키는 참조값으로 구성됩니다.

## 비선형 자료구조

비선형 자료구조란 데이터를 나란히 저장하는 형태가 아닌 데이터의 표현에 중점을 두고 있습니다. 데이터 간의 관계가 1:N, N:N으로 매핑됩니다. 비선형 자료구조에는 트리와 그래프가 있습니다.

### 트리

트리는 뿌리와 뿌리 또는 다른 꼭짓점을 단 하나의 부모로 가지지 않는지에 따른 그래프의 분류입니다.

### 그래프

그래프는 꼭짓점과 꼭지점을 잇는 변으로 구성됩니다.

## 해시

해시는 연관배열 구조를 이용하여 키에 값을 저장하는 자료구조입니다.


### 참고 URL

---

>   [List of data structures](https://en.wikipedia.org/wiki/List_of_data_structures)

