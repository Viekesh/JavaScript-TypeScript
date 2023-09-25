// function RectInfo() {
//     document.getElementById("Sample").innerHTML="";
//     var d = document.getElementById("DIV1");
//     var Rect = d.getBoundingClientRect();
//     rl = Rect.left;
//     rt = Rect.top;
//     rw = Rect.width;
//     rh = Rect.height;
//     document.getElementById("Sample").innerHTML +="Left: " + rl + ",<br> Top: " + rt + ",<br> Width: " + rw + ",<br> Height: " + rh;
//  }


const RectInfo = () => {
    document.getElementById("sample").innerHTML = "";
    let div1 = document.getElementById("div1");
    let rect = div1.getBoundingClientRect();
    rLeft = rect.left;
    rTop = rect.top;
    rWidth = rect.width;
    rHeight = rect.height;
    document.getElementById("sample").innerHTML += "Left :" + rLeft + ", <br /> Top : " + rTop + ", <br /> Width :" + rWidth + ", <br /> Height : " + rHeight;
}



// .