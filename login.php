<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>用户登录</title>

  <!-- 引入bootstrap样式 -->
  <link rel="stylesheet" href="./lib/bootstrap/css/bootstrap.min.css">
  <!-- 引入自定义样式 -->
  <link rel="stylesheet" href="./dist/css/minCss/login.min.css">
</head>

<body>

  <!-- 引入头部 -->
  <?php
  require_once('topNav.php')
?>
<!-- 主导航 -->
<!-- 主导航 -->
<nav class="navbar navbar-default LoginNavbar">
    <div class="container">
      <!-- 左边 -->
      <div class="navbar-header">

        <a class="navbar-brand" href="#">
          <img src="./images/logo.png" alt="">
        </a>
        <span class="LoginPlace">用户登录</span>
      </div>
  </nav>


  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">用户登录</div>
      <div class="panel-body">
        <form class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-offset-5 col-sm-7">
             <p class='fs18'>请输入用户名和密码</p>
            </div>
          </div>
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-3 control-label">用户名:</label>
            <div class="col-sm-9">
              <input type="email" name="username" class="form-control" placeholder="请输入用户名">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-3 control-label">密码:</label>
            <div class="col-sm-9">
              <input type="password" name="password" class="form-control" placeholder="请输入密码">
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-6 col-sm-6">
              <button type="submit" class="btn btn-success">立即登录</button>
              <span><a class='pdl10' href="#">新用户，马上注册</a></span>
            </div>
          </div>
        </form>
      </div>
    </div>
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