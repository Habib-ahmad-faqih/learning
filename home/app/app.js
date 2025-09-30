document.getElementById("btm-cta").addEventListener("click", async () => {
    let res = await
    fetch("http://127.10.0.1:3000/api/halo");
    let data = await res.json();

document.getElementById("hasil").innerText = data.pesan
})