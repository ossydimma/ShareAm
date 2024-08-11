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
}

.startup-body {
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
}

.startUp-container {
  height: 58vh;
  width: 32vw;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
}

.exit {
  cursor: pointer;
  margin: 4vh 2vw 1vh auto;
}

.startUp-content-wallaper {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 3vw;
}

.startUp-title-txt {
  text-align: center;
  font-family: Poppins-regular;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1.5vh;
}

.startUp-subtitle-txt {
  text-align: center;
  font-family: Poppins-regular;
  font-size: 0.68rem;
  font-weight: 500;
  margin: 2vh 0 3vh 0;
}

.set-img {
  width: 14vw;
  margin-bottom: 3vh;
}

.purple-btn {
  background: #9897fb;
  border: none;
  cursor: pointer;
  width: 23vw;
  padding: 0.6vh 0;
  border-radius: 10px;
  margin-bottom: 3vh;
}

.purple-btn:hover {
  background: #7170d8;
}

.purple-btn-txt {
  color: #303030;
  font-family: Poppins-medium;
  font-size: 1rem;
  font-weight: 600;
}


/* ------------ LIGHT AND DARK MODE ----------- */
@media (prefers-color-scheme: light) {
   .startUp-container{
    background: #fff;
  }

  .startUp-title-txt {
    color: #000;
  }

  .startUp-subtitle-txt {
    color: rgba(34, 32, 32, 0.9);
  }

}

@media (prefers-color-scheme: dark) {
.startUp-container {
    background: rgba(31, 32, 31, 0.9);
  }

  .startUp-title-txt {
    color: #fff;
  }

   .startUp-subtitle-txt{
    color: #a9a9a9;
  }

}

</style>

<div class="startUp-container">
        <div class="exit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.89324 3.45816L7.51247 5.92536L5.04527 3.54459C4.74253 3.25245 4.26009 3.26105 3.96795 3.56379L3.43889 4.11206C3.14675 4.4148 3.15535 4.89724 3.45809 5.18938L5.92529 7.57015L3.54452 10.0373C3.25238 10.3401 3.26098 10.8225 3.56372 11.1147L4.11199 11.6437C4.41473 11.9359 4.89717 11.9273 5.18931 11.6245L7.57008 9.15733L10.0373 11.5381C10.34 11.8302 10.8225 11.8216 11.1146 11.5189L11.6437 10.9706C11.9358 10.6679 11.9272 10.1854 11.6245 9.8933L9.15726 7.51253L11.538 5.04534C11.8302 4.7426 11.8216 4.26016 11.5188 3.96802L10.9706 3.43896C10.6678 3.14682 10.1854 3.15542 9.89324 3.45816Z"
              fill="#979797"
            />
          </svg>
        </div>

        <section class="startUp-content-wallaper">
          <svg
            width="130"
            height="12"
            viewBox="0 0 130 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="65" cy="6" r="5" stroke="#A9A9A9" stroke-width="2" />
            <circle cx="124" cy="6" r="5" stroke="#A9A9A9" stroke-width="2" />
            <line
              x1="12"
              y1="6"
              x2="59"
              y2="6"
              stroke="#A9A9A9"
              stroke-width="2"
            />
            <line
              x1="71"
              y1="6"
              x2="118"
              y2="6"
              stroke="#A9A9A9"
              stroke-width="2"
            />
            <circle cx="6" cy="6" r="5" stroke="#1058E8" stroke-width="2" />
          </svg>

          <h1 class="startUp-title-txt">Set up your ShareAm experience</h1>
          <p class="startUp-subtitle-txt">
            Customize your account settings to make ShareAm work for you. You
            can always update them later if you change your mind.
          </p>
          <div>
            <img
              class="set-img"
              src="../../assets/images/People meeting online via video conference 1.png"
              alt=""
            />
          </div>
          <button class="purple-btn-txt purple-btn">Get Started</button>
        </section>
      </div>
   
`;

class GetStarted extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("get-started", GetStarted);
