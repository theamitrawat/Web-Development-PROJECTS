let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let Image1_source = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", Image1_source);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let Image2_source = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", Image2_source);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🥇Player 1 Win!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "🥇Player 2 Win!"
}
else {
    document.querySelector("h2").innerHTML = "🥹Draw!"
}