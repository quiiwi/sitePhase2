var a= "15";

var tableau = ['Thierry', 'Nicolas', 'Linda', 'Carole',a,a,a,a,a,a,a,a,a,a,a,a,a];
 
function myFunction(index) {
   setTimeout(function() {
      var $p = document.createElement('p');
      $p.appendChild(document.createTextNode(tableau[index]));
      document.getElementById('textDiv').appendChild($p);
   }, index * 1000);
};
for (var i = 0, c = tableau.length; i < c; i++) {
    myFunction(i);
}