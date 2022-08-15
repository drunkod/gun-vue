import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createVNode$1 as createVNode, createBaseVNode$1 as createBaseVNode, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, onMounted$1 as onMounted, reactive$1 as reactive, ref$1 as ref, watch$1 as watch, nextTick$1 as nextTick, computedAsync } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 flex flex-col gap-4" }, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Gift/Form" }, {
    controls: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["GiftForm"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "GiftForm.story",
  setup(__props, { expose }) {
    expose();
    const GiftForm = defineAsyncComponent(() => __vitePreload(() => import("./GiftForm.es.js"), true ? ["GiftForm.es.js","useDraw.es.js","vendor.es.js","useProjects.es.js","useGuests.es.js","GiftWallets.es.js","UiLayer.es.js","times.es.js","_plugin-vue_export-helper.es.js","link.es.js","trash-alt.es.js","RoomButton.es.js","useBackground.es.js","UiPanel.es.js","useMd.es.js","useFile.es.js","trash.es.js","check.es.js","pen.es.js","exit-outline.es.js","tools.es.js","AccountBadge.es.js","AccountAvatar.es.js","camera.es.js","ProjectCard.es.js","youtube.es.js","UserAuth.es.js","QrLoad.es.js","qrcode.es.js","useGift.es.js"] : void 0));
    const __returned__ = { GiftForm, defineAsyncComponent, onMounted, reactive, ref, watch, nextTick, computedAsync };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/gift/GiftForm.story.vue";
const GiftForm_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftForm.story.vue"]]);
export {
  GiftForm_story as default
};
