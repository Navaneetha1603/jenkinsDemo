class example2 extends HTMLElement{
    connectedCallback(){
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`<div>
        <p>Name</p><slot name="username"></slot></div>`;
        this.shadowRoot.firstElementChild.onclick=
        e=>alert("inner target: "+e.target.tagName);
    }
}
userCard.onclick= e => alert(`Outer target: ${e.target.tagName}`);
window.customElements.define('user-card',example2)