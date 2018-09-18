<?php
$username = $_POST['username'];
$password =md5($_POST['password']) ;
//链接数据库
require_once('conn.php');

//sql语句
$sql="select * from userinfo where username='".$username."' and pwd='".$password."'";

//执行sql
$result= mysqli_query($link,$sql);

//获取调查的结果
$rs=mysqli_fetch_assoc($result);
// var_dump($rs);

if($rs!=NULL){
    $rsArray=["isSuccess"=>true,"msg"=>"用户登录成功!"];
    //json_encode() 把关联数组转换为json格式
    echo json_encode($rsArray);

    //登录成后就创建session对象
    session_start();
    $_SESSION['username']=$rs['username'];
    $_SESSION['userid']=$rs['userid'];
}
else{
    $rsArray=["isSuccess"=>false,"msg"=>"用户登录失败!"];
    echo json_encode($rsArray);

};
//释放内存
require_once('freeClose.php');
?>
