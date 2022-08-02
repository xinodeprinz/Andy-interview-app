export function calcTime(date) {
    const d = new Date(date);
    // const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    // const nd = new Date(utc + 3600000 * offset);
    // return nd.toLocaleString();
    // return nd.toLocaleTimeString();
    return {
        days: d.getDay(),
        hours: 24 - d.getHours(),
        minutes: 60 - d.getMinutes(),
        seconds: 60 - d.getSeconds(),
    };
}

export const compareDates = (d1, d2) => {
    return d1.getDate() === d2.getDate();
};
