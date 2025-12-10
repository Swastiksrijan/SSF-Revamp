import bgFrame from "../assets/bgTandC.png";
function TermsAndCondition() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <div className="w-full max-w-6xl flex flex-col gap-10 mt-24 px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
                        Terms & Conditions
                    </h1>
                </div>

                {/* 1 */}
                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">1. Acceptance of Terms</p>
                    <p className="m-0">
                        By accessing or using this website, you agree to comply with these
                        Terms & Conditions. If you do not agree with any part of these terms,
                        please discontinue using our website.
                    </p>
                </div>

                {/* 2 */}
                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">2. Use of Website Content</p>
                    <p className="m-0">
                        All content on this website—including text, images, graphics, logos,
                        and other materials—is the property of Swastik Srijan Foundation and
                        is protected under applicable copyright and trademark laws. You may
                        not reproduce, distribute, or use any content without prior written
                        permission.
                    </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">3. User Responsibilities</p>
                    <p className="m-0">
                        Users must not engage in any activity that disrupts or harms the
                        website’s functionality, security, or integrity. Any unlawful,
                        abusive, or malicious use of the website is strictly prohibited.
                    </p>
                </div>

                {/* 4 */}
                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">4. External Links</p>
                    <p className="m-0">
                        Our website may include links to third-party websites for reference
                        or convenience. We are not responsible for the content, policies, or
                        accuracy of these external sites.
                    </p>
                </div>

                {/* 5 */}
                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">5. Updates to Terms</p>
                    <p className="m-0">
                        Swastik Srijan Foundation reserves the right to modify or update
                        these Terms & Conditions at any time without prior notice. Continued
                        use of the website indicates your acceptance of the revised terms.
                    </p>
                </div>

                {/* 6 */}
                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">6. Limitation of Liability</p>
                    <p className="m-0">
                        While we strive to keep our content accurate and updated, we do not
                        guarantee its completeness or reliability. Your use of the website
                        and its information is at your own risk.
                    </p>
                </div>

                {/* 7 */}
                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">7. Privacy Policy</p>
                    <p className="m-0">
                        By using our website, you acknowledge and agree to the practices
                        described in our Privacy Policy regarding the collection and use of
                        your information.
                    </p>
                </div>

                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">8. Governing Law</p>
                    <p className="m-0">
                        These Terms & Conditions are governed by the laws of India. Any disputes
                        related to these terms will fall under the exclusive jurisdiction of courts
                        within India.
                    </p>
                </div>

                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">9. Contact Information</p>
                    <p className="m-0">
                        For queries or concerns related to these Terms & Conditions, you may contact us at:
                        <p>Mobile: 9718346691</p>
                        <p>Email: swastiksrijanfoundation@gmail.com</p>
                    </p>
                </div>

                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-extrabold m-0">10. Donation Policy</p>
                    <p className="m-0">
                        We deeply appreciate all donations received. Please note that all donations are final
                        and non-refundable. Swastik Srijan Foundation ensures that all funds are used responsibly
                        and transparently towards our initiatives, programs, and community welfare efforts.
                    </p>
                </div>
                <div className="
                    w-full md:max-w-6xl
                    bg-[url('./assets/TandCmd.png')]  
                    sm:bg-[url('./assets/bgTandC.png')] 
                    bg-cover                 
                    bg-no-repeat
                    bg-center
                    rounded-2xl
                    sm:h-[500px]                
                    md:h-[600px]                    
                    flex
                    flex-col
                    justify-center
                    px-6"
                >
                    <div className="max-w-5xl sm:ml-20">
                        <h1 className="text-4xl sm:text-3xl font-extrabold mb-6 px-10 sm:p-0 mt-20 sm:mt-0">
                            Make clarity your <br /> confidence.
                        </h1>

                        <p className="max-w-md text-gray-800 mb-6 px-10 sm:p-0">
                            If you need help understanding our Terms & Conditions, we’re here to guide you
                            every step of the way.
                        </p>

                        <button className="bg-black hover:bg-white text-white hover:text-black px-6 py-3 rounded-full font-semibold ml-9 mb-90 sm:mb-0 sm:ml-0">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsAndCondition;
