lst = []

n = int(input("Enter number of elements : "))

for i in range(0, n):
    ele = input("Enter value: ")

    lst.append(ele)


tupl=tuple(lst)
print(lst)
print(tupl)