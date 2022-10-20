class Header {
    constructor(root) {
        root.innerHTML = Header.getHTML();
    }

    static getHTML() {
        return `
            <div class="nav-container">
                <a href="./index.html" 
                    aria-label="Voltar para a home do site" 
                    class="nav__logo"
                >
                    <img src="./assets/img/logo-header.png" alt="dindin logo" title="dindin logo">
                </a>
                <nav role="navigation" aria-level="main navigation" id="nav">         
                    <ul role="menu" class="nav__list">
                        <li class="nav__item"><a href="./cursos.html" role="menuitem" class="nav__link">CURSOS</a></li>
                        <li class="nav__item"><a href="./blog.html" role="menuitem" class="nav__link">BLOG</a></li>
                        <li class="nav__item"><a href="./contato.html" role="menuitem" class="nav__link">CONTATO</a></li>
                    </ul>        
                </nav>
                <div class="nav__burguer">
                    <span class="nav__bar"></span>
                    <span class="nav__bar"></span>
                    <span class="nav__bar"></span>
                </div>
            </div>
          `;
    }
}

new Header(
    document.querySelector(".header")
);
