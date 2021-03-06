<!DOCTYPE html> 
<html> 
  <head>  
  <meta charset="utf-8" /> 
  <title>PHP 프로그래밍</title> 
  <link rel="stylesheet" type="text/css" href="../main/css/common.css" /> 
  <link rel="stylesheet" type="text/css" href="../main/css/member.css" /> 
  <script> 
    function check_input() 
    {
      if (!document.member_form.id.value.trim()) { 
        alert("아이디를 입력하세요!");  
        document.member_form.id.focus(); 
        return; 
      }
      if (!document.member_form.pass.value.trim()) { 
        alert("비밀번호를 입력하세요!");  
        document.member_form.pass.focus(); 
        return; 
      }
      if (!document.member_form.pass_confirm.value.trim()) { 
        alert("비밀번호확인을 입력하세요!");  
        document.member_form.pass_confirm.focus(); 
        return; 
      }

      if (!document.member_form.name.value.trim()) { 
        alert("이름을 입력하세요!");  
        document.member_form.name.focus(); 
        return; 
      }
      if (!document.member_form.email1.value.trim()) { 
        alert("이메일 주소를 입력하세요!");  
        document.member_form.email1.focus(); 
        return; 
      }

      if (!document.member_form.email2.value.trim()) { 
        alert("이메일 주소를 입력하세요!");  
        document.member_form.email2.focus(); 
        return; 
      }

      if (document.member_form.pass.value.trim() != document.member_form.pass_confirm.value.trim()) 
      { 
        alert("비밀번호가 일치하지 않습니다.\n다시 입력해 주세요!"); 
        document.member_form.pass.focus(); 
        // select()를 사용하여 블럭지정
        document.member_form.pass.select(); 
        return; 
      }

      if(document.getElementById("pInput").value == "no"){
        alert("중복확인 버튼을 눌러 아이디 중복을 확인해주세요!"); 
        document.member_form.id.focus(); 
        // select()를 사용하여 블럭지정
        document.member_form.id.select(); 
        return;
      }else{
        document.member_form.submit(); 
      }
    }

    function reset_form() {
      document.member_form.id.value = "";  
      document.member_form.pass.value = ""; 
      document.member_form.pass_confirm.value = ""; 
      document.member_form.name.value = ""; 
      document.member_form.email1.value = ""; 
      document.member_form.email2.value = ""; 
      document.member_form.id.focus(); 
      return; 
    }  

    function check_id() {
      window.open("member_check_id.php?id=" + document.member_form.id.value, 
        "IDcheck", 
        "left=700,top=300,width=350,height=200,scrollbars=no,resizable=yes"); 
    }
  </script> 
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
        <div id="join_box"> 
          <!-- 상단의 document.member_form.submit();에 의해 member_insert.php로 페이지 이동 -->
          <form  name="member_form" method="post" action="member_insert.php"> 
            <input type="hidden" id="pInput" value="no" name="check" />             
            <h2>회원 가입</h2> 
            <div class="form id"> 
              <div class="col1">아이디</div> 
              <div class="col2"> 
                <input type="text" name="id"> 
              </div>  
              <div class="col3"> 
                <a href="#"><img src="../main/img/check_id.gif" onclick="check_id()"></a> 
              </div>  
            </div> 
            <div class="clear"></div>

            <div class="form"> 
              <div class="col1">비밀번호</div> 
              <div class="col2"> 
                <input type="password" name="pass"> 
              </div>  
            </div> 
            <div class="clear"></div> 

            <div class="form"> 
              <div class="col1">비밀번호 확인</div> 
              <div class="col2"> 
                <input type="password" name="pass_confirm"> 
              </div>  
            </div> 
            <div class="clear"></div> 

            <div class="form"> 
              <div class="col1">이름</div> 
              <div class="col2"> 
                <input type="text" name="name"> 
              </div>  
            </div> 
            <div class="clear"></div> 

            <div class="form email"> 
              <div class="col1">이메일</div> 
              <div class="col2"> 
                <input type="text" name="email1">@<input type="text" name="email2"> 
              </div>  
            </div> 
            <div class="clear"></div> 

            <div class="bottom_line"> </div> 
            <div class="buttons"> 
              <img style="cursor:pointer" src="../main/img/button_save.gif"
                onclick="check_input()" />&nbsp; 
              <img id="reset_button" style="cursor:pointer" src="../main/img/button_reset.gif" 
                onclick="reset_form()" /> 
            </div> 
          </form> 
        </div> <!-- join_box --> 
      </div> <!-- main_content -->    
    </section>  
    <footer> 
      <?php include "../main/footer.php";?> 
    </footer> 
  </body> 
</html>         