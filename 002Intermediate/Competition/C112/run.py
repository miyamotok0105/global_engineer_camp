# 3
# 7 5 12
# 10 6 20
# 12 3 8

# (7 + 5) - 12 = 時差0
# 24 + 0 = 24h
# (10 + 6) - 20 = 時差-4
# 24 - 4 = 20h
# (12 + 3) - 8 = 時差7
# 24 + 7 = 31h

# 20
# 31

list_time_total = []
input_line = int(input())
for i in range(input_line):
    s = input().rstrip().split(' ')


    time_difference = (int(s[0]) + int(s[1])) - int(s[2])
    time_total = 24 + time_difference
    list_time_total.append(time_total)
    #s_1 f_1 t_1

# print(list_time_total)
print(min(list_time_total))
print(max(list_time_total))

