import { useUser, useColor, useGun, currentRoom } from "./useDraw.es.js";
import { openBlock$1 as openBlock, createElementBlock$1 as createElementBlock, createBaseVNode$1 as createBaseVNode, createBlock$1 as createBlock, toDisplayString$1 as toDisplayString, normalizeStyle$1 as normalizeStyle, createVNode$1 as createVNode, withCtx$1 as withCtx, renderSlot$1 as renderSlot, createCommentVNode$1 as createCommentVNode, Fragment$1 as Fragment, withModifiers$1 as withModifiers, computed$1 as computed, ref$1 as ref, useTimeAgo } from "./vendor.es.js";
import __unplugin_components_0$1 from "./AccountBadge.es.js";
import { __unplugin_components_2 as __unplugin_components_2$1 } from "./times.es.js";
import { __unplugin_components_1 } from "./check.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import { useGift, giftState } from "./useGift.es.js";
import "./AccountAvatar.es.js";
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M18.719 6.781L17.28 8.22L24.063 15H4v2h20.063l-6.782 6.781l1.438 1.438l8.5-8.5l.687-.719l-.687-.719z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
}
const __unplugin_components_2 = { name: "la-arrow-right", render: render$2 };
const _hoisted_1$1 = { class: "py-1 rounded-lg flex justify-center text-center text-sm" };
const _hoisted_2$1 = {
  key: 2,
  class: "p-0"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_check = __unplugin_components_1;
  const _component_la_times = __unplugin_components_2$1;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    $props.state === true ? (openBlock(), createBlock(_component_la_check, { key: 0 })) : $props.state === false ? (openBlock(), createBlock(_component_la_times, { key: 1 })) : (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString($props.state), 1))
  ]);
}
const _sfc_main$1 = {
  __name: "GiftStatus",
  props: {
    state: {
      type: [String, Boolean],
      default: ""
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/gift/GiftStatus.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftStatus.vue"]]);
const _hoisted_1 = { class: "flex flex-wrap gap-2 items-center px-2" };
const _hoisted_2 = { class: "flex-0 flex flex-wrap px-2 gap-2" };
const _hoisted_3 = { class: "flex flex-col" };
const _hoisted_4 = { class: "text-xl font-bold" };
const _hoisted_5 = { class: "flex flex-col" };
const _hoisted_6 = { class: "text-lg font-bold" };
const _hoisted_7 = { class: "flex items-center gap-2 flex-0" };
const _hoisted_8 = { class: "flex flex-col gap-2 text-xs" };
const _hoisted_9 = { class: "flex flex-col gap-2 text-xs" };
const _hoisted_10 = {
  class: "flex flex-1 gap-2 p-2 items-center flex-wrap leading-tight text-xs",
  style: { "flex": "1 1 20%" }
};
const _hoisted_11 = { class: "flex gap-2 flex-wrap" };
const _hoisted_12 = {
  key: 0,
  class: "flex flex-col gap-1"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs" }, "ROOM ", -1);
const _hoisted_14 = { class: "p-0" };
const _hoisted_15 = {
  key: 1,
  class: "flex flex-col gap-1"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xs" }, "PROJECT", -1);
const _hoisted_17 = { class: "p-0" };
const _hoisted_18 = {
  key: 2,
  class: "flex flex-col gap-1"
};
const _hoisted_19 = { class: "text-xs" };
const _hoisted_20 = { class: "p-0" };
const _hoisted_21 = { class: "flex gap-2" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gift_status = __unplugin_components_0;
  const _component_account_badge = __unplugin_components_0$1;
  const _component_la_arrow_right = __unplugin_components_2;
  return Object.keys($setup.gift).length > 0 ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "flex p-0 rounded-xl shadow-lg border-2 relative overflow-hidden",
    style: normalizeStyle({ opacity: $setup.state.complete ? 1 : 0.5 })
  }, [
    createBaseVNode("div", {
      class: "w-3 min-w-3 h-full flex-0",
      style: normalizeStyle({ backgroundColor: $setup.color.hex($props.hash) })
    }, null, 4),
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, toDisplayString($setup.gift.qn), 1)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, toDisplayString($setup.gift.ql), 1)
        ])
      ]),
      createBaseVNode("div", _hoisted_7, [
        createBaseVNode("div", _hoisted_8, [
          createVNode(_component_account_badge, {
            pub: $setup.gift.from,
            style: normalizeStyle({ opacity: $setup.state.from ? 1 : 0.4 })
          }, {
            default: withCtx(() => [
              createVNode(_component_gift_status, {
                class: "mr-2",
                state: $setup.state.from
              }, null, 8, ["state"])
            ]),
            _: 1
          }, 8, ["pub", "style"])
        ]),
        createVNode(_component_la_arrow_right, { class: "m-2" }),
        createBaseVNode("div", _hoisted_9, [
          createVNode(_component_account_badge, {
            pub: $setup.gift.to,
            style: normalizeStyle({ opacity: $setup.state.to ? 1 : 0.4 })
          }, {
            default: withCtx(() => [
              createVNode(_component_gift_status, {
                class: "mr-2",
                state: $setup.state.to
              }, null, 8, ["state"])
            ]),
            _: 1
          }, 8, ["pub", "style"])
        ])
      ]),
      renderSlot(_ctx.$slots, "default"),
      createBaseVNode("div", _hoisted_10, toDisplayString($setup.gift.wish), 1),
      createBaseVNode("div", _hoisted_11, [
        $setup.gift.room != $setup.currentRoom.pub ? (openBlock(), createElementBlock("div", _hoisted_12, [
          _hoisted_13,
          createBaseVNode("div", _hoisted_14, toDisplayString($setup.roomTitle), 1)
        ])) : createCommentVNode("v-if", true),
        $setup.gift.project ? (openBlock(), createElementBlock("div", _hoisted_15, [
          _hoisted_16,
          createBaseVNode("div", _hoisted_17, toDisplayString($setup.gift.project.slice(0, -88)), 1)
        ])) : createCommentVNode("v-if", true),
        $setup.gift.date ? (openBlock(), createElementBlock("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, toDisplayString($setup.date), 1),
          createBaseVNode("div", _hoisted_20, toDisplayString($setup.time), 1)
        ])) : createCommentVNode("v-if", true)
      ]),
      createBaseVNode("div", _hoisted_21, [
        $setup.gift.from == $setup.user.pub ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          !$setup.state.from ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "button",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.giftState($props.hash, true), ["stop", "prevent"]))
          }, "Propose")) : (openBlock(), createElementBlock("button", {
            key: 1,
            class: "button",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.giftState($props.hash, false), ["stop", "prevent"]))
          }, "Cancel"))
        ], 64)) : createCommentVNode("v-if", true),
        $setup.gift.to == $setup.user.pub ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          !$setup.state.to ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "button",
            onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.giftState($props.hash, true), ["stop", "prevent"]))
          }, "Accept")) : createCommentVNode("v-if", true),
          $setup.state.to ? (openBlock(), createElementBlock("button", {
            key: 1,
            class: "button",
            onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.giftState($props.hash, false), ["stop", "prevent"]))
          }, "Reject")) : createCommentVNode("v-if", true)
        ], 64)) : createCommentVNode("v-if", true)
      ])
    ])
  ], 4)) : createCommentVNode("v-if", true);
}
const _sfc_main = {
  __name: "GiftCard",
  props: {
    hash: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { user } = useUser();
    const color = useColor();
    const { gift, state } = useGift(props.hash);
    const time = computed(() => new Date(gift.date).toLocaleTimeString("en-GB"));
    const date = computed(() => new Date(gift.date).toLocaleDateString("en-GB"));
    const roomTitle = computed(() => {
      const title = ref();
      const gun = useGun();
      gun.user(gift.room).get("profile").get("name").on((d) => title.value = d);
      return title.value;
    });
    const __returned__ = { props, user, color, gift, state, time, date, roomTitle, giftState, useColor, useUser, useGift, useGun, currentRoom, computed, ref, useTimeAgo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/gift/GiftCard.vue";
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftCard.vue"]]);
export {
  __unplugin_components_5 as default
};
