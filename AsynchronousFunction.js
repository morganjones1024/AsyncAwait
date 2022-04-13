/* async function myDisplay() {
    var Promise = new Promise(function(resolve) {
      setTimeout(function() {resolve(Math.random());}, 500);
    });
    return Promise;
  }
  
  myDisplay(); */
  
  async function getRandomNumber() {
    await new Promise(resolve => setTimeout(resolve, 500));
  
    return Math.floor(Math.random() * 100);
  }
  
  function f() {
    getRandomNumber().then(result => console.log(result));
  }
  
  f();