const input = document.querySelector("#input");
const add = document.querySelector("#add");
const sort = document.querySelector("#sort");
const reverse = document.querySelector("#reverse");
const rmvLast = document.querySelector("#rmv-last");
const rmvFirst = document.querySelector("#rmv-first");
const rmvAll = document.querySelector("#rmv-all");
const mix = document.querySelector("#mix");
let list = document.querySelector("#list");

input.focus();

const isValid = (item) => {
  if (!item) {
    alert("Listeye Boş Eleman Eklenemez");
    return false;
  }

  return item;
};

const stringToArray = (item) => {
  if (!item) {
    alert("Liste Boş Olduğu için Sıralanamaz");
    return false;
  }

  const returnItem = item.split("</li>");
  returnItem.pop();

  for (let i = 0; i < returnItem.length; i++) {
    returnItem[i] += `</li>`;
  }

  return returnItem;
};

/* input.addEventListener("click", () => {
}); */

add.addEventListener("click", () => {
  const item = isValid(input.value);

  if (!item) return input.focus();

  let li = `<li>${item}</li>`;

  list.innerHTML += li;
  input.value = "";
  input.focus();
});

sort.addEventListener("click", () => {
  const items = stringToArray(list.innerHTML);
  items.sort();

  let li = items.join("");

  list.innerHTML = li;
  input.value = "";
  input.focus();
});

reverse.addEventListener("click", () => {
  const reverseItems = stringToArray(list.innerHTML);
  reverseItems.sort().reverse();
  console.log(reverseItems);
  let li = reverseItems.join("");
  console.log(reverseItems);

  list.innerHTML = li;
  input.value = "";
  input.focus();
});

rmvLast.addEventListener("click", () => {});

rmvFirst.addEventListener("click", () => {});

rmvAll.addEventListener("click", () => {});

mix.addEventListener("click", () => {});
