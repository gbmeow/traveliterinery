document.getElementById('itinerary-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const activity = document.getElementById('activity').value;

    const itineraryItem = document.createElement('li');
    itineraryItem.innerText = `${destination} (${date}): ${activity}`;

    document.getElementById('itinerary-list').appendChild(itineraryItem);

    // Clear the form fields after submission
    document.getElementById('destination').value = '';
    document.getElementById('date').value = '';
    document.getElementById('activity').value = '';
});
