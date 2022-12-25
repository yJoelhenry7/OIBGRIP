let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.button');
let answer  = document.querySelector('#answer');
let Enter = document.querySelector('.enter');
let ansValue=0;
// let sqrt = document.querySelector('#sqrt');

for(item of btn){
    item.addEventListener('click',(e)=>{
           btntext = e.target.innerText;
           if(btntext=='x'){
            btntext="*";
           }
           if(btntext == '÷'){
            btntext="/";
           }
           if(btntext == 'ans'){
            btntext = ansValue;
           }
           screen.value += btntext;
           answer.value =  eval(screen.value);
    })
}

Enter.addEventListener('click',(e)=>{
    answer.value =  eval(screen.value);
    screen.value = answer.value;
    ansValue = answer.value;
})
function clr(){
    screen.value = "";
    answer.value = "";
}
function del(){
    screen.value = (screen.value).substring(0,screen.value.length-1);
}
function ans(){
    screen.value += ansValue;
}
function plusminus(){
    let a = screen.value;
    a = a*-1;
    screen.value = a;
    answer.value = screen.value;
}
function sqrt() {
    btntext = sqrt.innerText;
    screen.value+=btntext;
    screen.value = Math.sqrt(screen.value, 2);
}

