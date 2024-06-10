let home = 0
let away = 0

function score(isHome, amount) {
    if (isHome) {
        home += amount
        if (home < 0) {
            home = 0
        }
    }
    else {
        away += amount
        if (away < 0) {
            away = 0
        }
    }
    updateLabels()
}

function updateLabels() {

    const homeScoreElement = document.getElementById("home-score")
    let padHome = String(home).padStart(2, '0');
    homeScoreElement.innerText = String(padHome)
    const awayScoreElement = document.getElementById("away-score")
    let padAway = String(away).padStart(2, '0');
    awayScoreElement.innerText = String(padAway)
    if (home >= 21) {
        alert("Home team wins!")
        reset()
    }
    else if (away >= 21) {
        alert("Away team wins!")
        reset()
    }
}

function reset() {
    home = 0
    away = 0
    updateLabels()
}