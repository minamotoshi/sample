<?php
@header("Expires: 0");
@header("Cache-Control: private, post-check=0, pre-check=0, max-age=0", FALSE);
@header("Pragma: no-cache");

date_default_timezone_set('PRC');

$path = "../files";

$img = $_POST['img'];
//$img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD';
//$img = str_replace(' ', '+', $img);
$arr = array();
$pattern = '/data:image\/(\w+);base64,(.*)/i';
preg_match_all($pattern, $img, $arr, PREG_PATTERN_ORDER);

$base64str = $arr[2][0];
$ext = $arr[1][0];
if($ext == 'jpeg') $ext = 'jpg';
$data = base64_decode($base64str);
$datename = date(YmdHis);
$filename = "{$datename}.{$ext}";
$filepath = "{$path}/{$filename}";
$success = file_put_contents($filepath, $data);
$fileurl = "files/{$filename}";

$arr = array(
	"code" => '0',
	"message" => '操作成功',
	"data" => array(
		"FFileId" => '1024',
		"FUrl" => $fileurl
	)
);
              
echo json_encode($arr);
?>
