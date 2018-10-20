fetch('./dictionary.json').then(function(response) {
  // Error handling
  if (response.status !== 200) {
    console.log('Problem occurred fetching dictonary JSON.');
    return;
  }

  // Data handling and DOM manipulation
  response.json().then(function(data) {
    data.forEach(function(item) {
      entry = document.createElement('div');
      word = document.createElement('h3');
      definition = document.createElement('p');

      word.textContent = item.word;
      word.classList = 'word';

      definition.classList = 'definition';
      definition.textContent = item.definition;

      entry.classList = 'entry';
      entry.appendChild(word);
      entry.appendChild(definition);

      document.querySelector('.container').appendChild(entry);
    });
    console.log('Dictionary loaded and rendered.');
  });
});
