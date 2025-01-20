function Navbar() {
  return (
    <>
      <img
        src="/Assets/Asset 1.png"
        className="absolute top-0 left-0 -z-50 w-28 2xl:w-32"
      />
      <img src="/Assets/Asset 2.png"
        alt=""
        className="absolute top-0 right-0 w-32 -z-50"
      />
      <header className="md:w-11/12 lg:w-10/12 2xl:w-11/12 md:mx-auto flex 2xl:flex-row  md:justify-between items-center mt-2 px-8 2xl:px-0 text-[var(--black)]">
        <div id="company-logo" className="w-fit relative left-24">
          <img
            src="/Logos/Company-logo.png"
            alt="Logo"
            className="w-64 md:w-52 2xl:w-80"
          />
        </div>
        <nav className="md:hidden">
          <span
            className="material-symbols-outlined z-50 fixed top-6 right-8 text-[var(--gray-1)] bg-[var(--white)] opacity-80 p-2 rounded-full"
            onClick={toggleMenu}
          >
            menu
          </span>
          <div
            id="navbar"
            className="hidden fixed top-0 left-0 w-full h-screen flex-col gap-y-8 justify-center items-center md:justify-between md:items-center bg-white bg-opacity-95 md:bg-transparent md:flex-row md:w-auto md:static md:space-x-4 md:px-8 md:py-4  z-50">
            <span id="close-btn" className="hidden fixed top-6 right-8 material-symbols-outlined text-[var(--gray-1)] bg-[var(--gray-2)] opacity-80 p-2 rounded-full" onClick={toggleMenu}>close</span>
            <a href="#about" className="text-lg" onClick={toggleMenu}>About us</a>
            <a href="#services" className="text-lg" onClick={toggleMenu}>Services</a>
            <a href="#team" className="text-lg" onClick={toggleMenu}>Team</a>
            <a href="#clients" className="text-lg" onClick={toggleMenu}>Clients</a>
            <a href="#contact" className="text-lg" onClick={toggleMenu}>Contact Us</a>
          </div>
        </nav>
        <nav className="hidden md:flex justify-center 2xl:justify-end gap-x-8">
          <a href="#about" className="text-sm 2xl:text-xl">About us</a>
          <a href="#services" className="text-sm 2xl:text-xl">Services</a>
          <a href="#team" className="text-sm 2xl:text-xl">Team</a>
          <a href="#clients" className="text-sm 2xl:text-xl">Clients</a>
          <a href="#contact" className="text-sm 2xl:text-xl">Contact Us</a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

function toggleMenu() {
  const closeBtn = document.getElementById("close-btn");
  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("menu");

  navbar.classList.toggle("hidden");
  navbar.classList.toggle("flex");
  closeBtn.classList.toggle("hidden");
  menu.classList.toggle("hidden");
}