import { FaArrowRightLong } from "react-icons/fa6";

const Members = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFF2E5]">
      <div className="wrapper max-w-6xl mx-auto my-24 p-4 xl:p-2 space-y-4">
        <div className="">
          <img src="./images/members_pics.png" alt="" />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="first space-y-4">
            <h2 className="text-xl font-extrabold">
              Swastik Srijan Foundation – Membership Program
            </h2>
            <p className="font-semibold text-zinc-600 leading-7">
              Embedded in Swastik Srijan Foundation’s vision and mission is a
              strong belief in long-term commitment, collective responsibility,
              and sustainable change. Our Membership Program allows you to
              support this mission consistently and be part of our journey
              beyond volunteering.
            </p>
            <img src="./images/mem_image1.png" alt="member helps image" />
            <h2 className="text-xl font-extrabold">
              Start Your Membership Journey
            </h2>
            <p className="font-semibold text-zinc-600 leading-7">
              Your support today helps build stronger communities tomorrow.
              <br></br>Join Swastik Srijan Foundation as a member and contribute
              to a future where education, empowerment, and opportunity reach
              everyone.
            </p>
          </div>
          <div className="second space-y-4">
            <h2 className="text-xl font-extrabold">
              Be a Member. Be Part of Lasting Change.
            </h2>
            <div className="space-y-3">
              <p className="font-semibold text-zinc-600 leading-7">
                1 - Contribute to programs that focus on long-term growth and
                community empowerment.
              </p>
              <p className="font-semibold text-zinc-600 leading-7">
                2 - Receive regular updates, reports, and stories from the field
              </p>
              <p className="font-semibold text-zinc-600 leading-7">
                3 - Connect with individuals who believe in service and social
                responsibility.
              </p>
              <p className="font-semibold text-zinc-600 leading-7">
                4 - Get early access to events, initiatives, and volunteering
                opportunities.
              </p>
              <p className="font-semibold text-zinc-600 leading-7">
                5 - Be acknowledged as a supporter helping drive meaningful
                change.
              </p>
            </div>
            <img src="./images/member_pic2.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 mt-10">
          <h2 className="text-2xl font-extrabold">
            Member Benefits You will get:
          </h2>
          <img src="./images/members_text.svg" alt="" />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3Wb-839SLDzv3A9QkbfpnJt_ORBQZbVByModSfDjQs-JuBQ/viewform"
            target="_blank"
            className="bg-[#FF8D1A] w-full text-white mt-8 drop-shadow-md drop-shadow-white font-bold text-2xl px-4 py-3 flex items-center justify-center gap-2 rounded-xl cursor-pointer hover:scale-103 active:scale-95 duration-200 transition-all"
          >
            <span>Join Now</span>
            <FaArrowRightLong />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
