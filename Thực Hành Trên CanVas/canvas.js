//1- lấy đối tượng canvas.
let circle=document.getElementById('resultCircle');


//2- Chọn Đối tượng vẽ là '2d'.
let ctx=circle.getContext('2d');

//3-Tiến hành vẽ:
ctx.beginPath();//khai báo vẽ
ctx.arc(95,50,40,0,2*Math.PI);
//Khai báo vẽ có tọa độ x=95,y=50 bán kính=40
ctx.stroke();//Tiến Hành Vễ.


// vẽ hình chữ nhật
let rectangle=document.getElementById('resultHCN');
let hcn=rectangle.getContext('2d');
hcn.fillStyle="#FF0000";
hcn.fillRect(0,0,250,100);

// vẽ chữ
let text=document.getElementById('text');
let txt=text.getContext('2d');
txt.font="30px Arial";
txt.fillText("Viết Chữ Bằng Canvas",10,50);

