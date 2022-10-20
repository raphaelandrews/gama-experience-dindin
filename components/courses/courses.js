class Courses {
    constructor(root) {
        root.innerHTML = Courses.getHTML();
    }

    static getHTML() {
        return `
            <div class="col">
                <img class="courses__img-1" src="../assets/img/ilustra-poupando.png"
                    alt="Investimento para iniciantes">
                <h3>Investimento para iniciantes</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.</p>
                <a href="./pages/cursos.html">começar agora</a>
            </div>
            <div class="col">
                <img class="courses__img-2" src="../assets/img/ilustra-investimento.png"
                    alt="Curso Poupando e Rendendo">
                <h3>Poupando e Rendendo</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.</p>
                <a href="./pages/cursos.html">começar agora</a>
            </div>
            <div class="col">
                <img class="courses__img-3" src="../assets/img/ilustra-independencia.png"
                    alt="Curso Independência Financeira">
                <h3>Independência Financeira</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.</p>
                <a href="./pages/cursos.html">começar agora</a>
            </div>
          `;
    }
}

new Courses(
    document.querySelector(".courses__row")
);