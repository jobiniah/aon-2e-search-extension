  let search = document.getElementById('search');
  let searchButton = document.getElementById('searchButton');
  
  searchButton.onclick = function(element) {
    chrome.tabs.create({
        url: 'http://www.google.com/search?as_sitesearch=2e.aonprd.com&q=' + encodeURIComponent(search.value),
        active: true
    });
  };
  search.focus();
  search .addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchButton.click();
    }
  });