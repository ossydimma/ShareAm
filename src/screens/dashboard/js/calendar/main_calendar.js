import { calendarSample } from "../../../../variables/mock_variables/mock_calendar.js";

const scheduleDiv = document.getElementById("schedule-div");

calendarSample.forEach((item) => {
  const scheduleDetail = document.createElement("div");
  scheduleDetail.classList.add("contact-details-div");

  scheduleDetail.innerHTML = `
        <div class="contact-details">
            <div class="contact-details1">
                <h1 class="contact-details1-top">
                    ${item.name ? item.name : item.username}
                </h1>
                <div class="contact-details1-bottom">
                    <div id="calender">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M1.93311 5.87778H13.0731"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M10.2764 8.31846H10.2821"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M7.50291 8.31846H7.5087"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M4.72362 8.31846H4.72941"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M10.2764 10.7477H10.2821"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M7.50291 10.7477H7.5087"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M4.72362 10.7477H4.72941"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M10.0273 1.25V3.30674"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            d="M4.97847 1.25V3.30674"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                            <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.1489 2.23706H4.85685C3.02142 2.23706 1.875 3.25952 1.875 5.13895V10.795C1.875 12.704 3.02142 13.7501 4.85685 13.7501H10.1431C11.9843 13.7501 13.125 12.7217 13.125 10.8423V5.13895C13.1308 3.25952 11.9901 2.23706 10.1489 2.23706Z"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            />
                        </svg>
                        <p>${item.date}</p>
                    </div>
                    <div id="time">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Iconly/Light/Time Circle">
                            <g id="Time Circle">
                                <path
                                id="Stroke 1"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.2812 7.50024C13.2812 10.6934 10.6931 13.2815 7.5 13.2815C4.30687 13.2815 1.71875 10.6934 1.71875 7.50024C1.71875 4.30712 4.30687 1.71899 7.5 1.71899C10.6931 1.71899 13.2812 4.30712 13.2812 7.50024Z"
                                stroke="#555555"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                                <path
                                id="Stroke 3"
                                d="M9.64482 9.3393L7.28857 7.93367V4.9043"
                                stroke="#555555"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                />
                            </g>
                            </g>
                        </svg>
                        <p>${item.time}</p>
                    </div>
                    <div id="status">
                        <span id="status-icon" style="background-color: ${item.status === "confirmed" ? "#3cea43" : item.status === "awaiting" ? "orange" : "red"}"></span>
                        <p>${item.status}</p>
                    </div>
                </div>
            </div>
                ${
                  item.image
                    ? `<div class="contact-details2">
                            <img 
                                src="${item.image}"
                                alt="Contact's Profile Picture"
                            />
                        </div>`
                    : `<div class="user-profile-pic-placeholder">NU</div>`
                }
        </div>
        <div class="contact-details-actions">
            <div class="action-btn cancel-btn">Cancel</div>
            <div class="action-btn reschedule-btn">Reschedule</div>
        </div>
    `;
  scheduleDiv.appendChild(scheduleDetail);

});

const textArea = document.getElementById("textarea");
const counterCharacters = document.querySelector(".input-limit-text");

textArea.oninput = function () {
    counterCharacters.innerHTML = textArea.value.length;
}