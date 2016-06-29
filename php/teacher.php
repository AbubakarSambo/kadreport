<?php
/**
 * parent class User
 */
 session_start ();
class Teacher {
	private $firstname;
	private $lastname;
	private $email;
	private $phone;
	public function signUp($firstname, $lastname, $email, $phone, $password,$subject1,$subject2,$subject3,$subject4,$subject5) {
		$dbconn = new dbconnection ( 'admin' );
		$result = $dbconn->Signup ( $firstname, $lastname, $email, $phone, $password,$subject1,$subject2,$subject3,$subject4,$subject5 );
		
		if ($result === true)
			echo "created successfully.";
		
		else
			echo " NOT created, try again.";
		
		//$dbconn->__destruct ();
	}
	public function signIn($email, $password) {
		
		// session_start();
		$dbconn = new dbconnection ( 'admin' );
		
		$result = $dbconn->login ( $email, $password );
		// echo $result;
		
		if ($result == true) {
			
			$id = $dbconn->get_user_id ( $email );
			$_SESSION ['email'] = $id;
			
			// echo "Signed in successfully.";
			
			return "Signed in Successfully";
		} else {
			return "not signed in";
		}
		//$dbconn->__destruct ();
	}
	public function getteacher($id) {
	
		// session_start();
		$dbconn = new dbconnection ( 'admin' );
	
		$result = $dbconn->getteacher($id);
		
	
		echo $result;
	}
	public function getsubjects($id) {
	
		// session_start();
		$dbconn = new dbconnection ( 'admin' );
	
		$result = $dbconn->getsubjects($id);
	
	
		return $result;
	}
	public function getStudentnames() {
		$dbconn = new dbconnection ( 'admin' );
		$result = $dbconn->getstudent();
		
		echo $result;
		
		//$dbconn->__destruct ();
	}
	public function getStudentnamesbyyear($class){
		$dbconn = new dbconnection ( 'admin' );
		$result = $dbconn->getstudentbyyear($class);
		
		echo $result;
		
		//$dbconn->__destruct ();
		
	}
	public function getcomments($name){
		$dbconn = new dbconnection ( 'admin' );
		$result = $dbconn->getcomments($name);
	
		echo $result;
	
		//$dbconn->__destruct ();
	
	}
	
	public function signOut() {
		unset ( $_SESSION ['email'] );
		//session_destroy ();
		return "signed out";
	}
	
	
	
	
	
	
	public function changePasscode($oldpasscode, $newpasscode, $user) {
		$dbconn = new dbconnection ( $user );
		
		if ($user == 'customer') {
			$result = $dbconn->updatePasscode ( $oldpasscode, $newpasscode, $user );
		} elseif ($user == 'admin') {
			$result = $dbconn->updatePasscode ( $oldpasscode, $newpasscode, $user );
		}
		
		if ($result === true)
			echo "Passcode Updated successfully.";
		
		else
			echo "Not Updated";
		
		//$dbconn->__destruct ();
	}
	private function crypto_rand_secure($min, $max) {
		$range = $max - $min;
		if ($range < 0)
			return $min; // not so random...
		$log = log ( $range, 2 );
		$bytes = ( int ) ($log / 8) + 1; // length in bytes
		$bits = ( int ) $log + 1; // length in bits
		$filter = ( int ) (1 << $bits) - 1; // set all lower bits to 1
		do {
			$rnd = hexdec ( bin2hex ( openssl_random_pseudo_bytes ( $bytes ) ) );
			$rnd = $rnd & $filter; // discard irrelevant bits
		} while ( $rnd >= $range );
		return $min + $rnd;
	}
	private function getToken($length = 32) {
		$token = "";
		$codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		$codeAlphabet .= "abcdefghijklmnopqrstuvwxyz";
		$codeAlphabet .= "0123456789";
		for($i = 0; $i < $length; $i ++) {
			$token .= $codeAlphabet [$this->crypto_rand_secure ( 0, strlen ( $codeAlphabet ) )];
		}
		return $token;
	}
	public function resetPasscode($email,$password) {
		//$token = $this->getToken ( 32 );
		$dbconn = new dbconnection ( 'admin' );
		
	
			$result = $dbconn->resetPasscode ($email,$password);
		
		
		if ($result === true)
			echo  "Passcode reset successfully.";
		
		else
			echo  "Not Reset";
		
		//$dbconn->__destruct ();
	}
}

?>