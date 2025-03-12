import math

def calculate_pi(n):
    x = 0
    y = 0
    count = 0
    for i in range(n):
        x = random.uniform(0,1)
        y = random.uniform(0,1)
        if x*x + y*y < 1:
            count += 1
    return 4 * count / n
