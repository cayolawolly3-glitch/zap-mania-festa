// ==========================================
// ZAP MANIA FESTA - CARRINHO
// ==========================================

let carrinho = [];


// ==========================================
// ADICIONAR PRODUTO AO CARRINHO
// ==========================================

function adicionarCarrinho(nome, preco) {

    const produto = carrinho.find(
        item => item.nome === nome
    );

    if (produto) {

        produto.quantidade++;

    } else {

        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });

    }

    atualizarContador();

    mostrarNotificacao(nome);
}


// ==========================================
// ATUALIZAR CONTADOR DO CARRINHO
// ==========================================

function atualizarContador() {

    const contador =
        document.getElementById("contador-carrinho");

    let quantidadeTotal = 0;

    carrinho.forEach(item => {

        quantidadeTotal += item.quantidade;

    });

    if (contador) {

        contador.textContent = quantidadeTotal;

    }
}


// ==========================================
// NOTIFICAÇÃO
// ==========================================

function mostrarNotificacao(nome) {

    const notificacao =
        document.createElement("div");

    notificacao.innerHTML = `
        💗 <strong>${nome}</strong>
        <br>
        <span>Adicionado ao carrinho!</span>
    `;

    notificacao.style.position = "fixed";
    notificacao.style.top = "20px";
    notificacao.style.right = "20px";
    notificacao.style.background = "#ffffff";
    notificacao.style.color = "#d94f8a";
    notificacao.style.padding = "15px 20px";
    notificacao.style.borderRadius = "12px";
    notificacao.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.15)";
    notificacao.style.zIndex = "9999";
    notificacao.style.fontFamily =
        "Arial, sans-serif";
    notificacao.style.textAlign = "center";

    document.body.appendChild(notificacao);

    setTimeout(() => {

        notificacao.remove();

    }, 2500);
}


// ==========================================
// ABRIR CARRINHO
// ==========================================

function abrirCarrinho() {

    if (carrinho.length === 0) {

        alert("🛒 Seu carrinho está vazio!");

        return;
    }

    let mensagem =
        "🛍️ *PEDIDO - ZAP MANIA FESTA*%0A%0A";

    let total = 0;

    carrinho.forEach(item => {

        const subtotal =
            item.preco * item.quantidade;

        total += subtotal;

        mensagem +=
            `🍰 ${item.nome}%0A` +
            `Quantidade: ${item.quantidade}%0A` +
            `Valor: R$ ${subtotal
                .toFixed(2)
                .replace(".", ",")}%0A%0A`;

    });

    mensagem +=
        `💰 *TOTAL: R$ ${total
            .toFixed(2)
            .replace(".", ",")}*%0A%0A` +
        `Olá! Gostaria de finalizar este pedido. 💗`;

    const telefone = "5511989207413";

    const whatsapp =
        `https://wa.me/${telefone}?text=${mensagem}`;

    window.open(whatsapp, "_blank");
}


// ==========================================
// BOTÃO DO CARRINHO
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const botaoCarrinho =
            document.querySelector(".btn-carrinho");

        if (botaoCarrinho) {

            botaoCarrinho.addEventListener(
                "click",
                abrirCarrinho
            );

        }

    }
);