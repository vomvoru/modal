import "./style.css";

const LOCK_SCROLL_CLASS_NAME = "lock-scroll";

const create = dom => ({
  lock() {
    if (dom.classList.contains(LOCK_SCROLL_CLASS_NAME)) {
      return;
    }
    dom.classList.add(LOCK_SCROLL_CLASS_NAME);
  },

  unlock() {
    dom.classList.remove(LOCK_SCROLL_CLASS_NAME);
  }
});

export default {
  create
};
