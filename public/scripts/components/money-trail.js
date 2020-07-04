(function emojiCursor() {
      
    let possibleEmoji = ["💰"];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = {x: width / 2, y: width / 2};
    let particles = [];
  
    const init = () => {
        bindEvents();
        loop();
    };
  
    // Bind events that are needed
    const bindEvents = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchstart', onTouchMove);
    
        window.addEventListener('resize', onWindowResize);
    };
  
    const onWindowResize = (e) => {
        width = window.innerWidth;
        height = window.innerHeight;
    };
  
    const onTouchMove = (e) => {
        if (e.touches.length > 0) {
            for (let i = 0; i < e.touches.length; i++) {
                addParticle(e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]);
            }
        }
    };
  
    const onMouseMove = (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
    
        addParticle(cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]);
    };
  
    const addParticle = (x, y, character) => {
        let particle = new Particle();
        particle.init(x, y, character);
        particles.push(particle);
    };
  
    const updateParticles = () => {
    
        // Updated
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
        }
    
        // Remove dead particles
        for (let i = particles.length - 1; i >= 0; i--) {
            if (particles[i].lifeSpan < 0) {
                particles[i].die();
                particles.splice(i, 1);
            }
        }
    
    };
  
    const loop = () => {
        requestAnimationFrame(loop);
        updateParticles();
    };
  
    /**
   * Particles
   */
  
    const Particle = function() {

        this.lifeSpan = 120; //ms
        this.initialStyles = {
            "position": "fixed",
            "top": "0",
            "display": "block",
            "pointerEvents": "none",
            "z-index": "10000000",
            "fontSize": "24px",
            "will-change": "transform"
        };

        // Init, and set properties
        this.init = function(x, y, character) {

            this.velocity = {
                x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            };
      
            this.position = {x: x - 10, y: y - 20};

            this.element = document.createElement('span');
            this.element.innerHTML = character;
            applyProperties(this.element, this.initialStyles);
            this.update();
      
            document.body.appendChild(this.element);
        };
    
        this.update = function() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;
      
            this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
        };
    
        this.die = function() {
            this.element.parentNode.removeChild(this.element);
        };
    };
  
    /**
   * Utils
   */
  
    // Applies css `properties` to an element.
    const  applyProperties = (target, properties) => {
        for (let key in properties) {
            target.style[ key ] = properties[ key ];
        }
    };
  
    init();
})();