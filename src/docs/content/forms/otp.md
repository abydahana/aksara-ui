# OTP Input

`.otp` is a row of single-character boxes for one-time codes, PINs and pairing codes. Mark it with `data-otp` and the runtime does the rest: typing moves to the next box, Backspace on an empty box goes back, the arrow keys move between boxes, pasting a code fills every box, and SMS autofill works on phones. The combined code lands in a hidden input for the form, and `aksara:otp:complete` fires as soon as the last box is filled.

::html
<div class="docs-preview">
  <div class="otp" role="group" aria-label="Verification code" data-otp data-value="">
    <input type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder=" " aria-label="Verification code 1 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 2 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 3 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 4 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 5 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 6 of 6" />
    <input type="hidden" name="code" value="" />
  </div>
</div>
::end

```html
<div class="otp" role="group" aria-label="Verification code" data-otp data-value="">
  <input
    type="text"
    inputmode="numeric"
    autocomplete="one-time-code"
    maxlength="6"
    placeholder=" "
    aria-label="Verification code 1 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 2 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 3 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 4 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 5 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 6 of 6"
  />
  <input type="hidden" name="code" value="" />
</div>
```

```js components
import { OtpInput } from "@abydahana/aksara-ui/components";

OtpInput({ name: "code" });
```

Try pasting `482915` into the first box, or type a few digits and press Backspace.

---

## How It Works

- **One box per character.** Each box is a plain text input. Boxes 2 and up have `maxlength="1"`.
- **Autofill on the first box.** The first box has `autocomplete="one-time-code"` and a `maxlength` of the full length, so iOS and Android can offer the code from an SMS. When several characters arrive in one box (autofill, IME, a password manager), the runtime spreads them over the boxes.
- **Filtering.** Characters that do not match the pattern (digits by default) are dropped. `inputmode="numeric"` opens the number pad on phones.
- **`placeholder=" "`** is not visible; it lets the CSS give filled boxes (`:not(:placeholder-shown)`) a stronger border.
- **One value.** After every change the runtime joins the boxes into the group's `data-value` and the hidden input, so a normal form submit sends `code=482915`.

---

## Verification Card

A complete phone verification step: masked number, code boxes centered in a card, a verify button and a resend link. Type `246810` and press Verify, or any other code to see the error state.

::html
<div class="docs-preview">
  <div class="card max-w-[420px] w-full">
    <div class="card-body vstack gap-4 text-center">
      <span class="avatar avatar-primary avatar-lg rounded-full mx-auto"><span class="mdi mdi-cellphone-message" aria-hidden="true"></span></span>
      <div>
        <p class="m-0 text-lg fw-bold">Verify your phone</p>
        <p class="m-0 text-sm text-subtle">We sent a 6-digit code to <span class="fw-semibold text-body">+1 (415) ***-7788</span></p>
      </div>
      <div id="otpVerify" class="otp justify-center" role="group" aria-label="Verification code" data-otp data-value="">
        <input type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder=" " aria-label="Verification code 1 of 6" />
        <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 2 of 6" />
        <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 3 of 6" />
        <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 4 of 6" />
        <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 5 of 6" />
        <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 6 of 6" />
        <input type="hidden" name="code" value="" />
      </div>
      <button class="btn btn-primary w-full" type="button" onclick="const otp = document.getElementById('otpVerify'); otp.classList.remove('is-invalid'); void otp.offsetWidth; if (otp.dataset.value === '246810') { Aksara.notify('Phone number verified', { icon: 'mdi-check', variant: 'success' }); } else { otp.classList.add('is-invalid'); }">Verify</button>
      <p class="m-0 text-sm text-subtle">Didn't get it? <a href="#/forms/otp" onclick="event.preventDefault(); Aksara.notify('A new code is on its way', { icon: 'mdi-message-text-outline' })">Resend code</a> in 0:42</p>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-body vstack gap-4 text-center">
    <div>
      <p class="m-0 text-lg fw-bold">Verify your phone</p>
      <p class="m-0 text-sm text-subtle">
        We sent a 6-digit code to <span class="fw-semibold text-body">+1 (415) ***-7788</span>
      </p>
    </div>
    <div id="verifyCode" class="otp justify-center" role="group" aria-label="Verification code" data-otp data-value="">
      <input
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        maxlength="6"
        placeholder=" "
        aria-label="Verification code 1 of 6"
      />
      <!-- boxes 2 to 6 -->
      <input type="hidden" name="code" value="" />
    </div>
    <button class="btn btn-primary w-full" type="submit">Verify</button>
    <p class="m-0 text-sm text-subtle">Didn't get it? <a href="/verify/resend">Resend code</a> in 0:42</p>
  </div>
</div>
```

```js components
import { OtpInput } from "@abydahana/aksara-ui/components";

`<div class="card">
  <div class="card-body vstack gap-4 text-center">
    <p class="m-0 text-sm text-subtle">We sent a 6-digit code to <span class="fw-semibold text-body">+1 (415) ***-7788</span></p>
    ${OtpInput({ id: "verifyCode", name: "code", className: "justify-center" })}
    <button class="btn btn-primary w-full" type="submit">Verify</button>
  </div>
</div>`;
```

`.otp` is a flex row, so `justify-center` centers the boxes in the card.

---

## Grouped

`groups` (or a hand-written `.otp-separator`) adds a dash after the given positions, which makes long codes easier to read back: 123 – 456.

::html
<div class="docs-preview">
  <div class="otp" role="group" aria-label="Verification code" data-otp data-value="">
    <input type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder=" " aria-label="Verification code 1 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 2 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 3 of 6" />
    <span class="otp-separator" aria-hidden="true">–</span>
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 4 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 5 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 6 of 6" />
  </div>
</div>
::end

```html
<div class="otp" role="group" aria-label="Verification code" data-otp data-value="">
  <input
    type="text"
    inputmode="numeric"
    autocomplete="one-time-code"
    maxlength="6"
    placeholder=" "
    aria-label="Verification code 1 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 2 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 3 of 6"
  />
  <span class="otp-separator" aria-hidden="true">–</span>
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 4 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 5 of 6"
  />
  <input
    type="text"
    inputmode="numeric"
    autocomplete="off"
    maxlength="1"
    placeholder=" "
    aria-label="Verification code 6 of 6"
  />
</div>
```

```js components
import { OtpInput } from "@abydahana/aksara-ui/components";

OtpInput({ groups: [3] });
```

The separator is `aria-hidden`, and the runtime skips it: Backspace and the arrow keys jump straight to the neighbouring box.

---

## Masked PIN

`masked` renders `type="password"` boxes, so the characters show as dots. A 4-digit PIN to confirm a payment is the usual case.

::html
<div class="docs-preview">
  <div class="card max-w-[360px] w-full">
    <div class="card-body vstack gap-3 text-center">
      <div>
        <p class="m-0 fw-semibold">Enter your PIN</p>
        <p class="m-0 text-sm text-subtle">Confirm payment of <span class="fw-semibold text-body">$1,240.00</span> to Northwind Store</p>
      </div>
      <div class="otp justify-center" role="group" aria-label="PIN" data-otp data-value="">
        <input type="password" inputmode="numeric" autocomplete="one-time-code" maxlength="4" placeholder=" " aria-label="PIN 1 of 4" />
        <input type="password" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="PIN 2 of 4" />
        <input type="password" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="PIN 3 of 4" />
        <input type="password" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="PIN 4 of 4" />
        <input type="hidden" name="pin" value="" />
      </div>
      <a class="text-sm" href="#/forms/otp">Forgot PIN?</a>
    </div>
  </div>
</div>
::end

```html
<div class="otp justify-center" role="group" aria-label="PIN" data-otp data-value="">
  <input
    type="password"
    inputmode="numeric"
    autocomplete="one-time-code"
    maxlength="4"
    placeholder=" "
    aria-label="PIN 1 of 4"
  />
  <input type="password" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="PIN 2 of 4" />
  <input type="password" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="PIN 3 of 4" />
  <input type="password" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="PIN 4 of 4" />
  <input type="hidden" name="pin" value="" />
</div>
```

```js components
import { OtpInput } from "@abydahana/aksara-ui/components";

OtpInput({ length: 4, name: "pin", masked: true, label: "PIN", className: "justify-center" });
```

---

## Letters And Digits

`data-otp-pattern` takes a one-character regular expression (without anchors) that every character must match. `[A-Za-z0-9]` allows letters and digits, for backup codes or TV pairing codes; the boxes then use `inputmode="text"`. Characters are kept as typed, so normalize the case on the server if it should not matter.

::html
<div class="docs-preview">
  <div>
    <p class="form-label" id="otpBackupLabel">Backup code</p>
    <div class="otp" role="group" aria-labelledby="otpBackupLabel" data-otp data-otp-pattern="[A-Za-z0-9]" data-value="">
      <input type="text" inputmode="text" autocomplete="one-time-code" maxlength="8" placeholder=" " aria-label="Backup code 1 of 8" />
      <input type="text" inputmode="text" autocomplete="off" maxlength="1" placeholder=" " aria-label="Backup code 2 of 8" />
      <input type="text" inputmode="text" autocomplete="off" maxlength="1" placeholder=" " aria-label="Backup code 3 of 8" />
      <input type="text" inputmode="text" autocomplete="off" maxlength="1" placeholder=" " aria-label="Backup code 4 of 8" />
      <span class="otp-separator" aria-hidden="true">–</span>
      <input type="text" inputmode="text" autocomplete="off" maxlength="1" placeholder=" " aria-label="Backup code 5 of 8" />
      <input type="text" inputmode="text" autocomplete="off" maxlength="1" placeholder=" " aria-label="Backup code 6 of 8" />
      <input type="text" inputmode="text" autocomplete="off" maxlength="1" placeholder=" " aria-label="Backup code 7 of 8" />
      <input type="text" inputmode="text" autocomplete="off" maxlength="1" placeholder=" " aria-label="Backup code 8 of 8" />
      <input type="hidden" name="backup_code" value="" />
    </div>
    <p class="form-text">One of the 10 codes you saved when you turned on two-step verification. Try pasting <code>K7QM-2XPA</code>; the dash is dropped.</p>
  </div>
</div>
::end

```html
<div class="otp" role="group" aria-label="Backup code" data-otp data-otp-pattern="[A-Za-z0-9]" data-value="">
  <input
    type="text"
    inputmode="text"
    autocomplete="one-time-code"
    maxlength="8"
    placeholder=" "
    aria-label="Backup code 1 of 8"
  />
  <!-- boxes 2 to 4 -->
  <span class="otp-separator" aria-hidden="true">–</span>
  <!-- boxes 5 to 8 -->
  <input type="hidden" name="backup_code" value="" />
</div>
```

```js components
import { OtpInput } from "@abydahana/aksara-ui/components";

OtpInput({ length: 8, groups: [4], name: "backup_code", pattern: "[A-Za-z0-9]", label: "Backup code" });
```

---

## Small

`.otp-sm` uses 2.25rem × 2.5rem boxes and a tighter gap, for modals, sidebars and narrow phones with 8-character codes.

::html
<div class="docs-preview">
  <div class="otp otp-sm" role="group" aria-label="Verification code" data-otp data-value="">
    <input type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder=" " aria-label="Verification code 1 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 2 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 3 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 4 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 5 of 6" />
    <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " aria-label="Verification code 6 of 6" />
  </div>
</div>
::end

```html
<div class="otp otp-sm" role="group" aria-label="Verification code" data-otp data-value="">...</div>
```

```js components
import { OtpInput } from "@abydahana/aksara-ui/components";

OtpInput({ size: "sm" });
```

---

## Invalid And Disabled

Add `.is-invalid` to the group from your script to turn every border red and shake the row once, as the Verify button in the card above does; typing or deleting a character removes the class again. A group rendered with `.is-invalid` (for example after a failed server-side check, or `OtpInput({ className: "is-invalid" })`) keeps it until the user edits the code. `.is-invalid` on a single input colors only that box. Disabled boxes fade out, for example while the code is being checked.

::html
<div class="docs-preview">
  <div>
    <div class="otp" role="group" aria-label="Verification code" aria-describedby="otpInvalidMsg" data-otp data-value="135790">
      <input class="is-invalid" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder=" " value="1" aria-label="Verification code 1 of 6" />
      <input class="is-invalid" type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="3" aria-label="Verification code 2 of 6" />
      <input class="is-invalid" type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="5" aria-label="Verification code 3 of 6" />
      <input class="is-invalid" type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="7" aria-label="Verification code 4 of 6" />
      <input class="is-invalid" type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="9" aria-label="Verification code 5 of 6" />
      <input class="is-invalid" type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="0" aria-label="Verification code 6 of 6" />
    </div>
    <p id="otpInvalidMsg" class="form-text text-danger"><span class="mdi mdi-alert-circle-outline" aria-hidden="true"></span> That code is not right. 2 attempts left.</p>
  </div>
  <div>
    <div class="otp" role="group" aria-label="Verification code" data-otp data-value="482915">
      <input type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder=" " value="4" disabled aria-label="Verification code 1 of 6" />
      <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="8" disabled aria-label="Verification code 2 of 6" />
      <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="2" disabled aria-label="Verification code 3 of 6" />
      <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="9" disabled aria-label="Verification code 4 of 6" />
      <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="1" disabled aria-label="Verification code 5 of 6" />
      <input type="text" inputmode="numeric" autocomplete="off" maxlength="1" placeholder=" " value="5" disabled aria-label="Verification code 6 of 6" />
    </div>
    <p class="form-text"><span class="mdi mdi-loading mdi-spin" aria-hidden="true"></span> Checking code…</p>
  </div>
</div>
::end

```html
<!-- Known at render time: mark the boxes -->
<div class="otp" role="group" aria-label="Verification code" aria-describedby="codeError" data-otp data-value="135790">
  <input
    class="is-invalid"
    type="text"
    inputmode="numeric"
    autocomplete="one-time-code"
    maxlength="6"
    placeholder=" "
    value="1"
    aria-label="Verification code 1 of 6"
  />
  <!-- boxes 2 to 6, each with .is-invalid -->
</div>
<p id="codeError" class="form-text text-danger">That code is not right. 2 attempts left.</p>

<!-- After a failed check: mark the group (shakes once) -->
<script>
  document.querySelector("#verifyCode").classList.add("is-invalid");
</script>

<div class="otp" role="group" aria-label="Verification code" data-otp data-value="482915">
  <input
    type="text"
    inputmode="numeric"
    autocomplete="one-time-code"
    maxlength="6"
    placeholder=" "
    value="4"
    disabled
    aria-label="Verification code 1 of 6"
  />
  <!-- boxes 2 to 6 -->
</div>
```

```js components
import { OtpInput } from "@abydahana/aksara-ui/components";

OtpInput({ id: "verifyCode", value: "135790", attributes: { "aria-describedby": "codeError" } });
OtpInput({ value: "482915", disabled: true });

// After a failed check (not at render time, Aksara.init() would reset it):
document.querySelector("#verifyCode").classList.add("is-invalid");
```

---

## Submit On Complete

Listen for `aksara:otp:complete` to verify the code without a button. On a wrong code, add `.is-invalid`; remove it first and force a reflow so the shake plays again on a second wrong attempt.

```js
const otp = document.querySelector("#verifyCode");
const error = document.querySelector("#codeError");

otp.addEventListener("aksara:otp:complete", async (event) => {
  const boxes = otp.querySelectorAll("input:not([type='hidden'])");
  boxes.forEach((box) => (box.disabled = true));

  const response = await fetch("/api/verify-phone", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code: event.detail.value })
  });

  boxes.forEach((box) => (box.disabled = false));

  if (response.ok) {
    Aksara.notify("Phone number verified", { icon: "mdi-check", variant: "success" });
    location.assign("/dashboard");
    return;
  }

  otp.classList.remove("is-invalid");
  void otp.offsetWidth; // restart the shake animation
  otp.classList.add("is-invalid");
  error.hidden = false;
  boxes[boxes.length - 1].focus();
});

// Any edit clears .is-invalid; hide the message too.
otp.addEventListener("aksara:otp:change", () => (error.hidden = true));
```

---

## JavaScript

The OTP runtime uses delegated `input`, `keydown`, `paste` and `focusin` listeners on the document, so groups added after `Aksara.init()` work as well. `Aksara.init()` (or `Aksara.init(container)`) copies a pre-filled code into `data-value` and the hidden input without firing events.

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Attribute / event</th><th>Where</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>data-otp</code></td><td>The group</td><td>Enables the behavior for every non-hidden <code>&lt;input&gt;</code> inside, in source order.</td></tr>
      <tr><td><code>data-otp-pattern</code></td><td>The group</td><td>One-character regular expression, without <code>^</code> / <code>$</code>. Default <code>[0-9]</code>. An invalid expression falls back to digits.</td></tr>
      <tr><td><code>data-value</code></td><td>The group</td><td>The combined code, kept up to date by the runtime.</td></tr>
      <tr><td><code>input[type="hidden"]</code></td><td>Inside the group</td><td>Receives the combined code, for form submits.</td></tr>
      <tr><td><code>aksara:otp:change</code></td><td>Fired on the group</td><td>After every edit. Bubbles. <code>event.detail.value</code> is the current code (may be partial).</td></tr>
      <tr><td><code>aksara:otp:complete</code></td><td>Fired on the group</td><td>When every box is filled, right after <code>aksara:otp:change</code>. Bubbles. <code>event.detail.value</code> is the full code.</td></tr>
      <tr><td><code>.is-invalid</code></td><td>The group</td><td>Red borders and a short shake. Removed by the runtime on the next edit.</td></tr>
    </tbody>
  </table>
</div>
::end

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Key / action</th><th>Behavior</th></tr>
    </thead>
    <tbody>
      <tr><td>Type a character</td><td>Fills the box and moves focus to the next one. Characters that do not match the pattern are ignored.</td></tr>
      <tr><td><kbd>Backspace</kbd></td><td>Deletes the character; in an empty box, clears the previous box and moves there.</td></tr>
      <tr><td><kbd>←</kbd> / <kbd>→</kbd></td><td>Move to the previous / next box and select its character. Reversed under <code>dir="rtl"</code>, so the keys always follow the visual direction.</td></tr>
      <tr><td>Paste</td><td>Fills the boxes from the focused one onwards, skipping characters that do not match (spaces, dashes).</td></tr>
      <tr><td>SMS autofill</td><td>The code arrives in the first box (<code>autocomplete="one-time-code"</code>) and is spread over all boxes.</td></tr>
      <tr><td>Focus a box</td><td>Selects its character, so typing replaces it.</td></tr>
    </tbody>
  </table>
</div>
::end

To clear the code from script, empty the boxes and dispatch an `input` event on one of them so `data-value` and the hidden field follow:

```js
otp.querySelectorAll("input:not([type='hidden'])").forEach((box) => (box.value = ""));
const first = otp.querySelector("input");
first.dispatchEvent(new Event("input", { bubbles: true }));
first.focus();
```

---

## String Component

`OtpInput` renders the group, the boxes with the right `inputmode`, `autocomplete` and `maxlength`, the separators and the hidden input.

```ts
import { OtpInput } from "@abydahana/aksara-ui/components";

OtpInput({ name: "code" }); // 6 digits
OtpInput({ name: "code", groups: [3] }); // 123 – 456
OtpInput({ name: "pin", length: 4, masked: true, label: "PIN" });
OtpInput({ name: "backup_code", length: 8, pattern: "[A-Za-z0-9]", groups: [4] });
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>length</code></td><td><code>number</code></td><td><code>6</code></td><td>Number of boxes.</td></tr>
      <tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>Adds a hidden input with this name that receives the combined code.</td></tr>
      <tr><td><code>id</code></td><td><code>string</code></td><td>—</td><td>Id of the group.</td></tr>
      <tr><td><code>value</code></td><td><code>string</code></td><td><code>""</code></td><td>Pre-filled code, one character per box.</td></tr>
      <tr><td><code>pattern</code></td><td><code>string</code></td><td><code>"[0-9]"</code></td><td>Allowed characters (<code>data-otp-pattern</code>). Anything other than digits switches the boxes to <code>inputmode="text"</code>.</td></tr>
      <tr><td><code>groups</code></td><td><code>number[]</code></td><td><code>[]</code></td><td>Positions after which an <code>.otp-separator</code> is inserted, for example <code>[3]</code>.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md"</code></td><td><code>"md"</code></td><td><code>"sm"</code> adds <code>.otp-sm</code>.</td></tr>
      <tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables every box.</td></tr>
      <tr><td><code>masked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Renders <code>type="password"</code> boxes.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td><code>"Verification code"</code></td><td>Group <code>aria-label</code> and the base of each box label ("Verification code 1 of 6").</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on the group, for example <code>"justify-center"</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes on the group.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.otp</code></td><td>Flex row with a <code>.5rem</code> gap. Its direct <code>&lt;input&gt;</code> children are 2.875rem × 3.25rem centered boxes with a focus ring and a stronger border once filled.</td></tr>
      <tr><td><code>.otp-sm</code></td><td>2.25rem × 2.5rem boxes and a <code>.375rem</code> gap.</td></tr>
      <tr><td><code>.otp-separator</code></td><td>Subtle dash between groups of boxes.</td></tr>
      <tr><td><code>.otp.is-invalid</code></td><td>Danger borders on every box and a one-time horizontal shake.</td></tr>
      <tr><td><code>.otp &gt; input.is-invalid</code></td><td>Danger border on a single box.</td></tr>
    </tbody>
  </table>
</div>
::end
