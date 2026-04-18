document.addEventListener("DOMContentLoaded", () => {
    initMenu();     
    initSearch();
    initFilter();
    initPopup();
    loadData(); 
});


// SEARCH
function initSearch() {
    const input = document.getElementById("search");
    const items = document.querySelectorAll(".dish-item");

    if (!input) return; 

    input.addEventListener("input", () => {
        const keyword = input.value.toLowerCase();

        items.forEach(item => {
            const name = item.querySelector("h3").innerText.toLowerCase();
            item.style.display = name.includes(keyword) ? "block" : "none";
        });
    });
}


// FILTER
function initFilter() {
    const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".dish-item");

    if (buttons.length === 0) return; 

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            items.forEach(item => {
                item.style.display =
                    filter === "all" || item.dataset.category === filter
                        ? "block"
                        : "none";
            });
        });
    });
}


// POPUP
function initPopup() {
    const buttons = document.querySelectorAll(".btn-secondary");

    if (buttons.length === 0) return; // 👈 thêm

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".dish-card");
            const title = card.querySelector("h3").innerText;
            const desc = card.querySelector("p").innerText;

            showPopup(title, desc);
        });
    });
}
function showPopup(title, desc) {
    const popup = document.createElement("div");
    popup.className = "popup-overlay";

    popup.innerHTML = `
        <div class="popup-box">
            <h2>${title}</h2>
            <p>${desc}</p>
            <button id="close-popup">Đóng</button>
        </div>
    `;

    document.body.appendChild(popup);

    document.getElementById("close-popup").onclick = () => {
        popup.remove();
    };
}

function initMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileNav = document.getElementById("mobile-nav");

    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("hidden");
    });
}

function loadData() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            renderData(data);     
            initSearch();         
            initFilter();         
            initPopup();          
        })
        .catch(error => {
            console.error("Lỗi:", error);
        });
}
function renderData(data) {
    const container = document.getElementById("dishes-list");

    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "dish-card dish-item";
        div.dataset.category = item.category;

        div.innerHTML = `
    <div class="dish-image-wrapper">
        <img src="${item.image}" class="dish-image">
    </div>

    <div class="dish-content">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <button class="btn btn-secondary">Chi tiết</button>
    </div>
`;

        container.appendChild(div);
    });
}
