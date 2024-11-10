import { contactSample } from "../../../variables/mock_variables/mock_contact.js";
import { blockedSample } from "../../../variables/mock_variables/mock_contact.js";
import { favouriteSample } from "../../../variables/mock_variables/mock_contact.js";

const contactSection = document.getElementById("contact-section");
const blockedSection = document.getElementById("blocked-section");
const favouriteSection = document.getElementById("favourite-section");
const tabs = document.querySelectorAll(".tab");
const tabsContents = document.querySelectorAll(".tab-content");

// ---------- CONTACT SECTION ---------- //
const renderContactSection = () => {
  contactSample.forEach((item) => {
    const contactList = document.createElement("div");
    contactList.classList.add("contact-list");

    contactList.innerHTML = `
              <div class="each-contact">
                    <div class="participant-profile-wrapper">
                        ${
                          item.image
                            ? `<img src="${item.image}" alt="User Profile Picture" />`
                            : `<div class="user-profile-pic-placeholder">NU</div>`
                        }
                        <span class="online-status" style="background-color: ${
                          item.status === "active" ? "#3cea43" : "orange"
                        }"></span>
                    </div>
                    <div>
                        <p class="username-txt">${item.name}</p>
                        <p class="online-status-text">${item.statusText}</p>
                    </div>
                    <button class="blk-btn">Block</button>
                </div>`;
    contactSection.appendChild(contactList);
  });
};
renderContactSection();

// ---------- BLOCKED SECTION ---------- //
const renderBlockedSection = () => {
  blockedSample.forEach((item) => {
    const blockedList = document.createElement("div");
    blockedList.classList.add("contact-list");

    blockedList.innerHTML = `
              <div class="each-contact">
                    <div class="participant-profile-wrapper">
                        ${
                          item.image
                            ? `<img src="${item.image}" alt="User Profile Picture" />`
                            : `<div class="user-profile-pic-placeholder">NU</div>`
                        }
                    </div>
                    <div>
                        <p class="username-txt">${item.name}</p>
                    </div>
                    <button class="blk-btn">Unblock</button>
                </div>`;
    blockedSection.appendChild(blockedList);
  });
};
renderBlockedSection();

// ---------- CONTACT SECTION ---------- //
const renderFavouriteSection = () => {
  favouriteSample.forEach((item) => {
    const favouriteList = document.createElement("div");
    favouriteList.classList.add("contact-list");

    favouriteList.innerHTML = `
              <div class="each-contact">
                    <div class="participant-profile-wrapper">
                        ${
                          item.image
                            ? `<img src="${item.image}" alt="User Profile Picture" />`
                            : `<div class="user-profile-pic-placeholder">NU</div>`
                        }
                        <span class="online-status" style="background-color: ${
                          item.status === "active" ? "#3cea43" : "orange"
                        }"></span>
                    </div>
                    <div>
                        <p class="username-txt">${item.name}</p>
                        <p class="online-status-text">${item.statusText}</p>
                    </div>
                    <div class='icon-img'>
                    <span>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="26"
                          viewBox="0 0 24 26"
                          fill="none"
                          class="bookmark"
                      >
                        <g clip-path="url(#clip0_531_1267)" >
                            <path
                            d="M3.64258 4.05137C3.64258 3.23744 3.93809 2.45684 4.46411 1.8813C4.99012 1.30576 5.70356 0.982422 6.44746 0.982422L17.667 0.982422C18.4109 0.982422 19.1243 1.30576 19.6503 1.8813C20.1763 2.45684 20.4718 3.23744 20.4718 4.05137V24.7668C20.4718 24.9056 20.4373 25.0417 20.3721 25.1608C20.3069 25.2798 20.2134 25.3773 20.1016 25.4428C19.9898 25.5083 19.8638 25.5394 19.7371 25.5328C19.6104 25.5261 19.4877 25.482 19.3821 25.4051L12.0572 21.0856L4.73227 25.4051C4.62668 25.482 4.504 25.5261 4.3773 25.5328C4.25061 25.5394 4.12464 25.5083 4.01282 25.4428C3.901 25.3773 3.80751 25.2798 3.74231 25.1608C3.67711 25.0417 3.64264 24.9056 3.64258 24.7668V4.05137ZM6.44746 2.5169C6.07551 2.5169 5.71879 2.67857 5.45578 2.96634C5.19277 3.25411 5.04502 3.64441 5.04502 4.05137V23.3336L11.6687 19.525C11.7838 19.4412 11.919 19.3965 12.0572 19.3965C12.1954 19.3965 12.3306 19.4412 12.4457 19.525L19.0694 23.3336V4.05137C19.0694 3.64441 18.9216 3.25411 18.6586 2.96634C18.3956 2.67857 18.0389 2.5169 17.667 2.5169H6.44746Z"
                            fill-opacity="0.9" 
                            
                            />
                        </g>
                        <defs>
                        <clipPath id="clip0_531_1267" >
                            <rect
                              width="22.439"
                              height="24.5516"
                              fill="white"
                              transform="translate(0.837891 0.982422)"
                            />
                        </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <button class="blk-btn">Block</button>
                    </div>
                </div>`;
    favouriteSection.appendChild(favouriteList);
  });
};
renderFavouriteSection();

// -------- TAB TOGGLE --------- //
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

console.log("hello world");
