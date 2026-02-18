// Register
async function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;
  let msg = document.getElementById("regMsg");

  if (user === "" || pass === "") {
    msg.textContent = "All fields are required";
    return;
  }

  try {
    const res = await fetch("http://localhost:4000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass })
    });
    const data = await res.json();

    if (data.success) {
      msg.style.color = "green";
      msg.textContent = "Registration successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "homePage.html";
      }, 1500);
    } else {
      msg.style.color = "red";
      msg.textContent = data.message || "Registration failed";
    }
  } catch (err) {
    msg.style.color = "red";
    msg.textContent = "Error: " + err.message;
  }
}

// Login

async function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;
  let msg = document.getElementById("msg");

  try {
    const res = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass }) // ✅ no contact info
    });
    const data = await res.json();

    if (data.success) {
      msg.style.color = "green";
      msg.textContent = "Login successful!";

      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("username", data.user.username);

      setTimeout(() => {
        window.location.href = "homePage.html";
      }, 1000);
    } else {
      msg.style.color = "red";
      msg.textContent = data.message || "Invalid username or password";
    }
  } catch (err) {
    msg.style.color = "red";
    msg.textContent = "Error: " + err.message;
  }
}

// Logout

function logout() {
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  window.location.href = "homePage.html";
}