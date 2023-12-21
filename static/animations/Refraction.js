// export class Refraction{
//     constructor(canvas,width=400,height=400){
//         this.canvas = canvas;
//         this.canvas.width = width;
//         this.canvas.height = height;
//         this.ctx = this.canvas.getContext("2d");
//     }

//     getdistance(x1,y1,x2,y2){
//         return Math.sqrt((x1-x2)**2+(y1-y2)**2);
//     }

//     draw(x,y,rim1,rim2){
//         // Upper half of the canvas
//         this.ctx.beginPath();
//         this.ctx.fillStyle = "lightgrey";
//         this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height/2);
//         this.ctx.closePath();

//         // lower canvas 
//         this.ctx.beginPath();
//         this.ctx.fillStyle = "skyblue";
//         this.ctx.fillRect(0,this.canvas.height/2,this.canvas.width,this.canvas.height);
//         this.ctx.closePath();

//         // draw begin point
//         let radius = 3;
//         this.ctx.beginPath();
//         this.ctx.fillStyle = "black";
//         this.ctx.arc(x,y,radius,0,2*Math.PI,true);
//         this.ctx.fill();
//         this.ctx.closePath();

//         // Normal of the center of the canvas
//         this.ctx.beginPath();
//         this.ctx.fillStyle = "black";
//         this.ctx.setLineDash([5,5]);
//         this.ctx.moveTo(this.canvas.width/2,0);
//         this.ctx.lineTo(this.canvas.width/2,this.canvas.height);
//         this.ctx.stroke();
//         this.ctx.closePath();

//         // incidence ray
//         this.ctx.beginPath();
//         this.ctx.moveTo(x,y);
//         this.ctx.setLineDash([0,0]);
//         this.ctx.lineWidth = 1.5;
//         this.ctx.lineTo(this.canvas.width/2,this.canvas.height/2);
//         this.ctx.stroke();
//         this.ctx.closePath();

//         // Text -1
//         this.ctx.beginPath();
//         this.ctx.font = "20px monospace";
//         this.ctx.strokeText(`Medium-1 RI=${rim1.toFixed(2)}`,10,30,200);
//         this.ctx.stroke();
//         this.ctx.closePath();
        
//         // Text -2
//         this.ctx.beginPath();
//         this.ctx.font = "20px monospace";
//         this.ctx.strokeText(`Medium-2 RI=${rim2}` ,10,this.canvas.height - 30,200);
//         this.ctx.stroke();
//         this.ctx.closePath();
        
//         // Final point object calculations
//         let perpendicular = this.canvas.width/2 - x;
//         let hypotaneous = this.getdistance(x,y,this.canvas.width/2,this.canvas.height/2);
//         let angle = Math.asin(perpendicular/hypotaneous);
//         let refractedangle = Math.asin(Math.sin(angle)*rim1/rim2);
//         this.ctx.beginPath();
//         this.ctx.fillStyle = "black";
//         this.ctx.moveTo(this.canvas.width/2,this.canvas.height/2);
//         this.ctx.lineTo(this.canvas.width/2+hypotaneous*Math.sin(refractedangle),this.canvas.height/2+hypotaneous*Math.cos(refractedangle));
//         this.ctx.stroke();
//         this.ctx.closePath();

//         // Final Object drawn
//         this.ctx.beginPath();
//         this.ctx.arc(this.canvas.width/2+hypotaneous*Math.sin(refractedangle),this.canvas.height/2+hypotaneous*Math.cos(refractedangle),radius,0,2*Math.PI,true);
//         this.ctx.fill();
//         this.ctx.closePath();

//         // Measure Angle Incident
//         // this.ctx.beginPath();
//         // this.ctx.lineWidth = 2;
//         // this.ctx.arc(this.canvas.width/2,this.canvas.height/2,30,3*Math.PI/2-angle,3*Math.PI/2,false);
//         // this.ctx.stroke();
//         // this.ctx.closePath();

//         // Theta Incident
//         // this.ctx.beginPath();
//         // this.ctx.lineWidth = 1.5;
//         // this.ctx.font = "20px monospace";
//         // this.ctx.strokeText(`${(angle*180/Math.PI).toFixed(2)}` ,this.canvas.width/2-30,this.canvas.height/2 - 40,200);
//         // this.ctx.stroke();
//         // this.ctx.closePath();
        
//         // Measure Angle Refracted 
//         // this.ctx.beginPath();
//         // this.ctx.lineWidth = 2;
//         // this.ctx.arc(this.canvas.width/2,this.canvas.height/2,30,Math.PI/2-refractedangle,Math.PI/2,false);
//         // this.ctx.fill();
//         // this.ctx.stroke();
//         // this.ctx.closePath();
        
//         // Theta Refracted
//         // this.ctx.beginPath();
//         // this.ctx.lineWidth = 1.5;
//         // this.ctx.font = "20px monospace";
//         // this.ctx.strokeText(`${(refractedangle*180/Math.PI).toFixed(2)}` ,this.canvas.width/2+30,this.canvas.height/2 + 40,200);
//         // this.ctx.stroke();
//         // this.ctx.closePath();
//     }
// }

// let r = new Refraction(document.querySelector("canvas"),400,400);
// let distance = 50;
// let Interval = setInterval(()=>{
//     if(distance<0){
//         distance = 200;
//     }
//     r.draw(r.canvas.width/2-distance,150,4/3,2);
//     distance-=10;
// },1000);




export class Refraction{
    constructor(canvas,width=400,height=400){
        this.canvas = canvas;
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
    }

    getdistance(x1,y1,x2,y2){
        return Math.sqrt((x1-x2)**2+(y1-y2)**2);
    }

    draw(x,y,rim1,rim2){
        // Upper half of the canvas
        this.ctx.beginPath();
        this.ctx.fillStyle = "lightgrey";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height/2);
        this.ctx.closePath();

        // lower canvas 
        this.ctx.beginPath();
        this.ctx.fillStyle = "skyblue";
        this.ctx.fillRect(0,this.canvas.height/2,this.canvas.width,this.canvas.height);
        this.ctx.closePath();

        // draw begin point
        let radius = 3;
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.arc(x,y,radius,0,2*Math.PI,true);
        this.ctx.fill();
        this.ctx.closePath();

        // Normal of the center of the canvas
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.setLineDash([5,5]);
        this.ctx.moveTo(this.canvas.width/2,0);
        this.ctx.lineTo(this.canvas.width/2,this.canvas.height);
        this.ctx.stroke();
        this.ctx.closePath();

        // incidence ray
        this.ctx.beginPath();
        this.ctx.moveTo(x,y);
        this.ctx.setLineDash([0,0]);
        this.ctx.lineWidth = 1.5;
        this.ctx.lineTo(this.canvas.width/2,this.canvas.height/2);
        this.ctx.stroke();
        this.ctx.closePath();

        // Text -1
        this.ctx.beginPath();
        this.ctx.font = "20px monospace";
        this.ctx.strokeText(`Medium-1 RI=${rim1.toFixed(2)}`,10,30,200);
        this.ctx.stroke();
        this.ctx.closePath();
        
        // Text -2
        this.ctx.beginPath();
        this.ctx.font = "20px monospace";
        this.ctx.strokeText(`Medium-2 RI=${rim2.toFixed(2)}` ,10,this.canvas.height - 30,200);
        this.ctx.stroke();
        this.ctx.closePath();
        
        // Final point object calculations
        let perpendicular = this.canvas.width/2 - x;
        let hypotaneous = this.getdistance(x,y,this.canvas.width/2,this.canvas.height/2);
        let angle = Math.asin(perpendicular/hypotaneous);
        let refractedangle = Math.asin(Math.sin(angle)*rim1/rim2);
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.moveTo(this.canvas.width/2,this.canvas.height/2);
        this.ctx.lineTo(this.canvas.width/2+hypotaneous*Math.sin(refractedangle),this.canvas.height/2+hypotaneous*Math.cos(refractedangle));
        this.ctx.stroke();
        this.ctx.closePath();

        // Final Object drawn
        this.ctx.beginPath();
        this.ctx.arc(this.canvas.width/2+hypotaneous*Math.sin(refractedangle),this.canvas.height/2+hypotaneous*Math.cos(refractedangle),radius,0,2*Math.PI,true);
        this.ctx.fill();
        this.ctx.closePath();

        // Measure Angle Incident
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.arc(this.canvas.width/2,this.canvas.height/2,30,3*Math.PI/2-angle,3*Math.PI/2,false);
        this.ctx.stroke();
        this.ctx.closePath();

        // Theta Incident
        this.ctx.beginPath();
        this.ctx.lineWidth = 1.5;
        this.ctx.font = "20px monospace";
        this.ctx.strokeText(`${(angle*180/Math.PI).toFixed(2)}` ,this.canvas.width/2-30,this.canvas.height/2 - 40,200);
        this.ctx.stroke();
        this.ctx.closePath();
        
        // Measure Angle Refracted 
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.arc(this.canvas.width/2,this.canvas.height/2,30,Math.PI/2-refractedangle,Math.PI/2,false);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        
        // Theta Refracted
        this.ctx.beginPath();
        this.ctx.lineWidth = 1.5;
        this.ctx.font = "20px monospace";
        this.ctx.strokeText(`${(refractedangle*180/Math.PI).toFixed(2)}` ,this.canvas.width/2+30,this.canvas.height/2 + 40,200);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

let r = new Refraction(document.querySelector("canvas"),500,500);
let distance = 170;

// const RI_1 = document.getElementById("RI_1")
// const RI_2 = document.getElementById("RI_2")

// Upper half of the canvas
r.ctx.beginPath();
r.ctx.fillStyle = "lightgrey";
r.ctx.fillRect(0,0,r.canvas.width,r.canvas.height/2);
r.ctx.closePath();

// lower canvas 
r.ctx.beginPath();
r.ctx.fillStyle = "skyblue";
r.ctx.fillRect(0,r.canvas.height/2,r.canvas.width,r.canvas.height);
r.ctx.closePath();

// Normal of the center of the canvas
r.ctx.beginPath();
r.ctx.fillStyle = "black";
r.ctx.setLineDash([5,5]);
r.ctx.moveTo(r.canvas.width/2,0);
r.ctx.lineTo(r.canvas.width/2,r.canvas.height);
r.ctx.stroke();
r.ctx.closePath();

let val = null
let ri1
let ri2

document.getElementById('visualizeBtn').addEventListener("click",()=>{

    const RI_1 = document.getElementById("RI_1")
    const RI_2 = document.getElementById("RI_2")

    if(val){
        clearInterval(val)
        distance = -1
        ri1 = RI_1.value
        ri2 = RI_2.value
    }

    

    val = setInterval(()=>{
        if(distance<0){
            distance = 200;
        }
        r.draw(r.canvas.width/2-distance,150,Number(ri1),Number(ri2));
        distance-=10;
    },1000);
})







