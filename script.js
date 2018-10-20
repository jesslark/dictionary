//INITIAL FETCH OF THE DICTIONARY
fetch('./dictionary.json').then(function(response) {
  // Error handling
  if (response.status !== 200) {
    console.log('Problem occurred fetching dictonary JSON.');
    return;
  }
  // Data handling and DOM manipulation
  response.json().then(function(data) {
    //NOW WE SORT THE DATA BEFORE PUSHING IT
    data.sort((definitionA, definitionB) => {
      if (definitionA.word.toLowerCase() > definitionB.word.toLowerCase()) {
        return 1
      }
      else {
        return -1
      }
    })
    pushDefinitions(data)
  });
});

//PUSH THE DEFINITIONS TO THE WEBSITE
function pushDefinitions(data) {
  data.forEach(function(item) {
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

    document.querySelector('#dictionary').appendChild(entry);
  });
  console.log('Dictionary loaded and rendered.');
}
