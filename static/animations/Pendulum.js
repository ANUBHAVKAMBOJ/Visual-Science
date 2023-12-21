// export default class Pendulum{
//     constructor(canvas,width=800,height=600){
//         this.canvas = canvas
//         this.ctx = this.canvas.getContext("2d")
//         this.canvas.width = width
//         this.canvas.height = height
//         this.currentAngle = 0
//         this.maxAngle =60
//         this.animationInterval = null
//         this.delta = 1
//     }
    
//     setUp(currentAngle = 0,maxAngle = 60){
//         this.currentAngle = currentAngle
//         this.maxAngle = maxAngle
//         this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
//         this.ctx.fillStyle = "rgba(0,0,0,0.1)"

//         this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
//         if(currentAngle>maxAngle){
//             currentAngle = maxAngle
//         }
//         if(currentAngle<-maxAngle){
//             currentAngle = -maxAngle
//         }
//         // pivot point and platform
//         this.ctx.fillStyle="black"
//         this.ctx.beginPath()
//         this.ctx.arc(this.canvas.width/2,5,5,0,Math.PI*2,true)
//         this.ctx.fill()
//         this.ctx.closePath()
        
//         // string of pendulum
//         let length = this.canvas.height/2
//         this.ctx.beginPath()
//         this.ctx.setLineDash([0,0])
//         this.ctx.moveTo(this.canvas.width/2,0)
//         this.ctx.lineTo(this.canvas.width/2+length*Math.sin(Math.PI*currentAngle/180),length*Math.cos(Math.PI*currentAngle/180))
//         this.ctx.stroke()
//         this.ctx.closePath()

//         //lowest point
//         this.ctx.beginPath()
//         this.ctx.font = "30px monospace"
//         this.ctx.fillText("A",this.canvas.width/2 -8,length +40,50)
//         this.ctx.arc(this.canvas.width/2,length,5,0,Math.PI*2,true)
//         this.ctx.fill()
//         this.ctx.closePath()

//         this.ctx.beginPath()
//         this.ctx.font = "30px monospace"
//         this.ctx.fillText("B",this.canvas.width/2+length*Math.sin(Math.PI*maxAngle/180) + 20,length*Math.cos(Math.PI*maxAngle/180) + 40,50)
//         this.ctx.arc(this.canvas.width/2+length*Math.sin(Math.PI*maxAngle/180),length*Math.cos(Math.PI*maxAngle/180),5,0,Math.PI*2,true)
//         this.ctx.fill()
//         this.ctx.closePath()

//         this.ctx.beginPath()
//         this.ctx.font = "30px monospace"
//         this.ctx.fillText("C",this.canvas.width/2+length*Math.sin(-Math.PI*maxAngle/180)-20,length*Math.cos(-Math.PI*maxAngle/180) + 40,50)
//         this.ctx.arc(this.canvas.width/2+length*Math.sin(-Math.PI*maxAngle/180),length*Math.cos(-Math.PI*maxAngle/180),5,0,Math.PI*2,true)
//         this.ctx.fill()
//         this.ctx.closePath()

//         // bob
//         this.ctx.beginPath()
//         this.ctx.arc(this.canvas.width/2+length*Math.sin(Math.PI*currentAngle/180),length*Math.cos(Math.PI*currentAngle/180),15,0,Math.PI*2,true)
//         this.ctx.fill()
//         this.ctx.closePath()
        
//         // dashed path
//         this.ctx.beginPath()
//         this.ctx.setLineDash([5,5])
//         this.ctx.arc(this.canvas.width/2,0,length-0,Math.PI/2-Math.PI*maxAngle/180,Math.PI/2+Math.PI*maxAngle/180)
//         this.ctx.stroke()
//         this.ctx.closePath()
//     }

//     startAnimation(){
//         this.animationInterval = setInterval(()=>{
//             this.setUp(this.currentAngle,this.maxAngle)
//             if(this.currentAngle>this.maxAngle || this.currentAngle<-this.maxAngle){
//                 this.delta = -this.delta
//             }
//             this.currentAngle +=this.delta
//         },10) 
//     }

//     stopAnimation(){
//         if(this.animationInterval){
//             clearInterval(this.animationInterval)
//         }
//     }
// }

// let p = new Pendulum(document.querySelector("canvas"),500,450)
// p.setUp(0,60)
// p.startAnimation()



export default class Pendulum{
    constructor(canvas,width=800,height=600,length,g){
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
        this.canvas.width = width
        this.canvas.height = height
        this.currentAngle = 0
        this.maxAngle =60
        this.animationInterval = null
        this.delta = 1
        this.length = length
        this.g = g
    }
    
    setUp(currentAngle = 0,maxAngle = 60){
        this.currentAngle = currentAngle
        this.maxAngle = maxAngle
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.fillStyle = "rgba(0,0,0,0.1)"

        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
        if(currentAngle>maxAngle){
            currentAngle = maxAngle
        }
        if(currentAngle<-maxAngle){
            currentAngle = -maxAngle
        }
        // pivot point and platform
        this.ctx.fillStyle="black"
        this.ctx.beginPath()
        this.ctx.arc(this.canvas.width/2,5,5,0,Math.PI*2,true)
        this.ctx.fill()
        this.ctx.closePath()
        
        // string of pendulum
        let length = this.length
        this.ctx.beginPath()
        this.ctx.setLineDash([0,0])
        this.ctx.moveTo(this.canvas.width/2,0)
        this.ctx.lineTo(this.canvas.width/2+length*Math.sin(Math.PI*currentAngle/180),length*Math.cos(Math.PI*currentAngle/180))
        this.ctx.stroke()
        this.ctx.closePath()

        //lowest point
        this.ctx.beginPath()
        this.ctx.font = "30px monospace"
        this.ctx.fillText("A",this.canvas.width/2 -8,length +40,50)
        this.ctx.arc(this.canvas.width/2,length,5,0,Math.PI*2,true)
        this.ctx.fill()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.font = "30px monospace"
        this.ctx.fillText("B",this.canvas.width/2+length*Math.sin(Math.PI*maxAngle/180) + 20,length*Math.cos(Math.PI*maxAngle/180) + 40,50)
        this.ctx.arc(this.canvas.width/2+length*Math.sin(Math.PI*maxAngle/180),length*Math.cos(Math.PI*maxAngle/180),5,0,Math.PI*2,true)
        this.ctx.fill()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.font = "30px monospace"
        this.ctx.fillText("C",this.canvas.width/2+length*Math.sin(-Math.PI*maxAngle/180)-20,length*Math.cos(-Math.PI*maxAngle/180) + 40,50)
        this.ctx.arc(this.canvas.width/2+length*Math.sin(-Math.PI*maxAngle/180),length*Math.cos(-Math.PI*maxAngle/180),5,0,Math.PI*2,true)
        this.ctx.fill()
        this.ctx.closePath()

        // bob
        this.ctx.beginPath()
        this.ctx.arc(this.canvas.width/2+length*Math.sin(Math.PI*currentAngle/180),length*Math.cos(Math.PI*currentAngle/180),15,0,Math.PI*2,true)
        this.ctx.fill()
        this.ctx.closePath()
        
        // dashed path
        this.ctx.beginPath()
        this.ctx.setLineDash([5,5])
        this.ctx.arc(this.canvas.width/2,0,length-0,Math.PI/2-Math.PI*maxAngle/180,Math.PI/2+Math.PI*maxAngle/180)
        this.ctx.stroke()
        this.ctx.closePath()
    }

    startAnimation(){
        this.animationInterval = setInterval(()=>{
            this.setUp(this.currentAngle,this.maxAngle)
            if(this.currentAngle>this.maxAngle || this.currentAngle<-this.maxAngle){
                this.delta = -this.delta
            }
            this.currentAngle +=this.delta*this.g/10
        },10) 
    }

    stopAnimation(){
        if(this.animationInterval){
            clearInterval(this.animationInterval)
        }
    }
}

let def = new Pendulum(document.querySelector("canvas"),500,450, 250, 0)
def.setUp(0,60)
def.startAnimation()

document.getElementById('visualizeBtn').addEventListener('click', () => {
    def.stopAnimation()

    let length = document.getElementById('length').value
    let g = document.getElementById('acc').value

    // console.log(length)
    // console.log(g)

    let p = new Pendulum(document.querySelector("canvas"),500,450, length, g)
    p.setUp(0,60)
    p.startAnimation()
    def = p;
})





