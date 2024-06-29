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

.one-time-container {
  height: 72vh;
  width: 41vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.back {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5vw;
  margin: 0 auto 0 0;
}

.input-container {
  display: flex;
  gap: 14px;
  margin: 4vh 0;
}

.input-container input {
  text-align: center;
  width: 3.5vw;
  height: 8vh;
  border-radius: 5px;
  border: 1px solid #9c9b9b;
  outline: none;
  font-family: Poppins-medium;
  font-size: 1rem;
  font-weight: 500;
}

.one-time-container .back {
  margin-top: 20vh;
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

.create-acc-title-txt {
  font-family: Poppins-regular;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 3vh;
}

.one-time-subtitle-txt {
  font-family: Poppins-regular;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
}

.one-time-subtitle-txt span {
  color: #585858;
  font-weight: 500;
}

.one-time-subtitle-txt strong {
  color: #0272bc;
}

.purple-btn-txt {
  color: #303030;
  font-family: Poppins-medium;
  font-size: 1rem;
  font-weight: 600;
}

.back-txt {
  color: #a9a9a9;
  font-family: poppins-medium;
  font-size: 0.7rem;
  font-weight: 600;
}

.back:hover .back-txt {
  color: #585858;
}

.back svg {
  fill: #a9a9a9;
}

.back:hover svg {
  fill: #585858;
}

/* ------------ LIGHT AND DARK MODE ----------- */
@media (prefers-color-scheme: light) {
  .one-time-container{
    background: #fff;
  }

  .create-acc-title-txt{
    color: #000;
  }

  .one-time-subtitle-txt {
    color: rgba(0, 0, 0, 0.52);
  }
}

@media (prefers-color-scheme: dark) {
  .one-time-container{
    background: rgba(31, 32, 31, 0.9);
  }

  .create-acc-title-txt{
    color: #fff;
  }

  .one-time-subtitle-txt{
    color: #a9a9a9;
  }

}

  
</style>

 <div class="one-time-container">
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
          <h1 class="create-acc-title-txt">One-Time Passcode</h1>
          <p class="one-time-subtitle-txt">
            To create your ShareAm account, check your email
            (UserEmail@Domain.com) and enter the verification code below.
          </p>
          <div class="input-container">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button class="purple-btn-txt purple-btn">verify</button>
          <p class="one-time-subtitle-txt">
            Can't find the email? <span>Resend</span> in <strong>3s</strong>
          </p>

          <div class="back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="7.5"
              viewBox="0 0 384 512"
            >
              <path
                fill=""
                d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"
              />
            </svg>
            <p class="back-txt">Back</p>
          </div>
        </section>
      </div>
   
`;

class PassCode extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("pass-code", PassCode);
