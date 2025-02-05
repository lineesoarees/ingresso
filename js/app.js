let qtdePista = document.getElementById('qtd-pista');
let qtdeSuperior = document.getElementById('qtd-superior');
let qtdeInferior = document.getElementById('qtd-inferior');

function comprar(){
    let qtdeSelecionada =document.getElementById('qtd').value;
    let ingressoSelecionado = document.getElementById('tipo-ingresso').value;
    if(qtdeSelecionada<=0){
        alert('Quantidade Inválida');
    }else{
    if (ingressoSelecionado == 'inferior'){
        if(qtdeSelecionada > qtdeInferior.textContent){
            alert(`Quantidade indisponível, você pode selecionar no máximo ${qtdeInferior.textContent}`);
        }else{
            let qtdeAtualizada= qtdeInferior.textContent-qtdeSelecionada;
            qtdeInferior.textContent = qtdeAtualizada;
            document.getElementById('qtd').value = 0;
             alert('Compra Realizada com Sucesso');
        };

    }else{
        if(ingressoSelecionado == 'superior'){
            if(qtdeSelecionada > qtdeSuperior.textContent){
                alert(`Quantidade indisponível, você pode selecionar no máximo ${qtdeSuperior.textContent}`);
            }else{
                let qtdeAtualizada= qtdeSuperior.textContent-qtdeSelecionada;
                qtdeSuperior.textContent = qtdeAtualizada;
                document.getElementById('qtd').value = 0;
                alert('Compra Realizada com Sucesso');
            };
        
        }else{
            if(qtdeSelecionada > qtdePista.textContent){
                alert(`Quantidade indisponível, você pode selecionar no máximo ${qtdePista.textContent}`);
            }else{
                let qtdeAtualizada= qtdePista.textContent-qtdeSelecionada;
                qtdePista.textContent = qtdeAtualizada;
                document.getElementById('qtd').value = 0;
                alert('Compra Realizada com Sucesso');
            };
        };
    };
    };
};