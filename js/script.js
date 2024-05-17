function formatTime(hour, minute) {
    const formattedMinute = minute < 10 ? '0' + minute : minute;
    return hour + ':' + formattedMinute;
}

function clearResultAfterDelay(delay) {
    setTimeout(function() {
        document.getElementById('result').textContent = '';
    }, delay);
}

function timeCalc() {
    const input = document.getElementById('tickets').value.trim();
    const initialTickets = parseInt(input);

    if (input === '' || isNaN(initialTickets) || initialTickets < 0 || initialTickets > 30) {
        document.getElementById('result').textContent = `Please enter a valid number of 
        tickets between 0 and 30`;
    } else if (initialTickets === 30) {
        document.getElementById('result').textContent = `Your tickets are already full!`;
    } else {
        const rechargeTime = 20;
        const ticketLimit = 30;

        const ticketsNeeded = ticketLimit - initialTickets;
        const totalTime = ticketsNeeded * rechargeTime;

        const now = new Date();
        const fullHour = new Date(now.getTime() + totalTime * 60000);

        const formattedTime = fullHour.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        document.getElementById('result').textContent = `Tickets will be filled at ${formattedTime}`;
    }

    clearResultAfterDelay(2300);
}

function disableTextSelection() {

    document.documentElement.style.webkitUserSelect = 'none';
    
    document.documentElement.style.msUserSelect = 'none';
    
    document.documentElement.style.MozUserSelect = 'none';
    
    document.documentElement.style.userSelect = 'none';
}

disableTextSelection();
