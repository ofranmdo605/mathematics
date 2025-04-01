import numpy as np

def calculate_expression(expression):
    """
    A simple function to calculate an expression using Python's built-in arithmetic operations.
    
    Args:
    expression (str): The mathematical expression to be calculated.

    Returns:
    float: The result of the calculation.
    """
    return eval(expression)

# Example usage
result = calculate_expression("3 + 5 * 2")
print(result)
