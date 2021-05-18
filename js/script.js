const texts = ['Erwin Medina', 
'> Erwin.resume',
'"',
'erwinmedina.pdf',
'"',
'> '];

let count = 0;
let index = 0;
let text = 0;
let currentText = '';
let letter = '';

const textEl0 = document.querySelector(`.typing0`);
const textEl1 = document.querySelector('.typing1');
const textEl2 = document.querySelector('.typing2');
const textEl3 = document.querySelector('.typing3');
const textEl4 = document.querySelector('.typing4');
const textEl5 = document.querySelector('.typing5');

const classes = ['typing0', 'typing1', 'typing2', 'typing3', 'typing4']
const doc = [textEl0, textEl1, textEl2, textEl3, textEl4, textEl5]

cleanup()
function cleanup() {
    console.log(doc);
    doc.forEach(doc => {
        doc.classList.toggle("erwin");
    })
    type()
}
function type() {
    doc[text].classList.remove('erwin');
    if (count !== text) {
        doc[text].classList.remove(classes[text])
        text++;
        setTimeout(type, 50);
        return
    }
    currentText = texts[text];
    letter = currentText.slice(0, ++index);
    doc[text].textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        currentText = ''
    }
    setTimeout(type, 50);
}