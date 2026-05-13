/* ================= REGISTRATION MODAL FUNCTIONS ================= */

function openRegistrationModal() {
    document.getElementById("registrationModal").classList.add("active");
}

function closeRegistrationModal() {
    document.getElementById("registrationModal").classList.remove("active");
}

function closeSuccessModal() {
    document.getElementById("successModal").classList.remove("active");
}

function saveRegistration() {
    document.getElementById("registrationModal").classList.remove("active");
    document.getElementById("successModal").classList.add("active");
}

function backToHome() {
    document.getElementById("successModal").classList.remove("active");
    window.location.href = "#home";
}

/* ================= END REGISTRATION MODAL FUNCTIONS ================= */

/* ================= SAVE REGISTRATION TO GOOGLE SHEETS ================= */

const scriptURL = "https://script.google.com/macros/s/AKfycbzvn-r0ZHOoyyORuJC6s-MYiiy2l407p5LBMnHJcEJBXu_kI5Gj1vItRfniPNf9qRE_Mg/exec";

function saveRegistration() {

    const selectedLaptop = document.querySelector('[data-name="reserveLaptop"] .selected');
    const selectedSkill = document.querySelector('#skillLevel .selected');

    const data = {

        firstName: document.getElementById("firstName").value,

        middleInitial: document.getElementById("middleInitial").value,

        lastName: document.getElementById("lastName").value,

        email: document.getElementById("emailAddress").value,

        contact: document.getElementById("mobileNumber").value,

        training: document.getElementById("trainingInterest").value,

        laptop: selectedLaptop
            ? selectedLaptop.textContent.trim()
            : "No",

        skill: selectedSkill
            ? selectedSkill.textContent.trim()
            : "Not specified",

        goals: document.getElementById("learningGoals").value,

        usage: document.getElementById("excelUsage").value
    };

    const registration = {
    training: data.training,
    name: `${data.firstName} ${data.middleInitial} ${data.lastName}`,
    contact: data.contact,
    email: data.email,
    laptop: data.laptop,
    skill: data.skill,
    goals: data.goals,
    usage: data.usage,
    status: "Interested"
};

let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
registrations.push(registration);
localStorage.setItem("registrations", JSON.stringify(registrations));

    fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(response => response.json())

    .then(data => {

        closeRegistrationModal();

        document.getElementById("successModal")
            .classList.add("active");

        document.getElementById("registrationForm").reset();

        document.querySelectorAll(
            ".choice-group button, .skill-grid button"
        ).forEach(button => {

            button.classList.remove("selected");

        });

    })

    .catch(error => {

        alert("Something went wrong.");

        console.error(error);

    });
}

/* ================= SELECT FORM BUTTONS ================= */

document.querySelectorAll(".choice-group button, .skill-grid button").forEach(button => {
    button.addEventListener("click", () => {
        const group = button.parentElement;

        group.querySelectorAll("button").forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");
    });
});

/* ================= TESTIMONIALS DATA ================= */

const testimonials = [
  { name: "Neth Barcelon", text: "Best recommended for training services. So much learning each session." },
  { name: "Johann Dalingay", text: "Xcel Hub offers free trainings as well as paid but affordable ones. They are easy to grasp. These trainings are really useful." },
  { name: "Malabanan Mandaragat", text: "I love the way they teach students. Madaling intindihin. Recommended for Training Services." },
  { name: "Reena Cardenas", text: "One of the best online trainings I availed so far! Highly recommended. Hands-on si coach at ang daming valuable advice and feedback sa mga outputs namin. Ang damiiii pang bonus support, super appreciated ito. Totally worth it for such a budget-friendly price!" },
  { name: "MsLarry G Furio", text: "Xcel Hub ang unang naginspire sakin to pursue Freelance industry. Dito rin nabuhay ang 'Never stop learning' attitude ko. Back from 2020 until today very approachable at patient parin si coach magturo." },
  { name: "Jinky Cabias", text: "I recommend training with Xcel Hub especially Excel, Google Sheets and virtual assistance. The training was worth it." },
  { name: "Marianne Altagracia", text: "Very welcoming and accommodating ni Coach Roxy. Sobrang daming knowledge at helpful tips in VA journey." },
  { name: "Mai Mai", text: "Highly recommended. I learned so much in just a few hours and looking forward to enroll again." },
  { name: "Cyrill Jane Tiu", text: "Thank You Xcel Hub for the free training. I learned a lot." },

  { name: "Kieth Adona", text: "Love the free training seminar they provided and discovering the new features." },
  { name: "Rogelio Acala", text: "You have an amazing ability to motivate and inspire us. Thank you Coach Roxy." },
  { name: "Arnold Cera", text: "Thank you so much Xcel Hub!" },
  { name: "Glazia Kaye Barona", text: "Very knowledgeable and interesting. Thank you for teaching easier ways to use Excel." },
  { name: "Michelle Zabala", text: "The best training service and Coach for virtual assistant and MS Excel." },
  { name: "Patrick Enferno", text: "Dami po naming natutunan regarding Excel at kung paano mapabilis ang trabaho." },
  { name: "Lorenzena A. Ramos", text: "Xcel Hub offers easy-to-follow instructions and an environment where you can ask questions." },
  { name: "Carol Villapando", text: "Super legit. Super generous si Coach Roxy and approachable mga admin." },
  { name: "Mariel Eneldas", text: "100% recommended sa gustong matuto ng Excel kahit zero knowledge." },

  { name: "Amor Marjorie Balbin", text: "Sobrang helpful po nung workshop. Interactive and sulit overall." },
  { name: "Dwight Perez", text: "Great mentors! Madami ka talagang matututunan." },
  { name: "Rizalyn Pudilanan Rubin", text: "Highly recommended. Madaling maintindihan kahit newbie." },
  { name: "Marilyn Dublar", text: "Good thing that I found Xcel Hub. They really taught us many things." },
  { name: "Rose Castor Bicol", text: "Thank you Coach Roxy sa lahat ng learnings. Sulit na sulit ang webinars." },
  { name: "Zeena C. Morris", text: "I have zero background in Excel but Xcel Hub helped me learn professionally." },
  { name: "Maricel Alfonso Barnillo", text: "Highly recommended this group. Kay Coach Roxy ko nalaman ang GDS!" },
  { name: "Frances Katrina", text: "Coach Roxanne is very generous in sharing her knowledge to newbies like me." },
  { name: "Mara Relunia-Ayen", text: "Best e-learning site especially for freelancing exploration." },

  { name: "Chelle Villeran-Oraca", text: "Very informative and easy to follow especially for beginners." },
  { name: "Michael Molino Hernandez", text: "Highly recommended! Very useful trainings and easy to follow." },
  { name: "Jonna Jalbuena", text: "Provides easy and valuable trainings for newbies like me." },
  { name: "Sheena C Pua", text: "Coach Roxy is patient with teaching and generous with webinars." },
  { name: "Cerise DG", text: "Sobrang generous sa pagbibigay ng free trainings. Very approachable si Coach Roxy." },
  { name: "Keela Sismundo", text: "Reliable and knowledgeable. Great foundation to learn VA skills." },
  { name: "Dyan Mae Billedo", text: "Thank you Coach for the free webinar. Madaling sundan yung formulas." },
  { name: "Bey Ugto", text: "Very newbie-friendly ang training tapos free pa." },
  { name: "Alona Patiam", text: "Highly recommended. Very knowledgeable and accommodating coaches." },

  { name: "Girlie Docayso Munoz", text: "Madami kang matututunan and worth it yung bayad." },
  { name: "Mary Claire Dadivas", text: "Sulit na sulit ang trainings. Mabait at helpful ang Coach." },
  { name: "Carmel Acol Lumanta-Sarsaba", text: "Very organized and knowledgeable si Coach Roxy. Hands-on ang training." },
  { name: "Jenifer Valencia Taruc", text: "Very interactive and you can learn a lot." },
  { name: "Kristine Escoza", text: "Informative and flexible webinars for all levels of learners." },
  { name: "Meliss Farrales", text: "Whether beginner or advanced, truly marami kang matututunan." },
  { name: "Jennifer Manrique Galera", text: "Excellent training and excellent trainer. Very accommodating si Coach." },
  { name: "Nelia Canete Pagangpang", text: "Unlimited free Excel trainings." },
  { name: "Rage Cayanan", text: "Very engaging topics and guaranteed learnings." },

  { name: "Marites Suelto Maghirang", text: "Thank you Xcel Hub for providing valuable trainings for beginners." },
  { name: "R Lene Garcia", text: "Sobrang daming learnings with XCEL HUB. Unlimited learning indeed." },
  { name: "Ria Nisperos", text: "Wonderful knowledge sharing for upskill training." },
  { name: "Emy Racca", text: "Dashboard Training is excellent!" },
  { name: "Joseph Sta Maria", text: "Thank you for making Excel very easy to understand." },
  { name: "Edna Laforteza", text: "Training is in-depth and coach is very accommodating." },
  { name: "Ai Wo", text: "From complete newbie to creating dashboards in one day. Highly recommended!" },
  { name: "Noemi M Franco", text: "Great trainings, coaching, and very accommodating staff." },
  { name: "Jojo Altre", text: "Kudos to Coach Roxy and team! You're the best!" },

  { name: "Chel Natividad", text: "Easy to follow instructions and realtime feedback during training." }
];

/* ================= TESTIMONIAL SETTINGS ================= */

const testimonialsPerPage = 9;
let currentPage = 1;
let expandedCards = {};

/* ================= ELEMENTS ================= */

const grid = document.getElementById("testimonialGrid");
const pagination = document.getElementById("pagination");

/* ================= SHORTEN TEXT ================= */

function shortenText(text, limit = 150) {
    return text.length > limit
        ? text.substring(0, limit) + "..."
        : text;
}

/* ================= DISPLAY TESTIMONIALS ================= */

function showTestimonials(page) {

    if (!grid) return;

    grid.innerHTML = "";

    const start = (page - 1) * testimonialsPerPage;
    const end = start + testimonialsPerPage;

    const pageItems = testimonials.slice(start, end);

    pageItems.forEach((item, index) => {

        const globalIndex = start + index;

        const isLong = item.text.length > 150;

        const isExpanded = expandedCards[globalIndex] === true;

        grid.innerHTML += `

            <div class="testimonial-card">

                <img 
                    src="images/quote.png"
                    class="quote-icon"
                    alt="Quote"
                >

                <div class="stars">★★★★★</div>

                <p class="testimonial-text">
                    “${isExpanded ? item.text : shortenText(item.text)}”
                </p>

                ${
                    isLong
                        ? `
                        <span 
                            class="show-more-btn"
                            onclick="toggleText(${globalIndex})"
                        >
                            ${isExpanded ? "Show Less" : "Show More"}
                        </span>
                        `
                        : `
                        <span class="show-placeholder"></span>
                        `
                }

                <h4>${item.name}</h4>

                <span class="participant-label">
                    Training Participant
                </span>

            </div>

        `;
    });

    showPagination();
}

/* ================= TOGGLE TEXT ================= */

function toggleText(index) {

    expandedCards[index] = !expandedCards[index];

    showTestimonials(currentPage);
}

/* ================= PAGINATION ================= */

function showPagination() {

    if (!pagination) return;

    pagination.innerHTML = "";

    const totalPages = Math.ceil(
        testimonials.length / testimonialsPerPage
    );

    /* PREVIOUS BUTTON */

    pagination.innerHTML += `
        <button onclick="changePage(${currentPage - 1})">
            ‹
        </button>
    `;

    let startPage = Math.max(1, currentPage - 1);

    let endPage = Math.min(totalPages, startPage + 2);

    if (endPage - startPage < 2) {
        startPage = Math.max(1, endPage - 2);
    }

    /* PAGE NUMBERS */

    for (let i = startPage; i <= endPage; i++) {

        pagination.innerHTML += `
            <button 
                onclick="changePage(${i})"
                class="${i === currentPage ? "active-page" : ""}"
            >
                ${i}
            </button>
        `;
    }

    /* NEXT BUTTON */

    pagination.innerHTML += `
        <button onclick="changePage(${currentPage + 1})">
            ›
        </button>
    `;
}

/* ================= CHANGE PAGE ================= */

function changePage(page) {

    const totalPages = Math.ceil(
        testimonials.length / testimonialsPerPage
    );

    if (page < 1 || page > totalPages) return;

    currentPage = page;

    expandedCards = {};

    showTestimonials(currentPage);

    window.scrollTo({
        top: document.querySelector(".testimonial-section").offsetTop - 20,
        behavior: "smooth"
    });
}

/* ================= INITIAL LOAD ================= */

showTestimonials(currentPage);




/* ================= ADMIN LOGIN MODAL ================= */

function openAdminLogin() {

    const modal = document.getElementById("adminModal");

    if (modal) {
        modal.classList.add("active");
    }
}

function closeAdminLogin() {

    const modal = document.getElementById("adminModal");

    if (modal) {
        modal.classList.remove("active");
    }
}

/* ================= CHECK PASSWORD ================= */

function checkAdminPassword() {

    const passwordInput =
        document.getElementById("adminPassword");

    if (!passwordInput) return;

    const password = passwordInput.value;

    /* ADMIN PASSWORD */

    const adminPassword = "xcelhub2018";

    if (password === adminPassword) {

        window.location.href = "admin.html";

    } else {

        alert("Incorrect admin password.");
    }
}

/* ================= CLOSE MODAL WHEN CLICK OUTSIDE ================= */

window.addEventListener("click", (event) => {

    const modal = document.getElementById("adminModal");

    if (event.target === modal) {

        closeAdminLogin();
    }
});

/* ================= ADMIN LOGIN ================= */

function openAdminLogin() {
    const modal = document.getElementById("adminModal");
    if (modal) modal.classList.add("active");
}

function closeAdminLogin() {
    const modal = document.getElementById("adminModal");
    if (modal) modal.classList.remove("active");
}

function checkAdminPassword() {
    const password = document.getElementById("adminPassword").value;
    const adminPassword = "xcelhub2018";

    if (password === adminPassword) {
        window.location.href = "admin.html";
    } else {
        alert("Incorrect admin password.");
    }
}

/* ================= ADMIN SECTION NAVIGATION ================= */

function showAdminSection(sectionId) {
    const sections = document.querySelectorAll(".admin-section");
    const buttons = document.querySelectorAll(".admin-bottom-nav button");

    sections.forEach(section => section.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(sectionId).classList.add("active");
    event.target.classList.add("active");
}

/* ================= ADMIN LOAD ================= */

document.addEventListener("DOMContentLoaded", () => {
    loadRegistrations();
    setupSearch();
});

/* ================= LOAD REGISTRATIONS ================= */

function loadRegistrations() {
    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    const tableBody = document.getElementById("registrationTableBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    registrations.forEach((item, index) => {
        const status = item.status || "Interested";
        const statusClass = status === "Contacted" ? "contacted" : "interested";

        tableBody.innerHTML += `
            <tr>
                <td><strong>${item.name}</strong><br><span>${item.skill}</span></td>
                <td class="email-cell">${item.email}</td>
                <td>${item.contact}</td>
                <td>${item.training}</td>
                <td>${item.laptop}</td>
                <td class="message-cell">${item.goals}</td>
                <td class="message-cell">${item.usage}</td>
                <td><span class="status-badge ${statusClass}">${status}</span></td>

                <td class="action-buttons">
                    <button class="email-record-btn" onclick="openEmailModal('${item.email}', '${item.name}', '${item.training}', ${index})">
                        <img src="images/mail.png" alt="Email">
                    </button>

                    <button class="delete-record-btn" onclick="deleteRegistration(${index})">
                        <img src="images/delete.png" alt="Delete">
                    </button>
                </td>
            </tr>
        `;
    });

    updateDashboard(registrations);
    updateTrainingCards(registrations);
    updateReports(registrations);
}

/* ================= SEARCH ================= */

function setupSearch() {
    const searchInput = document.getElementById("adminSearch");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll("#registrationTableBody tr");

        rows.forEach(row => {
            row.style.display = row.textContent.toLowerCase().includes(value) ? "" : "none";
        });
    });
}

/* ================= DASHBOARD ================= */

function updateDashboard(registrations) {
    const total = document.getElementById("totalRegistrations");
    if (!total) return;

    total.textContent = registrations.length;

    document.getElementById("laptopRequests").textContent =
        registrations.filter(item => item.laptop === "Yes").length;

    document.getElementById("beginnerUsers").textContent =
        registrations.filter(item => item.skill === "Beginner").length;

    const trainingCounts = {};

    registrations.forEach(item => {
        trainingCounts[item.training] = (trainingCounts[item.training] || 0) + 1;
    });

    let popularTraining = "-";
    let highestCount = 0;

    for (let training in trainingCounts) {
        if (trainingCounts[training] > highestCount) {
            highestCount = trainingCounts[training];
            popularTraining = training;
        }
    }

    document.getElementById("popularTraining").textContent = popularTraining;

    updateCharts(trainingCounts, registrations);
}

function updateCharts(trainingCounts, registrations) {
    const max = Math.max(...Object.values(trainingCounts), 1);

    setBar("barDailyUsers", trainingCounts["Excel for Daily Users"] || 0, max);
    setBar("barSheets", trainingCounts["Google Sheets Mastery"] || 0, max);
    setBar("barLiteracy", (trainingCounts["Computer Literacy 1"] || 0) + (trainingCounts["Computer Literacy 2"] || 0), max);
    setBar("barBeginners", trainingCounts["Excel for Beginners"] || 0, max);
    setBar("barAITools", trainingCounts["Excel Formulas & AI Tools"] || 0, max);

    updateSkillDistribution(registrations);
}

function setBar(id, count, max) {
    const bar = document.getElementById(id);
    if (!bar) return;

    bar.style.height = count === 0 ? "0%" : `${(count / max) * 100}%`;
}

/* ================= SKILL DISTRIBUTION ================= */

function updateSkillDistribution(registrations) {
    const total = registrations.length || 1;

    const levels = {
        Basic: 0,
        Beginner: 0,
        Intermediate: 0,
        Advanced: 0
    };

    registrations.forEach(item => {
        if (levels[item.skill] !== undefined) levels[item.skill]++;
    });

    updateSkill("basic", levels.Basic, total);
    updateSkill("beginner", levels.Beginner, total);
    updateSkill("intermediate", levels.Intermediate, total);
    updateSkill("advanced", levels.Advanced, total);
}

function updateSkill(name, count, total) {
    const countText = document.getElementById(`${name}Count`);
    const bar = document.getElementById(`${name}Bar`);

    if (!countText || !bar) return;

    const percentage = Math.round((count / total) * 100);

    countText.textContent = `${count} (${percentage}%)`;
    bar.style.width = `${percentage}%`;
}

/* ================= TRAININGS ================= */

function updateTrainingCards(registrations) {
    const container = document.getElementById("trainingAdminGrid");
    if (!container) return;

    const trainingCounts = {};

    registrations.forEach(item => {
        trainingCounts[item.training] = (trainingCounts[item.training] || 0) + 1;
    });

    container.innerHTML = "";

    if (registrations.length === 0) {
        container.innerHTML = `
            <div class="training-admin-card">
                <h3>No training data yet</h3>
                <p>Submitted registrations will appear here.</p>
                <span>0 interested</span>
            </div>
        `;
        return;
    }

    for (let training in trainingCounts) {
        container.innerHTML += `
            <div class="training-admin-card">
                <h3>${training}</h3>
                <p>Training registration demand monitoring.</p>
                <span>${trainingCounts[training]} interested</span>
            </div>
        `;
    }
}

/* ================= REPORT ================= */

function updateReports(registrations) {
    const report = document.getElementById("adminReportText");
    if (!report) return;

    if (registrations.length === 0) {
        report.textContent = "No registration data yet.";
        return;
    }

    const beginnerUsers = registrations.filter(item => item.skill === "Beginner").length;

    report.innerHTML = `
        Total registrations reached <strong>${registrations.length}</strong>.
        Most users are interested in Excel-related training programs.
        There are also <strong>${beginnerUsers}</strong> beginner learners who may need foundational guidance.
    `;
}

/* ================= EMAIL MODAL ================= */

function openEmailModal(email, name, training, index) {
    const modal = document.getElementById("emailModal");

    document.getElementById("emailTo").textContent = email;

    const message = `Good day ${name},

We are pleased to inform you that there is now an available slot/schedule for your selected training: ${training}.

Please wait for further details from Xcel Hub Training Services.

Thank you!`;

    document.getElementById("emailMessage").textContent = message;

    document.getElementById("openEmailBtn").href =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent("Xcel Hub Training Schedule")}&body=${encodeURIComponent(message)}`;

    document.getElementById("openEmailBtn").onclick = function () {
        markAsContacted(index);
    };

    modal.classList.add("active");
}

function closeEmailModal() {
    document.getElementById("emailModal").classList.remove("active");
}

function markAsContacted(index) {
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    if (registrations[index]) {
        registrations[index].status = "Contacted";
        localStorage.setItem("registrations", JSON.stringify(registrations));
        loadRegistrations();
    }
}

/* ================= DELETE MODAL ================= */

let selectedDeleteIndex = null;

function deleteRegistration(index) {
    selectedDeleteIndex = index;
    document.getElementById("deleteModal").classList.add("active");
}

function closeDeleteModal() {
    selectedDeleteIndex = null;
    document.getElementById("deleteModal").classList.remove("active");
}

function confirmDeleteRegistration() {
    if (selectedDeleteIndex === null) return;

    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    registrations.splice(selectedDeleteIndex, 1);
    localStorage.setItem("registrations", JSON.stringify(registrations));

    closeDeleteModal();
    loadRegistrations();
}