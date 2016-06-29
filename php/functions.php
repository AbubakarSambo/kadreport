<?php

/**
 * @author Sambo
 * @copyright 2015
 */
// session_start ();
// load error handling script and the queue class
require_once ('error_handler.php');
require_once ('teacher.php');
// require_once ('user.php');
// require_once ('customer.php');
require_once ('dbconnection.php');
// when the condition is met
if (! (isset ( $_GET ['action'] ))) {
	echo 'Server error: client command missing.';
	exit ();
} else {
	// store the action to be performed in the $action variable
	$action = $_GET ['action'];
}

// create a new queue connection class instance
$teacherobj = new Teacher ();
$dbconn = new dbconnection ( 'admin' );

if ($action === 'login') {
	
	$email = $_GET ['email'];
	$password = $_GET ['password'];
	
	// error check goes here
	if (empty ( $_GET )) {
		echo "Error: Empty Submission not allowed";
		exit ();
	}
	
	$ans = $teacherobj->signIn ( $email, $password );
	echo $ans;
}
else if ($action === 'logout') {
		
	$ans = $teacherobj->signOut();
	echo $ans;
} 
else if ($action === 'getstudents') {
	
	$ans = $teacherobj->getStudentnames ();
} 

else if ($action === 'signup') {
	
	$firstname = $_GET ['fname'];
	$lastname = $_GET ['lname'];
	$email = $_GET ['email'];
	$phone = $_GET ['phone'];
	$sub1 = $_GET ['sub1'];
	$sub2 = $_GET ['sub2'];
	$sub3 = $_GET ['sub3'];
	$sub4 = $_GET ['sub4'];
	$sub5 = $_GET ['sub5'];
	$password = $_GET ['password'];
	
	// error check goes here
	if (empty ( $_GET )) {
		echo "Error: Empty Submission not allowed";
		exit ();
	}
	
	$ans = $teacherobj->signUp ( $firstname, $lastname, $email, $phone, $password, $sub1, $sub2, $sub3, $sub4, $sub5 );
	// echo $ans;
} 

else if ($action === 'getstudentsbyyear') {
	
	$class = $_GET ['class'];
	
	$ans = $teacherobj->getStudentnamesbyyear ( $class );
} else if ($action === 'getcomments') {
	
	$name = $_GET ['name'];
	$_SESSION ['studentname'] = $name;
	
	$ans = $teacherobj->getcomments ( $name );
} else if ($action === 'getteacher') {
	
	$id = $_SESSION ['email'];
	
	$ans = $teacherobj->getteacher ( $id );
} else if ($action === 'resetpassword') {
	
	$email = $_GET ['email'];
	$password = $_GET ['password'];
	
	if (($dbconn->checkEmailPresent ( $email ))) {
		
		$ans = $teacherobj->resetPasscode ( $email, $password );
	} else {
		$ans = 'invalid';
		return $ans;
	}
} else if ($action === 'getcomments2') {
	
	$name = $_GET['name'];
	
	$id = $dbconn->get_student_id($name);
	$ans = $dbconn->getcomments2($id);
	//echo $ans;
}

?>