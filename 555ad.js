/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
去广告
脚本名称:去广告
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/vip7.fzwdyy.cn\/api\/getAdvertInfo.+$ url script-response-body https://raw.githubusercontent.com/gita378/qx/main/555ad.js
[mitm] 
hostname = *.fzwdyy.*
*******************************
Surge

[Script]
^http[s]?:\/\/vip7.fzwdyy.cn\/api\/getAdvertInfo.+$ requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/gita378/qx/main/555ad.js

[MITM]
hostname = *.fzwdyy.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.= ;
    $done({body: JSON.stringify(obj)});
