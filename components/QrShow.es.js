import { createElementBlock$1 as createElementBlock, openBlock$1 as openBlock, withAsyncContext, computed$1 as computed, __vitePreload } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "min-w-16 flex flex-col items-center",
    innerHTML: $setup.src
  }, null, 8, _hoisted_1);
}
const _sfc_main = {
  __name: "QrShow",
  props: {
    data: String,
    size: { type: Number, default: 400 },
    margin: { type: Number, default: 4 }
  },
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const props = __props;
    const qrcode = ([__temp, __restore] = withAsyncContext(() => __vitePreload(() => import("./vendor.es.js").then((n) => n.index), true ? [] : void 0)), __temp = await __temp, __restore(), __temp);
    const src = computed(() => {
      if (!props.data)
        return;
      return qrcode(props.data, {
        size: props.size,
        margin: props.margin
      });
    });
    const __returned__ = { props, qrcode, src, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/qr/QrShow.vue";
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/qr/QrShow.vue"]]);
export {
  __unplugin_components_9 as default
};
