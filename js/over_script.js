function calculateOvertime() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    // Get user input
    var hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

    // Check if input is valid
    if (isNaN(hoursWorked) || isNaN(hourlyRate) || hoursWorked < 0 || hourlyRate < 0) {
        alert('Please enter valid numbers for hours worked and hourly rate.');
        return;
    }

    // Calculate overtime pay (assuming overtime starts after 40 hours)
    var regularPay = hoursWorked <= 40 ? hoursWorked * hourlyRate : 40 * hourlyRate;
    var overtimePay = hoursWorked > 40 ? (hoursWorked - 40) * 1.5 * hourlyRate : 0;

    // Display the result
    var totalPay = regularPay + overtimePay;
    document.getElementById('result').innerHTML = 'Total Pay: $' + totalPay.toFixed(2);

    setTimeout(function () {
        overlay.style.display = 'none';
    }, 2000); //
}

document.addEventListener('DOMContentLoaded', function () {
    var elementsToAnimate = document.querySelectorAll('.animated');
    elementsToAnimate.forEach(function (element) {
        element.classList.add('show');
    });
});
