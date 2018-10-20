const input = document.getElementById("search");
input.addEventListener('input', () => {
    goTo(input.value);
});


function goTo(input) {
    const searchFor = input.toLowerCase();
    const allData = document.getElementsByClassName("entry");
    let totalLength = allData.length;
    let counter = 0;
    [].forEach.call(allData, function(element) {
        element.style.display = "block";
        if(element.childNodes[1].innerHTML.toLowerCase().includes(searchFor) === false && element.childNodes[3].innerHTML.toLowerCase().includes(searchFor) === false) {
            element.style.display = "none";
            counter ++;
        }
    });
};

