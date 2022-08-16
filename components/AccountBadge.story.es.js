import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createBaseVNode$1 as createBaseVNode, withDirectives$1 as withDirectives, vModelText$1 as vModelText, createVNode$1 as createVNode, normalizeProps, guardReactiveProps, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, reactive$1 as reactive, watchOnce, onMounted$1 as onMounted } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = { class: "p-2 flex flex-col gap-4" };
const _hoisted_2 = { class: "flex gap-2" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("label", { for: "size" }, "Size", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Account/Badge",
    icon: "la:id-badge",
    "setup-app": $setup.mySetup
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
        ]),
        createVNode($setup["AccountSelect"], {
          pub: $setup.state.pub,
          "onUpdate:pub": _cache[1] || (_cache[1] = ($event) => $setup.state.pub = $event)
        }, null, 8, ["pub"])
      ])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["AccountBadge"], normalizeProps(guardReactiveProps($setup.state)), null, 16)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "AccountBadge.story",
  setup(__props, { expose }) {
    expose();
    const AccountBadge = defineAsyncComponent(() => __vitePreload(() => import("./AccountBadge.es.js"), true ? ["AccountBadge.es.js","vendor.es.js","useDraw.es.js","AccountAvatar.es.js","_plugin-vue_export-helper.es.js"] : void 0));
    const AccountSelect = defineAsyncComponent(() => __vitePreload(() => import("./AccountSelect.es.js"), true ? ["AccountSelect.es.js","useDraw.es.js","vendor.es.js","useGuests.es.js","times.es.js","AccountBadge.es.js","AccountAvatar.es.js","_plugin-vue_export-helper.es.js"] : void 0));
    const state = reactive({
      pub: "We2MxFrbFH37008fNmreSk9hdHLJNMVhrSMIIbOO5Ao.FbNrdt118-TCYzGYRo94Xa8EUWwwV-7DIopXSE9OZD8",
      size: 200
    });
    function mySetup() {
      onMounted(async () => {
        const { useGuests } = await __vitePreload(() => import("./index.es.js"), true ? ["index.es.js","useDraw.es.js","vendor.es.js","useChat.es.js","usePrivate.es.js","usePosts.es.js","useFile.es.js","useZip.es.js","useMd.es.js","useGift.es.js","useReactions.es.js","useMates.es.js","useGuests.es.js","useSpace.es.js","useBackground.es.js","useGifts.es.js","useProjects.es.js"] : void 0);
        const { guests } = useGuests();
        watchOnce(guests, (g) => {
          state.pub = Object.keys(guests)[0];
        });
      });
    }
    const __returned__ = { AccountBadge, AccountSelect, state, mySetup, watchOnce, defineAsyncComponent, reactive, onMounted };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/account/AccountBadge.story.vue";
const AccountBadge_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountBadge.story.vue"]]);
export {
  AccountBadge_story as default
};
