document.getElementById("loginButton").addEventListener("click", () => {
  const nome = document.getElementById("loginInput").value.trim();

  if (nome.length > 0) {
    document.querySelector(".login-screen").style.display = "none";
    document.querySelector(".welcome-screen").style.display = "flex";

    const welcomeText = `Bem-vinda ${nome}, Clique no botão para ver o presente`;
    document.getElementById("welcomeMessage").textContent = welcomeText;
  } else {
    alert("Por favor, digite seu nome 💕");
  }
});

document.getElementById("btnStart").addEventListener("click", () => {
  document.querySelector(".welcome-screen").style.display = "none";
  document.querySelector(".conteudo").style.display = "block";

  const heart = document.querySelector(".heart");
  heart.classList.add("float");

  setTimeout(() => {
    heart.classList.remove("float");
  }, 3000);
});
