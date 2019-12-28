<?php 

//Obtendo valor do formuláro

$nome = filter_input(INPUT_POST, "nome", FILTER_SANITIZE_STRING);

//Validando entrada
$nome = (!empty($nome)) ? mb_strtoupper($nome) : 'Fulano';

//Mensagem de resposta
$mensagem = "Estamos felizes em estar conosco {$nome}!";

//Emitindo retorno como um objeto JSON
echo json_encode(['mensagem' => $mensagem]);