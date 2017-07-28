Inversion of Control (IoC) and Dependency Injection (DI)
-------------

# Usage
You can find a lot of good articles explaining these design patterns in depth, Instead I will give you here an example of how to use the implementation of the `IoC` class that you can find in `server/IoC`.

You have a `ProductRepository` class has a dependency of `MySQLStorage`, so our code might look like this:

```javascript
import IoC from 'AppIoC';

class MySQLStorage {
  save(tableName, attrs) {
    console.log(`Saving to MySQL ${tableName}`, attrs);
  }
}

// This will be a singleton (one instance is needed in our whole application)
// First argument is the binding name
// Second argument is an array of dependencies
// Third argument is the class
IoC.singleton('mySQLStorage', [], MySQLStorage);


// Now for the product repository class
class ProductRepository {
  constructor(storage) {
    this.storage = storage;
  }

  save(title, price) {
    return this.storage.save('products', {
      title,
      price,
    });
  }
}

// Second argument defines that it depends on mySQLStorage that's registered early
// Note: The order of registering doesn't matter.
IoC.singleton('productRepository', [ 'mySQLStorage' ], ProductRepository);
```

Now to create an instance of `ProductRepository` to use it:

```javascript
async function main() {
  // Resolve productRepository from IoC container
  const productRepo = await IoC.resolve('productRepository');

  // Use it
  const result = await productRepo.save('...', 123);
}
```

Let’s say that maybe we want to switch our SQL storage to MongoDB, our new class should be similar to:

```javascript
class MongoStorage {
  save(collectionName, attrs) {
    console.log(`Saving to MongoDB ${collectionName}`, attrs);
  }
}

IoC.singleton('mongoStorage', [], MongoStorage);
```

Okay to switch to mongoStorage all you need to do is to replace

```javascript
IoC.singleton('productRepository', [ 'mySQLStorage' ], ProductRepository);
```

with

```javascript
IoC.singleton('productRepository', [ 'mongoStorage' ], ProductRepository);
```

# IoC available methods

### singleton
Used to bind a class instance, every call to `IoC.resolve('className')` will return the same instance.

### instance
Used to bind a class instance, calling `IoC.resolve('className')` will return a new class instance.

### callable
Used to bind a function, calling `IoC.resolve('functionName')` for the first time will save the function output, other calls will return this saved output.

e.g.
```javascript
const getGuestUser = () => ({ displayName: 'Guest User' });

// Bind callable
IoC.callable('guestUser', [], getGuestUser);

// Calling
async function fnName() {
  const gUser1 = await IoC.resolve('guestUser');
  const gUser2 = await IoC.resolve('guestUser');

  console.log(gUser1 === gUser2); // true
}
```

### value
Used to bind plain values.

e.g.
```javascript
IoC.value('secretKey', 999888777);

async function fnName() {
  const sKey = await IoC.resolve('secretKey');

  console.log(sKey === 999888777); // true
}
```

### resolve
Resolve registered bindings through `value`, `callable`, `instance`, `singleton` methods.
