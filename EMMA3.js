var labs=document.getElementsByClassName('tips')[0].getElementsByTagName('li');
var prize=document.getElementsByClassName('prize')[0].getElementsByTagName('ul');
var g=0;
labs[0].setAttribute('class','look');
prize[0].style.display='block';

for(;g<labs.length;g++){

    labs[g].index=g;
    labs[g].onmouseover=function(){
        labs[0].setAttribute('class','');
        prize[0].style.display='';
        for(var h=0;h<labs.length;h++){
            labs[h].setAttribute('class','');
            prize[h].style.display='none';
        }
        
        this.setAttribute('class','look');
        prize[this.index].style.display='block'
        
    }
    
}