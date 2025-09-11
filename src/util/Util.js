export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getElapsedTimeFormatted(timeSince) {
    let seconds = Math.floor(timeSince / 1000);

    if (seconds < 60) {
        return "just now";
    }

    let minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
        let ret = minutes + " minute" + (minutes > 1 ? "s" : "");
        return ret += " ago";
    }

    let hours = Math.floor(minutes / 60);

    if (hours < 24) {
        let ret = hours + " hour" + (hours > 1 ? "s" : "");
        return ret += " ago";
    }
}