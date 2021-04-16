let result = document.getElementById('result');

let btn_clear = document.getElementById('btn_clear');

let imie = document.getElementById('exampleInputName');
let result_imie = document.getElementById('result_name');

let nazwisko = document.getElementById('exampleInputLastname');
let result_nazwisko = document.getElementById('result_surname');

let email = document.getElementById('exampleInputEmail1');
let result_email = document.getElementById('result_email');

let email = document.getElementById('exampleInputTel');
let result_email = document.getElementById('result_tel');

let temat = document.getElementById('exampleInputTemat');
let result_temat = document.getElementById('result_temat');

let text = document.getElementById('exampleFormControlTextarea1');
let result_text = document.getElementById('result_text');



function send(){
    result.style.display = 'block';

	result_imie.innerText = imie.value;
	result_nazwisko.innerText = nazwisko.value;
	result_email.innerText = email.value;
	result_tel.innerText = tel.value;
	result_temat.innerHTML = temat.value;
	result_text.innerText = text.value;

}

btn_clear.addEventListener('click', function (event){
    result.style.display = 'none';
    imie.value = '';
	nazwisko.value = '';
	email.value = '';
	tel.value = '';
	temat.value = '';
	text.value = '';
});