---
# layout: page
ecmaFooter: true
title: "Order of keys in an object"
date: 2025-06-22
---

# Order of keys in an object

Часто, у статтях про порядок ключів об'єкта, ми можемо прочитати щось наступне:

::: info Оригінал
Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

[javascript.info](https://javascript.info/object#ordered-like-an-object)
:::

<br>

Або таке у статті ["for...in" на developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#description)

::: info
The traversal order, as of modern ECMAScript specification, is well-defined and consistent across implementations. Within each component of the prototype chain, all non-negative integer keys (those that can be array indices) will be traversed first in ascending order by value, then other string keys in ascending chronological order of property creation.
:::

<br>

Зазвичай, такі пояснення залишають багато питань:
- Просто "цілочисельні ключі" чи "усі невід'ємні цілочисельні ключі"?
- Чому згадуються індекси масиву "усі невід'ємні цілочисельні ключі (ті, що можуть бути індексами масиву)"?
- Які існують обмеження на індекси масиву?

<br>

::: tip
Спробуйте знайти відповідь на ці питання самостійно на сайтах [uk.javascript.info](https://uk.javascript.info/) чи [developer.mozilla.org](https://developer.mozilla.org/).
:::

<br>

Можна піти іншим шляхом і знайти таку інформацію у статті ["Array" на developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description) про масиви:

::: info
... **JavaScript arrays are zero-indexed**: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's `length` property minus 1.
:::

<br>

В іншій статті ["Array: length" на developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) ми читаємо:

::: info
The `length` data property of an Array instance represents the number of slots in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array. ...
<br><br>
A nonnegative integer less than 2<sup>32</sup>. ...
<br><br>
The value of the `length` property is a nonnegative integer with a value less than 2<sup>32</sup>. ...
<br><br>
... Setting any array index (a nonnegative integer smaller than 2<sup>32</sup>) beyond the current `length` extends the array — the `length` property is increased to reflect the new highest index. ...
<br><br>
:::

<br>

Є ще одна згадка статті ["RangeError: invalid array length" на developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length):

::: info
The maximum allowed array length depends on the platform, browser and browser version. For `Array` the maximum length is (2<sup>32</sup> - 1).
:::

<br>

Отже, максимальне значення властивості `length` дорівнює (2<sup>32</sup> - 1) = 4 294 967 295. А так як "останній елемент має значення властивості масиву `length` мінус 1", то він дорівнює (2<sup>32</sup> - 2) = 4 294 967 294.

<br>

Тепер виникають наступні питання:
- А якщо ключ об'єкта буде більшим за максимально допустиме значення властивості `length`?
- А що буде, якщо ключі будуть не String ❮Рядок❯, а Symbol ❮Симбол❯?

Давайте подивимося на прикладі:

```javascript
var obj = {
    [Symbol("ID2")]: "Symbol('ID2')",
    [Symbol("ID1")]: "Symbol('ID1')",
    "z": "z",
    "a": "a",
    "4294967295": 2 ** 32 - 1,
    "4294967294": 2 ** 32 - 2,
    "9": 9,
    "0": 0,
};

console.log(obj);
```

Після виконання цього коду ми побачимо у консолі наступне:

::: code-group

```js [Node.js 22.22.0 ]
{
  '0': 0,
  '9': 9,
  '4294967294': 4294967294,
  z: 'z',
  a: 'a',
  '4294967295': 4294967295,
  [Symbol(ID2)]: "Symbol('ID2')",
  [Symbol(ID1)]: "Symbol('ID1')"
}
```

```ts [Deno 2.7.12]
{
  "0": 0,
  "9": 9,
  "4294967294": 4294967294,
  z: "z",
  a: "a",
  "4294967295": 4294967295,
  Symbol(ID2): "Symbol('ID2')",
  Symbol(ID1): "Symbol('ID1')"
}
```

```ts [Bun 1.3.12]
{
  "0": 0,
  "9": 9,
  "4294967294": 4294967294,
  z: "z",
  a: "a",
  "4294967295": 4294967295,
  [Symbol(ID2)]: "Symbol('ID2')",
  [Symbol(ID1)]: "Symbol('ID1')",
}
```

```ts [Chrome 149.0.7827.54]
{
  0: 0,
  9: 9,
  4294967294: 4294967294,
  z: 'z',
  a: 'a',
  4294967295: 4294967295,
  Symbol(ID2): "Symbol('ID2')",
  Symbol(ID1): "Symbol('ID1')"
}
/* зверніть увагу, що ключі розгорнутого об'єкту відображаються у іншому порядку */
  0: 0
  9: 9
  4294967294: 4294967294
  4294967295: 4294967295
  a: "a"
  z: "z"
  Symbol(ID1): "Symbol('ID1')"
  Symbol(ID2): "Symbol('ID2')"
  [[Prototype]]: Object
```

```ts [Opera 132.0.5905.102]
{
  0: 0,
  9: 9,
  4294967294: 4294967294,
  z: 'z',
  a: 'a',
  4294967295: 4294967295,
  Symbol(ID2): "Symbol('ID2')",
  Symbol(ID1): "Symbol('ID1')"
}
/* зверніть увагу, що ключі розгорнутого об'єкту відображаються у іншому порядку */
  0: 0
  9: 9
  4294967294: 4294967294
  4294967295: 4294967295
  a: "a"
  z: "z"
  Symbol(ID1): "Symbol('ID1')"
  Symbol(ID2): "Symbol('ID2')"
  [[Prototype]]: Object
```

```ts [Firefox 152.0.3]
Object {
  0: 0,
  9: 9,
  4294967294: 4294967294,
  z: "z",
  a: "a",
  4294967295: 4294967295,
  Symbol("ID2"): "Symbol('ID2')",
  Symbol("ID1"): "Symbol('ID1')"
}
/* зверніть увагу, що ключі розгорнутого об'єкту відображаються у іншому порядку */
  ​0: 0
  ​9: 9
  ​4294967294: 4294967294
  ​4294967295: 4294967295
  ​a: "a"
  ​z: "z"
  ​Symbol(ID2): "Symbol('ID2')"
  ​Symbol(ID1): "Symbol('ID1')"
  ​<prototype>: Object { … }
```
:::

<br>

Числові ключі посортувало за зростанням, але вставило рядкові ключі, симбольні ключі взагалі внизу... :man_shrugging:

Тож давайте звернемося до специфікації ECMAScript 2026, а конкретніше до її розділів в яких описана послідовність перебору ключів:

::: details ECMAScript {open}
<!--@include: ../../../shared/en/ecma2026/10/10_01/10_01_11_OwnPropertyKeys.md-->

<!--@include: ../../../shared/en/ecma2026/10/10_01/10_01_11_01_OrdinaryOwnPropertyKeys.md-->
:::

<br>

Як ми бачимо, існує чіткий алгоритм формування списку ключів, за яким в подальшому здійснюється перебір ключів іншими методами:
1. всі ключі, які можуть бути використані як індекси масиву, у порядку зростання числових значень індексів;
1. всі ключі, які є Рядками і не можуть бути використані як індекси масиву, у хронологічному порядку створення ключів;
1. всі ключі, які є Симболами, у хронологічному порядку створення ключів.

Для остаточного розуміння попереднього розділу специфікації ECMAScript 2026 нам залишилося зрозуміти "що таке індекси масиву".
І ми можемо знайти відповідь у наступному розділі, в якому нас цікавить визначення "*Array index ❮Індекс масиву❯*" і "ПРИМІТКА":

::: details ECMAScript {open}
<!--@include: ../../../shared/en/ecma2026/06/06_01/06_01_07_The_Object_Type.md-->
:::

<br>

Як ми бачимо тут чітко визначений максимальний індекс масиву, який менше за (2<sup>32</sup> - 1) = 4 294 967 295. Отже максимальний індекс масиву є число (2<sup>32</sup> - 2) = 4 294 967 294.

<br>

Тепер ми подивимося на наш приклад ще раз, але значення замінимо на рядки в які запишемо тип ключа і порядковий номер такого ключа:

```js
var obj = {
  [Symbol("ID2")]: "Symbol #1",
  [Symbol("ID1")]: "Symbol #2",
  "z": "String #1",
  "a": "String #2",
  4294967295: "String #3", // 2 ** 32 - 1,
  4294967294: "array index #1", // 2 ** 32 - 2,
  9: "array index #2",
  0: "array index #3",
};

console.log(obj);
```

Після виконання цього коду ми побачимо у консолі наступне:

::: code-group

```js [Node.js 22.22.0 ]
{
  '0': 'array index #3',
  '9': 'array index #2',
  '4294967294': 'array index #1',
  z: 'String #1',
  a: 'String #2',
  '4294967295': 'String #3',
  [Symbol(ID2)]: 'Symbol #1',
  [Symbol(ID1)]: 'Symbol #2'
}
```

```ts [Deno 2.7.12]
{
  "0": "array index #3",
  "9": "array index #2",
  "4294967294": "array index #1",
  z: "String #1",
  a: "String #2",
  "4294967295": "String #3",
  Symbol(ID2): "Symbol #1",
  Symbol(ID1): "Symbol #2"
}
```

```ts [Bun 1.3.12]
{
  "0": "array index #3",
  "9": "array index #2",
  "4294967294": "array index #1",
  z: "String #1",
  a: "String #2",
  "4294967295": "String #3",
  [Symbol(ID2)]: "Symbol #1",
  [Symbol(ID1)]: "Symbol #2",
}
```

```ts [Chrome 149.0.7827.54]
{
  0: 'array index #3',
  9: 'array index #2',
  4294967294: 'array index #1',
  z: 'String #1',
  a: 'String #2',
  4294967295: 'String #3',
  Symbol(ID2): 'Symbol #1',
  Symbol(ID1): 'Symbol #2'
}
/* зверніть увагу, що ключі розгорнутого об'єкту відображаються у іншому порядку */
  0: "array index #3"
  9: "array index #2"
  4294967294: "array index #1"
  4294967295: "String #3"
  a: "String #2"
  z: "String #1"
  Symbol(ID1): "Symbol #2"
  Symbol(ID2): "Symbol #1"
  [[Prototype]]: Object
```

```ts [Opera 132.0.5905.102]
{
  0: 'array index #3',
  9: 'array index #2',
  4294967294: 'array index #1',
  z: 'String #1',
  a: 'String #2',
  4294967295: 'String #3',
  Symbol(ID2): 'Symbol #1',
  Symbol(ID1): 'Symbol #2'
}
/* зверніть увагу, що ключі розгорнутого об'єкту відображаються у іншому порядку */
0: "array index #3"
9: "array index #2"
4294967294: "array index #1"
4294967295: "String #3"
a: "String #2"
z: "String #1"
Symbol(ID1): "Symbol #2"
Symbol(ID2): "Symbol #1"
[[Prototype]]: Object
```

```ts [Firefox 152.0.3]
Object {
  0: "array index #3",
  9: "array index #2",
  4294967294: "array index #1",
  z: "String #1",
  a: "String #2",
  4294967295: "String #3",
  Symbol("ID2"): "Symbol #1",
  Symbol("ID1"): "Symbol #2"
}
/* зверніть увагу, що ключі розгорнутого об'єкту відображаються у іншому порядку */
  ​0: "array index #3"
  ​9: "array index #2"
  ​4294967294: "array index #1"
  ​4294967295: "String #3"
  ​a: "String #2"
  ​z: "String #1"
  ​Symbol(ID2): "Symbol #1"
  ​Symbol(ID1): "Symbol #2"
  ​<prototype>: Object { … }
```
:::

sandboxes: [Node.js](https://onecompiler.com/nodejs/44tcqbczq), [Deno](https://onecompiler.com/deno/44tcqb6mk), [Bun](https://onecompiler.com/bun/44tcqarcw), [DevTools](/uk/faq#DevTools), [console](/uk/faq#console)

<br>

Як бачимо, всі ключі розташовані відповідно до алгоритму прописаного в специфікації у розділі "OrdinaryOwnPropertyKeys ( O )".

<br>

::: details Завдання для самостійного опрацювання
Спробуйте використати у якості ключа пустий рядок :wink:
::: 