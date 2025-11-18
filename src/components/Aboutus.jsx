import image1 from "../assets/image1.png";

function Aboutus(){
    return(
        <div className="relative min-h-screen w-screen bg-[url(./assets/grid.svg)] bg-contain px-2">

            <div className="relative pt-30 pb-20 w-full h-full bg-linear-to-t from-white/0 via-white to-white flex flex-col items-center justify-center ">
             <h1 className="text-4xl font-semibold italic mt-5">
       About Us - Swastik Srijan Foundation
      </h1>
      <p className="mt-3 text-zinc-500  font-semibold text-center pb-8">
        Dedicated to uplifting communities through focused initiatives in <br /> education, healthcare, and sustainable development.
      </p>
                <img src={image1} className="w-6xl"></img>
                <p className="w-6xl text-center text-zinc-500 inline-block mt-7 text-lg lg:text-2xl leading-14"><b className="text-black">Swastik Srijan Foundation</b> is a catalyst for positive charge in India. Established in <b className="text-black">2013</b>, we have
                remained a beacin if hope, fostering a brighter future through impactful initiatives nationwide. As a
                registered <b className="text-black">non-profit organization</b> under the Madhya Pradesh Registration ACT of 1973(Reg. No.
                11448/13), we are dedicated to uplifting society <b className="text-black">throughout India.</b>
                <br></br>
                Our mission is to empower communities and transform lives through sustainable programs in
                education, healthcare, rural development, women's empowerment, and environmental awareness.
                We aim to create losing imapct by working directly with communities and building partnerships with
                <b className="text-black"> volunteers</b>, <b className="text-black">corporates</b>, and other <b className="text-black">NGOs.</b>
                </p>
            </div>
        </div>
    )
}
export default Aboutus;