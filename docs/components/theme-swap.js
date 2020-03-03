window.customElements.define('slj-theme-swap', class extends HTMLElement {
  constructor() {
    super()
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
        <style>
          :host{
            cursor:pointer;
          }
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--accent-1);
  -webkit-transition: 250ms;
  transition: 250ms;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: var(--bg);
  -webkit-transition: 250ms;
  transition: 250ms;
}

input:checked + .slider {
  background-color: var(--accent-1);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--accent-1);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider{
  border-radius: 34px;
}

.slider:before {
  border-radius: 50%;
}

        </style>
        <label class="switch">
          <input type="checkbox">
          <span class="slider"></span>
        </label>
        `
    if (window.localStorage.getItem('darktheme') === 'false') this.shadowRoot.querySelector('input').click()
    this.shadowRoot.querySelector('input').onclick = () => {
      theme(!darkTheme)
      darkTheme = !darkTheme
      window.localStorage.setItem('darktheme', darkTheme)
    }
  }
})
