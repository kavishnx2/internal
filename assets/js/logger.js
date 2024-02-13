function getCurrentTimestamp() {
    return new Date().toISOString();
  }
  
  function logPageVisit(page) {
    try {
      let spanElement = document.querySelector('.d-none.d-md-block.dropdown-toggle.ps-2');
      let username = spanElement ? spanElement.textContent : "Anonymous";
  
      // Retrieve existing log data from localStorage
      var logData = JSON.parse(localStorage.getItem("pageVisitLog")) || [];
  
      // Create log entry
      var logEntry = {
        "user": username,
        "timestamp": getCurrentTimestamp(),
        "page": page
      };
  
      logData.push(logEntry);
  
      localStorage.setItem("pageVisitLog", JSON.stringify(logData));
      console.log("Page visit logged:", logEntry);
    } catch (error) {
      console.error("Error logging page visit:", error);
    }
  }
  
  window.addEventListener("load", function () {
    logPageVisit(window.location.href);
  });