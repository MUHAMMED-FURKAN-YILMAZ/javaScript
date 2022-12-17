let rb_erkek = document.querySelector("#erkek");
let rb_kadin = document.querySelector("#kadin");
let mesaj = document.querySelector("#msg");

function durum() {
  let yas = document.querySelector("#yas").value;
  mesaj.classList.remove("invisible");
  mesaj.classList.remove("yesil");
  mesaj.classList.remove("turuncu");
  mesaj.classList.remove("kirmizi");

  if (yas) {
    if (yas >= 20 && rb_erkek.checked) {
      mesaj.innerHTML = `<strong>Askere Gidebilirsiniz</strong>`;
      mesaj.classList.add("yesil");
    } else {
      mesaj.innerHTML = `<strong>Askere Gidemezsiniz</strong>`;
      mesaj.classList.add("kirmizi");
    }
  } else {
    mesaj.innerHTML = `<strong>Yaş Değeri Giriniz</strong>`;
    mesaj.classList.add("turuncu");
  }
}

function sil() {
  mesaj.innerText = "";
  mesaj.classList.add("invisible");
  rb_erkek.checked = true;
  rb_kadin.checked = false;
}
