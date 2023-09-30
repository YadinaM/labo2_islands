export default class Island{

    getRandomCoords(){
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);
        return{x,y};
    }

    getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    constructor(){

        document.querySelector(".add").addEventListener('click', (e) => {
            let div = document.createElement("div");
            div.classList.add("island");
            div.style.backgroundColor = this.getRandomColor();
            document.body.appendChild(div);
            console.log(div);


            let coords = this.getRandomCoords();
            console.log(coords.x);
            div.animate([
                {transform: `translate(0px, 0px)`},
                {transform: `translate(${coords.x}px, ${coords.y}px)`}
            ], {
                duration: 1000,
                iterations: 1,
                fill: "forwards"
            });
        })
    }
}