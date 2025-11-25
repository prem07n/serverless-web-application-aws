document.getElementById("dataForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const payload = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value
    };

    try {
        const res = await fetch("YOUR_API_GATEWAY_URL", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const output = await res.json();
        document.getElementById("response").innerHTML = "✔ " + output.message;

    } catch (err) {
        document.getElementById("response").innerHTML = "❌ Error sending data!";
        console.log(err);
    }
});
