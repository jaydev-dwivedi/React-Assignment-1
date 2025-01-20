import PropTypes from 'prop-types';

function ServiceCard({
  title = "Fetching the service...",
  img_src = "",
  paragraph = "waiting for the details...",
  bgImgSrc = "",
  bgTop = "top-0",
  bgLeft = "",
  bgRight = "",
  bgWidth = "w-1"

}) {
  return (
    <div className="lg:hidden w-full service-card flex flex-col items-center gap-y-12 text-[var(--gray-1)] mb-24">
      <h3 className="h1 text-center px-8">{title.toUpperCase()}</h3>
      <img src={img_src} className="w-80" alt="" />
      <p className="text-justify px-8">{paragraph}</p>
      <img
        src={bgImgSrc}
        alt=""
        className={`absolute ${bgTop} ${bgLeft} ${bgRight} ${bgWidth} -z-50`} />
    </div>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string,
  img_src: PropTypes.string,
  bgImgSrc: PropTypes.string,
  paragraph: PropTypes.string,
  bgTop: PropTypes.string,
  bgLeft: PropTypes.string,
  bgRight: PropTypes.string,
  bgWidth: PropTypes.string
}
export default ServiceCard;