(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('sup, yo!');

  function myFunc() {
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  (function () {
    // select the cars from the DOM (the web page) using the data-ref class. this creates a list of elements; it's like an array, so we can loop through them and do things like add event listeners and change classes one at a time with a forEach method (method is just another word for function)

    // constants are exactly what the word means - something that doesn't change. You can't change or redefine a constant once it's declared, so they're good for things that are meant to be constant throughout the runtime of an app
    const carButtons = document.querySelectorAll('.data-ref');

    // the XMLHttpRequest object is a built-in part of every browser's JavaScript API. It has methods (functions) and propeties that you can run to do an AJAX request. Declaring it with round brackets at the end instantiates (creates) a new instance of the object.
    const httpRequest = new XMLHttpRequest();

    // the getCarData function fires every time you click on a car thumbnail; it passes itself into the function (the 'this' keyword referes to the object that called the function => the element clicked on) so that we can use that element's ID attribute as a reference to pass to the query we want to run. We're retrieving a single row from the database where the ID that we pass matches the field we've referenced in the query (in the functions.php file)
    function getCarData() {
      const url = './includes/functions.php?carModel=' + this.id
      //fetch API uses new javascript promise API
      fetch(url) //do an ajax call with fetch
        .then((resp) => resp.json())//convert response to json
        .then(({modelName, pricing, modelDetails, model }) =>{
          let carModel = document.querySelector('.modelName').textContent = modelName;
          let price = document.querySelector('.priceInfo').innerHTML = pricing;
          let desc = document.querySelector('.modelDetails').textContent = modelDetails;
          carButtons.forEach(function(car, index) {
            car.classList.add('nonActive');
          });
          document.querySelector(`#${model}`).classList.remove('nonActive');
        })//cal the
        .catch(function(error) { //catch errors
          console.log(error);
        });
    }
    // loop through and add event handling to each car thumbnail on the page. on a click, they'll fire the AJAX call at the top of the script file.
    carButtons.forEach(function(car, index) {
      car.addEventListener('click', getCarData, false);
    });

  })();
