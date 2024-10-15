<?php
//* call the connection
require("./config/database.php");

$json = file_get_contents('php://input');
$object = json_decode($json, true);

//* properties to delete
$id = $object['id'];

//* query update
$query = "DELETE FROM employees WHERE id = $id";

//* execute the query
$result = $connection->query($query);

//* check if the delete was successful
if ($result) {
    $message = "Successfully deleted employee";
    $json = json_encode($message);
    echo $json;
} else {
    $message = "Failed to delete employee";
    $json = json_encode($message);
    echo $json;
}
$connection->close();
