import numpy as np
from scipy.optimize import curve_fit

def quadratic_func(x, a=1.0, b=2.0):
    """ Define a quadratic function of one variable x with parameters a and b """
    return a * x ** 2 + b * x

params, _ = curve_fit(quadratic_func, [0.5, 1.5, 2.5], np.array([3, 8, 15]))
