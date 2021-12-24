document.querySelector(".img1").setAttribute("src", "images/dice6.png")
document.querySelector(".img2").setAttribute("src", "images/dice6.png")

randomNumber1 = Math.random()
final = randomNumber1*6     
final = Math.floor(final) + 1

link1 = "images/dice" + final + ".png"
document.querySelector(".img1").setAttribute("src", link1)

randomNumber2 = Math.random()
final2 = randomNumber2*6     
final2 = Math.floor(final2) + 1

link2 = "images/dice" + final2 + ".png"
document.querySelector(".img2").setAttribute("src", link2)

if (final > final2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
}
else if (final < final2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}