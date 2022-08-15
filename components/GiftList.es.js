import "./useDraw.es.js";
import { createElementBlock$1 as createElementBlock, Fragment$1 as Fragment, renderList$1 as renderList, createBaseVNode$1 as createBaseVNode, openBlock$1 as openBlock, createBlock$1 as createBlock } from "./vendor.es.js";
import __unplugin_components_5 from "./GiftCard.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import { useGifts } from "./useGifts.es.js";
import "./AccountBadge.es.js";
import "./AccountAvatar.es.js";
import "./times.es.js";
import "./check.es.js";
import "./useGift.es.js";
const _hoisted_1 = { class: "flex flex-col gap-2" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-lg font-bold w-full" }, "ALL", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gift_card = __unplugin_components_5;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.gifts, (gift, hash) => {
      return openBlock(), createBlock(_component_gift_card, {
        class: "cursor-pointer",
        onClick: ($event) => _ctx.$emit("open", hash),
        key: hash,
        hash
      }, null, 8, ["onClick", "hash"]);
    }), 128))
  ]);
}
const _sfc_main = {
  __name: "GiftList",
  emits: ["open"],
  setup(__props, { expose, emit }) {
    expose();
    const { gifts } = useGifts();
    const __returned__ = { gifts, emit, useGifts };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/gift/GiftList.vue";
const GiftList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/gift/GiftList.vue"]]);
export {
  GiftList as default
};
