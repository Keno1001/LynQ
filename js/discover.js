document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");
  const addBtn = document.getElementById("addProjectBtn");

  // Beispiel-Projekte (Phase 1: lokal)
  const projects = [
    {
      title: "3D Printed Drone",
      author: "Anna",
      description: "A lightweight drone built with 3D printed parts and Arduino.",
      tags: ["3D Printing", "Arduino", "Drone"],
      image: "images/sample-drone.jpg"
    },
    {
      title: "Custom Minecraft Client",
      author: "Marko",
      description: "Optimized performance client with custom mods and UI.",
      tags: ["Minecraft", "Java", "Mods"],
      image: "images/sample-mc.jpg"
    },
    {
      title: "Smart Garden",
      author: "Keno",
      description: "IoT powered garden with automatic watering and sensors.",
      tags: ["IoT", "Sensors", "Gardening"],
      image: "images/sample-garden.jpg"
    }
  ];

  function renderProjects() {
    projectList.innerHTML = "";
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p><strong>By:</strong> ${project.author}</p>
          <p>${project.description}</p>
          <p class="tags">${project.tags.join(", ")}</p>
        </div>
      `;
      projectList.appendChild(card);
    });
  }

  // Add Project (Demo)
  addBtn.addEventListener("click", () => {
    projects.push({
      title: "New Project",
      author: "Guest",
      description: "This is a demo project added via the button.",
      tags: ["Demo"],
      image: "images/logo.jpg"
    });
    renderProjects();
  });

  renderProjects();
});
