const template = document.createElement("template");
template.innerHTML = `
  <style>

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
      background-color: #a9a9a9;
      -webkit-transition: 0.2s;
      transition: 0.2s;
    }

    input:checked + .slider:before {
      background-color: #150aa1;
      /* border: solid 2px white; */
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


    

  </style>

 

  <div>

    <label class="switch">
     <input type="checkbox" part="check">
     <span class="slider round "></span>
    </label>
  
  </div>
`;

class ToggleButton extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("toggle-button", ToggleButton);
