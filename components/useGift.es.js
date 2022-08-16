import { useGun, giftPath, useUser, currentRoom, hashObj } from "./useDraw.es.js";
import { reactive$1 as reactive, computed$1 as computed, useNow, watch$1 as watch, computedAsync, ref$1 as ref } from "./vendor.es.js";
function useGift(hash) {
  const gun = useGun();
  const gift = reactive({});
  const state = reactive({
    from: false,
    to: false,
    complete: computed(() => state.from && state.to),
    status: computed(() => state.from ? state.to ? "complete" : "proposed" : "canceled")
  });
  gun.get("#" + giftPath).get(hash).once((d, k) => {
    try {
      Object.assign(gift, JSON.parse(d));
      console.log;
      gun.user(gift.from).get(giftPath).get(k).on((d2) => {
        state.from = d2;
      });
      gun.user(gift.to).get(giftPath).get(k).on((d2) => {
        state.to = d2;
      });
    } catch (e) {
    }
  });
  return { gift, state };
}
async function giftState(hash, state = true) {
  const { user } = useUser();
  user.db.get(giftPath).get(hash).put(state);
}
function useNewGift(giftConf) {
  const { user } = useUser();
  const { now, pause } = useNow({ interval: 1e3, controls: true });
  const gift = reactive({
    from: computed(() => user == null ? void 0 : user.pub),
    to: "",
    qn: null,
    ql: null,
    wish: "",
    project: "",
    date: computed(() => now.value.getTime()),
    room: computed(() => currentRoom.pub)
  });
  const cleanGift = computed(() => {
    let g = removeEmptyKeys(gift);
    g.qn = Number(g.qn);
    return g;
  });
  const required = ["from", "to", "qn", "ql"];
  const valid = computed(() => {
    const isFilled = required.reduce((acc, val) => {
      return acc && gift[val];
    }, true);
    return isFilled;
  });
  watch(gift, (g) => {
    if (g.project) {
      gift.to = g.project.slice(-87);
    }
  });
  const hash = computedAsync(async () => {
    const { hash: hash2, hashed } = await hashObj(cleanGift.value);
    return hash2;
  });
  const proposed = ref(false);
  Object.assign(gift, giftConf);
  const gun = useGun();
  async function propose() {
    var _a;
    const { hash: hash2, hashed } = await hashObj(cleanGift.value);
    console.log(hash2, hashed);
    gun.get("#" + giftPath).get(hash2).put(hashed);
    gun.user().get(giftPath).get(hash2).put("proposed", () => {
      pause();
      proposed.value = true;
    });
    if ((_a = currentRoom.features) == null ? void 0 : _a.gifts) {
      gun.user(currentRoom.pub).get(giftPath).get(`${hash2}@${user.pub}`).put(true, () => {
        console.log(`gift ${hash2} published`);
      }, {
        opt: { cert: currentRoom.features.gifts }
      });
    }
  }
  return { gift, cleanGift, valid, propose, proposed, hash };
}
function removeEmptyKeys(obj) {
  return Object.entries(obj).filter(([_, v]) => !!v).reduce((acc, [k, v]) => ({ ...acc, [k]: v === Object(v) ? removeEmptyKeys(v) : v }), {});
}
export {
  giftState,
  removeEmptyKeys,
  useGift,
  useNewGift
};
