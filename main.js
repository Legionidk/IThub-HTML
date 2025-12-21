const buttons = document.querySelectorAll(".filter-btn");
const groups = document.querySelectorAll(".card-group-container");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");

        groups.forEach((g) => g.classList.add("d-none"));
        document.getElementById(target).classList.remove("d-none");

        buttons.forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
    });
});
