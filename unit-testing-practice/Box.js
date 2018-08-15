class Box{

  constructor(height = 100, width = 100){
    this.height = height;
    this.width = width;


  } 

  area(){
    const { height, width } = this;
    return height * width;
  }

}

module.exports = Box;