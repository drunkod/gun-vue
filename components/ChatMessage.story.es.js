import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createBaseVNode$1 as createBaseVNode, createVNode$1 as createVNode, withDirectives$1 as withDirectives, vModelText$1 as vModelText, normalizeProps, guardReactiveProps, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, reactive$1 as reactive } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = { class: "p-2 flex flex-col gap-4" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Chat/Message",
    icon: "la:envelope"
  }, {
    controls: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["AccountSelect"], {
          pub: $setup.state.author,
          "onUpdate:pub": _cache[0] || (_cache[0] = ($event) => $setup.state.author = $event)
        }, null, 8, ["pub"]),
        withDirectives(createBaseVNode("textarea", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.text = $event)
        }, null, 512), [
          [vModelText, $setup.state.text]
        ])
      ])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["ChatMessage"], normalizeProps(guardReactiveProps($setup.state)), null, 16)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "ChatMessage.story",
  setup(__props, { expose }) {
    expose();
    const ChatMessage = defineAsyncComponent(() => __vitePreload(() => import("./ChatMessage.es.js").then((n) => n.ChatMessage), true ? ["ChatMessage.es.js","vendor.es.js","AccountAvatar.es.js","useDraw.es.js","_plugin-vue_export-helper.es.js","AccountBadge.es.js","AccountHome.es.js","useProjects.es.js","useBackground.es.js","useReactions.es.js","useMates.es.js","PostCard.es.js","useZip.es.js","useFile.es.js","useMd.es.js","PostActionReact.es.js","times.es.js","plus.es.js","youtube.es.js","trash.es.js","angle-down.es.js","angle-up.es.js","ProjectCard.es.js","GiftWallets.es.js","UiLayer.es.js","link.es.js","trash-alt.es.js","ChatPrivateCount.es.js","usePrivate.es.js","pen.es.js","MateButton.es.js","AccountSelect.es.js","useGuests.es.js","AccountStars.es.js","useChat.es.js","ChatTopics.es.js","UserHome.es.js","UserRooms.es.js","RoomCard.es.js","tools.es.js","eye.es.js","UserProfile.es.js","check.es.js","UserPanel.es.js","exit-outline.es.js","lock.es.js","UserAvatar.es.js","camera.es.js","UserLogin.es.js","UserCreate.es.js","UserAuth.es.js","QrLoad.es.js","qrcode.es.js","UserCredentials.es.js","QrShow.es.js","UserPass.es.js","usePosts.es.js","RoomButton.es.js","UiPanel.es.js","GiftCard.es.js","useGift.es.js","GiftList.es.js","useGifts.es.js","GiftForm.es.js","ProjectList.es.js","RoomList.es.js","SpacePlane.es.js","useSpace.es.js","UserGraph.es.js","UserIcon.es.js","UserList.es.js","UtilGraph.es.js","UtilRelay.es.js"] : void 0));
    const AccountSelect = defineAsyncComponent(() => __vitePreload(() => import("./AccountSelect.es.js"), true ? ["AccountSelect.es.js","useDraw.es.js","vendor.es.js","useGuests.es.js","times.es.js","AccountBadge.es.js","AccountAvatar.es.js","_plugin-vue_export-helper.es.js"] : void 0));
    const state = reactive({
      author: "",
      timestamp: Date.now(),
      text: "message text"
    });
    const __returned__ = { ChatMessage, AccountSelect, state, defineAsyncComponent, reactive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/chat/ChatMessage.story.vue";
const ChatMessage_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/chat/ChatMessage.story.vue"]]);
export {
  ChatMessage_story as default
};
