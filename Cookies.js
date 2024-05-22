document.addEventListener("DOMContentLoaded", () => {
    // Select all orders with a data-key attribute
    const orders = document.querySelectorAll("dl[data-key]");

    // Iterate through each order element
    orders.forEach(order => {
        // Extract data attributes from the current order element
        const biscuits = order.dataset.biscuits; // Number of biscuits
        const donuts = order.dataset.donuts; // Number of donuts
        const pancakes = order.dataset.pancakes; // Number of pancakes
        const delivered = order.dataset.delivered === "true" ? "Delivered" : "Pending"; // Delivery status

        // Update the biscuits count element with the extracted data
        order.querySelector(".biscuits .count").textContent = biscuits;
        // Update the donuts count element with the extracted data
        order.querySelector(".donuts .count").textContent = donuts;
        // Update the pancakes count element with the extracted data
        order.querySelector(".pancakes .count").textContent = pancakes;
        // Update the status element with the extracted delivery status
        order.querySelector(".status dd").textContent = delivered;
    });
});
