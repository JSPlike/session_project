Jade 문법 설명
====

## 속성과 클래스

#### 1. id, class

속성은 뒤에 괄호를 쓰고 안에 여러 내용을 작성하기 위해서는 아래코드를 작성하면 된다.

```
div(id="header", class="side-bar")
```

하나의 속성이나 클래스 설정시에는 다음과 같은 코드를 사용한다.

**jade**
```
div#header
	div.main-class
```

**html**
```
<div id="header">
	<div class="main-class">
	</div>
</div>
```

#### 2. button, box

버튼이나 체크박스, 라디오 박스의 사용법

1) button

```
label
	intput(type="button")
```

2) checkbox

```
label
	input(type="checkbox", checked=isChecked)
	| yes / no
```

3) radiobox

```
input(type="radio', checked)
input(type="radio', checked=true)
input(type="radio', checked=false)
```

## jade안에 javascript 사용하기

html코드안에서 자유롭게 자바스크립트 코드를 사용할 수 있다

**jade**

```
script.
	console.log('Hello Jade World!!')
	setTimeout(function() {
	  window.location.href='http://rpjs.co'},200))
	console.log('Good bye!!')
```

**html**

```
<script>
	console.log('Hello jade World!!')
	setTimeout(function() {
	  window.location.href='http://rpjs.co'
	  },200))
	console.log('Good bye!')
</script>
```

> **Note:**
>
> console.log()를 이용하여 콘솔에 로그를 찍고 일정 시간이 지나면
> Good bye! 로그가 찍히도록 이벤트를 주었다


자바스크립트 코드를 사용하여 변수에 값들을 저장할 수 있다

**jade**

```
- var joon = ['<a>', '<b>', '<c>']
ul
	- for (var i = 0; i < joon.length; i++)
	li
		span i
		span != "unescaped: " + joon[i] + " vs. "
		span= "escaped: " + joon[i]
```

**html**

```
<ul>
	<li><span>0</span><span>unescaped: <a> vs. </span><span>escaped: &lt;a&gt;</span></li>
	<li><span>1</span><span>unescaped: <b> vs. </span><span>escaped: &lt;b&gt;</span></li>
	<li><span>2</span><span>unescaped; <c> vs. </span><span>escaped: &lt;c&gt;</span></li>
</ul>
```

#### 조건문 - if

**jade**

```
- var user = {}
- usr.admin = Math.random() > 0.5
if user.admin
	button(class="Good") Good
else
	button(class="log in") Log in
```

> **Note:**
>
> unless는 not or !의 의미를 가짐

#### 반복문

**1. 배열 사용**

```
- var languages = ['php', 'node', 'ruby']
div
	each value, index in languages
		p= index + ". " + value
```

> **출력결과**
>
> - 0. php
> - 1. node
> - 2. ruby

**2. 객체 사용**

```
- var languages = {'php': -1, 'node': 2, 'ruby': 1}
div
	each value, key in languages
		p= key  + ": " + value
```

> **출력결과**
>
> - php: -1
> - node: 2
> - ruby: 1

####  Case 문

C++에서의 swith case문은 jade에서 이렇게 구현할 수 있다.

```
- var coins = Math.round(Math.random()*10)
case coins
	when 0
		p joonyoung
	when 1
		p panda
	default
		p You have #{coins} coins!!
```

##




























