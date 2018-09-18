<?php
//如果不存在就报错
session_start();
if(isset($_SESSION['username'])){
    $username = $_SESSION['username'];
    $result = ["isSuccess"=>true,"msg"=>"登录成功","username"=>$username];
    echo json_encode($result);
}else{
    $result = ["isSuccess"=>false,"msg"=>"登录失败"];
    echo json_encode($result);
}





?>
