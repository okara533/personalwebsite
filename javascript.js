function showText(page){
    document.querySelectorAll(".experiences").forEach(div => div.style.display = "none");
    if(page=="byTime"){
        document.querySelector(`#${page}`).style.display = "block";}
        else{
            document.querySelector(`#${page}`).style.display = "flex";
        }
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("button").forEach(button =>{
        button.onclick = function(){
            showText(this.dataset.page);
        }
        
    });

    

    
});