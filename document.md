# How I Came Up with This Solution

## First Part (Clean the Input)

If you look at the question, what really matters is simplifying the input string. You should make it lowercase, delete punctuation, or, as in the third input, delete leading white space.

So, how can I handle this?

- First of all, convert all the input to lowercase using the `toLowerCase()` method from the string prototype.

- Second, we need to remove all the extra characters from our string. We can do this in two ways:

   **1-** You can easily use `.replace()` and inside that use a regex which replaces every character with "".
   
   **2-** As you can see in the question, we need to get an array as a result, which hints that we should work with arrays instead of strings. That's why we use `match()`, because it can handle punctuation for us and return an array in the end.
   
   In the regex, we use these three:
   
   - `/g`: search in all over the string
   - `/b`: word
   - `+`: one or more (delete white space)

- Save the result in a variable. Here, we use the original input for that because we don't want to use a lot of memory, making the code faster and more efficient.

   `HINT:` It's also cleaner to define a new variable and store the array into that.

## Second Part (Count the Words)

Now that we have all the words from the string in an array, in this part we should count the words.

To do this, you can use an object data type or a map data type. I prefer using an object because the key is a simple string and the value is the count of its usage.

   `HINT:` If the key is some data type like boolean or int, we should definitely use a map data type.

- So, we create an empty map. As you know, if you define a map as a constant, there is no problem changing inside of this data type in the future.

- We need to loop over the array of strings (which we call `text` in our code). We can use different types of loops like a traditional `for` loop or some of the loops that come from the prototype of the array like `forEach`, `map`, `reduce`, etc.

   I decided `forEach` is the best implementation for this scenario because we want to loop through the length of the array and don't need any return at the end; we just modify our object.

- In the body of our loop, we check if the current word exists as a key in our object. If it does, we increment its count; if not, we add it as a new key with a count of 1.

   When I work with 0, I personally prefer to use `??` instead of `||` because it treats 0 as a truthy value (right here there's no difference, but I still use `??`).

## Third Part (Sort the Values and Get the Top 3)

In this part, we first need to get the key-value pairs of the object and compare them to find the most used word.

- We use `Object.entries()`, which sends keys and values separately as an array.

- Sorting is a built-in method for this situation, but we use a function inside that, allowing us to set them in the order we want.

   **First scenario:** A negative value indicates that `a` should come before `b`.
   
   **Second scenario:** A positive value indicates that `a` should come after `b`.
   
   **Third scenario:** Zero or NaN indicates that `a` and `b` are considered equal.

here we also use `localCompare()` because if in some situation we have third scenario we can have sort by alphabetical order

- After that, we can easily use `slice` to get the top 3 (we don't want to use `splice` because it modifies the original array and returns the deleted part).

- To get a clean format of the data, we use `map`, which takes an array and returns an array itself, and that would be our final result.
