import numpy as np
from sympy import symbols

def my_function(x):
    y = x * 2 + 3
    z = x**2 - 4*x + 5
    return y, z

my_x_values = np.linspace(-10, 10, 100)
f_x, g_x = my_function(my_x_values)

print("x = ", my_x_values[0])
for i in range(len(g_x)):
    print(f"f({my_x_values[i]}) = {g_x[i]}")
