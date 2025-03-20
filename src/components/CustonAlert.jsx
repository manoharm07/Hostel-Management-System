// custom alert which vanishes after 3 seconds
function CustomAlert(message) {
    let alertBox = document.createElement("div");
    alertBox.textContent = message;
    
    alertBox.style.position = "fixed";
    alertBox.style.top = "10px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.backgroundColor = "#f8f8f8";
    alertBox.style.color = "white";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.fontSize = "16px";
    alertBox.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    alertBox.style.zIndex = "1000";
    
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.remove();
    }, 1000);
}