# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The `PartitionKeyGenerator` class has been moved to its own module called `partitionKeyGenerator.js`. The main function `deterministicPartitionKey` now creates an instance of the `PartitionKeyGenerator` class and calls its generate method to generate a partition key.

This separation of concerns allows the `PartitionKeyGenerator` class to be tested separately from the main function, while still keeping the main function intact for testing purposes. If we need to change the implementation of the `PartitionKeyGenerator` class, we can do so without affecting the main function. Similarly, if we need to change the logic in the main function, we can do so without affecting the `PartitionKeyGenerator` class.

To test the `deterministicPartitionKey` function, we can import it in our test file and call it with sample events. We can also import the `PartitionKeyGenerator` class and test its generate method separately if needed.

The PartitionKeyGenerator class adheres to the SOLID principles:

- Single Responsibility Principle (SRP): The PartitionKeyGenerator class has a single responsibility, which is to generate partition keys for event objects. It does not try to do anything else, such as interact with a database or handle network requests. This makes the class easier to understand, maintain, and test.

- Open/Closed Principle (OCP): The PartitionKeyGenerator class is open for extension but closed for modification. This means that if we want to add new functionality, such as support for additional hashing algorithms, we can do so by creating a new class that extends PartitionKeyGenerator, rather than modifying the existing class.

- Liskov Substitution Principle (LSP): The PartitionKeyGenerator class can be used interchangeably with its parent class, if it had one. This is because the generate method of the PartitionKeyGenerator class has the same signature as the deterministicPartitionKey function it replaced.

- Interface Segregation Principle (ISP): The PartitionKeyGenerator class only exposes the generate method, which is the only method needed to generate partition keys. This means that clients of the class do not need to implement unnecessary methods or interact with any state that they do not care about.

- Dependency Inversion Principle (DIP): The PartitionKeyGenerator class depends only on abstractions, not on concrete implementations. In this case, it depends on the HashProvider interface, which is implemented by the Sha3HashProvider class. This means that we can easily swap out the Sha3HashProvider for a different implementation if we need to, without affecting the PartitionKeyGenerator class.
