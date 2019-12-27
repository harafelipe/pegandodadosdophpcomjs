<?php 

$array = [
	1 => [
		'nome' => 'Matheus', 
		'idade' => 22, 
		'cidade' => 'Senhor do Bonfim - BA'
	],
	2 => [
		'nome' => 'Felipe Hara', 
		'idade' => 22, 
		'cidade' => 'Quem Sabe - BR'
	],
	3 => [
		'nome' => 'Luis Eduardo', 
		'idade' => 22, 
		'cidade' => 'Quem Sabe - BR'
	]
];

echo json_encode($array); // transformando $array em  JSON