class shadowroot extends HTMLElement{
   constructor(){
       super();
       this.attachShadow({mode:'open'});
       this.shadowRoot.innerHTML=`<input type="text" id="uid">
       <button>hello</button>
       <div id="result"></div>
       <style>
       #result{
           display:grid;
           grid-template-columns:auto auto;
       }
       </style>`
       const button=this.shadowRoot.querySelector('button');
       const result=this.shadowRoot.getElementById('result');
       const uid=this.shadowRoot.getElementById('uid');
       button.addEventListener("click",()=>{
        let text1=document.createElement('text1');
        let result1=document.createElement('result1');
        let text=this.getAttribute('name');
        let re=uid.value;
        text1.innerText=text;
        result1.innerText=re;
        // console.log(re);
        // result.innerHTML=text;
        // result.innerHTML=re;
        result.appendChild(text1);
        result.appendChild(result1);
        uid.value=" ";

       })
    }
}
customElements.define('user-card',shadowroot);