import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="relative flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-0 px-8">
      <SectionTitle title="about us" uw="w-[8rem]" classes="lg:hidden" />
      <img
        src="/Images/about us 1.png"
        alt=""
        className="w-80 mt-16 lg:hidden" />
      <p className="mt-16 text-justify text-[var(--gray-1)] lg:hidden">
        We love what we do and are driven by achieving great results for our clients.
        Our awards and impressive client list are testament to our high quality
        approach. We deliver value, creaKvity, results and excepKonal levels of
        customer service and professionalism. We specialise in infrastructure
        development, energy and natural resources.
      </p>
      <div className="hidden lg:flex lg:justify-center 2xl:items-center lg:w-1/2 2xl:h-full">
        <img
          src="/Images/about us 1.png"
          alt=""
          className="w-80 lg:w-96 mt-16 2xl:mt-32 lg:mt-0 2xl:w-[34rem]" />
      </div>
      <div
        className="lg:w-1/2 flex flex-col lg:gap-y-12 sm:gap-x-5 mt-16"
      >
        <SectionTitle title="about us" uw="w-[8rem] 2xl:w-[12rem]" classes="hidden lg:inline-block" />
        <p className="hidden lg:block 2xl:w-[90%] 2xl:text-lg text-justify lg:text-start text-[var(--gray-1)]">
          We love what we do and are driven by achieving great results for our clients.
          Our awards and impressive client list are testament to our high quality
          approach. We deliver value, creaKvity, results and excepKonal levels of
          customer service and professionalism. We specialise in infrastructure
          development, energy and natural resources.
        </p>
        <div className="w-full flex flex-row md:gap-x-10 lg:gap-x-2 2xl:gap-x-16 space-y-8 md:space-y-0">
          <div className="sm:w-1/2 lg:w-full flex flex-col gap-y-3 md:px-3 lg:px-0">
            <img
              src="/Icons/Engagement icon 1.svg"
              alt=""
              className="w-10"
            />
            <h3 className="h3 text-start">{"Engagement".toUpperCase()}</h3>
            <p
              className="text-justify xl:text-start text-[var(--gray-1)] 2xl:w-5/6"
            >
              We are engagement specialists,
              who have led projects at all
              levels of the IAP2 spectrum.
              READ MORE
            </p>
          </div>
          <div className="sm:w-1/2 lg:w-full flex flex-col gap-y-3 md:px-3">
            <img
              src="/Icons/communication icon 1.svg"
              alt=""
              className="w-10" />
            <h3 className="h3 text-start">{"Communications".toUpperCase()}</h3>
            <p
              className="text-justify xl:text-start text-[var(--gray-1)]"
            >
              We are award-winning leaders in
              communications and campaign
              management.
              READ MORE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;