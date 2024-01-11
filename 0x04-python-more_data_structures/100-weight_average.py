#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:
        return 0

    num = 0
    denom = 0

    for ind in my_list:
        num += ind[0] * ind[1]
        denom += ind[1]

    return (num / denom)
