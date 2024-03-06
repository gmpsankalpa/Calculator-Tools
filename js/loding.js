setTimeout(function () {
    overlay.style.display = 'none';
    }, 2000);

    document.addEventListener('DOMContentLoaded', function() {
        var elementsToAnimate = document.querySelectorAll('.animated');
        elementsToAnimate.forEach(function(element) {
            element.classList.add('show');
        });
    });
    