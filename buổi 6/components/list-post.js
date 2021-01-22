class ListPost extends HTMLElement{
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' }) 
        const arr = [{
            content,
            authorName,
        }]
        //in ra man hinh
        let html = ''
        for (item of arr){
            html += '<post-item content authorName></post-item>'
        }
        this._shadowDom.innerHTML = `
        ${html}
        `
    }
}
window.customElements.define('list-post', ListPost)