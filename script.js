document.getElementById('itinerary-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const activity = document.getElementById('activity').value;

    // Calculate time allocation for activities
    const itineraryList = document.getElementById('itinerary-list');
    const itemCount = itineraryList.childElementCount;

    // Check if the activities exceed the time limit (6am to 6pm)
    if (itemCount >= 6) {
        alert('You have reached the maximum number of activities for the day. Please remove an activity before adding a new one.');
        return;
    }

    // Calculate start and end times for the activity
    const startTime = new Date(date);
    startTime.setHours(6 + itemCount * 2, 0, 0);
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 2);

    const timeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    const startTimeFormatted = startTime.toLocaleTimeString('en-US', timeFormatOptions);
    const endTimeFormatted = endTime.toLocaleTimeString('en-US', timeFormatOptions);

    // Create a list item for the activity with allocated time
    const itineraryItem = document.createElement('li');
    itineraryItem.innerText = `${destination} (${date}): ${activity} | ${startTimeFormatted} - ${endTimeFormatted}`;

    itineraryList.appendChild(itineraryItem);

    // Clear the form fields after submission
    document.getElementById('destination').value = '';
    document.getElementById('date').value = '';
    document.getElementById('activity').value = '';
});
