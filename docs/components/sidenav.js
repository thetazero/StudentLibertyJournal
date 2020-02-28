window.customElements.define('slj-sidenav', class extends HTMLElement {
    constructor() {
        super()
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
        <style>
            .sidenav {
                height: 100%;
                width: 0;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: #111;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
            }
            .sidenav a {
                padding: 8px 8px 8px 32px;
                text-decoration: none;
                font-size: 25px;
                color: #818181;
                display: block;
                transition: 0.3s;
            }
        </style>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeSideNav()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
        `
    }
})

function closeSideNav() {
    document.querySelector("slj-sidenav").style.width = "0";
}

function openSideNav() {
    document.querySelector("slj-sidenav").style.width = "250px";
}

