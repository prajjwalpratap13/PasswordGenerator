let btn=document.querySelector(".btn");
let input=document.querySelector(".password");
let copy=document.querySelector(".input .copy");

let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let number="0123456789";
let symbol="@[#]%!}$>*/)&%{<+-(";
let allChar=upper+lower+number+symbol;
let length=12;

btn.addEventListener("click",()=>{
    let password="";
    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    input.value=password;
});
copy.addEventListener("click",()=>{
    input.select();
    document.execCommand("copy");
})