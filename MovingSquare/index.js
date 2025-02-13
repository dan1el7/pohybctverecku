class Ctverecek {
    constructor(ctverecekId, souradniceId, step = 5, poziceX = 135, poziceY = 135) {
        this.ctverecek = document.getElementById(ctverecekId);
        this.souradnice = document.getElementById(souradniceId);
        this.step = step;
        this.x = poziceX;
        this.y = poziceY;

        this.init();
    }

    init() {
        document.addEventListener("keydown", (event) => this.pohyb(event));
        this.ZmenaPozice();
    }

    pohyb(event) {
        switch (event.key) {
            case "w":
                if (this.y > 0) this.y -= this.step;
                break;
            case "s":
                if (this.y < 270) this.y += this.step;
                break;
            case "a":
                if (this.x > 0) this.x -= this.step;
                break;
            case "d":
                if (this.x < 270) this.x += this.step;
                break;
            default:
                return;
        }
        this.ZmenaPozice();
    }

    ZmenaPozice() {
        this.ctverecek.style.top = `${this.y}px`;
        this.ctverecek.style.left = `${this.x}px`;
        this.souradnice.textContent = `${this.x}, ${this.y}`;
    }
}

const ctverecek = new Ctverecek("ctverecek", "souradnice");
