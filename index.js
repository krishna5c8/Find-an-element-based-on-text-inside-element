var aTags = document.getElementsByTagName("div");
var searchText = "SearchingText";
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
    found = aTags[i];
    break;
  }
}

// Use found
