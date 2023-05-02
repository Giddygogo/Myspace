

function Display() {
    var birthYear = prompt("What year were you born?");
    var ageinDays = (2023 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageinDays +' days old');
    h1.setAttribute('id', 'Display');
    h1.appendChild(textAnswer);
    document.getElementById("screen").appendChild(h1);
}

 function Delete() {
   document.getElementById('Display').remove()
 }   
