function Footer() {
  return (
    <footer id="contact" className="w-full sm:w-10/12 2xl:w-[85%] mx-auto px-5 mt-20">
      <div className="w-full flex flex-wrap justify-between gap-8 text-sm bg-[var(--sky-blue)] px-16 2xl:px-28 py-8 2xl:py-12">
        <div className="flex flex-col gap-y-2">
          <span className="font-bold">Social</span>
          <span className="relative text-[var(--gray-1)]">
            <img
              src="/Icons/facebook 1.svg"
              alt=""
              className="absolute -left-8 top-1 sm:top-0.5"
            />
            <a href="#">Facebook</a>
          </span>
          <span className="relative text-[var(--gray-1)]">
            <img
              src="/Icons/linkedin 1.svg"
              alt=""
              className="absolute -left-8 top-1 sm:top-0.5"
            />
            <a href="#">Linkedin</a>
          </span>
          <span className="relative text-[var(--gray-1)]">
            <img
              src="/Icons/Group 20.svg"
              alt=""
              className="absolute -left-8 top-1 sm:top-0.5"
            />
            <a href="#">Google +</a>
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-bold">Explore</span>
          <a href="#" className="text-[var(--gray-1)]">Services</a>
          <a href="#" className="text-[var(--gray-1)]">Team</a>
          <a href="#" className="text-[var(--gray-1)]">Clients</a>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-bold">Contact</span>
          <a href="#" className="text-[var(--gray-1)]">Lorem Ipsum dummy address
          </a>
          <a href="#" className="text-[var(--gray-1)]">used for display</a>
          <a href="#" className="text-[var(--gray-1)]">1234567890</a>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-bold">Email</span>
          <a
            href="mailto:mendlesoncommunication@email.com"
            className="text-[var(--gray-1)]"
          >
            mendlesoncommunication@email.com
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer;