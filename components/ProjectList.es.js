import { addProject, newProject } from "./useDraw.es.js";
import { createElementBlock$1 as createElementBlock, createBaseVNode$1 as createBaseVNode, withDirectives$1 as withDirectives, vModelText$1 as vModelText, createVNode$1 as createVNode, withCtx$1 as withCtx, TransitionGroup, toDisplayString$1 as toDisplayString, createCommentVNode$1 as createCommentVNode, openBlock$1 as openBlock, Fragment$1 as Fragment, renderList$1 as renderList, createBlock$1 as createBlock, normalizeStyle$1 as normalizeStyle } from "./vendor.es.js";
import { useProjects } from "./useProjects.es.js";
import __unplugin_components_0 from "./ProjectCard.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
import "./AccountBadge.es.js";
import "./AccountAvatar.es.js";
import "./youtube.es.js";
import "./trash.es.js";
const _hoisted_1 = { class: "flex flex-col" };
const _hoisted_2 = { class: "p-2 flex flex-col gap-2" };
const _hoisted_3 = { class: "flex flex-col gap-4 p-2" };
const _hoisted_4 = { class: "p-2 flex flex-col gap-2" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_project_card = __unplugin_components_0;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      withDirectives(createBaseVNode("input", {
        class: "p-2 rounded-xl shadow",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.newProject.title = $event),
        placeholder: "Start typing a project title"
      }, null, 512), [
        [vModelText, $setup.newProject.title]
      ])
    ]),
    createBaseVNode("div", _hoisted_3, [
      createVNode(TransitionGroup, { name: "list" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.candidates, (proj, path) => {
            return openBlock(), createBlock(_component_project_card, {
              onClick: ($event) => _ctx.$emit("open", proj.item.path),
              key: path,
              project: proj.item,
              path: proj.item.path,
              style: normalizeStyle({ opacity: 1 - proj.score })
            }, null, 8, ["onClick", "project", "path", "style"]);
          }), 128))
        ]),
        _: 1
      })
    ]),
    createBaseVNode("div", _hoisted_4, [
      $setup.newProject.title ? (openBlock(), createElementBlock("button", {
        class: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.addProject()),
        key: "button"
      }, "Add Project " + toDisplayString($setup.newProject.title), 1)) : createCommentVNode("v-if", true)
    ])
  ]);
}
const _sfc_main = {
  __name: "ProjectList",
  props: {
    pub: { type: String }
  },
  emits: ["open"],
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { search, projects, candidates } = useProjects(props.pub);
    const __returned__ = { props, search, projects, candidates, useProjects, addProject, newProject };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/project/ProjectList.vue";
const ProjectList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/project/ProjectList.vue"]]);
export {
  ProjectList as default
};
