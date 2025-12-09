var currentDateElement = document.getElementById("currentDate");
var currentDate = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
currentDateElement.textContent = currentDate.toLocaleDateString(undefined, options);

function sendWarning(input,warning,message)
{
    input.addEventListener("input",function(){
    if(input.validity.valid)
    {
        warning.textContent="";
        input.classList.remove("warning");
    }
    else
    {
        warning.innerHTML=message;
        input.classList.add("warning");
    }
    validateForm();
    });
};

function check(pattern,input,warning,message)
{
    input.addEventListener("input",function(){
    if (pattern.test(input.value))
    {
        warning.textContent="";
        input.classList.remove("warning");
    }
    else
    {
        warning.innerHTML=message;
        input.classList.add("warning");
    }
    validateForm();
    });
};

const fnameInput = document.getElementById("fname");
const fnameWarningMessage =document.getElementById("fnameWarningMessage"); 
var message="Please enter a valid First name";
var pattern=/^[A-Za-z'-]{1,30}$/;
check(pattern,fnameInput,fnameWarningMessage,message);

const lnameInput = document.getElementById("lname");
const lnameWarningMessage =document.getElementById("lnameWarningMessage");
var message= "Please enter a valid Last name";
check(pattern,lnameInput,lnameWarningMessage,message);

const mnameInput = document.getElementById("mname");
const mnameWarningMessage =document.getElementById("mnameWarningMessage");
var message="Please enter a valid Middle name";
sendWarning(mnameInput,mnameWarningMessage,message);

const birthdayInput = document.getElementById("birthday");
const birthdayWarningMessage = document.getElementById("birthdayWarningMessage");
const Now = new Date;
//------------------------------------计算年龄--------------------------------------
function age()
{
    const userDate = new Date(document.getElementById("birthday").value);
    const timeDiff = Now - userDate;
    const ageInYear = Math.floor(timeDiff/(365*24*60*60*1000));
    return ageInYear;
};
//---------------------------------------------------------------------------------
birthdayInput.addEventListener("input",function()
{
    ageInYear=age();
    if(ageInYear < 120 && ageInYear>0)
    {
        birthdayWarningMessage.textContent="";
        birthdayInput.classList.remove("warning");
    }
    else
    {
        birthdayWarningMessage.textContent="Please enter a valid Birthday";
        birthdayInput.classList.add("warning");
    }
    validateForm();
});

const addressInput = document.getElementById("add_1");
const addressWarningMessage = document.getElementById("addressWarningMessage")
var message = "Please enter a valid Address";
sendWarning(addressInput,addressWarningMessage,message);


const stateInput = document.getElementById("state");
const stateWarningMessage = document.getElementById("stateWarningMessage");
var message = "Please select a State";
sendWarning(stateInput,stateWarningMessage,message);


const cityInput = document.getElementById("city");
const cityWarningMessage = document.getElementById("cityWarningMessage");
var message = "Please enter a vaild city";
sendWarning(cityInput,cityWarningMessage,message);


const emailInput = document.getElementById("email");
const emailWarningMessage = document.getElementById("emailWarningMessage");        
var message = "Please enter a valid email address";
var pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
check(pattern,emailInput,emailWarningMessage,message);

const UserIDInput = document.getElementById("UserID");
const UserIDWarningMessage = document.getElementById("UserIDWarningMessage");
var message = "UserID must be: <br> 1. 5-20 characters <br>2. Only Letter and Number <br>3. UserID Can't start with a number <br>4. spaces or any special characters are not allow "
var pattern =/^[A-Za-z_-][A-Za-z0-9_-]{4,19}$/;
check(pattern,UserIDInput,UserIDWarningMessage,message);
function formatID(){
    const cleanID = UserIDInput.value.toLowerCase();
    return cleanID;
}

const pwInput =document.getElementById("pw");
const pwWarningMessage =document.getElementById("pwWarningMessage");
var message = "Passward must be: <br> 1. 8 -30 characters <br>2. At least 1 uppercase letter and 1 lowercase letter <br>3. At least one number<br>4. At least 1 symbol";
var pattern =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W+).{8,30}$/;
check(pattern,pwInput,pwWarningMessage,message);
pwInput.addEventListener("message",function()
{
    if(UserIDInput.value != pwInput.value)
    {
        pwWarningMessage.textContent="";
        pwInput.classList.remove("warning");
    }
    else
    {
        pwWarningMessage.innerHTML="Password CANNOT equal your desired UserID";
        pwInput.classList.add("warning");
    }
});

const showPasswordCheckbox = document.getElementById("showPassword");
showPasswordCheckbox.addEventListener("change", function() 
{
    if (showPasswordCheckbox.checked) 
    {
        pwInput.type = "text";
    } else 
    {
        pwInput.type = "password";
    }
});

const cpwInput = document.getElementById("cpw");
const cpwWarningMessage = document.getElementById("cpwWarningMessage");
cpwInput.addEventListener("input", function() 
{
    if(pwInput.value == cpwInput.value)
    {
        cpwWarningMessage.textContent="";
        cpwInput.classList.remove("warning");
    }
    else
    {
        cpwWarningMessage.textContent="Passward do not match";
        cpwInput.classList.add("warning");
    }
});
const showcPasswordCheckbox = document.getElementById("showcPassword");
showcPasswordCheckbox.addEventListener("change", function() {
    if (showcPasswordCheckbox.checked) {
        cpwInput.type = "text";
    } else {
        cpwInput.type = "password";
    }
});

const phoneInput = document.getElementById("phone");
const phoneWarningMessage = document.getElementById("phoneWarningMessage");
var message = "Please enter a valid number";
sendWarning(phoneInput,phoneWarningMessage,message);

function formatPhone()
{
    const cleanPhone = phoneInput.value.replace(/\D/g, '');
    let phoneValue = '';
    for ( let i=0; i<cleanPhone.length; i++)
    {
        if(i===0)
        {phoneValue+='(';}
        else if(i===3)
        {phoneValue+=')';}
        else if(i===6)
        {phoneValue+='-';}
        phoneValue +=cleanPhone.charAt(i);
    }
    return phoneValue;
};

function validateForm() {
    var canSubmit = true;
    var inputs = [fnameInput, lnameInput, mnameInput, birthdayInput, addressInput, stateInput, cityInput, emailInput, UserIDInput, pwInput, cpwInput, phoneInput];

    inputs.forEach(function(input) 
    {
        if (!input.validity.valid) 
        {
            canSubmit = false;
        }
    });

    document.getElementById('submitButton').disabled = !canSubmit;
}
validateForm();

//------------------------------------review page---------------------------------------------------------------------
function review(){
    event.preventDefault();
    document.getElementById("reviewPage").style.display="block";

    const FN = document.getElementById("FN");
    FN.value=fnameInput.value;
    const MN =document.getElementById("MN");
    MN.value=mnameInput.value;
    const LN = document.getElementById("LN");
    LN.value=lnameInput.value;
    const BD = document.getElementById("BD");
    BD.value= birthdayInput.value;
    const AR = document.getElementById("AR");
    const add_2 = document.getElementById("add_2")
    AR.value = addressInput.value +","+add_2.value +" "+cityInput.value +"," + stateInput.value; 
    const EM =document.getElementById("EM");
    EM.value = emailInput.value;
    const ID = document.getElementById("ID");
    ID.value = formatID();//UserIDInput.value;
    const PW = document.getElementById("PW");
    PW.value = pwInput.value;
    const PH = document.getElementById("PH");
    PH.value = formatPhone();
}
function back(){document.getElementById("reviewPage").style.display="none";}
//-----------------------------------------------------------------------------------------------------------------
const showTruthInput = document.getElementById("showTruth");
const le = document.getElementById("le");
const fun = document.getElementById("fun");
showTruth.addEventListener("change",function()
{
    if (showTruthInput.checked)
    {
        le.style.display="block";
        fun.classList.add("Pandora");
    }
    else
    {
        le.style.display="none";
        fun.classList.remove("Pandora");
    }
});

const gradeInput = document.getElementById("grade");
const gradeValue = document.getElementById("gradeValue");
gradeInput.addEventListener("input", function () 
{
    gradeValue.textContent = gradeInput.value;
});