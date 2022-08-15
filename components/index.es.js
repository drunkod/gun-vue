import { useGun, hashText } from "./useDraw.es.js";
import { addPersonal, addProfileField, auth, brush, createRoom, currentRoom as currentRoom2, decFrom, defaultGift, defaultPeer, dictLang, dictRecord, drauu, drauuOptions, draw, encFor, enterRoom, genUUID, generateCerts, getShortHash, giftPath, gun as gun2, gun2 as gun22, hasPass, hashObj as hashObj2, hashText as hashText2, isHash, isMine, isPair, issueCert, joinRoom, leave, leaveRoom, letterFilter, listPersonal, loadCanvas, loadRelays, newProject, parseHashLink, parseLink, pass, peer, projectsPath, recreateRoom, relay, removeProject, renderStress, rootRoom as rootRoom2, safeHash, safeJSONParse as safeJSONParse2, selectedUser, soul, submitRoom, unsafeHash, updateProfile, updateProject, updateProjectField, updateRoomProfile, updateState, useAccount, useColor, useDefs, useDictAuthors, useDictLangs, useDictRecordsBy, useDictRecordsFor, useDraw, useGun as useGun2, useGun2 as useGun22, usePass, usePassLink, useProject, useRelay, useRelays, useRoom, useRoomLogo, useRooms, useUser, useWord, useWords, user as user2 } from "./useDraw.es.js";
import { useChat } from "./useChat.es.js";
import { usePrivateChat, usePrivateChatCount, usePrivateChatList } from "./usePrivate.es.js";
import { downloadFeed, langParts, languages, uploadFeed, usePosts } from "./usePosts.es.js";
import { base64Extension, base64FileType, base64MimeType, detectMimeType, downloadFile, uploadText, usePictureUpload } from "./useFile.es.js";
import { addPost, downloadPost, loadFromHash, parsePost, usePost, usePostTimestamp, useZip } from "./useZip.es.js";
import { createMd, parseMd, useMd } from "./useMd.es.js";
import { ref$1 as ref, computed$1 as computed, reactive$1 as reactive, slugify, Fuse } from "./vendor.es.js";
import { SEA, gunAvatar, mountClass, mountElement, ms, slugify as slugify2 } from "./vendor.es.js";
import { countRating, reactToPost, useReaction, useReactions, useUserPosts } from "./useReactions.es.js";
import { useGuests } from "./useGuests.es.js";
import { useSpace, useSvgMouse } from "./useSpace.es.js";
import { useBackground } from "./useBackground.es.js";
import { getFirstEmoji, isEmoji, useMate, useMates } from "./useMates.es.js";
import { useGifts, useMyGifts, useProjectGifts } from "./useGifts.es.js";
import { giftState, useGift, useNewGift } from "./useGift.es.js";
import { countProjects, useProjects } from "./useProjects.es.js";
function useTagList() {
  const gun3 = useGun();
  const search = ref();
  const slug = computed(() => slugify(search.value));
  const tags = reactive({
    list: {},
    all: computed(() => {
      const arr = [];
      for (let t in tags.list) {
        arr.push({
          hash: t,
          tag: tags.list[t]
        });
      }
      return arr.sort((a, b) => a && b && a.tag.toLowerCase() < b.tag.toLowerCase() ? -1 : 1);
    }),
    count: computed(() => tags.all.length),
    fuse: computed(() => {
      return new Fuse(tags.all, {
        includeScore: true,
        keys: ["tag"]
      });
    }),
    results: computed(() => {
      if (!search.value)
        return [];
      let res = tags.fuse.search(slug.value);
      return res;
    }),
    minScore: computed(() => {
      let min = 100;
      tags.results.forEach((res) => {
        if (res.score < min) {
          min = res.score;
        }
      });
      return min;
    })
  });
  gun3.get("#tags").map().on((d, k) => {
    if (!d)
      return;
    try {
      data = JSON.parse(d);
    } catch (e) {
      tags.list[k] = d;
    }
  });
  async function addTag(tag = slug.value) {
    if (!tag)
      return;
    let safe = slugify(tag);
    const hash = await hashText(safe);
    gun3.get(`#tags`).get(`${hash}`).put(safe);
  }
  return { search, slug, tags, addTag };
}
function listPersonalTag(tag, pub = currentRoom.pub) {
  const gun3 = useGun();
  const records = reactive({});
  gun3.user(pub).get(`${tag}`).map().on(function(data2, key) {
    let k = key.substring(0, 87);
    records[k] = records[k] || {};
    records[k][key.substring(88)] = data2;
  });
  return records;
}
async function addHashedPersonal(tag, obj, pub = currentRoom.pub, cert) {
  var _a;
  if (!cert)
    cert = await gun.get(`~${pub}`).get("features").get(tag).then();
  if (!cert && pub == rootRoom.pub) {
    cert = (_a = rootRoom.features) == null ? void 0 : _a[`#${tag}`];
  }
  if (!cert && pub != user.pub) {
    console.log("No certificate found");
    return;
  }
  const { hashed, hash } = await hashObj(obj);
  gun.get(`~${pub}`).get(`#${tag}`).get(`${hash}@${user.pub}`).put(hashed, null, { opt: { cert } });
}
function getHashedPersonal(tag, hash, pub = currentRoom.pub) {
  const record = reactive({});
  gun.get(`~${pub}`).get(`#${tag}`).map().once(function(data2, key) {
    if (key.includes(hash)) {
      record.hash = hash;
      record.tag = tag;
      record.data = safeJSONParse(data2);
      record.authors = record.authors || {};
      record.authors[key.slice(-87)] = true;
    }
  });
  return { record };
}
function sortByDate(e) {
  const arr = Object.entries(e.data);
  let sorted = arr.sort((a, b) => {
    if (!a || !b)
      return 0;
    let timeA = Date.parse(a[0]);
    let timeB = Date.parse(b[0]);
    return timeB - timeA;
  });
  postMessage({ sorted, count: arr.length });
}
const newWorker = function(funcObj) {
  var blobURL = URL.createObjectURL(new Blob(["onmessage=", funcObj.toString()], {
    type: "application/javascript"
  })), worker = new Worker(blobURL);
  URL.revokeObjectURL(blobURL);
  return worker;
};
export {
  SEA,
  addHashedPersonal,
  addPersonal,
  addPost,
  addProfileField,
  auth,
  base64Extension,
  base64FileType,
  base64MimeType,
  brush,
  countProjects,
  countRating,
  createMd,
  createRoom,
  currentRoom2 as currentRoom,
  decFrom,
  defaultGift,
  defaultPeer,
  detectMimeType,
  dictLang,
  dictRecord,
  downloadFeed,
  downloadFile,
  downloadPost,
  drauu,
  drauuOptions,
  draw,
  encFor,
  enterRoom,
  genUUID,
  generateCerts,
  getFirstEmoji,
  getHashedPersonal,
  getShortHash,
  giftPath,
  giftState,
  gun2 as gun,
  gun22 as gun2,
  gunAvatar,
  hasPass,
  hashObj2 as hashObj,
  hashText2 as hashText,
  isEmoji,
  isHash,
  isMine,
  isPair,
  issueCert,
  joinRoom,
  langParts,
  languages,
  leave,
  leaveRoom,
  letterFilter,
  listPersonal,
  listPersonalTag,
  loadCanvas,
  loadFromHash,
  loadRelays,
  mountClass,
  mountElement,
  ms,
  newProject,
  newWorker,
  parseHashLink,
  parseLink,
  parseMd,
  parsePost,
  pass,
  peer,
  projectsPath,
  reactToPost,
  recreateRoom,
  relay,
  removeProject,
  renderStress,
  rootRoom2 as rootRoom,
  safeHash,
  safeJSONParse2 as safeJSONParse,
  selectedUser,
  slugify2 as slugify,
  sortByDate,
  soul,
  submitRoom,
  unsafeHash,
  updateProfile,
  updateProject,
  updateProjectField,
  updateRoomProfile,
  updateState,
  uploadFeed,
  uploadText,
  useAccount,
  useBackground,
  useChat,
  useColor,
  useDefs,
  useDictAuthors,
  useDictLangs,
  useDictRecordsBy,
  useDictRecordsFor,
  useDraw,
  useGift,
  useGifts,
  useGuests,
  useGun2 as useGun,
  useGun22 as useGun2,
  useMate,
  useMates,
  useMd,
  useMyGifts,
  useNewGift,
  usePass,
  usePassLink,
  usePictureUpload,
  usePost,
  usePostTimestamp,
  usePosts,
  usePrivateChat,
  usePrivateChatCount,
  usePrivateChatList,
  useProject,
  useProjectGifts,
  useProjects,
  useReaction,
  useReactions,
  useRelay,
  useRelays,
  useRoom,
  useRoomLogo,
  useRooms,
  useSpace,
  useSvgMouse,
  useTagList,
  useUser,
  useUserPosts,
  useWord,
  useWords,
  useZip,
  user2 as user
};
