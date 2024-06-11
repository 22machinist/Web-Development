const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

let isJumping = false;
let gravity = 0.9;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (!isJumping) {
            jump();
        }
    }
});

function jump() {
    let position = 0;
    let timerId = setInterval(function() {
        // Jump up
        if (position >= 150) {
            clearInterval(timerId);
            // Fall down
            let downTimerId = setInterval(function() {
                if (position <= 0) {
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 5;
                position = position * gravity;
                dino.style.bottom = position + 'px';
            }, 20);
        }
        isJumping = true;
        position += 30;
        position = position * gravity;
        dino.style.bottom = position + 'px';
    }, 20);
}

let cactusInterval = setInterval(function() {
    let cactusPosition = 800;
    let randomTime = Math.random() * 4000;

    let cactusTimerId = setInterval(function() {
        // Game Over
        if (cactusPosition > 0 && cactusPosition < 60 && dino.style.bottom.replace('px', '') < 50) {
            clearInterval(cactusTimerId);
            alert('Game Over');
            clearInterval(cactusInterval);
            location.reload();
        }
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
    }, 20);

    setTimeout(function() {
        cactus.style.display = 'block';
    }, randomTime);
}, 2000);
