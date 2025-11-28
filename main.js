const ulList = document.getElementById('product_list');
const btn_fish = document.getElementById('more_fish');
const btn_mushrooms = document.getElementById('more_mashrooms');
const btn_eggs = document.getElementById('more_eggs');

btn_fish.onclick = () => {
  const link = prompt(`gime the link to the new product`);
  console.log(link);
  ulList.innerHTML += `<li>
          <a
            href="${link}"
            ><img src="./SomeFood/Food_C205-128.png" alt="sdsfs"
          /></a>
          <p>fish</p>
        </li>`;
};
// -----------------------------------------------------------------------------
btn_mushrooms.onclick = () => {
  const link = prompt(`gime the link to the new product`);
  console.log(link);
  ulList.innerHTML += `<li>
          <a
            href="${link}"
            ><img src="./SomeFood/Food_C239-128.png" alt="sdsfs"
          /></a>
          <p>mushroom</p>
        </li>`;
};

//   ------------------------------------------------------
btn_eggs.onclick = () => {
  const link = prompt(`gime the link to the new product`);
  console.log(link);
  ulList.innerHTML += `<li>
          <a href="${link}"
            ><img src="./SomeFood/Food_C203-128.png" alt="sdsfs"
          /></a>
          <p>eggs</p>
        </li>`;
};
