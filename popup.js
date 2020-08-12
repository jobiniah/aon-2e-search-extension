  let search = document.getElementById('search');
  let searchButton = document.getElementById('searchButton');
  
  searchButton.onclick = function(element) {
    chrome.tabs.create({
        url: 'https://duckduckgo.com/?t=ffab&q=' + encodeURIComponent(search.value) + '+site%3A2e.aonprd.com&atb=v197-1&ia=web' ,
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