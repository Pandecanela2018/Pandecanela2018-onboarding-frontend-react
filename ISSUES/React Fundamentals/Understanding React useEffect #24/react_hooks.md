# Question

When should you use useEffect instead of handling logic inside event handlers?
Use useEffect when your component changes or mounts, because handling logic inside event handlers is more useful for user actions, for example when a user clicks a button and that button triggers an event.
What happens if you don’t provide a dependency array?
You will create a loop function.
How can improper use of useEffect cause performance issues?
If you don’t put a dependency array in your function, the code will keep running all the time and the performance will be slow.
