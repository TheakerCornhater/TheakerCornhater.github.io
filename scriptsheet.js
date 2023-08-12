function buttonWasClicked(){
    const title = document.getElementByClassName(bigWords);
    title.style.color = red;
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function(paragraph){
      paragraph.style.color = getRandomColor();
    });
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

