const container=document.querySelector('container');
const numbers=document.querySelector('.numbers');
const operators=document.querySelector('.operators');
const panel=document.querySelector('.panel');
const clr=document.querySelector('#clr');
const bkspce=document.querySelector('#bkspace');
panel.textContent='';

let exprString='';
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
            return 'enter a valid operator';
            break;
    }
}

function calculate(str='')
{
    arr=str.split(',').reverse();
    let k=true;
    let val1=0,val2=0,op='';
    while(arr.length>1)
    {
        val1=+arr.pop();
        op=arr.pop();
        val2=+arr.pop();
        arr.push(operate(val1,val2,op));
    }
    panel.textContent=arr[0];
    exprString=arr[0];
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
        button.onclick=()=>{
            exprString+=button.textContent;
            panel.textContent+=button.textContent;
        };
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
        button.id=(i==0)?'btn-zero':'btn-dot';
        row.appendChild(button);
        button.onclick=()=>{
            exprString+=button.textContent;
            panel.textContent+=button.textContent;
            if(button.textContent=='.')
            { 
                button.disabled=true;
            }
        };
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
        button.onclick=()=>{
            btndot=document.querySelector('#btn-dot');
            btndot.disabled=false;
            if(button.textContent=='='){
                button.onclick=()=>{
                    calculate(exprString)};
            }
            else{
                exprString+=','+button.textContent+',';
                panel.textContent+=button.textContent;
            }
        };
    }
}


clr.onclick=()=>{
    panel.textContent='';
    exprString='';
}

bkspce.onclick=()=>{
    let len=panel.textContent.length;
    let len1=exprString.length;
    panel.textContent=panel.textContent.substring(0,len-1);
   if(isNaN(+exprString[len1-1]))
   {
    exprString=exprString.substring(0,len1-3);
   }
   else
   {
    exprString=exprString.substring(0,len1-1);
   }
}

createOperators();
createNumpad();





