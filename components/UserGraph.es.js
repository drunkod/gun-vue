import { createElementBlock$1 as createElementBlock, openBlock$1 as openBlock, createBaseVNode$1 as createBaseVNode, ref$1 as ref, reactive$1 as reactive, computed$1 as computed, forceGraph, onMounted$1 as onMounted, watchEffect$1 as watchEffect, useResizeObserver$1 as useResizeObserver, gunAvatar } from "./vendor.es.js";
import { useColor, useGun, currentRoom, user } from "./useDraw.es.js";
import { useMates } from "./useMates.es.js";
import { _export_sfc } from "./_plugin-vue_export-helper.es.js";
const _hoisted_1 = {
  class: "bg-light-700 overflow-none w-full max-w-90vw max-h-90vh h-full",
  ref: "graph"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { id: "graph" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3, 512);
}
const _sfc_main = {
  __name: "UserGraph",
  emits: ["user"],
  setup(__props, { expose, emit }) {
    expose();
    const graph = ref(null);
    const colorDeep = useColor("deep");
    const gun = useGun();
    const guests = reactive({});
    gun.user(currentRoom.pub).get("space").map().once(async (d, k) => {
      guests[k] = {
        pub: k,
        name: await gun.user(k).get("profile").get("name"),
        color: colorDeep.hex(k),
        links: useMates(k)
      };
    });
    const links = computed(() => {
      let arr = [];
      Object.values(guests).forEach((node) => {
        Object.entries(node.links).forEach((link) => {
          if (!guests[link[0]] || !link[1].text)
            return;
          arr.push({
            source: node.pub,
            target: link[0],
            emoji: link[1].emoji,
            back: link[1].back
          });
        });
      });
      return arr;
    });
    const Graph = forceGraph().width(600).nodeId("pub").nodeColor("color").nodeVal((node) => {
      if (node.pub == user.pub) {
        return 10;
      } else {
        return 1;
      }
    }).nodeRelSize(4).linkDirectionalArrowLength(4).linkDirectionalArrowRelPos(1).linkLabel("emoji").linkCurvature(0.2).linkColor((link) => {
      var _a;
      return colorDeep.hex(((_a = link.source) == null ? void 0 : _a.pub) || 0);
    }).linkWidth((link) => {
      if (link.back)
        return 3;
      return 1;
    }).onNodeDragEnd((node) => {
      node.fx = node.x;
      node.fy = node.y;
    }).onNodeClick((node) => {
      Graph.centerAt(node.x, node.y, 1e3);
      Graph.zoom(4, 2e3);
    }).onNodeClick((node, ev) => {
      emit("user", node.pub);
    });
    onMounted(() => {
      Graph(document.getElementById("graph"));
    });
    watchEffect(() => Graph.graphData({ nodes: Object.values(guests), links: links.value }));
    useResizeObserver(graph, (entries) => {
      const entry = entries[0];
      const { width, height } = entry.contentRect;
      Graph.width(width);
      Graph.height(height);
    });
    const __returned__ = { graph, emit, colorDeep, gun, guests, links, Graph, computed, reactive, watchEffect, onMounted, useColor, useMates, useGun, currentRoom, gunAvatar, user, ForceGraph: forceGraph, ref, useResizeObserver };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/user/UserGraph.vue";
const UserGraph = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/components/src/user/UserGraph.vue"]]);
export {
  UserGraph as default
};
