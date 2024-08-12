import { Link } from "react-router-dom";


const ClientFooter = () => {
    return (
        <div>
            <footer className="footer bg-[#171719]  text-white p-10">
                <aside className="space-y-4">
                    <Link to="/"><img className="w-[150px]" src="https://demo.creativeitem.com/academy/uploads/system/b75d56b5a93590ce01464acd96a853f1.png" alt="" /></Link>
                    <p>
                        Study any topic, anytime. explore thousands of courses for the lowest price ever!


                    </p>
                    <p className="text-xl"> Subscribe to our newsletter</p>
                    <div className="join">
                        <input className="input input-bordered text-black  join-item" placeholder="Email" />
                        <button className="btn join-item ">Subscribe</button>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-white">Top categories</h6>
                    <Link to="/html-css" className="link link-hover">HTML & CSS</Link>
                    <Link to="/color-theory" className="link link-hover">Color Theory</Link>
                    <Link to="/photoshop" className="link link-hover">Photoshop</Link>
                    <Link to="/wordpress-theme" className="link link-hover">WordPress Theme</Link>
                    <Link to="/adobe-illustrator" className="link link-hover">Adobe Illustrator</Link>
                    <Link to="/bootstrap" className="link link-hover">Bootstrap</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Useful links</h6>
                    <Link to="/become-instructor" className="link link-hover">Become an instructor</Link>
                    <Link to="/blog" className="link link-hover">Blog</Link>
                    <Link to="/all-courses" className="link link-hover">All courses</Link>
                    <Link to="/sign-up" className="link link-hover">Sign up</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Help</h6>
                    <Link to="/contact-us" className="link link-hover">Contact us</Link>
                    <Link to="/about-us" className="link link-hover">About us</Link>
                    <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link>
                    <Link to="/terms-and-conditions" className="link link-hover">Terms and conditions</Link>
                    <Link to="/faq" className="link link-hover">Faq</Link>
                    <Link to="/refund-policy" className="link link-hover">Refund policy</Link>
                </nav>
            </footer>

        </div>
    );
};

export default ClientFooter;