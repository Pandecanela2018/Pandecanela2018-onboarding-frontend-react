# Anwer

What was the issue?
The problem was that the setInterval function captured the initial value of count (0). Because of this, setCount(count + 1) always used the old value, so the counter only increased to 1 and then stopped.
What debugging method did you use?
I used console.log to compare the value of count in the component render and inside the setInterval function.
How did you resolve the problem?
I fixed it by using the functional update:
setCount(prev => prev + 1)
