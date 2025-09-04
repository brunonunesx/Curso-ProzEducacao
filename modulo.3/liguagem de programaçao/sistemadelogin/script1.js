    // Função assíncrona para carregar os detalhes do tênis
        async function carregarTenis(tenis) {
            try {
                // Atualiza o conteúdo da div com uma mensagem de "carregando"
                document.getElementById("detalhes").innerHTML = "Carregando informações do tênis...";
                
                // Simula um tempo de espera de 2 segundos (2000ms)
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Cria um objeto com as mensagens para cada tênis
                // A chave é o nome do tênis e o valor é a descrição correspondente
                let mensagens = {
                    "adidas": "O tênis da Adidas é conhecido por sua tecnologia de amortecimento e design clássico.",
                    "nike": "O tênis da Nike oferece conforto e alto desempenho para atletas e entusiastas.",
                    "mizuno": "O tênis da Mizuno se destaca pela leveza e durabilidade, ideal para corridas e atividades de impacto."
                };

                // Atualiza o conteúdo da div com a mensagem correspondente ao tênis selecionado
                document.getElementById("detalhes").innerHTML = mensagens[tenis];

            } catch (erro) {
                // Caso algo dê errado, mostra essa mensagem
                document.getElementById("detalhes").innerHTML = "Erro: " + erro.message;
                console.error("Erro capturado:", erro);
            }
        }