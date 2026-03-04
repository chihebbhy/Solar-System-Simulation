
class Planet {
    constructor(mass, radius, position, velocity, acceleration, color) {
        this.mass = mass;
        this.radius = radius;
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.color = color;

    }

    draw(c) {
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }

}


let canvas = document.getElementById("canvas");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
let c = canvas.getContext("2d");

let halfScreen = { x: canvas.width / 2, y: canvas.height / 2 };
let halfScreenX = canvas.width / 2;
let halfScreenY = canvas.height / 2;
let sun = new Planet(10000, 40, halfScreen, { x: 0, y: 0 }, { x: 0, y: 0 }, "orange");
let mercury = new Planet(0.05, 5, { x: halfScreenX + 80, y: halfScreenY }, { x: 0, y: 0.12 }, { x: 0, y: 0 }, "gray");
let venus = new Planet(0.8, 8, { x: halfScreenX + 110, y: halfScreenY }, { x: 0, y: 0.095 }, { x: 0, y: 0 }, "#e6c27a");
let earth = new Planet(1, 9, { x: halfScreenX + 150, y: halfScreenY }, { x: 0, y: 0.082 }, { x: 0, y: 0 }, "deepskyblue");
let mars = new Planet(0.1, 7, { x: halfScreenX + 190, y: halfScreenY }, { x: 0, y: 0.072 }, { x: 0, y: 0 }, "orangered");
let jupiter = new Planet(300, 10, { x: halfScreenX + 260, y: halfScreenY }, { x: 0, y: 0.062 }, { x: 0, y: 0 }, "burlywood");
let G = 0.0001;
let planets = [sun, mercury, venus, earth, mars, jupiter];

function update(dt) {
    for (const planet of planets) {
        planet.acceleration.x = 0;
        planet.acceleration.y = 0;
    }
    for (const planet1 of planets) {
        for (const planet2 of planets) {
            if (planet1 == planet2) continue;
            let dx = planet2.position.x - planet1.position.x;
            let dy = planet2.position.y - planet1.position.y;

            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < planet1.radius + planet2.radius) continue;
            let nx = dx / distance;
            let ny = dy / distance;

            let force = G * planet2.mass / (distance * distance);

            planet1.acceleration.x += force * nx;
            planet1.acceleration.y += force * ny;


        }
        planet1.velocity.x += planet1.acceleration.x * dt;
        planet1.velocity.y += planet1.acceleration.y * dt;

        planet1.position.x += planet1.velocity.x * dt;
        planet1.position.y += planet1.velocity.y * dt;
    }
}
function animate(dt) {
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "rgba(5, 5, 25, 0.1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    update(dt);
    //console.log(sun.velocity, earth.velocity);
    console.log(sun.acceleration, earth.acceleration);
    for (const planet of planets) planet.draw(c);


}


let lastTime = 0;
const fps = 60;
const timestep = 1000 / fps;
const timeScale = 1500;
function loop(time) {
    requestAnimationFrame(loop);
    const delta = time - lastTime;
    if (delta < timestep) return; // enforce 60 fps
    lastTime = time;

    animate(delta / 1000 * timeScale);

}
requestAnimationFrame(loop);

