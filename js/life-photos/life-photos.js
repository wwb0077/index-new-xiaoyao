/**
 * Created by wwb on 2017/6/21.
 */
    //获取按钮：
    var wrap_ol = document.getElementById('main-btn');
    //在文档中去获取元素，通过标签名方法('标签名')
    var aLi = wrap_ol.getElementsByTagName('li');
    //alert(aLi.length); 个数
    var num = 0;
    var oldLi = aLi[num];
    //获取图片 main-banner
    var wrap_banner = document.getElementById('main-banner');
    var list_img = wrap_banner.getElementsByTagName('li');
    var oldImg = list_img[num];
    var time;
    for (var i = 0; i < 3; i++) {//for循环 (初始值;判断;步幅)i++每次让i加1
        aLi[i].index = i; //自定义属性 索引值
        /**
         aLi[i].onclick = function(){//匿名函数
        **/
        aLi[i].onmouseover = function () {
            clearInterval(time);//清楚定时器；
            //alert(i);
            //this 谁触发此函数 this 就指向谁
            //aLi[2];
            num = this.index;
            run();
        };
        aLi[i].onmouseout = function () {
            autoPlay();
        }
    }
    function run() {
        oldLi.className = '';
        aLi[num].className = 'active';
        oldLi = aLi[num];//更新 oldLi
        oldImg.className = '';//图片
        list_img[num].className = 'active';
        oldImg = list_img[num];//更新oldImg
    }
    //自动轮播
    autoPlay();
    function autoPlay() {
        time = setInterval(function () {
            run();
            num++;//每次让num加1
            if (num == 3) {
                num = 0;
            }//如果（）里面的内容是真的，才会执行{}里面的代码
        }, 3000);//设置定时器setInterval(函数,1000毫秒)每1000毫秒执行一次里面的函数
    }
//======= 图片切换区域 == pic_mid star===========================//

    var aLi_pic_nav = document.getElementById("pic_nav").getElementsByTagName("li"),
        aLi_pic_list = document.getElementById("pic_list").getElementsByTagName("li"),
        len = aLi_pic_nav.length,
        old_aLi_pic_nav = aLi_pic_nav[0],
        old_aLi_pic_list = aLi_pic_list[0];
    // console.log( aLi_pic_list[0] );
    for ( var k = 0; k < len; k++){
        aLi_pic_nav[k].wwb = k;
        // console.log(k);
        aLi_pic_nav[k].onmouseenter = function () {
            // console.log( aLi_pic_nav[k] );
            old_aLi_pic_nav.className = "";
            this.className = "hover";
            old_aLi_pic_nav = this;
            old_aLi_pic_list.style.display = "none";
            aLi_pic_list[this.wwb].style.display = "block";
            old_aLi_pic_list = aLi_pic_list[this.wwb];
        }
    }
    var arrImg = [
        ['images/pic_list/team_01.jpg','images/pic_list/new/team_a01.jpg','images/pic_list/new/team_a02.jpg','images/pic_list/new/team_a03.jpg','images/pic_list/new/team_a04.jpg','images/pic_list/team-all.jpg'],
        ['images/pic_list/Scenery_20170621171154.jpg','images/pic_list/Scenery_20170621171255.jpg','images/pic_list/Scenery_20170621171351.jpg','images/pic_list/Scenery_20170621171948.jpg','images/pic_list/Scenery_20170621001.jpg','images/pic_list/Scenery_20170621002.jpg','images/pic_list/Scenery_20170621003.jpg'],
        ['images/pic_list/work_20170621172707.jpg','images/pic_list/work_20170621172714.jpg','images/pic_list/work_20170621001.jpg','images/pic_list/work_20170621002.jpg','images/pic_list/work_20170621003.jpg'],
        ['images/pic_list/girl_20170621172341.jpg','images/pic_list/boy_20170621214848.jpg']
    ],
        pic_str = "",
        arrSpan_B_nav = [];
    for (var x = 0;x < len;x++) {
        // alert( x );
        for(var y = 0;y < arrImg[x].length;y++){
            // console.log( y );
            if( y==0 ){
                pic_str = '<span class="hover">'+(y+1)+'</span>';
            }else {
                pic_str += '<span>'+(y+1)+'</span>';
            }
        }
        arrSpan_B_nav.push( pic_str );
    }

    // console.log( arrImg[1] );
    // console.log( arrSpan_B_nav );
//------------------------------------------------------------
    for (var z=0;z < len; z++) {
        showall( aLi_pic_list[z],arrSpan_B_nav[z],arrImg[z] );
    }

    function showall(arli,arrspan,arrimg) {
        var diva = arli.getElementsByTagName("div")[0];
        diva.innerHTML = arrspan;
        var spana = arli.getElementsByTagName("span");
        //        alert(span.length);//===>弹出4 因为数组中第一组有四个元素

        var imga = arli.getElementsByTagName("img")[0];
        //            console.log(imga);//===>这里打印出 <img src="images/s1.jpg" alt=""> 注意:这里不是获取数组中的
        //给第一个选项卡中的每一个span图片选项卡注册点击事件
        for (var i = 0; i < spana.length; i++) {
            spana[i].a = i;
            var oldSpan_a = spana[0];
            spana[i].onmouseenter = function () {
                oldSpan_a.className = "";
                this.className = "hover";
                oldSpan_a = this;
                imga.src = arrimg[this.a];
            }
        }
    }

//------------------------------------------------------------
//======= 图片切换区域 == pic_mid end============================//

//---------快乐轮播----------------
//document文档 alert(aLi.length); 个数
    var oLunbo = document.getElementById('lunbo'),
        aLi_lb = oLunbo.getElementsByTagName('li'),
        aImg = oLunbo.getElementsByTagName('img'),
        aP = oLunbo.getElementsByTagName('p');
    var timer;
    var num_lb=0;
    var oldLi_lb = aLi_lb[num_lb];
    var oldImg_lb = aImg[num_lb];
    oldLi_lb.className = 'first_li';
    oldImg.className = 'first_img';
    for(var i = 0;i<6;i++){
        aLi_lb[i].index = i;
        //点击事件
        aLi_lb[i].onclick=function(){
            //alert(this.index);
            //this.className = 'first_li';
            num_lb = this.index;
            //alert(num_lb);
            run_lb();
        };
        function run_lb(){
            oldLi_lb.className = '';//清楚class名称
            oldImg_lb.className = '';
            oldLi_lb = aLi_lb[num_lb];//更新oldLi
            oldImg_lb = aImg[num_lb];
            aLi_lb[num_lb].className = 'first_li';
            aImg[num_lb].className = 'first_img';
        }
    }
    //左点击
    aP[0].onclick = function(){
        num_lb--;
        if(num_lb<0){
            num_lb=5;
        }
        run_lb();
    };
    //右点击
    aP[1].onclick = function(){
        num_lb++;
        if(num_lb==6){
            num_lb=0;
        }
        run_lb();
    };
    //自动轮播开始
    outoplay();
    function outoplay(){
        timer = setInterval(function(){
            run_lb();
            num_lb++;
            if(num_lb==6){
                num_lb=0;
            }//console.log(num);
        },1000)
    }
    //alert(i);
    //清楚定时器，鼠标划入
    oLunbo.onmouseover = function(){
        clearInterval(timer);
    };
    //鼠标移开
    oLunbo.onmouseout = function(){
        outoplay();
    };