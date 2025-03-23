import sympy as sp

def main():
    # Define symbols
    x = sp.symbols('x')
    
    # Define equation
    equation = sp.Eq(x**2 - 4*x + 5, 0)
    
    # Solve the equation
    solutions = sp.solve(equation, x)
    
    # Print solutions
    print(solutions)

if __name__ == "__main__":
    main()
