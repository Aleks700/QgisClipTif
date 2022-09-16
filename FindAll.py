import os
def find_all(name, path):
    result = []
    for root, dirs, files in os.walk(path):
        if name in files:
            result.append(os.path.join(root, name))
    return result


pathToFind = r'E:\Для снимков'
name=r'IMAGERY.tif'
matchup = find_all(name,pathToFind)
# print(matchup[0],'\n')
# print(matchup[1],'\n')
# print(matchup[2],'\n')
# print(matchup[3],'\n')
sortio = matchup.sort()
for x in sorted(matchup):
    print(x,'\n')


print( len(matchup))