document.addEventListener("DOMContentLoaded", () => {
    // Display current date and time
    const updateTime = () => {
        const now = new Date();
        document.getElementById("currentDate").textContent = now.toLocaleDateString();
        document.getElementById("currentTime").textContent = now.toLocaleTimeString();
    };
    setInterval(updateTime, 1000);

    // GeoLocation API
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            document.getElementById("currentLocation").textContent = `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
        });
    } else {
        document.getElementById("currentLocation").textContent = "Location unavailable";
    }

    // Visitor Counter
    let visitors = localStorage.getItem("visitorCount") || 0;
    visitors++;
    localStorage.setItem("visitorCount", visitors);
    document.getElementById("visitorCount").textContent = `Visitors: ${visitors}`;
});

 // Visitor count functionality
 let visitorCount = localStorage.getItem('visitorCount') || 0;
 visitorCount++;
 localStorage.setItem('visitorCount', visitorCount);
 document.getElementById('visitorCountValue').innerText = visitorCount;

 // Scrolling ticker for date, time, and location
 function updateTicker() {
     const date = new Date();
     const options = { timeZoneName: 'short' };
     const dateString = date.toLocaleString('en-US', options);
     document.getElementById('ticker').innerText = `Current Date & Time: ${dateString}`;
 }
 setInterval(updateTicker, 1000);
 updateTicker();
