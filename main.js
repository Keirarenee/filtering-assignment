// silence
document.addEventListener("DOMContentLoaded", function () {
  const select_menu = document.querySelector(".filter");

  select_menu.addEventListener("change", function(e){
    const minimum_wage_class = e.target.value;
    const active_items = document.querySelectorAll(".item.active");

    active_items.forEach(function(item){
      item.classList.remove("active");
    });

    const minimum_wage_items = document.querySelectorAll(`.item.${minimum_wage_class}`);

    minimum_wage_items.forEach(function (item){
      item.classList.add("active");
    });
  });
});
