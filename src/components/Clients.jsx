import SectionTitle from "./SectionTitle";

function Clients() {
  return (
    <section id="clients" className="w-full relative px-8 flex flex-col items-center gap-y-8 mt-20">
      <SectionTitle
        title="our clients"
        uw="w-[5rem] 2xl:w-[7.5rem]"
      />
      <div className="w-full lg:w-11/12 xl:w-9/12 2xl:w-9/12 flex flex-wrap justify-around gap-12 mt-10">
        <img
          src="/Logos/Boroondara-Color.png"
          alt=""
          className="object-contain w-28 lg:w-40 2xl:w-52" />
        <img
          src="/Logos/Port-Philip-logo.png"
          alt=""
          className="object-contain w-20 lg:w-28 2xl:w-36" />
        <img
          src="/Logos/Brigitte-Logo.png"
          alt=""
          className="object-contain w-28 lg:w-40 2xl:w-52" />
        <img
          src="/Logos/Level-Crossing-Removal-Logo.png"
          alt=""
          className="object-contain w-24 lg:w-36 2xl:w-44" />
        <img
          src="/Logos/BHP_2017_logo.png"
          alt=""
          className="object-contain w-20 lg:w-28 2xl:w-36" />
        <img
          src="/Logos/Victoria-logo.png"
          alt=""
          className="object-contain w-24 lg:w-36 2xl:w-44" />
        <img
          src="/Logos/Pacific-Hydro-logo.png"
          alt=""
          className="object-contain w-32 lg:w-44 2xl:w-56" />
        <img
          src="/Logos/VCOSS-logo.png"
          alt=""
          className="object-contain w-28 lg:w-44 2xl:w-56" />
        <img
          src="/Logos/MelbourneWaterLogo.png"
          alt=""
          className="object-contain w-36 lg:w-44 2xl:w-56" />
        <img
          src="/Assets/Assets 9 1.png"
          alt=""
          className="absolute left-0 -top-20 md:-top-10 2xl:top-10 xl:-top-4 w-20 lg:w-28 xl:w-28 2xl:w-36 -z-50" />
      </div>
      {/* <div className="sm:w-full flex flex-col sm:flex-row sm:flex-wrap gap-y-12 mt-10">
        <div className="flex justify-center gap-x-16">
          <img
            src="/Logos/Boroondara-Color.png"
            alt=""
            className="object-contain w-32" />
          <img
            src="/Logos/Port-Philip-logo.png"
            alt=""
            className="object-contain w-28" />
        </div>
        <div className="flex justify-center gap-x-16">
          <img
            src="/Logos/Brigitte-Logo.png"
            alt=""
            className="object-contain w-32" />
          <img
            src="/Logos/Level-Crossing-Removal-Logo.png"
            alt=""
            className="object-contain w-28" />
        </div>
        <div className="flex justify-center gap-x-16">
          <img
            src="/Logos/BHP_2017_logo.png"
            alt=""
            className="object-contain w-28" />
          <img
            src="/Logos/Victoria-logo.png"
            alt=""
            className="object-contain w-28" />
        </div>
        <div className="flex justify-center gap-x-16">
          <img
            src="/Logos/Pacific-Hydro-logo.png"
            alt=""
            className="object-contain w-32" />
          <img
            src="/Logos/VCOSS-logo.png"
            alt=""
            className="object-contain w-28" />
        </div>
        <div className="flex justify-center gap-x-16">
          <img
            src="/Logos/MelbourneWaterLogo.png"
            alt=""
            className="object-contain w-48" />
        </div>
      </div> */}
    </section>
  )
}

export default Clients;