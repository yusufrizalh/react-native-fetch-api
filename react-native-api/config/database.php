<?php
//* properties to create connection
$host = "127.0.0.1";
$user = "root";
$password = "";
$dbName = "db_react_native";

//* create connection
$connection = new mysqli($host, $user, $password, $dbName);

//* check connection
if ($connection->connect_errno) {
    die("Connection error: " . $connection->connect_error);
}
