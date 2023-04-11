function showText(page){
    document.querySelectorAll(".experiences").forEach(div => div.style.display = "none");
    document.querySelector(`#${page}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("button").forEach(button =>{
        button.onclick = function(){
            showText(this.dataset.page);
        }
    })
    })