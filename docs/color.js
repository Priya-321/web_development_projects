
const button = document.querySelectorAll('.buttons');

const colorPalettes = {
    Sunset: ["#FF6B6B", "#FF7D7D", "#FF9999", "#FFB3B3", "#FFD6D6"],
    Nature: ["#556B2F", "#6B8E23", "#77A35B", "#A2C579", "#CDE8B5"],
    Ocean: ["#0D3B66", "#144272", "#2B6CB0", "#82AFFF", "#BBDDFB"],
    Monochrome: ["#222222", "#444444", "#666666", "#888888", "#AAAAAA"],
    Candy: ["#FF6B6B", "#FFE66D", "#4472CA", "#A5FFD6", "#FFB6C1"],
    Forest: ["#2C6E49", "#4D9147", "#68B843", "#88C75F", "#A7D76A"],
    Lavender: ["#8E44AD", "#9B59B6", "#BB8FCE", "#D2A7F1", "#E1C8F6"],
    Autumn: ["#FF7043", "#FF8C42", "#FFA34D", "#FFB567", "#FFD380"],
    Sky: ["#00BFFF", "#87CEFA", "#ADD8E6", "#B0E0E6", "#B0C4DE"],
    Peach: [ "#FF7F50", "#FF8247","#FF9966","#FFB380", "#FFCC99"],
    Rose: ["#8B0000", "#A40000", "#C30000", "#E60000", "#FF3333"],
    Lime: ["#A1C935", "#8DCE31", "#82D848", "#74E54F", "#63F151"]
};


function updatePalette(color){
    const paletteContaiiner = document.getElementById("palette");
    paletteContaiiner.innerHTML = "";

    color.forEach((colors) => {
        const section = document.createElement('div');
        section.className = "section"
        section.style.backgroundColor = colors;
        
        const colorCodeButton = document.createElement('button');
        colorCodeButton.innerHTML = colors;
        colorCodeButton.className = "color-code-button";

        colorCodeButton.addEventListener("click", () => {
            navigator.clipboard.writeText(colors).then(() => {
                alert(`copied to clipboard!`);
                }).catch(err => {
                    console.error('Failed to copy color code: ', err);
                });
        });
        section.appendChild(colorCodeButton);

        paletteContaiiner.appendChild(section);

    });
}

button.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        const paletteName = buttons.id;
        const color = colorPalettes[paletteName];
        updatePalette(color);
    });
});