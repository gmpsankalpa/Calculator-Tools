function calculateAge() {
    // Show loading overlay
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    // Get the input value
    var dobInput = document.getElementById('dob').value;

    // Simulate a delay for demonstration purposes
    setTimeout(function() {
        // Calculate the age
        var dob = new Date(dobInput);
        var today = new Date();

        var ageYears = today.getFullYear() - dob.getFullYear();
        var ageMonths = today.getMonth() - dob.getMonth();
        var ageDays = today.getDate() - dob.getDate();

        // Adjust age if birthday has not occurred yet this month
        if (today.getDate() < dob.getDate()) {
            ageMonths--;
            ageDays += 30; // Assume a month has 30 days for simplicity
        }

        // Adjust age if birthday has not occurred yet this year
        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
            ageMonths += 12;
            ageYears--;
        }

        // Display the result with animation
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Your age is: ' + ageYears + ' years, ' + ageMonths + ' months, and ' + ageDays + ' days.';
        resultElement.classList.add('show');

        // Display age-appropriate GIF
        displayAgeGif(ageYears);

        // Hide loading overlay
        overlay.style.display = 'none';
    }, 2000); // Simulate a 2-second delay, you can replace this with your actual calculation logic
}

// Add animation on page load
document.addEventListener('DOMContentLoaded', function() {
    var elementsToAnimate = document.querySelectorAll('.animated');
    elementsToAnimate.forEach(function(element) {
        element.classList.add('show');
    });
});

// Function to display age-appropriate GIF with optional resize
function displayAgeGif(age) {
    var gifContainer = document.getElementById('gif-container');

    // Define age ranges and corresponding GIFs
    var ageRanges = [
        { min: 0, max: 2, gif: 'age.gif', size: '50px' },
        { min: 3, max: 12, gif: 'age.gif', size: '100px' },
        { min: 13, max: 19, gif: 'age.gif', size: '150px' },
        { min: 20, max: 35, gif: 'age.gif', size: '200px' },
        { min: 36, max: Infinity, gif: 'age.gif', size: '250px' }
    ];

    // Find the appropriate age range
    var selectedGif = ageRanges.find(range => age >= range.min && age <= range.max);

    // Display the selected GIF with optional resize
    if (selectedGif) {
        gifContainer.innerHTML = '<img src="assets/img/' + selectedGif.gif + '" alt="Age GIF" style="width: ' + selectedGif.size + '">';
        gifContainer.classList.add('show');
    } else {
        gifContainer.innerHTML = '';
        gifContainer.classList.remove('show');
    }
}
