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

.color-mode {
  width: 32vw;
  height: fit-content;
  border-radius: 10px;
  padding: 2vh 1vw;
}

.preview p {
  margin-bottom: 1vh;
}

.color-mode h3 {
  font-family: poppins-medium;
  font-size: 1.2rem;
  margin-bottom: 1.3vh;
}

.preview-txt {
  font-family: poppins-regular;
  font-size: 1rem;
  padding: 0.8vh 1.2vw;
  border-radius: 0 20px 20px 20px;
  width: fit-content;
}

.txt-blue {
  background-color: #ccf7ff;
}

.color-pick-container {
  display: flex;
  gap: 1vw;
  margin-bottom: 1vh;
}

.color-pick {
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 0.3px solid rgba(0, 0, 0, 0.15);
  display: block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.color-pick-item1 {
  background-color: #ccf7ff;
}

.color-pick-item2 {
  background-color: #fce2d4;
}

.color-pick-item3 {
  background-color: #fff1cc;
}

.color-pick-item4 {
  background-color: #cbfbd6;
}

.color-pick-item5 {
  background-color: #f9d7ec;
}

.color-pick-item6 {
  background-color: #dfdef2;
}

.color-pick-item7 {
  background-color: #00d1ff;
}

.color-pick-item8 {
  background-color: #f9d7ec;
}

.color-pick-item9 {
  background-color: #d4f8ff;
}

/* ............Hide the browser's default checkbox */
.color-pick input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* ............Create a custom checkbox */
.checkmark1 {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 10px;
  width: 10px;
  border-radius: 20px;
}

/* ..........When the checkbox is checked, add a blue background */

.color-pick input:checked ~ .checkmark1 {
  background-color: #150aa1;
  border: none;
}

/* ...........Create the checkmark/indicator (hidden when not checked) */
.checkmark1:after {
  content: "";
  position: absolute;
  display: none;
}

/* ...........Show the checkmark when checked */
.color-pick input:checked ~ .checkmark1:after {
  display: block;
}

/* ............Style the checkmark/indicator */
.color-pick .checkmark1:after {
  left: 3px;
  top: 1.5px;
  width: 2px;
  height: 4px;
  border: solid white;
  border-width: 0 0.1px 0.1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.container {
  margin: 2px 0px 5px 0px;
  display: block;
  position: relative;
  padding: 0px 0px 0px 20px;
  cursor: pointer;
  font-size: 0.9rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* .........Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* ..........Create a custom checkbox */
.checkmark {
  position: absolute;
  background-color: #dad9d9;
  border: 0.1px solid rgba(0, 0, 0, 0.15);
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border-radius: 20px;
}
.checkmark2 {
  position: absolute;
  background-color: #585858;
  border: 0.1px solid rgba(0, 0, 0, 0.15);
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border-radius: 20px;
}

/* ......When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark,
.container input:checked ~ .checkmark2 {
  background-color: #150aa1;
  border: none;
}

/* ...........Create the checkmark/indicator (hidden when not checked) */
.checkmark:after,
.checkmark2:after {
  content: "";
  position: absolute;
  display: none;
}

/* ...........Show the checkmark when checked */
.container input:checked ~ .checkmark:after,
.container input:checked ~ .checkmark2:after {
  display: block;
}

/* ..........Style the checkmark/indicator */
.container .checkmark:after,
.container .checkmark2:after {
  left: 5px;
  top: 3px;
  width: 3px;
  height: 6px;
  border: solid white;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.accessible-mode {
  font-family: poppins-regular;
  font-size: 1rem;
}

/* ------------ LIGHT AND DARK MODE ----------- */
@media (prefers-color-scheme: light) {

  .color-mode {
    background-color: #ffffff;
    border: 1px solid #f1f1f1;
  }

  .txt-white {
    background-color: #f1f1f1;
  }
}

@media (prefers-color-scheme: dark) {

  .color-mode {
    background-color: #a9a9a9;
    border: 1px solid #d9d9d9;
  }

  .txt-white {
    background-color: #fff;
  }
}


  
</style>

<div class="color-mode">
      <div class="preview">
        <h3>Preview</h3>
        <p class="preview-txt txt-white">Wow! Nice theme!</p>
        <p class="preview-txt txt-blue">This is my favourite color</p>
      </div>

      <h3>Colour</h3>
      <div class="color-pick-container">
        <label class="color-pick color-pick-item1">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
        <label class="color-pick color-pick-item2">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
        <label class="color-pick color-pick-item3">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
        <label class="color-pick color-pick-item4">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
        <label class="color-pick color-pick-item5">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
        <label class="color-pick color-pick-item6">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
        <label class="color-pick color-pick-item7">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
        <label class="color-pick color-pick-item8">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
        <label class="color-pick color-pick-item9">
          <input type="radio" name="color" />
          <span class="checkmark1"></span>
        </label>
      </div>

      <div class="accessible-mode">
        <h3>Accessibility Modes</h3>
        <label class="container"
          >High contrast light
          <input type="radio" checked="checked" name="mode" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >High contrast Dark
          <input type="radio" name="mode" />
          <span class="checkmark2"></span>
        </label>
      </div>
    </div>

   
`;

class ColorsModal extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("color-modal", ColorsModal);
