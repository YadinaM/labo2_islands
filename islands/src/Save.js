import Island from "./Island.js"

export default class Save{
    constructor(){

        document.querySelector('.save').addEventListener('click', (e) => {
            const islandElements = document.querySelectorAll(".island");
            const islandsData = [];

            islandElements.forEach((islandElement) => {
                const islandData = {
                  color: islandElement.style.backgroundColor,
                };
                islandsData.push(islandData);
              });
              localStorage.setItem("islands", JSON.stringify(islandsData));
              console.log("Islands saved to localStorage:", islandsData);
        })
    }
}
