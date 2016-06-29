<?php
require_once ("php/error_handler.php");
require_once ("php/config.php");
require_once ("php/dbconnection.php");
require_once ("php/teacher.php");
require_once 'php/students.php';

$studentname = $_SESSION ['studentname'];
$teacher = new Teacher ();
$result = $teacher->getsubjects ( $_SESSION ['email'] );
$dbconn = new dbconnection ( 'admin' );

$answer = json_decode ( $result );

$subject1 = $answer [0]->subject1;
$subject2 = $answer [0]->subject2;
$subject3 = $answer [0]->subject3;
$subject4 = $answer [0]->subject4;
$subject5 = $answer [0]->subject5;
$subject6 = $answer [0]->subject6;
$subject7 = $answer [0]->subject7;
$subject8 = $answer [0]->subject8;
$subject9 = $answer [0]->subject9;
$subject10 = $answer [0]->subject10;
$subject11 = $answer [0]->subject11;
$subject12 = $answer [0]->subject12;
$subject13 = $answer [0]->subject13;
$subject14 = $answer [0]->subject14;
$subject15 = $answer [0]->subject15;
$subject16 = $answer [0]->subject16;
$subject17 = $answer [0]->subject17;
$subject18 = $answer [0]->subject18;
$subject19 = $answer [0]->subject19;
$subject20 = $answer [0]->subject20;
$subject21 = $answer [0]->subject21;
$subject22 = $answer [0]->subject22;
$subject23 = $answer [0]->subject23;

$subjects = array (
		$subject1,
		$subject2,
		$subject3,
		$subject4,
		$subject5 
);

if ($_SESSION ['email'] == '7') {
	$comment = htmlspecialchars ( $_POST ['principal'] );
	$comment = str_replace ( "'", "''", $comment );
	if ($comment != '') {
		$dbconn->writecomments ( $studentname, 'principal', $comment );
		 header ( "Location: edit.html?name=" . $studentname . "&id_=" . $_SESSION ['email'] );
		// $id = $dbconn->get_student_id($studentname);
		// $dbconn->writecomments2($id,$subject1,$comment2);
	}
} // need to prevent all subjects a teacher teaches from deleting when only one change is made
else {
	
	if ($subject1 != '') {
		$comment = htmlspecialchars ( $_POST [$subject1] );
		$comment = str_replace ( "'", "''", $comment );
		$comment2 = $_POST [$subject1 . '_'];
		// echo $comment2;
		if ($comment != '') {
			$dbconn->writecomments ( $studentname, $subject1, $comment );
			$id = $dbconn->get_student_id ( $studentname );
			$dbconn->writecomments2 ( $id, $subject1, $comment2 );
		} else
			header ( "Location: view.html?name=" . $studentname . "&id_=" . $_SESSION ['email'] );
	}
	if ($subject2 != '') {
		$comment = htmlspecialchars ( $_POST [$subject2] );
		$comment = str_replace ( "'", "''", $comment );
		$comment2 = $_POST [$subject2 . '_'];
		// echo $comment2;
		if ($comment != '') {
			$dbconn->writecomments ( $studentname, $subject2, $comment );
			$id = $dbconn->get_student_id ( $studentname );
			$dbconn->writecomments2 ( $id, $subject2, $comment2 );
		} else
			header ( "Location: view.html?name=" . $studentname . "&id_=" . $_SESSION ['email'] );
	}
	if ($subject3 != '') {
		$comment = htmlspecialchars ( $_POST [$subject3] );
		$comment = str_replace ( "'", "''", $comment );
		$comment2 = $_POST [$subject3 . '_'];
		// echo $comment2;
		if ($comment != '') {
			$dbconn->writecomments ( $studentname, $subject3, $comment );
			$id = $dbconn->get_student_id ( $studentname );
			$dbconn->writecomments2 ( $id, $subject3, $comment2 );
		} else
			header ( "Location: view.html?name=" . $studentname . "&id_=" . $_SESSION ['email'] );
	}
	if ($subject4 != '') {
		$comment = htmlspecialchars ( $_POST [$subject4] );
		$comment = str_replace ( "'", "''", $comment );
		$comment2 = $_POST [$subject4 . '_'];
		// echo $comment2;
		if ($comment != '') {
			$dbconn->writecomments ( $studentname, $subject4, $comment );
			$id = $dbconn->get_student_id ( $studentname );
			$dbconn->writecomments2 ( $id, $subject4, $comment2 );
		} else
			header ( "Location: view.html?name=" . $studentname . "&id_=" . $_SESSION ['email'] );
	}
	if ($subject5 != '') {
		$comment = htmlspecialchars ( $_POST [$subject5] );
		$comment = str_replace ( "'", "''", $comment );
		$comment2 = $_POST [$subject5 . '_'];
		// echo $comment2;
		if ($comment != '') {
			$dbconn->writecomments ( $studentname, $subject5, $comment );
			$id = $dbconn->get_student_id ( $studentname );
			$dbconn->writecomments2 ( $id, $subject5, $comment2 );
		} else
			header ( "Location: view.html?name=" . $studentname . "&id_=" . $_SESSION ['email'] );
	}
}
// if ($subject6 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject6] );
// 	$comment = str_replace ( "'", "''", $comment );
// 	$comment2 = $_POST [$subject6 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject6, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject6, $comment2 );
// 	}
// }
// if ($subject7 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject7] );
// 	$comment = str_replace ( "'", "''", $comment );
// 	$comment2 = $_POST [$subject7 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject7, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject7, $comment2 );
// 	}
// }

// if ($subject8 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject8] );
// 	$comment2 = $_POST [$subject8 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject8, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject8, $comment2 );
// 	}
// }
// if ($subject9 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject9] );
// 	$comment2 = $_POST [$subject9 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject9, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject9, $comment2 );
// 	}
// }

// if ($subject10 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject10] );
// 	$comment2 = $_POST [$subject10 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject10, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject10, $comment2 );
// 	}
// }
// if ($subject11 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject11] );
// 	$comment2 = $_POST [$subject11 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject11, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject11, $comment2 );
// 	}
// }
// if ($subject12 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject12] );
// 	$comment2 = $_POST [$subject12 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject12, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject12, $comment2 );
// 	}
// }
// if ($subject13 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject13] );
// 	$comment2 = $_POST [$subject13 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject13, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject13, $comment2 );
// 	}
// }
// if ($subject14 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject14] );
// 	$comment2 = $_POST [$subject14 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject14, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject14, $comment2 );
// 	}
// }
// if ($subject15 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject15] );
// 	$comment2 = $_POST [$subject15 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject15, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject15, $comment2 );
// 	}
// }
// if ($subject16 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject16] );
// 	$comment2 = $_POST [$subject16 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject16, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject16, $comment2 );
// 	}
// }
// if ($subject17 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject17] );
// 	$comment2 = $_POST [$subject17 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject17, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject17, $comment2 );
// 	}
// }
// if ($subject18 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject18] );
// 	$comment2 = $_POST [$subject18 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject18, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject18, $comment2 );
// 	}
// }
// if ($subject19 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject19] );
// 	$comment2 = $_POST [$subject19 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject19, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject19, $comment2 );
// 	}
// }
// if ($subject20 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject19] );
// 	$comment2 = $_POST [$subject19 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject19, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject19, $comment2 );
// 	}
// }
// if ($subject21 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject21] );
// 	$comment2 = $_POST [$subject21 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject21, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject21, $comment2 );
// 	}
// }
// if ($subject22 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject22] );
// 	$comment2 = $_POST [$subject22 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject22, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject22, $comment2 );
// 	}
// }
// if ($subject23 != '') {
// 	$comment = htmlspecialchars ( $_POST [$subject23] );
// 	$comment2 = $_POST [$subject23 . '_'];
// 	// echo $comment2;
// 	if ($comment != '') {
// 		$dbconn->writecomments ( $studentname, $subject23, $comment );
// 		$id = $dbconn->get_student_id ( $studentname );
// 		$dbconn->writecomments2 ( $id, $subject23, $comment2 );
// 	}


?>