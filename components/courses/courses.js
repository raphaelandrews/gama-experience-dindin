class Courses {
    constructor(root) {
        root.innerHTML = Courses.getHTML();
    }

    static getHTML() {
        return `
            <div class="col">
                <img class="courses__img-1" 
                    src="./assets/img/ilustra-poupando.png"
                    alt="Curso Investimento para iniciantes"
                    title="Curso Investimento para iniciantes"
                    aria-labelledby="courses1"
                >
                <h3>Investimento para iniciantes</h3>
                <p id="courses1">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.</p>
                <a href="./cursos.html"
                    aria-label="Acesse para saber mais sobre o nosso curso de Investimento para iniciantes"
                    aria-labelledby="courses1"
                >
                    começar agora
                </a>
            </div>
            <div class="col">
                <img class="courses__img-2" 
                    src="./assets/img/ilustra-investimento.png"
                    alt="Curso Poupando e Rendendo"
                    title="Curso Poupando e Rendendo"
                    aria-labelledby="courses2"
                >
                <h3>Poupando e Rendendo</h3>
                <p id="courses2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.</p>
                <a href="./cursos.html"
                    aria-label="Acesse para saber mais sobre o nosso curso Poupando e Rendendo"
                    aria-labelledby="courses2">
                    começar agora
                </a>
            </div>
            <div class="col">
                <img class="courses__img-3" 
                    src="./assets/img/ilustra-independencia.png"
                    alt="Curso Independência Financeira"
                    title="Curso Independência Financeira" 
                    aria-labelledby="courses3"                   
                >
                <h3>Independência Financeira</h3>
                <p id="courses3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.</p>
                <a href="./cursos.html"
                    aria-label="Acesse para saber mais sobre o nosso curso de Independência Financeira"
                    aria-labelledby="courses3">
                    começar agora
                </a>
            </div>
          `;
    }
}

new Courses(
    document.querySelector(".courses__row")
);