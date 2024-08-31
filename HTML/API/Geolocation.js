const geoLocation = () => {
    //check whether brrowser supports geolocation API or not.
    if (navigator.geolocation) {   // Supported
        navigator.geolocation.getCurrentPosition(getPosition, catchError);
    } else {   // Not Supported
        alert("Oob! This browser does not support HTML Geolocation.");
    };
};



const getPosition = (position) => {
    document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + "<br />" + "Longitude: " + position.coords.longitude + "<br />" + "Altitude: " + position.coords.altitude + "<br />" + "Accuracy: " + position.coords.accuracy + "<br />" + "Altitude Accuracy: " + position.coords.altitudeAccuracy + "<br />" + "Heading: " + position.coords.heading + "<br />" + "Speed: " + position.coords.speed + "<br />" + "Timestamp: " + position.timestamp;
};



const catchError = (error) => {
    switch (error.code) {
        case error.TIMEOUT:
            alert("The request to get user location has aborted as it has taken too long.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is not available.");
            break;
        case error.PERMISSION_DENIED:
            alert("Permission to share location information has been denied.");
            break;
        default:
            alert("An unknown error occured.");
    }
};



// The HTML geolocation API has only one object - the navigation.geolacation object. You may like the navigatior.geolocation
// to a compass on the browser

// The navigator.geolocation object exposes three methods - getCurrentPosition(), watchPosition(), and clearWatch().

// getCurrentPosition:
// The getCurrentPosition() method is used to obtain the current location of the user. You have already used this method
// in its simplest form in the code above.
// "navigatior.geolocation.getCurrentPosition(getPosition)"
// The getCurrentPosition() takes three parameters:
// The first parameter is a callback function to called when the call to getCurrentPosition() method is successful.
// The callback function will be called with a position object consist of 2 properties coords and timestamp.
// In above ex the callback function is getPosition(position) which takes a "position" object parameter and outputs the
// latitude and longitude through the coords property of the parameter. This is illustrated in the code above.

// coords.latitude: this property returns the user's latitude of the current position in decimal degrees.
// coords.longitude: this property returns the longitude of the user's current position in deciamal degrees.
// coords.altitude: this property returns the height of the user's curret position in meters above teh sea level. It will
// returns "null" if this information is not available.
// coords.altitudeAccuracy: This property returns the accuracy level of the altitude in meters.
// coords.heading: this property returns the direction of travel of the location-aware device in degrees, where 0 degree
// starts fromt the north and counting clockwise. It will returns null if this information is not available.
// coords.speed: this property returns the speed of the location aware device in meters per second. it will returns null
// if this information is not available.
// timestamp: the timestamp property returns the time when the position object was acquired.
