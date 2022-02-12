'use strict';

let temperatures = [ 100, 101, -30, -40, 55, 15];
let windspeeds = [2, 7, 75, 55, 45, 13];

let showButton = document.getElementById('show');

showButton.addEventListener('click',showWeather);

let tbody = document.getElementById('simpleTableBody');


function showWeather(e) {
    console.log('in the showWeather() function');

    for (let i=0; i<temperatures.length; i++) {
        console.log (i);
        console.log (temperatures[i], windspeeds[i])

        let tempClass ="";
        let windClass ="";

        if (temperatures[i] < 0) {
            tempClass = "table-danger";  
        }

        if (windspeeds[i] >35) {
            windClass = "table-danger";
        }

        tbody.innerHTML += `<tr><td class="${tempClass}">${temperatures[i]}</td><td class="${windClass}">${windspeeds[i]}</td</tr>`;

    }


}
      





