import { defineComponent, useCssVars, ref, toRefs, useRouter, openBlock, createElementBlock, createVNode, withCtx, unref, Icon, normalizeClass, createBaseVNode, createTextVNode, toDisplayString, Fragment, renderList, createBlock, createCommentVNode, markRaw, useFocus, watch, refDebounced, computed, withDirectives, vModelText, withKeys, withModifiers, __vitePreload, flexsearch_bundle } from "./vendor.es.js";
import { useStoryStore } from "./story.es.js";
import { BaseEmpty } from "./BaseEmpty.es.js";
import { onKeyboardShortcut } from "./assets/bundle-main.e493e543.js";
import { useScrollOnActive, BaseListItemLink, _export_sfc } from "./MobileOverlay.vue_vue_type_script_setup_true_lang.es.js";
import "./GenericMountStory.vue_vue_type_script_setup_true_lang.es.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "beebbd52": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d95fcb03"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"a":[0,1,36,37,38,39],"af":[0,1,38,39],"afa":[0,1,38,39],"afat":[0,1,38,39],"afata":[0,1,38,39],"afatar":[0,1,38,39],"p":[2,3,34,35,54,55,56,57,58,59],"pa":[2,3,54,55,56,57],"pat":[2,3],"patk":[2,3],"patke":[2,3],"o":[4,5,46,47],"om":[4,5,46,47],"ome":[4,5,46,47],"s":[6,7,8,9,28,29],"se":[6,7],"sel":[6,7],"sele":[6,7],"selek":[6,7],"selekt":[6,7],"st":[8,9],"sta":[8,9],"star":[8,9],"stars":[8,9],"m":[10,11],"me":[10,11],"mes":[10,11],"mesa":[10,11],"mesak":[10,11],"mesake":[10,11],"r":[12,13,60,61,64,65],"ro":[12,13,60,61],"rom":[12,13,60,61],"k":[14,15,16,17,22,23,40,41,42,43,44,45,62,63,66],"ko":[14,15,66],"kom":[14,15,66],"komp":[14,15,66],"kompo":[14,15,66],"kompos":[14,15],"komposa":[14,15],"komposap":[14,15],"komposapl":[14,15],"komposaple":[14,15],"komposaples":[14,15],"ka":[16,17,22,23],"kar":[16,17,22,23],"kart":[16,17,22,23],"f":[18,19],"fo":[18,19],"for":[18,19],"form":[18,19],"l":[20,21,24,25,26,27,32,33,50,51,52,53],"le":[20,21,24,25,32,33,50,51],"les":[20,21,24,25,32,33,50,51],"lest":[20,21,24,25,32,33,50,51],"lo":[26,27,52,53],"loa":[26,27],"loat":[26,27],"so":[28,29],"sof":[28,29],"e":[30,31,48,49],"ek":[30,31,48,49],"eko":[30,31,48,49],"ekom":[30,31,48,49],"pl":[34,35],"pla":[34,35],"plam":[34,35],"plame":[34,35],"ao":[36,37],"aot":[36,37],"kr":[40,41,42,43,44,45,62,63],"kre":[40,41,42,43],"krea":[40,41],"kreat":[40,41],"kreate":[40,41],"kret":[42,43],"krete":[42,43],"kretem":[42,43],"kretemt":[42,43],"kretemte":[42,43],"kretemtea":[42,43],"kretemteal":[42,43],"kretemteals":[42,43],"kra":[44,45,62,63],"kraf":[44,45,62,63],"lok":[52,53],"loke":[52,53],"lokem":[52,53],"pam":[54,55],"pame":[54,55],"pamel":[54,55],"pas":[56,57],"pr":[58,59],"pro":[58,59],"prof":[58,59],"profe":[58,59],"profel":[58,59],"profele":[58,59],"roms":[60,61],"re":[64,65],"rel":[64,65],"rela":[64,65],"kompom":[66],"kompome":[66],"kompomem":[66],"kompomemt":[66],"kompomemts":[66]},{"r":[1,3,5,7,9,11,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,63],"ro":[1,3,5,7,9,11,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,63,65],"rom":[1,3,5,7,9,11,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,63,65],"romt":[1,3,5,7,9,11,13,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65],"t":[15],"te":[15],"tef":[15],"tefa":[15],"tefao":[15],"tefaol":[15],"tefaolt":[15]},{},{},{},{},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-account-accountavatar-story-vue", "kind": "story" }, "1": { "id": "src-account-accountavatar-story-vue:src-account-accountavatar-story-vue-0", "kind": "variant" }, "2": { "id": "src-account-accountbadge-story-vue", "kind": "story" }, "3": { "id": "src-account-accountbadge-story-vue:src-account-accountbadge-story-vue-0", "kind": "variant" }, "4": { "id": "src-account-accounthome-story-vue", "kind": "story" }, "5": { "id": "src-account-accounthome-story-vue:src-account-accounthome-story-vue-0", "kind": "variant" }, "6": { "id": "src-account-accountselect-story-vue", "kind": "story" }, "7": { "id": "src-account-accountselect-story-vue:src-account-accountselect-story-vue-0", "kind": "variant" }, "8": { "id": "src-account-accountstars-story-vue", "kind": "story" }, "9": { "id": "src-account-accountstars-story-vue:src-account-accountstars-story-vue-0", "kind": "variant" }, "10": { "id": "src-chat-chatmessage-story-vue", "kind": "story" }, "11": { "id": "src-chat-chatmessage-story-vue:src-chat-chatmessage-story-vue-0", "kind": "variant" }, "12": { "id": "src-chat-chatroom-story-vue", "kind": "story" }, "13": { "id": "src-chat-chatroom-story-vue:src-chat-chatroom-story-vue-0", "kind": "variant" }, "14": { "id": "src-docs-composables-story-vue", "kind": "story" }, "15": { "id": "src-docs-composables-story-vue:_default", "kind": "variant" }, "16": { "id": "src-gift-giftcard-story-vue", "kind": "story" }, "17": { "id": "src-gift-giftcard-story-vue:src-gift-giftcard-story-vue-0", "kind": "variant" }, "18": { "id": "src-gift-giftform-story-vue", "kind": "story" }, "19": { "id": "src-gift-giftform-story-vue:src-gift-giftform-story-vue-0", "kind": "variant" }, "20": { "id": "src-gift-giftlist-story-vue", "kind": "story" }, "21": { "id": "src-gift-giftlist-story-vue:src-gift-giftlist-story-vue-0", "kind": "variant" }, "22": { "id": "src-project-projectcard-story-vue", "kind": "story" }, "23": { "id": "src-project-projectcard-story-vue:src-project-projectcard-story-vue-0", "kind": "variant" }, "24": { "id": "src-project-projectlist-story-vue", "kind": "story" }, "25": { "id": "src-project-projectlist-story-vue:src-project-projectlist-story-vue-0", "kind": "variant" }, "26": { "id": "src-qr-qrload-story-vue", "kind": "story" }, "27": { "id": "src-qr-qrload-story-vue:src-qr-qrload-story-vue-0", "kind": "variant" }, "28": { "id": "src-qr-qrshow-story-vue", "kind": "story" }, "29": { "id": "src-qr-qrshow-story-vue:src-qr-qrshow-story-vue-0", "kind": "variant" }, "30": { "id": "src-room-roombutton-story-vue", "kind": "story" }, "31": { "id": "src-room-roombutton-story-vue:src-room-roombutton-story-vue-0", "kind": "variant" }, "32": { "id": "src-room-roomlist-story-vue", "kind": "story" }, "33": { "id": "src-room-roomlist-story-vue:src-room-roomlist-story-vue-0", "kind": "variant" }, "34": { "id": "src-space-spaceplane-story-vue", "kind": "story" }, "35": { "id": "src-space-spaceplane-story-vue:src-space-spaceplane-story-vue-0", "kind": "variant" }, "36": { "id": "src-user-userauth-story-vue", "kind": "story" }, "37": { "id": "src-user-userauth-story-vue:src-user-userauth-story-vue-0", "kind": "variant" }, "38": { "id": "src-user-useravatar-story-vue", "kind": "story" }, "39": { "id": "src-user-useravatar-story-vue:src-user-useravatar-story-vue-0", "kind": "variant" }, "40": { "id": "src-user-usercreate-story-vue", "kind": "story" }, "41": { "id": "src-user-usercreate-story-vue:src-user-usercreate-story-vue-0", "kind": "variant" }, "42": { "id": "src-user-usercredentials-story-vue", "kind": "story" }, "43": { "id": "src-user-usercredentials-story-vue:src-user-usercredentials-story-vue-0", "kind": "variant" }, "44": { "id": "src-user-usergraph-story-vue", "kind": "story" }, "45": { "id": "src-user-usergraph-story-vue:src-user-usergraph-story-vue-0", "kind": "variant" }, "46": { "id": "src-user-userhome-story-vue", "kind": "story" }, "47": { "id": "src-user-userhome-story-vue:src-user-userhome-story-vue-0", "kind": "variant" }, "48": { "id": "src-user-usericon-story-vue", "kind": "story" }, "49": { "id": "src-user-usericon-story-vue:src-user-usericon-story-vue-0", "kind": "variant" }, "50": { "id": "src-user-userlist-story-vue", "kind": "story" }, "51": { "id": "src-user-userlist-story-vue:src-user-userlist-story-vue-0", "kind": "variant" }, "52": { "id": "src-user-userlogin-story-vue", "kind": "story" }, "53": { "id": "src-user-userlogin-story-vue:src-user-userlogin-story-vue-0", "kind": "variant" }, "54": { "id": "src-user-userpanel-story-vue", "kind": "story" }, "55": { "id": "src-user-userpanel-story-vue:src-user-userpanel-story-vue-0", "kind": "variant" }, "56": { "id": "src-user-userpass-story-vue", "kind": "story" }, "57": { "id": "src-user-userpass-story-vue:src-user-userpass-story-vue-0", "kind": "variant" }, "58": { "id": "src-user-userprofile-story-vue", "kind": "story" }, "59": { "id": "src-user-userprofile-story-vue:src-user-userprofile-story-vue-0", "kind": "variant" }, "60": { "id": "src-user-userrooms-story-vue", "kind": "story" }, "61": { "id": "src-user-userrooms-story-vue:src-user-userrooms-story-vue-0", "kind": "variant" }, "62": { "id": "src-util-utilgraph-story-vue", "kind": "story" }, "63": { "id": "src-util-utilgraph-story-vue:src-util-utilgraph-story-vue-0", "kind": "variant" }, "64": { "id": "src-util-utilrelay-story-vue", "kind": "story" }, "65": { "id": "src-util-utilrelay-story-vue:src-util-utilrelay-story-vue-0", "kind": "variant" }, "66": { "id": "src-docs-components-story-js", "kind": "story" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.es.js"), true ? ["search-docs-data.es.js","vendor.es.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundle.exports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
