const container=document.querySelector('container');
const numbers=document.querySelector('.numbers');
const operators=document.querySelector('.operators');

let sum=(a=0,b=0)=>a+b;
let subtract=(a=0,b=0)=>a-b;
let multiply=(a=0,b=0)=>a*b;
let divide=(a=0,b=0)=>a/b;

function operate(num1, num2, operator)
{
    switch (operator) {
        case '+':
            return sum(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        default:
            return 'enter a valid number';
            break;
    }
}

function createNumpad()
{
let k=9;
for(let i=0;i<3;i++)
{ let row=document.createElement('div');
  row.className='num-row';
  numbers.appendChild(row);
    for(let j=0;j<3;j++)
    {
        let button=document.createElement('button');
        button.className='num-button';
        button.textContent=`${k--}`;
        row.appendChild(button);
        button.onclick=()=>{console.log(`${button.textContent}`)};
    }
}
let row=document.createElement('div');
  row.className='num-row';
  numbers.appendChild(row);
  for(let i=0;i<2;i++)
  {
    let button=document.createElement('button');
        button.className='num-button';
        button.textContent=(i==0)?'0':'.';
        row.appendChild(button);
        button.onclick=()=>{console.log(`${button.textContent}`)};
  }
}

function createOperators()
{
    let arr=['+','-','*','/','='];
    for(item of arr)
    {
        let button=document.createElement('button');
        button.className='op-button';
        button.textContent=item;
        operators.appendChild(button);
        button.onclick=()=>{console.log(`${button.textContent}`)};
    }
}

createOperators();
createNumpad();





