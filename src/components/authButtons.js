const template = document.createElement("template");
template.innerHTML = `
    <style>
      button {
        width: 100%;
      }
      .btn-login {
        background-color: #1058e8;
        padding: 10px;
        border-radius: 10px;
        border: none;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
      ::slotted(p) {
        color: #fff;
        font-family: Poppins-regular;
        font-size: 0.9rem;
        font-weight: 400
      }
    </style>

    <button class="btn-login" type="submit">
      <slot name="message"></slot>
    </button>

`

class authButtons extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" })
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("auth-buttons", authButtons);
