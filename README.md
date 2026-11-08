# Huawei HG8145X6-10 Superadmin Auto Login

Violentmonkey userscript for automatic login to the Huawei HG8145X6-10 modem used by ALGERIE TELECOM.

## Setup

1. Install [Violentmonkey](https://violentmonkey.github.io/).
2. Enable **Allow user scripts** in the extension settings.
3. Install [`Modem Auto Login.user.js`](./Modem%20Auto%20Login.user.js).
4. Open `https://192.168.100.1/` and accept the modem's self-signed certificate warning once.

The script fills the login form and submits it automatically.
> Before installing, edit `Modem Auto Login.user.js` and change:<br>
> <mark><code>passField.value = "f)Dut=5ZfMtGKZ).+J7}iMG52+f|!.co";</code></mark><br>
<mark><code>passField.value = "Algeri@Ftth#21";</code></mark><br>
<mark><code>passField.value = "kY;3dgGziKF>7}cQEv";</code></mark><br>
<mark><code>passField.value = "admintelecom";</code></mark>
> to your own modem password.
