const links = {
    primeiroMilhao: "https://pay.kiwify.com.br/VIFsLCL",
    ia: "https://pay.kiwify.com.br/RuuXM9Y",
    tiktok: "https://pay.kiwify.com.br/vzrGLaJ",
    procrastinacao: "https://pay.kiwify.com.br/TTaND3x",
    riqueza: "https://pay.kiwify.com.br/OX3zVUk",
    kit: "https://pay.kiwify.com.br/ygLoHQn",
    site: "https://bio.site/basezero"
};

window.onload = () => {

    adicionarMensagem(
`🚀 Olá! Eu sou o ZeroChat da Base Zero.

Digite:

"produtos"

para conhecer nossos produtos.`,
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
        adicionarMensagem(
            responder(texto),
            "bot"
        );
    }, 500);
}

function adicionarMensagem(texto, tipo) {

    const chat = document.getElementById("chat");

    const div = document.createElement("div");

    div.classList.add("msg");
    div.classList.add(tipo);

    const textoComLinks = texto.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank">$1</a>'
    );

    div.innerHTML = textoComLinks;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;
}

function responder(msg) {

    msg = msg.toLowerCase();

    // SAUDAÇÃO

    if (
        msg.includes("oi") ||
        msg.includes("olá") ||
        msg.includes("opa") ||
        msg.includes("bom dia") ||
        msg.includes("boa tarde") ||
        msg.includes("boa noite")
    ) {

        return `👋 Olá!

Sou o ZeroChat da Base Zero.

Digite:

📚 ebooks

para ver nossos produtos.`;
    }

    // LISTA DE PRODUTOS

    if (
msg.includes("ebook") ||
msg.includes("ebooks") ||
msg.includes("e-book") ||
msg.includes("e-books") ||
msg.includes("livro") ||
msg.includes("livros") ||
msg.includes("produto") ||
msg.includes("produtos") ||
msg.includes("disponível") ||
msg.includes("disponiveis") ||
msg.includes("disponíveis") ||
msg.includes("quais") ||
msg.includes("tem") ||
msg.includes("vocês vendem") ||
msg.includes("voces vendem")
    ) {

        return `📚 Produtos Base Zero

💵 Do Bolso Vazio ao Primeiro Milhão

🧠 IA na Prática: Como usar ao Seu Favor

🔥 TikTok Viral do Zero

👑 Fim da Procrastinação

💰 Do Zero à Riqueza

🔥 Kit Transformação Total

Digite o nome do produto para receber o link.`;
    }

    // IA

    if (
        msg.includes("ia") ||
        msg.includes("chatgpt") ||
        msg.includes("inteligência artificial") ||
        msg.includes("inteligencia artificial")
    ) {

        return `🧠 IA na Prática: Como usar ao Seu Favor

🛒 Comprar:

${links.ia}`;
    }

    // TIKTOK

    if (
        msg.includes("tiktok") ||
        msg.includes("viral")
    ) {

        return `🔥 TikTok Viral do Zero

🛒 Comprar:

${links.tiktok}`;
    }

    // PROCRASTINAÇÃO

    if (
        msg.includes("procrastinação") ||
        msg.includes("procrastinar") ||
        msg.includes("foco")
    ) {

        return `👑 Fim da Procrastinação: O Caminho para a Riqueza

🛒 Comprar:

${links.procrastinacao}`;
    }

    // RIQUEZA

    if (
        msg.includes("riqueza") ||
        msg.includes("liberdade financeira")
    ) {

        return `💰 Do Zero à Riqueza: O Guia Prático para Construir Sua Liberdade Financeira

🛒 Comprar:

${links.riqueza}`;
    }

    // PRIMEIRO MILHÃO

    if (
        msg.includes("milhão") ||
        msg.includes("milhao") ||
        msg.includes("bolso vazio")
    ) {

        return `💵 Do Bolso Vazio ao Primeiro Milhão

🛒 Comprar:

${links.primeiroMilhao}`;
    }

    // KIT

    if (
        msg.includes("kit") ||
        msg.includes("transformação total") ||
        msg.includes("transformacao total")
    ) {

        return `🔥 Kit Transformação Total

🛒 Comprar:

${links.kit}`;
    }

    // SITE

    if (
        msg.includes("site") ||
        msg.includes("base zero") ||
        msg.includes("link")
    ) {

        return `🌐 Site Oficial da Base Zero

${links.site}`;
    }

    // SUPORTE

    if (
        msg.includes("ajuda") ||
        msg.includes("suporte")
    ) {

        return `🛠️ Suporte Base Zero

Explique sua dúvida e tentarei ajudar.`;
    }

    // RESPOSTA PADRÃO

    return `🤔 Não entendi.

Você pode digitar:

📚 ebooks

🌐 site

🧠 ia

🔥 tiktok

👑 procrastinação

💰 riqueza

💵 primeiro milhão

🔥 kit`;
}

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("msg");

    input.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {
            enviar();
        }

    });

});
