/*  
  Порождающие паттерны:

  Builder(строитель) - позволяет вынести часть логики построения объекта в рамках класс Builder 

  Цель: Есть класс Builder, который позволяет собрать объект
*/

enum ImageFormat {
  Png = 'png',
  Jpeg = 'jpeg'
}
interface IResolution {
  width: number;
  height: number;
}

interface IImageConversion extends IResolution{
  format: ImageFormat
}

/* каждый метод Imagebuilder должен возвращать этот же самый объект, для того что бы объект был chain (вызов методов через точку) */
class Imagebuilder {
  private formats: ImageFormat[] = [];
  private resolution: IResolution[] = [];
  
  addPng() {
    if(this.formats.includes(ImageFormat.Png)) {
      return this
    }
    this.formats.push(ImageFormat.Png)
    return this
  }

  addJpeg() {
    if(this.formats.includes(ImageFormat.Jpeg)) {
      return this
    }
    this.formats.push(ImageFormat.Jpeg)
    return this
  }

  addResolution(width: number, height: number) {
    this.resolution.push({width, height})
    return this
  }

  build(): IImageConversion[] {
    const res: IImageConversion[] = [];

    for(const r of this.resolution) {
      for(const f of this.formats) {
        res.push({
          format: f,
          width: r.width,
          height: r.height
        })
      }
    }
    return res
  }
}

console.log(new Imagebuilder()
  .addJpeg()
  .addPng()
  .addResolution(100, 50)
  .addResolution(200, 100)
  .build()
);