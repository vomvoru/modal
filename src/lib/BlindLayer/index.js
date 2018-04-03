import "./style.css";

import { htmlToDOM, getIdGenerator, setChildDOM } from "../../util";
import scrollLocker from "../scrollLocker";

const getId = getIdGenerator("BlindLayer");
const bodyScollLocker = scrollLocker.create(document.body);

const CLASS_NAMES = {
  BASE: "blind-layer",
  SHOW: "show",
  OVER: "over",
  OUT: "out",
  CONTENT: "blind-layer-content"
};

const template = id => `
  <div id="${id}" class="${CLASS_NAMES.BASE}">
    <section class="${CLASS_NAMES.CONTENT}"></section>
  </div>
`;

const create = () => {
  const id = getId();

  const layerDom = htmlToDOM(template(id));
  const contentDom = layerDom.getElementsByClassName(CLASS_NAMES.CONTENT)[0];

  document.body.appendChild(layerDom);

  const instance = {
    show: () => {
      bodyScollLocker.lock();
      layerDom.classList.add(CLASS_NAMES.SHOW);
    },
    hide: () => {
      bodyScollLocker.unlock();
      layerDom.className = CLASS_NAMES.BASE; // 초기 상태로 설정
    },
    remove: () => layerDom.remove(),
    setContent: content => setChildDOM(contentDom, content)
  };

  layerDom.addEventListener("mouseover", e => {
    if (e.target !== layerDom) {
      layerDom.classList.add(CLASS_NAMES.OUT);
      layerDom.classList.remove(CLASS_NAMES.OVER);

      return;
    }

    layerDom.classList.add(CLASS_NAMES.OVER);
    layerDom.classList.remove(CLASS_NAMES.OUT);
  });

  layerDom.addEventListener("click", e => {
    if (e.target !== layerDom) {
      return;
    }
    instance.hide();
  });

  return instance;
};

export default {
  create
};
