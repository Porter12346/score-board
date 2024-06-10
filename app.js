let home = 0
let away = 0

function home1() {
    home++
    updateLabels();
}

function away1() {
    away++
    updateLabels();
}

function home3() {
    home += 3
    updateLabels();
}

function away3() {
    away += 3
    updateLabels();
}

function updateLabels() {

    const homeScoreElement = document.getElementById("home-score")
    homeScoreElement.innerText = String(home)
    const awayScoreElement = document.getElementById("away-score")
    awayScoreElement.innerText = String(away)
}

function reset() {
    home = 0
    away = 0
    updateLabels()
}