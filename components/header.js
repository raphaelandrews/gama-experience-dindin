class Header {
    constructor(root) {
        root.innerHTML = Header.getHTML();
    }

    static getHTML() {
        return `
            <div class="nav-container">
                <nav class="nav" id="nav">
                    <a href="../index.html" class="nav__logo">
                        <img src="../assets/img/logo-header.png" alt="dindin logo">
                    </a>
                    <ul class="nav__list">
                        <li class="nav__item"><a href="../pages/cursos.html" class="nav__link">CURSOS</a></li>
                        <li class="nav__item"><a href="../pages/blog.html" class="nav__link">BLOG</a></li>
                        <li class="nav__item"><a href="../pages/contato.html" class="nav__link">CONTATO</a></li>
                    </ul>
                    <div class="nav__burguer">
                        <span class="nav__bar"></span>
                        <span class="nav__bar"></span>
                        <span class="nav__bar"></span>
                    </div>
                </nav>
            </div>
          `;
    }
}

new Header(
    document.querySelector(".header")
);