<?
// do the connection first, then write a query
$user = "root";
$pass = "root";
$host = "localhost";
$db = "a3_cooperInfo";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
  echo 'sumpin done gone wrong, son';
  exit;
}

if (isset($_GET["carModel"])) { // check to see if a query parameter exists
  $car = $_GET["carModel"];
  // pass in the car variable using the location bar in the browser (?carModel=F56)
  $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
  // send the query
  $result = mysqli_query($conn, $myQuery);
  // get the result
  $row = mysqli_fetch_assoc($result);
  // echo it back to whatever called it (the browser, to start)
  //var_dump($row);
  // and then encode it for the javascript AJAX call
  echo json_encode($row);
};

if (isset($_GET["getVideos"])) { // check to see if a query parameter exists
  $myQuery = "SELECT * FROM video";
  $result = mysqli_query($conn, $myQuery);
  $row = array();

  while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  echo json_encode($rows);

};


?>
