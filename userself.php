<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>个人中心</title>

  <!-- 引入bootstrap样式 -->
  <link rel="stylesheet" href="./lib/bootstrap/css/bootstrap.min.css">
  <!-- 引入自定义样式 -->
  <link rel="stylesheet" href="./dist/css/minCss/template.min.css">
  <!-- 引入userself样式 -->
  <link rel="stylesheet" href="./dist/css/minCss/userself.min.css">
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
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">我要投资</a>
        </li>
        <li>
          <a href="#">我要借款</a>
        </li>
        <li class="active">
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

  <div class="container" >
    <div class="row">
      <div class=" col-sm-3">

        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  投资项目
                </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
             
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                  aria-controls="collapseTwo">
                  借款项目
                </a>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div class="panel-body">
                <ul>
                  <li>
                    <a href="#">借款项目</a>
                  </li>
                  <li>
                    <a href="#">还款明细</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingThree">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
                  我的项目
                </a>
              </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div class="panel-body">
                <ul>
                  <li>
                    <a href="#">我的账户</a>
                  </li>
                  <li>
                    <a href="#">实名认证</a</li>
                      <li>
                        <a href="#">银行卡管理</a</li>
                          <li>
                            <a href="#">登录记录</a</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingFour">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false"
                  aria-controls="collapseFour">
                  资产详情
                </a>
              </h4>
            </div>
            <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
              <div class="panel-body">
                <ul>
                  <li>
                    <a href="#">账户流水</a</li>
                      <li>
                        <a href="#">充值明细</a</li>
                          <li>
                            <a href="#">提现记录</a</li>
                              <li>
                                <a href="#">收款明细</a</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingFive">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false"
                  aria-controls="collapseFive">
                  个人资料
                </a>
              </h4>
            </div>
            <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
              <div class="panel-body">
                ...
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="col-sm-9">
        <div class="panel panel-default">
          <!-- Default panel contents -->
          <div class="panel-heading">个人资料</div>
          <div class="panel-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-4 control-label">用户名</label>
                <div class="col-sm-8">
                  <p class="form-control-static">xiaoq</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">真实姓名 </label>
                <div class="col-sm-8">
                  <p class="form-control-static">小强</p>
                </div>

              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">证件号码</label>
                <div class="col-sm-8">
                  <p class="form-control-static">512************4646</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">手机号码</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" style="width:250px">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">联系电话</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" style="width:250px">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">个人学历</label>
                <div class="col-sm-8">
                <select class="form-control" style="width:180px">
                  <option value="1">初中</option>
                  <option value="2">中专/高中</option>
                  <option value="3">专科</option>
                  <option value="4">本科</option>
                  <option value="5">硕士研究生</option>
                  <option value="6">博士研究生</option>
                </select>
                </div>
                
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">个人学历</label>
                <div class="col-sm-8">
                <select class="form-control" style="width:180px">
                <option value="1">1000元以下</option>
                <option value="2">1000元-1999元</option>
                <option value="3">2000元-2999元</option>
                <option value="4">3000-4999</option>
                <option value="5">5000-8999</option>
                <option value="6">10000以上</option>
                </select>
                </div>
                
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">联系地址</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" style="width:456px">
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary col-sm-offset-5">数据保存</button>
            </div>
            </form>
          </div>

        </div>
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