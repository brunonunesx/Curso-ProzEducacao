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
              window.location.href="https://www.bing.com/search?pglt=43&q=site+uol&cvid=1754461f7e3e42b5a8073ba55c1aa21e&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQg2MzU3ajBqMagCALACAA&FORM=ANNTA1&PC=U531"
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