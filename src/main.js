// Main Functionally Start Here

const team = document.querySelector(".team");

let member = [];

devs.map((item, index) => {
  member += `
  <div class="team-item">
  <img src="${item.photo}" alt="" />
  <h2>${item.name}</h2>
  <p>
    ${item.skill}
  </p>
</div>
  `;
});

console.log(member);

team.innerHTML = member;
