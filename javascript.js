function showText(page){
    document.querySelectorAll(".experiences").forEach(div => div.style.display = "none");
    document.querySelector(`#${page}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("button").forEach(button =>{
        button.onclick = function(){
            showText(this.dataset.page);
        }
    });

    

    
})

    /*
    #byExperienceButton{
        box-shadow:inset 0px 1px 0px 0px #3dc21b;
        background:linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
        background-color:#44c767;
        border:1px solid #18ab29;
        text-shadow:0px 1px 0px #2f6627;
    }
    
    #byExperienceButton:hover {
        background:linear-gradient(to bottom, #5cbf2a 5%, #44c767 100%);
        background-color:#5cbf2a;
    }*/