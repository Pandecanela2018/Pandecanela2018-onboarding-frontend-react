# Answer

## Which AI tools did you try?

I tried Copilot and ChatGPT, and they both wrote my code, but I think ChatGPT is better than Copilot because ChatGPT explains the code more explicitly.

## What worked well? What didn’t?

Well, ChatGPT worked very well, when I wrote the prompt and sent the prompt, chatGPT explain all code and how to work.

## When do you think AI is most useful for coding?

I think AI is the most powerful tool that software developers have, and it is especially important when you need to implement a new feature in the code.

## my code

def calculadora():
    print("Calculadora básica")
    print("Operaciones disponibles: +  -  *  /")

    num1 = float(input("Ingrese el primer número: "))
    operador = input("Ingrese el operador: ")
    num2 = float(input("Ingrese el segundo número: "))

    if operador == "+":
        resultado = num1 + num2
    elif operador == "-":
        resultado = num1 - num2
    elif operador == "*":
        resultado = num1 * num2
    elif operador == "/":
        if num2 == 0:
            print("Error: no se puede dividir entre cero")
            return
        resultado = num1 / num2
    else:
        print("Operador no válido")
        return

    print("Resultado:", resultado)

calculadora()
