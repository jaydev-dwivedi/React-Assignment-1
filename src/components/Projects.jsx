import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <section className="w-full relative flex flex-col items-center space-y-8 mt-10 md:mt-20 2xl:mt-32 px-8">
      <SectionTitle
        title="our projects"
        uw="w-[5rem] 2xl:w-[7.5rem]"
      />
      <div className="flex sm:hidden flex-col justify-center items-center space-y-4">
        <img src="/Images/Our-Project_img-1.png" alt="" />
        <img src="/Images/Our-Project_img-2.png" alt="" />
        <img src="/Images/Our-Project_img-3.png" alt="" />
      </div>
      <div className="hidden sm:flex 2xl:w-9/12 justify-center gap-4">
        <div className="w-1/2">
          <img src="/Images/Our-Project_img-1.png" alt="" className="" />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <img src="/Images/Our-Project_img-2.png" alt="" className="" />
          <img src="/Images/Our-Project_img-3.png" alt="" className="" />
        </div>
      </div>
      <img
        src="/Assets/Asset 8 2.png"
        alt=""
        className="absolute -top-32 md:-top-64 right-0 w-36 md:w-44 lg:w-56 -z-50" />
    </section>
  )
}
export default Projects;