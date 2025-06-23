class MainFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
            @import url("/Assets/Colors/Colors.css");

            footer {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background-color: var(--color-Footer);
                color: var(--color-Footer-letras);
                display: flex;
            }
            footer li {
                list-style: none;
            }
            footer a {
                text-decoration: none;
                color: var(--color-Footer-enlaces);
            }
            footer a:hover {
                color: var(--color-Footer-enlaces-hover);
                transition: 0.5s;
            }
            footer #medium-container {
                width: 66%;
                height: 100%;
                display: flex;
                justify-content: space-between;
            }
            footer .Tecnologies-container {
                width: 33%;
                height: 100%;
                padding: 30px;
            }
            footer .Tecnologies-container ul {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: baseline;
            }
            footer .Tecnologies-container li {
                margin: 5px 0;
                font-size: 1.2rem;
                text-align: center;
            }
            footer .Social-media-container {
                width: 33%;
                height: 100%;
                padding: 30px;
            }
            footer .Social-media-container ul {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: baseline;
            }
            footer .Social-media-container li {
                margin: 5px 0;
                font-size: 1.2rem;
                text-align: center;
            }
            footer .footer-logo-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            footer .logo-footer {
                width: 50px;
                height: 50px;
                align-self: center;
            }
            footer #icon-css:hover {
                background-color: var(--color-css);
                transition: 0.5s;
            }
            footer #icon-html:hover {
                background-color: var(--color-html);
                transition: 0.5s;
            }
            footer #icon-js:hover {
                background-color: var(--color-js);
                transition: 0.5s;
            }
            footer .footer-logo-container {
                width: 33%;
                padding: 30px;
            }
            @media (max-width: 768px) {
                footer {
                    height: 25%;
                }
                footer #medium-container {
                width: 100%;
                height: 100%;
                flex-direction: column;
                }
                footer .Tecnologies-container {
                position: relative;
                width: 100%;
                height: 50%;
                padding: 10px;
                }
                footer .Social-media-container {
                position: relative;
                width: 100%;
                height: 50%;
                padding: 10px;
                }
                footer .Social-media-container ul,
                footer .Tecnologies-container ul {
                padding: 10px;
                justify-content: space-around;
                flex-direction: row;
                min-height: 50px;
                background-color: var(--color-Footer);
                }
                footer .Social-media-container a,
                footer .Tecnologies-container li {
                font-size: 1rem;
                text-align: center;
                }
            }
            </style>
            <footer>
            <div id="medium-container">
                <div class="Tecnologies-container">
                <h3>Technologies</h3>
                <ul>
                    <li>
                    <img src="/Assets/icons/Components/HTMLICON.svg" id="icon-html" alt="HTML5" width="16" height="16">
                    HTML5
                    </li>
                    <li>
                    <img src="/Assets/icons/Components/CSSICON.svg" id="icon-css" alt="CSS3" width="16" height="16">
                    CSS3
                    </li>
                    <li>
                    <img src="/Assets/icons/Components/JSICON].svg" id="icon-js" alt="JavaScript" width="16" height="16">
                    JS
                    </li>
                </ul>
                </div>
                <div class="Social-media-container">
                <h3>Follow Me</h3>
                <ul>
                    <li>
                    <a href="https://github.com/jonsnow7291">
                        <img src="/Assets/icons/Components/github-142-svgrepo-com.svg" width="16" height="16" alt="">
                        GITHUB
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/diego-vargas729/">
                        <img src="/Assets/icons/Components/linkedin-svgrepo-com.svg" width="16" height="16" alt="">
                        LINKEDIN
                    </a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/">
                        <img src="/Assets/icons/Components/youtube-color-svgrepo-com.svg" width="16" height="16" alt="">
                        YOUTUBE
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            <div class="footer-logo-container">
                <img src="/Assets/icons/Logo Heador.png" alt="Logo" class="logo-footer">
                <p class="logo-text">
                Made with ❤️ by
                <a href="/index.html" target="_blank" rel="noopener noreferrer">LivelyDev</a>
                </p>
            </div>
            </footer>
        `;
  }
}
customElements.define("main-footer", MainFooter);
