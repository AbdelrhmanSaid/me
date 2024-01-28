---
title: 'Inheritance vs Composition in Object Oriented Programming'
date: 2024-01-29
---

Object-oriented programming (OOP) provides developers with powerful tools to create modular, reusable, and maintainable code. Two fundamental concepts in OOP are inheritance and composition. In this blog post, we'll explore the differences between inheritance and composition in PHP, along with their advantages, use cases, and best practices.

---

## Inheritance

Inheritance is a core principle of OOP that allows a class (subclass) to inherit properties and methods from another class (superclass). In PHP, inheritance is achieved using the `extends` keyword.

```php
class Animal {
    public function makeSound() {
        echo "Animal is making a sound";
    }
}

class Dog extends Animal {
    public function wagTail() {
        echo "Dog is wagging its tail";
    }
}

$dog = new Dog();
$dog->makeSound(); // Output: Animal is making a sound
$dog->wagTail();   // Output: Dog is wagging its tail
```

In the example above, the `Dog` class inherits the `makeSound()` method from the `Animal` class. This allows us to avoid code duplication and promote code reusability.

### Advantages of Inheritance:

1. **Code Reusability**: Inheritance allows subclasses to reuse code from superclasses, reducing redundancy and promoting a more modular codebase.
2. **Easy Maintenance**: Changes made to a superclass are automatically reflected in all its subclasses, promoting easier maintenance and updates.
3. **Promotes Code Organization**: Inheritance helps in organizing classes into a hierarchy, making the codebase more understandable and manageable.

## Composition

Composition is another important concept in OOP that involves constructing complex objects by combining simpler ones. Unlike inheritance, where subclasses inherit behavior from superclasses, composition involves creating relationships between classes where one class contains an instance of another.

```php
class Engine {
    public function start() {
        echo "Engine started";
    }
}

class Car {
    private $engine;

    public function __construct() {
        $this->engine = new Engine();
    }

    public function startCar() {
        $this->engine->start();
    }
}

$car = new Car();
$car->startCar(); // Output: Engine started
```

In the example above, the `Car` class contains an instance of the `Engine` class. This is a "has-a" relationship, where a `Car` has an `Engine`.

### Advantages of Composition:

1. **Flexibility**: Composition allows for greater flexibility compared to inheritance. Objects can be composed of other objects, providing more dynamic behavior.
2. **Easier Testing**: Since objects are loosely coupled through composition, it becomes easier to test individual components in isolation.
3. **Encapsulation**: Composition promotes encapsulation by hiding the internal workings of objects. Changes to the internal structure of a class are less likely to affect other parts of the system.

## When to Use Inheritance vs Composition

Choosing between inheritance and composition depends on the specific requirements of your application. Here are some guidelines:

- **Use Inheritance**:
  - When there is a clear "is-a" relationship between two classes (e.g., `Dog` is an `Animal`).
  - When you want to promote code reuse and create a hierarchical structure.

- **Use Composition**:
  - When there is a "has-a" relationship between two classes (e.g., `Car` has an `Engine`).
  - When you want more flexibility and easier maintenance.

## Conclusion

Inheritance and composition are both powerful techniques in OOP, each with its own strengths and use cases. Understanding when to use inheritance and when to favor composition is essential for writing maintainable, flexible, and scalable code. By leveraging these concepts effectively, you can design object-oriented systems that are robust and easy to extend.

In your PHP projects, carefully consider the relationships between your classes and choose between inheritance and composition based on the specific requirements of your application. Remember, there's no one-size-fits-all solution, and the choice between inheritance and composition should be guided by the principles of simplicity, flexibility, and maintainability.