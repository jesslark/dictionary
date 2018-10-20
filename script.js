fetch('./dictionary.json').then(function(response) {
  // Error handling
  if (response.status !== 200) {
    console.log('Problem occurred fetching dictonary JSON.');
    return;
  }

  // Data handling and DOM manipulation
  response.json().then(function(data) {
    var alphaData = sortByKey(data, 'word');
    var dictionary = "";
    alphaData.forEach(function(item) {
      entry = document.createElement('div');
      word = document.createElement('h3');
      definition = document.createElement('p');

      word.textContent = item.word;
      word.classList = 'word';

      definition.classList = 'definition';
      definition.innerHTML = item.definition;

      entry.classList = 'entry';
      entry.appendChild(word);
      entry.appendChild(definition);

      dictionary += entry.outerHTML;
    });
    document.querySelector('#dictionary').innerHTML = dictionary;
    console.log('Dictionary loaded and rendered.');
  });
});

// Function found here: https://stackoverflow.com/a/8175221
function sortByKey(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; 
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}