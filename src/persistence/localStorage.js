/**
 * @param {String} key - Key of data
 * @returns {*|null} Value of data
 */
export function getFromLocalStorage(key) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
}

/**
 * @param {String} key - key name
 * @param {*} value - initial value or edited value
 * @returns {*}
 */
export function setToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}