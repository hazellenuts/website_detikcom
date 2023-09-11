var mytext= document.getElementById("my-text");
mytext.addEventListener('keydown', autosize);


function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

var limit = 1000;
var result = document.getElementById("result");
var button = document.getElementById("button");

result.textContent = limit;

mytext.addEventListener("input", function() {
  var textlength = mytext.value.length;
  result.textContent = (limit-textlength);

  if (textlength > limit){
    result.style.color = "#ff0000";
    result.textContent = 0;
    button.style.backgroundColor = "#d5d5d5";
  }
});



const terterList = document.querySelectorAll(".terter");

terterList.forEach((terter) => {
    terter.addEventListener("click", function() {
        // Matikan semua terter
        terterList.forEach((terterLain) => {
            terterLain.classList.remove("active");
        });

        // Nyalakan terter yang sedang diklik
        terter.classList.add("active");
    });
});

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
  if(scrollY >= menu.offsetTop){
    navbar.classList.add("sticky");
  }

  else{
    navbar.classList.remove("sticky");
  }

  if(scrollY <= menu.offsetTop){
    navbar.classList.remove("sticky");
  }
}


