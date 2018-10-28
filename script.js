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

// bind event listener to scroll-top button
document.getElementById("scroll-top").addEventListener("click",function(e){
  //scroll to element #top-page
   document.getElementById("top-page").scrollIntoView()
},false);

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
// https://stackoverflow.com/a/26494414
function gid(a_id) {
  return document.getElementById(a_id);
} 

function close_all() {

  // applies the Array.prototype.forEach() method to the array-like nodeList
  // returned by document.querySelectorAll() (the string passed to which finds all
  // elements with a class that starts with ('^=') the string 'entry':
  [].forEach.call(document.querySelectorAll('[class^=entry]'), function(div) {
    // 'div' is the array element (the node) itself:
    div.style.display = 'none';
  });

}

function find_my_div() {
  close_all();

  // getting the trimmed lower-cased string from the input element, split
  // on white-space characters to create an array:
  var keywords = gid('edit_search').value.trim().toLowerCase().split(/\s+/),
    // as above, selecting all elements whose id starts with the string 'entry':
    haystack = document.querySelectorAll('[class^="entry"]'),
    // working out whether text is accessed by node.textContent, or node.innerText:
    textProp = 'textContent' in document.body ? 'textContent' : 'innerText',
    // an initialised variable, for later:
    userWords,
    // filters the haystack (the divs whose id starts with 'user_'):
    found = [].filter.call(haystack, function(user) {
      // assigns the lower-cased string to the created-variable:
      userWords = user[textProp].toLowerCase();
      // returns those div elements whose text contains some of
      // the words returned, earlier, as the keywords:
      return keywords.some(function (word) {
        return userWords.indexOf(word) > -1;
      });
    });

  // iterates over the found elements, and shows them:
  [].forEach.call(found, function(user) {
    user.style.display = 'block';
  });

}

