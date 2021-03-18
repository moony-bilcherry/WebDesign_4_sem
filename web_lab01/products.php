<?php

$a[]="almond";
$a[]="apple";
$a[]="avocado";
$a[]="anchovy";
$a[]="asparagus";

$a[]="banana";
$a[]="beans";
$a[]="bounty";
$a[]="blueberries";
$a[]="biscuit";

$a[]="cereal";
$a[]="cyberpunk";
$a[]="corndog";
$a[]="carrot";
$a[]="chevrolet";

$a[]="dog";
$a[]="donut";
$a[]="dates";
$a[]="dairy";
$a[]="daisy";

$a[]="Fish";
$a[]="Lizard";
$a[]="Parrot";
$a[]="Milk";
$a[]="Yogurt";
$a[]="Nuggies";
$a[]="Pizza";
$a[]="Pineapple";
$a[]="Parmesan";
$a[]="Pepper";
$a[]="Sourcream";

//получение параметра s из URL
$s = preg_replace("/[\. \(\)\-]/", "", $_REQUEST['s']);
$s = iconv("UTF-8", "WINDOWS-1251", $s);

$response="";

if (strlen($s) > 0)
{
	for($i = 0; $i<count($a); $i++)
  	{
  		if (strtolower($s) == strtolower(substr($a[$i],0,strlen($s))))
    	{
    		if ($response == "")
      		{
      			$response=$a[$i];
      		}
    		else
      		{
      			$response=$response.",".$a[$i];
      		}
    	}
  	}
}

$response=iconv("UTF-8", "WINDOWS-1251", $response);

//вывод результата
echo $response;
?>