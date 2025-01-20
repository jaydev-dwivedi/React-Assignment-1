import ServiceCard from "./ServiceCard"
import SectionTitle from "./SectionTitle";

function Services() {
  return (
    <section
      id="services"
      className="lg:hidden w-full relative flex flex-col items-center justify-center mt-20"
    >
      <img
        src="/Assets/Asset 5 1.png"
        alt=""
        className="absolute -top-10 left-0 w-44 -z-50" />
      <SectionTitle title="services" uw="w-[3rem]" classes="mb-16" />
      <ServiceCard
        title="Engagement"
        img_src="/Images/Engagement vector 1.png"
        paragraph="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
      />
      <ServiceCard
        title="Communications"
        img_src="/Images/Coominucation vector 1.png"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "
        bgImgSrc="/Assets/Asset 6 1.png"
        bgTop="top-[40rem]"
        bgRight="right-0"
        bgWidth="w-36"
      />
      <ServiceCard
        title="facilitation"
        img_src="/Images/facilation vector 1.png"
        paragraph="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources"
        bgImgSrc="/Assets/Asset 7 1.png"
        bgTop="bottom-[60rem]"
        bgLeft="left-0"
        bgWidth="w-40"
      />
      <ServiceCard
        title="Consultation and Research"
        img_src="/Images/Consultation vector 1.png"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "
        bgImgSrc="/Assets/Asset 8 2.png"
        bgTop="bottom-[25rem]"
        bgRight="right-0"
        bgWidth="w-44"
      />
      <ServiceCard
        title="Traning & Mentoring"
        img_src="/Images/Training and vector 1.png"
        paragraph="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
      />
    </section>
  )
}
export default Services;