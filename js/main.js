"use strict";

const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 0 && scrollY < 700) {
    header.classList.add("d-none"); 
  } else {
    header.classList.remove("d-none"); 
  }
});


  const buttons = document.querySelectorAll('.filter-btn');
  const contents = document.querySelectorAll('.content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {

      buttons.forEach(b => b.classList.remove('active'));

      btn.classList.add('active');

      const type = btn.dataset.type;

      contents.forEach(content => {
        content.classList.remove('active');
        if (type === 'all' || content.classList.contains(type)) {
          content.classList.add('active');
        }
      });
    });
  });
