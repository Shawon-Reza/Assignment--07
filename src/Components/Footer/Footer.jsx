
import footerImg from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='relative flex justify-center w-full'>

            <div className='flex justify-center text-center bg-[#FFFFFF] bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg w-4/5 mx-auto py-5 shadow-xl z-50 absolute top-[5%] md:top-[10%] '><form>
                <h6 className="footer-title">Subscribe to our Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="opacity-70">Subscribe to our newsletter for the latest updates.</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form></div>

            <div className="mt-24 md:mt-36 bg-slate-900 pt-36 md:pt-20  z-0 w-full">
                <div className="text-center">
                    <img className="mx-auto" src={footerImg} alt="" />
                </div>

                <footer className="footer bg-base-200 text-base-content p-10 text-white bg-slate-900">
                    <nav>
                        <h6 className="footer-title">About</h6>
                        <a className="link link-hover opacity-50">We are a passionate team dedicated to providing the best services to our customers.</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Link</h6>
                        <a className="link link-hover opacity-50">About us</a>
                        <a className="link link-hover opacity-50">Contact</a>
                        <a className="link link-hover opacity-50">Jobs</a>
                        <a className="link link-hover opacity-50">Press kit</a>
                    </nav>

                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default Footer;