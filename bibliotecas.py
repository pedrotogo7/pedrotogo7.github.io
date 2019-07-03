import math
import random as rnd 
from os import path

alpha = list((a/(10)*2*math.pi for a in range(11)))
print(alpha)
print(list(map(math.cos, alpha)))
print(math.sin(2*math.pi))

def dado():
    """
    Simula dados de 6 faces
    """
    return rnd.randint(1, 6)
    for i in range(10):