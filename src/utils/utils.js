import moment from 'moment-timezone';

// Format unix timestamp
export const formatTimestamp = (timestamp) => {
    return moment.tz(timestamp, 'America/Los_Angeles') // PST
        .format('MMM D, YYYY, h:mm A');
};
