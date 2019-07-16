var inputElement = document.getElementById('dataToBind');
var showElement = document.getElementById('showBoundData');

// add an event listner to listen to keyuip event
inputElement.addEventlistener('keyup', function() {
  showElement.innerHTML = inputElement.value.toString();
});




