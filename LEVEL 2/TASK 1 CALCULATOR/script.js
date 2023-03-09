console.log("hi")
let buttons=document.querySelectorAll('.button');
let string=""
// console.log(buttons)
Array.from(buttons).forEach((button)=>{
    // console.log(button)
    button.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML);
    if(e.target.innerHTML=="="){
        string=eval(string);
    }
    else if(e.target.innerHTML=="AC"){
        string="";
    }
    else if(e.target.innerHTML=="DEL"){
        string=string.slice(0,string.length-1);
    }
    else if(e.target.innerHTML=="%"){
string=eval(string)/100;
    }
    else{
    string+=e.target.innerHTML;
    }
    document.querySelector('.input_field').value=string;
    })



} )