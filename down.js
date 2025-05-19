let statu=0;
function menudown(){
    if (statu===0){
        document.getElementById('menudowns').style.display='block';
        statu=1;
    }
    else{
        document.getElementById('menudowns').style.display='none';
        statu=0;
    }
}