 window.addEventListener("load", () =>{
    setTimeout(() =>{
        document.querySelector(".slot-machine").style.display = "block";
        document.querySelector(".loader").style.display = "none";
        document.body.style.backgroundColor = "black";
    }, 14000);
    document.body.style.backgroundColor = "black";
 });
 
 
 const symbols = ["🍒", "🍋", "🔔", "⭐", "💎"];
    const reels = [
        document.getElementById("reel1"),
        document.getElementById("reel2"),
        document.getElementById("reel3")
    ];
    const message = document.getElementById("message");

    function randomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function spin() {
        message.textContent = "";
        message.className = "message";

        // start spinning animation
        reels.forEach(reel => reel.classList.add("spinning"));

        setTimeout(() => {
            reels.forEach(reel => {
                reel.classList.remove("spinning");
                reel.textContent = randomSymbol();
            });

            checkWin();
        }, 1200);
    }

    function checkWin() {
        const [a, b, c] = reels.map(r => r.textContent);

        if (a === b && b === c) {
            message.textContent = "🎉 YOU WIN!";
            message.classList.add("win");
        } else {
            message.textContent = "❌ Try Again";
            message.classList.add("lose");
        }
    }