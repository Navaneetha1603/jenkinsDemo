class shadowDom extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=`<style>
        button {
            color:blue;
            padding:10px;
            width:100px;
            height: 40px;
            margin:auto;
            border-radius:20px;
            background-color:pink;
            margin-top: 5%;
            margin-left: 45%;
        }
        </style>
        <p>
        <button>click me</button></p>
        <p id="result"></p>`;
        const button=this.shadowRoot.querySelector("button");
        const result=this.shadowRoot.getElementById('result');
        button.addEventListener("click",()=>{
            // alert(`hii ${this.getAttribute('name')}`);
            let text=this.getAttribute('name');
            result.innerHTML=text;
        
        })
    }
    // connectedCallback(){
    //     // this.shadowRoot.firstElementChild.onclick=
    //     // e=>alert("inner target"+e.target.tagName + "hello");
    //     const button=this.shadowRoot.querySelector("button");
    //     button.addEventListener("click",()=>{
    //         alert("hello");
    //     })
    // }
}
// document.onclick=
// e=>alert("outer target"+e.target.tagName);
window.customElements.define('shadow-dom',shadowDom);