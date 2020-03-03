window.customElements.define('slj-small', class extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
      <style>
        :host{
          display:block;
          height:100px;
          background:var(--bga);
        }
  
        .title{
          color:var(--ca);
          font-weight:500;
          font-size:1.1em;
        }
  
        img{
          width:400px;
          filter:grayscale(90%);
          transition: filter 250ms;
        }
  
        img:hover{
          filter:grayscale(50%);
        }
        
        a{
          cursor:pointer;
          text-decoration:none;
          color:var(--c);
        }
  
        .date{
          color:var(--ca);
          font-size:0.9em;
        }
  
        .info{
          padding:8px;
          overflow: hidden;
          height: 74px;
        }
      </style>
      <div class='info'>
        <a class='title'></a>
        <div class='date'></div>
      </div>
      `
    }
    connectedCallback() {
        console.log('okay')
        let shadow = this.shadowRoot
        shadow.querySelector('.title').innerText = this.getAttribute('title')
        shadow.querySelector('.date').innerText = this.getAttribute('date')
        let href = this.getAttribute('href')
        shadow.querySelector('.title').href = href;
    }
})
