<?php
      
      include 'index.html';
      $url = 'http://127.0.0.1:5500/index.html'; // ссылка, куда надо сделать POST запрос
$dataFields = array(   // ассоц. массив данных, которые нужно передать
    'shopId' => $user->Shop->shop_id,
    'scid' => $user->Shop->sc_id,
);

$html = sprintf( '<form name="formPost" id="formPost" action="%s" method="post">', $url);
foreach( $dataFields AS $key=>$value) {
    $html .= sprintf( '<input type="hidden" name="%s" value="%s">',
        $key, $value);
}
$html .= '</form>';
   ?>