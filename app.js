$.ajax({

    url: URL_PROJETO+'res.php', // URL QUE RETORNA DADOS EM FORMA DE JSON
    type: 'GET',  // TIPO DE REQUISIÇÃO 
    dataType: 'json', //  TIPO DE RETORNO 
    success: function(json) {

        var valor = '';

        // percorrendo o json
        for(var i in json){

        	// #################### EXIBINDO DE DUAS FORMAS ####################

        	/* 
        		exibindo no console do navegador ||| Se 
        		você usa Google Chrome pressione Ctrl + Shift + I
        	/*/
            console.log(json[i].nome);

            // GUARANDO O VALOR DENTRO DA TAG <li></li>
            valor += `<li>${json[i].nome}</li>`;

        }

        // EXIBINDO NO HTML
        $("#lista").html(valor);

    }

});

//REALIZANDO O ENVIO DO FORMULÁRIO
$(document).on('submit', 'form', function(e) {
    e.preventDefault();

    //OBTENDO VALOR DO INPUT
    let nome = $("#nome").val();

    $.ajax({
        url: URL_PROJETO + 'dados_form.php', //URL DE DESTINO
        type: 'POST', //TIPO DE REQUISIÇÃO
        dataType: 'json', //TIPO DE RETORNO
        data: {nome:nome}, //DADOS A SEREM ENVIADOS NA REQUISIÇÃO
        success: function(json) {
            $('h1').text(json.mensagem); //ATRIBUINDO O RETORNO A TAG H1
        }
    });

});
