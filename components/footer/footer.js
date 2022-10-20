class Footer {
    constructor(root) {
        root.innerHTML = Footer.getHTML();
    }

    static getHTML() {
        return `
        <div class="footer-container">
            <a href="./index.html"
                aria-label="Voltar para a home do site"
                class="footer__logo"
            >
                <img src="./assets/img/logo-footer.png" alt="dindin logo">
            </a>
            <nav role="navigation">
                <ul role="menu">
                    <li><a href="./cursos.html" role="menuitem" class="nav__link">cursos</a></li>
                    <li><a href="./blog.html" role="menuitem" class="nav__link">blog</a></li>
                    <li><a href="./contato.html" role="menuitem" class="nav__link">contato</a></li>
                </ul>
            </nav>
            <div class="footer__btns">
                <a href="#"
                    aria-label="Acesse para se cadastrar como professor"
                    class="footer__btn">quero ser prof</a>
                <a href="#"
                    aria-label="Acesse para ir pro link secreto da nossa página"
                    class="footer__btn">aqui tem outro link</a>
            </div>
        </div>
          `;
    }
}

new Footer(
    document.querySelector(".footer")
);