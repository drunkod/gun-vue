import { useUser, useGun, currentRoom, useAccount, setPetname } from "./useDraw.es.js";
import { openBlock$1 as openBlock, createElementBlock$1 as createElementBlock, createVNode$1 as createVNode, withCtx$1 as withCtx, Fragment$1 as Fragment, renderList$1 as renderList, normalizeStyle$1 as normalizeStyle, createBaseVNode$1 as createBaseVNode, toDisplayString$1 as toDisplayString, createBlock$1 as createBlock, TransitionGroup, createCommentVNode$1 as createCommentVNode, Transition$1 as Transition, computed$1 as computed, ref$1 as ref, reactive$1 as reactive, urlRegex, createTextVNode$1 as createTextVNode, withDirectives$1 as withDirectives, vModelText$1 as vModelText, withKeys$1 as withKeys, pushScopeId$1 as pushScopeId, popScopeId$1 as popScopeId, watch$1 as watch, Dropdown$1 as Dropdown, toRef } from "./vendor.es.js";
import { useProjects } from "./useProjects.es.js";
import { useBackground } from "./useBackground.es.js";
import { useUserPosts, reactToPost } from "./useReactions.es.js";
import { isEmoji } from "./useMates.es.js";
import { __unplugin_components_9 } from "./PostCard.es.js";
import { __unplugin_components_2 } from "./trash.es.js";
import { __unplugin_components_0 as __unplugin_components_0$2 } from "./angle-down.es.js";
import { __unplugin_components_1 } from "./angle-up.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import __unplugin_components_0$5 from "./ProjectCard.es.js";
import { __unplugin_components_1 as __unplugin_components_1$2, __unplugin_components_6 } from "./ChatPrivateCount.es.js";
import { __unplugin_components_7 } from "./GiftWallets.es.js";
import { __unplugin_components_0 as __unplugin_components_0$4 } from "./pen.es.js";
import __unplugin_components_0$3 from "./AccountAvatar.es.js";
import { __unplugin_components_1 as __unplugin_components_1$1 } from "./MateButton.es.js";
import "./useZip.es.js";
import "./useFile.es.js";
import "./useMd.es.js";
import "./useGift.es.js";
import "./PostActionReact.es.js";
import "./AccountBadge.es.js";
import "./times.es.js";
import "./plus.es.js";
import "./youtube.es.js";
import "./usePrivate.es.js";
import "./UiLayer.es.js";
import "./copy.es.js";
import "./trash-alt.es.js";
const _hoisted_1$5 = { class: "p-2 flex flex-wrap bg-light-800 shadow-md rounded-xl gap-2" };
const _hoisted_2$5 = ["onClick"];
const _hoisted_3$5 = { class: "text-4xl" };
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1 w-4" }, null, -1);
const _hoisted_5$4 = { class: "text-lg ml-1" };
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_angle_up = __unplugin_components_1;
  const _component_la_angle_down = __unplugin_components_0$2;
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createVNode(TransitionGroup, { name: "fade" }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.reactions, (hashes, reaction) => {
          return openBlock(), createElementBlock("div", {
            class: "flex py-2 items-center cursor-pointer bg-light-100 rounded-xl shadow-lg px-4",
            style: normalizeStyle([{ "flex": "1 1 10px" }, { backgroundColor: $props.current == reaction ? "#999" : "" }]),
            key: reaction,
            onClick: ($event) => $setup.emit("update:current", reaction)
          }, [
            createBaseVNode("div", _hoisted_3$5, toDisplayString($setup.isEmoji(reaction) ? reaction : "\u{1F44B}"), 1),
            _hoisted_4$4,
            $props.current == reaction ? (openBlock(), createBlock(_component_la_angle_up, { key: 0 })) : (openBlock(), createBlock(_component_la_angle_down, { key: 1 })),
            createBaseVNode("div", _hoisted_5$4, toDisplayString(Object.keys(hashes).length), 1)
          ], 12, _hoisted_2$5);
        }), 128))
      ]),
      _: 1
    })
  ]);
}
const _sfc_main$4 = {
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
_sfc_main$4.__file = "src/post/reaction/PostReactionTabs.vue";
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", render$5], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/post/reaction/PostReactionTabs.vue"]]);
const _hoisted_1$4 = { class: "flex flex-col" };
const _hoisted_2$4 = { class: "text-xl font-bold mb-2" };
const _hoisted_3$4 = { class: "flex flex-col gap-4" };
const _hoisted_4$3 = {
  key: 0,
  class: "flex flex-col bg-light-800 rounded-2xl gap-4"
};
const _hoisted_5$3 = ["onClick"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_post_reaction_tabs = __unplugin_components_0$1;
  const _component_la_trash = __unplugin_components_2;
  const _component_post_card = __unplugin_components_9;
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$4, toDisplayString($setup.isMe ? "My " : "") + " Posts", 1),
    createBaseVNode("div", _hoisted_3$4, [
      createVNode(_component_post_reaction_tabs, {
        reactions: $setup.userPosts,
        current: $setup.postReaction,
        "onUpdate:current": _cache[0] || (_cache[0] = ($event) => $setup.postReaction = $event)
      }, null, 8, ["reactions", "current"]),
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          $setup.postReaction ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
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
                    ], 8, _hoisted_5$3)) : createCommentVNode("v-if", true),
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
const _sfc_main$3 = {
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
_sfc_main$3.__file = "src/account/AccountReactions.vue";
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$4], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountReactions.vue"]]);
const _hoisted_1$3 = { class: "flex flex-col break-all" };
const _hoisted_2$3 = {
  class: "mr-2 font-bold",
  style: { "flex": "1 1 60px" }
};
const _hoisted_3$3 = {
  class: "flex items-center ml-1",
  style: { "flex": "1 1 180px" }
};
const _hoisted_4$2 = {
  key: 0,
  class: "p-0"
};
const _hoisted_5$2 = ["href"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.account.profile, (content, field) => {
      return openBlock(), createElementBlock("div", {
        class: "p-2 flex items-center",
        key: field
      }, [
        createBaseVNode("div", _hoisted_2$3, toDisplayString(field), 1),
        createBaseVNode("div", _hoisted_3$3, [
          !$setup.isLink(content) ? (openBlock(), createElementBlock("div", _hoisted_4$2, toDisplayString(content), 1)) : (openBlock(), createElementBlock("a", {
            key: 1,
            class: "font-bold underline",
            href: content,
            target: "_blank"
          }, toDisplayString(content), 9, _hoisted_5$2))
        ])
      ]);
    }), 128))
  ]);
}
const _sfc_main$2 = {
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
_sfc_main$2.__file = "src/account/AccountProfile.vue";
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$3], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountProfile.vue"]]);
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5zm-1 5v2h2v-2zm0 4v8h2v-8z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_0 = { name: "la-info-circle", render: render$2 };
const _withScopeId = (n) => (pushScopeId("data-v-750a6bc6"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  key: 0,
  class: "flex items-center gap-2 px-2"
};
const _hoisted_2$1 = {
  key: 0,
  class: "text-lg flex items-center gap-2"
};
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1));
const _hoisted_4$1 = { class: "text-xs px-4 py-2 leading-5" };
const _hoisted_5$1 = { class: "max-w-120" };
const _hoisted_6$1 = ["checked"];
const _hoisted_7$1 = { class: "p-0" };
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  class: "font-bold underline",
  href: "http://www.skyhunter.com/marcs/petnames/IntroPetNames.html",
  target: "_blank"
}, "Stiegler, 2005", -1));
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_account_avatar = __unplugin_components_0$3;
  const _component_la_pen = __unplugin_components_0$4;
  const _component_la_info_circle = __unplugin_components_0;
  return $setup.user.is ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_account_avatar, {
      pub: $props.pub,
      size: 40
    }, null, 8, ["pub"]),
    $setup.petname && !$setup.editPetname ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
      createTextVNode(toDisplayString($setup.petname), 1),
      createVNode(_component_la_pen, {
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.editPetname = !$setup.editPetname)
      })
    ])) : withDirectives((openBlock(), createElementBlock("input", {
      key: 1,
      class: "m-1 p-2 rounded-lg",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.newName = $event),
      placeholder: "Set private petname",
      onKeydown: [
        _cache[2] || (_cache[2] = withKeys(($event) => {
          $setup.setPetname($props.pub, $setup.newName);
          $setup.editPetname = false;
        }, ["enter"])),
        _cache[3] || (_cache[3] = withKeys(($event) => $setup.editPetname = false, ["escape"]))
      ]
    }, null, 544)), [
      [vModelText, $setup.newName]
    ]),
    _hoisted_3$1,
    createVNode($setup["Dropdown"], null, {
      popper: withCtx(() => [
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("ul", _hoisted_5$1, [
            (openBlock(), createElementBlock(Fragment, null, renderList($setup.petnameRules, (state, rule) => {
              return createBaseVNode("li", {
                class: "flex gap-2 items-start",
                key: rule
              }, [
                createBaseVNode("input", {
                  class: "my-2",
                  type: "checkbox",
                  checked: state,
                  disabled: ""
                }, null, 8, _hoisted_6$1),
                createBaseVNode("div", _hoisted_7$1, toDisplayString(rule), 1)
              ]);
            }), 64))
          ]),
          _hoisted_8$1
        ])
      ]),
      default: withCtx(() => [
        createVNode(_component_la_info_circle, { class: "cursor-pointer" })
      ]),
      _: 1
    })
  ])) : createCommentVNode("v-if", true);
}
const AccountPetname_vue_vue_type_style_index_0_scoped_750a6bc6_lang = "";
const _sfc_main$1 = {
  __name: "AccountPetname",
  props: {
    pub: { type: String, default: "" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { user } = useUser();
    const petname = ref("");
    const newName = ref("");
    const editPetname = ref(false);
    watch(() => props.pub, (pub) => {
      user.db.get("petnames").get(pub).on(async (d) => {
        petname.value = await SEA.decrypt(d, user.pair());
      });
    }, { immediate: true });
    const petnameRules = {
      "The key must be resistant enough to forgery to survive in the context of the application threat model": true,
      "There can be at most one petname per key per user per application": true,
      "There can be at most one key per petname (per user per application)": true,
      "In the application user interface, all references to the key are represented by the petname": true,
      "The user must be able to assign a private petname to any key": true,
      "The petname must be assigned to the key only by explicit user action": true,
      "The user must be able to repeatedly edit the petname of any key": true,
      "The user interface shall assist the user in assuring that two petnames are not similar enough to enable mimicry": false,
      "Nicknames and alleged names must be unambiguously visually distinct from petnames": true
    };
    const __returned__ = { props, user, petname, newName, editPetname, petnameRules, useUser, setPetname, computed, watch, ref, Dropdown };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/account/AccountPetname.vue";
const __unplugin_components_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__scopeId", "data-v-750a6bc6"], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountPetname.vue"]]);
const _hoisted_1 = { class: "flex flex-col rounded-3xl overflow-hidden shadow-xl" };
const _hoisted_2 = { class: "flex flex-col ml-4 mx-4" };
const _hoisted_3 = { class: "text-2xl font-bold" };
const _hoisted_4 = { class: "mt-2" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_6 = { class: "p-4 flex flex-col" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xl font-bold p-2 mt-4" }, "Projects", -1);
const _hoisted_8 = { class: "flex flex-col gap-4" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_account_avatar = __unplugin_components_0$3;
  const _component_mate_button = __unplugin_components_1$1;
  const _component_chat_private_count = __unplugin_components_1$2;
  const _component_account_petname = __unplugin_components_3$1;
  const _component_account_profile = __unplugin_components_4;
  const _component_gift_wallets = __unplugin_components_7;
  const _component_mate_list = __unplugin_components_6;
  const _component_project_card = __unplugin_components_0$5;
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
    $props.pub != $setup.user.pub ? (openBlock(), createBlock(_component_account_petname, {
      key: 0,
      pub: $props.pub,
      style: normalizeStyle({ backgroundColor: $setup.account.color })
    }, null, 8, ["pub", "style"])) : createCommentVNode("v-if", true),
    createVNode(_component_account_profile, {
      class: "p-4",
      pub: $props.pub
    }, null, 8, ["pub"]),
    createBaseVNode("div", _hoisted_6, [
      createVNode(_component_gift_wallets, { pub: $props.pub }, null, 8, ["pub"]),
      createVNode(_component_mate_list, {
        pub: $props.pub,
        onBrowse: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("browse", $event))
      }, null, 8, ["pub"]),
      Object.keys($setup.projects).length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _hoisted_7,
        createBaseVNode("div", _hoisted_8, [
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
          onPost: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("post", $event))
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
    const { account, setPetname: setPetname2 } = useAccount(toRef(props, "pub"));
    const { user } = useUser();
    const bg = computed(() => useBackground({ pub: props.pub, size: 600, light: 0.5, draw: "circles" }));
    const { projects } = useProjects(props.pub);
    const __returned__ = { props, account, setPetname: setPetname2, user, bg, projects, useAccount, useUser, useBackground, useProjects, computed, toRef, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/account/AccountHome.vue";
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/account/AccountHome.vue"]]);
export {
  __unplugin_components_3 as default
};
