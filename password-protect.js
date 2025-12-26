document.addEventListener("DOMContentLoaded", function () {

  // ⭐ غير كلمة المرور من هنا فقط ⭐
  const correctPassword = "SAHOU123";

  const path = window.location.pathname;
  if (path !== "/" && path !== "/index.html") return;

  const style = document.createElement("style");
  style.innerHTML = `
    #password-protect-overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999;
      background-color: #f8f8f8;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
    }
    #password-box {
      background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0,0,0,.2);
      text-align: center;
      max-width: 320px;
      width: 90%;
    }
    #password-input {
      padding: 10px;
      width: 90%;
      margin-bottom: 15px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 16px;
    }
    #submit-password {
      background-color: #254781;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }
    #submit-password:hover {
      background-color: #00bf63;
    }
    #wrong-password {
      color: red;
      margin-top: 10px;
      display: none;
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.id = "password-protect-overlay";
  overlay.innerHTML = `
    <div id="password-box">
      <h2>أدخل كلمة المرور للدخول:</h2>
      <input type="password" id="password-input" placeholder="كلمة المرور" />
      <br>
      <button id="submit-password">دخول</button>
      <div id="wrong-password">كلمة المرور غير صحيحة ❌</div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById("submit-password").onclick = function () {
    const input = document.getElementById("password-input").value;
    if (input === correctPassword) {
      overlay.remove();
    } else {
      document.getElementById("wrong-password").style.display = "block";
    }
  };

});
