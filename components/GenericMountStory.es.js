import { defineAsyncComponent$1 as defineAsyncComponent, __vitePreload, useDark, useToggle, markRaw, reactive, defineComponent, ref, watchEffect, openBlock, createBlock, mergeProps, resolveDynamicComponent, createCommentVNode } from "./vendor.es.js";
const Comp33 = { "title": "Components", "icon": "la:book-open", "group": "docs", "docsOnly": true, "variants": [] };
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./AccountAvatar.story.es.js"), true ? ["AccountAvatar.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./AccountBadge.story.es.js"), true ? ["AccountBadge.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./AccountHome.story.es.js"), true ? ["AccountHome.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./AccountSelect.story.es.js"), true ? ["AccountSelect.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./AccountStars.story.es.js"), true ? ["AccountStars.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./ChatMessage.story.es.js"), true ? ["ChatMessage.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp6 = defineAsyncComponent(() => __vitePreload(() => import("./ChatRoom.story.es.js"), true ? ["ChatRoom.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp7 = defineAsyncComponent(() => __vitePreload(() => import("./GiftCard.story.es.js"), true ? ["GiftCard.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp8 = defineAsyncComponent(() => __vitePreload(() => import("./GiftForm.story.es.js"), true ? ["GiftForm.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp9 = defineAsyncComponent(() => __vitePreload(() => import("./GiftList.story.es.js"), true ? ["GiftList.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp10 = defineAsyncComponent(() => __vitePreload(() => import("./Composables.story.es.js"), true ? ["Composables.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp11 = defineAsyncComponent(() => __vitePreload(() => import("./ProjectCard.story.es.js"), true ? ["ProjectCard.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp12 = defineAsyncComponent(() => __vitePreload(() => import("./ProjectList.story.es.js"), true ? ["ProjectList.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp13 = defineAsyncComponent(() => __vitePreload(() => import("./QrLoad.story.es.js"), true ? ["QrLoad.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp14 = defineAsyncComponent(() => __vitePreload(() => import("./QrShow.story.es.js"), true ? ["QrShow.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp15 = defineAsyncComponent(() => __vitePreload(() => import("./RoomButton.story.es.js"), true ? ["RoomButton.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp16 = defineAsyncComponent(() => __vitePreload(() => import("./RoomList.story.es.js"), true ? ["RoomList.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp17 = defineAsyncComponent(() => __vitePreload(() => import("./SpacePlane.story.es.js"), true ? ["SpacePlane.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp18 = defineAsyncComponent(() => __vitePreload(() => import("./UserAuth.story.es.js"), true ? ["UserAuth.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp19 = defineAsyncComponent(() => __vitePreload(() => import("./UserAvatar.story.es.js"), true ? ["UserAvatar.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp20 = defineAsyncComponent(() => __vitePreload(() => import("./UserCreate.story.es.js"), true ? ["UserCreate.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp21 = defineAsyncComponent(() => __vitePreload(() => import("./UserCredentials.story.es.js"), true ? ["UserCredentials.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp22 = defineAsyncComponent(() => __vitePreload(() => import("./UserGraph.story.es.js"), true ? ["UserGraph.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp23 = defineAsyncComponent(() => __vitePreload(() => import("./UserHome.story.es.js"), true ? ["UserHome.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp24 = defineAsyncComponent(() => __vitePreload(() => import("./UserIcon.story.es.js"), true ? ["UserIcon.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp25 = defineAsyncComponent(() => __vitePreload(() => import("./UserList.story.es.js"), true ? ["UserList.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp26 = defineAsyncComponent(() => __vitePreload(() => import("./UserLogin.story.es.js"), true ? ["UserLogin.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp27 = defineAsyncComponent(() => __vitePreload(() => import("./UserPanel.story.es.js"), true ? ["UserPanel.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp28 = defineAsyncComponent(() => __vitePreload(() => import("./UserPass.story.es.js"), true ? ["UserPass.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp29 = defineAsyncComponent(() => __vitePreload(() => import("./UserProfile.story.es.js"), true ? ["UserProfile.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp30 = defineAsyncComponent(() => __vitePreload(() => import("./UserRooms.story.es.js"), true ? ["UserRooms.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp31 = defineAsyncComponent(() => __vitePreload(() => import("./UtilGraph.story.es.js"), true ? ["UtilGraph.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
const Comp32 = defineAsyncComponent(() => __vitePreload(() => import("./UtilRelay.story.es.js"), true ? ["UtilRelay.story.es.js","vendor.es.js","_plugin-vue_export-helper.es.js"] : void 0));
let files = [
  { "id": "src-account-accountavatar-story-vue", "path": ["Account", "Avatar"], "filePath": "src/account/AccountAvatar.story.vue", "story": { "id": "src-account-accountavatar-story-vue", "title": "Avatar", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:user", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-account-accountavatar-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 0, component: Comp0 },
  { "id": "src-account-accountbadge-story-vue", "path": ["Account", "Badge"], "filePath": "src/account/AccountBadge.story.vue", "story": { "id": "src-account-accountbadge-story-vue", "title": "Badge", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:id-badge", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-account-accountbadge-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 1, component: Comp1 },
  { "id": "src-account-accounthome-story-vue", "path": ["Account", "Home"], "filePath": "src/account/AccountHome.story.vue", "story": { "id": "src-account-accounthome-story-vue", "title": "Home", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:home", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-account-accounthome-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 2, component: Comp2 },
  { "id": "src-account-accountselect-story-vue", "path": ["Account", "Select"], "filePath": "src/account/AccountSelect.story.vue", "story": { "id": "src-account-accountselect-story-vue", "title": "Select", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:list", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-account-accountselect-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 3, component: Comp3 },
  { "id": "src-account-accountstars-story-vue", "path": ["Account", "Stars"], "filePath": "src/account/AccountStars.story.vue", "story": { "id": "src-account-accountstars-story-vue", "title": "Stars", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:star", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-account-accountstars-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 4, component: Comp4 },
  { "id": "src-chat-chatmessage-story-vue", "path": ["Chat", "Message"], "filePath": "src/chat/ChatMessage.story.vue", "story": { "id": "src-chat-chatmessage-story-vue", "title": "Message", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:envelope", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-chat-chatmessage-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 5, component: Comp5 },
  { "id": "src-chat-chatroom-story-vue", "path": ["Chat", "Room"], "filePath": "src/chat/ChatRoom.story.vue", "story": { "id": "src-chat-chatroom-story-vue", "title": "Room", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:home", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-chat-chatroom-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 6, component: Comp6 },
  { "id": "src-gift-giftcard-story-vue", "path": ["Gift", "Card"], "filePath": "src/gift/GiftCard.story.vue", "story": { "id": "src-gift-giftcard-story-vue", "title": "Card", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-gift-giftcard-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 7, component: Comp7 },
  { "id": "src-gift-giftform-story-vue", "path": ["Gift", "Form"], "filePath": "src/gift/GiftForm.story.vue", "story": { "id": "src-gift-giftform-story-vue", "title": "Form", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-gift-giftform-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 8, component: Comp8 },
  { "id": "src-gift-giftlist-story-vue", "path": ["Gift", "List"], "filePath": "src/gift/GiftList.story.vue", "story": { "id": "src-gift-giftlist-story-vue", "title": "List", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-gift-giftlist-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 9, component: Comp9 },
  { "id": "src-docs-composables-story-vue", "path": ["Composables"], "filePath": "src/docs/Composables.story.vue", "story": { "id": "src-docs-composables-story-vue", "title": "Composables", "group": "docs", "layout": { "type": "single", "iframe": true }, "icon": "la:book-open", "iconColor": null, "docsOnly": true, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 10, component: Comp10 },
  { "id": "src-project-projectcard-story-vue", "path": ["Project", "Card"], "filePath": "src/project/ProjectCard.story.vue", "story": { "id": "src-project-projectcard-story-vue", "title": "Card", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:toolbox", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-project-projectcard-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 11, component: Comp11 },
  { "id": "src-project-projectlist-story-vue", "path": ["Project", "List"], "filePath": "src/project/ProjectList.story.vue", "story": { "id": "src-project-projectlist-story-vue", "title": "List", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:tools", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-project-projectlist-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 12, component: Comp12 },
  { "id": "src-qr-qrload-story-vue", "path": ["Qr", "Load"], "filePath": "src/qr/QrLoad.story.vue", "story": { "id": "src-qr-qrload-story-vue", "title": "Load", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:qrcode", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-qr-qrload-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 13, component: Comp13 },
  { "id": "src-qr-qrshow-story-vue", "path": ["Qr", "Show"], "filePath": "src/qr/QrShow.story.vue", "story": { "id": "src-qr-qrshow-story-vue", "title": "Show", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:qrcode", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-qr-qrshow-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 14, component: Comp14 },
  { "id": "src-room-roombutton-story-vue", "path": ["Room", "Icon"], "filePath": "src/room/RoomButton.story.vue", "story": { "id": "src-room-roombutton-story-vue", "title": "Icon", "group": null, "layout": { "type": "single" }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-room-roombutton-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 15, component: Comp15 },
  { "id": "src-room-roomlist-story-vue", "path": ["Room", "List"], "filePath": "src/room/RoomList.story.vue", "story": { "id": "src-room-roomlist-story-vue", "title": "List", "group": null, "layout": { "type": "single", "iframe": false }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-room-roomlist-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 16, component: Comp16 },
  { "id": "src-space-spaceplane-story-vue", "path": ["Space", "Plane"], "filePath": "src/space/SpacePlane.story.vue", "story": { "id": "src-space-spaceplane-story-vue", "title": "Plane", "group": null, "layout": { "type": "single", "iframe": false }, "icon": "la:draw-polygon", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-space-spaceplane-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 17, component: Comp17 },
  { "id": "src-user-userauth-story-vue", "path": ["User", "Auth"], "filePath": "src/user/UserAuth.story.vue", "story": { "id": "src-user-userauth-story-vue", "title": "Auth", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:key", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-userauth-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 18, component: Comp18 },
  { "id": "src-user-useravatar-story-vue", "path": ["User", "Avatar"], "filePath": "src/user/UserAvatar.story.vue", "story": { "id": "src-user-useravatar-story-vue", "title": "Avatar", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:user", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-useravatar-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 19, component: Comp19 },
  { "id": "src-user-usercreate-story-vue", "path": ["User", "Create"], "filePath": "src/user/UserCreate.story.vue", "story": { "id": "src-user-usercreate-story-vue", "title": "Create", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:magnet", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-usercreate-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 20, component: Comp20 },
  { "id": "src-user-usercredentials-story-vue", "path": ["User", "Credentials"], "filePath": "src/user/UserCredentials.story.vue", "story": { "id": "src-user-usercredentials-story-vue", "title": "Credentials", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:suitcase", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-usercredentials-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 21, component: Comp21 },
  { "id": "src-user-usergraph-story-vue", "path": ["User", "Graph"], "filePath": "src/user/UserGraph.story.vue", "story": { "id": "src-user-usergraph-story-vue", "title": "Graph", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:sitemap", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-usergraph-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 22, component: Comp22 },
  { "id": "src-user-userhome-story-vue", "path": ["User", "Home"], "filePath": "src/user/UserHome.story.vue", "story": { "id": "src-user-userhome-story-vue", "title": "Home", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:home", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-userhome-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 23, component: Comp23 },
  { "id": "src-user-usericon-story-vue", "path": ["User", "Icon"], "filePath": "src/user/UserIcon.story.vue", "story": { "id": "src-user-usericon-story-vue", "title": "Icon", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:user", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-usericon-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 24, component: Comp24 },
  { "id": "src-user-userlist-story-vue", "path": ["User", "List"], "filePath": "src/user/UserList.story.vue", "story": { "id": "src-user-userlist-story-vue", "title": "List", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:home", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-userlist-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 25, component: Comp25 },
  { "id": "src-user-userlogin-story-vue", "path": ["User", "Login"], "filePath": "src/user/UserLogin.story.vue", "story": { "id": "src-user-userlogin-story-vue", "title": "Login", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:theater-masks", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-userlogin-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 26, component: Comp26 },
  { "id": "src-user-userpanel-story-vue", "path": ["User", "Panel"], "filePath": "src/user/UserPanel.story.vue", "story": { "id": "src-user-userpanel-story-vue", "title": "Panel", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:address-book", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-userpanel-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 27, component: Comp27 },
  { "id": "src-user-userpass-story-vue", "path": ["User", "Pass"], "filePath": "src/user/UserPass.story.vue", "story": { "id": "src-user-userpass-story-vue", "title": "Pass", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:passport", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-userpass-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 28, component: Comp28 },
  { "id": "src-user-userprofile-story-vue", "path": ["User", "Profile"], "filePath": "src/user/UserProfile.story.vue", "story": { "id": "src-user-userprofile-story-vue", "title": "Profile", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:passport", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-userprofile-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 29, component: Comp29 },
  { "id": "src-user-userrooms-story-vue", "path": ["User", "Rooms"], "filePath": "src/user/UserRooms.story.vue", "story": { "id": "src-user-userrooms-story-vue", "title": "Rooms", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "la:route", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-user-userrooms-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 30, component: Comp30 },
  { "id": "src-util-utilgraph-story-vue", "path": ["Util", "Graph"], "filePath": "src/util/UtilGraph.story.vue", "story": { "id": "src-util-utilgraph-story-vue", "title": "Graph", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "mdi:graph-outline", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-util-utilgraph-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 31, component: Comp31 },
  { "id": "src-util-utilrelay-story-vue", "path": ["Util", "Relay"], "filePath": "src/util/UtilRelay.story.vue", "story": { "id": "src-util-utilrelay-story-vue", "title": "Relay", "group": null, "layout": { "type": "single", "iframe": true }, "icon": "carbon:bare-metal-server-01", "iconColor": null, "docsOnly": false, "variants": [{ "id": "src-util-utilrelay-story-vue-0", "title": "Round", "icon": null, "iconColor": null }] }, "supportPluginId": "vue3", "index": 32, component: Comp32 },
  { "id": "src-docs-components-story-js", "path": ["Components"], "filePath": "src/docs/Components.story.js", "story": { "id": "src-docs-components-story-js", "title": "Components", "group": "docs", "layout": { "type": "single", "iframe": true }, "icon": "la:book-open", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "index": 33, component: Comp33 }
];
let tree = [{ "group": true, "id": "docs", "title": "Docs", "children": [{ "title": "Components", "index": 33 }, { "title": "Composables", "index": 10 }] }, { "group": true, "id": "top", "title": "Auth", "children": [{ "title": "Account", "children": [{ "title": "Avatar", "index": 0 }, { "title": "Badge", "index": 1 }, { "title": "Home", "index": 2 }, { "title": "Select", "index": 3 }, { "title": "Stars", "index": 4 }] }, { "title": "Room", "children": [{ "title": "Icon", "index": 15 }, { "title": "List", "index": 16 }] }, { "title": "User", "children": [{ "title": "Auth", "index": 18 }, { "title": "Avatar", "index": 19 }, { "title": "Create", "index": 20 }, { "title": "Credentials", "index": 21 }, { "title": "Graph", "index": 22 }, { "title": "Home", "index": 23 }, { "title": "Icon", "index": 24 }, { "title": "List", "index": 25 }, { "title": "Login", "index": 26 }, { "title": "Panel", "index": 27 }, { "title": "Pass", "index": 28 }, { "title": "Profile", "index": 29 }, { "title": "Rooms", "index": 30 }] }] }, { "group": true, "title": "Features", "children": [{ "title": "Chat", "children": [{ "title": "Message", "index": 5 }, { "title": "Room", "index": 6 }] }, { "title": "Gift", "children": [{ "title": "Card", "index": 7 }, { "title": "Form", "index": 8 }, { "title": "List", "index": 9 }] }, { "title": "Project", "children": [{ "title": "Card", "index": 11 }, { "title": "List", "index": 12 }] }, { "title": "Space", "children": [{ "title": "Plane", "index": 17 }] }] }, { "group": true, "title": "Tools", "children": [{ "title": "Qr", "children": [{ "title": "Load", "index": 13 }, { "title": "Show", "index": 14 }] }, { "title": "Util", "children": [{ "title": "Graph", "index": 31 }, { "title": "Relay", "index": 32 }] }] }];
const Logo_square = "/components/gun-vue-logo.svg";
const Logo_dark = "/components/components.svg";
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/node_modules/.pnpm/histoire@0.10.2_vite@3.0.7/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" } }], "outDir": "/Users/davay/Documents/\u0424\u0420\u0423\u041A\u0422/DeFUCC/gun-vue/app/public/components", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "title": "Docs", "id": "docs" }, { "id": "top", "title": "Auth" }, { "title": "Features" }, { "title": "Tools" }] }, "theme": { "title": "Gun-Vue components", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "logo": { "square": "/gun-vue-logo.svg", "light": "/components.svg", "dark": "/components.svg" }, "logoHref": "/", "favicon": "/gun-vue-logo.svg" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent" }, { "label": "White", "color": "#fff" }, { "label": "Light gray", "color": "#aaa" }, { "label": "Dark gray", "color": "#333" }, { "label": "Black", "color": "#000" }], "sandboxDarkClass": "dark", "routerMode": "hash", "vite": { "server": { "fs": { "allow": ".." } }, "build": { "sourcemap": false }, "base": "/components/" }, "setupFile": "histoire.setup.js" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({ valueDark: "htw-dark" });
const toggleDark = useToggle(isDark);
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.es.js").then((n) => n.client), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor.es.js").then((n) => n.client$1), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main,
  clientSupportPlugins,
  customLogos,
  files,
  histoireConfig,
  isDark,
  mapFile,
  toggleDark,
  tree
};
