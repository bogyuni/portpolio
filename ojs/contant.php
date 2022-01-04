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

	echo '<br>';

	$sql="SELECT * FROM contant";
	$result=mysqli_query($conn,$sql);

	echo "<table border='1'>
		<tr>
			<th>num</th>
			<th>time</th>
			<th>name</th>
			<th>email</th>
			<th>message</th>
		</tr>";
	$n = 1;
	while($row = mysqli_fetch_array($result)){
		echo "<tr>";
		echo "<td>$n</td>";
		echo "<td>" . $row[0] . "</td>";
		echo "<td>" . $row[1] . "</td>";
		echo "<td>" . $row[2] . "</td>";
		echo "<td>" . $row[3] . "</td>";
		echo "</tr>";
		$n++;
	}
	echo "</table>";
	echo '<br>';



	mysqli_close($conn);

?>