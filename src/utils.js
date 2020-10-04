export function row(content, styles = '') {
    return `<div class="row" style="${styles ?? ''}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function parseCssObjectToString(styles = {}) {
    if (typeof styles === "string") {
        return styles
    }
    return Object.keys(styles).reduce((result, key) => result + `${key}: ${styles[key]};`, '')
}

export function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="from-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr/>
    `
}
