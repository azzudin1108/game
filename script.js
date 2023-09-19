// Menentukan musuh
const musuh = document.getElementsByTagName('a');
const playerMenu = musuh[0];
const compMenu = musuh[1];
const player2 = document.querySelector('.p2');
const comp = document.querySelector('.comp');
const p1Pick = document.querySelector('.p1-pick');
const p2Pick = document.querySelector('.p2-pick');
const compPick = document.querySelector('.comp-pick');

// musuh
let vPlayer = true;
let vComputer = false;
let compSelection = null;

musuh[0].style.color = 'rgb(255 255 255 / 1)';



for (let i = 0; i < musuh.length; i++) {
    musuh[i].addEventListener('click', function () {
        if (i == 0) {
            player2.classList.add('show');
            comp.classList.remove('show');
            vPlayer = true;
            vComputer = false;
            p1 = null;
            p2 = null;
            compSelection = null;
            compPickBox.innerHTML = '';
            p1Pick.innerHTML = '';
            p2Pick.innerHTML = '';
            p1Selection[0].removeAttribute('style');
            p1Selection[1].removeAttribute('style');
            p1Selection[2].removeAttribute('style');
            p2Selection[0].removeAttribute('style');
            p2Selection[1].removeAttribute('style');
            p2Selection[2].removeAttribute('style');
            musuh[0].style.color = 'rgb(255 255 255 / 1)';
            musuh[1].style.color = 'rgb(255 255 255 / .6)';
            resultContent.innerHTML = '';
        } else {
            player2.classList.remove('show');
            comp.classList.add('show');
            vPlayer = false;
            vComputer = true;
            p1 = null;
            p2 = null;
            compSelection = null;
            compPickBox.innerHTML = '';
            p1Pick.innerHTML = '';
            p2Pick.innerHTML = '';
            p1Selection[0].style.filter = 'opacity(.5)';
            p1Selection[1].style.filter = 'opacity(.5)';
            p1Selection[2].style.filter = 'opacity(.5)';
            p2Selection[0].style.filter = 'opacity(.5)';
            p2Selection[1].style.filter = 'opacity(.5)';
            p2Selection[2].style.filter = 'opacity(.5)';
            musuh[0].style.color = 'rgb(255 255 255 / .6)';
            musuh[1].style.color = 'rgb(255 255 255 / 1)';
            compSelection = Math.random();
            resultContent.innerHTML = '';
        }
    });
}

// Player 1 selection
const p1Selection = document.querySelectorAll('#p1 div');

let p1 = null;
for (let i = 0; i < p1Selection.length; i++) {
    p1Selection[i].addEventListener('click', function () {
        compPickBox.innerHTML = '';
        if (vComputer == true & vPlayer == false) {
            if (i == 0) {
                p1Selection[0].style.filter = 'opacity(1)';
                p1Selection[1].style.filter = 'opacity(.5)';
                p1Selection[2].style.filter = 'opacity(.5)';
                p1Selection[0].style.transform = 'scale(1.05)';
                p1Selection[1].style.transform = 'scale(1)';
                p1Selection[2].style.transform = 'scale(1)';
                p1 = 'batu';
            } else if (i == 1) {
                p1Selection[1].style.filter = 'opacity(1)';
                p1Selection[0].style.filter = 'opacity(.5)';
                p1Selection[2].style.filter = 'opacity(.5)';
                p1Selection[0].style.transform = 'scale(1)';
                p1Selection[1].style.transform = 'scale(1.05)';
                p1Selection[2].style.transform = 'scale(1)';
                p1 = 'kertas';
            } else {
                p1Selection[2].style.filter = 'opacity(1)';
                p1Selection[1].style.filter = 'opacity(.5)';
                p1Selection[0].style.filter = 'opacity(.5)';
                p1Selection[0].style.transform = 'scale(1)';
                p1Selection[1].style.transform = 'scale(1)';
                p1Selection[2].style.transform = 'scale(1.05)';
                p1 = 'gunting';
            }
        } else if (vPlayer == true & vComputer == false) {
            if (i == 0) {
                p1 = 'batu';
            } else if (i == 1) {
                p1 = 'kertas';
            } else {
                p1 = 'gunting';
            }
        }
        p1Pick.innerHTML = '<h3>Ready</h3>';
        p1Pick.style.textTransform = 'uppercase';
        compSelection = Math.random();
        // Comp selection
        if (compSelection <= 0.3) {
            return compSelection = 'batu';
        } else if (compSelection <= 0.6) {
            return compSelection = 'kertas';
        } else if (compSelection > 0.6) {
            return compSelection = 'gunting';
        }
    });
}

// Player 2 selection
const p2Selection = document.querySelectorAll('#p2 div');

let p2 = null;
for (let i = 0; i < p2Selection.length; i++) {
    p2Selection[i].addEventListener('click', function () {
        if (i == 0) {
            p2 = 'batu';
        } else if (i == 1) {
            p2 = 'kertas';
        } else {
            p2 = 'gunting';
        }
        p2Pick.innerHTML = '<h3>Ready</h3>';
        p2Pick.style.textTransform = 'uppercase';
    });
}

// klik submit
let hasil = null;
let resultContent = document.querySelector('.result .result-content');
const submit = document.querySelector('.submit button[type=submit]');
const compPickBox = document.querySelector('.comp-pick');
submit.addEventListener('click', function () {
    // rules
    p1Pick.innerHTML = '<h3>' + compSelection + '</h3>';
    if (vPlayer == true) {
        if (p1 == null || p2 == null) {
            p1Pick.innerHTML = '<h3>Pilih dahulu!!!</h3>';
            p2Pick.innerHTML = '<h3>Pilih dahulu!!!</h3>';
            hasil = '';
        } else if (p1 == p2) {
            hasil = 'seri';
            p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
            p2Pick.innerHTML = '<h3>' + p2 + '</h3>';
        } else if (p1 == 'batu') {
            if (p2 == 'kertas') {
                hasil = 'PLAYER 2 MENANG';
            } else {
                hasil = 'PLAYER 1 MENANG';
            }
            p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
            p2Pick.innerHTML = '<h3>' + p2 + '</h3>';
        } else if (p1 == 'kertas') {
            if (p2 == 'batu') {
                hasil = 'PLAYER 1 MENANG';
            } else {
                hasil = 'PLAYER 2 MENANG';
            }
            p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
            p2Pick.innerHTML = '<h3>' + p2 + '</h3>';
        } else if (p1 == 'gunting') {
            if (p2 == 'batu') {
                hasil = 'PLAYER 2 MENANG';
            } else {
                hasil = 'PLAYER 1 MENANG';
            }
            p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
            p2Pick.innerHTML = '<h3>' + p2 + '</h3>';
        }
    } else if (vComputer == true) {
        if (p1 == null) {
            hasil = '';
            p1Pick.innerHTML = '<h3>Pilih dahulu!!!</h3>';
        } else if (p1 == compSelection) {
            hasil = 'seri';
            compPickBox.innerHTML = '<h1>' + compSelection + '</h1>';
            p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
        } else if (p1 == 'batu') {
            if (compSelection == 'kertas') {
                p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
                compPickBox.innerHTML = '<h1>' + compSelection + '</h1>';
                hasil = 'KOMPUTER MENANG';
            } else {
                p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
                compPickBox.innerHTML = '<h1>' + compSelection + '</h1>';
                hasil = 'PLAYER 1 MENANG';
            }
        } else if (p1 == 'kertas') {
            if (compSelection == 'batu') {
                p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
                compPickBox.innerHTML = '<h1>' + compSelection + '</h1>';
                hasil = 'PLAYER 1 MENANG';
            } else {
                p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
                compPickBox.innerHTML = '<h1>' + compSelection + '</h1>';
                hasil = 'KOMPUTER MENANG';
            }
        } else if (p1 == 'gunting') {
            if (compSelection == 'batu') {
                p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
                compPickBox.innerHTML = '<h1>' + compSelection + '</h1>';
                hasil = 'KOMPUTER MENANG';
            } else {
                p1Pick.innerHTML = '<h3>' + p1 + '</h3>';
                compPickBox.innerHTML = '<h1>' + compSelection + '</h1>';
                hasil = 'PLAYER 1 MENANG';
            }
        }
    }
    resultContent.innerHTML = '<h1>' + hasil + '</h1>';
    document.querySelector('.result .result-content').style.display = 'flex';
    document.querySelector('.result .result-content').style.alignItems = 'center';
    document.querySelector('.result .result-content').style.justifyContent = 'center';
    document.querySelector('.result .result-content h1').style.textTransform = 'uppercase';
});