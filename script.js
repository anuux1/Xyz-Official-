const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll("[data-section]");

function openSection(sectionName) {

  sections.forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(sectionName);

  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll(".nav-btn").forEach(button => {

    button.classList.remove("active");

    if (button.dataset.section === sectionName) {
      button.classList.add("active");
    }

  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


navButtons.forEach(button => {

  button.addEventListener("click", () => {

    openSection(button.dataset.section);

  });

});


/* Year */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* Demo data
   পরে এগুলো Supabase থেকে আসবে
*/

const socialData = [

  {
    platform: "Instagram",
    username: "@yourusername",
    icon: "◎",
    url: "#"
  },

  {
    platform: "Facebook",
    username: "Your Name",
    icon: "f",
    url: "#"
  },

  {
    platform: "YouTube",
    username: "@yourchannel",
    icon: "▶",
    url: "#"
  },

  {
    platform: "TikTok",
    username: "@yourusername",
    icon: "♪",
    url: "#"
  }

];


const promotionData = [

  {
    title: "Featured Promotion",
    description:
      "Your promoted project or brand description goes here.",
    image: "promotion.jpg",
    url: "#"
  },

  {
    title: "Special Campaign",
    description:
      "Another promotional project can appear here.",
    image: "promotion.jpg",
    url: "#"
  }

];


/* Render Social */

function renderSocials() {

  const container =
    document.getElementById("socialContainer");

  container.innerHTML = "";

  socialData.forEach(item => {

    const card = document.createElement("article");

    card.className =
      "social-card glass";

    card.innerHTML = `

      <div class="social-left">

        <div class="social-icon">
          ${item.icon}
        </div>

        <div>

          <h3>
            ${item.platform}
          </h3>

          <p>
            ${item.username}
          </p>

        </div>

      </div>

      <a
        class="social-link"
        href="${item.url}"
        target="_blank"
        rel="noopener"
      >
        ↗
      </a>

    `;

    container.appendChild(card);

  });

}


/* Render Promotions */

function renderPromotions() {

  const container =
    document.getElementById("promotionContainer");

  container.innerHTML = "";

  promotionData.forEach(item => {

    const card =
      document.createElement("article");

    card.className =
      "promotion-card glass";

    card.innerHTML = `

      <img
        class="promotion-image"
        src="${item.image}"
        alt="${item.title}"
      >

      <div class="promotion-body">

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.description}
        </p>

        <a
          href="${item.url}"
          target="_blank"
          rel="noopener"
        >
          View Promotion →
        </a>

      </div>

    `;

    container.appendChild(card);

  });

}


renderSocials();
renderPromotions();
