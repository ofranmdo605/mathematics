import sympy
from sympy import *
f = symbols('x')
g = x**2 - 4*x + 3
solve(f*g)
