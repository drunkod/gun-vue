import { useUser, useGun, currentRoom, useAccount } from "./useDraw.es.js";
import { openBlock$1 as openBlock, createElementBlock$1 as createElementBlock, createVNode$1 as createVNode, withCtx$1 as withCtx, Fragment$1 as Fragment, renderList$1 as renderList, normalizeStyle$1 as normalizeStyle, createBaseVNode$1 as createBaseVNode, toDisplayString$1 as toDisplayString, createBlock$1 as createBlock, TransitionGroup, createCommentVNode$1 as createCommentVNode, Transition$1 as Transition, computed$1 as computed, ref$1 as ref, reactive$1 as reactive, urlRegex, createTextVNode$1 as createTextVNode, withDirectives$1 as withDirectives, vModelText$1 as vModelText, withKeys$1 as withKeys, toRef } from "./vendor.es.js";
import { useProjects } from "./useProjects.es.js";
import { useBackground } from "./useBackground.es.js";
import { useUserPosts, reactToPost } from "./useReactions.es.js";
import { isEmoji } from "./useMates.es.js";
import { __unplugin_components_9 } from "./PostCard.es.js";
import { __unplugin_components_2 } from "./trash.es.js";
import { __unplugin_components_0 as __unplugin_components_0$1 } from "./angle-down.es.js";
import { __unplugin_components_1 } from "./angle-up.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import __unplugin_components_0$4 from "./ProjectCard.es.js";
import { __unplugin_components_7 } from "./GiftWallets.es.js";
import { __unplugin_components_1 as __unplugin_components_1$2, __unplugin_components_6 } from "./ChatPrivateCount.es.js";
import { __unplugin_components_0 as __unplugin_components_0$3 } from "./pen.es.js";
import { __unplugin_components_1 as __unplugin_components_1$1 } from "./MateButton.es.js";
import __unplugin_components_0$2 from "./AccountAvatar.es.js";
import "./useZip.es.js";
import "./useFile.es.js";
import "./useMd.es.js";
import "./PostActionReact.es.js";
import "./AccountBadge.es.js";
import "./times.es.js";
import "./plus.es.js";
import "./youtube.es.js";
import "./UiLayer.es.js";
import "./link.es.js";
import "./trash-alt.es.js";
import "./usePrivate.es.js";
const _hoisted_1$3 = { class: "p-2 flex flex-wrap bg-light-800 shadow-md rounded-xl gap-2" };
const _hoisted_2$3 = ["onClick"];
const _hoisted_3$3 = { class: "text-4xl" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1 w-4" }, null, -1);
const _hoisted_5$3 = { class: "text-lg ml-1" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_angle_up = __unplugin_components_1;
  const _component_la_angle_down = __unplugin_components_0$1;
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(TransitionGroup, { name: "fade" }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.reactions, (hashes, reaction) => {
          return openBlock(), createElementBlock("div", {
            class: "flex py-2 items-center cursor-pointer bg-light-100 rounded-xl shadow-lg px-4",
            style: normalizeStyle([{ "flex": "1 1 10px" }, { backgroundColor: $props.current == reaction ? "#999" : "" }]),
            key: reaction,
            onClick: ($event) => $setup.emit("update:current", reaction)
          }, [
            createBaseVNode("div", _hoisted_3$3, toDisplayString($setup.isEmoji(reaction) ? reaction : "\u{1F44B}"), 1),
            _hoisted_4$3,
            $props.current == reaction ? (openBlock(), createBlock(_component_la_angle_up, { key: 0 })) : (openBlock(), createBlock(_component_la_angle_down, { key: 1 })),
            createBaseVNode("div", _hoisted_5$3, toDisplayString(Object.keys(hashes).length), 1)
          ], 12, _hoisted_2$3);
        }), 128))
      ]),
      _: 1
    })
  ]);
}
const _sfc_main$3 = {
  __name: "PostReactionTabs",
  props: {
    reactions: Object,
    current: String
  },
  emits: ["update:current"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const __returned__ = { props, emit, isEmoji };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$3.__file = "src/post/reaction/PostReactionTabs.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/post/reaction/PostReactionTabs.vue"]]);
const _hoisted_1$2 = { class: "flex flex-col" };
const _hoisted_2$2 = { class: "text-xl font-bold mb-2" };
const _hoisted_3$2 = { class: "flex flex-col gap-4" };
const _hoisted_4$2 = {
  key: 0,
  class: "flex flex-col bg-light-800 rounded-2xl gap-4"
};
const _hoisted_5$2 = ["onClick"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_post_reaction_tabs = __unplugin_components_0;
  const _component_la_trash = __unplugin_components_2;
  const _component_post_card = __unplugin_components_9;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, toDisplayString($setup.isMe ? "My " : "") + " Posts", 1),
    createBaseVNode("div", _hoisted_3$2, [
      createVNode(_component_post_reaction_tabs, {
        reactions: $setup.userPosts,
        current: $setup.postReaction,
        "onUpdate:current": _cache[0] || (_cache[0] = ($event) => $setup.postReaction = $event)
      }, null, 8, ["reactions", "current"]),
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          $setup.postReaction ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
            createVNode(TransitionGroup, { name: "fade" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($setup.postList, (from, hash) => {
                  return openBlock(), createElementBlock("div", {
                    class: "p-0 relative",
                    key: hash
                  }, [
                    $setup.isMe ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "absolute top-2 left-2 button p-2 z-100 text-2xl opacity-30 hover_opacity-100 transition cursor-pointer",
                      onClick: ($event) => $setup.reactToPost({ tag: from, hash, reaction: $setup.postReaction })
                    }, [
                      createVNode(_component_la_trash)
                    ], 8, _hoisted_5$2)) : createCommentVNode("v-if", true),
                    createVNode(_component_post_card, {
                      style: { "flex": "1 1 100px" },
                      hash,
                      onClick: ($event) => $setup.emit("post", hash),
                      actions: false
                    }, null, 8, ["hash", "onClick"])
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      })
    ])
  ]);
}
const _sfc_main$2 = {
  __name: "AccountReactions",
  props: {
    pub: String
  },
  emits: ["post"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const { user } = useUser();
    const isMe = computed(() => props.pub == user.pub);
    const postReaction = ref();
    const userPosts = useUserPosts(props.pub);
    const postList = computed(() => {
      return userPosts[postReaction.value] || [];
    });
    const __returned__ = { props, user, isMe, emit, postReaction, userPosts, postList, useGun, currentRoom, isEmoji, useUser, reactToPost, useUserPosts, reactive, ref, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$2.__file = "src/account/AccountReactions.vue";
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountReactions.vue"]]);
const _hoisted_1$1 = { class: "flex flex-col break-all" };
const _hoisted_2$1 = {
  class: "mr-2 font-bold",
  style: { "flex": "1 1 60px" }
};
const _hoisted_3$1 = {
  class: "flex items-center ml-1",
  style: { "flex": "1 1 180px" }
};
const _hoisted_4$1 = {
  key: 0,
  class: "p-0"
};
const _hoisted_5$1 = ["href"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.account.profile, (content, field) => {
      return openBlock(), createElementBlock("div", {
        class: "p-2 flex items-center",
        key: field
      }, [
        createBaseVNode("div", _hoisted_2$1, toDisplayString(field), 1),
        createBaseVNode("div", _hoisted_3$1, [
          !$setup.isLink(content) ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(content), 1)) : (openBlock(), createElementBlock("a", {
            key: 1,
            class: "font-bold underline",
            href: content,
            target: "_blank"
          }, toDisplayString(content), 9, _hoisted_5$1))
        ])
      ]);
    }), 128))
  ]);
}
const _sfc_main$1 = {
  __name: "AccountProfile",
  props: {
    pub: { type: String, default: "" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { account } = useAccount(props.pub);
    function isLink(text) {
      return urlRegex({ exact: true }).test(text);
    }
    const __returned__ = { props, account, isLink, useAccount, urlRegex };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/account/AccountProfile.vue";
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountProfile.vue"]]);
const _hoisted_1 = { class: "flex flex-col rounded-3xl overflow-hidden shadow-xl" };
const _hoisted_2 = { class: "flex flex-col ml-4 mx-4" };
const _hoisted_3 = { class: "text-2xl font-bold" };
const _hoisted_4 = { class: "mt-2" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_6 = { class: "flex items-center gap-2" };
const _hoisted_7 = {
  key: 0,
  class: "text-lg flex items-center gap-2"
};
const _hoisted_8 = { class: "p-4 flex flex-col" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xl font-bold p-2 mt-4" }, "Projects", -1);
const _hoisted_10 = { class: "flex flex-col gap-4" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  const _component_account_avatar = __unplugin_components_0$2;
  const _component_mate_button = __unplugin_components_1$1;
  const _component_chat_private_count = __unplugin_components_1$2;
  const _component_la_pen = __unplugin_components_0$3;
  const _component_account_profile = __unplugin_components_4;
  const _component_mate_list = __unplugin_components_6;
  const _component_gift_wallets = __unplugin_components_7;
  const _component_project_card = __unplugin_components_0$4;
  const _component_account_reactions = __unplugin_components_8;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: "p-4 flex items-center bg-cover border-b-6",
      style: normalizeStyle({ borderColor: $setup.account.color, ...$setup.bg })
    }, [
      createVNode(_component_account_avatar, {
        pub: $props.pub,
        size: 120,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("user", $props.pub))
      }, null, 8, ["pub"]),
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, toDisplayString((_a = $setup.account.profile) == null ? void 0 : _a.name), 1),
        createBaseVNode("div", _hoisted_4, toDisplayString((_b = $setup.account) == null ? void 0 : _b.lastSeen), 1)
      ]),
      _hoisted_5,
      createVNode(_component_mate_button, {
        class: "m-4",
        pub: $props.pub
      }, null, 8, ["pub"]),
      $setup.user.is ? (openBlock(), createBlock(_component_chat_private_count, {
        key: 0,
        pub: $props.pub,
        onChat: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("chat"))
      }, null, 8, ["pub"])) : createCommentVNode("v-if", true)
    ], 4),
    $props.pub != $setup.user.pub ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "p-2 flex",
      style: normalizeStyle({ backgroundColor: $setup.account.color })
    }, [
      createBaseVNode("div", _hoisted_6, [
        createVNode(_component_account_avatar, {
          pub: $props.pub,
          size: 40
        }, null, 8, ["pub"]),
        ((_c = $setup.account) == null ? void 0 : _c.petname) && !$setup.editPetname ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createTextVNode(toDisplayString((_d = $setup.account) == null ? void 0 : _d.petname), 1),
          createVNode(_component_la_pen, {
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.editPetname = !$setup.editPetname)
          })
        ])) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          class: "m-1 p-2 rounded-lg",
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.petname = $event),
          placeholder: "Set private petname",
          onKeydown: [
            _cache[4] || (_cache[4] = withKeys(($event) => {
              $setup.setPetname($props.pub, $setup.petname);
              $setup.editPetname = false;
            }, ["enter"])),
            _cache[5] || (_cache[5] = withKeys(($event) => $setup.editPetname = false, ["escape"]))
          ]
        }, null, 544)), [
          [vModelText, $setup.petname]
        ])
      ])
    ], 4)) : createCommentVNode("v-if", true),
    createVNode(_component_account_profile, {
      class: "p-4",
      pub: $props.pub
    }, null, 8, ["pub"]),
    createBaseVNode("div", _hoisted_8, [
      createVNode(_component_mate_list, {
        pub: $props.pub,
        onBrowse: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("browse", $event))
      }, null, 8, ["pub"]),
      createVNode(_component_gift_wallets, { pub: $props.pub }, null, 8, ["pub"]),
      Object.keys($setup.projects).length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _hoisted_9,
        createBaseVNode("div", _hoisted_10, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.projects, (proj, path) => {
            return openBlock(), createBlock(_component_project_card, {
              onClick: ($event) => _ctx.$emit("project", path + "@" + $props.pub),
              key: path,
              project: proj,
              path: path + "@" + $props.pub
            }, null, 8, ["onClick", "project", "path"]);
          }), 128))
        ]),
        createVNode(_component_account_reactions, {
          class: "m-2",
          pub: $props.pub,
          onPost: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("post", $event))
        }, null, 8, ["pub"])
      ], 64)) : createCommentVNode("v-if", true)
    ])
  ]);
}
const _sfc_main = {
  __name: "AccountHome",
  props: {
    pub: { type: String, default: "" }
  },
  emits: ["browse", "feed", "post", "chat", "user", "project"],
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { account, setPetname } = useAccount(toRef(props, "pub"));
    const { user } = useUser();
    const bg = computed(() => useBackground({ pub: props.pub, size: 600, light: 0.5, draw: "circles" }));
    const petname = ref("");
    const editPetname = ref(false);
    const { projects } = useProjects(props.pub);
    const __returned__ = { props, account, setPetname, user, bg, petname, editPetname, projects, useAccount, useUser, useBackground, useProjects, computed, toRef, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/account/AccountHome.vue";
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountHome.vue"]]);
export {
  __unplugin_components_3 as default
};
