import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createVNode$1 as createVNode, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Space/Plane",
    icon: "la:draw-polygon",
    layout: { type: "single", iframe: false }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["SpacePlane"], { class: "h-90vh" })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "SpacePlane.story",
  setup(__props, { expose }) {
    expose();
    const SpacePlane = defineAsyncComponent(() => __vitePreload(() => import("./SpacePlane.es.js"), true ? ["SpacePlane.es.js","vendor.es.js","useDraw.es.js","useSpace.es.js","useMates.es.js","UiLayer.es.js","times.es.js","_plugin-vue_export-helper.es.js","AccountHome.es.js","useProjects.es.js","useBackground.es.js","useReactions.es.js","PostCard.es.js","useZip.es.js","useFile.es.js","useMd.es.js","PostActionReact.es.js","AccountBadge.es.js","AccountAvatar.es.js","plus.es.js","youtube.es.js","trash.es.js","angle-down.es.js","angle-up.es.js","ProjectCard.es.js","GiftWallets.es.js","link.es.js","trash-alt.es.js","ChatPrivateCount.es.js","usePrivate.es.js","pen.es.js","MateButton.es.js"] : void 0));
    const __returned__ = { SpacePlane, defineAsyncComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/space/SpacePlane.story.vue";
const SpacePlane_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/space/SpacePlane.story.vue"]]);
export {
  SpacePlane_story as default
};
