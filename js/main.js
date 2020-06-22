const toggleOn = document.getElementById("header-fixed");
const nextBtn= document.getElementById("next_btn");
const preBtn= document.getElementById("pre_btn");
const scroll= document.querySelector(".portfolio_list");

const modalOpen1 = document.getElementById("modal_open1");
const modalOpen2 = document.getElementById("modal_open2");
const modalOpen3 = document.getElementById("modal_open3");
const modalOpen4 = document.getElementById("modal_open4");
const overlay= document.querySelector(".modal_overlay");

const modal_html5 = document.querySelector(".modal_html5");
const modal_html5_2 = document.querySelector(".modal_html5_2");
const modal_js = document.querySelector(".modal_js");


const modal_close_btn1 = document.querySelector(".close_btn1");
const modal_close_btn2 = document.querySelector(".close_btn2");
const modal_close_btn3 = document.querySelector(".close_btn3");

const skill_html5 = document.getElementById("skill_html5");
const skill_css3 = document.getElementById("skill_css3");
const skill_js = document.getElementById("skill_js");
const skill_react = document.getElementById("skill_react");

const html5_skill = document.querySelector(".html5_skill");
const css3_skill = document.querySelector(".css3_skill");
const js_skill = document.querySelector(".js_skill");
const react_skill = document.querySelector(".react_skill");



let counter = 0;
let scroll_counter=0;



function init(){
    window.addEventListener("mousewheel",()=>{
         if(window.scrollY>1234){
            toggleOn.classList.add("on");
        }
        else{
            toggleOn.classList.remove("on");
        }

});
    
    sliderBtn();
    modalEvent();
    skillEvent();
}

function sliderBtn(){
    preBtn.addEventListener("click",()=>{
        scroll_counter-=1;
        if(scroll_counter<0){
            scroll_counter = 2;
            scrollEvent(scroll_counter);
        }else{
            scrollEvent(scroll_counter);
        }
    }); 
    nextBtn.addEventListener("click",()=>{
        scroll_counter+=1;
        if(scroll_counter>2){
            scroll_counter = 0;
            scrollEvent(scroll_counter);
        }else{
            scrollEvent(scroll_counter);
        }
    });

}

function modalEvent(){
    modalOpen1.addEventListener("click",()=>{
        modal_html5.classList.remove("off");
        overlay.classList.remove("off");
    });
    modalOpen2.addEventListener("click",()=>{
        modal_html5_2.classList.remove("off");
        overlay.classList.remove("off");
    });
    modalOpen3.addEventListener("click",()=>{
        modal_js.classList.remove("off");
        overlay.classList.remove("off");
    });


    modal_close_btn1.addEventListener("click",()=>{
        modal_html5.classList.add("off");
        overlay.classList.add("off");
    });

    modal_close_btn2.addEventListener("click",()=>{
        modal_html5_2.classList.add("off");
        overlay.classList.add("off");
    });
    modal_close_btn3.addEventListener("click",()=>{
        modal_js.classList.add("off");
        overlay.classList.add("off");
    });


    overlay.addEventListener("click",()=>{
        overlay.classList.add("off");
        modal_js.classList.add("off");
        modal_html5_2.classList.add("off");
        modal_html5.classList.add("off");
    });

}



// function mouseEvent(e){
//     if(e.wheelDelta===120){
//         if(counter===0){
//             counter=0;
//         }
//         else if(counter>0){
//             counter-=1;
//         }
//     }
//     else if(e.wheelDelta ===-120){
//         if(counter===4){
//             counter=4;
//         }
//         else if(counter<4){
//             counter+=1;
//         }
//     }
    //     switch(counter){
//         case 0:
//             location.href="#top-page";
//             break;
//         case 1:
//             location.href="#Profile";
//             break;
//         case 2:
//             location.href="#Skill";
//             break;
//         case 3:
//             location.href="#Portfolio";
//             break;
//         case 4:
//             location.href="#Contect";
//             break;
        
//     }


function scrollEvent(index){
    switch(index){
        case 0:{
            scroll.style.left = `-${index*100}%`;
        }
        case 1:{
            scroll.style.left = `-${index*100}%`;
        }
        case 2:{
            scroll.style.left = `-${index*100}%`;
        }
    }
}



function skillEvent(){
    skill_html5.addEventListener("click",()=>{
        skill_html5.classList.add("on_skill");
        html5_skill.classList.add("show_skill");

        skill_react.classList.remove("on_skill");
        skill_js.classList.remove("on_skill");
        skill_css3.classList.remove("on_skill");

        css3_skill.classList.remove("show_skill");
        react_skill.classList.remove("show_skill");
        js_skill.classList.remove("show_skill");
    });

    skill_react.addEventListener("click",()=>{
        skill_react.classList.add("on_skill");
        react_skill.classList.add("show_skill");

        skill_js.classList.remove("on_skill");
        skill_css3.classList.remove("on_skill");
        skill_html5.classList.remove("on_skill");

        html5_skill.classList.remove("show_skill");
        css3_skill.classList.remove("show_skill");
        js_skill.classList.remove("show_skill");
    });
    skill_js.addEventListener("click",()=>{
        skill_js.classList.add("on_skill");
        js_skill.classList.add("show_skill");

        skill_css3.classList.remove("on_skill");
        skill_html5.classList.remove("on_skill");
        skill_react.classList.remove("on_skill");

        html5_skill.classList.remove("show_skill");
        react_skill.classList.remove("show_skill");
        css3_skill.classList.remove("show_skill");
    });
    skill_css3.addEventListener("click",()=>{
        skill_css3.classList.add("on_skill");
        css3_skill.classList.add("show_skill");

        skill_html5.classList.remove("on_skill");
        skill_react.classList.remove("on_skill");
        skill_js.classList.remove("on_skill");

        html5_skill.classList.remove("show_skill");
        react_skill.classList.remove("show_skill");
        js_skill.classList.remove("show_skill");
    });

}

init();