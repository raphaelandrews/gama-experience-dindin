class IndexFooter {
    constructor(root) {
        root.innerHTML = IndexFooter.getHTML();
    }

    static getHTML() {
        return `
        <div class="nav-container">
            <nav class="nav__footer">
                <a href="./index.html" class="footer__logo">
                    <img src="./assets/img/logo-footer.png" alt="dindin logo">
                </a>

                <ul>
                    <li><a href="./pages/cursos.html" class="nav__link">cursos</a></li>
                    <li><a href="./pages/blog.html" class="nav__link">blog</a></li>
                    <li><a href="./pages/contato.html" class="nav__link">contato</a></li>
                </ul>

                <div class="footer__btns">
                    <a href="#" class="footer__btn">quero ser prof</a>
                    <a href="#" class="footer__btn">aqui tem outro link</a>
                </div>
            </nav>
        </div>
          `;
    }
}

new IndexFooter(
    document.querySelector(".footer")
);