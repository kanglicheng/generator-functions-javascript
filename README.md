# generator-functions-javascript

## Generator Functions

What is a generator function?

The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

What the heck does that mean?

In essence, a generator object can be looped-over and it also has a _next()_ method. T

In JavaScript, the function declaration followed immediately by an asterisk indicates that the function is a generator. Instead of returning, the function uses the _yield_ operator to pause execution of the function. Calling next resumes the execution until the generator is exhausted.

---

### example 1

```
function* myGenerator(n){
  yield n+1;
}

const g = myGenerator(5);
console.log(g.next().value);


{ value: 4, done: false }
{ value: 5, done: false }
{ value: 6, done: false }
{ value: undefined, done: true }
```

Notice that yield returns an object with a done property and value property. The actual values can be obtained by calling .value

---

### example 2

```
function* traverse(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      yield array[i][j];
    }
  }
}

const t = traverse([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

for (const val of t) {
  console.log(val);
}
```

## Programming Challenge 1

Write a generator function that accepts a 2 dimensional array and yields in sequence the transpose of its values.

```
function* transpose(2dArray){
}

transpose([
    [2, 3, 4],
    [5, 6, 7],
  ]);
// 2, 5, 3, 6, 4, 7
```
