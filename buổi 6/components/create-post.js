class CreatePost extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: 'open' })
        this._shadowDom.innerHTML = `
        <div class="create-post">
            <textarea id="content" rows="4"></textarea>
            <button>Post</button>
        </div>
        `
        this._shadowDom.getElementById('post').addEventListener("click",()=>{
            const data = {
                authname: currentUser.displayName,
                createAt: new Date().toISOString(),
                createBy: currentUser.id,
                content: this._shadowDom.getElementById('contend').value
            }
            firebase.firestore().collection('post').add(data)
        });
    }
}
window.customElements.define('create-post', CreatePost)