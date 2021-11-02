<?php
    include "../include/define.php";

    session_start(); 
    if (isset($_SESSION["userid"])) $userid = $_SESSION["userid"]; 
    else $userid = ""; 
    if (isset($_SESSION["username"])) $username = $_SESSION["username"]; 
    else $username = ""; 
    if (isset($_SESSION["userlevel"])) $userlevel = $_SESSION["userlevel"]; 
    else $userlevel = ""; 
    if (isset($_SESSION["userpoint"])) $userpoint = $_SESSION["userpoint"]; 
    else $userpoint = ""; 
?>		 
        <div id="top"> 
            <h1> 
                <a href="../main/index.php">H &dot; SCHOOL</a> 
            </h1> 
            <h2> 
                <a href="../main/index.php">&nbsp;|&nbsp;PHP Programming</a> 
            </h2> 
            <ul id="top_menu">   
<?php 
    if(!$userid) { 
?>
                <li><a href="../login/member_form.php">회원 가입(11Ch)</a> </li> 
                <li> | </li> 
                <li><a href="../login/login_form.php">로그인(12Ch)</a></li> 
<?php 
    } else { 
        $logged = $username."(".$userid.")님[Level:".$userlevel.", Point:".$userpoint."]"; 
?>  
                <li><?=$logged?> </li> 
                <li> | </li> 
                <li><a href="../login/logout.php">로그아웃(12Ch)</a> </li> 
                <li> | </li> 
                <li><a href="../login/member_modify_form.php">정보 수정(12Ch)</a></li>
<?php 
    } 
?>  
<?php 
    if($userlevel==1) {
?>
                <li> | </li> 
                <li><a href="../admin/admin.php">관리자 모드(15Ch)</a></li> 
<?php
    }
?> 
            </ul> 
        </div> 
        <div id="menu_bar"> 
            <ul>   
                <li><a href="../main/index.php">HOME</a></li> 
                <li><a href="../message/message_form.php">쪽지 만들기(13Ch)</a></li> 
                <li><a href="../board/board_form.php">게시판 만들기(14Ch)</a></li> 
                <li><a href="../main/index.php">사이트 완성하기(15Ch)</a></li> 
            </ul> 
        </div>                              