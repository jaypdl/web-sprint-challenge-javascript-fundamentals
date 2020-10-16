## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

    Both `.forEach`  & `.map` iterate through an array. `.map` returns a new array with the transformations you specify, `.forEach` does not return anything by default.

2. Explain the difference between a callback and a higher order function.

    A higher order function, is a function that accepts another function as a parameter. A callback function is the function that goes into the higher order function.

3. What is closure?

    When a function is created, a closure is created that contains the function and all the variables that were accessible to it in scope. This allows a function to reach into an outer-scope to grab information. 

4. Describe the four rules of the 'this' keyword.

    1. There is Global/Window Binding, this is the default meaning of 'this'.

    2. There is Implicit Binding. 'this' refers to the object containing the function. In other words, look to the left of the dot.

    3. There is Explicit Binding. In this case you tell JS where to look for 'this' using .call, .apply, or .bind.

    4. There is New Binding. In a constructor function when using the new keyword, 'this' refers to the new object being created.


5. Why do we need super() in an extended class?

   We need 'super()' in an extended class to inherit all of the parent's properties and methods.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 
