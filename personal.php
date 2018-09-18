<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>个人中心</title>

  <!-- 引入bootstrap样式 -->
  <link rel="stylesheet" href="./lib/bootstrap/css/bootstrap.min.css">
  <!-- 引入自定义样式 -->
  <link rel="stylesheet" href="./dist/css/minCss/template.min.css">
  <!-- 引入userself样式 -->
  <link rel="stylesheet" href="./dist/css/minCss/personal.min.css">
  <!-- 引入jquery.js -->
  <script src="./lib/jquery/jquery.min.js"></script>
  <!-- 验证用户登录是否合法 -->
  <script src="./dist/js/userStateCheck.min.js"></script>
</head>

<body>

  <!-- 引入头部 -->
  <?php
  require_once('header.php')
  ?>

  <div class="container" id='personal'>
    <div class="row">
      <div class=" col-sm-3  col-xs-6" id="leftTreeMenu">

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
      <div class="col-sm-9 col-xs-12" id="mainContent">
        <button id="btnOnOff">隐藏</button>
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row el-account-info clearfix">
              <div class="col-sm-2 col-xs-12 el-head-img pull-left ">
                <img class="img-responsive" src="./images/head_icon.jpg" alt="">
              </div>
              <div class="col-sm-10 col-xs-12 el-head pull-left">
                <p>昵 称：源代码教育</p>
                <p>用户名：小强</p>
                <p>最后登录时间：2016-10-25 15:30:10</p>
              </div>

            </div>
            <!-- 2 -->
            <div class='row' id="rowMoney">
              <div class='col-sm-4 col-xs-6 '>总金额:
                <span class='text-primary'>10000元</span>
              </div>
              <div class='col-sm-4 col-xs-6'>可用金额:
                <span class='text-primary'>8000元</span>
              </div>
              <div class='col-sm-4 col-xs-6'>冻结金额:
                <span class='text-primary'>2000元</span>
              </div>
            </div>
            <!-- 3 -->
            <div id="myButton">
              <button type="button" class="btn btn-primary btn-lg">账户充值</button>
              <button type="button" class="btn btn-danger btn-lg">账户提现</button>
            </div>
            <!-- 4 -->
            <div id="myIcon">
              <div class="row ">
                <div class="col-sm-4 "id="box">
                  <div class="pull-left">
                    <img src="./images/shiming.png" alt="">
                  </div>
                  <div class="pull-left">
                    <h5>实名认证</h5>
                    <p>未认证&ensp;<a href="#">马上认证</a></p>
                  </div>
                  <div class="clearfix"></div>
                  <p>实名认证之后才能在平台投资</p>
                </div>
                <div class="col-sm-4"id="box">
                  <div class="pull-left">
                    <img src="./images/shouji.jpg" alt="">
                  </div>
                  <div class="pull-left">
                    <h5>手机认证</h5>
                    <p>已认证&ensp;<a href="#">查看</a></p>
                  </div>
                  <div class="clearfix"></div>
                  <p>可以收到系统操作信息,并增加使用安全性</p>
                </div>
                <div class="col-sm-4 "id="box">
                  <div class="pull-left">
                    <img src="./images/youxiang.jpg" alt="">
                  </div>
                  <div class="pull-left">
                    <h5>邮箱认证  </h5>
                    <p>已认证&ensp;<a href="#">查看</a></p>
                  </div>
                  <div class="clearfix"></div>
                  <p>您可以设置邮箱来接收重要信息</p>
                </div>
              </div>
              <div class="row ">
                <div class="col-sm-4 "id="box">
                  <div class="pull-left">
                    <img src="./images/baozhan.jpg" alt="">
                  </div>
                  <div class="pull-left">
                    <h5>VIP会员</h5>
                    <p>普通用户&ensp;<a href="#">查看</a></p>
                  </div>
                  <div class="clearfix"></div>
                  <p>VIP会员，让你更快捷的投资</p>
                </div>
              </div>
            </div>
          </div>
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

<!-- 引入bootstrap.js -->
<script src="./lib/bootstrap/js/bootstrap.min.js"></script>
<!-- 引入自定义效果 -->
<script src="./dist/js/p2p.min.js"></script>
<script>
        $("#btnOnOff").on("click",function(){
            //单击按钮时就切换类样式
            //toggleClass("类名称") 对设置或移除被选元素的一个或多个类进行切换。
            $("#personal").toggleClass("active");

            //如果有active说明已隐藏，文字改为显示
            //hasClass() 方法检查被选元素是否包含指定的 class。
            if($("#personal").hasClass("active")){
               $(this).text("显示");
            }
            else{
               $(this).text("隐藏");
            }
        });
        
        //开始触碰的位置
        var x1,y1;
        $(window).on("touchstart", function (e) {
          x1 = e.originalEvent.changedTouches[0].clientX;
          y1 = e.originalEvent.changedTouches[0].clientY;
        });

        //离开屏幕；滑动到目的地后离开屏幕时的位置
        $(window).on("touchend", function (e) {
          x2 = e.originalEvent.changedTouches[0].clientX;
          y2 = e.originalEvent.changedTouches[0].clientY;

          //计算滑动距离
          var dx = x2-x1;
          
          if(Math.abs(dx)>100){
            console.log("ok");

            $("#btnOnOff").trigger("click")
          }
        });
    </script>

</html>