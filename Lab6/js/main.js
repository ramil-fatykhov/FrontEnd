window.onload = onWindowLoaded;

function onWindowLoaded() {
    tryToListen('write_me', 'click', openWindow);
    tryToListen('close', 'click', closeWindow);
    tryToListen('overlay', 'click', closeWindow);
    tryToListen('submit', 'click', requiredField);
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
    this.style.borderColor = null;
}

function requiredField() {
    var name = getById('name');
    var email = getById('email');
    var blank = '';
    event.preventDefault();
    if(name.value == blank) {
        name.style.borderColor = '#ee0707';
    }

    if(email.value == blank) {
        email.style.borderColor = '#ee0707';
    }
}