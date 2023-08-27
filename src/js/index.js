import { validate } from "./validate.js";
import {findAge} from "./findage.js";
import './../css/main.css';
let day = 0;
let month = 0;
let year = 0;
let table = {
  daytable: [document.querySelector('.d'), document.querySelector('#d'), document.querySelector('label[for="d"]')],
  monthtable: [document.querySelector('.m'), document.querySelector('#m'), document.querySelector('label[for="m"]')],
  yeartable: [document.querySelector('.y'), document.querySelector('#y'), document.querySelector('label[for="y"]')]
}
document.querySelectorAll('input').forEach((input)=>{
  input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
      const form = document.querySelector('form');
      document.querySelector('.gim').dispatchEvent(new Event('click', { bubbles: true }));
    }
  })
})
document.querySelector('.gim').addEventListener('click', (e) => {
  // e.preventDefault();
  const d = document.querySelector('#d').value;
  const m = document.querySelector('#m').value;
  const y = document.querySelector('#y').value;
  let c1, c2, c3 = 0;

  [c1,c2,c3]=validate(d,m,y,c1,c2,c3,table);
  if (c1 || c2 || c3) return;
  day = d;
  month = m;
  year = y;
  const form = document.querySelector('form');
  form.dispatchEvent(new Event('submit', { bubbles: true }));

});

document.querySelector('form').addEventListener('submit', (e) => {
  findAge(new Date().getDay(), new Date().getMonth(), new Date().getFullYear(), Number(day),
    Number(month), Number(year));
});

//Findage algorithm is not accurate



