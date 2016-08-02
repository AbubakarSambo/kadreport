<?php
/**
 * parent class User
 */

class Students {
	private $firstname;
	private $lastname;
	private $age;
	private $class;

	
	public function signUp($name, $age, $class) {
		
		$dbconn = new dbconnection('admin');
		$result = $dbconn->Signupstudent($name, $age, $class);

		if ($result === true)
			echo " created successfully.";
		
		else
			echo " NOT created, try again.";
		
		$dbconn->__destruct ();
	}
	
	
	

}

?>