let slideNumber = 0;
function prevSlide() {
  let list = document.getElementsByClassName("fixed-ratio-content")
  if(slideNumber === 0){
    document.getElementById("slider-container").remove()
  }
  else{
  slideNumber--;
  let img = document.getElementById("slider-image")
  let src = list[slideNumber].getAttribute("src")
  img.setAttribute("src", src); 
  }
}

function nextSlide() {
  let list = document.getElementsByClassName("fixed-ratio-content")
  if(slideNumber === list.length-1){
    document.getElementById("slider-container").remove()
    slideNumber = 0
  }else{
  slideNumber++;
  let img = document.getElementById("slider-image")
  let src = list[slideNumber].getAttribute("src")
  img.setAttribute("src", src); 
  }
}

function exitSlide(){
  document.getElementById("slider-container").remove()
  slideNumber = 0
}

function createSlider() {
  let list = document.getElementsByClassName("fixed-ratio-content");
  let src = list[0].getAttribute("src")
  let slider = document.createElement("div");
  
  slider.setAttribute("id", "slider-container");
  slider.style.width = "100%";
  slider.style.height = "100%";
  slider.style.position = "fixed";
  slider.style.top = "50%";
  slider.style.left = "50%";
  slider.style.transform = "translate(-50%, -50%)"; 
  slider.style.display = "flex";
  slider.style.flexDirection = "column"; 
  slider.style.alignItems = "center"; 
  slider.style.backgroundColor = "rgba(0, 0, 0, 1)";
  slider.style.padding = "10px";
  slider.style.borderRadius = "5px";
  slider.style.zIndex = "1000";

  let prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.style.position = "fixed";
  prevButton.style.left = "10px";
  prevButton.style.top = "50%";
  prevButton.style.transform = "translateY(-50%)";
  prevButton.style.backgroundColor = "#4f46e5";
  prevButton.style.color = "#fff";
  prevButton.style.border = "none";
  prevButton.style.padding = "5px 10px";
  prevButton.style.margin = "0 5px";
  prevButton.style.borderRadius = "3px";
  prevButton.style.cursor = "pointer";
  prevButton.style.outline = "none";
  prevButton.style.transition = "background-color 0.3s";
  prevButton.addEventListener("click", prevSlide);

  let nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.style.position = "fixed";
  nextButton.style.right = "10px";
  nextButton.style.top = "50%";
  nextButton.style.transform = "translateY(-50%)";
  nextButton.style.backgroundColor = "#4f46e5";
  nextButton.style.color = "#fff";
  nextButton.style.border = "none";
  nextButton.style.padding = "5px 10px";
  nextButton.style.margin = "0 5px";
  nextButton.style.borderRadius = "3px";
  nextButton.style.cursor = "pointer";
  nextButton.style.outline = "none";
  nextButton.style.transition = "background-color 0.3s";
  nextButton.addEventListener("click", nextSlide);

  let image = document.createElement("img");
  image.setAttribute("id", "slider-image");
  image.setAttribute("src", src); 
  image.setAttribute("alt", "Slider Image");
  image.style.maxWidth = "100%";
  image.style.maxHeight = "100%";
  image.style.objectFit = "contain";

  let exitButton = document.createElement("button");
  exitButton.textContent = "exit";
  exitButton.style.position = "fixed";
  exitButton.style.left = "10px";
  exitButton.style.top = "10%";
  exitButton.style.backgroundColor = "rgba(170, 50, 51, .1)";
  exitButton.style.color = "#fff";
  exitButton.style.border = "none";
  exitButton.style.padding = "5px 10px";
  exitButton.style.margin = "0 5px";
  exitButton.style.borderRadius = "3px";
  exitButton.style.cursor = "pointer";
  exitButton.style.outline = "none";
  exitButton.style.transition = "background-color 0.3s";
  exitButton.addEventListener("click", exitSlide);
  
  slider.appendChild(exitButton);
  slider.appendChild(prevButton);
  slider.appendChild(image);
  slider.appendChild(nextButton);

  document.body.appendChild(slider);
}
  

function createSliderButton(){
let div = document.getElementsByClassName("flex items-center justify-center my-6 gap-2 text-sm font-bold")
let button = document.createElement("button")
button.setAttribute("class", "justify-center bg-purple text-white hover:text-white rounded px-3 py-1")
button.addEventListener("click", createSlider);
button.textContent = "Slide"
div[0].appendChild(button)
}

window.addEventListener('load', createSliderButton()
  )
