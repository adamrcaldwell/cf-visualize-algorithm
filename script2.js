$(document).ready(function() {
	fillSet();
	$('#randombutton').on('click', function() {
  	randomize($(".num").length - 1);
	});
	$('#bubblebutton').on('click', function() {
		bubbleSort();
	});
});

function fillSet () {
	for(i = 1; i <= 10; i++) {
		var number = new Number(i);
		$("#numberset").append(number.toHTML);
	}
}

function Number(num) {
	this.num = num;
	this.toHTML = function() {
		return '<li class="num" id="' + num + '">' + num + '</li>';
	};
}

function randomize(m) {
	var $mth,
			rand = Math.floor(Math.random() * m),
			$rand;

	$('li').removeClass('swapping');

	$mth = $('.num:eq(' + m + ')').addClass('swapping').fadeIn();
	
	$rand = $('.num:eq(' + rand + ')').addClass('swapping').fadeIn();

	$mth.before($rand);
	$('.num:eq(' + rand + ')').before($mth);

	if (m > 0) {
    setTimeout(randomize, 25, m - 1);
  } else {
    $('li').removeClass('swapping');
  }
}

function liToVal(id) {
	listID = $('.num:eq(' + id + ')').attr('id'),
	listVal = (parseInt(listID) * 1);
	return listVal;
}

function swap(x, y) {
	var $temp = $('.num:eq(' + x + ')');
	$('.num:eq(' + x + ')').before($('.num:eq(' + y + ')'));
	$('.num:eq(' + y + ')').before($temp);
}

function bubbleSort() {
	var $len = $(".num").length;
	for (i = 0; i < $len; i++) {
		for(j = 0, stop = $len - i; j < stop; j++) {
			if(liToVal(j) > liToVal(j + 1)) {
				swap(j, j + 1).fadeIn(200);
			}
		}
	}
}