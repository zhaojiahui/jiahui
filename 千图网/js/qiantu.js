//轮播效果
var box = document.getElementById('banner');
var imgs = document.getElementById('imgs');
var left = document.getElementById('left');
var right = document.getElementById('right');
var lis = document.querySelectorAll('#lis li');

box.onmouseover = function() {
	left.style.display = 'block';
	right.style.display = 'block';
	clearInterval(timer);
}
box.onmouseout = function() {
	left.style.display = 'none';
	right.style.display = 'none';
	timer = setInterval(autoplay, 500);
}

var index = 0;
right.onclick = function() {
	autoplay();
}
left.onclick = function() {
	index --;
	if (index < 0) {
		index = 7;
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.background = '#645555';
	}
	imgs.style.left = -index *1200 + 'px';
	lis[index].style.background = 'green';
}
var timer = setInterval(autoplay, 500);
function autoplay() {
	index ++;
	if (index > 7) {
		index = 0;
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.background = '#645555';
	}
	imgs.style.left = -index *1200 + 'px';
	lis[index].style.background = 'green';
}
for (var i = 0; i < lis.length; i++) {
      lis[i].index = i;
      lis[i].onmouseover = function() {
      	for (var j = 0; j < lis.length; j++) {
      		lis[j].style.background = '#645555';
      	}
      	this.style.background = 'green';
	   imgs.style.left = - this.index * 1200 + 'px';
	   index = this.index;
     }     
}


//tab 切换
var dbox = document.querySelectorAll('#tab div');
var btns = document.querySelectorAll('#btns a');

for (var i = 0; i < btns.length; i++) {
	btns[i].index = i;
    btns[i].onmouseover = function() {
    	for (var j = 0; j < btns.length; j++) {
    		btns[j].style.color = '';
    		dbox[j].style.display = 'none';
    		btns[j].style.borderBottom = '';
    	}
     this.style.color = '#FF6C00';
     this.style.borderBottom = '2px solid #FF6C00';
     dbox[this.index].style.display = 'block';
    }
}