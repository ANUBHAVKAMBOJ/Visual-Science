let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.lineWidth = "5";
    
    let circle={
        radius:200,
        x:400,
        y:250,
        angle:0
    }
    //for making path of circular motion
    function drawCircle(){
        ctx.beginPath();
        ctx.strokeStyle="black"
        ctx.setLineDash([5,5]);
        ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI,true);
        ctx.stroke();
        ctx.closePath();
    }
    

    let ball={
        radius: 20,
        x:0,
        y:0,
        speed:0.1
    }

    function draw(ang, v){
        //drawing and animating ball
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        drawCircle();
        ctx.setLineDash([0,0]);
        ctx.beginPath();
        ball.x= circle.x+circle.radius*Math.cos(circle.angle);
        ball.y= circle.y+circle.radius*Math.sin(circle.angle);
        ctx.arc(ball.x,ball.y,20,0,2*Math.PI);
        circle.angle+=ball.speed;
        ctx.fillStyle="black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath()
        ctx.moveTo(ball.x,ball.y)
        ctx.lineTo(circle.x,circle.y);
        ctx.stroke();
        ctx.closePath();

        // let newangle = circle.angle+3*ball.speed;
        // let newx= circle.x+circle.radius*Math.cos(newangle);
        // let newy= circle.y+circle.radius*Math.sin(newangle);
        // ctx.beginPath()
        // ctx.strokeStyle="black"
        // ctx.moveTo(ball.x,ball.y);
        // ctx.lineTo(newx,newy);
        // ctx.stroke()
        // ctx.closePath()

        //line from center to circumference
        ctx.beginPath();
        ctx.moveTo(circle.x,circle.y);
        ctx.lineTo(circle.x+circle.radius,circle.y);
        ctx.stroke()
        ctx.closePath()

        //tangent
        ctx.beginPath();
        ctx.moveTo(canvas.width/2+circle.radius,canvas.height/2-50);
        ctx.lineTo(canvas.width/2+circle.radius,canvas.height/2+150)
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(circle.x,circle.y,10,0,2*Math.PI)
        ctx.stroke()
        ctx.fillStyle="black"
        ctx.fill();
        ctx.closePath();

        ctx.font="30px monospace"
        ctx.fillText("a=rω^2", canvas.width/2+ball.radius,canvas.height/2-25)
        ctx.font="30px monospace"
        ctx.fillText("v=rω", canvas.width/2+ball.radius+200,canvas.height/2+150)
        ctx.font="60px monospace"
        ctx.fillText("◄",canvas.width/2+125,canvas.height/2-33)
        ctx.font="50px monospace"
        ctx.fillText("▼",canvas.width/2+circle.radius-14,canvas.height/2+160)
       

    }

    drawCircle()

    let radius = document.getElementById('radius').value
    let ang = document.getElementById('angular').value

    let Interval = null
    let val = null

    document.getElementById('visualizeBtn').addEventListener('click', () => {

        let radius = document.getElementById('radius').value
        let ang = document.getElementById('angular').value

        if(Interval){
            clearInterval(Interval)
            
            circle.radius = radius
            ball.speed = radius*ang/200

            console.log(circle.radius)
            console.log(ball.speed)
        }

        Interval = setInterval(draw, 200);
    })
