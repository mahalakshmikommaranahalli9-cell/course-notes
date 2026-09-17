const notes = {

    network: `
        <h1>🌐 Computer Networks</h1>

        <h2>OSI Model</h2>

        <p>
            The OSI model is a seven-layer model used
            to understand network communication.
        </p>

        <ol>
            <li>Physical Layer</li>
            <li>Data Link Layer</li>
            <li>Network Layer</li>
            <li>Transport Layer</li>
            <li>Session Layer</li>
            <li>Presentation Layer</li>
            <li>Application Layer</li>
        </ol>

        <h2>ICMP</h2>

        <p>
            ICMP stands for Internet Control Message Protocol.
            It is used for error reporting and diagnostic purposes.
        </p>
    `,


    ai: `
        <h1>🤖 Artificial Intelligence</h1>

        <h2>What is AI?</h2>

        <p>
            Artificial Intelligence is the field of computing
            that focuses on creating systems capable of performing
            tasks that normally require human intelligence.
        </p>

        <h2>Machine Learning</h2>

        <p>
            Machine Learning allows computers to learn patterns
            from data and make predictions or decisions.
        </p>

        <h2>Overfitting</h2>

        <p>
            Overfitting occurs when a model learns the training
            data too closely and performs poorly on new data.
        </p>

        <h2>Underfitting</h2>

        <p>
            Underfitting occurs when a model is too simple to
            capture important patterns in the data.
        </p>
    `,


    programming: `
        <h1>💻 Programming</h1>

        <h2>Python</h2>

        <p>
            Python is a high-level programming language
            widely used in web development, automation,
            data science and AI.
        </p>

        <h2>Variables</h2>

        <p>
            Variables are used to store data values.
        </p>

        <h2>Example</h2>

        <p>
            x = 10
        </p>
    `,


    questions: `
        <h1>📝 Important Questions</h1>

        <h2>Computer Networks</h2>

        <ul>
            <li>Explain the OSI model.</li>
            <li>Explain TCP/IP architecture.</li>
            <li>Explain ICMP.</li>
            <li>Explain different network protocols.</li>
        </ul>

        <h2>Artificial Intelligence</h2>

        <ul>
            <li>What is Artificial Intelligence?</li>
            <li>Explain Machine Learning.</li>
            <li>Explain overfitting and underfitting.</li>
            <li>Explain feature engineering.</li>
        </ul>
    `
};


/* Open note */

function openNote(type) {

    document.querySelector(".notes-container").style.display = "none";

    document.querySelector(".hero").style.display = "none";

    document.querySelector("#note-content").style.display = "block";

    document.querySelector("#content").innerHTML = notes[type];

}


/* Close note */

function closeNote() {

    document.querySelector(".notes-container").style.display = "grid";

    document.querySelector(".hero").style.display = "block";

    document.querySelector("#note-content").style.display = "none";

}


/* Dark mode */

function toggleTheme() {

    document.body.classList.toggle("dark");

}


/* Search */

function searchNotes() {

    const search =
        document
        .getElementById("search")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".note-card");

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* Disable right click */

document.addEventListener("contextmenu", function(event) {

    event.preventDefault();

});


/* Disable common copy shortcuts */

document.addEventListener("keydown", function(event) {

    if (
        (event.ctrlKey || event.metaKey) &&
        ["c", "p", "u", "s"].includes(event.key.toLowerCase())
    ) {

        event.preventDefault();

    }

});
