function getCurrentTimestamp() {
    return new Date().toISOString();
}

function logPageVisit(page) {

    var username = document.getElementById("userProfileName").value;
    
    // Create log object
    var logEntry = {
        "user": username,
        "timestamp": getCurrentTimestamp(),
        "page": page
    };

    console.log(logEntry);
}

window.addEventListener("load", function() {
    logPageVisit(window.location.href);
});
