// Placeholder data until Table 1 arrives
const table1Data = {
  A5: 0,
  A7: 1,
  A12: 1,
  A13: 0,
  A15: 0,
  A20: 0
};

// Function to render Table 1
function renderTable1(data) {
  const tbody = document.querySelector("#table1 tbody");
  tbody.innerHTML = "";

  for (const key in data) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${key}</td><td>${data[key]}</td>`;
    tbody.appendChild(row);
  }
}

// Function to calculate Table 2
function calculateResults(data) {
  const alpha = data.A5 + data.A20;
  const beta = data.A15 / data.A7;
  const charlie = data.A13 * data.A12;

  document.getElementById("alpha").textContent = alpha;
  document.getElementById("beta").textContent = beta;
  document.getElementById("charlie").textContent = charlie;
}

// Initial render
renderTable1(table1Data);
calculateResults(table1Data);