import SectionTitle from "./SectionTitle";
import LeftTextServiceCard from "./LeftServiceCard";
import RightTextServiceCard from "./RightServiceCard";

function MediumServices() {
  return (
    <section
      id="services"
      className="hidden lg:flex relative flex-col items-center justify-center mt-20 px-8"
    >
      <img
        src="/Assets/Asset 5 1.png"
        alt=""
        className="absolute -top-24 xl:-top-32 2xl:-top-16 left-0 w-44 xl:w-64 2xl:w-80 -z-50" />
      <SectionTitle
        title="services"
        uw="w-[3rem] 2xl:w-[4.5rem]"
        classes="mb-16" />
      <LeftTextServiceCard
        title="engagement"
        img_src="/Images/Engagement vector 1.png"
        paragraph="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
      />
      <RightTextServiceCard
        title="Communications"
        img_src="/Images/Coominucation vector 1.png"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus."
        bgImgSrc="/Assets/Asset 6 1.png"
        bgTop="top-[25rem] xl:top-[29rem] 2xl:top-[32rem]"
        bgWidth="w-36"
      />
      <LeftTextServiceCard
        title="facilitation"
        img_src="/Images/facilation vector 1.png"
        paragraph="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
        bgImgSrc="/Assets/Asset 7 1.png"
        bgTop="bottom-[30rem] xl:bottom-[40rem] 2xl:bottom-[35rem]"
        bgWidth="w-36 xl:w-44 2xl:w-52"
      />
      <RightTextServiceCard
        title="Consultation and Research"
        img_src="/Images/Consultation vector 1.png"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus."
        bgImgSrc="/Assets/Asset 8 2.png"
        bgTop="bottom-[14rem]"
        bgWidth="w-56"
      />
      <LeftTextServiceCard
        title="Traning & Mentoring"
        img_src="/Images/Training and vector 1.png"
        paragraph="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
      />
    </section>
  )
}
export default MediumServices;