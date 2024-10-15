<?php
//* call the connection
require("./config/database.php");

$json = file_get_contents('php://input');
$object = json_decode($json, true);

//* properties to create
$name = $object['name'];
$email = $object['email'];
$phone = $object['phone'];
$address = $object['address'];

//* query insert
$query = "INSERT INTO employees (name, email, phone, address) 
    VALUES('$name', '$email', '$phone', '$address')";
//* execute the query
$result = $connection->query($query);

//* check if the insertion was successful
if ($result) {
    $message = "Successfully inserted";
    $json = json_encode($message);
    echo $json;
} else {
    $message = "Failed to insert";
    $json = json_encode($message);
    echo $json;
}
$connection->close();
