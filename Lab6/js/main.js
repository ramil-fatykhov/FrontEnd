window.onload = onWindowLoaded;

function onWindowLoaded() {
    tryToListen('write_me', 'click', openWindow);
    tryToListen('close', 'click', closeWindow);
    tryToListen('overlay', 'click', closeWindow);
    tryToListen('sendMessageForm', 'submit', requiredField);
    tryToListen('name', 'focus', changeFocus);
    tryToListen('email', 'focus', changeFocus);
    tryToListen('button_movies', 'click', showMovies);
}

function getById(id) {
    return document.getElementById(id);
}

function getByClass(className) {
    return document.getElementsByClassName(className);
}

function tryToListen(id, eventName, func) {
    var element = getById(id);
    if (element) {
        element.addEventListener(eventName, func);
    }
}

function openWindow() {
    getById('modal_window').style.display = 'block';
    getById('overlay').style.display = 'block';
}

function closeWindow() {
    getById('modal_window').style.display = 'none';
    getById('overlay').style.display = 'none';
}

function opacityBlock() {
    for (var i = 0; i < getByClass('other_film').length; i++) {
        getByClass('other_film')[i].style.opacity = 1;
    }
}

function showMovies() {
    this.style.display = 'none';
    for (var i = 0; i < getByClass('other_film').length; i++) {
        getByClass('other_film')[i].style.display = 'inline-block';
    }
    setTimeout(opacityBlock, 0);
}

function changeFocus() {
    this.classList.remove('active');
}

function requiredField() {
    var hasEmptyFields = false;
    var requiredFields = document.getElementsByClassName('required_input');
    for (var i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === '')
        {
            hasEmptyFields = true;
            requiredFields[i].classList.add('active');
        }
    }

    if (hasEmptyFields === true) {
        event.preventDefault();
    }
}