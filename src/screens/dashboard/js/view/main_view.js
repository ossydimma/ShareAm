import { viewChatSample } from "./../../../../variables/mock_variables/mock_view.js";

const chatBubblesWrapper = document.querySelector(".chat-bubbles-wrapper");

viewChatSample.forEach((item) => {
  // const chatBubble = document.createElement("div");
  // chatBubble.classList.add("received-chat");
  // chatBubble.innerHTML = `

  //   `;
  // chatBubblesWrapper.appendChild(chatBubble);
  console.log(item);
  console.log(Object.keys(item).pop());
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
