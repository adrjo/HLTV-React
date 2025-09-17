import { toastsStore } from "../store/stores";

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

/** returns true if any value is null/undefined */
export function isNullOrEmpty(...values) {
  for (let value of values) {
    if (value == undefined || value.length == 0) return true;
  }
  return false;
}



export function displayToast(message, isError = false, timeSeconds = 5) {
  const addToast = toastsStore.getState().addToast;
  const removeToast = toastsStore.getState().removeToast;

  let newToast = {
    id: crypto.randomUUID(),
    message: message,
    isError: isError
  }

  addToast(newToast);
  setTimeout(() => {
    removeToast(newToast.id);
  }, timeSeconds * 1000)
}


const weekMs = 7 * 24 * 60 * 60 * 1000;
export function selectFeaturedArticle(posts, setFeaturedArticle) {
  let options = posts
    .filter(post => post.img != undefined && post.img != "")
    .filter(post => Date.now() - post.date < weekMs); // featured article shouldnt be too old

  if (options.length != 0) {
    setFeaturedArticle(options[getRandomNumber(0, options.length - 1)]);
  }
}