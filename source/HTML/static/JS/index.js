




setInterval(function(){
    if($("body").prop("class")==="background_0"){

        $("body").prop("class","background_1");

    }else if($("body").prop("class")==="background_1"){

        $("body").prop("class","background_2")

    }else if($("body").prop("class")==="background_2"){

        $("body").prop("class","background_3")
    }else if($("body").prop("class")==="background_3"){

        $("body").prop("class","background_4")
    }else if($("body").prop("class")==="background_4"){

        $("body").prop("class","background_0")
    }
},5000);
var i=0;
var list=[
   '阿,你终于来啦',
   '等你好久了呢',
   '我也不知道你这些年',
   '经历了多少的事情',
   '才把你变成现在这个样子',
   '但是',
   '这些年 你一个人辛苦啦',
   '虽然以前你遇到了个混蛋',
   '但就像你说的 现在越苦以后就会越甜的啦',
   '对不起啊',
   '我是个没用的人',
   '我也没有学会怎么安慰人',
   '没有学会怎么让你能更开心一点',
   '你想啊',
   '这世间有七十亿人',
   '恰恰是那天',
   '哪怕晚一秒 又或者早一秒',
   '我们这辈子也不会再有交集',
   '你也不会看到这份礼物',
   '可偏偏遇见了',
   '谁知道明天不会好呢',
   '相信我',
   '终有一天',
   '一切都会好起来',
   '那时的阳光',
   '也会一如过往的灿烂',
   '你一定要每天开开心心的',
   '答应我好不好'
   
   
   ];
var t1=  setInterval(function(){
    if(i<list.length){
        alert(list[i]);
        $(".list_text").append("<li class='list_li'>"+this.list[i]+"</li>");
        if($('.list_text li').length===16){
            $(".list_text").css("font-size","20px");
        }
        i++;
    }else{
        $("#mymodal-01").modal();
        window.clearInterval(t1);
        $(".list_li").click(function () {
            $("#mymodal-01").modal();
        });

    }

},2000);


