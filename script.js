/* =========================================
   SUBJECT DATA
========================================= */

const subjects = {

    BCS501: {
        code: "BCS501",
        name: "Software Engineering and Project Management",
        icon: "💻",
        units: [
            "Unit 1",
            "Unit 2",
            "Unit 3",
            "Unit 4",
            "Unit 5"
        ]
    },

    BCS502: {
        code: "BCS502",
        name: "Computer Networks",
        icon: "🌐",
        units: [
            "Unit 1",
            "Unit 2",
            "Unit 3",
            "Unit 4",
            "Unit 5"
        ]
    },

    BCS503: {
        code: "BCS503",
        name: "Theory of Computation",
        icon: "🧮",
        units: [
            "Unit 1 – Finite Automata",
            "Unit 2 – Regular Languages",
            "Unit 3 – Context-Free Grammars",
            "Unit 4 – Pushdown Automata",
            "Unit 5 – Turing Machines"
        ]
    },

    BCS515B: {
        code: "BCS515B",
        name: "Artificial Intelligence",
        icon: "🤖",
        units: [
            "Unit 1",
            "Unit 2",
            "Unit 3",
            "Unit 4",
            "Unit 5"
        ]
    },

    BCSL504: {
        code: "BCSL504",
        name: "Web Technology Lab",
        icon: "🌐",
        units: [
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
        units: [
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
        units: [
            "Unit 1",
            "Unit 2",
            "Unit 3",
            "Unit 4",
            "Unit 5"
        ]
    },

    BESK508: {
        code: "BESK508",
        name: "Environmental Studies",
        icon: "🌱",
        units: [
            "Unit 1",
            "Unit 2",
            "Unit 3",
            "Unit 4",
            "Unit 5"
        ]
    },

    BNSK559: {
        code: "BNSK559",
        name: "NSS",
        icon: "🤝",
        units: [
            "Unit 1",
            "Unit 2",
            "Unit 3",
            "Unit 4",
            "Unit 5"
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


/* =========================================
   SEARCH
========================================= */

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value
                .trim()
                .toLowerCase();

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


        /* Clear button */

        if (clearSearch) {

            if (searchText.length > 0) {

                clearSearch.style.display = "block";

            } else {

                clearSearch.style.display = "none";

            }

        }


        /* Search result */

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


        /* No results */

        if (noResults) {

            if (found === 0 && searchText !== "") {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    });

}


/* =========================================
   CLEAR SEARCH
========================================= */

if (clearSearch) {

    clearSearch.addEventListener("click", function () {

        searchInput.value = "";

        searchInput.dispatchEvent(
            new Event("input")
        );

        searchInput.focus();

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

    /* =========================================
       BCS503 MODULE 1
       OPEN SEPARATE NOTES PAGE
    ========================================= */

    if (code === "BCS503") {

        window.location.href =
            "BCS503-MODULE1.html";

        return;
    }


    const subject = subjects[code];


    if (!subject) {

        return;

    }


    /* Hide home */

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


    /* Create units */

    let unitsHTML = "";


    subject.units.forEach(function (unit) {

        unitsHTML += `

            <div class="unit">

                <span class="unit-name">
                    ${unit}
                </span>

                <span class="coming-soon">
                    Coming Soon
                </span>

            </div>

        `;

    });


    /* Subject page */

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
                    📑 Table of Contents
                </h2>

                ${unitsHTML}

            </div>


            <div class="notes-message">

                <div class="book">
                    📚
                </div>

                <h2>
                    Notes Coming Soon
                </h2>

                <p>
                    Notes for this subject will be added here.
                </p>

            </div>

        `;

    }


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

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

const themeButton =
    document.getElementById("themeButton");


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

}


/* =========================================
   LOAD SAVED THEME
========================================= */

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark");


    if (themeButton) {

        themeButton.textContent = "☀️";

    }

} else {

    if (themeButton) {

        themeButton.textContent = "🌙";

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
