import Proptypes from "prop-types";

function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}

Empty.propTypes = {
  resourceName: Proptypes.string.isRequired,
}

export default Empty;
