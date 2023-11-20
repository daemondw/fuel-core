var draggableElement = document.getElementById('draggableElement');
draggableElement.draggable = true;

draggableElement.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', 'Drag me!');
});
