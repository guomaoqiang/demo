require(['./demo.js'],function(imgLoader){
  console.log(imgLoader);
  imgLoader.constructor({
    selector: '.file',
    callback: function(e) {
      console.log(e);
    }
  })
})