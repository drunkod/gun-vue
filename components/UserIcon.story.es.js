import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createBaseVNode$1 as createBaseVNode, withDirectives$1 as withDirectives, vModelText$1 as vModelText, createVNode$1 as createVNode, normalizeProps, guardReactiveProps, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, reactive$1 as reactive } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = { class: "p-2 flex flex-col gap-4" };
const _hoisted_2 = { class: "flex gap-2" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("label", { for: "size" }, "Size", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "User/Icon",
    icon: "la:user"
  }, {
    controls: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          withDirectives(createBaseVNode("input", {
            id: "size",
            type: "range",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.size = $event),
            min: 40,
            max: 500
          }, null, 512), [
            [vModelText, $setup.state.size]
          ])
        ])
      ])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["UserIcon"], normalizeProps(guardReactiveProps($setup.state)), null, 16)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "UserIcon.story",
  setup(__props, { expose }) {
    expose();
    const UserIcon = defineAsyncComponent(() => __vitePreload(() => import("./UserIcon.es.js"), true ? ["UserIcon.es.js","useDraw.es.js","vendor.es.js","UiPanel.es.js","times.es.js","_plugin-vue_export-helper.es.js","UserHome.es.js","UserRooms.es.js","RoomCard.es.js","useBackground.es.js","AccountAvatar.es.js","tools.es.js","eye.es.js","angle-up.es.js","angle-down.es.js","GiftWallets.es.js","UiLayer.es.js","link.es.js","trash-alt.es.js","ChatPrivateCount.es.js","useMates.es.js","AccountBadge.es.js","usePrivate.es.js","UserProfile.es.js","plus.es.js","check.es.js","pen.es.js","UserPanel.es.js","exit-outline.es.js","lock.es.js","MateButton.es.js","UserAvatar.es.js","camera.es.js","useFile.es.js","UserLogin.es.js","UserCreate.es.js","UserAuth.es.js","QrLoad.es.js","qrcode.es.js","UserCredentials.es.js","QrShow.es.js","UserPass.es.js"] : void 0));
    const state = reactive({
      size: 200
    });
    const __returned__ = { UserIcon, state, defineAsyncComponent, reactive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/user/UserIcon.story.vue";
const UserIcon_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserIcon.story.vue"]]);
export {
  UserIcon_story as default
};
