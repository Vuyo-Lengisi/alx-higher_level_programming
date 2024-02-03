#!/usr/bin/python3
"""Defines an integer addition function."""


def add_integer(a, b=98):
    """Returns the integer addition of a and b.

<<<<<<< HEAD
    Float arguments are typecasted to integers before performing addition.
=======
    Float arguments are typecasted to integers before addition is performed.
>>>>>>> db2bceb42c7be638916f3033db97048682e4d7aa

    Raises:
        TypeError: If either of a or b is a non-integer and non-float.
    """
    if ((not isinstance(a, int) and not isinstance(a, float))):
        raise TypeError("a must be an integer")
    if ((not isinstance(b, int) and not isinstance(b, float))):
        raise TypeError("b must be an integer")
    return (int(a) + int(b))
