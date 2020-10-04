export function row(content, styles = '') {
    return `<div class="row" style="${styles ?? ''}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function parseCssObjectToString(styles = {}) {
    return Object.keys(styles).reduce((result, key) => result + `${key}: ${styles[key]};`, '')
}
