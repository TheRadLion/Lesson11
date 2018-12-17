window.onload = function(){ 

    var reply_click = function() {

        alert(this.id);

    }

    document.getElementById('Row1Col1').onclick = reply_click;
    document.getElementById('Row1Col2').onclick = reply_click;
    document.getElementById('Row1Col3').onclick = reply_click;
    document.getElementById('Row2Col1').onclick = reply_click;
    document.getElementById('Row2Col2').onclick = reply_click;
    document.getElementById('Row2Col3').onclick = reply_click;
    document.getElementById('Row3Col1').onclick = reply_click;
    document.getElementById('Row3Col2').onclick = reply_click;
    document.getElementById('Row3Col3').onclick = reply_click;
};