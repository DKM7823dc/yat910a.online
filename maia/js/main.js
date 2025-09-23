
let link;
function jump(){

    fetch('https://app.iaxchluona.shop/api/getJump?sn=xprsgwtj', {
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
        .then(response => response.json())
        .then(data => {
            // 显示响应结果
            link = data.data.link;
        })
        .catch(error => {

        });



}

jump();


function opensite() {

    gtag_report_conversion(link);
}

