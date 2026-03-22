// Gelir Gider Bilgilerini Kullanicidan Aliyoruz
// Alinan Bilgileri localStorage Uzerinden Kullaniyoruz
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];