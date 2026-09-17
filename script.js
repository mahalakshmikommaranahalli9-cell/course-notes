/* =========================================
   SUBJECT DATA
========================================= */

const subjects = {

    BCS501: {
        code: "BCS501",
        name: "Software Engineering and Project Management",
        icon: "💻",
        description: "Software engineering concepts, development models and project management.",
        modules: [
            "Module 1",
            "Module 2",
            "Module 3",
            "Module 4",
            "Module 5"
        ]
    },

    BCS502: {
        code: "BCS502",
        name: "Computer Networks",
        icon: "🌐",
        description: "Networking concepts, protocols, architectures and communication.",
        modules: [
            "Module 1",
            "Module 2",
            "Module 3",
            "Module 4",
            "Module 5"
        ]
    },

    BCS503: {
        code: "BCS503",
        name: "Theory of Computation",
        icon: "🧮",
        description: "Automata, formal languages, grammars and Turing machines.",
        modules: [
            "Module 1 – Finite Automata",
            "Module 2 – Regular Languages",
            "Module 3 – Context-Free Grammars",
            "Module 4 – Pushdown Automata",
            "Module 5 – Turing Machines"
        ]
    },

    BCS515B: {
        code: "BCS515B",
        name: "Artificial Intelligence",
        icon: "🤖",
        description: "Artificial intelligence concepts, techniques and applications.",
        modules: [
            "Module 1",
            "Module 2",
            "Module 3",
            "Module 4",
            "Module 5"
        ]
    },

    BCSL504: {
        code: "BCSL504",
        name: "Web Technology Lab",
        icon: "🌐",
        description: "Practical web development using HTML, CSS and JavaScript.",
        modules: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web Programming",
            "Lab Programs"
        ]
    },

    BCS586: {
        code: "BCS586",
        name: "Mini Project",
        icon: "🚀",
        description: "Project development, implementation, documentation and presentation.",
        modules: [
            "Project Planning",
            "Project Design",
            "Implementation",
            "Testing",
            "Documentation & Presentation"
        ]
    },

    BRMK557: {
        code: "BRMK557",
        name: "Research Methodology and IPR",
        icon: "🔬",
        description: "Research methods, technical writing and intellectual property rights.",
        modules: [
            "Module 1",
            "Module 2",
            "Module 3",
            "Module 4",
            "Module 5"
        ]
    },

    BESK508: {
        code: "BESK508",
        name: "Environmental Studies",
        icon: "🌱",
        description: "Environmental concepts, sustainability and ecological awareness.",
        modules: [
            "Module 1",
            "Module 2",
            "Module 3",
            "Module 4",
            "Module 5"
        ]
    },

    BNSK559: {
        code: "BNSK559",
        name: "NSS",
        icon: "🤝",
        description: "National Service Scheme activities and community service.",
        modules: [
            "Module 1",
            "Module 2",
            "Module 3",
            "Module 4",
            "Module 5"
        ]
    }

};


/* =========================================
   GET ELEMENTS
========================================= */

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const subjectCards =
    document.querySelectorAll(".subject-card");

const subjectContainer =
    document.getElementById("subjectContainer");

const noResults =
    document.getElementById("noResults");

const searchResult =
    document.getElementById("searchResult");

const subjectPage =
    document.getElementById("subjectPage");

const subjectContent =
    document.getElementById("subjectContent");

const backButton =
    document.getElementById("backButton");

const hero =
    document.getElementById("home");

const themeButton =
    document.getElementById("themeButton");


/* =========================================
   SEARCH
========================================= */

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value.trim().toLowerCase();

        let found = 0;

        subjectCards.forEach(function (card) {

            const cardText =
                card.innerText.toLowerCase();

            if (
                searchText === "" ||
                cardText.includes(searchText)
            ) {

                card.style.display = "";
                found++;

            } else {

                card.style.display = "none";

            }

        });


        if (clearSearch) {

            clearSearch.style.display =
                searchText.length > 0
                    ? "block"
                    : "none";

        }


        if (searchResult) {

            if (searchText === "") {

                searchResult.textContent = "";

            } else {

                searchResult.textContent =
                    found + " subject" +
                    (found === 1 ? "" : "s") +
                    " found";

            }

        }


        if (noResults) {

            noResults.style.display =
                found === 0
                    ? "block"
                    : "none";

        }

    });

}


/* =========================================
   CLEAR SEARCH
========================================= */

if (clearSearch) {

    clearSearch.addEventListener("click", function () {

        if (searchInput) {

            searchInput.value = "";

            searchInput.dispatchEvent(
                new Event("input")
            );

            searchInput.focus();

        }

    });

}


/* =========================================
   OPEN SUBJECT BUTTONS
========================================= */

document.querySelectorAll(".open-btn").forEach(function (button) {

    button.addEventListener("click", function () {

        const code =
            button.getAttribute("data-subject");

        openSubject(code);

    });

});


/* =========================================
   OPEN SUBJECT
========================================= */

function openSubject(code) {

    const subject = subjects[code];

    if (!subject) {
        return;
    }


    /* Hide homepage */

    if (hero) {
        hero.style.display = "none";
    }

    if (subjectContainer) {
        subjectContainer.style.display = "none";
    }

    if (noResults) {
        noResults.style.display = "none";
    }


    /* Show subject page */

    if (subjectPage) {
        subjectPage.style.display = "block";
    }


    /* =====================================
       CREATE MODULE LIST
    ===================================== */

    let modulesHTML = "";


    subject.modules.forEach(function (module, index) {

        const moduleNumber = index + 1;

        let moduleFile =
            `module${moduleNumber}.html`;


        let isAvailable = false;


        /* Currently available notes */

        if (
            code === "BCS503" &&
            moduleNumber === 1
        ) {

            isAvailable = true;

        }


        modulesHTML += `

            <div class="unit">

                <span class="unit-name">
                    ${module}
                </span>

                ${
                    isAvailable
                    ?
                    `<button
                        class="read-btn"
                        onclick="openModule('${code}', ${moduleNumber})">
                        📖 Read Notes →
                    </button>`
                    :
                    `<span class="coming-soon">
                        Coming Soon
                    </span>`
                }

            </div>

        `;

    });


    /* =====================================
       SUBJECT PAGE
    ===================================== */

    if (subjectContent) {

        subjectContent.innerHTML = `

            <div class="subject-heading">

                <div class="big-icon">
                    ${subject.icon}
                </div>

                <span class="subject-code">
                    ${subject.code}
                </span>

                <h1>
                    ${subject.name}
                </h1>

                <p>
                    5th Semester • Computer Science & Engineering
                </p>

            </div>


            <div class="toc">

                <h2>
                    📑 Course Modules
                </h2>

                ${modulesHTML}

            </div>


            <div class="notes-message">

                <div class="book">
                    📚
                </div>

                <h2>
                    Notes Library
                </h2>

                <p>
                    Select a module above to access the course notes.
                </p>

            </div>

        `;

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   OPEN MODULE
========================================= */

function openModule(code, moduleNumber) {

    const moduleFile =
        `module${moduleNumber}.html`;

    window.location.href =
        `${code}/${moduleFile}`;

}


/* =========================================
   BACK BUTTON
========================================= */

if (backButton) {

    backButton.addEventListener("click", function () {

        closeSubject();

    });

}


function closeSubject() {

    if (subjectPage) {
        subjectPage.style.display = "none";
    }

    if (hero) {
        hero.style.display = "block";
    }

    if (subjectContainer) {
        subjectContainer.style.display = "grid";
    }

    if (searchResult) {
        searchResult.textContent = "";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   DARK MODE
========================================= */

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (
            document.body.classList.contains("dark")
        ) {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });


    /* Load saved theme */

    if (
        localStorage.getItem("theme") === "dark"
    ) {

        document.body.classList.add("dark");

        themeButton.textContent = "☀️";

    }

}


/* =========================================
   DISABLE RIGHT CLICK
========================================= */

document.addEventListener(
    "contextmenu",
    function (event) {

        event.preventDefault();

    }
);


/* =========================================
   DISABLE COMMON SHORTCUTS
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            (event.ctrlKey || event.metaKey) &&
            ["c", "p", "u", "s"].includes(
                event.key.toLowerCase()
            )
        ) {

            event.preventDefault();

        }

    }
);
