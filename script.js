const API_URL = "YOUR_API_GATEWAY_URL";

const $ = (s) => document.querySelector(s);

function setError(id, msg) {
  $(id).textContent = msg;
}

function validate() {
  let ok = true;
  setError("#nameError", "");
  setError("#messageError", "");

  if (!$("#name").value.trim()) { setError("#nameError", "Required"); ok = false; }
  if (!$("#message").value.trim()) { setError("#messageError", "Required"); ok = false; }

  return ok;
}

function showNotice(type, msg) {
  const box = $("#notice");
  box.className = `notice ${type}`;
  box.textContent = msg;
  box.style.display = "block";
}

$("#dataForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!validate()) return;

  $("#submitBtn").disabled = true;
  $("#submitBtn").textContent = "Submitting…";

  try {
    const payload = {
      name: $("#name").value.trim(),
      message: $("#message").value.trim()
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) showNotice("error", data.message || "Request failed.");
    else {
      showNotice("success", data.message || "Submitted!");
      $("#dataForm").reset();
    }

  } catch (err) {
    showNotice("error", "Network error.");
  }

  $("#submitBtn").disabled = false;
  $("#submitBtn").textContent = "Submit";
});
