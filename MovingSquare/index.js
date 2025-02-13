    const ctverecek = document.getElementById("ctverecek"); // ctverecek
    const souradnice = document.getElementById("souradnice"); // souradnice

    const step = 5; //rychlost
    let x = 135;
    let y = 135; //aby se pri spusteni kostka spawnula uprostred

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "w":
                if (y > 0) y -= step;
                break;
            case "s":
                if (y < 270) y += step; //270 protoze border je 300x300 a ctverecek ma 30px
                break;
            case "a":
                if (x > 0) x -= step;
                break;
            case "d":
                if (x < 270) x += step;
                break;
            default:
                return;
        }

        // Aktualizace pozice čtverečku
        ctverecek.style.top = `${y}px`;
        ctverecek.style.left = `${x}px`;

        souradnice.textContent = `${x}, ${y}`; //aktualizuje souradnice
    });
