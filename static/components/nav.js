window.customElements.define('slj-nav', class extends HTMLElement {
  constructor() {
    super()
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host{
          display:block;
          background:var(--accent0);
          height:50px;
        }
        slj-theme-swap{
          float:right;
          margin:8px 8px;
        }
        div a{
          line-height:50px; 
          padding-left:8px;
          font-size:34px;
          display:inline-block;
          cursor:pointer;
          color:var(--bga);
          text-decoration:none;
        }
        div a:hover{
          color:var(--navhover);
        }
        .slj{
          letter-spacing:0em;
          font-family:cursive;
        }
      </style>
      <div>
        <a class='slj' href="/">SLJ</a>
        <slj-theme-swap></slj-theme-swap>
      <div>
      `
  }
})
