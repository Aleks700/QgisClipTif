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



# image_location = os.path.join(QgsProject.instance().homePath(), "render.png")
image_location = os.path.join('E:\Для снимков\pan', "render.jpg")

vlayer = iface.activeLayer()
settings = QgsMapSettings()
settings.setLayers([vlayer])
settings.setBackgroundColor(QColor(255, 255, 255))
settings.setOutputSize(QSize(20000, 20000))
settings.setExtent(vlayer.extent())

render = QgsMapRendererParallelJob(settings)

def finished():
    img = render.renderedImage()
    # save the image; e.g. img.save("/Users/myuser/render.png","png")
    img.save(image_location, "jpg")

render.finished.connect(finished)

# Start the rendering
render.start()

# The following loop is not normally required, we
# are using it here because this is a standalone example.
from qgis.PyQt.QtCore import QEventLoop
loop = QEventLoop()
render.finished.connect(loop.quit)
loop.exec_()



#from shutil import rmtree
# rmtree(r"C:\Users\A.Agadilov\AppData\Local\QGIS\QGIS3\cache", ignore_errors=True) path to cache