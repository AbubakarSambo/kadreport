//<?php
require_once ("php/error_handler.php");
require_once ("php/config.php");
require_once ("php/dbconnection.php");
//require_once ("php/teacher.php");
require_once 'php/students.php';



//$sambo = new Teacher();
//$dbc = new dbconnection('admin');
//$dbc->get_student_id('Kyle Lowry');
//$sambo->getcomments('Kun Kompany');
$sadiq = new Students();
$sadiq->signUp("Tumsah Habiba", '6', '9');
//$sadiq->
//$sadiq->getStudentnames();
//$sambo->signUp($firstname1, $lastname1, $email1, $phone1,$password1,$subject1,$subject2,$subject3,$subject4,$subject5);
//$sambo->signIn($email1, $password1);
//unset($_SESSION['email']);

?>