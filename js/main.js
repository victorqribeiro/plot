const canvas = document.getElementById('canvas');
canvas.width = w = innerWidth;
canvas.height = h = innerHeight;
const ctx = canvas.getContext('2d');
const w2 = w>>1, h2 = h>>1;

const plot = y => {
	ctx.clearRect(0,0,w,h)
	ctx.save()
	ctx.translate(w2,h2)
	ctx.beginPath()
	ctx.moveTo(-w2,0)
	ctx.lineTo(w2,0)
	ctx.strokeStyle = "gray"
	ctx.stroke()
	ctx.fillText("x",w2-10,10)
	ctx.beginPath()
	ctx.moveTo(0,-h2)
	ctx.lineTo(0,h2)
	ctx.stroke()
	ctx.fillText("y",10,-h2+10)
	ctx.beginPath()
	for(let i = -w2; i < w2; i++)
		if( i == -w2 )
			ctx.moveTo(i,-y(i));
		else
			ctx.lineTo(i,-y(i));
	ctx.strokeStyle = 'black'
	ctx.stroke()
	ctx.restore()
}

const y = x => eval(document.getElementById('x').value)

document.getElementById('x').addEventListener("keydown", e => {
	if(e.keyCode == 13)
		plot(y)
})

document.getElementById('x').addEventListener("change", e => plot(y) )

plot(y)
