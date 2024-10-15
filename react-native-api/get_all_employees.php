<?php
//* call the connection
require("./config/database.php");

//* query to get all employees
$query = "SELECT * FROM employees ORDER BY id DESC";
//* execute the query
$result = $connection->query($query);

if ($result->num_rows > 0) {
    while ($records[] = $result->fetch_assoc()) {
        $items = $records;
        $json = json_encode($items);
    }
} else {
    echo "No records found";
}
echo $json;
$connection->close();
