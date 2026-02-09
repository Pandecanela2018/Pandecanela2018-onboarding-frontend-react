# Reflection

## How do unit tests help keep code clean?

Unit tests help in software development by testing each function
to find code mistakes and resolve them early

## What issues did you find while testing?

1-My code didn't work because I had syntax and logic mistakes.
2-When I created the file, I didn’t use the name "test.js," and it didn’t work.

### Test

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

### Unit test

import unittest
from calculator import add, subtract, divide

class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(2, 3), 5)

    def test_subtract(self):
        self.assertEqual(subtract(5, 2), 3)

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)

    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

if __name__ == "__main__":
    unittest.main()
