class UserCard extends HTMLElement {
    constructor (){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
        this.name = this.getAttribute('name')
        this._shadowDom.innerHTML = `
        <style>
        .card-container img{
            object-fit: cover;
        }
        .card-container {
            width: 286px;
        }
        .name {
            font-size: 1.5rem;
            font-weight: 600;
        }
        </style>
        <div class="card-container">
        <div>
            <img src="https://picsum.photos/200/300" width="200" height="300" alt="anhrandom">
        </div>
        <div class="card-body">
            <div class="name">
                Nguyen Van A
            </div>
            <div class="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum neque harum cupiditate quia nisi. Quidem consectetur optio asperiores eaque nesciunt quis velit doloribus accusantium debitis repellendus. Perspiciatis, hic maiores?
            </div>
        </div>
    </div>`
    }
}
window.customElements.define('user-card', UserCard) 