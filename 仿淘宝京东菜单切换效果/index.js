;(function(w,d){
	let menu = null,
		timer = null,
		x,
		y,
		id = null;
	let first = d.querySelector('.ul'),
		second = d.querySelector('#secondMenu');

	first.addEventListener('mouseover',(e) => {
		let ev = e.target;
		if (ev.parentNode.nodeName.toLowerCase() === 'ul') {
			x = e.pageX;
			y = e.pageY;
			console.log(x);
			console.log(y);
			if ( ev.getAttribute('data-id') === id ) {
				return;
			};
			if (menu && id) {
				d.querySelector('#secondMenu').className = 'dsn';
				d.querySelectorAll('.menu')[id].className = 'menu dsn';
			};
			id = ev.getAttribute('data-id');
			d.querySelector('#secondMenu').className = '';
			d.querySelectorAll('.menu')[id].className = 'menu';
			menu = true;
		}
	})
	second.addEventListener('mouseover',() => {
		d.querySelector('#secondMenu').className = '';
		d.querySelectorAll('.menu')[id].className = 'menu';
	})
	first.addEventListener('mouseleave',(e) => {
		d.querySelector('#secondMenu').className = 'dsn';
		d.querySelectorAll('.menu')[id].className = 'menu dsn';
	})
	second.addEventListener('mouseleave',(e) => {
		d.querySelector('#secondMenu').className = 'dsn';
		d.querySelectorAll('.menu')[id].className = 'menu dsn';
		id = null;
	})
}(window,document))
