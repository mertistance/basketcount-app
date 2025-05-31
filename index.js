let homeScoreBtn1 = document.getElementById("home-score-btn1")
let homeScoreBtn2 = document.getElementById("home-score-btn2")
let homeScoreBtn3 = document.getElementById("home-score-btn3")

let guestScoreBtn1 = document.getElementById("guest-score-btn1")
let guestScoreBtn2 = document.getElementById("guest-score-btn2")
let guestScoreBtn3 = document.getElementById("guest-score-btn3")

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl= document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function hsOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function hsTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function hsThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function gsOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function gsTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function gsThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function setScoreToZero() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}