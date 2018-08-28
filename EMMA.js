window.onload=function(){


    var imgs=document.getElementsByClassName('images')[0].getElementsByTagName('li');
    var items=document.getElementsByClassName('item')[0].getElementsByTagName('li');
    var timer;
    var i=0;

    imgs[0].style.display='block';//一开始第一张图是显示的
    items[0].style.backgroundColor='red';//一开始第一个圆点就是红色的
    function play(){//将定时器打包放进play函数里，等待调用
        timer=setInterval(function(){//设置一个定时器
            i++;//让轮播从索引为1的图开始。所以要放在其他程序前面
        
            if(i==imgs.length){//当显示最后一张图后
                i=0;//又从第一张图开始轮播
            }

            for(var a=0;a<imgs.length;a++){//定时器是从索引为1的图开始有效的，那么前一张图的效果就是索引为0开始
                imgs[a].style.display='none';//除了当前的图，其他的图隐藏
                items[a].style.backgroundColor='yellowgreen';//除了当前的圆点，其他的圆点恢复原来的颜色
            }//可以执行当前图的前一个图

            imgs[i].style.display='block';//显示图
            items[i].style.backgroundColor='red';//点变红
            
        },3000)
    }
    play();//执行轮播

    function stop(){//将停止定时器的动作打包到stop函数里
        clearInterval(timer);//清除定时器
    };


    var header=document.getElementById('head');
    header.onmouseover=function(){//鼠标进入header部分时
        stop();//轮播停止在当下
    }
    header.onmouseout=function(){//鼠标离开header时
        play();//轮播接着播放
    }

    for(var b=0;i<items.length;b++){//鼠标经过圆点，相同索引号的图显示
        items[b].index=b;//设置索引号的值和b一样
        items[b].onmouseover=function(){
        for(var c=0;c<items.length;c++){//清除所有图点样式
            imgs[c].style.display='none';
            items[c].style.backgroundColor='yellowgreen';
        }
        this.style.backgroundColor='red';
        imgs[this.index].style.display='block';//当前圆点的索引号为突变的索引号，触发图片显示
        }
    }

}


