var SelectHtml = document.querySelector('html');
var createInfo = document.createElement('p');
var createList = document.createElement('ul');

// Introductory text
createInfo.textContent = 'This is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.'

// Output

document.body.appendChild(createInfo);
document.body.appendChild(createList);

// Event Listener

SelectHtml.onclick = function() {
    var listItem = document.createElement('li');
    var listContent = prompt('What content do you want the list item to have?');
    listItem.textContent = listContent;
    createList.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        var listContent = prompt('Enter new content for your list item');
        this.textContent = listContent;
    }
}


