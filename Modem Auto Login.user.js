// ==UserScript==
// @name        Modem Auto Login
// @namespace   modem-autologin
// @match       https://192.168.100.1/*
// @match       https://192.168.100.1:80/*
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function () {
    console.log("Modem autologin script running");
    const userField = document.getElementById('txt_Username');
    const passField = document.getElementById('txt_Password');
    const loginBtn = document.getElementById('loginbutton');

    console.log("userField:", userField, "passField:", passField, "loginBtn:", loginBtn);

    if (userField && passField && loginBtn) {
        userField.value = "telecomadmin";
        passField.value = "Algeri@Ftth#21@";
        loginBtn.click();
    }
})();