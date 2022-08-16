import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createBaseVNode$1 as createBaseVNode, createVNode$1 as createVNode, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, reactive$1 as reactive, computed$1 as computed, onMounted$1 as onMounted, watchOnce } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = { class: "p-2 flex flex-col gap-4" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Account/Home",
    icon: "la:home",
    "setup-app": $setup.mySetup
  }, {
    controls: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["AccountSelect"], {
          pub: $setup.state.pub,
          "onUpdate:pub": _cache[0] || (_cache[0] = ($event) => $setup.state.pub = $event)
        }, null, 8, ["pub"])
      ])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          (openBlock(), createBlock($setup["AccountHome"], {
            pub: $setup.state.pub,
            key: $setup.state.pub
          }, null, 8, ["pub"]))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const block0 = (Comp) => {
  Comp.doc = "<p>Currently it's important to set the <code>:key=&quot;pub&quot;</code> attribute for the component to correctly update with changing pub key.</p>\n";
};
const _sfc_main = {
  __name: "AccountHome.story",
  setup(__props, { expose }) {
    expose();
    const AccountHome = defineAsyncComponent(() => __vitePreload(() => import("./AccountHome.es.js"), true ? ["AccountHome.es.js","useDraw.es.js","vendor.es.js","useProjects.es.js","useBackground.es.js","useReactions.es.js","useMates.es.js","PostCard.es.js","useZip.es.js","useFile.es.js","useMd.es.js","useGift.es.js","PostActionReact.es.js","AccountBadge.es.js","AccountAvatar.es.js","_plugin-vue_export-helper.es.js","times.es.js","plus.es.js","youtube.es.js","trash.es.js","angle-down.es.js","angle-up.es.js","ProjectCard.es.js","ChatPrivateCount.es.js","usePrivate.es.js","GiftWallets.es.js","UiLayer.es.js","copy.es.js","trash-alt.es.js","pen.es.js","MateButton.es.js"] : void 0));
    const AccountSelect = defineAsyncComponent(() => __vitePreload(() => import("./AccountSelect.es.js"), true ? ["AccountSelect.es.js","useDraw.es.js","vendor.es.js","useGuests.es.js","times.es.js","AccountBadge.es.js","AccountAvatar.es.js","_plugin-vue_export-helper.es.js"] : void 0));
    const state = reactive({
      pub: "We2MxFrbFH37008fNmreSk9hdHLJNMVhrSMIIbOO5Ao.FbNrdt118-TCYzGYRo94Xa8EUWwwV-7DIopXSE9OZD8"
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
    const __returned__ = { AccountHome, AccountSelect, state, mySetup, computed, defineAsyncComponent, onMounted, reactive, watchOnce };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/account/AccountHome.story.vue";
const AccountHome_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountHome.story.vue"]]);
export {
  AccountHome_story as default
};
