const topBt = document.getElementById("topBt");
var scrollPos = 0;
window.onscroll = function() {topBtfunction()};

var slider=document.querySelector(".slider");
var sections=document.querySelectorAll(".slide");
var level=0;
var max=sections.length;
var loading=false;

slider.addEventListener('wheel', (event)=> {
  {
    if (parseInt(slider.getBoundingClientRect().top)==0 && event.deltaY > 0) {
    document.body.style.overflow="hidden";
    }
    else
    {
      window.addEventListener('wheel', (event)=>{
        if (event.deltaY < 0 && level==0)
        {
          document.body.style.overflow="auto";
        }
      });
    }
  }
  if(document.body.style.overflow=="hidden"){
    if(event.deltaY > 0) slideDown();
    else slideUp();}
});

function steps(x) {
 var step = document.querySelector(".steps > div:nth-of-type("+x+")");
    console.log("a");
    step.classList.toggle("unchecked");
    step.classList.toggle("checked");
}
function topBtfunction() {
  if (scrollY > 100) {
    topBt.className = "show";
  } else {
    topBt.className = "";
  }
}
function back2top() {
  document.documentElement.scrollTop = 0;
  document.body.style.overflow="auto";
  level=1;
  slideUp();
}

function anim(){
  if(level==5){
    document.querySelector(".slide:nth-of-type(6) h1").classList.add("aos-animate");}
  else {
    document.querySelector(".slide:nth-of-type(6) h1").classList.remove("aos-animate");
  }
}

function slideDown(){
  if(level+1<max&&!loading){
    level++;
    loading=true;
    anim();
    sections.forEach(elem => {elem.style.transform='translateY('+parseInt(level*(-100))+'%)'});
    setTimeout(function(){loading = false},300);
  }
}
function slideUp(){
  if(level>0&&!loading
    ){
    level--;
    loading=true;
    anim();
    sections.forEach(elem => {elem.style.transform='translateY('+parseInt(level*(-100))+'%)'});
    setTimeout(function(){loading = false},300);
  }
}