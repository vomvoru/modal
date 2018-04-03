export const htmlToDOM = html => {
  const tempWrap = document.createElement("div");
  tempWrap.innerHTML = html;
  return tempWrap.children[0];
};

export const hideDOM = dom => (dom.style.display = "none");
export const showDOM = dom => (dom.style.display = null);

export const getIdGenerator = (prefix = "id") => {
  let id = 0;
  return () => {
    id += 1;
    return `${prefix}_${id}`;
  };
};

export const setChildDOM = (parent, child) => {
  parent.innerHTML = "";
  parent.appendChild(child);
};
