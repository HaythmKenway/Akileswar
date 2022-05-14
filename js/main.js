const about=document.querySelector('#about')
const contact=document.querySelector('#contact')
const aboutContent=document.querySelector('#about-content')
const contactContent=document.querySelector('#Contact-me')
const ctf=document.querySelector('#ctf')
const ctfcontent=document.querySelector("#ctf-content")
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

contact.addEventListener('click',()=>{
    const contactbox =new WinBox({
        title:'Contact Me',
        width:'400px',
        height:'400px',
        top:150,
        right:50,
        bottom:50,
        left:150,
        mount: contactContent,
        onfocus:function(){
            this.setBackground('#00aa00')
        },
        onblur:function(){
            this.setBackground('#777')
        }
    })
})

ctf.addEventListener('click',()=>{
    const contactbox =new WinBox({
        title:'Capture The Flags',
        width:'400px',
        height:'400px',
        top:150,
        right:50,
        bottom:50,
        left:700,
        mount: ctfcontent,
        onfocus:function(){
            this.setBackground('#00aa00')
        },
        onblur:function(){
            this.setBackground('#777')
        }
    })
})