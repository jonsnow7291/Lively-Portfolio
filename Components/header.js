class Mainheader extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
        <style>
        @import url("/Assets/Colors/Colors.css");
        /* Header.css */
        html, body {
            height: 100%;
        }

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
        }

        header {
            width: 90%;
            height: 15%;
            position: fixed;
            min-height: 100px;
            border-radius: 20px;
            background-color: var(--color-Header);
            transition: border-radius 0.5s ease;
            z-index: 1000;
            margin: 2% 0% 5% 5%;
        }

        header > #header-navbar {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-logo-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30%;
            height: 100%;
        }

        .header-logo-container h1 {
            font-size: 2rem;
            color: var(--color-Header-enlaces);
            margin-left: 10px;
        }

        .header-logo-container > a > .logo-header {
            width: 10vh;
            height: 10vh;
        }

        .header-menu-container {
            width: 50%;
            height: 100%;
        }

        .menu-list {
            display: flex;
            position: relative;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;
            list-style: none;
        }

        header a {
            text-decoration: none;
            color: var(--color-Header-enlaces);
        }

        button {
            position: absolute;
            display: none;
        }

        header a:hover {
            text-decoration: none;
            color: var(--color-Header-enlaces-hover);
            transition: 0.5s;
        }

        @media (max-width: 768px) {
            .header-logo-container {
                width: 50%;
                flex-direction: column;
                height: 90%;
            }
            .header-logo-container > a > .logo-header {
                width: 5vh;
                height: 5vh;
            }
            .header-logo-container h1 {
                font-size: 1.5rem;
                margin-left: 0;
            }
            .header-menu-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            header #button-toogle {
                display: block;
                cursor: pointer;
                width: 20vh;
                height: 5vh;
                position: relative;
                color: var(--color-Header-barras-button);
                background-color: var(--color-Header-fondo-button);
                padding: 0 10px;
                border: 1px solid var(--color-Header-borde-button);
                border-radius: 10px;
            }
            header #button-toogle:hover {
                background-color: var(--color-Header-fondo-button-hover);
                color: white;
                transition: 0.5s;
            }
            .menu-list {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                position: fixed;
                max-height: 0;
                background-color: rgb(87, 60, 116);
                align-items: center;
                transition: max-height 0.5s ease, padding 0.3s ease;
                top: 19vh;
                left: 5%;
                width: 90vw;
                z-index: 1000;
                left: 5%;
                padding: 0;
            }
            .menu-list.showOptions {
                max-height: 200px;
                border-radius: 0 0 10px 10px;
            }
            header.headerActive {
                border-radius: 20px 20px 0 0;
            }
        }
        </style>
        <header id="site-header">
            <nav id="header-navbar">
                <div class="header-logo-container">
                    <a href="/index.html">
                        <img class="logo-header" src="/Assets/icons/Logo Heador.png" alt="">
                    </a>
                    <h1 class="logo-text">LivelyDev</h1>
                </div>
                <div class="header-menu-container">
                    <button id="button-toogle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                    <ul id="menu-list" class="menu-list">
                        <li class="navlinks"><a href="/index.html">Home</a></li>
                        <li class="navlinks"><a href="/Pages/testimonies.html">Testimonies</a></li>
                        <li class="navlinks"><a href="/Pages/aboutme.html">About me</a></li>
                        <li class="navlinks"><a href="/Pages/contact.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <script src="/Scripts/Header.js"></script>
        `
    }
}

customElements.define("main-header",Mainheader);