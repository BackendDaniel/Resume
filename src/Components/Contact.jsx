import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import emailjs from "emailjs-com";
import img from "../assets/contact.svg";
import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/mint.css"; // Choose a theme that suits your design

const Contact = ({ isDarkMode }) => {
  const [notification, setNotification] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const notificationContainer = document.getElementById(
      "notification-container"
    );

    if (!name || !email || !message) {
      // If any of the required fields is empty, show an error message and return
      new Noty({
        type: "error",
        text: "Please fill in all the required fields.",
        timeout: 3000,
      }).show();

      // Append the notification to the specified container
      notificationContainer.appendChild(
        document.querySelector(".noty_container")
      );

      return;
    }

    // All fields are filled, proceed with sending the email
    emailjs
      .sendForm(
        "service_vq0feyj",
        "template_nqg11m4",
        e.target,
        "ao3O5zSeKwfrkcait"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Use Noty for success notification
          new Noty({
            type: "success",
            text: "Your Message was Sent Successfully!",
            timeout: 3000,
          }).show();

          // Append the notification to the specified container
          notificationContainer.appendChild(
            document.querySelector(".noty_container")
          );

          // Reset the form fields
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending Message:", error.text);
          // Use Noty for error notification
          new Noty({
            type: "error",
            text: "Failed to send message. Please try again.",
            timeout: 3000,
          }).show();

          // Append the notification to the specified container
          notificationContainer.appendChild(
            document.querySelector(".noty_container")
          );
        }
      );
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-[-80px] md:px-32 px-5 my-10 pt-1 ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <Heading title1="Contact " title2="Me" />

      <div className="flex flex-col md:flex-row justify-between w-full">
        <form onSubmit={sendEmail} className="w-full md:w-2/5 space-y-2 pt-8">
          <div
            className={`flex flex-col mt-0 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <label htmlFor="Name">Full Name</label>
            <input
              className="py-3 px-2 rounded-lg  hover:hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div
            className={`flex flex-col ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email Address"
            />
          </div>
          <div
            className={`flex flex-col ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <label htmlFor="message">Message</label>
            <textarea
              className="py-3 px-2 rounded-lg hover:hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows="4"
            />
          </div>

          <div className="flex flex-row justify-center py-4">
            <Button type="submit" title="Send Message" />
          </div>
          <div id="notification-container"></div>
        </form>
        <div className="w-full md:w-2/4 ">
          <img src={img} alt="img" className="rounded-full w-3/4 pt-8" />
        </div>
      </div>
      {notification && (
        <div
          className={`${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white py-2 px-4 rounded-md mt-4 self-start`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default Contact;
