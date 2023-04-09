import PropTypes from 'prop-types';
import { getStatisticsItemBgColor } from '../../helpers/style-helper';

import './StatisticsItem.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className="item" style={getStatisticsItemBgColor(percentage)}>
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
