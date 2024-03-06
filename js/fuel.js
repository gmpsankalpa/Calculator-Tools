function calculateFuelCost() {

    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);

    if (isNaN(distance) || isNaN(fuelEfficiency) || isNaN(fuelPrice)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const fuelConsumption = (fuelEfficiency / 100) * distance;
    const fuelCost = fuelConsumption * fuelPrice;
    displayResult(fuelCost);

    setTimeout(function () {
    overlay.style.display = 'none';
    }, 2000);
}

function displayResult(cost) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>The estimated fuel cost for the trip is Rs ${cost.toFixed(2)}.</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    var elementsToAnimate = document.querySelectorAll('.animated');
    elementsToAnimate.forEach(function(element) {
        element.classList.add('show');
    });
});
