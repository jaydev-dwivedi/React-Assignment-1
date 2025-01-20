import PropTypes from 'prop-types';

function LeftTextServiceCard({
  title = "Fetching the service...",
  img_src = "",
  bgImgSrc = "",
  paragraph = "waiting for the details...",
  bgTop = "top-0",
  bgWidth = "w-1"

}) {
  return (
    <div className="hidden lg:flex flex-row items-center justify-center md:gap-x-4 lg:gap-x-24 text-[var(--gray-1)] mb-24">
      <div className="w-1/2 flex flex-col items-end space-y-4">
        <h3 className="2xl:w-10/12 h2 text-end">{title.toUpperCase()}</h3>
        <p className="text-end 2xl:text-lg 2xl:w-10/12">{paragraph}</p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src={img_src} className="w-72 2xl:w-96" alt="" />
      </div>
      <img
        src={bgImgSrc}
        alt=""
        className={`absolute ${bgTop} left-0 ${bgWidth} -z-50`} />
    </div>
  )
}

LeftTextServiceCard.propTypes = {
  title: PropTypes.string,
  img_src: PropTypes.string,
  bgImgSrc: PropTypes.string,
  paragraph: PropTypes.string,
  bgTop: PropTypes.string,
  bgWidth: PropTypes.string
}

export default LeftTextServiceCard;