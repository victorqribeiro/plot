const canvas = document.getElementById('canvas');
canvas.width = w = innerWidth;
canvas.height = h = innerHeight;
const c = canvas.getContext('2d');
const w2 = w>>1, h2 = h>>1;

const plot = y => {
	c.clearRect(0,0,w,h)
	c.save()
	c.translate(w2,h2)
	c.beginPath()
	c.moveTo(-w2,0)
	c.lineTo(w2,0)
	c.strokeStyle = "gray"
	c.stroke()
	c.fillText("x",w2-10,10)
	c.beginPath()
	c.moveTo(0,-h2)
	c.lineTo(0,h2)
	c.stroke()
	c.fillText("y",10,-h2+10)
	c.beginPath()
	for(let i = -w2; i < w2; i++)
		if( i == -w2 )
			c.moveTo(i,-y(i));
		else
			c.lineTo(i,-y(i));
	c.strokeStyle = 'black'
	c.stroke()
	c.restore()
}

const y = x => eval(document.getElementById('x').value)

document.getElementById('x').addEventListener("keydown", e => {
	if(e.keyCode == 13)
		plot(y)
})

document.getElementById('x').addEventListener("change", e => plot(y) )

plot(y)
