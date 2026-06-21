const links = {
    procrastinacao: "https://pay.kiwify.com.br/ygLoHQn",
    ia: "https://pay.kiwify.com.br/OX3zVUk",
    tiktok: "https://pay.kiwify.com.br/TTaND3x",
    dinheiro: "https://pay.kiwify.com.br/vzrGLaJ",
    business: "https://pay.kiwify.com.br/RuuXM9Y",
    premium: "https://pay.kiwify.com.br/VIFsLCL",
    site: "https://bio.site/basezero"
};

window.onload = () => {

    adicionarMensagem(
        "🚀 Olá! Eu sou o ZeroChat da Base Zero.\n\nDigite 'ebooks' para ver nossos produtos.",
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
        msg.includes("ola") ||
        msg.includes("opa") ||
        msg.includes("bom dia") ||
        msg.includes("boa tarde") ||
        msg.includes("boa noite")
    ) {

        return `
👋 Olá!

Eu sou o ZeroChat da Base Zero.

Digite:

📚 ebooks

Para conhecer nossos produtos.
`;
    }

    // EBOOKS

    if (
        msg.includes("ebook") ||
        msg.includes("ebooks") ||
        msg.includes("produtos")
    ) {

        return `
📚 Produtos Base Zero

🤖 IA ao Seu Favor

📱 Viralizar no TikTok

🎯 Pare de Procrastinar

💰 Fazer Dinheiro na Internet

💼 Pacote Business

⭐ Pacote Premium

Digite o nome do produto.
`;
    }

    // IA

    if (
        msg.includes("ia") ||
        msg.includes("chatgpt") ||
        msg.includes("inteligência artificial") ||
        msg.includes("inteligencia artificial")
    ) {

        return `
🤖 IA ao Seu Favor

🛒 Comprar:

${links.ia}
`;
    }

    // TIKTOK

    if (
        msg.includes("tiktok") ||
        msg.includes("viralizar")
    ) {

        return `
📱 Viralizar no TikTok

🛒 Comprar:

${links.tiktok}
`;
    }

    // PROCRASTINAÇÃO

    if (
        msg.includes("procrastinar") ||
        msg.includes("procrastinação") ||
        msg.includes("foco")
    ) {

        return `
🎯 Pare de Procrastinar

🛒 Comprar:

${links.procrastinacao}
`;
    }

    // DINHEIRO

    if (
        msg.includes("dinheiro") ||
        msg.includes("internet") ||
        msg.includes("renda")
    ) {

        return `
💰 Fazer Dinheiro na Internet

🛒 Comprar:

${links.dinheiro}
`;
    }

    // BUSINESS

    if (
        msg.includes("business")
    ) {

        return `
💼 Pacote Business

🛒 Comprar:

${links.business}
`;
    }

    // PREMIUM

    if (
        msg.includes("premium")
    ) {

        return `
⭐ Pacote Premium

🛒 Comprar:

${links.premium}
`;
    }

    // SITE

    if (
        msg.includes("site") ||
        msg.includes("base zero") ||
        msg.includes("link")
    ) {

        return `
🌐 Site Oficial Base Zero

${links.site}
`;
    }

    // AJUDA

    if (
        msg.includes("ajuda") ||
        msg.includes("suporte")
    ) {

        return `
🛠️ Suporte Base Zero

Explique sua dúvida que farei o possível para ajudar.
`;
    }

    return `
🤔 Não entendi.

Você pode digitar:

📚 ebooks

🌐 site

💼 business

⭐ premium

🤖 ia

📱 tiktok
`;
}

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("msg");

    input.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            enviar();

        }

    });

});
