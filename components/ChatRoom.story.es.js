import { resolveComponent$1 as resolveComponent, createBlock$1 as createBlock, withCtx$1 as withCtx, openBlock$1 as openBlock, createBaseVNode$1 as createBaseVNode, createVNode$1 as createVNode, normalizeProps, guardReactiveProps, defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, reactive$1 as reactive } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = { class: "p-2 flex flex-col gap-4" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Chat/Room",
    icon: "la:home"
  }, {
    controls: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["ChatTopics"], {
          onTopic: _cache[0] || (_cache[0] = ($event) => $setup.state.topic = $event)
        })
      ])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Round" }, {
        default: withCtx(() => [
          createVNode($setup["ChatRoom"], normalizeProps(guardReactiveProps($setup.state)), null, 16)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _sfc_main = {
  __name: "ChatRoom.story",
  setup(__props, { expose }) {
    expose();
    const ChatRoom = defineAsyncComponent(() => __vitePreload(() => import("./ChatMessage.es.js").then((n) => n.ChatRoom), true ? ["ChatMessage.es.js","vendor.es.js","AccountAvatar.es.js","useDraw.es.js","_plugin-vue_export-helper.es.js","AccountBadge.es.js","AccountHome.es.js","useProjects.es.js","useBackground.es.js","useReactions.es.js","useMates.es.js","PostCard.es.js","useZip.es.js","useFile.es.js","useMd.es.js","PostActionReact.es.js","times.es.js","plus.es.js","youtube.es.js","trash.es.js","angle-down.es.js","angle-up.es.js","ProjectCard.es.js","GiftWallets.es.js","UiLayer.es.js","link.es.js","trash-alt.es.js","ChatPrivateCount.es.js","usePrivate.es.js","pen.es.js","MateButton.es.js","AccountSelect.es.js","useGuests.es.js","AccountStars.es.js","useChat.es.js","ChatTopics.es.js","UserHome.es.js","UserRooms.es.js","RoomCard.es.js","tools.es.js","eye.es.js","UserProfile.es.js","check.es.js","UserPanel.es.js","exit-outline.es.js","lock.es.js","UserAvatar.es.js","camera.es.js","UserLogin.es.js","UserCreate.es.js","UserAuth.es.js","QrLoad.es.js","qrcode.es.js","UserCredentials.es.js","QrShow.es.js","UserPass.es.js","usePosts.es.js","RoomButton.es.js","UiPanel.es.js","GiftCard.es.js","useGift.es.js","GiftList.es.js","useGifts.es.js","GiftForm.es.js","ProjectList.es.js","RoomList.es.js","SpacePlane.es.js","useSpace.es.js","UserGraph.es.js","UserIcon.es.js","UserList.es.js","UtilGraph.es.js","UtilRelay.es.js"] : void 0));
    const ChatTopics = defineAsyncComponent(() => __vitePreload(() => import("./ChatTopics.es.js"), true ? ["ChatTopics.es.js","vendor.es.js","useDraw.es.js","useChat.es.js","useBackground.es.js","AccountAvatar.es.js","_plugin-vue_export-helper.es.js","times.es.js","plus.es.js"] : void 0));
    const state = reactive({
      topic: "general"
    });
    const __returned__ = { ChatRoom, ChatTopics, state, defineAsyncComponent, reactive };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/chat/ChatRoom.story.vue";
const ChatRoom_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/chat/ChatRoom.story.vue"]]);
export {
  ChatRoom_story as default
};
