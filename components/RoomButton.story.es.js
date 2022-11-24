import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createVNode$1 as createVNode, Suspense, createBaseVNode$1 as createBaseVNode, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, reactive$1 as reactive } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 flex flex-col gap-4" }, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Room/Icon",
    layout: { type: "single" }
  }, {
    controls: withCtx(() => [
      _hoisted_1
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              (openBlock(), createBlock(Suspense, null, {
                default: withCtx(() => [
                  createVNode($setup["RoomButton"])
                ]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "RoomButton.story",
  setup(__props, { expose }) {
    expose();
    const RoomButton = defineAsyncComponent(
      () => __vitePreload(() => import("./RoomButton.es.js"), true ? ["RoomButton.es.js","useDraw.es.js","vendor.es.js","useBackground.es.js","UiPanel.es.js","times.es.js","_plugin-vue_export-helper.es.js","useMd.es.js","useFile.es.js","trash.es.js","check.es.js","pen.es.js","exit-outline.es.js","tools.es.js","AccountBadge.es.js","AccountAvatar.es.js","camera.es.js","UiLayer.es.js","trash-alt.es.js"] : void 0)
    );
    const __returned__ = { RoomButton, defineAsyncComponent, reactive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/room/RoomButton.story.vue";
const RoomButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/room/RoomButton.story.vue"]]);
export {
  RoomButton_story as default
};
