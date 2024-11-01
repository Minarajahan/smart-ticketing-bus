const seats = document.querySelectorAll('.seat');

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        // Mark selected seat
        seat.classList.toggle('bg-green-300'); // Toggle selection on click
    });
});