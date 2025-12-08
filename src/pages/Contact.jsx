import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted: ", formData);
    // alert("message Sent Successfully!");
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });
  }

  return (
    <div className="w-full p-4 xl:p-2">
      <div className="wrapper max-w-6xl md:p-10 p-5 min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-3xl bg-[#E6E6E6] shadow-[7px_7px_0px_#555] mx-auto mt-22 mb-5">
        <div className="first_content space-y-8 flex flex-col justify-center">
          <h2 className="flex flex-col font-extrabold text-4xl">
            <span>Get in</span>
            <span>touch with us</span>
          </h2>
          <p>
            We’re here to support you. Whether you want to learn more about our
            projects, partner with us, volunteer, or contribute to a cause, our
            team is always ready to help.
          </p>
          <div className="email">
            <p className="font-medium">Email:</p>
            <p className="font-extrabold text-lg">
              swastiksrijanfoundation@gmail.com{" "}
            </p>
          </div>
          <div className="phone">
            <p className="font-medium">Phone:</p>
            <p className="font-extrabold text-lg">+91 9424626518 </p>
          </div>
        </div>
        <div className="second_content bg-[#FFFFFF] p-6 rounded-2xl">
          <form action="" className="space-y-6">
            <div className="name grid grid-cols-2 gap-6">
              <div className="first_name flex flex-col gap-1">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id=""
                  placeholder=""
                  className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="last_name flex flex-col gap-1">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id=""
                  placeholder=""
                  className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="email flex flex-col gap-1">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder=""
                className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="message flex flex-col gap-1">
              <label htmlFor="">How can we help you?</label>
              <textarea
                name="message"
                id=""
                rows={3}
                className="w-full px-4 py-2 bg-[#F2F2F2] border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="btn">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-[#0D0D0D] active:scale-96 transition-all duration-150 text-white font-medium flex items-center justify-center text-lg tracking-wide gap-3 px-6 py-3 cursor-pointer rounded-2xl"
              >
                <span>Send Message</span>
                <img src="./images/send_msg.svg" alt="" className="w-8 hover:rotate-50 transition-all duration-200" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
