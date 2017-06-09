const LS = window.localStorage;
const getItem = LS.getItem.bind(LS);
const setItem = LS.setItem.bind(LS);
const fakeEnpoints = 'fhs_fake_enpoints';
const unpack = JSON.parse;
const pack = JSON.stringify;

export const all = () => unpack(getItem(fakeEnpoints)) || [];

export const create = (item) => {
  const items = all();
  const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  const newItem = { ...item, id };
  items.push(newItem);
  setItem(fakeEnpoints, pack(items));
};

export const update = (id, item) => {
  const items = all();
  items.forEach((el, i) => {
    if (el.id === id) {
      const newItem = { ...el, ...item };
      items[i] = newItem;
    }
  });
  setItem(fakeEnpoints, pack(items));
};

export const read = (id) => {
  const items = all();
  return items.filter(el => el.id === id)[0];
};

export const remove = (id) => {
  const items = all();
  const newItems = items.filter(el => el.id !== id);
  setItem(fakeEnpoints, pack(newItems));
};


export default {
  all,
  create,
  read,
  update,
  remove,
};
