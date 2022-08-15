import { reactive$1 as reactive, computed$1 as computed } from "./vendor.es.js";
import { useUser, useGun, currentRoom, giftPath } from "./useDraw.es.js";
function useGifts() {
  useUser();
  const gun = useGun();
  const gifts = reactive({});
  gun.user(currentRoom.pub).get(giftPath).map().once((data, key) => {
    gun.get("#" + giftPath).get(key.slice(0, -88)).once((d, k) => {
      try {
        const obj = JSON.parse(d);
        gifts[k] = obj;
      } catch (e) {
      }
    });
  });
  return { gifts };
}
function useMyGifts() {
  const { user } = useUser();
  const gun = useGun();
  const gifts = reactive({});
  const from = reactive({});
  const to = reactive({});
  gun.user().get(giftPath).map().on((d, hash) => {
    gun.get("#" + giftPath).get(hash).once((d2) => {
      try {
        d2 = JSON.parse(d2);
        gifts[hash] = d2;
        if (d2.from == user.pub) {
          from[hash] = d2;
        }
        if (d2.to == user.pub) {
          to[hash] = d2;
        }
      } catch {
      }
    });
  });
  const newGifts = reactive({});
  gun.user(currentRoom.pub).get(giftPath).map().once(async (d, path) => {
    let hash = path.slice(0, -88);
    gun.get("#" + giftPath).get(hash).once(async (d2) => {
      try {
        d2 = JSON.parse(d2);
        if (d2.to == user.pub) {
          let has = await gun.user().get(giftPath).get(hash).then();
          if (!has) {
            newGifts[hash] = d2;
          }
        }
      } catch {
      }
    });
  });
  return { gifts, from, to, newGifts };
}
function useProjectGifts(path) {
  const pub = path.slice(-87);
  const gun = useGun();
  const gifts = reactive({});
  gun.user(pub).get(giftPath).map().once((d, hash) => {
    gun.get("#" + giftPath).get(hash).once((d2) => {
      try {
        d2 = JSON.parse(d2);
        if (d2.project == path) {
          gifts[hash] = { ...d2, state: {} };
          gun.user(d2.from).get(giftPath).get(hash).on((data) => {
            gifts[hash].state.from = data;
          });
          gun.user(d2.to).get(giftPath).get(hash).on((data) => {
            gifts[hash].state.to = data;
          });
        }
      } catch {
      }
    });
  });
  const collections = computed(() => {
    let collections2 = {};
    for (let hash in gifts) {
      let gift = gifts[hash];
      collections2[gift.ql] = collections2[gift.ql] || { list: {}, sum: 0, from: {} };
      collections2[gift.ql].list[hash] = gift;
    }
    for (let q in collections2) {
      collections2[q].sum = 0;
      collections2[q].from = {};
      for (let hash in collections2[q].list) {
        let colG = collections2[q].list[hash];
        if (!(colG.state.from && colG.state.to))
          continue;
        collections2[q].sum += Number(colG.qn);
        collections2[q].from[colG.from] = collections2[q].from[colG.from] || 0;
        collections2[q].from[colG.from] += Number(colG.qn);
      }
    }
    return collections2;
  });
  return { gifts, collections };
}
export {
  useGifts,
  useMyGifts,
  useProjectGifts
};
