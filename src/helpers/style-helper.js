export const getStatisticsItemBgColor = percentage => {
  const val = parseInt(percentage / 20);
  let color = '';
  switch (val) {
    case 1:
      color = 'rgb(132, 188, 241)';
      break;
    case 2:
      color = 'rgb(229, 189, 245)';
      break;
    case 3:
      color = 'rgb(252, 197, 218)';
      break;
    case 4:
    case 5:
      color = 'rgb(248, 247, 167)';
      break;
    default:
      color = 'rgb(152, 252, 190)';
      break;
  }
  //   let color = '';
  //   if (percentage < 20) {
  //     color = 'rgb(152, 252, 190)';
  //   } else if (percentage >= 20 && percentage < 40) {
  //     color = 'rgb(132, 188, 241)';
  //   } else if (percentage >= 40 && percentage < 60) {
  //     color = 'rgb(229, 189, 245)';
  //   } else if (percentage >= 60 && percentage < 80) {
  //     color = 'rgb(252, 197, 218)';
  //   } else {
  //     color = 'rgb(248, 247, 167)';
  //   }
  return { background: color };
};
