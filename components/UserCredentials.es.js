import { useUser, usePass } from "./useDraw.es.js";
import { openBlock$1 as openBlock, createElementBlock$1 as createElementBlock, createBaseVNode$1 as createBaseVNode, renderSlot$1 as renderSlot, createVNode$1 as createVNode, createBlock$1 as createBlock, toDisplayString$1 as toDisplayString, normalizeStyle$1 as normalizeStyle, normalizeClass$1 as normalizeClass, createCommentVNode$1 as createCommentVNode, withCtx$1 as withCtx, Transition$1 as Transition, TransitionGroup, ref$1 as ref, useClipboard, useShare, computed$1 as computed } from "./vendor.es.js";
import { downloadFile } from "./useFile.es.js";
import { __unplugin_components_1 } from "./check.es.js";
import __unplugin_components_9 from "./QrShow.es.js";
import { __unplugin_components_6, __unplugin_components_8 } from "./qrcode.es.js";
import { __unplugin_components_5 } from "./link.es.js";
import { __unplugin_components_3 as __unplugin_components_3$1, __unplugin_components_4 as __unplugin_components_4$1 } from "./lock.es.js";
import __unplugin_components_0$1 from "./UserPass.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import "./eye.es.js";
const _hoisted_1$3 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M19.719 5.281L18.28 6.72L24.563 13H11c-3.855 0-7 3.145-7 7s3.145 7 7 7v-2c-2.773 0-5-2.227-5-5s2.227-5 5-5h13.563l-6.282 6.281l1.438 1.438l8-8l.687-.719l-.687-.719z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_3 = { name: "la-share", render: render$3 };
const _hoisted_1$2 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M4 4v20h7v-2H6V6h12v1h2V4zm8 4v20h16V8zm2 2h12v16H14z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_4 = { name: "la-copy", render: render$2 };
const _hoisted_1$1 = {
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M10 5v1.9l-5.992 3.903V27h23.984V10.803L22 6.898V5H10zm2 2h8v7.682l-4 2.591l-4-2.591V7zm1 2v2h6V9h-6zm-3 .285v4.102l-3.156-2.045L10 9.285zm12 0l3.156 2.057L22 13.387V9.285zM13 12v2h6v-2h-6zm-6.992 1.184L16 19.656l9.992-6.472V25H6.008V13.184z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_7 = { name: "la-envelope-open-text", render: render$1 };
const _hoisted_1 = {
  key: 0,
  class: "flex flex-col items-stretch pb-4 border-1 border-dark-100 border-opacity-10 max-w-120 mx-auto"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-4 mx-6" }, "Please make sure to safely store your cryptographic keypair to be able to use it again later", -1);
const _hoisted_3 = {
  key: 0,
  class: "flex p-4 items-center bg-dark-100 bg-opacity-20 mt-2 shadow-inset"
};
const _hoisted_4 = { class: "text-sm" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "text-m" }, "Key Pair", -1);
const _hoisted_6 = { class: "flex flex-wrap" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "px-1" }, "Share", -1);
const _hoisted_8 = {
  key: 0,
  class: "px-2"
};
const _hoisted_9 = {
  key: 1,
  class: "px-2"
};
const _hoisted_10 = ["href"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "px-2" }, "Link", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "px-2" }, "QR", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "px-2" }, "Text", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "px-2" }, "JSON", -1);
const _hoisted_15 = {
  key: 1,
  class: "flex w-full justify-center mt-4"
};
const _hoisted_16 = ["value"];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "ml-2" }, "I've stored my key securely", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_user_pass = __unplugin_components_0$1;
  const _component_la_lock = __unplugin_components_3$1;
  const _component_la_unlock = __unplugin_components_4$1;
  const _component_la_share = __unplugin_components_3;
  const _component_la_copy = __unplugin_components_4;
  const _component_la_link = __unplugin_components_5;
  const _component_la_qrcode = __unplugin_components_6;
  const _component_la_envelope_open_text = __unplugin_components_7;
  const _component_la_file_code = __unplugin_components_8;
  const _component_qr_show = __unplugin_components_9;
  const _component_la_check = __unplugin_components_1;
  return $setup.user.is && !((_a = $setup.user.safe) == null ? void 0 : _a.saved) ? (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_2
    ]),
    createVNode(_component_user_pass),
    $setup.encPair ? (openBlock(), createElementBlock("div", _hoisted_3, [
      createBaseVNode("div", {
        class: "flex flex-col w-34 items-center",
        style: normalizeStyle({ color: $setup.safePair ? "green" : "red" })
      }, [
        createBaseVNode("button", {
          class: "m-2 button text-2xl",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.safePair = !$setup.safePair)
        }, [
          $setup.safePair ? (openBlock(), createBlock(_component_la_lock, { key: 0 })) : (openBlock(), createBlock(_component_la_unlock, { key: 1 }))
        ]),
        createBaseVNode("div", _hoisted_4, toDisplayString($setup.safePair ? "Encrypted" : "Plain Text"), 1),
        _hoisted_5
      ], 4),
      createBaseVNode("div", _hoisted_6, [
        $setup.canShare ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: normalizeClass(["m-2 button items-center", { active: $setup.current == "pass" }]),
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.share({ title: "Your key pair", text: $setup.encPair }))
        }, [
          createVNode(_component_la_share),
          _hoisted_7
        ], 2)) : createCommentVNode("v-if", true),
        $setup.canCopy ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: "m-2 button items-center",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.copy($setup.encPair))
        }, [
          createVNode(_component_la_copy),
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              $setup.copied ? (openBlock(), createElementBlock("div", _hoisted_8, "Copied!")) : (openBlock(), createElementBlock("div", _hoisted_9, "Copy"))
            ]),
            _: 1
          })
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("a", {
          class: "m-2 button items-center",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.show("links")),
          target: "_blank",
          href: $setup.safePair ? $setup.pass.links.pass : $setup.pass.links.pair
        }, [
          createVNode(_component_la_link),
          _hoisted_11
        ], 8, _hoisted_10),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[4] || (_cache[4] = ($event) => $setup.show("qr"))
        }, [
          createVNode(_component_la_qrcode),
          _hoisted_12
        ]),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[5] || (_cache[5] = ($event) => $setup.show("key"))
        }, [
          createVNode(_component_la_envelope_open_text),
          _hoisted_13
        ]),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[6] || (_cache[6] = ($event) => {
            $setup.downloadFile($setup.encPair, "text/json", ($setup.user.name || "account") + ".json", false);
            $setup.current = null;
          })
        }, [
          createVNode(_component_la_file_code),
          _hoisted_14
        ])
      ])
    ])) : createCommentVNode("v-if", true),
    $setup.current ? (openBlock(), createElementBlock("div", _hoisted_15, [
      createVNode(TransitionGroup, { name: "fade" }, {
        default: withCtx(() => [
          $setup.current == "key" ? (openBlock(), createElementBlock("textarea", {
            class: "p-4 text-sm flex-1 rounded-xl",
            rows: "9",
            value: $setup.encPair,
            key: "text"
          }, null, 8, _hoisted_16)) : createCommentVNode("v-if", true),
          $setup.current == "qr" ? (openBlock(), createBlock(_component_qr_show, {
            class: "max-w-600px",
            key: "qr",
            data: $setup.safePair ? $setup.pass.links.pass : $setup.pass.links.pair
          }, null, 8, ["data"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      })
    ])) : createCommentVNode("v-if", true),
    createBaseVNode("button", {
      class: "button mx-8 justify-center",
      onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("close"))
    }, [
      createVNode(_component_la_check),
      _hoisted_17
    ])
  ])) : createCommentVNode("v-if", true);
}
const _sfc_main = {
  __name: "UserCredentials",
  emits: ["close"],
  setup(__props, { expose, emit }) {
    expose();
    const current = ref("pass");
    const { user } = useUser();
    function show(option) {
      if (current.value != option) {
        current.value = option;
      } else {
        current.value = null;
      }
    }
    const { pass } = usePass();
    const { text, copy, copied, isSupported: canCopy } = useClipboard();
    const { share, isSupported: canShare } = useShare();
    const safePair = ref(true);
    const encPair = computed(() => {
      var _a;
      return safePair.value ? (_a = pass == null ? void 0 : pass.safe) == null ? void 0 : _a.enc : JSON.stringify(user.pair());
    });
    const __returned__ = { emit, current, user, show, pass, text, copy, copied, canCopy, share, canShare, safePair, encPair, useUser, downloadFile, usePass, ref, computed, useClipboard, useShare };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/user/UserCredentials.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserCredentials.vue"]]);
export {
  __unplugin_components_0 as default
};
