import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createVNode$1 as createVNode, createBaseVNode$1 as createBaseVNode, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, reactive$1 as reactive } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 flex flex-col gap-4" }, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "User/Home",
    icon: "la:home"
  }, {
    controls: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["UserHome"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "UserHome.story",
  setup(__props, { expose }) {
    expose();
    const UserHome = defineAsyncComponent(() => __vitePreload(() => import("./UserHome.es.js"), true ? ["UserHome.es.js","vendor.es.js","useDraw.es.js","UserRooms.es.js","RoomCard.es.js","useBackground.es.js","AccountAvatar.es.js","_plugin-vue_export-helper.es.js","tools.es.js","eye.es.js","angle-up.es.js","angle-down.es.js","GiftWallets.es.js","UiLayer.es.js","times.es.js","copy.es.js","trash-alt.es.js","ChatPrivateCount.es.js","useMates.es.js","AccountBadge.es.js","usePrivate.es.js","UserProfile.es.js","plus.es.js","check.es.js","pen.es.js","UserPanel.es.js","exit-outline.es.js","lock.es.js","MateButton.es.js","UserAvatar.es.js","camera.es.js","useFile.es.js","UserLogin.es.js","UserCreate.es.js","UserAuth.es.js","QrLoad.es.js","qrcode.es.js","UserCredentials.es.js","QrShow.es.js","UserPass.es.js"] : void 0));
    const __returned__ = { UserHome, defineAsyncComponent, reactive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/user/UserHome.story.vue";
const UserHome_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserHome.story.vue"]]);
export {
  UserHome_story as default
};
