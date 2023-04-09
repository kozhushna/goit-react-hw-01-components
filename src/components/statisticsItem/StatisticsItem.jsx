import PropTypes from 'prop-types';
import './StatisticsItem.css';

const StatisticsItem = ({ label, percentage }) => {
  const bgColor = percentage => {
    let color = '';
    if (percentage < 20) {
      color = 'rgb(152, 252, 190)';
    } else if (percentage >= 20 && percentage < 40) {
      color = 'rgb(132, 188, 241)';
    } else if (percentage >= 40 && percentage < 60) {
      color = 'rgb(229, 189, 245)';
    } else if (percentage >= 60 && percentage < 80) {
      color = 'rgb(252, 197, 218)';
    } else {
      color = 'rgb(248, 247, 167)';
    }
    return { background: color };
  };
  return (
    <li className="item" style={bgColor(percentage)}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
