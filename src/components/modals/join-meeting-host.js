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
      html {
        font-size: 16px;
      }
      body {
        user-select: none;
        font-family: poppins-regular;
      }
      .join-meeting-container {
        display: flex;
        flex-direction: column;
        display: flex;
        align-items: center;
        gap: 4vh;
      }

      .user-actions-container {
        display: flex;
        flex-direction: column;
        display: flex;
        align-items: center;
        gap: 1vh;
        width: 40vw;
        height: 60vh;
      }

      .user-cam {
        width: 100%;
        height: 100%;
      }
      .user-actions {
        display: flex;
        align-items: center;
        gap: 3vw;
        margin-top: -15vh;
      }
      #mic-wrap {
        background-color: #1a71ff;
        padding: 2vh 1vw;
        border-radius: 18px;
        cursor: pointer;
      }
      #end-call-wrap {
        color: #fff;
        background-color: #ff4949;
        padding: 3vh 3vw;
        border-radius: 18px;
        cursor: pointer;
      }
      #vid-wrap {
        background-color: #1a71ff;
        padding: 2vh 1vw;
        border-radius: 18px;
        cursor: pointer;
      }
      .name-code-input {
        border: none;
        display: flex;
        align-items: center;
        width: 30vw;
        padding: 2.5vh 1vw;
        border-radius: 11px;
        font-size: 1vw;
      }

      .btn-login {
        background-color: #1376e3;
        padding: 1.5vh 10vw;
        border-radius: 10px;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1vw;
        cursor: pointer;
      }
      
      .btn-login:hover {
        background-color: #1058e8;
      }

      .blue-btn-txt {
        color: #fff;
        font-family: Poppins-regular;
        font-size: 0.9rem;
        font-weight: 600;
      }

    </style>

    <div class="join-meeting-container">
      <div class="user-actions-container">
        <img
            class="user-cam" 
            src="../../assets/images/Moderator Screen.png"
            alt="" />
        <div class="user-actions">
          <div id="mic-wrap">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 23.25C21.315 23.25 24 20.565 24 17.25V9C24 5.685 21.315 3 18 3C14.685 3 12 5.685 12 9V17.25C12 20.565 14.685 23.25 18 23.25Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.52539 14.4746V17.0246C6.52539 23.3546 11.6704 28.4996 18.0004 28.4996C24.3304 28.4996 29.4754 23.3546 29.4754 17.0246V14.4746"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9141 9.64469C17.2641 9.14969 18.7341 9.14969 20.0841 9.64469"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.8008 12.8255C17.5958 12.6155 18.4208 12.6155 19.2158 12.8255"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 28.5V33"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class= "blue-btn-txt" id="end-call-wrap">End Call</div>
          <div id="vid-wrap">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.617 23.8234H7.2437C3.55703 23.8234 2.33203 21.3734 2.33203 18.9118V9.08842C2.33203 5.40176 3.55703 4.17676 7.2437 4.17676H14.617C18.3037 4.17676 19.5287 5.40176 19.5287 9.08842V18.9118C19.5287 22.5984 18.292 23.8234 14.617 23.8234Z"
                stroke="white"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.7726 19.9502L19.5293 17.6752V10.3135L22.7726 8.03849C24.3593 6.93015 25.666 7.60682 25.666 9.55515V18.4452C25.666 20.3935 24.3593 21.0702 22.7726 19.9502Z"
                stroke="white"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.416 12.834C14.3825 12.834 15.166 12.0505 15.166 11.084C15.166 10.1175 14.3825 9.33398 13.416 9.33398C12.4495 9.33398 11.666 10.1175 11.666 11.084C11.666 12.0505 12.4495 12.834 13.416 12.834Z"
                stroke="white"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <input 
        type="text" 
        class="name-code-input"
        />
      <input 
        type="text" 
        class="name-code-input" 
        />
      <button 
            class="btn-login blue-btn-txt" 
            type="submit"
        >
            Join
        </button>
    </div>

   
`;

class JoinMeetingHost extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("join-meeting-host", JoinMeetingHost);
