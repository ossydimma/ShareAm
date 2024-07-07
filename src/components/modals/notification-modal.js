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

.notification-container {
  height: 80vh;
  width: 40vw;
  backdrop-filter: blur(3px);
  border-radius: 12px;
}

.notification-section1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:3vh 4vw;
}

.notification-section1-div1-left {
  color: #fff;
  font-family: Poppins-bold;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.notification-section2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6vh;
  border-top: 1.4px solid #000;
}

.notification-section2-span {
  color: #fff;
  font-family: Poppins-bold;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;
}

.notification-section2 p {
  color: #fff;
  text-align: center;
  font-family: Poppins-medium;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
}

/* ------------ LIGHT AND DARK MODE ----------- */
@media (prefers-color-scheme: light) {
  .notification-container {
    background: linear-gradient(
      180deg,
      #584273 0%,
      rgb(51, 104, 139) 50%,
      #f1f1f1 90%
    );
  }
}

@media (prefers-color-scheme: dark) {

  .notification-container {
    background: linear-gradient(
      180deg,
      #584273 0%,
      rgb(31, 66, 90) 60%,
      rgba(2, 114, 188, 0) 96.08%
    );
  }
}

  
</style>

 <div class="notification-container">
      <section class="notification-section1">
        <p class="notification-section1-div1-left">Notifications</p>
        <img
          class="notification-section1-div1-right"
          src="../../assets/images/golden bell.png"
        />
      </section>

      <section class="notification-section2">
        <p>
          <span class="notification-section2-span">No new notifications</span
          >
          </br>
          check back to see new @ mentions,</br>
          reactions, quotes and much more
        </p>
      </section>
    </div>

   
`;

class Notification extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("notification-modal", Notification);
