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