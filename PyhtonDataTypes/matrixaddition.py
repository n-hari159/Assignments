a=[[[1,2,3],[4,5,6],[7,8,9]]]
b=[[[1,2,3],[4,5,6],[7,8,9]]]
c=[]
for i in range(1):
    newlist=[]
    for j in range(3):
        newlist.append(a[i][j]+b[i][j])
        for k in range(3):
            newlist.append(a[i][j][k]+b[i][j][k])
        c.append(newlist)
print(c)