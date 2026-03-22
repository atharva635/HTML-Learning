// -------------------- 1️⃣ Canvas Setup --------------------
const canvas = document.getElementById("flappyc");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;

// -------------------- 2️⃣ Bird Variables --------------------
let birdY = 200;      // Bird's vertical position
let velocity = 0;     // Bird's speed
const gravity = 0.6;  // Pulls bird down
const jump = -8;      // Upward force when space is pressed

// -------------------- 3️⃣ Draw Bird --------------------
function drawBird() {
    ctx.beginPath();                   // Start new shape
    ctx.arc(100, birdY, 15, 0, Math.PI*2); // Draw circle (x=100, y=birdY, radius=15)
    ctx.fillStyle = "yellow";          // Fill color
    ctx.fill();                        // Make it visible
}

// -------------------- 4️⃣ Update Bird Physics --------------------
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear old frame

    velocity += gravity;       // Gravity pulls bird down
    birdY += velocity;         // Update bird's position

    // Prevent bird from falling off bottom
    if (birdY + 15 > canvas.height) {
        birdY = canvas.height - 15;
        velocity = 0;
    }

    drawBird();                // Draw bird at new position

    requestAnimationFrame(update); // Repeat every frame (~60fps)
}

// -------------------- 5️⃣ Jump on Spacebar --------------------
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        velocity = jump;       // Apply upward force
    }
});

// -------------------- 6️⃣ Start the Game --------------------
update();  // Begin animation loop
