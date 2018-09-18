<!-- 顶部 -->
 <!-- 引入顶部导航 -->
 <?php
  require_once('topNav.php')
 
 ?>
  <!-- 主导航 -->
  <nav class="navbar navbar-default">
    <div class="container">
      <!-- 左边 -->
      <div class="navbar-header">

        <a class="navbar-brand" href="#">
          <img src="./images/logo.png" alt="">
        </a>
      </div>

      <!--左边-->

      <ul class="nav navbar-nav" id="mainMenu">
        <li class="active">
          <a href="./index.php?menuid=1">首页</a>
        </li>
        <li>
          <a href="./invest.php?menuid=2">我要投资</a>
        </li>
        <li>
          <a href="./borrow.php?menuid=3">我要借款</a>
        </li>
        <li>
          <a href="./personal.php?menuid=4">个人中心</a>
        </li>
        <li>
          <a href="#">新手指引</a>
        </li>
        <li>
          <a href="#">关于我们</a>
        </li>
      </ul>

    </div>
    <!-- /.container-fluid -->
  </nav>


  <script>
  //网址
  var reqUrl = location.href;
  //菜单的id
  var menuid = reqUrl.split("=")[1];
  //把菜单id对应所有的li添加active，兄弟元素移出active
  $("#mainMenu li").eq(menuid-1).addClass("active").siblings("li").removeClass("active");
  
  
  
  </script>