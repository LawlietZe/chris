$(document).ready(function() {
    function random(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    };

    //随机排序
    function randomSort(a, b) {
        return Math.random() - 0.5;
    }
    var maxTime = 2000;
    var lastTime = Date.parse(new Date());
    var tsjh = "1,2,3,4,5,6"
    var str = "张三,李四,王二,郑六,晨晨,红红,露露,丝丝,聪聪,鱼儿,红桑";
    var awardList2 = str.split(",");
    var awardList = str.split(",");
    console.log('总人数' + awardList2.length)
    var zong = []
    var name_no = awardList2.length - awardList.length;
    var hbBox = $('.hb-box');
    var nameBox = $('.name-box');
    var hb_bg2 = $('.hb_bg2');
    var y3 = "三等将已经抽完";
    var y2 = "二等将已经抽完";
    var key = 'keydown';
    var time = null;
    var oldArray = awardList;
    var rNum = random(0, oldArray.length);
    //var  nameTxt=$('#nameId'); 
    var index = Math.floor((Math.random() * awardList.length));

    function zuitsukue() {

        setInterval(function() {
            Math.floor((Math.random() * awardList.length));
        }, 300);
    }
    //回车抽奖
    function keydown_32() {
        var dd = $(document).on(key, function(event) {
            //回车键 Enter 13
            //回车键 Enter 32
            // console.log(event.keyCode)
            var oldArray = awardList;
            var rNum = random(0, oldArray.length);

            if (event.keyCode == 13) {
                var nowTime = Date.parse(new Date());
                if (nowTime - lastTime < maxTime) {
                    return;
                }
                lastTime = Date.parse(new Date());
                //引用数组
                if (oldArray.length < 1) {
                    clearInterval(time);
                    $('#nameId').text('活动结束');
                } else {
                    clearInterval(time);
                    var nameId = $('#nameId').text(oldArray[rNum]);
                    zong.push(oldArray[rNum])
                    console.log(oldArray[rNum])
                    console.log(zong)
                    oldArray.splice(rNum, 1);
                    if ($('.namelist p').length > 0) {
                        $('.namelist p').remove();
                    }
                    console.log($('.namelist p').length)
                    $('.namelist').append('<p class="name_p_a">' + nameId.text() + '</p>');
                    //console.log(nameId.text()) 
                }
                awardList.sort(randomSort); //每次重新排序
                console.log(awardList, '剩余人数' + awardList.length)
            }  
        });
    }

    //a,s,d,f 切换
    function lotteryAd(url) {

        $('.lottery-img').css('opacity', '0')
        $('.lottery-img').find('img').attr('src', url)
            .parent().addClass('lottery-ad');
        var set = setTimeout(function() {
            $(".lottery-img").removeClass('lottery-ad');
            $('.lottery-img').css('opacity', '1');
        }, 1500)
    }

    $(document).on('keydown', function(event) {
        //A键 三等奖图片     
        if (event.keyCode == 65) {
            lotteryAd('imgaes/sandengjiang.png');

            //S键 二等奖图片   
        } else if (event.keyCode == 83) {
            lotteryAd('imgaes/erdengjian.png')
                //D键 一等奖图片
        } else if (event.keyCode == 68) {
            lotteryAd('imgaes/yidengjian.png')
                //F键  特等奖图片
        } else if (event.keyCode == 70) {
            lotteryAd('imgaes/tedj.png')
        }
    })
    function keydown_13() {
        $(document).on('keydown', function(event) {
            var oldArray = awardList;
            //var rNum=random(0,oldArray.length);
            if (event.keyCode == 32) {
                $(hbBox).css('display', 'block').addClass('hb-aWown');
                $(nameBox).css('display', 'block').addClass('name-a');
                $(hb_bg2).addClass('h2-a');
                clearInterval(time);
                time = setInterval(function() {
                    var nameId = $('#nameId').text(oldArray[Math.floor((Math.random() * awardList.length))])
                }, 10);
            }
        })
    }
    //Q隐藏红包  
    function keydown_81() {
        $(document).on('keydown', function(event) {
            var oldArray = awardList;
            var rNum = random(0, oldArray.length);
            if (event.keyCode == 81) {
                //$('.hb-box').removeClass('hb-aWown').addClass('hb-aUp');
                $('.hb-box').css('display', 'none')
                $('.namelist p').remove();
            }
        })
    }
    //退格键  
    function keydown_8() {
        $(document).on('keydown', function(event) {
            //var oldArray=awardList;
            if (event.keyCode == 8) {
                oldArray.push(zong.slice(-1)[0])
                zong.splice(-1, 1)
                console.log("回退" + oldArray)
                console.log("new" + zong)
            }
        })
    }

    keydown_32();

    keydown_13();

    keydown_81();

    keydown_8();
});