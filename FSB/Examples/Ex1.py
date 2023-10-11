def is_right_angled_triangle(a, b, c):
    if (a * a + b * b == c * c):
        return True
    else:
        return False


a = int(input("Enter the first side of the triangle: "))
b = int(input("Enter the second side of the triangle: "))
c = int(input("Enter the third side of the triangle: "))

if (is_right_angled_triangle(a, b, c)):
    print("Yes, triangle is a right angle triangle")
else:
    print("No, triangle is not a right angle triangle")


# result = (is_right_angled_triangle(a, b, c))
# print(result)
