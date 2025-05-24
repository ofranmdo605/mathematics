import sympy as sp

# Define symbols
x, y = sp.symbols('x y')

# Define equation
equation = x**2 + 3*x*y - y**2

# Solve the equation
solution = sp.solve(equation, (x, y))
print(solution)
