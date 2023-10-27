app.canvas = document.getElementById('c');
const ctx = app.canvas.getContext('2d');

app.canvas.width = window.innerWidth;
app.canvas.height = window.innerHeight;

app.drawBackground = function(){
    const particles = [];
    const particleColors = ['white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    
    function createParticle() {
        const x = Math.random() * app.canvas.width;
        const y =  app.canvas.height;
        const radius = Math.random() * 4 + 1;
        const color = particleColors[Math.floor(Math.random() * particleColors.length)];
        particles.push({ x, y, radius, color, speed: Math.random() });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);
        particles.forEach((particle, index) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = particle.color;
            ctx.fill();
            particles[index].y -= particle.speed;
            if (particle.y - particle.radius < 0) {
                particles.splice(index, 1);
            }
        });
    }

    function animate() {
        createParticle();
        drawParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', function () {
        app.canvas.width = this.window.innerWidth;
        app.canvas.height = this.window.innerHeight
    });


    animate();
}



