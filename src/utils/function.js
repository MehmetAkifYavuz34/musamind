import {statusTypes} from './constants';

export const setColor = status => {
  switch (status) {
    case statusTypes.COMPLETED:
      return '#5DD669';
    case statusTypes.IN_PROGRESS:
      return '#9D9BFF';
    case statusTypes.ON_HOLD:
      return '#F6BB54';
    case statusTypes.IN_REVIEW:
      return '#EDA7FF';

    default:
      return 'white';
  }
};
