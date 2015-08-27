<?php
<?php
$db_conx = mysqli_connect("localhost@foneteam.com", "foneteam_", "Jamers2011", "foneteam_usernames");
// Evaluate the connection
if (mysqli_connect_errno()) {
    echo mysqli_connect_error();
    exit();
} else {
	echo "Successful database connection, happy coding!!!";
}
?>
?>