/*
Jackson Leb
May 2020
Color Generator Website With Color Harmonization Functionality
*/

function RGBToHex(red,green,blue) {

    //Converts RGB codes to Hex Codes
    red = red.toString(16);
    green = green.toString(16);
    blue = blue.toString(16);

    if (red.length ==1)
        red = "0" + red;
    if (green.length ==1)
        green = "0" + green;
    if (blue.length ==1)
        blue = "0" + blue;
    
    return red + green + blue;
}

function hextoRGB(h) {

    //Converts Hex Codes to RGB Codes
    let r = 0, g = 0, b = 0;
    var rgb_colors = []
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    rgb_colors.push(+ + r);
    rgb_colors.push(+ + g);
    rgb_colors.push(+ + b);

    return rgb_colors;
}

function clearField() {

    //Clears color field after generate to avoid overlapping divs
    if (document.getElementById('tworecs').childElementCount == 2) {
        document.getElementById('rectangle1').remove();
        document.getElementById('rectangle2').remove();
    }
    if (document.getElementById('tworecs').childElementCount == 4) {
        document.getElementById('rectangle1').remove();
        document.getElementById('rectangle2').remove();
        document.getElementById('rectangle3').remove();
        document.getElementById('rectangle4').remove();
    }
    if (document.getElementById('tworecs').childElementCount == 6) {
        document.getElementById('rectangle1').remove();
        document.getElementById('rectangle2').remove();
        document.getElementById('rectangle3').remove();
        document.getElementById('rectangle4').remove();
        document.getElementById('rectangle5').remove();
        document.getElementById('rectangle6').remove();
    }
    if (document.getElementById('tworecs').childElementCount == 8) {
        document.getElementById('rectangle1').remove();
        document.getElementById('rectangle2').remove();
        document.getElementById('rectangle3').remove();
        document.getElementById('rectangle4').remove();
        document.getElementById('rectangle5').remove();
        document.getElementById('rectangle6').remove();
        document.getElementById('rectangle7').remove();
        document.getElementById('rectangle8').remove();
    }


}



var takeScreenShot = function() {

    //Takes screen shot of colors using html2canvas and saves as jpg
    html2canvas(document.getElementById("screenshot-field"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
            tempcanvas.width=350;
            tempcanvas.height=350;
            var context=tempcanvas.getContext('2d');
            context.drawImage(canvas,0,0,350,350);
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = 'screenshot.jpg';
            link.click();
        }
    });
}

function is_hex(str) {
    
// tests if hex is valid
    if (/^#([0-9A-F]{3}){1,2}$/i.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

function generate() {
    //call to clearfield function
    clearField();

    
//Establishes num of colors from bootstrap select
    var num_colors = document.getElementById("numSelect").value;

    var colors = [];

    var count = 1;

    while (num_colors > 0) {
        
        var color_name = 'color' + String(count);
        
        //randomly generates rgb values and converts to hex
        var color1_1 = Math.floor(Math.random() * 256);
        var color1_2 = Math.floor(Math.random() * 256);
        var color1_3 = Math.floor(Math.random() * 256);
        var color1 = "#" + RGBToHex(color1_1, color1_2, color1_3);
        colors.push(color1);
        count++;
        color_name = 'color' + String(count);

        //calculates the complimentary color
        var color2 = "#" + RGBToHex(256 - color1_1, 256 - color1_2, 256 - color1_3);
        colors.push(color2);

        count++;

        num_colors = num_colors - 2;
        
        
        




    }

    //test case for num of colors, creates divs and descriptions accordingly
    if (colors.length == 2) {
        var div1 = document.createElement('div');
        var p1 = document.createElement('p');
        var node1 = document.createTextNode(colors[0]);
        p1.appendChild(node1);
        p1.className = 'colorcontent';
        div1.id = 'rectangle1';
        div1.className = 'rec1';
        div1.className = 'my-col';
        div1.className = 'col';
        document.getElementById('tworecs').appendChild(div1);
        document.getElementById('rectangle1').appendChild(p1);

        var div2 = document.createElement('div');
        var p2 = document.createElement('p');
        var node2 = document.createTextNode(colors[1]);
        p2.appendChild(node2);
        p2.className = 'colorcontent';
        div2.id = 'rectangle2';
        div2.className = 'rec2';
        div2.className = 'my-col';
        div2.className = 'col';
        document.getElementById('tworecs').appendChild(div2);
        document.getElementById('rectangle2').appendChild(p2);

        document.getElementById('rectangle1').style.backgroundColor = colors[0];
        document.getElementById("rectangle2").style.backgroundColor = colors[1];

    }

    if (colors.length == 4) {
        var div1 = document.createElement('div');
        var p1 = document.createElement('p');
        var node1 = document.createTextNode(colors[0]);
        p1.appendChild(node1);
        p1.className = 'colorcontent';
        div1.id = 'rectangle1';
        div1.className = 'rec1';
        div1.className = 'my-col';
        div1.className = 'col';
        document.getElementById('tworecs').appendChild(div1);
        document.getElementById('rectangle1').appendChild(p1);

        var div2 = document.createElement('div');
        var p2 = document.createElement('p');
        var node2 = document.createTextNode(colors[1]);
        p2.appendChild(node2);
        p2.className = 'colorcontent';
        div2.id = 'rectangle2';
        div2.className = 'rec2';
        div2.className = 'my-col';
        div2.className = 'col';
        document.getElementById('tworecs').appendChild(div2);
        document.getElementById('rectangle2').appendChild(p2);

        var div3 = document.createElement('div');
        var p3 = document.createElement('p');
        var node3 = document.createTextNode(colors[2]);
        p3.appendChild(node3);
        p3.className = 'colorcontent';
        div3.id = 'rectangle3';
        div3.className = 'rec3';
        div3.className = 'my-col';
        div3.className = 'col';
        document.getElementById('tworecs').appendChild(div3);
        document.getElementById('rectangle3').appendChild(p3);

        var div4 = document.createElement('div');
        var p4 = document.createElement('p');
        var node4 = document.createTextNode(colors[3]);
        p4.appendChild(node4);
        p4.className = 'colorcontent';
        div4.id = 'rectangle4';
        div4.className = 'rec4';
        div4.className = 'my-col';
        div4.className = 'col';
        document.getElementById('tworecs').appendChild(div4);
        document.getElementById('rectangle4').appendChild(p4);

        document.getElementById('rectangle1').style.backgroundColor = colors[0];
        document.getElementById("rectangle2").style.backgroundColor = colors[1];
        document.getElementById("rectangle3").style.backgroundColor = colors[2];
        document.getElementById("rectangle4").style.backgroundColor = colors[3];
    }

    if (colors.length == 6) {
        var div1 = document.createElement('div');
        var p1 = document.createElement('p');
        var node1 = document.createTextNode(colors[0]);
        p1.appendChild(node1);
        p1.className = 'colorcontent';
        div1.id = 'rectangle1';
        div1.className = 'rec1';
        div1.className = 'my-col';
        div1.className = 'col';
        document.getElementById('tworecs').appendChild(div1);
        document.getElementById('rectangle1').appendChild(p1);

        var div2 = document.createElement('div');
        var p2 = document.createElement('p');
        var node2 = document.createTextNode(colors[1]);
        p2.appendChild(node2);
        p2.className = 'colorcontent';
        div2.id = 'rectangle2';
        div2.className = 'rec2';
        div2.className = 'my-col';
        div2.className = 'col';
        document.getElementById('tworecs').appendChild(div2);
        document.getElementById('rectangle2').appendChild(p2);

        var div3 = document.createElement('div');
        var p3 = document.createElement('p');
        var node3 = document.createTextNode(colors[2]);
        p3.appendChild(node3);
        p3.className = 'colorcontent';
        div3.id = 'rectangle3';
        div3.className = 'rec3';
        div3.className = 'my-col';
        div3.className = 'col';
        document.getElementById('tworecs').appendChild(div3);
        document.getElementById('rectangle3').appendChild(p3);

        var div4 = document.createElement('div');
        var p4 = document.createElement('p');
        var node4 = document.createTextNode(colors[3]);
        p4.appendChild(node4);
        p4.className = 'colorcontent';
        div4.id = 'rectangle4';
        div4.className = 'rec4';
        div4.className = 'my-col';
        div4.className = 'col';
        document.getElementById('tworecs').appendChild(div4);
        document.getElementById('rectangle4').appendChild(p4);

        var div5 = document.createElement('div');
        var p5 = document.createElement('p');
        var node5 = document.createTextNode(colors[4]);
        p5.appendChild(node5);
        p5.className = 'colorcontent';
        div5.id = 'rectangle5';
        div5.className = 'rec5';
        div5.className = 'my-col';
        div5.className = 'col';
        document.getElementById('tworecs').appendChild(div5);
        document.getElementById('rectangle5').appendChild(p5);

        var div6 = document.createElement('div');
        var p6 = document.createElement('p');
        var node6 = document.createTextNode(colors[5]);
        p6.appendChild(node6);
        p6.className = 'colorcontent';
        div6.id = 'rectangle6';
        div6.className = 'rec6';
        div6.className = 'my-col';
        div6.className = 'col';
        document.getElementById('tworecs').appendChild(div6);
        document.getElementById('rectangle6').appendChild(p6);

        document.getElementById('rectangle1').style.backgroundColor = colors[0];
        document.getElementById("rectangle2").style.backgroundColor = colors[1];
        document.getElementById("rectangle3").style.backgroundColor = colors[2];
        document.getElementById("rectangle4").style.backgroundColor = colors[3];
        document.getElementById("rectangle5").style.backgroundColor = colors[4];
        document.getElementById("rectangle6").style.backgroundColor = colors[5];
    }

    if (colors.length == 8) {
        var div1 = document.createElement('div');
        var p1 = document.createElement('p');
        var node1 = document.createTextNode(colors[0]);
        p1.appendChild(node1);
        p1.className = 'colorcontent';
        div1.id = 'rectangle1';
        div1.className = 'rec1';
        div1.className = 'my-col';
        div1.className = 'col';
        document.getElementById('tworecs').appendChild(div1);
        document.getElementById('rectangle1').appendChild(p1);

        var div2 = document.createElement('div');
        var p2 = document.createElement('p');
        var node2 = document.createTextNode(colors[1]);
        p2.appendChild(node2);
        p2.className = 'colorcontent';
        div2.id = 'rectangle2';
        div2.className = 'rec2';
        div2.className = 'my-col';
        div2.className = 'col';
        document.getElementById('tworecs').appendChild(div2);
        document.getElementById('rectangle2').appendChild(p2);

        var div3 = document.createElement('div');
        var p3 = document.createElement('p');
        var node3 = document.createTextNode(colors[2]);
        p3.appendChild(node3);
        p3.className = 'colorcontent';
        div3.id = 'rectangle3';
        div3.className = 'rec3';
        div3.className = 'my-col';
        div3.className = 'col';
        document.getElementById('tworecs').appendChild(div3);
        document.getElementById('rectangle3').appendChild(p3);

        var div4 = document.createElement('div');
        var p4 = document.createElement('p');
        var node4 = document.createTextNode(colors[3]);
        p4.appendChild(node4);
        p4.className = 'colorcontent';
        div4.id = 'rectangle4';
        div4.className = 'rec4';
        div4.className = 'my-col';
        div4.className = 'col';
        document.getElementById('tworecs').appendChild(div4);
        document.getElementById('rectangle4').appendChild(p4);

        var div5 = document.createElement('div');
        var p5 = document.createElement('p');
        var node5 = document.createTextNode(colors[4]);
        p5.appendChild(node5);
        p5.className = 'colorcontent';
        div5.id = 'rectangle5';
        div5.className = 'rec5';
        div5.className = 'my-col';
        div5.className = 'col';
        document.getElementById('tworecs').appendChild(div5);
        document.getElementById('rectangle5').appendChild(p5);

        var div6 = document.createElement('div');
        var p6 = document.createElement('p');
        var node6 = document.createTextNode(colors[5]);
        p6.appendChild(node6);
        p6.className = 'colorcontent';
        div6.id = 'rectangle6';
        div6.className = 'rec6';
        div6.className = 'my-col';
        div6.className = 'col';
        document.getElementById('tworecs').appendChild(div6);
        document.getElementById('rectangle6').appendChild(p6);

        var div7 = document.createElement('div');
        var p7 = document.createElement('p');
        var node7 = document.createTextNode(colors[6]);
        p7.appendChild(node7);
        p7.className = 'colorcontent';
        div7.id = 'rectangle7';
        div7.className = 'rec7';
        div7.className = 'my-col';
        div7.className = 'col';
        document.getElementById('tworecs').appendChild(div7);
        document.getElementById('rectangle7').appendChild(p7);

        var div8 = document.createElement('div');
        var p8 = document.createElement('p');
        var node8 = document.createTextNode(colors[7]);
        p8.appendChild(node8);
        p8.className = 'colorcontent';
        div8.id = 'rectangle8';
        div8.className = 'rec8';
        div8.className = 'my-col';
        div8.className = 'col';
        document.getElementById('tworecs').appendChild(div8);
        document.getElementById('rectangle8').appendChild(p8);

        document.getElementById('rectangle1').style.backgroundColor = colors[0];
        document.getElementById("rectangle2").style.backgroundColor = colors[1];
        document.getElementById("rectangle3").style.backgroundColor = colors[2];
        document.getElementById("rectangle4").style.backgroundColor = colors[3];
        document.getElementById("rectangle5").style.backgroundColor = colors[4];
        document.getElementById("rectangle6").style.backgroundColor = colors[5];
        document.getElementById("rectangle7").style.backgroundColor = colors[6];
        document.getElementById("rectangle8").style.backgroundColor = colors[7];
        
    } 
}

function harmonize() {

    clearField();
//value from entry field
    var hex_color = document.getElementById("hexSelect").value;

    if (is_hex(hex_color) == true) {
        var rgb;
        var harmcolors = [];
    
        rgb = hextoRGB(hex_color);
    
        var rgb1, rgb2, rgb3;
        var compl1, compl2, compl3;
    
        rgb1 = rgb[0];
        rgb2 = rgb[1];
        rgb3 = rgb[2];
    
        
    //calculates complimentary and harmonious colors 
        compl1 = String('#' + RGBToHex((256 - rgb1), (256 - rgb2), (256 - rgb3)));
        compl2 = String('#' + RGBToHex(rgb1, (256 - rgb2), (256 - rgb3)));
        compl3 = String('#' + RGBToHex((256 - rgb1), (256 - rgb2), rgb3));
    
        harmcolors.push(hex_color);
        harmcolors.push(compl1);
        harmcolors.push(compl2);
        harmcolors.push(compl3);
        
        var div1 = document.createElement('div');
        var p1 = document.createElement('p');
        var node1 = document.createTextNode(hex_color);
        p1.appendChild(node1);
        p1.className = 'colorcontent';
        div1.id = 'rectangle1';
        div1.className = 'rec1';
        div1.className = 'my-col';
        div1.className = 'col';
        document.getElementById('tworecs').appendChild(div1);
        document.getElementById('rectangle1').appendChild(p1);
    
        var div2 = document.createElement('div');
        var p2 = document.createElement('p');
        var node2 = document.createTextNode(compl1);
        p2.appendChild(node2);
        p2.className = 'colorcontent';
        div2.id = 'rectangle2';
        div2.className = 'rec2';
        div2.className = 'my-col';
        div2.className = 'col';
        document.getElementById('tworecs').appendChild(div2);
        document.getElementById('rectangle2').appendChild(p2);
    
        var div3 = document.createElement('div');
        var p3 = document.createElement('p');
        var node3 = document.createTextNode(compl2);
        p3.appendChild(node3);
        p3.className = 'colorcontent';
        div3.id = 'rectangle3';
        div3.className = 'rec3';
        div3.className = 'my-col';
        div3.className = 'col';
        document.getElementById('tworecs').appendChild(div3);
        document.getElementById('rectangle3').appendChild(p3);
    
        var div4 = document.createElement('div');
        var p4 = document.createElement('p');
        var node4 = document.createTextNode(compl3);
        p4.appendChild(node4);
        p4.className = 'colorcontent';
        div4.id = 'rectangle4';
        div4.className = 'rec4';
        div4.className = 'my-col';
        div4.className = 'col';
        document.getElementById('tworecs').appendChild(div4);
        document.getElementById('rectangle4').appendChild(p4);
    
        document.getElementById('rectangle1').style.backgroundColor = hex_color;
        document.getElementById("rectangle2").style.backgroundColor = compl1;
        document.getElementById("rectangle3").style.backgroundColor = compl2;
        document.getElementById("rectangle4").style.backgroundColor = compl3;
        

    }
    else {
        alert('Not A Valid Hex Code')
    }




    
}




