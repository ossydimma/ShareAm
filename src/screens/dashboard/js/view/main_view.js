import { viewChatSample } from "./../../../../variables/mock_variables/mock_view.js";

const chatBubblesWrapper = document.querySelector(".chat-bubbles-wrapper");

viewChatSample.forEach((item) => {
  if (Object.keys(item).pop() === "sent") {
    const sentChat = document.createElement("div");
    sentChat.classList.add("sent-chat");
    sentChat.innerHTML = `
          <p class="you-username desktop-msg-subtitle-txt">You</p>
          <div class="you-text-and-time-wrapper">
            <p class="user-text desktop-sent-txt">
               Yes, it will decrease the loading 👍 Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit
            </p>
            <div class="time-tick-wrapper">
              <p class="user-text-delivery-time desktop-sent-date-txt">
                12:07pm
              </p>
              <img src="../../assets/icons/double-tick.svg" alt="" />
            </div>
          </div>
  `;
    chatBubblesWrapper.appendChild(sentChat);
  } else {
    const receivedChat = document.createElement("div");
    receivedChat.classList.add("received-chat");
    receivedChat.innerHTML = `
      <div class="user-message-box">
                  <a
                    href="#"
                    class="first-user-profile-picture user-profile-picture"
                  ></a>
                  <p class="userName desktop-msg-subtitle-txt">Shagari</p>
                </div>

                <div class="text-and-time-wrapper">
                  <p class="user-text desktop-sent-txt">
                    Hello guys, what's your opinion?Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Eaque quibusdam exercitationem
                    velit adipisci consequuntur error ut corrupti aspernatur
                    explicabo perferendis delectus ab enim sequi eum aliquam,
                    culpa, consectetur iusto voluptates! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Neque odio saepe cumque
                    mollitia magnam aliquid a expedita nesciunt eius illo,
                    voluptas autem non dignissimos eum dolore rerum incidunt,
                    obcaecati cupiditate?
                  </p>
                  <p class="user-text-delivery-time desktop-sent-date-txt">
                    12:05pm
                  </p>
                </div>
    `;
    chatBubblesWrapper.appendChild(receivedChat);
  }
});

// ------------ Users display ----------//

import { callParticipants } from "./../../../../variables/mock_variables/mock_view.js";
const participantsDisplay = document.getElementById("users-display");

callParticipants.forEach((item) => {
  if (Object.keys(item).pop() === "listener") {
    const listenerDisplay = document.createElement("div");
    listenerDisplay.classList.add("listener-display");
    listenerDisplay.innerHTML = `
     <div class="user-img call-participants listener-display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="15"
                  height="15"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class="microphone"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="4.8"
                    ry="4.8"
                    fill="#fe0000"
                    shape="rounded"
                    transform="matrix(0.85,0,0,0.85,1.8000000000000007,1.8000000000000007)"
                  ></rect>
                  <g
                    transform="matrix(0.6500000000000006,0,0,0.6500000000000006,4.199912548065181,4.200000000000001)"
                  >
                    <g fill="#000">
                      <path
                        d="M5.847 12c0 3.314 2.548 6 5.692 6 1.23 0 2.369-.41 3.3-1.11l.678.716A6.393 6.393 0 0 1 11.54 19c-3.669 0-6.642-3.134-6.642-7 0-.552-.425-1-.95-1S3 11.448 3 12c0 4.633 3.322 8.448 7.592 8.945l-.001.055v1H8.693c-.524 0-.949.448-.949 1s.425 1 .949 1h5.693c.524 0 .949-.448.949-1s-.425-1-.949-1h-1.898v-1l-.001-.055a8.274 8.274 0 0 0 4.383-1.913l2.51 2.646c.37.39.971.39 1.342 0 .37-.39.37-1.024 0-1.414L4.62 3.293a.915.915 0 0 0-1.342 0c-.37.39-.37 1.024 0 1.414l2.569 2.707zM6.478 3.251l10.368 10.927c.25-.675.387-1.41.387-2.178V6c0-3.314-2.55-6-5.693-6-2.205 0-4.116 1.32-5.062 3.251zM17.569 14.94l1.409 1.485A9.337 9.337 0 0 0 20.078 12c0-.552-.425-1-.949-1s-.949.448-.949 1c0 1.05-.219 2.046-.612 2.94z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                        class=""
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
    `;
    participantsDisplay.appendChild(listenerDisplay);
  } else {
    const speakerDisplay = document.createElement("div");
    speakerDisplay.classList.add("speaker-display");
    speakerDisplay.innerHTML = ` 
      <div class="user-img call-participants speaker-display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="15"
                  height="15"
                  x="0"
                  y="0"
                  viewBox="0 0 384 384"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                  class="microphone"
                >
                  <rect
                    width="384"
                    height="384"
                    rx="76.8"
                    ry="76.8"
                    fill="#04fe3b"
                    shape="rounded"
                    transform="matrix(1,0,0,1,0,0)"
                  ></rect>
                  <g
                    transform="matrix(0.5599999999999996,0,0,0.5599999999999996,84.48000000000009,84.48000000000009)"
                  >
                    <path
                      d="M176 288c0 8.832 7.168 16 16 16s16-7.168 16-16V96c0-8.832-7.168-16-16-16s-16 7.168-16 16zM16 96c-8.832 0-16 7.168-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16V112c0-8.832-7.168-16-16-16zM152 256V128c0-8.832-7.168-16-16-16s-16 7.168-16 16v128c0 8.832 7.168 16 16 16s16-7.168 16-16zM80 240c8.832 0 16-7.168 16-16v-64c0-8.832-7.168-16-16-16s-16 7.168-16 16v64c0 8.832 7.168 16 16 16zM264 256V128c0-8.832-7.168-16-16-16s-16 7.168-16 16v128c0 8.832 7.168 16 16 16s16-7.168 16-16zM368 96c-8.832 0-16 7.168-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16V112c0-8.832-7.168-16-16-16zM304 144c-8.832 0-16 7.168-16 16v64c0 8.832 7.168 16 16 16s16-7.168 16-16v-64c0-8.832-7.168-16-16-16zM176 368c0 8.832 7.168 16 16 16s16-7.168 16-16v-16c0-8.832-7.168-16-16-16s-16 7.168-16 16zM192 48c8.832 0 16-7.168 16-16V16c0-8.832-7.168-16-16-16s-16 7.168-16 16v16c0 8.832 7.168 16 16 16zm0 0"
                      fill="#000000"
                      opacity="1"
                      data-original="#000000"
                      class=""
                    ></path>
                  </g>
                </svg>
              </div>`;
    participantsDisplay.appendChild(speakerDisplay);
  }
});

// -----------ChatBox toggle and display ------------ //
const chatBox = document.getElementById("chat-box");
const activitiesBtn = document.getElementById("activities-btn");

const handleChatBoxToggle = () => {
  chatBox.classList.toggle("display-chat-box");
};

handleChatBoxToggle();

activitiesBtn.addEventListener("click", handleChatBoxToggle);

const handleChatBoxDisplay = () => {
  if (
    window.innerWidth >= 992 &&
    chatBox.classList.contains("display-chat-box")
  ) {
    chatBox.classList.remove("display-chat-box");
  }
};
handleChatBoxDisplay();

window.addEventListener("resize", handleChatBoxDisplay);
