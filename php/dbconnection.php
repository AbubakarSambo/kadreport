<?php

/**
 * @author Baps
 * @copyright 2015
 */

// load configuration file
require_once ('config.php');

// the database connection class
class dbconnection {
	// class properties
	private $dbhandler;
	private $xmlhandler;
	
	// methods: contructor
	function __construct($user) {
		
		// create a database connection
		if ($user == 'admin') {
			$this->dbhandler = new mysqli ( HOST, USER_ADMIN, USER_ADMIN_PASS, DATABASE );
		} else {
			print 'Please Specify a user';
			exit ();
		}
	}
	public function get_user_id($email) {
		$email = $this->dbhandler->real_escape_string ( $email );
		
		$query_str = "SELECT id FROM teacher WHERE email = '" . $email . "';";
		
		if ($result = $this->dbhandler->query ( $query_str )) {
			
			$column = mysqli_fetch_array ( $result );
			
			return $column [0];
		}
	}
	public function get_student_id($name) {
		$name = $this->dbhandler->real_escape_string ( $name );
		
		$query_str = "SELECT id FROM students WHERE name = '" . $name . "';";
		
		if ($result = $this->dbhandler->query ( $query_str )) {
			
			$column = mysqli_fetch_array ( $result );
			
			return $column [0];
		}
	}
	public function Signup($fn, $ln, $email, $phone, $password, $subject1, $subject2, $subject3, $subject4, $subject5) {
		// escape strings and place into database
		// validate input
		$fn = $this->dbhandler->real_escape_string ( $fn );
		$ln = $this->dbhandler->real_escape_string ( $ln );
		$email = $this->dbhandler->real_escape_string ( $email );
		$phone = $this->dbhandler->real_escape_string ( $phone );
		$password = $this->dbhandler->real_escape_string ( $password );
		$subject1 = $this->dbhandler->real_escape_string ( $subject1 );
		$subject2 = $this->dbhandler->real_escape_string ( $subject2 );
		$subject3 = $this->dbhandler->real_escape_string ( $subject3 );
		$subject4 = $this->dbhandler->real_escape_string ( $subject4 );
		$subject5 = $this->dbhandler->real_escape_string ( $subject5 );
		
		// p wording
		$password = hash ( 'sha256', $password, false );
		$password = substr ( $password, 0, 50 );
		
		// sql query
		$query_str = "INSERT INTO teacher VALUES ('', '$fn', '$ln', '$email', '$phone', '$password','$subject1','$subject2','$subject3','$subject4','$subject5','','','','','','','','','','','','','','','','','',''); ";
		 
		// execute the statement
		if ($this->dbhandler->query ( $query_str ))
			return true;
		else
			return false;
	}
	public function login($email, $password) {
		// take email and password and compare password to the one stored in the database
		// if there is a match then grant access
		$email = $this->dbhandler->real_escape_string ( $email );
		
		$password = hash ( 'sha256', $password, false );
		$password = substr ( $password, 0, 50 );
		
		$query_str = "SELECT password FROM teacher WHERE email ='" . $email . "';";
		
		// echo $query_str. '<br />';
		// execute the statement
		$result = $this->dbhandler->query ( $query_str );
		
		$column = mysqli_fetch_array ( $result );
		
		if ($column [0] == $password) {
			
			return true;
		} else
			return false;
	}
	public function getteacher($id) {
		$query_str = "SELECT * FROM teacher WHERE id ='" . $id . "';";
		
		$json = array ();
		$result = $this->dbhandler->query ( $query_str );
		
		// $column = mysqli_fetch_array ( $result );
		
		while ( $column = mysqli_fetch_array ( $result ) ) {
			
			$teacherprops = array (
					'id' => $column ['id'],
					'fname' => $column ['fname'],
					'lname' => $column ['lname'],
					'email' => $column ['email'],
					'phone' => $column ['phone'],
					'subject1' => $column ['subject1'],
					'subject2' => $column ['subject2'],
					'subject3' => $column ['subject3'],
					'subject4' => $column ['subject4'],
					'subject5' => $column ['subject5'] 
			);
			array_push ( $json, $teacherprops );
		}
		$jsonstring = json_encode ( $json );
		return $jsonstring;
	}
	public function getsubjects($id) {
		$query_str = "SELECT * FROM teacher WHERE id ='" . $id . "';";
		
		$json = array ();
		$result = $this->dbhandler->query ( $query_str );
		
		// $column = mysqli_fetch_array ( $result );
		
		while ( $column = mysqli_fetch_array ( $result ) ) {
			
			$fabric = array (
					'id' => $column ['id'],
					'subject1' => $column ['subject1'],
					'subject2' => $column ['subject2'],
					'subject3' => $column ['subject3'],
					'subject4' => $column ['subject4'],
					'subject5' => $column ['subject5'],
					'subject6' => $column ['subject6'],
					'subject7' => $column ['subject7'],
					'subject8' => $column ['subject8'],
					'subject9' => $column ['subject9'],
					'subject10' => $column ['subject10'],
					'subject11' => $column ['subject11'],
					'subject12' => $column ['subject12'],
					'subject13' => $column ['subject13'],
					'subject14' => $column ['subject14'],
					'subject15' => $column ['subject15'],
					'subject16' => $column ['subject16'],
					'subject17' => $column ['subject17'],
					'subject18' => $column ['subject18'],
					'subject19' => $column ['subject19'],
					'subject20' => $column ['subject20'],
					'subject21' => $column ['subject21'],
					'subject22' => $column ['subject22'],
					'subject23' => $column ['subject23']
			);
			array_push ( $json, $fabric );
		}
		$jsonstring = json_encode ( $json );
		return $jsonstring;
	}
	
	// students
	public function Signupstudent($name, $age, $class) {
		
		// validate input
		$name = $this->dbhandler->real_escape_string ( $name );
		
		// p wording
		
		// sql query
		$query_str = "INSERT INTO students VALUES ('', '$name', $age, $class,'','','','','','','','','','','','','','','','','','','','','','','',''); ";
		echo $query_str . '<br />';
		// execute the statement
		if ($this->dbhandler->query ( $query_str ))
			return true;
		else
			return false;
	}
	public function writecomments($name, $subject, $comment) {
		
		// validate input
		$name = $this->dbhandler->real_escape_string ( $name );
		$subject = $this->dbhandler->real_escape_string ( $subject );
		
		// sql query
		$query_str = "UPDATE students SET " . $subject . "='" . $comment . "' WHERE name='" . $name . "';";
		
		// echo $query_str . '<br />';
		// execute the statement
		if ($this->dbhandler->query ( $query_str )) {
			// header ( "Location: dashb.php" );
			
			return true;
		} else
			return false;
	}
	public function writecomments2($id, $subject, $comment) {
		
		$studentname = $_SESSION ['studentname'];
		// validate input
		$subject = $this->dbhandler->real_escape_string ( $subject );
		
		// find id in students table using name of student
		
		// sql query
		$query_str = "UPDATE subjects SET " . $subject . "='" . $comment . "' WHERE id='" . $id . "';";
		
		// echo $query_str . '<br />';
		// execute the statement
		if ($this->dbhandler->query ( $query_str )) {
			header ( "Location: view.html?name=".$studentname );
			
			return true;
		} else
			return false;
	}
// 	public function getstudent() {
// 		$query_str = "SELECT * FROM students;";
// 		// echo $query_str;
// 		$json = array ();
// 		$result = $this->dbhandler->query ( $query_str );
		
// 		// $column = mysqli_fetch_array ( $result );
		
// 		while ( $column = mysqli_fetch_array ( $result ) ) {
			
// 			$fabric = array (
// 					'name' => $column ['name'] 
// 			);
// 			array_push ( $json, $fabric );
// 		}
// 		$jsonstring = json_encode ( $json );
// 		return $jsonstring;
// 	}
	public function getstudentbyyear($class) {
		$query_str = "SELECT * FROM students WHERE class ='" . $class . "' ;";
		// echo $query_str;
		$json = array ();
		$result = $this->dbhandler->query ( $query_str );
		
		// $column = mysqli_fetch_array ( $result );
		
		while ( $column = mysqli_fetch_array ( $result ) ) {
			
			$fabric = array (
					'id' => $column ['id'],
					'name' => $column ['name'],
					'age' => $column ['age'],
					'class_' => $column ['class'],
					'literacy' => $column ['literacy'],
					'socialemotionaldevelopment' => $column ['socialemotionaldevelopment'],
					'studyskills' => $column ['studyskills'],
					'math' => $column ['math'],
					'science' => $column ['science'],
					'literacy' => $column ['literacy'],
					'ict' => $column ['ict'],
					'art' => $column ['art'],
					'socialstudies' => $column ['socialstudies'],
					'music' => $column ['music'],
					'pe' => $column ['pe'],
					'french' => $column ['french'],
					'id_' => $_SESSION['email']
			);
			array_push ( $json, $fabric );
		}
		$jsonstring = json_encode ( $json );
		return $jsonstring;
	}
	public function getcomments($name) {
		$query_str = "SELECT * FROM students WHERE name ='" . $name . "' ;";
		// echo $query_str;
		$json = array ();
		$result = $this->dbhandler->query ( $query_str );
		
		// $column = mysqli_fetch_array ( $result );
		
		while ( $column = mysqli_fetch_array ( $result ) ) {
			
			$fabric = array (
					'id' => $column ['id'],
					'name' => $column ['name'],
					'age' => $column ['age'],
					'class_' => $column ['class'],
					'literacy' => $column ['literacy'],
					'socialemotionaldevelopment' => $column ['socialemotionaldevelopment'],
					'studyskills' => $column ['studyskills'],
					'math' => $column ['math'],
					'science' => $column ['science'],
					'literacy' => $column ['literacy'],
					'ict' => $column ['ict'],
					'art' => $column ['art'],
					'socialstudies' => $column ['socialstudies'],
					'music' => $column ['music'],
					'pe' => $column ['pe'],
					'french' => $column ['french'],
					'physics' => $column ['physics'],
					'chemistry' => $column ['chemistry'],
					'biology' => $column ['biology'],
					'homeeconomics' => $column ['homeeconomics'],
					'civiceducation' => $column ['civiceducation'],
					'english' => $column ['english'],
					'englishliterature' => $column ['englishliterature'],
					'basictechnology' => $column ['basictechnology'],
					'geography' => $column ['geography'],
					'history' => $column ['history'],
					'businessstudies' => $column ['businessstudies'],
					'library' => $column ['library'],
					'principal' => $column ['principal']
			);
			array_push ( $json, $fabric );
		}
		$jsonstring = json_encode ( $json );
		return $jsonstring;
	}
	public function getcomments2($id) {
		$query_str = "SELECT * FROM subjects WHERE id ='" . $id . "' ;";
		// echo $query_str;
		$json = array ();
		$result = $this->dbhandler->query ( $query_str );
		
		// $column = mysqli_fetch_array ( $result );
		
		while ( $column = mysqli_fetch_array ( $result ) ) {
			
			$fabric = array (
					'id' => $column ['id'],
					'math' => $column ['math'],
					'science' => $column ['science'],
					'literacy' => $column ['literacy'],
					'ict' => $column ['ict'],
					'socialemotionaldevelopment' => $column ['socialemotionaldevelopment'],
					'studyskills' => $column ['studyskills'],
					'art' => $column ['art'],					
					'socialstudies' => $column ['socialstudies'],
					'music' => $column ['music'],
					'pe' => $column ['pe'],
					'french' => $column ['french'],
					'physics'=> $column['physics'],
					'chemistry' => $column ['chemistry'],
					'biology' => $column ['biology'],
					'homeeconomics' => $column ['homeeconomics'],
					'civiceducation' => $column ['civiceducation'],
					'english' => $column ['english'],
					'englishliterature' => $column ['englishliterature'],
					'basictechnology' => $column ['basictechnology'],
					'geography' => $column ['geography'],
					'history' => $column ['history'],
					'businessstudies' => $column ['businessstudies'],
					'library' => $column ['library'] 
			);
			array_push ( $json, $fabric );
		}
		$jsonstring = json_encode ( $json );
		echo $jsonstring;
	}
// 	public function updatePasscode($oldpasscode, $newpasscode) {
// 		$oldpasscode = $this->dbhandler->real_escape_string ( $oldpasscode );
// 		$newpasscode = $this->dbhandler->real_escape_string ( $newpasscode );
		
// 		$oldpasscode = hash ( 'sha256', $oldpasscode, false );
// 		$oldpasscode = substr ( $oldpasscode, 0, 50 );
		
// 		$newpasscode = hash ( 'sha256', $newpasscode, false );
// 		$newpasscode = substr ( $newpasscode, 0, 50 );
		
// 		if ($user == 'admin')
// 			$query_str = "SELECT password FROM teacher WHERE id = " . $_SESSION ['email'] . ";";
		
// 		if ($result = $this->dbhandler->query ( $query_str )) {
			
// 			$column = mysqli_fetch_array ( $result );
			
// 			if ($column [0] == $oldpasscode) {
// 				if ($user == 'customer') {
// 					$query_str = "UPDATE Customer
// 					  		  SET passcode='" . $newpasscode . "'
// 					  		  WHERE id = " . $_SESSION ['email'] . ";";
// 				} elseif ($user == 'admin') {
// 					$query_str = "UPDATE admin
// 					  		  SET passphrase='" . $newpasscode . "'
// 					  		  WHERE id = " . $_SESSION ['email'] . ";";
// 				}
// 				if ($this->dbhandler->query ( $query_str )) {
					
// 					return true;
// 				} else {
// 					return false;
// 				}
// 				return true;
// 			}
// 		} else
// 			return false;
// 	}
	public function checkEmailPresent($email) {
		// check if email is a registered email in the database
		$query_str = "SELECT email FROM teacher WHERE email = '" . $email . "';";
		// echo $query_str;
		$result = $this->dbhandler->query ( $query_str );
		
		$column = mysqli_fetch_array ( $result );
		
		if ($column [0] === $email) {
			return true;
		} else
			return false;
	}
// 	public function updateToken($token, $email) {
// 		$token = $this->dbhandler->real_escape_string ( $token );
// 		$query_str = "UPDATE teacher
// 					  		  SET token='" . $token . "'
// 					  		  WHERE email = '" . $email . "';";
// 		// echo $query_str . '<br />';
// 		// execute the statement
// 		if ($this->dbhandler->query ( $query_str )) {
			
// 			return true;
// 		} else
// 			return false;
// 	}
	public function resetPasscode($email, $password) {
		// take in the email and password from the user and reset his/her password
		$password = hash ( 'sha256', $password, false );
		$password = substr ( $password, 0, 50 );
		
		$query_str = "UPDATE teacher
					  		  SET password='" . $password . "'
					  		  WHERE email = '" . $email . "';";
		// echo $query_str . '<br />';
		// execute the statement
		if ($this->dbhandler->query ( $query_str )) {
			
			return true;
		} else
			return false;
	}
}

?>