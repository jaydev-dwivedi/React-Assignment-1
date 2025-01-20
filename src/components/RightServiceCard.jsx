import PropTypes from 'prop-types';

function RightTextServiceCard({
  title = "Fetching the service...",
  img_src = "",
  bgImgSrc = "",
  paragraph = "waiting for the details...",
  bgTop = "top-0",
  bgWidth = "w-1"

}) {
  return (
    < div className="hidden lg:flex service-card flex-row items-center md:gap-x-4 lg:gap-x-24 text-[var(--gray-1)] mb-24" >
      <div className="w-1/2 flex justify-center">
        <img src={img_src} className="w-72 2xl:w-96" alt="" />
      </div>
      <div className="w-1/2 flex flex-col space-y-4">
        <h3 className="h2">{title.toUpperCase()}</h3>
        <p className="2xl:text-lg 2xl:w-8/12">{paragraph}</p>
      </div>
      <img
        src={bgImgSrc}
        alt=""
        className={`absolute ${bgTop} right-0 ${bgWidth} -z-50`} />
    </div >
  )
}

RightTextServiceCard.propTypes = {
  title: PropTypes.string,
  img_src: PropTypes.string,
  bgImgSrc: PropTypes.string,
  paragraph: PropTypes.string,
  bgTop: PropTypes.string,
  bgWidth: PropTypes.string,
}
export default RightTextServiceCard;