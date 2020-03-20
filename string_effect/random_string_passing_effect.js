//文字
var txts = '0123456789!@#$%^&*()~_+℃☆○※';
//转为数组
txts = txts.split('');
var matrix = document.getElementById('matrix');
var context = matrix.getContext('2d');
matrix.height = window.innerHeight;
matrix.width = window.innerWidth;
var drop = [];
var font_size = 25;
var fon = 14;
var columns = matrix.width / fon;
for (var i = 0; i < columns; i++) drop[i] = 1;

function drawMatrix() {
  context.fillStyle = 'rgba(0, 0, 0, 0.03)';
  context.fillRect(0, 0, matrix.width, matrix.height);

  context.fillStyle = 'green';
  context.font = font_size + 'px';
  for (var i = 0; i < columns; i++) {
    //随机取要输出的文字
    var text = txts[Math.floor(Math.random() * txts.length)];
    //输出文字，注意坐标的计算
    context.fillText(text, i * fon, drop[i] * fon); /*get 0 and 1*/

    if (drop[i] * font_size > (matrix.height * 2) / 3 && Math.random() > 0.95)
      /*reset*/
      drop[i] = 0;
    drop[i]++;
  }
}

setInterval(drawMatrix, 23);
