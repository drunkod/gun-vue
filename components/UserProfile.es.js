import { updateProfile, useUser, useAccount, addProfileField } from "./useDraw.es.js";
import { openBlock$1 as openBlock, createElementBlock$1 as createElementBlock, createBaseVNode$1 as createBaseVNode, toDisplayString$1 as toDisplayString, createVNode$1 as createVNode, withDirectives$1 as withDirectives, vModelText$1 as vModelText, withKeys$1 as withKeys, ref$1 as ref, urlRegex, Fragment$1 as Fragment, renderList$1 as renderList, createBlock$1 as createBlock } from "./vendor.es.js";
import { __unplugin_components_2 as __unplugin_components_2$1 } from "./plus.es.js";
import { __unplugin_components_2 } from "./times.es.js";
import { __unplugin_components_1 } from "./check.es.js";
import { __unplugin_components_0 as __unplugin_components_0$1 } from "./pen.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1$1 = { class: "p-2 flex items-center break-all" };
const _hoisted_2$1 = { class: "mr-2 font-bold" };
const _hoisted_3$1 = { class: "flex items-center" };
const _hoisted_4$1 = {
  key: 0,
  class: "text-md flex items-center"
};
const _hoisted_5 = {
  key: 0,
  class: "p-0"
};
const _hoisted_6 = ["href"];
const _hoisted_7 = {
  key: 1,
  class: "p-1 flex items-center flex-1"
};
const _hoisted_8 = { class: "-ml-16" };
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_la_pen = __unplugin_components_0$1;
  const _component_la_check = __unplugin_components_1;
  const _component_la_times = __unplugin_components_2;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, toDisplayString($props.field), 1),
    createBaseVNode("div", _hoisted_3$1, [
      !$setup.edit ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
        !$setup.isLink($props.content) ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString($props.content), 1)) : (openBlock(), createElementBlock("a", {
          key: 1,
          class: "font-bold underline",
          href: $props.content,
          target: "_blank"
        }, toDisplayString($props.content), 9, _hoisted_6)),
        createBaseVNode("button", {
          class: "p-1",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.edit = true)
        }, [
          createVNode(_component_la_pen)
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
        withDirectives(createBaseVNode("input", {
          class: "p-2 rounded-xl pr-16",
          type: "text",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.text = $event),
          onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => $setup.update(), ["enter"]))
        }, null, 544), [
          [vModelText, $setup.text]
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("button", {
            class: "p-1",
            type: "submit",
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.update())
          }, [
            createVNode(_component_la_check)
          ]),
          createBaseVNode("button", {
            class: "p-1",
            onClick: _cache[4] || (_cache[4] = ($event) => {
              $setup.text = "";
              $setup.edit = false;
            })
          }, [
            createVNode(_component_la_times)
          ])
        ])
      ]))
    ])
  ]);
}
const _sfc_main$1 = {
  __name: "UserProfileField",
  props: {
    field: { type: String, default: "" },
    content: { type: String, default: "" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const edit = ref(false);
    const text = ref(props.content);
    function update() {
      updateProfile(props.field, text.value);
      edit.value = false;
      text.value = "";
    }
    function isLink(text2) {
      return urlRegex({ exact: true }).test(text2);
    }
    const __returned__ = { props, edit, text, update, isLink, get updateProfile() {
      return updateProfile;
    }, ref, get urlRegex() {
      return urlRegex;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/user/UserProfileField.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserProfileField.vue"]]);
const _hoisted_1 = { class: "flex flex-col" };
const _hoisted_2 = { class: "flex flex-col p-2" };
const _hoisted_3 = { class: "flex items-center flex-wrap" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "p-1 text-sm" }, "Add", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_user_profile_field = __unplugin_components_0;
  const _component_la_plus = __unplugin_components_2$1;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.account.profile, (d, k) => {
        return openBlock(), createBlock(_component_user_profile_field, {
          key: d,
          field: k,
          content: d
        }, null, 8, ["field", "content"]);
      }), 128)),
      createBaseVNode("div", _hoisted_3, [
        withDirectives(createBaseVNode("input", {
          class: "p-2 rounded-lg shadow-md",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.newField = $event),
          onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => $setup.addProfileField($setup.newField), ["enter"])),
          placeholder: "New profile field"
        }, null, 544), [
          [vModelText, $setup.newField]
        ]),
        createBaseVNode("button", {
          class: "m-2 button items-center",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.addProfileField($setup.newField))
        }, [
          createVNode(_component_la_plus),
          _hoisted_4
        ])
      ])
    ])
  ]);
}
const _sfc_main = {
  __name: "UserProfile",
  setup(__props, { expose }) {
    expose();
    const { user } = useUser();
    const { account } = useAccount(user.pub);
    const newField = ref("");
    const __returned__ = { user, account, newField, get useAccount() {
      return useAccount;
    }, get useUser() {
      return useUser;
    }, get addProfileField() {
      return addProfileField;
    }, ref };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/user/UserProfile.vue";
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserProfile.vue"]]);
export {
  __unplugin_components_4 as default
};
