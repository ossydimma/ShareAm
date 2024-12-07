import { callInterfaceChatSample } from "../../../../variables/mock_variables/mock_call_interface.js";
import { participants } from "../../../../variables/mock_variables/mock_call_interface.js";
import { addUsers } from "../../../../variables/mock_variables/mock_call_interface.js";
import { presentTime } from "../../../../utils/date_time.js";

const chatBubblesWrapper = document.getElementById("chat-bubbles-wrapper");
const participantsOnScreenDisplay = document.getElementById("users-display");
const asideBox = document.getElementById("aside-box");
const activitiesBtn = document.getElementById("activities-btn");
const tabs = document.querySelectorAll(".tab");
const tabsContents = document.querySelectorAll(".tab-content");
const participantWrapper = document.querySelector(".participant-wrapper");
const totalParticipants = document.getElementById("total-participants");
const chatSubmission = document.getElementById("text-submit");
const emojiOverlay = document.getElementById("emoji-btn");
const emojiOverlayWrapper = document.getElementById("emoji-overlay-wrapper");
const inputAttachments = document.getElementById("attach-icon");
const attachListWrapper = document.getElementById("attach-list-wrapper");
const AddUserPopup = document.getElementById("add-user-popup");
const addUserIcon = document.getElementById("add-icon");
const eachUserWrapper = document.getElementById("each-user-wrapper");
const backNav = document.getElementById("back-nav");
const sidebarContainer = document.getElementById("sidebar-container");
const addUser = document.querySelector(".add-user");

const getTotalParticipants = () => {
  totalParticipants.textContent = participants.length;
};
getTotalParticipants();

// ------- ADD USER POPUP -------- //
const handleAddUserPopup = () => {
  addUsers.forEach((item) => {
    const addUserList = document.createElement("ul");
    addUserList.classList.add("each-user");
    addUserList.innerHTML = `
                  <div>
                      <span class="prof-pic">
                       ${
                         item.image
                           ? `
                            <img
                                src="${item.image}"
                                alt="User Profile Pic"
                            />
                            `
                           : `
                            <div class="user-profile-pic-placeholder">NU</div>`
                       } 
                      </div>
                      </span>
                      <p class="username-txt">${item.name}</p>
                      <span class="online-status-vidoe-icon">
                      <div class="online-stat">
                        <p class="online-status-mode" style="background-color: ${
                          item.status === "active" ? "#3cea43" : "orange"
                        }">
                        </p>
                        <p class="online-status-text">${item.statusText}</p>
                      </div>
                      <div class="video-icon">
                      ${
                        item.videoIcon
                          ? `<svg
                          width="32"
                          height="31"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.49072 6H15.4907C16.5907 6 17.4907 6.9 17.4907 8V16C17.4907 17.1 16.5907 18 15.4907 18H4.49072C3.39072 18 2.49072 17.1 2.49072 16V8C2.49072 6.9 3.39072 6 4.49072 6Z"
                            fill="#4CAF50"
                          />
                          <path
                            d="M22.4907 17.5L17.4907 14.5V9.5L22.4907 6.5V17.5Z"
                            fill="#388E3C"
                          />
                        </svg>`
                          : `<svg
                          width="35"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.3462 4.5H3.11371C2.71589 4.5 2.33436 4.65804 2.05305 4.93934C1.77175 5.22064 1.61371 5.60218 1.61371 6V18C1.61021 18.0725 1.61021 18.145 1.61371 18.2175L15.3462 4.5ZM22.2087 6.0825C22.0895 6.02555 21.9573 6.00111 21.8256 6.01165C21.6939 6.02218 21.5674 6.06732 21.4587 6.1425L17.3637 9.045V7.83L22.6137 2.58L21.5337 1.5L1.61371 21.42L2.69371 22.5L5.69371 19.5H15.8637C16.2615 19.5 16.6431 19.342 16.9244 19.0607C17.2057 18.7794 17.3637 18.3978 17.3637 18V14.955L21.4287 17.8575C21.5407 17.9372 21.6723 17.9846 21.8094 17.9946C21.9464 18.0045 22.0836 17.9766 22.2059 17.9139C22.3282 17.8513 22.4309 17.7562 22.5028 17.6391C22.5747 17.522 22.6131 17.3874 22.6137 17.25V6.75C22.614 6.61228 22.5764 6.47714 22.5049 6.35939C22.4335 6.24165 22.331 6.14585 22.2087 6.0825Z"
                            fill="#E4E4E4"
                          />
                        </svg>`
                      }
                      </div>
                      </span>
                    </div>
    `;
    eachUserWrapper.appendChild(addUserList);
  });
};
handleAddUserPopup();

// ------- DISPLAY ADD USER POPUP -------- //
const displayAddUserPopup = () => {
  if (AddUserPopup.classList.contains("display-add-user-popup")) {
    AddUserPopup.classList.remove("display-add-user-popup");
  } else {
    AddUserPopup.classList.add("display-add-user-popup");
  }
};
addUserIcon.addEventListener("click", displayAddUserPopup);

// ------ Message Tab -------- //
const handleChatBubble = () => {
  callInterfaceChatSample.forEach((item) => {
    if (Object.keys(item).pop() === "sent") {
      const sentChat = document.createElement("div");
      sentChat.classList.add("sent-chat");
      sentChat.innerHTML = `
          <p class="you-username desktop-msg-subtitle-txt">You</p>
          <div class="you-text-and-time-wrapper">
            <p class="user-text desktop-sent-txt">
               ${item.sent.message}
            </p>
            <div class="time-tick-wrapper">
              <p class="user-text-delivery-time desktop-sent-date-txt">
                ${item.sent.deliveryTime}
              </p>
              <img src="../../assets/icons/double-tick.svg" class="double-tick" alt="" />
            </div>
          </div>
  `;
      chatBubblesWrapper.appendChild(sentChat);
      sentChat.scrollTop = sentChat.scrollHeight;
    } else {
      const receivedChat = document.createElement("div");
      receivedChat.classList.add("received-chat");
      receivedChat.innerHTML = `
                <div class="user-message-box">
                  <div class="profile-pic">
                      ${
                        item.received.image
                          ? `
                            <img
                              src="${item.received.image}"
                              alt="User Profile Pic"
                            />
                          `
                          : `
                        <div class="user-profile-pic-placeholder">NU</div>`
                      } 
                  </div>
                      <p class="userName">${
                        item.received.name
                          ? `<p class="desktop-msg-subtitle-txt">${item.received.name}</p>`
                          : `<p class="desktop-msg-subtitle-txt">${item.received.username}</p>`
                      }</p>
                </div>

                <div class="text-and-time-wrapper">
                  <p class="user-text desktop-sent-txt">
                    ${item.received.message}
                  </p>
                  <p class="user-text-delivery-time desktop-sent-date-txt">
                    ${item.received.deliveryTime}
                  </p>
                </div>
    `;
      chatBubblesWrapper.appendChild(receivedChat);
    }
  });
};
handleChatBubble();

// ------- Participant Tab -------- //
const handleEachParticiantsList = () => {
  participants.forEach((item) => {
    const participantsList = document.createElement("ul");
    participantsList.classList.add("participant-list");
    participantsList.innerHTML = `
                  <li class="each-participant">
                    <div class="participant-profile-wrapper">
                      <div class="participant-profile-picture">
                       ${
                         item.image
                           ? `
                            <img
                                src="${item.image}"
                                alt="User Profile Pic"
                            />
                            `
                           : `
                            <div class="user-profile-pic-placeholder">NU</div>`
                       } 
                      </div>
                        <span
                          class="online-status" style="background-color: ${
                            item.status === "active" ? "#3cea43" : "orange"
                          }">
                        </span>
                    </div>
                    <p class="participant-txt">${item.name}</p>
                    <span class="participant-microphone">
                     ${
                       item.microphone
                         ? `<div class="mic-on"> 
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="10.5"
                                viewBox="0 0 384 512"
                                
                              >
                                <path
                                  fill="#dadada"
                                  d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z"
                                />
                              </svg>
                            </div>
                          `
                         : `<div class="mic-off"> 
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="17.5"
                                viewBox="0 0 640 512"
                                
                              >
                                <path
                                  fill="#dadada"
                                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 21.2-5.1 41.1-14.2 58.7L416 300.8 416 96c0-53-43-96-96-96s-96 43-96 96l0 54.3L38.8 5.1zM344 430.4c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128l0-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6z"
                                />
                              </svg>
                            </div>
                          `
                     } 
                    </span>
                    <span class="ellipsis-menu">
                        <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="#DAD9D9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          <title />
                          <g id="Complete">
                            <g id="F-More">
                              <path
                                d="M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z"
                                id="Vertical"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      </span>
                      <ul class="menu-list menu-close">
                          <li class="menu-txt">View profile</li>
                          <li class="menu-txt">Mute</li>
                          <li class="menu-txt">Chat</li>
                       </ul>
                  </li>
`;
    participantWrapper.appendChild(participantsList);
  });
};
handleEachParticiantsList();

// ------------ Users display ----------//
const handleParticipantsOnScreenDisplay = () => {
  participants.slice(1, 4).forEach((item) => {
    const listenerDisplay = document.createElement("div");
    listenerDisplay.classList.add("listener-display");
    listenerDisplay.innerHTML = `
          <div class="user-img call-participants listener-display">
            
              ${
                item.image
                  ? `
                              <img
                                  src="${item.image}"
                                  alt="User Profile Pic"
                              />
                              `
                  : `
                              <div class="user-img-display">NU</div>`
              }
            ${
              item.speaking
                ? `
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
                </svg>`
                : `<svg
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
                    width="30"
                    height="30"
                    rx="4.8"
                    ry="4.8"
                    fill="#fe0000"
                    shape="rounded"
                    transform="matrix(0.85,0,0,0.85,1.8000000000000007,1.8000000000000007)"
                  ></rect>
                  <g transform="matrix(0.6500000000000006,0,0,0.6500000000000006,4.199912548065181,4.200000000000001)">
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
                </svg>`
            }
            
          </div>
    `;
    participantsOnScreenDisplay.appendChild(listenerDisplay);
  });
};
handleParticipantsOnScreenDisplay();

// -----------AsideBox toggle and display ------------ //
const handleChatBoxToggle = () => {
  asideBox.classList.toggle("display-aside-box");
};

handleChatBoxToggle();

activitiesBtn.addEventListener("click", handleChatBoxToggle);

const handleChatBoxDisplay = () => {
  if (
    window.innerWidth >= 992 &&
    asideBox.classList.contains("display-aside-box")
  ) {
    asideBox.classList.remove("display-aside-box");
  }
};
handleChatBoxDisplay();

window.addEventListener("resize", handleChatBoxDisplay);

//-------- MESSAGE AND PARTICIPANT TOGGLE --------//
const handleTab = () => {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      tabsContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabsContents[index].classList.add("active");
    });
  });
};
handleTab();

// --------- PARTICIPANT DROPDOWN --------- //
const participantProfilePics = document.querySelectorAll(".ellipsis-menu");

const menuContents = document.querySelectorAll(".menu-list");
let current;

participantProfilePics.forEach((participant, index) => {
  participant.addEventListener("click", () => {
    if (current === index) {
      menuContents[current].classList.toggle("menu-display");
    } else {
      menuContents.forEach((menu) => {
        menu.classList.remove("menu-display");
      });
      menuContents[current].classList.add("menu-display");
    }
    // menuContents.forEach((menu) => {
    //   menu.classList.remove("menu-display");
    // });
    current = index;
    console.log(index);
    console.log(menuContents[current]);
    // menuContents[current].classList.add("menu-display");
  });
});
// menuContents[current].classList.add(".menu-display");
// console.log("ytr", menuContents[current]);

function handleMenuListDisplay() {
  menuContents.forEach((menu, index) => {
    menu.addEventListener("click", () => {
      console.log(index);
    });
  });
}

handleMenuListDisplay();

// ------- SENDER MESSAGE ------- //

const handleSendingMessage = (e) => {
  e.preventDefault();
  let input = document.getElementById("messages");
  let messageText = input.value.trim();
  if (messageText === "") {
    return;
  }
  presentTime();
  const messageObject = {
    sent: {
      message: messageText,
      deliveryTime: presentTime(),
    },
  };
  callInterfaceChatSample.push(messageObject);
  handleChatBubble();
  updateScroll();
  messageText = "";
  input.value = "";

  let attachFile = document.getElementById("attach-input");
  let file = attachFile.value.trim();
};

chatSubmission.addEventListener("submit", handleSendingMessage);

const updateScroll = () => {
  let chatScroll = document.getElementById("chat-wrap");
  chatScroll.scrollTop = chatScroll.scrollHeight;
};
updateScroll();

// -------- EMOJI OVERLAY ----------- //

emojiOverlay.addEventListener("click", (event) => {
  event.stopPropagation();
  if (window.getComputedStyle(emojiOverlayWrapper).display === "none") {
    emojiOverlayWrapper.style.display = "block";
  } else {
    emojiOverlayWrapper.style.display = "none";
  }
});

emojiOverlayWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (
    emojiOverlayWrapper.style.display === "block" &&
    !emojiOverlay.contains(event.target)
  ) {
    emojiOverlayWrapper.style.display = "none";
  }
});

// -------- ATTACHMENT OVERLAY ----------- //
const displayAttachOverlay = () => {
  if (attachListWrapper.classList.contains("display-attach-list")) {
    attachListWrapper.classList.remove("display-attach-list");
  } else {
    attachListWrapper.classList.add("display-attach-list");
  }
};

inputAttachments.addEventListener("click", displayAttachOverlay);

const handleMeetingState = () => {
  const meetingToken = localStorage.getItem("meetingToken");

  if (meetingToken) {
    sidebarContainer.style.display = "none";
    backNav.style.display = "block";
    addUser.classList.add("copy-meeting-link");
    addUser.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  height="20" width="20" viewBox="0 0 448 512">
    <path fill="#101623" d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/>
    </svg>
    <p class="copy-meeting-link-txt">Copy meeting link</p>`;
  } else {
    sidebarContainer.style.display = "block";
    backNav.style.display = "none";
  }
};

handleMeetingState();

async function gotojoinmeeting() {
  window.location.href = "../authentication/join_meeting.html";
}

const handleEndCall = () => {
  localStorage.removeItem("meetingToken");
  gotojoinmeeting();
};

backNav.addEventListener("click", handleEndCall);
