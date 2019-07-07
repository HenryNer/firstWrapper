import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage(key, value) {
    return localStorage.set(key, value)
}

export function getLocalStorage(key) {
    return localStorage.get(key)
}

export function removeLocalStorage(key) {
    return localStorage.delete(key)
}

export function clearLocalStorage() {
    return localStorage.clear()
}

export function setBookObject(fileName, key, value) {
    let book = getLocalStorage(`${fileName}-info`)
    if (!book) {
        book = {}
    }
    book[key] = value
    setLocalStorage(`${fileName}-info`, book)
}

export function getBookObject(fileName, key) {
    let book = getLocalStorage(`${fileName}-info`)
    if (book) {
        return book[key]
    } else {
        return null
    }
}

export function getFontFamily(fileName) {
    return getBookObject(fileName, 'fontFamily')
}

export function saveFontFamily(fileName, font) {
    setBookObject(fileName, 'fontFamily', font)
}

export function getFontSize(fileName) {
    return getBookObject(fileName, 'fontSize')
}

export function saveFontSize(fileName, size) {
    setBookObject(fileName, 'fontSize', size)
}
//国际化
export function getLocale() {
    return getLocalStorage('locale')
}

export function saveLocale(locale) {
    setLocalStorage('locale', locale)
}

export function getTheme(fileName) {
    return getBookObject(fileName, 'theme')
}

export function saveTheme(fileName, theme) {
    setBookObject(fileName, 'theme', theme)
}