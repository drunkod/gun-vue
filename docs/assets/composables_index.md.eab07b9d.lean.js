import{_ as s,c as n,o,a as e,p as r,f as v,d as a,e as p}from"./app.1ef1804f.js";var l="/docs/media/svg/composables.svg";const T='{"title":"Composables","description":"","frontmatter":{},"headers":[{"level":2,"title":"Composables","slug":"composables"},{"level":3,"title":"How to install?","slug":"how-to-install"},{"level":3,"title":"How to use?","slug":"how-to-use"},{"level":2,"title":"Modules","slug":"modules"},{"level":2,"title":"Chat","slug":"chat"},{"level":2,"title":"PrivateChat","slug":"privatechat"},{"level":2,"title":"useCrypto","slug":"usecrypto"},{"level":3,"title":"encFor(data, sender, receiver) \u21D2","slug":"encfor-data-sender-receiver-\u21D2-string"},{"level":3,"title":"decFrom(data, sender, receiver) \u21D2","slug":"decfrom-data-sender-receiver-\u21D2-string"},{"level":3,"title":"getShortHash(text, seed) \u21D2","slug":"getshorthash-text-seed-\u21D2-string"},{"level":3,"title":"Entity :","slug":"entity-object"},{"level":2,"title":"Dictionary","slug":"dictionary"},{"level":3,"title":"useWords() \u21D2","slug":"usewords-\u21D2-usewords"},{"level":3,"title":"useDefs() \u21D2","slug":"usedefs-\u21D2-usedefs"},{"level":2,"title":"useFile","slug":"usefile"},{"level":3,"title":"downloadFile(text, fileType, fileName)","slug":"downloadfile-text-filetype-filename"},{"level":3,"title":"uploadText(event, callback)","slug":"uploadtext-event-callback"},{"level":3,"title":"usePictureUpload(Options) \u21D2","slug":"usepictureupload-options-\u21D2-pictureuploaddata"},{"level":3,"title":"PictureUploadOptions :","slug":"pictureuploadoptions-object"},{"level":3,"title":"PictureUploadData :","slug":"pictureuploaddata-object"},{"level":2,"title":"useMd","slug":"usemd"},{"level":3,"title":"createMd(md) \u21D2","slug":"createmd-md-\u21D2"},{"level":3,"title":"parseMd(file) \u21D2","slug":"parsemd-file-\u21D2-md"},{"level":3,"title":"Md :","slug":"md-object"},{"level":2,"title":"useZip","slug":"usezip"},{"level":3,"title":"useZip() \u21D2","slug":"usezip-\u21D2-usezip"},{"level":3,"title":"useZip","slug":"usezip-1"},{"level":2,"title":"useGun","slug":"usegun"},{"level":3,"title":"gun","slug":"gun"},{"level":3,"title":"gun2","slug":"gun2"},{"level":3,"title":"useGun(options) \u21D2","slug":"usegun-options-\u21D2-gun"},{"level":3,"title":"useGun2(options) \u21D2","slug":"usegun2-options-\u21D2-gun"},{"level":3,"title":"SEA","slug":"sea"},{"level":3,"title":"soul()","slug":"soul"},{"level":3,"title":"genUUID()","slug":"genuuid"},{"level":2,"title":"useRelay","slug":"userelay"},{"level":3,"title":"useRelay() \u21D2","slug":"userelay-\u21D2-userelay"},{"level":3,"title":"Relay :","slug":"relay-reactive"},{"level":2,"title":"useRelays","slug":"userelays"},{"level":3,"title":"loadRelays(loadRelaysOptions) \u21D2","slug":"loadrelays-loadrelaysoptions-\u21D2-relays"},{"level":3,"title":"useRelays() \u21D2","slug":"userelays-\u21D2-userelays"},{"level":3,"title":"useRelays :","slug":"userelays-object"},{"level":3,"title":"loadRelaysOptions :","slug":"loadrelaysoptions-object"},{"level":3,"title":"Relays :","slug":"relays-array-object"},{"level":2,"title":"useLog","slug":"uselog"},{"level":2,"title":"useWorker","slug":"useworker"},{"level":3,"title":"newWorker","slug":"newworker"},{"level":3,"title":"sortByDate(e)","slug":"sortbydate-e"},{"level":2,"title":"Post","slug":"post"},{"level":3,"title":"usePost(options) \u21D2","slug":"usepost-options-\u21D2-post"},{"level":3,"title":"addPost(tag, post)","slug":"addpost-tag-post"},{"level":3,"title":"downloadPost(post)","slug":"downloadpost-post"},{"level":3,"title":"parsePost(data) \u21D2","slug":"parsepost-data-\u21D2-object"},{"level":3,"title":"usePostTimestamp() \u21D2","slug":"useposttimestamp-\u21D2"},{"level":3,"title":"Post :","slug":"post-object"},{"level":2,"title":"Feed","slug":"feed"},{"level":3,"title":"usePosts(tag, options) \u21D2","slug":"useposts-tag-options-\u21D2-useposts"},{"level":3,"title":"downloadFeed(tag, posts)","slug":"downloadfeed-tag-posts"},{"level":3,"title":"uploadFeed(tag, files)","slug":"uploadfeed-tag-files"},{"level":3,"title":"usePosts","slug":"useposts"},{"level":2,"title":"Reaction","slug":"reaction"},{"level":2,"title":"Feeds","slug":"feeds"},{"level":3,"title":"useTagList() \u21D2","slug":"usetaglist-\u21D2-usetaglist"},{"level":3,"title":"useTagList","slug":"usetaglist"},{"level":2,"title":"Room","slug":"room"},{"level":3,"title":"useRoom() \u21D2","slug":"useroom-\u21D2-useroom"},{"level":3,"title":"updateRoomProfile(field, content)","slug":"updateroomprofile-field-content"},{"level":3,"title":"createRoom()","slug":"createroom"},{"level":3,"title":"enterRoom(pub)","slug":"enterroom-pub"},{"level":3,"title":"leaveRoom()","slug":"leaveroom"},{"level":2,"title":"useSpace","slug":"usespace"},{"level":3,"title":"useSpace(spaceName) \u21D2","slug":"usespace-spacename-\u21D2-usespace"},{"level":3,"title":"useSpace :","slug":"usespace-object"},{"level":2,"title":"useColor","slug":"usecolor"},{"level":3,"title":"useColor(palette) \u21D2","slug":"usecolor-palette-\u21D2-colorhash"},{"level":2,"title":"useMouse","slug":"usemouse"},{"level":3,"title":"useSvgMouse() \u21D2","slug":"usesvgmouse-\u21D2-usemouse"},{"level":3,"title":"useMouse :","slug":"usemouse-object"},{"level":3,"title":"Mouse :","slug":"mouse-reactive"},{"level":2,"title":"useAccount","slug":"useaccount"},{"level":3,"title":"useAccount(pub) \u21D2","slug":"useaccount-pub-\u21D2-account"},{"level":2,"title":"useMates","slug":"usemates"},{"level":3,"title":"useMates(pub) \u21D2","slug":"usemates-pub-\u21D2-usemates"},{"level":3,"title":"getFirstEmoji(text) \u21D2","slug":"getfirstemoji-text-\u21D2-string"},{"level":3,"title":"isEmoji(text) \u21D2","slug":"isemoji-text-\u21D2-boolean"},{"level":3,"title":"useMate(pub) \u21D2","slug":"usemate-pub-\u21D2-usemate"},{"level":3,"title":"useMates :","slug":"usemates-reactive"},{"level":3,"title":"useMate :","slug":"usemate-object"},{"level":2,"title":"usePass","slug":"usepass"},{"level":3,"title":"usePass() \u21D2","slug":"usepass-\u21D2-usepass"},{"level":3,"title":"Pass :","slug":"pass-reactive"},{"level":3,"title":"usePass :","slug":"usepass-object"},{"level":2,"title":"useUser","slug":"useuser"},{"level":3,"title":"useUser() \u21D2","slug":"useuser-\u21D2-useuser"},{"level":3,"title":"auth(pair)","slug":"auth-pair"},{"level":3,"title":"leave()","slug":"leave"},{"level":3,"title":"addProfileField(name)","slug":"addprofilefield-name"},{"level":3,"title":"updateProfile(field, data)","slug":"updateprofile-field-data"},{"level":3,"title":"isPair(pair) \u21D2","slug":"ispair-pair-\u21D2-boolean"},{"level":3,"title":"Account :","slug":"account-object"},{"level":3,"title":"User :","slug":"user-object"},{"level":3,"title":"useUser","slug":"useuser-1"}],"relativePath":"composables/index.md"}',c={},d=t=>(r("data-v-22230646"),t=t(),v(),t),i=e("",121),u=d(()=>a("table",{"localstorage:true":""},[a("thead",null,[a("tr",null,[a("th",null,"Param"),a("th",null,"Type"),a("th",null,"Description")])]),a("tbody",null,[a("tr",null,[a("td",null,"options"),a("td",null,[a("code",null,"Object")]),a("td",null,"options fot this gun instance, like")])])],-1)),h=e("",4),g=d(()=>a("table",{"localstorage:true":""},[a("thead",null,[a("tr",null,[a("th",null,"Param"),a("th",null,"Type"),a("th",null,"Description")])]),a("tbody",null,[a("tr",null,[a("td",null,"options"),a("td",null,[a("code",null,"object")]),a("td",null,"options fot this gun instance, like")])])],-1)),m=e("",83),k=d(()=>a("p",{"timestamp,":"","msTime,":"",refresh:""},[a("strong",null,"Returns"),p(": -")],-1)),b=d(()=>a("table",{"tag,":"",hash:""},[a("thead",null,[a("tr",null,[a("th",null,"Param"),a("th",null,"Description")])]),a("tbody",null,[a("tr",null,[a("td"),a("td")])])],-1)),f=e("",187),y=[i,u,h,g,m,k,b,f];function P(t,w,_,x,q,j){return o(),n("div",null,y)}var R=s(c,[["render",P],["__scopeId","data-v-22230646"]]);export{T as __pageData,R as default};
