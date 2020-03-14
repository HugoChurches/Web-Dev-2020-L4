
let DuplicateCheck = '';
let containerSlice = '';
let Expresion = '';
let result;
let auxString; 
console.log("OK, I'm hooked to the HTML");

//Clear input box
document.getElementsByClassName('inputNumber')[0].value = '';
//Clear log box
document.getElementById('logInformation').value = '';
//Clear result box
document.getElementById('resultValue').value = '';

//Go immediately into input box
document.getElementsByClassName('inputNumber')[0].focus();

//My functions with some functional programming
document.getElementById("addButton").addEventListener("click", InputPlus);
document.getElementById("substractButton").addEventListener("click", InputMinus);
document.getElementById("multiplicationButton").addEventListener("click", InputMultiply);
document.getElementById("divisionButton").addEventListener("click", InputDivide);
document.getElementsByClassName('resetButton')[0].addEventListener("click", ClearContents);
document.getElementsByClassName('equalButton')[0].addEventListener("click", InputEquals);

//Clear contents function
function ClearContents(){
    document.getElementsByClassName('inputNumber')[0].value = '';
    document.getElementById('logInformation').value = '';
    document.getElementById('resultValue').value = '';
    document.getElementsByClassName('inputNumber')[0].focus();
    auxString = '';
    DuplicateCheck = '';
    containerSlice = '';
}

//Insert character "+" in string function
function InputPlus(){
    //If there's nothing in input box then do not place a character
    if(document.getElementsByClassName('inputNumber')[0].value == '')
    {
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    //Prevent the user from adding another operator if there is a tailing operator in the equation
    DuplicateCheck = document.getElementsByClassName('inputNumber')[0].value;
    containerSlice = DuplicateCheck.slice(-1)

    if(containerSlice == '+' || containerSlice == '-' || containerSlice == '*' || containerSlice == '/')
    {
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    auxString = document.getElementsByClassName('inputNumber')[0].value;
    auxString = auxString + "+";
    document.getElementsByClassName('inputNumber')[0].value = auxString;
    document.getElementsByClassName('inputNumber')[0].focus();
}

//Insert character "-" in string function
function InputMinus(){
    //If there's nothing in input box then do not place a character
    if(document.getElementsByClassName('inputNumber')[0].value == '')
    {
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    //Prevent the user from adding another operator if there is a tailing operator in the equation
    DuplicateCheck = document.getElementsByClassName('inputNumber')[0].value;
    containerSlice = DuplicateCheck.slice(-1)

    if(containerSlice == '+' || containerSlice == '-' || containerSlice == '*' || containerSlice == '/')
    {
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }


    auxString = document.getElementsByClassName('inputNumber')[0].value;
    auxString = auxString + "-";
    document.getElementsByClassName('inputNumber')[0].value = auxString;
    document.getElementsByClassName('inputNumber')[0].focus();
}

//Insert character "*" in string function
function InputMultiply(){
    //If there's nothing in input box then do not place a character
    if(document.getElementsByClassName('inputNumber')[0].value == '')
    {
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    //Prevent the user from adding another operator if there is a tailing operator in the equation
    DuplicateCheck = document.getElementsByClassName('inputNumber')[0].value;
    containerSlice = DuplicateCheck.slice(-1)

    if(containerSlice == '+' || containerSlice == '-' || containerSlice == '*' || containerSlice == '/')
    {
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    auxString = document.getElementsByClassName('inputNumber')[0].value;
    auxString = auxString + "*";
    document.getElementsByClassName('inputNumber')[0].value = auxString;
    document.getElementsByClassName('inputNumber')[0].focus();
}

//Insert character "/" in string function
function InputDivide(){
    //If there's nothing in input box then do not place a character
    if(document.getElementsByClassName('inputNumber')[0].value == '')
    {   
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    //Prevent the user from adding another operator if there is a tailing operator in the equation
    DuplicateCheck = document.getElementsByClassName('inputNumber')[0].value;
    containerSlice = DuplicateCheck.slice(-1)

    if(containerSlice == '+' || containerSlice == '-' || containerSlice == '*' || containerSlice == '/')
    {
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    auxString = document.getElementsByClassName('inputNumber')[0].value;
    auxString = auxString + "/";
    document.getElementsByClassName('inputNumber')[0].value = auxString;
    document.getElementsByClassName('inputNumber')[0].focus();
}

//Insert character "/" in string function
function InputEquals(){
    //If there's nothing in input box then do not place a character
    if(document.getElementsByClassName('inputNumber')[0].value == '')
    {
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    //Prevent the user from calculating an operation with a tailing operator
    DuplicateCheck = document.getElementsByClassName('inputNumber')[0].value;
    containerSlice = DuplicateCheck.slice(-1)
    if(containerSlice == '+' || containerSlice == '-' || containerSlice == '*' || containerSlice == '/')
    {
        //Refocus on the input box for ease of use
        document.getElementsByClassName('inputNumber')[0].focus();
        return;
    }

    else
    {
        //Get equation from user input
        auxString = document.getElementsByClassName('inputNumber')[0].value;
        //Append string to log
        document.getElementById('logInformation').value += auxString;
        //Insert carriage return
        document.getElementById('logInformation').value += "\n";
        //Evaluate the string
        result = eval(auxString);
        //Pass value to variable
        document.getElementById('resultValue').value = result;
        //Append string result to log
        document.getElementById('logInformation').value += "The result is : " + result;
        //Insert carriage return
        document.getElementById('logInformation').value += "\n";
        //Clear the log and refocus for another equation
        document.getElementsByClassName('inputNumber')[0].value = '';
        document.getElementsByClassName('inputNumber')[0].focus();
    }

    }












