const items = {
    "Children's Modular Dresser": 300,
    "Adjustable King Bed Frame": 1200,
    "Oak TV Entertainment Center": 550,
    "Sectional Sofa": 2500,
    "Camouflage Recliner": 400,
    "Acrylic Night Stand": 225,
    "Coffee Table": 275,
    "Children's Bunk Bed": 900,
    "Cherry Wood Bar": 2500,
    "Area Rug": 200
  };
  
  const table = document.getElementById("furnitureTable");
  for (const [name, price] of Object.entries(items)) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>$${price}</td>
      <td><input type="number" name="${name}" min="0" value="0"></td>
    `;
    table.appendChild(row);
  }
  
  document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const order = [];
  
    for (const [item, price] of Object.entries(items)) {
      const qty = parseInt(formData.get(item)) || 0;
      if (qty > 0) {
        order.push({
          name: item,
          price: price,
          quantity: qty,
          total: price * qty
        });
      }
    }
  
    localStorage.setItem("furniOrder", JSON.stringify(order));
    window.location.href = "checkout.html"; 
  });
