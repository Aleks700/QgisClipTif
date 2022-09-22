import os

massToPath=['E:\Для снимков\Kurily\HR_2207110357081\DZZ-HR_20220511010214_000039_E149N45_2A_PAN_HR_2207110357081\DZZ-HR_20220511010214_000039_E149N45_2A_PAN_HR_2207110357081/IMAGERY.tif','E:\Для снимков\Kurily\HR_2207110357081\DZZ-HR_20220511010214_000039_E149N45_2A_PAN_HR_2207110357081\DZZ-HR_20220511010214_000039_E149N45_2A_PAN_HR_2207110357081/IMAGERY.tif']

#vlayer = iface.activeLayer()
def finished(path_to_current_img):
    img = render.renderedImage()
        # save the image; e.g. img.save("/Users/myuser/render.png","png")
    img.save(path_to_current_img, "jpg")
# path_to_tif=r'E:\Для снимков\Kurily\HR_2207110357081\DZZ-HR_20220511010214_000039_E149N45_2A_PAN_HR_2207110357081\DZZ-HR_20220511010214_000039_E149N45_2A_PAN_HR_2207110357081/IMAGERY.tif'

# p = "my/path/to/file.py"
# os.path.normpath(p)
# 'my\\path\\to\\file.py'



# lok.partition('imagert.tif')



for x in massToPath:
    paths=os.path.normpath(x)
    vlayer = QgsRasterLayer(paths, "SRTM layer name")
    settings = QgsMapSettings()
    settings.setLayers([vlayer])
    settings.setBackgroundColor(QColor(255, 255, 255))
    settings.setOutputSize(QSize(800, 800)) 
    settings.setExtent(vlayer.extent())

    render = QgsMapRendererParallelJob(settings)
    image_path = paths.partition('IMAGERY.tif')[0]
    image_location = os.path.join(image_path, "render.jpg")
    render.finished.connect(finished(image_location))

    # Start the rendering
    render.start()

    # The following loop is not normally required, we
    # are using it here because this is a standalone example.
    from qgis.PyQt.QtCore import QEventLoop
    loop = QEventLoop()
    render.finished.connect(loop.quit)
    loop.exec_()