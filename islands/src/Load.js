export default class Load{
    constructor(){
        document.querySelector('.load').addEventListener('click', (e) =>{
            const savedIslandsData = JSON.parse(localStorage.getItem("savedIslands"));
            if (savedIslandsData) {
              savedIslandsData.forEach((islandData) => {
                this.createIslandWithColor(islandData.color);
              });
            }
        })
    }

    createIslandWithColor(color) {
        const div = document.createElement("div");
        div.classList.add("island");
        div.style.backgroundColor = color;
        document.body.appendChild(div);

        const coords = this.getRandomCoords();
        div.animate([
        {transform: `translate(0px, 0px)`},
        {transform: `translate(${coords.x}px, ${coords.y}px)`}
        ], {
        duration: 1000,
        iterations: 1,
        fill: "forwards"
        });
    }

    getRandomCoords() {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        return {x, y};
    }
}