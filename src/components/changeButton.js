const template = document.createElement("template");
template.innerHTML = `
    <style>
        #change-btn {
            width: 8vw;
            height: 6vh;
            border-radius: 60px;
            border: 1px solid #e4e4e4;
            background: #1058e8;
            color: #fff;
            margin-left: auto;
            cursor: pointer;
        }
        ::slotted(p) {
            color: #fff;
            font-family: Poppins-regular;
            font-size: 0.9rem;
            font-weight: 400
        }
    </style>

    <button id="change-btn">
        <slot name="message"></slot>
    </button>
`;

class changeButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("change-button", changeButton);
