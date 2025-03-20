document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    const pickedColor = document.getElementById("pickedColor");
    const generateBtn = document.getElementById("generateBtn");
    const palette = document.getElementById("palette");

    // Update picked color display
    colorPicker.addEventListener("input", () => {
        pickedColor.textContent = colorPicker.value.toUpperCase();
    });

    // Generate a random color
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    // Generate a color palette
    function generatePalette() {
        palette.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            let color = getRandomColor();
            let colorBox = document.createElement("div");
            colorBox.className = "color-box";
            colorBox.style.backgroundColor = color;
            colorBox.setAttribute("data-color", color);
            colorBox.addEventListener("click", copyColor);
            palette.appendChild(colorBox);
        }
    }

    // Copy color code to clipboard
    function copyColor(event) {
        const color = event.target.getAttribute("data-color");
        navigator.clipboard.writeText(color).then(() => {
            alert(`Copied: ${color}`);
        });
    }

    generateBtn.addEventListener("click", generatePalette);
});
