var movies=document.getElementsByClassName('imgs')
var movie=movies[0].getElementsByTagName('li');
var text=document.getElementsByClassName('text');
var imgWidth=-movie[0].clientWidth;
var timer2;
var d=0;
text[0].style.display='block';
function auto(){
    timer2=setInterval(function(){
        movie[d].style.marginLeft=(d+1)*imgWidth+'px';
        d++;
        if(d==3){
            for(var e=0;e<3;e++){
                movie[e].style.marginLeft='100px';//清除所有图的位移
            }
            d=0;
        }
    },3000)
}
auto();

function rest(){
    clearInterval(timer2);
}

var cimena=document.getElementById('movie');
cimena.onmouseover=function(){
    rest();
    text[0].style.display='block';
}
cimena.onmouseout=function(){
    auto();
}


for(var f=0;f<movie.length;f++){//鼠标进入图片，相应的文字出现在对话框
    movie[f].index=f;
    movie[f].onmouseenter=function(){
        text[0].style.display='none';
        text[this.index].style.display='block';
    }
    movie[f].onmouseout=function(){
        text[this.index].style.display='none';  
    } 
}

