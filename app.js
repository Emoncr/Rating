let starsEl = document.querySelectorAll(".fa-star")
let emojis = document.querySelectorAll(".far")
const colorsAry = ["#ff4545", "#ffa534", "#ffe234", "#b7dd29", "#57e32c"]
updateRating(0);
starsEl.forEach((starEl, index)=>{
    starEl.addEventListener("click",()=>{
        updateRating(index);
    })
})
function updateRating(index){
    let starEls = document.querySelectorAll(".fa-star");
    starEls.forEach((starEl , idx)=>{
        if(idx <= index){
            starEl.classList.add("active");
        }
        else{
            starEl.classList.remove("active");
        }
    })
    emojis.forEach((emoji)=>{
        emoji.style.transform = `translateX(-${index * 50}px)`
        emoji.style.color = colorsAry[index]
    })
}