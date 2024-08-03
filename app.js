

let save = document.getElementById('save')
save.addEventListener('click', function(event){
    event.preventDefault()
    let width = document.getElementById('width').value
    let height = document.getElementById('height').value
    let border_radius = document.getElementById('border_radius').value
    let bg_color = document.getElementById('bg_color').value
    let results = document.getElementById('result')
    results.style.width = width + "px"
    results.style.height = height + "px"
    results.style.borderRadius = border_radius + "px"
    results.style.backgroundColor = bg_color
})


 function check(event) {
    let value = document.getElementById('textarea').value.trim();
    let wordout = value ? value.split(/\s+/).length : 0;
    document.getElementById('text').textContent = "Sozlar soni : " + wordout
}









document.getElementById('inputText').onkeyup = function() {
    let textAreaContent = document.getElementById('textArea1').value;
    let inputText = document.getElementById('inputText').value;
    let resultDiv = document.getElementById('result1');

    if(inputText === "") {
        resultDiv.innerHTML = "";
        return;
    }

    if(textAreaContent.includes(inputText)) {
        resultDiv.innerHTML = "Matnda mavjud.";
    } else {
        resultDiv.innerHTML = "Matnda mavjud emas.";
    }
}




document.getElementById("file").addEventListener('change', function(){
    let file =  this.files[0];
    let filesize = document.getElementById('filesize');
    if(file){
        let filesizeKb = (file.size / 1024).toFixed(2);
        filesize.textContent = `file hajmi ${filesizeKb} kb`;
    }else {
        filesize.textContent = '';
    }
})



document.getElementById('qavs').addEventListener('input', function(){
    let inputText = this.value;
    let in1 = [...inputText].filter(item => item === '(').length;
    let in2 = [...inputText].filter(item => item === ')').length;
    let res  = document.getElementById('res');
    res.textContent = in1 === in2 ? "Ochuvchi va yopuvchi qavslar soni teng" : "Ochuvchi va yopuvchi qavslar soni teng emas";
})