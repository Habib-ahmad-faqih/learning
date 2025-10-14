// document.getElementById("btm-cta").addEventListener("click", async () => {
//     let res = await
//     fetch("http://127.0.0.1:3000/api/halo");
//     let data = await res.json();

// document.getElementById("hasil").innerText = data.pesan
// })

// const tombol =  document.querySelector('.btn-cta');
// tombol.addEventListener('click', function(){
//     alert('yiiihaaaaaaaaa');
//     console.log("buton clicked")
// })

console.log("sayaaaaaaang");

const btn =
document.getElementById("followBtn");
const popup =
document.getElementById('pop-up');
const y =
document.getElementById('closePopup')

btn.addEventListener("click", function () {
    btn.classList.toggle('following');
    btn.textContent =
    btn.classList.contains('following') ?
    'Folllowing' : 'Follow'
    console.log("followed");

    popup.style.display = 'flex';
});

  y.addEventListener('click', () => {
    popup.style.display = 'none';
});

console.log(y);