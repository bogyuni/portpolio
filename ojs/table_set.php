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


	$sql = 'CREATE TABLE contant(date CHAR(30), name CHAR(30), email CHAR(40), message TEXT(500))';
	if ( mysqli_query($conn, $sql) ){
		echo '성공적으로 테이블을 만들었습니다.<br>';
	}else{
		echo '테이블 생성 오류 : '.mysqli_error($conn);
	}


	mysqli_close($conn);
?>