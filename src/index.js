import { htmlToDOM } from "./util";

import Modal from "./lib/Modal";

const modal = Modal.create();
modal.setTitle("Modal TEST");
modal.setBody(
  htmlToDOM(`
  <span>testtt</span>
  <input type="text">
  ${"<div>ttt</div>".repeat(40)}
`)
);

const openButton = document.getElementById("modalOpenButton");
openButton.addEventListener("click", () => modal.show());
