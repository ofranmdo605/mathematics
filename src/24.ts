import sympy

def solve_equation(a, b, c):
    # Solve the quadratic equation ax^2 + bx + c = 0
    solutions = sympy.solve(a * x**2 + b * x + c, x)
    return solutions

a = sympy.Symbol('a')
b = sympy.Symbol('b')
c = sympy.Symbol('c')

equation_result = solve_equation(a, b, c)
print(equation_result)
