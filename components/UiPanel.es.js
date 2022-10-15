import { __unplugin_components_2 as __unplugin_components_2$1 } from "./times.es.js";
import { openBlock$1 as openBlock, createBlock$1 as createBlock, withCtx$1 as withCtx, withDirectives$1 as withDirectives, createBaseVNode$1 as createBaseVNode, createVNode$1 as createVNode, TransitionGroup, createElementBlock$1 as createElementBlock, createCommentVNode$1 as createCommentVNode, normalizeStyle$1 as normalizeStyle, renderSlot$1 as renderSlot, vShow$1 as vShow, Transition$1 as Transition } from "./vendor.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = { class: "fixed w-full h-full top-0 left-0 z-500 flex flex-col items-end" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_times = __unplugin_components_2$1;
  return openBlock(), createBlock(Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", _hoisted_1, [
        createVNode(TransitionGroup, { name: "slide" }, {
          default: withCtx(() => [
            $props.open && $props.back ? (openBlock(), createElementBlock("div", {
              class: "bg-dark-200 bg-opacity-30 w-full h-full absolute z-2 cursor-pointer backdrop-filter backdrop-blur-sm",
              key: "bg",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
            })) : createCommentVNode("v-if", true),
            $props.open ? (openBlock(), createElementBlock("div", {
              class: "layer mr-2",
              style: normalizeStyle({ top: $props.offset || "8vh" }),
              key: "layer"
            }, [
              $props.closeButton ? (openBlock(), createElementBlock("button", {
                key: 0,
                class: "button fixed right-4 top-4",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
              }, [
                createVNode(_component_la_times)
              ])) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 4)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        })
      ], 512), [
        [vShow, $props.open]
      ])
    ]),
    _: 3
  });
}
const UiPanel_vue_vue_type_style_index_0_scoped_41570951_lang = "";
const _sfc_main = {
  __name: "UiPanel",
  props: {
    open: { default: false },
    offset: { default: "" },
    closeButton: { type: Boolean, default: true },
    back: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const __returned__ = { props, emit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/ui/UiPanel.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__scopeId", "data-v-41570951"], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/ui/UiPanel.vue"]]);
export {
  __unplugin_components_2
};
