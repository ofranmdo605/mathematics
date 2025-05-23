import sympy as sp
x, y = sp.symbols('x y')
f = x**2 + 3*x*y - y**2 + 4*x

f.expand()
