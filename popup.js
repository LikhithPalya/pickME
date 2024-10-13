document.addEventListener('DOMContentLoaded', function() {
    var displayButton = document.getElementById('displayTitle');
    var titleDiv = document.getElementById('title');
  
    displayButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        titleDiv.textContent = "Current tab title: " + currentTab.title;
      });
    });
  });