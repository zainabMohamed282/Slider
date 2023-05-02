// Get Slider Items --> Array.from [ES6]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//Get Number Of Slides 
var slidesCount = sliderImages.length;  //5

//Set Current Slide
 var currentSlide =1;

 //Slide Number Element
 var slideNumberElement = document.getElementById('slide-number');
 
 //previous and next buttons
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

 //Handle click on next and previous buttons
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;


//Create The Main UL Element
var paginationElement = document.createElement('ul');

//Set ID On UL Element
paginationElement.setAttribute('id','pagination-ul');

//Create List Items Based On Slids Count 
for(var i = 1 ; i <= slidesCount;i++){
    //Create Li
    var paginationItem = document.createElement('li');
    //Set Custom Attribute
    paginationItem.setAttribute('id',i);
    //Set Item Content
    paginationItem.appendChild(document.createTextNode(i));
    //Append Items to UL List
    paginationElement.appendChild(paginationItem);
}

//Add The Created UL Element To The Page
document.getElementById('indicators').appendChild(paginationElement);

//Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items --> Array.from [ES6]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//trigger thechecker function 
theChecker();

//loop through all bullets items 
for(var i=0 ; i<paginationBullets.length;i++){
 paginationBullets[i].onclick = function(){
    currentSlide = parseInt(this.getAttribute('id'));
    // console.log(this)
    theChecker();
 }
}

//Create The Checker Function
function theChecker(){
    
    //Set The Slid Number
    slideNumberElement.innerHTML='Slide #'+ currentSlide + 'Of '+ slidesCount;

    //remove All Active Classes
    removeAllActive();

    //Set Active Class On Current Slid
    sliderImages[currentSlide-1].classList.add('active');
    
    //Set Active Class On Current Pagination Item
    paginationCreatedUl.children[currentSlide-1].classList.add('active');

    //check if the current slide is the first 
    if(currentSlide==1){
        prevButton.classList.add('disabled')
    }else{
        prevButton.classList.remove('disabled')
    }

    //check if the current slide is the last 
    if(currentSlide==slidesCount){
        nextButton.classList.add('disabled')
    }else{
        nextButton.classList.remove('disabled')
    }
}

//Remove All active classes from images and Bullets
function removeAllActive(){
    //Loop Through Images
    sliderImages.forEach(function(img){
        img.classList.remove('active')
    });

    //Loop Through Bullets
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    })
}

//next Slide Function
function nextSlide(){
   if(nextButton.classList.contains('disabled')){
       return false;
}else{

    currentSlide++;
    theChecker();
}
}

//previous Slide Function
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        return false;
 }else{  
     currentSlide--;
     theChecker();
 }}

 
setInterval(function autoPlay() {
    if (nextButton.classList.contains('disabled')) {
        currentSlide = 1;
        theChecker();
    } else {
        currentSlide++;
        theChecker();
    }
}, 3000)