
let menu = document.getElementById('menu');
let dm = document.getElementById('ff');
menu.addEventListener('click', function(){
menu.style.display = 'none';
dm.play();
let mm = document.getElementById('dd');
mm.style.display = 'block';
let cube = document.getElementById('cube');
let x = 0;
let o = 16;
let j = 0;
setInterval( function(){
	let k = Math.random() * 10;
	k = Math.ceil(k);
	console.log(k);
	if (k == 4) {
			j+=1;
		let h2 = document.getElementById('h2');
		let sh = document.getElementById('sh');
		h2.innerHTML = 'Wins: ' + j;

		sh.style.animation = 'wet 0.4s linear';
		sh.style.top = '900px';
		if (k == 4 && x == 0) {
			setTimeout( function(){
				let hd = document.getElementById('lose');
		hd.style.display = 'block';
		let r = document.getElementById('dd');
		r.style.display = 'none';
			}, 400);
				

		}
		setTimeout( function(){
			let sh = document.getElementById('sh');
			sh.style.animation = 'none';
			sh.style.top = '1010px';
		}, 500);
	}

}, 1500);
document.addEventListener('click', function(){
	cube.style.animation = 'wer 0.8s linear';
	x = 10;
	o-=1;
	let h1 = document.getElementById('h1');
	h1.innerHTML = 'Jumps: ' + o;
	setTimeout( function(){
		cube.style.animation = 'none';
	}, 800);
	setTimeout( function(){
		
		x = 0;
	}, 700);
	if (o == 0) {
		location.reload();
	}
});

let home = document.getElementById('home');
home.addEventListener('click', function(){
	location.reload();
});
	
});