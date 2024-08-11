const template = document.createElement("template");
template.innerHTML = `
    <style>
        
        *{
            padding: 0;
            margin: 0;
        }

        @font-face {
            font-family: poppins-bold;
            src: url(../assets/fonts/Poppins-Bold.ttf);
        }

        @font-face {
            font-family: poppins-regular;
            src: url(../assets/fonts/Poppins-Regular.ttf);
        }

        @font-face {
            font-family: poppins-medium;
            src: url(../assets/fonts/Poppins-Medium.ttf);
        }

        @font-face {
            font-family: Rubik;
            src: url(../assets/fonts/Rubik-Italic-VariableFont_wght.ttf);
        }

        .popup-notification-container {
            height: 49px;
            /* margin-top: 2vh; */
            display: block;
        }
    
        #popup-notification {
            display: flex;
            width: 100%;
            height: 49px;
            align-items: center;
            justify-content: center;
            padding: 0 1vw;
            gap: 3vw;
            border-radius: 18px;
        }
        
        .popup-message {
            height: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.8vw;
        }

        .popup-txt {
            color: #000;
            font-family: poppins-regular;
            font-size: 1rem;
            font-weight: 600;
        }
        
        .close-popup-btn {
            cursor: pointer;
        }

        @media (prefers-color-scheme: dark) {
            #popup-notification {background: linear-gradient(
                90deg,
                #f1f1f1 1.22%,
                rgba(228, 208, 249, 0) 100%
            );
            }
        }

        @media (prefers-color-scheme: light) {
            #popup-notification {background: linear-gradient(
                90deg,
                #a0a0f6 1.22%,
                rgba(228, 208, 249, 0) 100%
                );
            }
        }
      
    </style>

    <div class="popup-notification-container">
        <div id="popup-notification">
            <div id="status-icon"></div>
            <div class="popup-message">
                <div class="popup-txt">
                  <slot name="message"></slot>
                </div>
                <div class="close-popup-btn">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V4.16667H15.8333V15.8333ZM14.1667 7L11.1667 10L14.1667 13L13 14.1667L10 11.1667L7 14.1667L5.83333 13L8.83333 10L5.83333 7L7 5.83333L10 8.83333L13 5.83333L14.1667 7Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
`;

class ToastPopUp extends HTMLElement {
  popupStatus;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }

  static get observedAttribute() {
    return ["status"];
  }

  get status() {
    return this.getAttribute("status");
  }

  connectedCallback() {
    const statusIcon = this.shadowRoot.getElementById("status-icon");
    if (this.status === "successful") {
      statusIcon.innerHTML =
            `<div class="successful-icon">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12" cy="12" r="12" fill="#0AD637" />
                    <path
                        d="M11.4976 13.1719C10.8503 13.8193 9.80077 13.8193 9.15344 13.1719L8.37204 12.3905C8.15627 12.1748 7.80643 12.1748 7.59065 12.3905C7.37487 12.6063 7.37487 12.9561 7.59065 13.1719L8.76274 14.344C9.62585 15.2071 11.0252 15.2071 11.8883 14.344L16.6325 9.59983C16.8483 9.38405 16.8483 9.03421 16.6325 8.81843C16.4167 8.60266 16.0669 8.60266 15.8511 8.81843L11.4976 13.1719Z"
                        fill="white"
                    />
                </svg>
            </div>`
    } else {
      statusIcon.innerHTML=
            `<div class="unsuccessful-icon">
                <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.9 17L12.5 13.4L16.1 17L17.5 15.6L13.9 12L17.5 8.4L16.1 7L12.5 10.6L8.9 7L7.5 8.4L11.1 12L7.5 15.6L8.9 17ZM12.5 22C11.1167 22 9.81667 21.7373 8.6 21.212C7.38334 20.6867 6.325 19.9743 5.425 19.075C4.525 18.1757 3.81267 17.1173 3.288 15.9C2.76333 14.6827 2.50067 13.3827 2.5 12C2.49933 10.6173 2.762 9.31733 3.288 8.1C3.814 6.88267 4.52633 5.82433 5.425 4.925C6.32367 4.02567 7.382 3.31333 8.6 2.788C9.818 2.26267 11.118 2 12.5 2C13.882 2 15.182 2.26267 16.4 2.788C17.618 3.31333 18.6763 4.02567 19.575 4.925C20.4737 5.82433 21.1863 6.88267 21.713 8.1C22.2397 9.31733 22.502 10.6173 22.5 12C22.498 13.3827 22.2353 14.6827 21.712 15.9C21.1887 17.1173 20.4763 18.1757 19.575 19.075C18.6737 19.9743 17.6153 20.687 16.4 21.213C15.1847 21.739 13.8847 22.0013 12.5 22Z"
                        fill="#FB0909"
                    />
                </svg>
            </div>
`
    }
  }
}

customElements.define("toast-popup", ToastPopUp);
