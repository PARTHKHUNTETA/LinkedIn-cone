import moment from 'moment/moment';

export const getCurrentTimeStamp = (timeFormat) => (
    moment().format(timeFormat)
)