---
title: "JSON(JavaScript Object Notation)에 대해서"
categories: 
  - JSON
last_modified_at: 2021-04-05 01:00:00
toc: true #Table of Contents
comments: true


---

## JSON(JavaScript Object Notation)


JSON은 개방형 표준 파일 포맷으로 사람이 읽을 수 있는 문자를 저장하거나 데이터의 쌍이나 배열로 구성된 객체를 전송할 때 사용합니다. 언어 독립적인 포맷으로 많은 언어가 JSON을 분석하는 기능을 지원합니다.

## JSON의 특징


-   데이터 교환 포맷입니다.
-   간단한 데이터 전송 포맷입니다.
-   텍스트 기반의 가벼운 구조입니다.
-   읽기 쉽습니다.
-   키-값의 데이터 구조를 가집니다.
-   네트워크 상에서 데이터 직렬화 및 전송에 사용합니다.
-   프로그래밍 언어에 독립적인 포맷입니다.

## JSON 문법 규칙

-   키-값 구조의 데이터 형태를 가지고 있습니다.
-   데이터는 ","(콤마)를 기준으로 구별됩니다.
-   {, } 중괄호는 객체를 표현합니다.
-   [, ] 대괄호는 배열을 표현합니다.

## JSON Data - A Name and a Value 구조

-   JSON 데이터는 키-값 구조입니다.
-   JSON 데이터는 "키": 값 구조의 형태로 표현합니다.
-   키는 반드시 문자열이며 ", " double quotes 로 표현합니다.

## JSON 데이터 타입

-   Number: number는 정수 또는 실수를 표현합니다.

```json
{
	"age": 30
}
```

-   String: string은 유니코드 문자의 나열인 문자열을 표현합니다.

```json
{
	"name": "John"
}
```

-   Boolean: boolean은 참, 거짓의 논리값을 표현합니다.

```json
{
	"sale": true
}
```

-   Array: array는 여러 개체의 리스트를 표현합니다.

```json
{
	"employees": [
		"John", "Anna", "Petter"
	]
}
```

-   Object: object는 데이터 묶음(객체)를 표현합니다.

```json
{
	"employee": {
		"name": "John",
		"age": 30,
		"city": "New York"
	}
}
```

-   null: null은 아무런 값도 가지지 않은 빈 값을 의미합니다.

```json
{
	"middlename": null
}
```

-   키-값 구조

```json
"firstName": "Tom"
```

-   A JSON Object

```json
{
	"firstName": "Tom",
	"lastName": "Hardy"
}
```

-   A JSON Array

```json
[
	{
		"firstName": "Tom",
		"lastName": "Hardy"
	},
	{
		"firstName": "Christian",
		"lastName": "Bale"
	}
]
{
	"firstName": "John",
	"lastName": "Smith",
	"isAlive": true,
	"age": 27,
	"address": {
		"streetAddress": "21 2nd Street",
		"city": "New York",
		"state": "NY",
		"postalCode": "100021-3100"
	},
	"phoneNumbers": [
		{
			"type": "집",
			"번호": "212 555-1234"
		},
		{
			"type": "office",
			"number": "646555-4567"
		}
	],
	"children": [],
	"spouse": null
}
```

## 참고 링크

>   [JSON 공식 홈페이지](https://www.json.org/json-en.html)
>
>   [Wiki JSON](https://en.wikipedia.org/wiki/JSON)