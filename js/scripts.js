


window.onload = function() {
    
function calculateMilesPerGallon() {

    var getMiles = parseInt(document.querySelector('.milesDriven').value);
    var getGallons = parseInt(document.querySelector('.gallonsUsed').value);
    var calculateMpg = getMiles/getGallons;


    document.querySelector('.lastInput').disabled = true; //Disables the last input field

    document.querySelector('.milesDriven').value = getMiles;
    document.querySelector('.gallonsUsed').value = getGallons;
    document.querySelector('.lastInput').value = calculateMpg;
}


    var clickButton = document.querySelector('#btn');

    clickButton.addEventListener('click', calculateMilesPerGallon, false);
  
    document.querySelector('.lastInput').disabled = true;
};


// function validateForm(){
//     var x = document.forms['myForm']['miles']['gallons'].value;
//     if (x !== /[0-9]/){
//         alert("Both entries must be numeric")
//         return false;
//     }
// }
//     var validate = document.querySelectorAll('.val');
//     validate.addEventListener('blur', validateForm, false);