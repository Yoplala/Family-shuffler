
const citation = document.getElementById('citation');
const answer = document.getElementById('answer-text')
const butt = document.getElementById('butt');
const btnCopy = document.getElementById('copy');

/* ---=== Fisher–Yates shuffle ===--- */
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* ---=== On click ===--- */
butt.addEventListener('click', function() {
    const textToShuffle = citation.value ? citation.value : citation.placeholder;
    if (!textToShuffle.includes(' ')) {
        const el = textToShuffle.split('');
        shuffle(el);
        const el2 = el.join('');
        answer.textContent = el2;
    } else {
        const el = textToShuffle.split(' ');
        shuffle(el);
        const el2 = el.join(' ');
        answer.textContent = el2;
    }
});

/* ---=== Copier dans le presse-papier ===--- */
btnCopy.addEventListener('click', function(){
	answer.select();
	document.execCommand('copy');
} );
// Fonctionnalité obsolète, voir Clipboard API pour une solution moderne !





