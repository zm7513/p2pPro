<?php
//userinfo
$username = $_POST['username'];
$password =md5($_POST['password']) ;
$mobile = $_POST['mobile'];
$email = $_POST['email'];

//链接数据库
require_once('conn.php');

//sql语句
$sql = "insert into userinfo(username,pwd,mobile,email) values('".$username."','".$password."','".$mobile."','".$email."')";

//执行sql
$result= mysqli_query($link,$sql);

if($result){
    $rsArray=["isSuccess"=>true,"msg"=>"用户注册成功!"];
    //json_encode() 把关联数组转换为json格式
    echo json_encode($rsArray);
}
else{
    $rsArray=["isSuccess"=>false,"msg"=>"用户注册失败!"];
    echo json_encode($rsArray);

};

//释放内存
require_once('freeClose.php')

?>
