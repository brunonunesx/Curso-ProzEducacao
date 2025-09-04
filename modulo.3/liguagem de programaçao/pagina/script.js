        // Função assíncrona para carregar detalhes do destino
        async function carregarDestino(destino) {
            try {
                const detalhesDiv = document.getElementById("detalhes");
                detalhesDiv.innerHTML = "Carregando informações do destino...";

                // Simula tempo de espera (2 segundos)
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Dados dos destinos: descrição, imagem e linkç
                const destinos = {
                    salvador: {
                        descricao: "Salvador é famosa por suas praias, cultura afro-brasileira e o Pelourinho.",
                        imagem: "https://cdn.futura-sciences.com/sources/images/diaporama/1037-diapo-bresil/album-bresil31.jpg",
                        link: "https://www.visitesalvador.ba.gov.br/"
                    },
                    natal: {
                        descricao: "Natal é conhecida por suas dunas, praias paradisíacas e o Forte dos Reis Magos.",
                        imagem: "https://tse2.mm.bing.net/th/id/OIP.R6iI1mlrJm7iUoyHzjcfmAHaE8?cb=thfc1ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                        link: "https://www.natal.rn.gov.br/"
                    },
                    santiago: {
                        descricao: "Santiago é a capital do Chile, cercada pela Cordilheira dos Andes.",
                        imagem: "https://th.bing.com/th/id/R.6d995fdfa32901b9edeca91bd75f4f11?rik=gt9rEfaeTHPRjw&pid=ImgRaw&r=0",
                        link: "https://chile.travel/en/"
                    },
                    buenosaires: {
                        descricao: "Buenos Aires é a capital da Argentina, conhecida por sua arquitetura e tango.",
                        imagem: "https://tse2.mm.bing.net/th/id/OIP.sQrtcYflobgOearytjPY4AHaE7?cb=thfc1ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                        link: "https://turismo.buenosaires.gob.ar/en"
                    }
                };

                // Atualiza a div com a descrição e imagem
                const destinoSelecionado = destinos[destino];
                detalhesDiv.innerHTML = `
                    <p>${destinoSelecionado.descricao}</p>
                    <img src="${destinoSelecionado.imagem}" alt="${destino}">
                    <br><br>
                    <a href="${destinoSelecionado.link}" target="_blank">Visitar página oficial</a>
                `;
            } catch (erro) {
                document.getElementById("detalhes").innerHTML = "Erro: " + erro.message;
                console.error("Erro capturado:", erro);
            }
        }

