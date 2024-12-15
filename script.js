document.addEventListener("DOMContentLoaded", () => {
    const quantitySelect = document.getElementById("quantity");
    const addToCartButton = document.getElementById("addToCart");
    const cartMessage = document.getElementById("cartMessage");

    addToCartButton.addEventListener("click", () => {
        const quantity = parseInt(quantitySelect.value);
        const pricePerUnit = 12.90;
        const totalPrice = (quantity * pricePerUnit).toFixed(2);

        cartMessage.textContent = `✅ ${quantity} Savon(s) pour le Corps ajouté(s) au panier. Total : ${totalPrice}€`;
        cartMessage.classList.remove("hidden");
        setTimeout(() => {
            cartMessage.classList.add("hidden");
        }, 3000);
    });

    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbar = document.querySelector(".navbar");

    navbarToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});
