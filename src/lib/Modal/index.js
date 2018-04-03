import "./style.css";

import { htmlToDOM, getIdGenerator, setChildDOM } from "../../util";
import BlindLayer from "../BlindLayer";

const getId = getIdGenerator("modal");

const CLASS_NAMES = {
  TITLE: "modal-title",
  BODY: "modal-body",
  CLOSE: "modal-close"
};

const template = id => `
  <section class="modal">
    <header>
      <span class="${CLASS_NAMES.TITLE}"></span>
      <span class="${CLASS_NAMES.CLOSE}">x</span>
    </header>
    <seciton class="${CLASS_NAMES.BODY}"></seciton>
  </section>
`;

const create = () => {
  const id = getId();
  const blindLayer = BlindLayer.create();

  const modalDOM = htmlToDOM(template(id));
  const bodyDOM = modalDOM.getElementsByClassName(CLASS_NAMES.BODY)[0];
  const titleDOM = modalDOM.getElementsByClassName(CLASS_NAMES.TITLE)[0];
  const closeDOM = modalDOM.getElementsByClassName(CLASS_NAMES.CLOSE)[0];

  blindLayer.setContent(modalDOM);

  const instance = {
    show: () => blindLayer.show(),
    hide: () => blindLayer.hide(),
    remove: () => blindLayer.remove(),
    setBody: dom => setChildDOM(bodyDOM, dom),
    setTitle: title => (titleDOM.textContent = title)
  };

  closeDOM.addEventListener("click", () => {
    instance.hide();
  });

  return instance;
};

export default {
  create
};
