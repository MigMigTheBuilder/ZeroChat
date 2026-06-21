const database = {
  saudacao: ["oi", "opa", "olá", "ola", "bom dia", "boa tarde", "boa noite"],

  produtos: ["ebook", "e-book", "produto", "produtos", "livros", "material"],

  business: ["business", "pacote", "pacote business"],

  ia: ["ia", "inteligencia artificial", "inteligência artificial", "chatgpt"],

  tiktok: ["tiktok", "viral", "viralizar"],

  dinheiro: ["dinheiro", "renda", "internet"],

  procrastinacao: ["procrastinar", "procrastinação", "disciplina", "foco"],

  compra: ["comprar", "comprar agora", "quero comprar", "adquirir"],

  preco: ["preço", "preco", "valor", "quanto custa"],

  suporte: ["suporte", "ajuda", "problema"]
};

window.onload = function () {
  adicionarMensagem(
    "Olá! Eu sou o ZeroChat da Base Zero 🚀. Posso ajudar com nossos e-books, Pacote Business e suporte.",
    "bot"
  );
};

function enviar() {
  const input = document.getElementById("msg");
  const texto = input.value.trim();

  if (texto === "") return;

  adicionarMensagem(texto, "user");
  input.value = "";

  setTimeout(() => {
    adicionarMensagem(responder(texto), "bot");
  }, 700);
}

function adicionarMensagem(texto, tipo) {
  const chat = document.getElementById("chat");
  const div = document.createElement("div");

  div.className = "msg " + tipo;
  div.innerText = texto;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function responder(msg) {
  msg = msg.toLowerCase();

  if (database.saudacao.some(p => msg.includes(p))) {
    return "Olá! Seja bem-vindo à Base Zero 🚀. Como posso ajudar você hoje?";
  }

  if (database.business.some(p => msg.includes(p))) {
    return "📚 O Pacote Business inclui: IA ao Seu Favor, Como Viralizar no TikTok do Zero, Pare de Procrastinar e Como Começar do Zero e Fazer Dinheiro na Internet.";
  }

  if (database.ia.some(p => msg.includes(p))) {
    return "🤖 O e-book IA ao Seu Favor mostra como usar Inteligência Artificial para estudar, criar conteúdo, organizar tarefas e aumentar a produtividade.";
  }

  if (database.tiktok.some(p => msg.includes(p))) {
    return "📱 O e-book Como Viralizar no TikTok do Zero ensina estratégias para crescer, criar conteúdo e aumentar seu alcance.";
  }

  if (database.dinheiro.some(p => msg.includes(p))) {
    return "💰 O e-book Como Começar do Zero e Fazer Dinheiro na Internet apresenta ideias e estratégias para iniciar projetos online.";
  }

  if (database.procrastinacao.some(p => msg.includes(p))) {
    return "🎯 O e-book Pare de Procrastinar aborda disciplina, foco, hábitos e organização para melhorar sua produtividade.";
  }

  if (database.produtos.some(p => msg.includes(p))) {
    return "📚 Temos materiais sobre IA, TikTok, produtividade, foco, disciplina e empreendedorismo digital.";
  }

  if (database.compra.some(p => msg.includes(p))) {
    return "🛒 Para comprar, clique no botão de compra disponível na página oficial da Base Zero.";
  }

  if (database.preco.some(p => msg.includes(p))) {
    return "💲 Os preços podem variar conforme a promoção. Consulte a página oficial da Base Zero para ver o valor atual.";
  }

  if (database.suporte.some(p => msg.includes(p))) {
    return "🛠️ Claro! Me diga qual dúvida ou problema você está tendo.";
  }

  return "🤔 Posso te ajudar com Pacote Business, IA, TikTok, produtividade, compra ou suporte.";
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("msg");

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      enviar();
    }
  });
});