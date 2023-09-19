function Footer() {
  return (
    <div className=" bg-[#304259] ">
      <footer className="footer grid-cols-2 grid-rows-2 gap-4 border-t border-gray-600     p-10 text-white sm:justify-between sm:gap-8 md:grid-cols-4 md:grid-rows-1">
        <div>
          <span className="footer-title">Services</span>
          <div className="grid gap-2 text-xs">
            <a className="link-hover link">Branding</a>
            <a className="link-hover link">Design</a>
            <a className="link-hover link">Marketing</a>
            <a className="link-hover link">Advertisement</a>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col lg:flex">
          <div className="grid gap-2 text-xs lg:text-sm">
            <span className="footer-title">Legal</span>
            <a className="link-hover link">Terms of use</a>
            <a className="link-hover link">Privacy policy</a>
            <a className="link-hover link">Cookie policy</a>
          </div>
        </div>
        <div className="flex-col sm:flex">
          <span className="footer-title">Company</span>
          <div className="grid gap-2 text-xs lg:text-sm">
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Jobs</a>
            <a className="link-hover link">Press kit</a>
          </div>
        </div>
        <div className="col-span-2 mt-4 w-full sm:w-96 md:w-full xl:w-96 sm:mt-0 md:flex md:flex-col lg:flex">
          <div className="w-full flex-col sm:flex">
            <span className="footer-title">Newsletter</span>
            <div className="form-control">
              <label className="label my-1">
                <span className="label-text text-xs text-white lg:text-sm">
                  Enter your email address
                </span>
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 text-sm text-black"
              />
              <button className="btn tracking-wide	   text-white bg-indigo-600 py-4  absolute right-0 top-0 rounded-l-none text-[0.7rem]    sm:text-xs   ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center border-t border-gray-600 bg-[#304259] p-7 text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by ChatConnect Ltd</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
