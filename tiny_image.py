from math import ceil
from PIL import Image


def tiny_image(file_name, quality=80):
    """
    无损压缩图片
    :param file_name: 压缩的名称
    :param quality: 压缩质量
    :return:
    """
    img = Image.open(file_name)

    if img.mode == "RGB":
        type = "JPEG"
    elif img.mode == "RGBA":
        type = "PNG"
    else:  # 其他的图片就转成JPEG
        img = img.convert("RGB")
        type = "JPEG"

    srcWidth, srcHeight = img.size

    srcWidth = srcWidth + 1 if srcWidth % 2 == 1 else srcWidth
    srcHeight = srcHeight + 1 if srcHeight % 2 == 1 else srcHeight

    longSide = max(srcWidth, srcHeight)
    shortSide = min(srcWidth, srcHeight)

    scale = shortSide / longSide
    if (scale <= 1 and scale > 0.5625):
        if (longSide < 1664):
            scale = 1
        elif (longSide < 4990):
            scale = 2
        elif (longSide > 4990 and longSide < 10240):
            scale = 4
        else:
            scale = max(1, longSide // 1280)

    elif (scale <= 0.5625 and scale > 0.5):
        scale = max(1, longSide // 1280)
    else:
        scale = ceil(longSide / (1280.0 / scale))
    srcWidth, srcHeight = img.size
    cache = img.resize((srcWidth // scale, srcHeight // scale),
                       Image.ANTIALIAS)
    file_name1 = file_name + '.' + type.lower()
    cache.save(file_name1, quality=quality)
    print('压缩完成,文件名:'+file_name1)


if __name__ == '__main__':
    # 压缩图片名字
    file_name = r""
    tiny_image(file_name)
