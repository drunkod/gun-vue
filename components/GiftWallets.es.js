import { useUser, useGun, genUUID } from "./useDraw.es.js";
import { openBlock$1 as openBlock, createElementBlock$1 as createElementBlock, createBaseVNode$1 as createBaseVNode, toDisplayString$1 as toDisplayString, createBlock$1 as createBlock, normalizeClass$1 as normalizeClass, withModifiers$1 as withModifiers, createCommentVNode$1 as createCommentVNode, createVNode$1 as createVNode, renderSlot$1 as renderSlot, useClipboard, Fragment$1 as Fragment, renderList$1 as renderList, withCtx$1 as withCtx, normalizeStyle$1 as normalizeStyle, withDirectives$1 as withDirectives, vModelText$1 as vModelText, computed$1 as computed, reactive$1 as reactive, ref$1 as ref, Ce } from "./vendor.es.js";
import { __unplugin_components_3 } from "./UiLayer.es.js";
import { __unplugin_components_4, __unplugin_components_5 } from "./copy.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import { __unplugin_components_2 } from "./trash-alt.es.js";
const currencies = [
  "USD",
  "CAD",
  "EUR",
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ARS",
  "AUD",
  "AZN",
  "BAM",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BND",
  "BOB",
  "BRL",
  "BWP",
  "BYN",
  "BZD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EEK",
  "EGP",
  "ERN",
  "ETB",
  "GBP",
  "GEL",
  "GHS",
  "GNF",
  "GTQ",
  "HKD",
  "HNL",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KHR",
  "KMF",
  "KRW",
  "KWD",
  "KZT",
  "LBP",
  "LKR",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MOP",
  "MUR",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SDG",
  "SEK",
  "SGD",
  "SOS",
  "SYP",
  "THB",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "XAF",
  "XOF",
  "YER",
  "ZAR",
  "ZMK",
  "ZWL"
];
const _hoisted_1$1 = { class: "p-2 flex flex-wrap items-center gap-2 border-1 rounded-xl" };
const _hoisted_2$1 = { class: "text-xl font-bold flex-0" };
const _hoisted_3$1 = { class: "flex-auto flex gap-1" };
const _hoisted_4$1 = ["innerHTML"];
const _hoisted_5$1 = ["href"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_copy = __unplugin_components_4;
  const _component_la_link = __unplugin_components_5;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, toDisplayString($props.wallet.currency), 1),
    createBaseVNode("div", _hoisted_3$1, [
      createBaseVNode("div", {
        class: "text-xs overflow-ellipsis break-all",
        innerHTML: $props.wallet.account
      }, null, 8, _hoisted_4$1),
      $setup.isSupported ? (openBlock(), createBlock(_component_la_copy, {
        key: 0,
        class: normalizeClass(["w-10", { "animate-bounce": $setup.copied }]),
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.copy(), ["stop"]))
      }, null, 8, ["class"])) : createCommentVNode("v-if", true)
    ]),
    $props.wallet.url ? (openBlock(), createElementBlock("a", {
      key: 0,
      href: $props.wallet.url,
      target: "_blank"
    }, [
      createVNode(_component_la_link)
    ], 8, _hoisted_5$1)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const _sfc_main$1 = {
  __name: "GiftWallet",
  props: {
    wallet: {
      type: Object,
      default: { currency: "USD", account: "Bank of America 1234567890", url: "https://bankofamerica.com" }
    }
  },
  setup(__props, { expose }) {
    var _a;
    expose();
    const props = __props;
    const { text, copy, copied, isSupported } = useClipboard({ source: (_a = props.wallet) == null ? void 0 : _a.account });
    const __returned__ = { props, text, copy, copied, isSupported, get useClipboard() {
      return useClipboard;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/gift/GiftWallet.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftWallet.vue"]]);
const _hoisted_1 = { class: "flex flex-col gap-2" };
const _hoisted_2 = { class: "flex flex-col gap-2" };
const _hoisted_3 = { class: "p-2" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-xl" }, "Add a new wallet", -1);
const _hoisted_5 = {
  class: "grid grid-cols-2 gap-2",
  style: { "grid-template-columns": "1fr 6fr" }
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2" }, "Currency", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2" }, "Account", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2" }, "URL", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "p-2" }, "PREVIEW", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_trash_alt = __unplugin_components_2;
  const _component_gift_wallet = __unplugin_components_1;
  const _component_ui_layer = __unplugin_components_3;
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.wallets, (wallet, key) => {
          return openBlock(), createBlock(_component_gift_wallet, {
            class: "cursor-pointer",
            key: wallet,
            wallet,
            style: normalizeStyle({ backgroundColor: wallet == $props.activeWallet ? "#3333" : "" }),
            onClick: ($event) => wallet != $props.activeWallet ? _ctx.$emit("wallet", wallet) : _ctx.$emit("clear")
          }, {
            default: withCtx(() => [
              $setup.user.pub == $props.pub ? (openBlock(), createBlock(_component_la_trash_alt, {
                key: 0,
                class: "opacity-40 hover_opacity-90",
                onClick: ($event) => $setup.removeWallet(key)
              }, null, 8, ["onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 2
          }, 1032, ["wallet", "style", "onClick"]);
        }), 128))
      ]),
      $setup.user.pub == $props.pub ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.open = true)
      }, "Add a wallet")) : createCommentVNode("v-if", true)
    ]),
    createVNode(_component_ui_layer, {
      open: $setup.open,
      onClose: _cache[5] || (_cache[5] = ($event) => $setup.open = false)
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3, [
          _hoisted_4,
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            createVNode($setup["vSelect"], {
              class: "rounded-xl",
              modelValue: $setup.newWallet.currency,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.newWallet.currency = $event),
              options: $setup.currencies,
              appendToBody: true,
              placeholder: "Your account currency",
              taggable: true,
              pushTags: true
            }, null, 8, ["modelValue", "options"]),
            _hoisted_7,
            withDirectives(createBaseVNode("textarea", {
              class: "shadow-lg rounded-xl p-2",
              type: "text",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.newWallet.account = $event),
              placeholder: "Your account details"
            }, null, 512), [
              [vModelText, $setup.newWallet.account]
            ]),
            _hoisted_8,
            withDirectives(createBaseVNode("input", {
              class: "shadow-lg rounded-xl p-2",
              type: "text",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.newWallet.url = $event),
              placeholder: "Link to the payment gateway"
            }, null, 512), [
              [vModelText, $setup.newWallet.url]
            ]),
            _hoisted_9,
            createVNode(_component_gift_wallet, { wallet: $setup.newWallet }, null, 8, ["wallet"]),
            createBaseVNode("button", {
              class: "button col-span-2",
              onClick: _cache[4] || (_cache[4] = ($event) => $setup.addWallet())
            }, "Add the wallet")
          ])
        ])
      ]),
      _: 1
    }, 8, ["open"])
  ], 64);
}
const _sfc_main = {
  __name: "GiftWallets",
  props: {
    pub: {
      type: String,
      default: ""
    },
    activeWallet: {
      type: Object
    }
  },
  emits: ["wallet", "clear"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const { user } = useUser();
    const gun = useGun();
    const my = computed(() => user.pub == props.pub);
    const wallets = reactive({});
    gun.user(props.pub).get("wallets").map().on((d, k) => {
      if (!d) {
        delete wallets[k];
        return;
      }
      let obj = { ...d };
      delete obj._;
      wallets[k] = obj;
    });
    const open = ref();
    const newWallet = reactive({
      currency: "",
      account: "",
      url: ""
    });
    function addWallet() {
      const uuid = genUUID();
      gun.user().get("wallets").get(uuid).put(newWallet);
      open.value = false;
    }
    function removeWallet(key) {
      console.log(key);
      gun.user().get("wallets").get(key).put(null);
    }
    const __returned__ = { emit, props, user, gun, my, wallets, open, newWallet, addWallet, removeWallet, get genUUID() {
      return genUUID;
    }, get useGun() {
      return useGun;
    }, get useUser() {
      return useUser;
    }, computed, reactive, ref, get vSelect() {
      return Ce;
    }, get currencies() {
      return currencies;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/gift/GiftWallets.vue";
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftWallets.vue"]]);
export {
  __unplugin_components_7,
  currencies
};
