# JavaScript Cheat Sheet - Intermediate

### `Objects`

In JS, most things are objects.

There are different ways to create objects, some of them are;

<details>

<summary>1. Object Literals</summary>

```javascript
const Watch = {
  name: "Omnitrix",
  aliens: 10,
  copies: ["Unitrix", "Ulitmatrix"],
  benIsOwner: true,
};
```

</details>

<details>
<summary>2. Using new keyword and Object() constructor</summary>

```javascript
const Watch = new Object();
Watch.name = "Omnitrix";
Watch.aliens = 10;
Watch.copies = ["Unitrix", "Ulitmatrix"];
Watch.benIsOwner = true;
```

</details>

<details>
<summary>3. Using Object.create() method</summary>

```javascript
const Watch = Object.create(null);
Watch.name = "Omnitrix";
Watch.aliens = 10;
Watch.copies = ["Unitrix", "Ulitmatrix"];
Watch.benIsOwner = true;
```

</details>

<details>
<summary>4. Using constructor function</summary>

```javascript
const name = "Ben Tennyson";
const age = 10;
const isHero = true;
const aliens = ["four arms", "diamond head", "cannon bolt"];

const Hero = {
  name,
  age,
  isHero,
  aliens,
};
```

</details>

**Freezing vs Sealing vs Preventing Extensions**

- **Freezing** an object prevents new properties from being added to it, existing properties can't be removed, prevents changing the enumerability, configurability, or writability of existing properties, prevents the values of existing properties from being changed, prevents the prototype from being changed.

- **Sealing** an object prevents new properties from being added to it and marks all existing properties as non-configurable, prevents changing the enumerability and configurability of existing properties, prevents the values of existing properties from being changed, prevents the prototype from being changed, but it allows the values of existing properties to be changed as long as they are writable, which means that it is not as restrictive as freezing an object.

- **Preventing Extensions** prevents new properties from being added to an object, but allows existing properties to be changed or removed.

### `Prototypes`

Prototypes are the mechanism by which JavaScript objects inherit features from one another (Inheritance).

**`__proto__`**

`__proto__` is a property of an object which is a reference to the prototype of the object (parent object). It is used to access the prototype of an object. It loosely works like inheritance in OOP.

### `Symbol`

A symbol is a unique and immutable data type that is often used to identify object properties. They are hidden from iterations, which creates a weak form of encapsulation. `Symbol` is a built-in object, whose constructor would return a _symbol primitive_ (symbol value) that is unique.

- Every `Symbol()` call is guaranteed to return a unique Symbol.
- Every `Symbol.for("key")` call will always return the same Symbol for a given value of `"key"`.
