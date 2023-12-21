const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas.width = 800;
// canvas.height = 500;

ctx.fillStyle = 'skyblue';
ctx.fillRect(30,30,canvas.width,canvas.height);

function line(x1,x2,y1,y2){
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

class Projectile{

    constructor(x,y,u,angle,g){
        this.x = x;
        this.y = y;
        this.u = u;
        this.angle = angle;
        this.g = g;
    }

    // Projectile equation - Getting y coordinate
    gety(x){
        return x*Math.tan(this.angle) - this.g*(x**2)/(2*(this.u**2)*(Math.cos(this.angle)**2));
    }

    arr = [];

    // Drawing projectile line
    draw(){
        let range = (this.u**2)*Math.sin(2*this.angle)/this.g;
        ctx.fillStyle = "lightskyblue";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        line(this.x,this.x,this.y,this.y-190);
        this.arr[0] = 0;
        
        let c = 0;
        for(let i=1;c<=range;i++){
            c += 5;
            this.arr.push(c);
        }
    
        for(let i=0;i<this.arr.length-1;i++){
            let y1 = this.arr[i]*Math.tan(this.angle) - this.g*(this.arr[i]**2)/(2*(this.u**2)*(Math.cos(this.angle)**2));
            let y2 = (this.arr[i+1])*Math.tan(this.angle) - this.g*(this.arr[i+1]**2)/(2*(this.u**2)*(Math.cos(this.angle)**2));
    
            line(this.x+this.arr[i], this.x+this.arr[i+1],this.y-y1, this.y-y2);
        }
    }
    
    // Make instance of ball drawing
    perform(val){
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(this.x+val, this.y-this.gety(val), 10, 0, Math.PI*2, true);
        ctx.fill();
        ctx.closePath();
    }

    // Method to perform ball action
    i = 0;
    start(){
        this.interval = setInterval(() => {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            this.draw();
    
            this.perform(this.arr[this.i]);
            if(this.i==this.arr.length-1){
                clearInterval(this.interval);
            }
            this.i++;
        });
    }

    stop(){
        if(this.interval){
            clearInterval(this.interval)
        }
    }
}




let action = null




const vel = document.getElementById('velocity').value
const angle = document.getElementById('angle').value
const acc = document.getElementById('acc').value

document.getElementById('visualizeBtn').addEventListener('click', () => {

    

    if(action){
        action.stop();
    }

    const vel = document.getElementById('velocity').value
    const angle = document.getElementById('angle').value
    const acc = document.getElementById('acc').value

    console.log(vel)
    console.log(angle)
    console.log(acc)

    action = new Projectile(25,canvas.height-25,vel,angle,acc);

    action.draw();
    action.start();
})


