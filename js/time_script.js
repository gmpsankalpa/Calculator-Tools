function calculateTime() {
    // Show loading overlay
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;

    // Convert the input strings to Date objects
    var startDate = new Date('1970-01-01T' + startTime + 'Z');
    var endDate = new Date('1970-01-01T' + endTime + 'Z');

    // Calculate the time difference in milliseconds
    var timeDifference = endDate - startDate;

    // Convert the time difference to hours and minutes
    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result
    document.getElementById('result').innerHTML = 'Time Difference: ' + hours + ' hours ' + minutes + ' minutes';

    // Hide loading overlay after a delay (adjust the delay as needed)
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 2000); // 1 second delay (adjust as needed)
}

document.addEventListener('DOMContentLoaded', function () {
    var elementsToAnimate = document.querySelectorAll('.animated');
    elementsToAnimate.forEach(function (element) {
        element.classList.add('show');
    });
});
