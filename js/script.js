function newItem() {
  //1. Adding a new item to the list:
  let list = $('#list');
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    list.append(li);
  }

  //2. Crossing an item out:
  li.on('dblclick', function () {
    li.toggleClass('strike');
  });

  //3. Adding a delete button
  let crossOutButton = $('<button>X</button>');
  li.append(crossOutButton);
  crossOutButton.on('click', function () {
    li.addClass('delete');
  });

  list.sortable();
}
