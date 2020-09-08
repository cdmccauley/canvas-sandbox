// https://www.redblobgames.com/grids/hexagons/

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = '#333';

function Hex(centerX, centerY) {
    const size = 20;
    const hexHeight = 2 * size;
    const hexWidth = Math.sqrt(3) * size;
    this.center = {
        x: centerX,
        y: centerY,
    };
    this.top = {
        x: centerX,
        y: centerY - hexHeight,
    };
    this.bottom = {
        x: centerX,
        y: centerY + hexHeight,
    };
    this.topL = {
        x: centerX - hexWidth,
        y: centerY - hexHeight / 2,
    };
    this.bottomL = {
        x: centerX - hexWidth,
        y: centerY + hexHeight / 2,
    };;
    this.topR = {
        x: centerX + hexWidth,
        y: centerY - hexHeight / 2,
    };;
    this.bottomR = {
        x: centerX + hexWidth,
        y: centerY + hexHeight / 2,
    };;
    
    this.drawPoints = () => {
        console.log()
        ctx.fillStyle = 'white';
        // center
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        // top
        ctx.beginPath();
        ctx.arc(this.top.x, this.top.y, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        // bottom
        ctx.beginPath();
        ctx.arc(this.bottom.x, this.bottom.y, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        // top left
        ctx.beginPath();
        ctx.arc(this.topL.x, this.topL.y, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        // bottom left
        ctx.beginPath();
        ctx.arc(this.bottomL.x, this.bottomL.y, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        // top right
        ctx.beginPath();
        ctx.arc(this.topR.x, this.topR.y, 2, 0, 2 * Math.PI, true);
        ctx.fill();
        // bottom right
        ctx.beginPath();
        ctx.arc(this.bottomR.x, this.bottomR.y, 2, 0, 2 * Math.PI, true);
        ctx.fill();
    }
}

let drawCenter = (width, height) => {
        let center = new Hex(width / 2, height / 2);
        center.drawPoints();
    }

let fillWindow = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    drawCenter(width, height);
};

window.addEventListener('load', fillWindow);
window.addEventListener('resize', fillWindow, false);