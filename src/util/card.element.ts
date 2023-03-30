export class CardElement extends HTMLElement{
    connectedCallBack(){
        this.innerHTML = `
        <div id="page">
            <header>App da Web</header>
            <div id="content">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
            </div>
        </div>
        `
    }
}

customElements.define('card-element',CardElement)