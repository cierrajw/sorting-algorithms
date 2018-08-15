const { assert } = require('chai');

const Box = require('../Box');

describe('Box', function() {
  it('should return true', function() {
    assert.equal(true, true);
  });

  it('should have a box constructor', function(){

    var box = new Box(this.height, this.width);

    assert.instanceOf(box, Box, 'box is an instance of Box');
    

  });

  it('should have a default height and width', function(){

    var box = new Box(this.height, this.width);

    assert.equal(box.height, 100);
    assert.equal(box.width, 100);

  });

  it('should accept parameters for height and width', function(){

    var box = new Box(this.height, this.width);

    // assert.equa


  });

  it.only('should be able to calculate the area of your box using the method `.area()`', function(){

    var box = new Box(30, 30);

    assert.equal(box.area(), 900);

  });


});
