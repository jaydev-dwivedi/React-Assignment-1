import PropTypes from 'prop-types';
function SectionTitle({ title = "Waiting for title", uw = "w-4", classes = "" }) {
  return (
    <h2
      className={`w-fit h-fit h1 relative underline underline-offset-[0.95rem] decoration-1 decoration-[var(--gray-2)] ${classes}`}
    >
      <hr
        className={`${uw} absolute -bottom-3 2xl:-bottom-1 -left-0.5 border-4 border-[var(--gray-2)] rounded-full`}
      />
      {title.toUpperCase()}
    </h2>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  uw: PropTypes.string,
  classes: PropTypes.string,
}
export default SectionTitle;