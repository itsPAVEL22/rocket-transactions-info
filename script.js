async function fetchTransaction() {
    const phone = document.getElementById('rocketNumber').value;
    if (!phone) {
        alert("Please enter a Rocket number!");
        return;
    }
    const url = `https://unknownx.top/rocket_pdf.php?phone=${phone}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('result').innerText = data;
    } catch (error) {
        document.getElementById('result').innerText = "Error fetching data. Please try again later.";
        console.error("Fetch error:", error);
    }
}
