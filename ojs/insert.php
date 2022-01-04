<?php
	$conn = mysqli_connect('localhost','blessedojs','wnstjd1204', 'blessedojs');
	if(!$conn){
		echo '[DB 연결실패] : '.mysqli_error().'<br>';
		die('MySQL 서버에 연결할 수 없습니다.');
	} else {
		echo '[DB 연결성공]<br>';
	}

	$db = mysqli_select_db($conn, 'blessedojs');
	if ($db){
		echo '[DB 선택성공]<br>';
	}else{
		echo '[DB 선택실패]<br>';
	}


	$time = date( 'Y-m-d H:i:s', time() );
	$name = $_POST['inst_name'];
	$email = $_POST['inst_email'];
	$message = $_POST['inst_message'];

	$que = "INSERT INTO contant VALUES (
		'$time',
		'$name',
		'$email',
		'$message'
	)";

	if ( mysqli_query($conn, $que) ){
		//echo '입력 성공';
		header('Location: http://blessedojs.cafe24.com//');
		exit;
	}else{
		echo '입력 실패';
	}

?>