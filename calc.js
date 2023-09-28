let screen = document.getElementById('screen');
 buttons = document.querySelectorAll('button');
 let screenValue = "";
 for(item of buttons){
    item.addEventListener('click', (e)=> {
        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText; 
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'M+'){
            screenValue += '+';
            screen.value = screenValue;
        }
        else if(buttonText == 'M-'){
            screenValue += '-';
            screen.value = screenValue;
        }
        else if(buttonText == 'half'){
            buttonText =  '*1/2' ;
            screenValue += buttonText  ;
            screen.value = screenValue;
        }
        else if(buttonText == '('){
           
            screenValue += buttonText  ;
            screen.value = screenValue;
        }
        else if(buttonText == ')'){
           
            screenValue += buttonText  ;
            screen.value = screenValue;
        }
        else if(buttonText == '000'){
            buttonText = '000'
            screenValue += buttonText  ;
            screen.value = screenValue;
        }
        else if(buttonText == '00'){
             buttonText = '00'
             screenValue += buttonText  ;
             screen.value = screenValue;
         }
        else{
            screenValue += buttonText;
            screen.value = screenValue;  
          }
    })
 }
   