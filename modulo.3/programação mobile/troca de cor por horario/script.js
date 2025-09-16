    function trocar() {
      const hora = new Date().getHours();
      let cor, mensagem, titulo;

      if (hora >= 6 && hora < 12) {
        cor = "#FFD700"; // manhã
        titulo = "☀️ Bom dia!";
        mensagem = "Que sua manhã seja dourada e cheia de energia!";
      } else if (hora >= 12 && hora < 18) {
        cor = "#FF8C00"; // tarde
        titulo = "🌤️ Boa tarde!";
        mensagem = "Aproveite sua tarde produtiva e cheia de luz!";
      } else if (hora >= 18 && hora < 23) {
        cor = "#1E90FF"; // noite
        titulo = "🌙 Boa noite!";
        mensagem = "Um descanso tranquilo para você!";
      } else {
        cor = "#2F4F4F"; // madrugada
        titulo = "🌌 Madrugada serena!";
        mensagem = "Hora de relaxar e sonhar!";
      }

      document.body.style.backgroundColor = cor;
      document.getElementById("titulo").innerHTML = titulo;
      document.getElementById("mensagem").innerHTML = mensagem;
    }

    function atualizarHoraData() {
      const agora = new Date();

      // Hora formatada
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');
      document.getElementById("hora").innerText = `Agora são ${horas}:${minutos}:${segundos}`;

      // Data formatada
      const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dataFormatada = agora.toLocaleDateString("pt-BR", opcoes);
      document.getElementById("data").innerText = dataFormatada;
    }

    // Atualiza a cada segundo
    setInterval(atualizarHoraData, 1000);
    atualizarHoraData();