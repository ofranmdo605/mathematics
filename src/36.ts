import numpy as np

def calculate_expression(expr):
    """
    Calculate an expression using Python's built-in math functions.
    
    Args:
    expr (str): A mathematical expression in the form of 'numerator/denominator'.
    
    Returns:
    float: The result of the expression.
    """
    num, den = map(float, expr.split('/'))
    return num / den

# Example usage
print(calculate_expression("3/4"))
