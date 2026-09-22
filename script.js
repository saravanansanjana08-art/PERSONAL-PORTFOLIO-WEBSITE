console.log("Portfolio website loaded successfully!");
/* =========================================
   🌸 SKILL INFORMATION
   ========================================= */

function showSkill(skill) {

    const modal = document.getElementById("skillModal");
    const content = document.getElementById("skillContent");

    let information = "";

    if (skill === "cpp") {

        information = `
            <h2>💻 C++</h2>

            <p>
                C++ is a powerful programming language used
                to build fast and efficient software.
            </p>

            <h3>🌱 Basics</h3>

            <ul>
                <li>Variables and data types</li>
                <li>Conditional statements</li>
                <li>Loops</li>
                <li>Functions</li>
                <li>Arrays and strings</li>
                <li>Object-Oriented Programming</li>
                <li>Data Structures</li>
            </ul>

            <h3>🚀 Applications</h3>

            <div>
                <span class="application-box">
                    🎮 Game Development
                </span>

                <span class="application-box">
                    ⚙️ System Software
                </span>

                <span class="application-box">
                    🤖 AI & Robotics
                </span>

                <span class="application-box">
                    🧠 Competitive Programming
                </span>

                <span class="application-box">
                    💻 Application Software
                </span>
            </div>
        `;

    }

    else if (skill === "python") {

        information = `
            <h2>🐍 Python</h2>

            <p>
                Python is a beginner-friendly programming language
                widely used in software development and AI.
            </p>

            <h3>🌱 Basics</h3>

            <ul>
                <li>Variables and data types</li>
                <li>Conditions</li>
                <li>Loops</li>
                <li>Functions</li>
                <li>Lists and dictionaries</li>
                <li>Object-Oriented Programming</li>
            </ul>

            <h3>🚀 Applications</h3>

            <div>
                <span class="application-box">
                    🤖 Artificial Intelligence
                </span>

                <span class="application-box">
                    📊 Data Science
                </span>

                <span class="application-box">
                    🌐 Web Development
                </span>

                <span class="application-box">
                    ⚙️ Automation
                </span>
            </div>
        `;

    }

    else if (skill === "html") {

        information = `
            <h2>🌐 HTML</h2>

            <p>
                HTML is the standard markup language used
                to create the structure of web pages.
            </p>

            <h3>🌱 Basics</h3>

            <ul>
                <li>HTML elements</li>
                <li>Headings and paragraphs</li>
                <li>Links</li>
                <li>Images</li>
                <li>Forms</li>
                <li>Tables</li>
                <li>Semantic HTML</li>
            </ul>

            <h3>🚀 Applications</h3>

            <div>
                <span class="application-box">
                    🌐 Websites
                </span>

                <span class="application-box">
                    📝 Web Pages
                </span>

                <span class="application-box">
                    💼 Portfolios
                </span>

                <span class="application-box">
                    🛒 Online Stores
                </span>
            </div>
        `;

    }

    

    else if (skill === "C") {

        information = `
            <h2>⚡ C</h2>

            <p>
                C is a general-purpose programming language known for its efficiency and control.
            </p>

            <h3>🌱 Basics</h3>

            <ul>
                <li>Variables and Data Types</li>
                <li>Operators</li>
                <li>Conditions</li>
                <li>Loops</li>
                <li>Arrays and strings</li>
                <li>Function calls</li>
                <li>Pointers</li>
            </ul>

            <h3>🚀 Applications</h3>

            <div>
                <span class="application-box">
                    🌐 Operating systems
                </span>

                <span class="application-box">
                    🎮 Embedded Systems
                </span>

                <span class="application-box">
                    🛒 Web Applications
                </span>

                <span class="application-box">
                    📱 Interactive Interfaces
                </span>
            </div>
        `;

    }

    else if (skill === "aiml") {

        information = `
            <h2>🤖 AI & ML</h2>

            <p>
                Artificial Intelligence and Machine Learning
                focus on creating systems that can learn,
                analyze information and make predictions.
            </p>

            <h3>🌱 Basics</h3>

            <ul>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Data preprocessing</li>
                <li>Supervised learning</li>
                <li>Unsupervised learning</li>
                <li>Basic model training</li>
            </ul>

            <h3>🚀 Applications</h3>

            <div>
                <span class="application-box">
                    🤖 Chatbots
                </span>

                <span class="application-box">
                    🖼️ Image Recognition
                </span>

                <span class="application-box">
                    🎯 Recommendation Systems
                </span>

                <span class="application-box">
                    🚗 Autonomous Systems
                </span>
            </div>
        `;
    }

    content.innerHTML = information;

    modal.style.display = "flex";
}


/* Close popup */

function closeSkill() {

    document.getElementById("skillModal").style.display = "none";

}


/* Close when clicking outside popup */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("skillModal");

    if (event.target === modal) {

        closeSkill();

    }

});