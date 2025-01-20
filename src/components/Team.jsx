import SectionTitle from "./SectionTitle";

function Team() {
  return (
    <section id="team" className="w-full relative flex flex-col items-center space-y-16 mt-10 2xl:mt-32">
      <SectionTitle
        title="our team"
        uw="w-[5rem] 2xl:w-[7.5rem]"
      />
      <div className="w-full flex flex-col sm:flex-row justify-center gap-y-12 sm:gap-x-12 lg:gap-x-20 2xl:gap-x-32">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <img src="/Images/Person 1 img 1.png" alt="" className="w-32 lg:w-44 2xl:w-64" />
          <span className="text-xl 2xl:text-2xl">Jessica D&apos;Suza</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-10">
          <img src="/Images/Person 2 img 1.png" alt="" className="w-32 lg:w-44 2xl:w-64" />
          <span className="text-xl 2xl:text-2xl">Johny Williams</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-10">
          <img src="/Images/Person 3 img 1.png" alt="" className="w-32 lg:w-44 2xl:w-64" />
          <span className="text-xl 2xl:text-2xl">Sanya R,</span>
        </div>
      </div>
      <img
        src="/Assets/Asset 5 2.png"
        alt=""
        className="absolute left-0 sm:-top-28 -top-40 xl:-top-44 2xl:-top-56 sm:w-36 md:w-52 lg:w-64 xl:w-72 2xl:w-96 -z-50" />
    </section>
  );
}
export default Team;