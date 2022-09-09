import { reactive$1 as reactive, computed$1 as computed, watchEffect$1 as watchEffect } from "./vendor.es.js";
import { useGun, currentRoom, useAccount } from "./useDraw.es.js";
let startTime = Date.now();
function useGuests({ TIMEOUT = 1e4 } = {}) {
  const gun = useGun();
  const guests = reactive({});
  const online = reactive({});
  const offline = reactive({});
  const count = reactive({
    total: computed(() => Object.keys(guests).length),
    online: computed(() => Object.keys(online).length),
    offline: computed(() => Object.keys(offline).length)
  });
  gun.user(currentRoom.pub).get("space").map().once((pos, pub) => {
    const { account } = useAccount(pub);
    guests[pub] = account;
    guests[pub].order = computed(
      () => startTime - account.value.pulse < TIMEOUT ? 1 : startTime - account.value.pulse
    );
    guests[pub].online = computed(() => {
      return startTime - account.value.pulse < TIMEOUT;
    });
  });
  watchEffect(() => {
    for (let pub in guests) {
      if (guests[pub].online) {
        online[pub] = guests[pub];
        delete offline[pub];
      } else {
        offline[pub] = guests[pub];
        delete online[pub];
      }
    }
  });
  return { guests, online, offline, count };
}
export {
  useGuests
};
