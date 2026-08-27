// ========================================
// WEBPRO - SCRIPT.JS
// ========================================

// FORMULÁRIO PARA WHATSAPP

function enviarWhatsApp() {
  const nome = document.getElementById("nome").value;
  const empresa = document.getElementById("empresa").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const tipo = document.getElementById("tipo").value;
  const descricao = document.getElementById("descricao").value;

  if (nome === "") {
    alert("Por favor, informe seu nome.");
    return;
  }

  const mensagem = `🚀 NOVO ORÇAMENTO - WEBPRO

👤 Nome: ${nome}

🏢 Empresa: ${empresa}

📱 WhatsApp: ${telefone}

📧 E-mail: ${email}

💻 Tipo de Site: ${tipo}

📝 Descrição do Projeto:
${descricao}

Aguardo seu retorno.`;

  const numero = "5511997658760";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

// ========================================
// HEADER COM EFEITO AO ROLAR
// ========================================

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "#ffffff";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.10)";
  } else {
    header.style.background = "#ffffff";
    header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
  }
});

// ========================================
// ANIMAÇÃO SUAVE DOS CARDS
// ========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document
  .querySelectorAll(".card, .price-card, .portfolio-item, .depoimento, .stat")
  .forEach((el) => {
    observer.observe(el);
  });

// ========================================
// EFEITO CONTADOR
// ========================================

const counters = document.querySelectorAll(".stat h3");

counters.forEach((counter) => {
  const updateCounter = () => {
    const targetText = counter.innerText;

    const target = parseInt(targetText.replace(/\D/g, ""));

    if (isNaN(target)) return;

    let count = 0;

    const interval = setInterval(() => {
      count += Math.ceil(target / 40);

      if (count >= target) {
        counter.innerText = targetText;
        clearInterval(interval);
      } else {
        if (targetText.includes("%")) {
          counter.innerText = count + "%";
        } else if (targetText.includes("+")) {
          counter.innerText = "+" + count;
        } else {
          counter.innerText = count;
        }
      }
    }, 30);
  };

  updateCounter();
});

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "100px";
botaoTopo.style.right = "25px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";
botaoTopo.style.background = "#2563eb";
botaoTopo.style.color = "#fff";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========================================
// ANIMAÇÕES CSS AUTOMÁTICAS
// ========================================

const style = document.createElement("style");

style.innerHTML = `
.card,
.price-card,
.portfolio-item,
.depoimento,
.stat{
opacity:0;
transform:translateY(30px);
transition:.8s;
}

.show{
opacity:1 !important;
transform:translateY(0) !important;
}
`;

document.head.appendChild(style);

// ========================================
// ANO AUTOMÁTICO NO FOOTER
// ========================================

const footer = document.querySelector("footer");

if (footer) {
  const ano = new Date().getFullYear();

  footer.innerHTML += `
    <p style="margin-top:15px;">
        © ${ano} WebPro - Todos os direitos reservados.
    </p>
`;
}

// ========================================
// MENSAGEM DE BOAS-VINDAS
// ========================================

console.log("WebPro carregado com sucesso 🚀");

// ========================================
// FIM DO SCRIPT
// ========================================
