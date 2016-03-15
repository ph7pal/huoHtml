<?php
/**
* 遍历目录下所有文件
* @param type $dir
* @return type
*/
function readMyDir($dir, $name = true) {
   $name_arr = array();
   if (is_dir($dir)) {
       if ($dh = opendir($dir)) {
           while (($file = readdir($dh)) !== false) {
               if ($file != "." && $file != "..") {
                   if ($name) {
                       $_tmp = explode('.', $file);
                       $name_arr[] = $_tmp[0];
                   } else {
                       $name_arr[] = $file;
                   }
               }
           }
           closedir($dh);
       }
   }
   return $name_arr;
}
/**
* 打印数组
* @param type $data
*/
function test($data) {
   echo '<pre>';
   print_r($data);
   echo '</pre>';
}
echo '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"><meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1"><title>页面列表</title></head><body>';
$files=  readMyDir(dirname(__FILE__),false);
$fileArr=array();
foreach ($files as $file){
    if($file=='template.html' || $file=='package.json'){
        continue;
    }
    $_fid=(int)$file;
    $fileArr[$_fid]=$file;    
}
natsort($fileArr);
foreach($fileArr as $_file){
    $_file=  iconv('GBK', 'UTF-8', $_file);
    if(strpos($_file, '.html')!==false){
        echo '<p><a href="'.$_file.'">'.$_file.'</a></p>';
    }
}
echo '</body></html>';