<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>首页</title>

  <!-- 引入bootstrap样式 -->
  <link rel="stylesheet" href="./lib/bootstrap/css/bootstrap.min.css">
  <!-- 引入自定义样式 -->
  <link rel="stylesheet" href="./dist/css/minCss/template.min.css">
</head>

<body>
  
<!-- 引入头部 -->
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

      <ul class="nav navbar-nav">
        <li class="active">
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">我要投资</a>
        </li>
        <li>
          <a href="#">我要借款</a>
        </li>
        <li>
          <a href="#">个人中心</a>
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

<div class="container">
    <h1>这里是内容部分</h1>
</div>

<!-- 页脚 -->
<!-- 引入页脚 -->
<?php
require_once('footer.php')

?>
</body>
<!-- 引入jquery.js -->
<script src="./lib/jquery/jquery.min.js"></script>
<!-- 引入bootstrap.js -->
<script src="./lib/bootstrap/js/bootstrap.min.js"></script>
<!-- 引入自定义效果 -->
<script src="./dist/js/p2p.min.js"></script>

</html>