<?php

$input = json_decode(file_get_contents('php://input'));
// $input['key'] would equal "value"
echo json_encode($input);
//this is how you access each object's value in the array from the saved matches...echo $input[0]->id;

?>