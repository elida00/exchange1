let tranSumEl = document.getElementById('carrency');
let mountEl = document.getElementById('mount');
let sumEl = document.getElementById('sum');
let resultEl = document.getElementById('result');
let er = new Audio("./t.mp3");



const sumCurrent = () => {
    let transSum = parseFloat(tranSumEl.value)
    let mount = parseFloat(mountEl.value)

    let restEl = transSum * mount
    
    let audio = new Audio
    audio.src = "3.mp3"
    audio.play(audio)
    resultEl.innerHTML='сумма:' + restEl.toFixed(2) + 'сом'


}
sumEl.addEventListener('click',sumCurrent)





