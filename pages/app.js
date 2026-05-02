async function optimizePrompt() {
    const input = document.getElementById("input").value;

    const res = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
    });

    const data = await res.json();

    document.getElementById("output").innerText = data.optimized;
}
