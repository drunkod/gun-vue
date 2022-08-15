import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createVNode$1 as createVNode, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Util/Graph",
    icon: "mdi:graph-outline",
    layout: { type: "single", iframe: true }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["UtilGraph"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "UtilGraph.story",
  setup(__props, { expose }) {
    expose();
    const UtilGraph = defineAsyncComponent(() => __vitePreload(() => import("./UtilGraph.es.js"), true ? ["UtilGraph.es.js","useDraw.es.js","vendor.es.js","AccountAvatar.es.js","_plugin-vue_export-helper.es.js"] : void 0));
    const __returned__ = { UtilGraph, defineAsyncComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/util/UtilGraph.story.vue";
const UtilGraph_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/util/UtilGraph.story.vue"]]);
export {
  UtilGraph_story as default
};
