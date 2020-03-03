window.customElements.define('slj-story', class extends HTMLElement {
  constructor() {
    super()
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
    <style>
      :host{
        display:block;
        height:500px;
        background:var(--bga);
      }

      .title{
        color:var(--ca);
        font-weight:500;
        font-size:1.5em;
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
        height: 174px;
      }
      
      @media only screen and (max-width: 830px) {
        img{
          width:100%;
        }  
        :host{
          height:inherit;
        }
      }

      @media only screen and (min-width: 830px) {
        img{
          height:300px;
        }  
      }
    </style>
    <a class="imgurl"><img></a>
    <div class='info'>
      <a class='title'></a>
      <div class='date'></div>
      <div class='teaser'></div>
    </div>
    `
  }
  connectedCallback(){
    console.log('okay')
    let shadow=this.shadowRoot
    shadow.querySelector('.title').innerText=this.getAttribute('title')
    shadow.querySelector('.teaser').innerText=this.getAttribute('teaser')
    shadow.querySelector('img').src=this.getAttribute('img')
    shadow.querySelector('.date').innerText=this.getAttribute('date')
    let href=this.getAttribute('href')
    shadow.querySelector('.imgurl').href=href;
    shadow.querySelector('.title').href=href;
  }
})
