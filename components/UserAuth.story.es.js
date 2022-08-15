import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createVNode$1 as createVNode, createBaseVNode$1 as createBaseVNode, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, reactive$1 as reactive } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 flex flex-col gap-4" }, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "User/Auth",
    icon: "la:key"
  }, {
    controls: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["UserAuth"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "UserAuth.story",
  setup(__props, { expose }) {
    expose();
    const UserAuth = defineAsyncComponent(() => __vitePreload(() => import("./UserAuth.es.js"), true ? ["UserAuth.es.js","useDraw.es.js","vendor.es.js","useFile.es.js","QrLoad.es.js","_plugin-vue_export-helper.es.js","qrcode.es.js"] : void 0));
    const __returned__ = { UserAuth, defineAsyncComponent, reactive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/user/UserAuth.story.vue";
const UserAuth_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserAuth.story.vue"]]);
export {
  UserAuth_story as default
};
