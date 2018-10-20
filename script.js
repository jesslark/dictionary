fetch('./dictionary.json').then(function(response) {
  // Error handling
  if (response.status !== 200) {
    console.log('Problem occurred fetching dictonary JSON.');
    return;
  }

  // Data handling and DOM manipulation
  response.json().then(function(data) {
    data.forEach(function(item) {
      element = document.createElement('div');
      word = document.createElement('h3');
      definition = document.createElement('p');

      word.textContent = item.word;
      definition.textContent = item.definition;
      element.appendChild(word);
      element.appendChild(definition);

      document.querySelector('.container').appendChild(element);
    });
    console.log('Dictionary loaded and rendered.');
  });
});
