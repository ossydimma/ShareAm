const template = document.createElement("template");
template.innerHTML = `
    <style>
 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

@font-face {
  font-family: poppins-bold;
  src: url(../../assets/fonts/Poppins-Bold.ttf);
}
@font-face {
  font-family: poppins-regular;
  src: url(../../assets/fonts/Poppins-Regular.ttf);
}
@font-face {
  font-family: poppins-medium;
  src: url(../../assets/fonts/Poppins-Medium.ttf);
}
@font-face {
  font-family: Rubik;
  src: url(../../assets/fonts/Rubik-VariableFont_wght.ttf);
}

.setting-modal-body {
  width: 32vw;
  height: fit-content;
  border-radius: 10px;
  padding: 2vh 1vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.setting-modal-container h1 {
  color: rgba(21, 10, 161, 0.8);
  font-family: Poppins-bold;
  font-size: 0.8rem;
  font-weight: 600;
  padding-bottom: 2px;
}
.setting-modal-container > div {
  display: flex;
  justify-content: space-between;
}
.setting-modal-container span {
  display: flex;
  align-items: center;
  gap: 10px;
}
.setting-modal-container p {
  color: #373737;
  font-family: Poppins-medium;
  font-size: 0.8rem;
  font-weight: 500;
}
.controll-txt {
  color: #000 !important;
}
.setting-modal-container h2 {
  color: #373737;
  font-family: Poppins-medium;
  font-size: 0.9rem;
  font-weight: 600;
  padding-top: 2px;
}

/*------------TOGGLE SWITCH Button--------------*/

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 14px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #c7c7f9;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 0px;
  bottom: -3.1px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

input:checked + .slider:before {
  background-color: #150aa1;
}

input:focus + .slider {
  box-shadow: 0 0 1px #c7c7f9;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider {
  border-radius: 34px;
}

.slider:before {
  border-radius: 50%;
}

/* ------------ LIGHT AND DARK MODE ----------- */
@media (prefers-color-scheme: light) {
.setting-modal-body {
background-color:#fff}

.slider:before {
  background-color: #a9a9a9;
}
}

@media (prefers-color-scheme: dark) {
.setting-modal-body {
background-color:#a9a9a9}
}

.slider:before {
  background-color:#585858;
}
}

  
</style>

<div class="setting-modal-body">
      <section class="setting-modal-container">
        <h1>LOCATION</h1>
        <div>
          <p>Share location with other apps</p>
          <span>
            <p class="controll-txt">Disabled</p>
            <div>
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </span>
        </div>
      </section>

      <section class="setting-modal-container">
        <h1>CALLING</h1>
        <div>
          <p>Only allow ShareAm calls from contact list</p>
          <span>
            <p class="controll-txt">Disabled</p>
            <div>
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </span>
        </div>
      </section>

      <section class="setting-modal-container">
        <h1>TRANSLATION</h1>
        <div>
          <p>Translation & language auto-detection</p>
          <span>
            <p class="controll-txt">Disabled</p>
            <div>
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </span>
        </div>
        <p>Voice clip contribution</p>
      </section>

      <section class="setting-modal-container">
        <h1>DIAGNOSTIC DATA</h1>
        <div>
          <p>Optional diagnostic data</p>
          <span>
            <p class="controll-txt">Disabled</p>
            <div>
              <!-- Rounded switch -->
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </span>
        </div>
        <h2>Clear app data</h2>
      </section>
    </div>

   
`;

class SettingsModal extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("settings-modal", SettingsModal);
