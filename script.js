const btn = document.querySelector('.btn')
const txt_sisi = document.querySelector('#sisi')
const txt_panjang = document.querySelector('#panjang')
const txt_lebar = document.querySelector('#lebar')
const txt_tinggi = document.querySelector('#tinggi')
const luas = document.querySelector('.luas')
const volume = document.querySelector('.volume')
const btn_balok = document.querySelector(".btn_balok")
const luas_balok = document.querySelector('.luas_balok')
const volume_balok = document.querySelector(".volume_balok")
const txt_jari = document.querySelector("#jari-jari")
const btn_bola = document.querySelector(".btn_bola")
const luas_bola = document.querySelector(".luas_bola")
const volume_bola = document.querySelector(".volume_bola")

btn.addEventListener('click', function () {
    let sisi = parseFloat(txt_sisi.value)
    luas.innerHTML = 6 * sisi ** 2
    volume.innerHTML = sisi ** 3
})

btn_balok.addEventListener('click', () => {
    let panjang = parseFloat(txt_panjang.value)
    let lebar = parseFloat(txt_lebar.value)
    let tinggi = parseFloat(txt_tinggi.value)
    const volume = panjang * lebar * tinggi
    const luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)
    luas_balok.innerHTML = volume
    volume_balok.innerHTML = luas
})

btn_bola.addEventListener('click', () => {
    let jari = parseFloat(txt_jari.value);
    const volume = ((4 / 3) * 3.14 * jari ** 3).toFixed(2); // Menggunakan toFixed(2) untuk 2 digit desimal
    const luas = (4 * 3.14 * jari ** 2).toFixed(2); // Menggunakan toFixed(2) untuk 2 digit desimal

    luas_bola.innerHTML = luas;
    volume_bola.innerHTML = volume;
});


const txt_jari_tabung = document.querySelector("#jari_silinder")
const txt_tinggi_tabung = document.querySelector("#tinggi_silinder")
const btn_tabung = document.querySelector(".btn_tabung")
const tabung_luas = document.querySelector(".luas_tabung")
const silinder_volume = document.querySelector(".volume_tabung")


btn_tabung.addEventListener('click', () => {
    let jari_tabung = parseFloat(txt_jari_tabung.value);
    let tinggi_tabung = parseFloat(txt_tinggi_tabung.value);
    const volume_tabung = (3.14 * jari_tabung ** 2 * tinggi_tabung).toFixed(2); // Menggunakan toFixed(2) untuk 2 digit desimal
    const luas_tabung = (2 * 3.14 * jari_tabung * tinggi_tabung + 2 * 3.14 * jari_tabung ** 2).toFixed(2); // Menggunakan toFixed(2) untuk 2 digit desimal

    tabung_luas.innerHTML = luas_tabung;
    silinder_volume.innerHTML = volume_tabung;
})
