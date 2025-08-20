function verificarCupom() {
      let cupomValido = "diadecomprar";
      let cupomDigitado = document.getElementById("campoCupom").value.trim();
      let mensagem = document.getElementById("mensagem");
      
      if (cupomDigitado === cupomValido) {
        document.querySelector("h1").innerText = "Cupom Válido!";
        document.querySelector("p").innerText = "Parabéns, você ganhou desconto!";
        document.querySelector("button").innerText = "Usar Cupom";
        mensagem.style.color = "green";
        mensagem.innerText = "✅ Cupom aceito!";
      } else {
        document.querySelector("h1").innerText = "Cupom Inválido!";
        document.querySelector("p").innerText = "Tente novamente.";
        document.querySelector("button").innerText = "Verificar Novamente";
        mensagem.style.color = "red";
        mensagem.innerText = "❌ Cupom incorreto!";
      }
    }