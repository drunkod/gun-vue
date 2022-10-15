import { useUser, useProject, useColor, currentRoom, useGun } from "./useDraw.es.js";
import { createElementBlock$1 as createElementBlock, createBaseVNode$1 as createBaseVNode, createBlock$1 as createBlock, withCtx$1 as withCtx, toDisplayString$1 as toDisplayString, Fragment$1 as Fragment, renderList$1 as renderList, createVNode$1 as createVNode, mergeProps$1 as mergeProps, withDirectives$1 as withDirectives, vModelText$1 as vModelText, createTextVNode$1 as createTextVNode, createCommentVNode$1 as createCommentVNode, normalizeStyle$1 as normalizeStyle, openBlock$1 as openBlock, toRef, watch$1 as watch, computed$1 as computed, reactive$1 as reactive, script, Ce } from "./vendor.es.js";
import { useProjects } from "./useProjects.es.js";
import { useGuests } from "./useGuests.es.js";
import { __unplugin_components_7, currencies } from "./GiftWallets.es.js";
import __unplugin_components_5 from "./RoomButton.es.js";
import __unplugin_components_0$2 from "./ProjectCard.es.js";
import { __unplugin_components_2 } from "./times.es.js";
import __unplugin_components_0$3 from "./UserAuth.es.js";
import __unplugin_components_0$1 from "./AccountBadge.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import { useNewGift } from "./useGift.es.js";
import "./UiLayer.es.js";
import "./copy.es.js";
import "./trash-alt.es.js";
import "./useBackground.es.js";
import "./UiPanel.es.js";
import "./useMd.es.js";
import "./useFile.es.js";
import "./trash.es.js";
import "./check.es.js";
import "./pen.es.js";
import "./exit-outline.es.js";
import "./tools.es.js";
import "./camera.es.js";
import "./AccountAvatar.es.js";
import "./youtube.es.js";
import "./QrLoad.es.js";
import "./qrcode.es.js";
const _hoisted_1 = { class: "flex flex-col max-w-140" };
const _hoisted_2 = {
  class: "grid p-4 gap-2 items-center",
  style: { "grid-template-columns": "1fr 10fr" }
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 text-right" }, "FROM", -1);
const _hoisted_4 = { class: "flex-1" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 text-right" }, "TO ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_7 = {
  key: 1,
  class: "flex flex-col"
};
const _hoisted_8 = { class: "font-bold" };
const _hoisted_9 = { class: "flex flex-wrap gap-3" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 text-right" }, "WALLET", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 text-right" }, "Quantity", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 text-right" }, "Quality", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 text-right self-start" }, "Wish ", -1);
const _hoisted_14 = { class: "p-2 text-right" };
const _hoisted_15 = {
  key: 0,
  class: "w-full"
};
const _hoisted_16 = {
  key: 1,
  class: "flex flex-wrap gap-1"
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "font-bold" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2 text-right" }, "ROOM", -1);
const _hoisted_20 = {
  key: 2,
  class: "flex"
};
const _hoisted_21 = { class: "overflow-scroll font-mono text-xs m-4 opacity-50 break-all col-span-2" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_account_badge = __unplugin_components_0$1;
  const _component_user_auth = __unplugin_components_0$3;
  const _component_la_times = __unplugin_components_2;
  const _component_gift_wallets = __unplugin_components_7;
  const _component_project_card = __unplugin_components_0$2;
  const _component_room_button = __unplugin_components_5;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        $setup.user.pub ? (openBlock(), createBlock(_component_account_badge, {
          key: 0,
          pub: $setup.user.pub
        }, null, 8, ["pub"])) : (openBlock(), createBlock(_component_user_auth, { key: 1 }))
      ]),
      _hoisted_5,
      $setup.newGift.to ? (openBlock(), createBlock(_component_account_badge, {
        key: 0,
        pub: $setup.newGift.to
      }, {
        default: withCtx(() => [
          _hoisted_6,
          createVNode(_component_la_times, {
            class: "mr-2",
            onClick: _cache[0] || (_cache[0] = ($event) => {
              $setup.newGift.to = "";
              $setup.newGift.wallet = null;
            })
          })
        ]),
        _: 1
      }, 8, ["pub"])) : (openBlock(), createElementBlock("div", _hoisted_7, [
        createBaseVNode("div", _hoisted_8, "USER SELECT OF " + toDisplayString(Object.keys($setup.guestsWithWallets).length), 1),
        createBaseVNode("div", _hoisted_9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.guestsWithWallets, (guest) => {
            return openBlock(), createBlock(_component_account_badge, {
              key: guest,
              onClick: ($event) => $setup.newGift.to = guest.pub,
              pub: guest.pub
            }, null, 8, ["onClick", "pub"]);
          }), 128))
        ])
      ])),
      $setup.newGift.to ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        _hoisted_10,
        (openBlock(), createBlock(_component_gift_wallets, {
          key: $setup.newGift.to,
          pub: $setup.newGift.to,
          onWallet: _cache[1] || (_cache[1] = ($event) => $setup.newGift.wallet = $event),
          onClear: _cache[2] || (_cache[2] = ($event) => $setup.newGift.wallet = null),
          activeWallet: $setup.newGift.wallet
        }, null, 8, ["pub", "activeWallet"])),
        $setup.newGift.wallet ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _hoisted_11,
          createVNode($setup["number"], mergeProps({
            modelValue: $setup.newGift.qn,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.newGift.qn = $event)
          }, $setup.numOpts, { placeholder: "Quantity" }), null, 16, ["modelValue"]),
          _hoisted_12,
          createVNode($setup["vSelect"], {
            class: "rounded-xl",
            modelValue: $setup.newGift.ql,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.newGift.ql = $event),
            options: $setup.currencies,
            appendToBody: true,
            placeholder: "Currency abbreviation or short object description",
            taggable: true,
            pushTags: true
          }, null, 8, ["modelValue", "options"]),
          _hoisted_13,
          withDirectives(createBaseVNode("textarea", {
            class: "p-2",
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.newGift.wish = $event),
            placeholder: "Wish"
          }, null, 512), [
            [vModelText, $setup.newGift.wish]
          ]),
          createBaseVNode("div", _hoisted_14, [
            createTextVNode("PROJECT "),
            !$setup.newGift.project ? (openBlock(), createElementBlock("div", _hoisted_15, "SELECT")) : createCommentVNode("v-if", true)
          ]),
          $setup.newGift.project ? (openBlock(), createBlock(_component_project_card, {
            key: 0,
            project: $setup.project,
            path: $setup.newGift.project
          }, {
            default: withCtx(() => [
              createVNode(_component_la_times, {
                onClick: _cache[6] || (_cache[6] = ($event) => $setup.newGift.project = null)
              })
            ]),
            _: 1
          }, 8, ["project", "path"])) : (openBlock(), createElementBlock("div", _hoisted_16, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.userProjects, (proj, p) => {
              return openBlock(), createElementBlock("div", {
                class: "p-2 rounded-xl cursor-pointer",
                key: p,
                style: normalizeStyle({ backgroundColor: proj.color }),
                onClick: ($event) => $setup.newGift.project = proj.path
              }, [
                createBaseVNode("div", _hoisted_18, toDisplayString(proj.title), 1)
              ], 12, _hoisted_17);
            }), 128))
          ])),
          _hoisted_19,
          createVNode(_component_room_button),
          $setup.valid ? (openBlock(), createElementBlock("div", _hoisted_20, [
            createBaseVNode("button", {
              class: "button w-full justify-center",
              onClick: _cache[7] || (_cache[7] = ($event) => {
                $setup.propose();
                _ctx.$emit("sent", $setup.hash);
              })
            }, "Propose")
          ])) : createCommentVNode("v-if", true),
          createBaseVNode("pre", _hoisted_21, toDisplayString($setup.cleanGift), 1),
          createBaseVNode("div", {
            class: "font-mono text-xs col-span-2 text-center rounded-lg m-2 transition",
            style: normalizeStyle({ backgroundColor: $setup.color.hex($setup.hash || "") })
          }, toDisplayString($setup.hash), 5)
        ], 64)) : createCommentVNode("v-if", true)
      ], 64)) : createCommentVNode("v-if", true)
    ])
  ]);
}
const _sfc_main = {
  __name: "GiftForm",
  props: {
    gift: {
      type: Object,
      default: {}
    }
  },
  emits: ["sent", "update:gift"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const numOpts = {
      decimal: ".",
      separator: " ",
      prefix: "",
      precision: 2,
      masked: false
    };
    const { user } = useUser();
    const { gift: newGift, cleanGift, propose, proposed, hash, valid } = useNewGift(props.gift);
    const { guests, count } = useGuests();
    const { project } = useProject(toRef(newGift, "project"));
    const { projects } = useProjects();
    const color = useColor();
    watch(() => newGift.wallet, (w) => {
      if (!w)
        return;
      newGift.ql = w.currency;
    });
    const guestsWithWallets = computed(() => {
      const gun = useGun();
      const list = reactive({});
      Object.keys(guests).forEach((g) => {
        gun.user(g).get("wallets").on((d, k) => {
          list[g] = guests[g];
        });
      });
      return list;
    });
    const userProjects = computed(() => {
      const projs = reactive({});
      Object.keys(projects).forEach((p) => {
        if (p.includes(newGift.to)) {
          projs[p] = projects[p];
        }
      });
      return projs;
    });
    const __returned__ = { numOpts, props, emit, user, newGift, cleanGift, propose, proposed, hash, valid, guests, count, project, projects, color, guestsWithWallets, userProjects, useGuests, useNewGift, useUser, useProject, useProjects, currentRoom, useColor, useGun, toRef, watch, computed, reactive, number: script, vSelect: Ce, currencies };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/gift/GiftForm.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftForm.vue"]]);
export {
  __unplugin_components_0 as default
};
