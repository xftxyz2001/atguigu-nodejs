  //first-request  start: {left: 120, top:150}  end {left: 850,top:10}
  var inte = null;

  $('#start').click(function(){
    $('#first-request').fadeIn(1000, function(){
      $(this).animate({
        left:'850px',
        top:'10px'
      }, 2000, function(){
        //first-response start: {left: 1000, top:200}  end {left:320, top:350}
        $('#first-response').fadeIn(1000, function(){
          $(this).animate({
            left:'320px',
            top:'350px'
          }, 2000, function(){
            $('#second-request').fadeIn(1000, function(){
              $(this).animate({
                left:'850px',
                top:'690px'
              }, 2000, function(){
                //first-response start: {left: 1000, top:200}  end {left:320, top:350}
                $('#second-response').fadeIn(1000, function(){
                  $(this).animate({
                    left:'320px',
                    top:'1050px'
                  }, 2000, function(){
                  $('#third-request').fadeIn(1000, function(){
                    $(this).animate({
                      left:'850px',
                      top:'1190px'
                    }, 2000, function(){
                      //first-response start: {left: 1000, top:200}  end {left:320, top:350}
                      $('#third-response').fadeIn(1000, function(){
                        $(this).animate({
                          left:'320px',
                          top:'1550px'
                        }, 2000, function(){
                          $('#four-request').fadeIn(1000, function(){
                            $(this).animate({
                              left:'850px',
                              top:'1690px'
                            }, 2000, function(){
                              //first-response start: {left: 1000, top:200}  end {left:320, top:350}
                              $('#four-response').fadeIn(1000, function(){
                                $(this).animate({
                                  left:'320px',
                                  top:'2050px'
                                }, 2000,function(){
                                  clearInterval(inte);
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
                });
              });
            });



          });
        });
      });
    });

    var i = 0;
    setTimeout(function(){
      inte = setInterval(function(){
        $(window).scrollTop(i++);
      },10)
    }, 3000);
  });

  
    
  function init() {
    var html_1 = `HTTP/1.1 200 OK
Server: Node.js
Date: Mon, 13 Mar 2017 14:28:38 GMT
Content-Type: text/html;charset=utf-8
Connection: keep-alive

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>网站首页</title>
	<link rel="stylesheet" href="./css/index.css">
</head>
<body>
	<h1>尚硅谷前端</h1>
	<hr />
	<img width="100%" src="./images/h5.png" alt="">
	<script src="./js/index.js"></script>
</body>
</html>`
    $('#res-1').text(html_1);

    var html_2 = `HTTP/1.1 200 OK
Server: Node.js
Date: Mon, 13 Mar 2017 14:28:38 GMT
Content-Type: text/css;charset=utf-8
Connection: keep-alive

*{
	margin: 0;
	padding: 0;
}
body{
	height: 100vh; padding: 20px;
	box-sizing: border-box;
	background:linear-gradient(to right bottom, #aef, #c90);
}`;
    $('#res-2').text(html_2);

    var html_3 = `HTTP/1.1 200 OK
Server: Node.js
Date: Mon, 13 Mar 2017 14:28:38 GMT
Content-Type: text/javascript;charset=utf-8
Connection: keep-alive

//获取图片
let img = document.querySelector('img');
//绑定事件
img.onclick = function(){
  alert('尚硅谷前端欢迎你')
}
      `;


    var html_4 = `HTTP/1.1 200 OK
Server: Node.js
Date: Mon, 13 Mar 2017 14:28:38 GMT
Content-Type: image/png
Connection: keep-alive

������������������������
      `;
    $('#res-3').text(html_4);
    
    $('#res-4').text(html_3);
  }

  init();