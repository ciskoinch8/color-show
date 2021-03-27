const color = ["green", "red", "rgba(133, 122, 200)", "f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0 - 3
    const radomNumber =  getRandomNumber();
    console.log(radomNumber);
    document.body.style.backgroundColor = colors[radomNumber];
    color.textContent = colors[radomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}