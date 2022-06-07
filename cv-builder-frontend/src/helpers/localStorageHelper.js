export const localStorageHelper = {
    Exists,
    GetItem,
    SaveItem,
    RemoveItem,
    RemoveAll,
}


function Exists(key) {
    return localStorage.getItem(key) !== null ? true : false;
}

function GetItem(key) {
    return JSON.parse(localStorage.getItem(key)); 
}

function SaveItem(key,value) {
    return localStorage.setItem(key, JSON.stringify(value));
} 

function RemoveItem(key) {
    return localStorage.removeItem(key);
}

function RemoveAll() {
    return localStorage.clear();
}
