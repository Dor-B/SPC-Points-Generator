function saveToStorage(key) {
    localStorage.setItem(key, JSON.stringify(parameters));
}

function getStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

function switchToStorage(key) {
    parameters = getStorage(key);
}

function deleteStorage(key){
    localStorage.removeItem(key);
}

function getAllStorageKeys(){
    return Object.keys(localStorage);
}