function Introduction() {
  return (
    <section className="relative w-full h-[74vh] sm:h-[80vh] 2xl:h-[100vh] flex flex-col lg:flex-row-reverse mt-28 sm:mt-16 lg:mt-20 px-9">
      <div className="lg:w-1/2 space-y-6 md:ml-6 lg:ml-0 2xl:mt-[7rem] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:ml-32">
        <h1 className="w-fit h1 space-y-1 2xl:w-9/12">
          <span className="block w-8/12">Mendleson</span>
          <span className="block w-8/12">Communication</span>
          <span className="block w-full">and Engagement</span>
        </h1>
        <div className="2xl:sm:w-7/12 lg:w-9/12 2xl:w-9/12">
          <p
            className="text-[var(--gray-1)] 2xl:text-lg 2xl:w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Malesuada sed ipsum, ut quam volutpat, tortor.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src="/Assets/Graphic 1 2.png"
          alt=""
          className="absolute bottom-0 left-0 w-96 lg:w-[32rem] 2xl:w-[47rem] -z-50" />
        <img
          src="/Images/Vector Smart Object21 1.png"
          alt=""
          className="absolute bottom-0 left-12 lg:left-20 2xl:left-28 w-[23rem] lg:w-[27rem] 2xl:w-[40rem]" />

      </div>

      {/* Background Pieces */}
      <img
        src="/Assets/Assets 3.png"
        alt=""
        className="absolute bottom-0 left-0 w-40 2xl:w-56 -z-40"
      />
      <img
        src="/Assets/Assets 4.png"
        alt=""
        className="absolute bottom-0 right-0 w-24 -z-40" />
    </section >
  );
}

export default Introduction;