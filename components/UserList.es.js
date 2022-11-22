import { openBlock$1 as openBlock, createElementBlock$1 as createElementBlock, createBaseVNode$1 as createBaseVNode, withModifiers$1 as withModifiers, createVNode$1 as createVNode, createTextVNode$1 as createTextVNode, createCommentVNode$1 as createCommentVNode, withCtx$1 as withCtx, Transition$1 as Transition, Fragment$1 as Fragment, renderList$1 as renderList, toDisplayString$1 as toDisplayString, TransitionGroup, createBlock$1 as createBlock, normalizeStyle$1 as normalizeStyle, useMediaQuery$1 as useMediaQuery, ref$1 as ref, onClickOutside$1 as onClickOutside, computed$1 as computed, reactive$1 as reactive, toRef } from "./vendor.es.js";
import { useUser, joinRoom } from "./useDraw.es.js";
import { useGuests } from "./useGuests.es.js";
import __unplugin_components_0$1 from "./AccountBadge.es.js";
import { __unplugin_components_2 } from "./plus.es.js";
import { __unplugin_components_1 } from "./angle-up.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import "./AccountAvatar.es.js";
const _hoisted_1$1 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M11.5 6A3.514 3.514 0 0 0 8 9.5c0 1.922 1.578 3.5 3.5 3.5S15 11.422 15 9.5S13.422 6 11.5 6zm9 0A3.514 3.514 0 0 0 17 9.5c0 1.922 1.578 3.5 3.5 3.5S24 11.422 24 9.5S22.422 6 20.5 6zm-9 2c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5zm9 0c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5zM7 12c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.036 5.036 0 0 0 2 23h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.036 5.036 0 0 0-2.219-4.156C10.523 18.117 11 17.114 11 16c0-2.2-1.8-4-4-4zm5 11c-.625.836-1 1.887-1 3h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.024 5.024 0 0 0-1-3c-.34-.453-.75-.84-1.219-1.156C19.523 21.117 20 20.114 20 19c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.042 5.042 0 0 0 12 23zm8 0h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.036 5.036 0 0 0-2.219-4.156C28.523 18.117 29 17.114 29 16c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.036 5.036 0 0 0 20 23zM7 14c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2zm18 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2zm-9 3c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_0 = { name: "la-users", render: render$1 };
const _hoisted_1 = { class: "ml-1 flex items-center gap-2" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-1" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "Join", -1);
const _hoisted_4 = {
  key: 0,
  class: "absolute left-0 bottom-0 w-60 bg-light-200 bg-opacity-70 z-100 overflow-y-scroll px-2 max-h-full flex flex-col gap-2 p-2 rounded-tr-xl",
  ref: "panel"
};
const _hoisted_5 = { class: "flex items-center" };
const _hoisted_6 = { class: "text-xl mr-2 capitalize" };
const _hoisted_7 = { class: "px-2 py-1 rounded-xl font-bold" };
const _hoisted_8 = { class: "flex flex-wrap" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_users = __unplugin_components_0;
  const _component_la_angle_up = __unplugin_components_1;
  const _component_la_plus = __unplugin_components_2;
  const _component_account_badge = __unplugin_components_0$1;
  return openBlock(), createElementBlock(Fragment, null, [
    !$setup.open && !$setup.isLarge ? (openBlock(), createElementBlock("button", {
      key: 0,
      class: "absolute flex items-center m-4 p-2 left-0 bottom-0 z-200",
      onMousedown: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.open = true, ["stop", "prevent"]))
    }, [
      createVNode(_component_la_users, { class: "text-3xl" }),
      createBaseVNode("div", _hoisted_1, [
        createTextVNode("Users list"),
        createVNode(_component_la_angle_up)
      ]),
      _hoisted_2
    ], 32)) : createCommentVNode("v-if", true),
    $setup.user.is && !$setup.isInRoom ? (openBlock(), createElementBlock("button", {
      key: 1,
      class: "button absolute flex items-center m-4 p-2 right-0 top-0 z-200",
      onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.joinRoom(), ["stop", "prevent"]))
    }, [
      createVNode(_component_la_plus),
      _hoisted_3
    ])) : createCommentVNode("v-if", true),
    createVNode(Transition, { name: "fade" }, {
      default: withCtx(() => [
        $setup.isLarge || $setup.open && !$setup.isLarge ? (openBlock(), createElementBlock("div", _hoisted_4, [
          (openBlock(), createElementBlock(Fragment, null, renderList(["online", "offline"], (state) => {
            return createBaseVNode("div", {
              class: "flex flex-col gap-2",
              key: state
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, toDisplayString(state), 1),
                createBaseVNode("div", _hoisted_7, toDisplayString($setup.guests.count[state]), 1)
              ]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(TransitionGroup, { name: "fade" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.guests[state], (guest, p) => {
                      return openBlock(), createBlock(_component_account_badge, {
                        class: "shadow-md m-1",
                        size: 30,
                        key: p,
                        pub: guest.pub,
                        onClick: ($event) => _ctx.$emit("user", guest.pub),
                        style: normalizeStyle({ opacity: guest.online ? 1 : 0.5, order: guest.order })
                      }, null, 8, ["pub", "onClick", "style"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ])
            ]);
          }), 64))
        ], 512)) : createCommentVNode("v-if", true)
      ]),
      _: 1
    })
  ], 64);
}
const _sfc_main = {
  __name: "UserList",
  emits: ["user"],
  setup(__props, { expose, emit }) {
    expose();
    const isLarge = useMediaQuery("(min-width: 640px)");
    const { user } = useUser();
    const guests = useGuests();
    const open = ref();
    const panel = ref();
    onClickOutside(panel, () => {
      if (open.value) {
        open.value = false;
      }
    });
    const isInRoom = computed(() => guests.guests[user.pub]);
    const __returned__ = { isLarge, emit, user, guests, open, panel, isInRoom, get onClickOutside() {
      return onClickOutside;
    }, get useMediaQuery() {
      return useMediaQuery;
    }, get useGuests() {
      return useGuests;
    }, get joinRoom() {
      return joinRoom;
    }, get useUser() {
      return useUser;
    }, reactive, ref, computed, toRef };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/user/UserList.vue";
const UserList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserList.vue"]]);
export {
  UserList as default
};
