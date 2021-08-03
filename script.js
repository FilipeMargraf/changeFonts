let phraseSizeL = document.getElementById('phraseSize')
document.getElementById('bt-Phrase').addEventListener('click', function(){
    phraseSizeL.value = parseInt(phraseSizeL.value) - 1 + 'px';
    let chFontPhL1 = document.getElementById('chFontPh1').style.fontSize = phraseSizeL.value
    let chFontPhL2 = document.getElementById('chFontPh2').style.fontSize = phraseSizeL.value
    let chFontPhL3 = document.getElementById('chFontPh3').style.fontSize = phraseSizeL.value
})

let phraseSizeM = document.getElementById('phraseSize')
document.getElementById('bt+Phrase').addEventListener('click', function(){
    phraseSizeM.value = parseInt(phraseSizeM.value) + 1 + 'px';
    let chFontPhM1 = document.getElementById('chFontPh1').style.fontSize = phraseSizeM.value
    let chFontPhM2 = document.getElementById('chFontPh2').style.fontSize = phraseSizeM.value
    let chFontPhM3 = document.getElementById('chFontPh3').style.fontSize = phraseSizeM.value

})

let titleSizeL = document.getElementById('titleSize')
document.getElementById('bt-Title').addEventListener('click', function(){
    titleSizeL.value = parseInt(titleSizeL.value) - 1 + 'px';
    let chFontTiL1 = document.getElementById('chFontTi1').style.fontSize = titleSizeL.value
    let chFontTiL2 = document.getElementById('chFontTi2').style.fontSize = titleSizeL.value
    let chFontTiL3 = document.getElementById('chFontTi3').style.fontSize = titleSizeL.value
})

let titleSizeM = document.getElementById('titleSize')
document.getElementById('bt+Title').addEventListener('click', function(){
    titleSizeM.value = parseInt(titleSizeM.value) + 1 + 'px';
    let chFontTiM1 = document.getElementById('chFontTi1').style.fontSize = titleSizeM.value
    let chFontTiM2 = document.getElementById('chFontTi2').style.fontSize = titleSizeM.value
    let chFontTiM3 = document.getElementById('chFontTi3').style.fontSize = titleSizeM.value
})