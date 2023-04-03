// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

function myFunction2() {
  var x = document.getElementById("tabs");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("tabs");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var counter = 1;
    setInterval(function()  {
      document.getElementById('radio'+ counter).checked = true;
      counter++; 

      if(counter>4){
        counter=1
      }

    }, 5000);
   


    /*
  <!-- Image Slider Start -->
  <div class="slider">

    <div class="slides">
      <!-- Radio Button Start  -->
      <input type="radio" name="radio-btn" id="radio1">
      <input type="radio" name="radio-btn" id="radio2">
      <input type="radio" name="radio-btn" id="radio3">
      <input type="radio" name="radio-btn" id="radio4">
      <!-- Radio Button Close  -->

      <!-- Slide Image Start -->
      <div class="slide first">
        <img src="./images/gty_march_on_washington_martin_luther_king_ll_130819_16x9_1600.jpg" alt="">
      </div>
      <div class="slide">
        <img src="./images/hero-crop-gettyimages-459534214.jpg" alt="">
      </div>
      <div class="slide">
        <img src="./images/martin-luther-king-jr-now-032017.jpeg.jpg" alt="">
      </div>
      <div class="slide">
        <img src="./images/martin-luther-king-jr.jpg" alt="">
      </div>
      <!-- Slide Image Close -->

      <!-- Automatic Navigation Start -->
      <div class="navigation-auto">
        <div class="auto-btn-1"></div>
        <div class="auto-btn-2"></div>
        <div class="auto-btn-3"></div>
        <div class="auto-btn-4"></div>
      </div>
      <!-- Automatic Navigation Close -->
    </div>
	
      <!-- Mannual Navigation Start -->
      <div class="navigation-mannual">
        <label for="radio1" class="mannual-btn"></label>
        <label for="radio2" class="mannual-btn"></label>
        <label for="radio3" class="mannual-btn"></label>
        <label for="radio4" class="mannual-btn"></label>
      </div>
      <!-- Mannual Navigation Close -->
  </div>

-->
  <!-- Image Slider Close -->
*/

