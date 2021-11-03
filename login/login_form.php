<!DOCTYPE html>
<html>
<head> 
	<meta charset="utf-8" />
	<title>PHP 프로그래밍</title>
	<link rel="stylesheet" type="text/css" href="../main/css/common.css" />
	<link rel="stylesheet" type="text/css" href="../main/css/login.css" />
	<script src="../main/js/login.js"></script>
</head>
<body> 
	<header>
		<?php include "../main/header.php";?>
	</header>
	<section>
		<div id="main_img_bar">
            <img src="../main/img/main_img.png">
        </div>
        <div id="main_content">
      		<div id="login_box">
	    		<div id="login_title">
		    		<span>로그인</span>
	    		</div>
	    		<div id="login_form">
          		<form  name="login_form" method="post" action="login.php">		       	
                  	<ul>
                    <li><input type="text" name="id" placeholder="아이디" value="admin"></li>
                    <li><input type="password" id="pass" name="pass" placeholder="비밀번호" value="1234"></li> <!-- pass -->
                  	</ul>
                  	<div id="login_btn">
                      	<a href="#"><img src="../main/img/login.png" onclick="check_input()"></a>
                  	</div>		    	
           		</form>
        		</div> <!-- login_form -->
    		</div> <!-- login_box -->
        </div> <!-- main_content -->
	</section> 
	<footer>
		<?php include "../main/footer.php";?>
	</footer>
</body>
</html>