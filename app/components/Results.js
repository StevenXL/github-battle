var React = require('react');
var PropTypes = React.PropTypes;

function Results(props) {
  return (
    <div> Results </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: Proptypes.array.isRequired,
  scores: Proptypes.array.isRequired
};

module.exports = Results;
