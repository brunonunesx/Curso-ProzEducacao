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
        mensagem.innerText = "Redirecionando....";
          //Aguadar 2 segunods e voltar para a mensagem inicial
          setTimeout(() => {
              window.location.href="nome.html"
          }
        ,2000)
      } else {
        mensagem.style.color = "red";
        mensagem.innerText = "Verificando...";
           setTimeout(() => {
          mensagem.innerText = "Login ou senha incorretos, tente novamente.";
          document.getElementById("login").value = "";
          document.getElementById("senha").value = "";
        }, 2000);
      }
    }
      