function verificarLogin() {
      // Usuários já definidos
      let usuarios = [
        { login: "joao", senha: "1234" },
        { login: "maria", senha: "abcd" },
        { login: "admin", senha: "admin123" }
      ];

      let loginDigitado = document.getElementById("login").value.trim();
      let senhaDigitada = document.getElementById("senha").value.trim();
      let mensagem = document.getElementById("mensagem");
      let autenticado = false;

      // Laço de repetição para verificar
      for (let i = 0; i < usuarios.length; i++) {
        if (loginDigitado === usuarios[i].login && senhaDigitada === usuarios[i].senha) {
          autenticado = true;
          break;
        }
      }

      // Exibe resultado
      if (autenticado) {
        mensagem.style.color = "green";
        mensagem.innerText = "✅ Login realizado com sucesso!";
      } else {
        mensagem.style.color = "red";
        mensagem.innerText = "❌ Login ou senha incorretos!";
      }
    }