let byWhat="first";
let contentTime= document.querySelector('#byTime');
let contentExperience= document.querySelector('#byExperience');


function filterBy(){
    if (byWhat==="first"){
        contentTime= document.querySelector('#byTime').innerHTML;
        contentExperience= document.querySelector('#byExperience').innerHTML;
        document.querySelector('#byTime').innerHTML = " ";
        byWhat="time";
    }else if(byWhat==="experience"){
        contentTime= document.querySelector('#byTime').innerHTML;
        document.querySelector('#byTime').innerHTML = " ";
        document.querySelector('#byExperience').innerHTML = contentExperience;
        byWhat="time";
    }else if (byWhat==="time"){
        contentExperience= document.querySelector('#byExperience').innerHTML;
        document.querySelector('#byTime').innerHTML = contentTime;
        document.querySelector('#byExperience').innerHTML = " ";
        byWhat="experience";
    }
}

document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('button').onclick=filterBy
})
