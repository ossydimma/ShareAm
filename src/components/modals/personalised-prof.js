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

.profie-modal {
  height: 63vh;
}

.add-pp-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #1058e8;
  font-family: Poppins-regular;
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 2vh;
}

#username {
  width: 20vw;
  height: 4vh;
  border-radius: 10px;
  outline: none;
  padding: 0 1vw;
  margin: 0.5vh 0 2vh 0;
  font-family: Poppins-medium;
  font-size: 0.8rem;
  background: none;
}

#profilePic {
  display: none;
}

.personal-input {
  text-align: start;
}

.icon-sec {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}

.icon-sec svg {
  width: 11vw;
  height: 11vh;
}

.username-txt {
  color: #a9a9a9;
  font-family: Poppins-medium;
  font-size: 0.7rem;
  font-weight: 600;
}

.blue-btn {
  width: 20vw;
  padding: 0.6vh 0;
  border-radius: 10px;
  background: #1376e3;
  border: none;
  cursor: pointer;
}

.blue-btn:hover {
  background-color: #1058e8;
}

.blue-btn-txt {
  color: #fff;
  font-family: Poppins-regular;
  font-size: 0.9rem;
  font-weight: 600;
}

.back-skip-btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3vh;
}

.back {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5vw;
  margin: 0 auto 0 0;
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

.skip-txt {
  color: #1058e8;
  font-family: poppins-medium;
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.skip-txt:hover {
  color: #1376e3;
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

   #username {
    border: 1px solid #585858;
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

 

    #username {
    border: 1px solid #a9a9a9;
  }

}

</style>

  <div class="startUp-container profie-modal">
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
          <div>
            <svg
              width="110"
              height="12"
              viewBox="0 0 130 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="65" cy="6" r="6" fill="#1058E8" />
              <circle
                cx="124"
                cy="6"
                r="5"
                stroke="#1058E8"
                stroke-opacity="0.9"
                stroke-width="2"
              />
              <line
                x1="12"
                y1="6"
                x2="59"
                y2="6"
                stroke="#1058E8"
                stroke-opacity="0.9"
                stroke-width="2"
              />
              <line
                x1="71"
                y1="6"
                x2="118"
                y2="6"
                stroke="#1058E8"
                stroke-opacity="0.9"
                stroke-width="2"
              />
              <circle cx="6" cy="6" r="6" fill="#1058E8" />
              <path
                d="M9.29167 3.5875L4.29167 8.5875L2 6.29583L2.5875 5.70833L4.29167 7.40833L8.70417 3L9.29167 3.5875Z"
                fill="white"
              />
              <path
                d="M68.2917 3.5875L63.2917 8.5875L61 6.29583L61.5875 5.70833L63.2917 7.40833L67.7042 3L68.2917 3.5875Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 class="startUp-title-txt">Personalize your profile</h4>
          <p class="startUp-subtitle-txt">
            Your profile picture and display name will be visible to others on
            Zoom during meetings, in chats, and on your profile.
          </p>

          <div class="icon-sec">
            <svg
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M65.3337 35.0003C65.3337 39.5974 63.5075 44.0062 60.2568 47.2568C57.0062 50.5075 52.5974 52.3337 48.0003 52.3337C43.4032 52.3337 38.9944 50.5075 35.7438 47.2568C32.4932 44.0062 30.667 39.5974 30.667 35.0003C30.667 30.4032 32.4932 25.9944 35.7438 22.7438C38.9944 19.4932 43.4032 17.667 48.0003 17.667C52.5974 17.667 57.0062 19.4932 60.2568 22.7438C63.5075 25.9944 65.3337 30.4032 65.3337 35.0003ZM56.667 35.0003C56.667 37.2989 55.7539 39.5033 54.1286 41.1286C52.5033 42.7539 50.2989 43.667 48.0003 43.667C45.7018 43.667 43.4974 42.7539 41.8721 41.1286C40.2468 39.5033 39.3337 37.2989 39.3337 35.0003C39.3337 32.7018 40.2468 30.4974 41.8721 28.8721C43.4974 27.2468 45.7018 26.3337 48.0003 26.3337C50.2989 26.3337 52.5033 27.2468 54.1286 28.8721C55.7539 30.4974 56.667 32.7018 56.667 35.0003Z"
                fill="#999999"
                fill-opacity="0.6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.0002 0.333496C21.6752 0.333496 0.333496 21.6752 0.333496 48.0002C0.333496 74.3252 21.6752 95.6668 48.0002 95.6668C74.3252 95.6668 95.6668 74.3252 95.6668 48.0002C95.6668 21.6752 74.3252 0.333496 48.0002 0.333496ZM9.00016 48.0002C9.00016 57.0568 12.0898 65.3942 17.2682 72.0155C20.9048 67.2397 25.5964 63.3694 30.9764 60.7068C36.3563 58.0443 42.279 56.6616 48.2818 56.6668C54.2069 56.6612 60.0551 58.0081 65.3809 60.6049C70.7066 63.2017 75.3693 66.9798 79.0138 71.6515C82.7684 66.7271 85.2964 60.9794 86.3887 54.884C87.4809 48.7887 87.106 42.5208 85.295 36.5991C83.4839 30.6774 80.2888 25.272 75.9739 20.8303C71.6591 16.3886 66.3486 13.0382 60.4818 11.0564C54.6151 9.07451 48.3607 8.51817 42.2362 9.43338C36.1118 10.3486 30.2933 12.709 25.2622 16.3194C20.2311 19.9298 16.132 24.6863 13.3042 30.1953C10.4763 35.7044 9.00095 41.8077 9.00016 48.0002ZM48.0002 87.0002C39.0473 87.0136 30.3646 83.9337 23.4215 78.2815C26.2162 74.2807 29.936 71.0141 34.2643 68.7598C38.5927 66.5055 43.4016 65.33 48.2818 65.3335C53.1012 65.3296 57.8519 66.4756 62.1395 68.6763C66.4271 70.877 70.1277 74.0689 72.9342 77.9868C65.9371 83.8225 57.1114 87.0129 48.0002 87.0002Z"
                fill="#999999"
                fill-opacity="0.6"
              />
            </svg>
            <form
              action="/upload_profile-pic"
              method="post"
              enctype="multipart/form-data"
            >
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
              />
              <input
                type="submit"
                value="Add Profile Picture"
                class="add-pp-btn"
              />
            </form>
          </div>

          <div class="personal-input">
            <label for="username" class="username-txt">Display Name</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
          <button type="button" class="blue-btn-txt blue-btn">Next</button>

          <div class="back-skip-btns">
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
            <p class="skip-txt">Skip</p>
          </div>
        </section>
      </div>
   
`;

class PersonalisedProfile extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("personalised-profile", PersonalisedProfile);
