"use strict";


/* =====================================================
   COURSE SEARCH
===================================================== */

const searchInput =
    document.getElementById("searchInput");

const courseGrid =
    document.getElementById("courseGrid");

const courseCards =
    document.querySelectorAll(".course-card");

const noResults =
    document.getElementById("noResults");

const courseCount =
    document.getElementById("courseCount");


function updateCourseCount(number) {

    if (courseCount) {

        courseCount.textContent =
            `${number} course${number === 1 ? "" : "s"}`;

    }

}


function filterCourses() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();

    let visible = 0;


    courseCards.forEach(card => {

        const text =
            card.dataset.search.toLowerCase();

        const match =
            text.includes(search);

        card.style.display =
            match ? "flex" : "none";

        if (match) {
            visible++;
        }

    });


    updateCourseCount(visible);


    if (visible === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterCourses
    );

}


updateCourseCount(courseCards.length);


/* =====================================================
   DARK MODE
===================================================== */

const themeButton =
    document.getElementById("themeButton");


const savedTheme =
    localStorage.getItem("courseNotesTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeButton) {
        themeButton.textContent = "☀️";
    }

}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark");

            const dark =
                document.body.classList.contains("dark");


            localStorage.setItem(
                "courseNotesTheme",
                dark ? "dark" : "light"
            );


            themeButton.textContent =
                dark ? "☀️" : "🌙";

        }
    );

}


/* =====================================================
   CONTENT PROTECTION
===================================================== */

document.addEventListener(
    "contextmenu",
    event => event.preventDefault()
);

document.addEventListener(
    "selectstart",
    event => event.preventDefault()
);

document.addEventListener(
    "dragstart",
    event => event.preventDefault()
);

document.addEventListener(
    "copy",
    event => event.preventDefault()
);

document.addEventListener(
    "cut",
    event => event.preventDefault()
);


document.addEventListener(
    "keydown",
    function (event) {

        const key =
            event.key.toLowerCase();


        if (
            (event.ctrlKey || event.metaKey) &&
            ["c", "x", "a", "u", "s", "p"].includes(key)
        ) {

            event.preventDefault();

        }


        if (
            event.ctrlKey &&
            event.shiftKey &&
            ["i", "j", "c"].includes(key)
        ) {

            event.preventDefault();

        }


        if (key === "f12") {

            event.preventDefault();

        }

    }
);


/* =====================================================
   SERVICE WORKER / PWA
===================================================== */

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        function () {

            navigator.serviceWorker
                .register(
                    "/course-notes/sw.js",
                    {
                        scope: "/course-notes/"
                    }
                )
                .then(
                    registration => {

                        console.log(
                            "Course Notes PWA ready:",
                            registration.scope
                        );

                    }
                )
                .catch(
                    error => {

                        console.error(
                            "PWA registration failed:",
                            error
                        );

                    }
                );

        }
    );

}
