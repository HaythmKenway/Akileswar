const about=document.querySelector('#about')
const contact=document.querySelector('#contact')
const aboutContent=document.querySelector('#about-content')
const contactContent=document.querySelector('#Contact-me')
const ctf=document.querySelector('#ctf')
const ctfcontent=document.querySelector('#ctf-content')
const skillbox=document.querySelector('#skillbox')
const skillboxcontent=document.querySelector('#skillbox_content')
const acc=document.querySelector('#accolades')
const acccontent=document.querySelector('#accolades-content')
about.addEventListener('click',()=>{
    const aboutbox =new WinBox({
        title:'About Me',
        width:'400px',
        height:'400px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        mount: aboutContent,
        onfocus:function(){
            this.setBackground('#00aa00')
        },
        onblur:function(){
            this.setBackground('#777')
        }
    })
})

skillbox.addEventListener('click',()=>{
    const skill =new WinBox({
        title:'Myskills',
        width:'80%',
        height:'500px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        mount:skillboxcontent,
        onfocus:function(){
            this.setBackground('1793d1')
        },
        onblur:function(){
            this.setBackground('#777')
        }
    })
})

acc.addEventListener('click',()=>{
    const acco =new WinBox({
        title:'Accolades',
        width:'80%',
        height:'500px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        mount:acccontent,
        onfocus:function(){
            this.setBackground('1793d1')
        },
        onblur:function(){
            this.setBackground('#777')
        }
    })
})


ctf.addEventListener('click',()=>{
    const ctfbox =new WinBox({
        title:'Capture The Flags',
        width:'400px',
        height:'400px',
        top:150,
        right:50,
        bottom:50,
        left:700,
        mount: ctfcontent,
        onfocus:function(){
            this.setBackground('#bec404')
        },
        onblur:function(){
            this.setBackground('#777')
        }
    })
})

const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);