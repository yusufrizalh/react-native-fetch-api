<?php
//* call the connection
require("./config/database.php");

$json = file_get_contents('php://input');
$object = json_decode($json, true);

//* properties to update
$id = $object['id'];
$name = $object['name'];
$email = $object['email'];
$phone = $object['phone'];
$address = $object['address'];

//* query update
$query = "UPDATE employees SET 
            name = '$name',
            email = '$email',
            phone = '$phone',
            address = '$address'
            WHERE id = $id";

//* execute the query
$result = $connection->query($query);

//* check if the update was successful
if ($result) {
    $message = "Successfully updated employee";
    $json = json_encode($message);
    echo $json;
} else {
    $message = "Failed to update employee";
    $json = json_encode($message);
    echo $json;
}
$connection->close();
