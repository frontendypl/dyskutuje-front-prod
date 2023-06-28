(function(){"use strict";var t={7216:function(t,e,s){var o=s(6369),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("HeaderComponent"),e("router-view",{staticClass:"main-view"}),e("FooterComponent")],1)},i=[],r=s(3822),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"HeaderComponent component"},[e("div",{staticClass:"container container--flex"},[e("router-link",{staticClass:"logo",attrs:{to:{name:"home"}}},[e("img",{staticClass:"logo__img",attrs:{alt:"test",src:s(7670)}})]),e("div",{staticClass:"menu",staticStyle:{display:"none"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"}})])])],1)])},a=[],l={name:"HeaderComponent"},m=l,p=s(1001),d=(0,p.Z)(m,c,a,!1,null,"64a5216e",null),u=d.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"FooterComponent"},[t._m(0),e("router-link",{staticClass:"logo",attrs:{to:{name:"home"}}},[e("img",{staticClass:"logo__img",attrs:{alt:"test",src:s(7670)}})])],1)},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"info"},[e("div",{staticClass:"info__h3"},[e("h3",{staticClass:"info__h3__text"},[t._v(" Ta strona: ")])]),e("div",{staticClass:"info__p"},[e("p",{staticClass:"info__p__text"},[t._v(" Nie używa cookie ")])]),e("div",{staticClass:"info__p"},[e("p",{staticClass:"info__p__text"},[t._v(" Nie śledzi ")])]),e("div",{staticClass:"info__p"},[e("p",{staticClass:"info__p__text"},[t._v(" i nie przechowuje twoich danych ")])])])}],C={name:"FooterComponent"},h=C,f=(0,p.Z)(h,_,v,!1,null,"766742ff",null),g=f.exports,w={name:"App",components:{HeaderComponent:u,FooterComponent:g},data(){return{test:1}},computed:{...(0,r.rn)({activeTopic:t=>t.topicModule.activeTopic,topics:t=>t.topicModule.topics,printScreens:t=>t.topicModule.printScreens})},methods:{...(0,r.nv)({setTopics:"topicModule/setTopics",setAllComments:"topicModule/setAllComments",setPrintScreens:"topicModule/setPrintScreens",loadTopicsFromStorage:"topicModule/loadTopicsFromStorage",loadPrintScreensFromStorage:"topicModule/loadPrintScreensFromStorage"})},watch:{},created(){},mounted(){this.loadPrintScreensFromStorage(),this.loadTopicsFromStorage(),this.setTopics(),this.setAllComments();setInterval((()=>{"home"===this.$route.name&&this.setTopics()}),3e3),setInterval((()=>{"home"===this.$route.name&&this.setAllComments()}),4e3),setInterval((()=>{this.topics.length!==this.printScreens.length&&this.setPrintScreens()}),5e3)}},T=w,S=(0,p.Z)(T,n,i,!1,null,null,null),y=S.exports,x=s(5431);(0,x.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var k=s(2631),P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"HomeView"},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"components"},[e("TopicInputComponent",{staticClass:"components__input",attrs:{newTopicErrors:t.newTopicErrors,postNewTopic:t.postNewTopic}}),e("TopicListComponent",{attrs:{topics:t.topicsWithPrintScreens},on:{topicSelected:t.setActiveTopic}})],1)])])},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"description__h1"},[e("h1",{staticClass:"description__h1__content"},[t._v(" Komentuj co chcesz... ")])]),e("div",{staticClass:"description__h2"},[e("h2",{staticClass:"description__h2__content"},[t._v(" ...artykuły, produkty, filmy ... ")])]),e("div",{staticClass:"description__h3"},[e("h3",{staticClass:"description__h3__content"},[t._v(" ... wystarczy wkleić link. ")])])])}],M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"TopicInputComponent component"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.handleForm.apply(null,arguments)}}},[e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"input__field",attrs:{type:"text",placeholder:t.inputPlaceholder},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),e("button",{staticClass:"input__button",attrs:{type:"submit"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",height:"1em",viewBox:"0 0 640 512"}},[e("path",{attrs:{d:"M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"}})])])])]),e("div",{staticClass:"errors"},t._l(t.newTopicErrors,(function(s,o,n){return e("div",{key:o,staticClass:"errors__error"},[e("div",{staticClass:"errors__error__text"},[t._v(" "+t._s(s.message)+" ")])])})),0)])},A=[],N=(s(7658),{name:"TopicInputComponent",components:{HeaderComponent:u},props:{postNewTopic:{type:Function},inputPlaceholder:{type:String,default:"Tutaj wklej lub wpisz adres strony"}},data(){return{url:"",newTopicErrors:{}}},computed:{},methods:{handleForm(){this.postNewTopic(this.url).then((t=>{this.url="",this.newTopicErrors={},this.$router.push({name:"TopicView",params:{id:t._id}})}),(t=>{this.newTopicErrors={...t}}))}}}),F=N,z=(0,p.Z)(F,M,A,!1,null,"40adcdb7",null),Z=z.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"TopicListComponent component"},t._l(t.topics,(function(s,o){return e("router-link",{key:s._id,staticClass:"topic-link",attrs:{to:{name:"TopicView",params:{id:s._id}}}},[e("div",{staticClass:"topic",on:{click:function(e){return t.$emit("topicSelected",s)}}},[e("div",{staticClass:"topic__image"},[s?.printScreen?.src?e("img",{staticClass:"topic__image__img",attrs:{src:`data:image/jpeg;base64,${s.printScreen.src}`}}):e("div",{staticClass:"topic__image__loader"},[e("SpinnerBorderComponent",{attrs:{color:"#3290FA"}})],1)]),e("div",{staticClass:"topic__details"},[e("div",{staticClass:"topic__details__title"},[e("div",{staticClass:"topic__details__title__text"},[t._v(" "+t._s(s.printScreen.title&&s.printScreen.title.slice(0,100))+" ")])]),e("div",{staticClass:"topic__details__url"},[e("div",{staticClass:"topic__details__url__text"},[t._v(" "+t._s(s.url.slice(0,50))+" "+t._s(s.url.length>50?"...":"")+" ")])]),e("div",{staticClass:"topic__details__comments"},[e("div",{staticClass:"topic__details__comments__text"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"}})]),e("span",[t._v(t._s(s.comments.length))])])])])])])})),1)},I=[],$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"SpinnerBorderComponent",style:{"border-color":t.color}})},E=[],O={name:"SpinnerBorderComponent",props:{color:{type:String,default:"black"}}},V=O,D=(0,p.Z)(V,$,E,!1,null,null,null),B=D.exports,U={name:"TopicList",components:{SpinnerBorderComponent:B},props:{topics:{type:Array,required:!0}},methods:{test(){console.log("test")}}},H=U,L=(0,p.Z)(H,j,I,!1,null,"7e6d80aa",null),W=L.exports,G={name:"HomeView",components:{TopicInputComponent:Z,TopicListComponent:W},data(){return{}},computed:{...(0,r.rn)({newTopicErrors:t=>t.topicModule.newTopicErrors,topics:t=>t.topicModule.topics}),...(0,r.Se)({apiUrl:"apiUrl",topicsWithPrintScreens:"topicModule/topicsWithPrintScreens"})},methods:{...(0,r.nv)({postNewTopic:"topicModule/postNewTopic",resetActiveTopic:"topicModule/resetActiveTopic",setActiveTopic:"topicModule/setActiveTopic",setComments:"topicModule/setComments",setTopics:"topicModule/setTopics",setPrintScreens:"topicModule/setPrintScreens"})},mounted(){this.resetActiveTopic(),this.setComments([])}},q=G,J=(0,p.Z)(q,P,b,!1,null,"72de2099",null),K=J.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"TopicView"},[e("div",{staticClass:"container"},[e("div",{staticClass:"meta"},[e("div",{staticClass:"meta__title"},[e("div",{staticClass:"meta__title__text"},[t._v(" "+t._s(t.activeTopicPrintScreen?.title)+" ")])]),e("div",{staticClass:"meta__url"},[e("div",{staticClass:"meta__url__text"},[e("a",{attrs:{href:t.activeTopic?.url,target:"_blank"}},[t._v(" "+t._s(t.activeTopic?.url)+" ")])])])]),t.activeTopicPrintScreen?.src?e("div",{staticClass:"TopicView__image"},[e("img",{staticClass:"TopicView__image__img",attrs:{src:`data:image/jpeg;base64,${t.activeTopicPrintScreen?.src}`}})]):e("ImageLoaderComponent"),e("div",{staticClass:"TopicView__comment-form"},[t._m(0),e("CommentFormComponent",{attrs:{postNewComment:t.postNewComment}})],1),t.commentsWithSubComments.length?e("div",{staticClass:"TopicView__comment-list"},t._l(t.commentsWithSubComments,(function(s,o){return e("div",{staticClass:"TopicView__comment-list__comment"},[s.parent?t._e():e("CommentComponent",{key:s._id,ref:`comment--${s._id}`,refInFor:!0,attrs:{comment:s,"data-key":s._id},scopedSlots:t._u([{key:"commentForm",fn:function(){return[e("CommentFormComponent",{attrs:{postNewComment:t.postNewComment,parent:s._id,textAreaPlaceholder:"Wpisz treść odpowiedzi"},on:{commentFormSent:function(e){return t.commentFormSent(s._id)}}})]},proxy:!0}],null,!0)}),e("div",{staticClass:"TopicView__comment-list__comment__subcomments"},t._l(s.subComments,(function(t,s){return e("CommentComponent",{key:t._id,ref:`comment--${t._id}`,refInFor:!0,attrs:{comment:t,"data-key":t._id}})})),1)],1)})),0):e("div",{staticClass:"no-comment"},[e("div",{staticClass:"no-comment__text"},[t._v(" Nie ma jeszcze żadnych komentarzy. ")])])],1)])},R=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"TopicView__comment-form__heading"},[e("div",{staticClass:"TopicView__comment-form__heading__text"},[t._v(" Dodaj komentarz ")])])}],X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"CommentFormComponent component"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.handleForm.apply(null,arguments)}}},[e("div",{staticClass:"errors"},t._l(t.newCommentErrors,(function(s,o,n){return e("div",{key:o,staticClass:"errors__error"},["text"!==o&&"nickName"!==o?e("div",{staticClass:"errors__error__text"},[t._v(" "+t._s(s.message)+" ")]):t._e()])})),0),e("div",{staticClass:"textarea"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea__field",attrs:{rows:"5",placeholder:t.textAreaPlaceholder},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),e("div",{staticClass:"errors"},t._l(t.newCommentErrors,(function(s,o,n){return e("div",{key:o,staticClass:"errors__error"},["text"===o?e("div",{staticClass:"errors__error__text"},[t._v(" "+t._s(s.message)+" ")]):t._e()])})),0)]),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.nickName,expression:"nickName"}],staticClass:"input__field",attrs:{type:"text",placeholder:t.nickPlaceholder},domProps:{value:t.nickName},on:{input:function(e){e.target.composing||(t.nickName=e.target.value)}}}),e("button",{staticClass:"input__button",attrs:{type:"submit"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",height:"1em",viewBox:"0 0 640 512"}},[e("path",{attrs:{d:"M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"}})])])])]),e("div",{staticClass:"errors"},t._l(t.newCommentErrors,(function(s,o,n){return e("div",{key:o,staticClass:"errors__error"},["nickName"===o?e("div",{staticClass:"errors__error__text"},[t._v(" "+t._s(s.message)+" ")]):t._e()])})),0)])},Y=[],tt={name:"CommentFormComponent",components:{HeaderComponent:u},props:{postNewComment:{type:Function,required:!0},parent:{type:String,default:null},textAreaPlaceholder:{type:String,default:"Wpisz treść komentarza"},nickPlaceholder:{type:String,default:"Podpisz się"}},data(){return{text:"",nickName:"",newCommentErrors:{}}},computed:{},methods:{handleForm(){this.postNewComment({text:this.text,nickName:this.nickName,parent:this.parent}).then((t=>{this.resetForm(),this.$emit("commentFormSent")}),(t=>{this.newCommentErrors={...t.errors}}))},resetForm(){this.text="",this.nickName=""}}},et=tt,st=(0,p.Z)(et,X,Y,!1,null,"1f215b16",null),ot=st.exports,nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"CommentComponent component"},[e("div",{staticClass:"comment"},[e("div",{staticClass:"comment__nick"},[e("div",{staticClass:"comment__nick__text"},[t._v(" "+t._s(t.comment.nickName)+" ")])]),e("div",{staticClass:"comment__time"},[e("div",{staticClass:"comment__time__text"},[t._v(" "+t._s(t._f("timeSince")(t.comment.createdAt))+" ")])]),e("div",{staticClass:"comment__content"},[e("div",{staticClass:"comment__content__text"},[t._v(" "+t._s(t.comment.text)+" ")])]),t.comment.parent?t._e():e("div",{staticClass:"comment__answer-button"},[e("button",{staticClass:"comment__answer-button__button",attrs:{title:t.formActive?"zamknij":"odpowiedz"},on:{click:t.handleFormActive}},[t.formActive?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#3290FA",height:"1em",viewBox:"0 0 640 512"}},[e("path",{attrs:{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512.9 376.7C552.2 340.2 576 292.3 576 240C576 125.1 461.4 32 320 32c-67.7 0-129.3 21.4-175.1 56.3L38.8 5.1zM64 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c37 0 72.3-6.4 104-17.9L82.9 161.3C70.7 185.6 64 212.2 64 240z"}})]):e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#3290FA",height:"1em",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"}})])])]),t.formActive?e("div",{staticClass:"comment__form"},[t._t("commentForm")],2):t._e()])])},it=[],rt={name:"CommentComponent",props:{comment:{type:Object,required:!0}},data(){return{formActive:!1}},methods:{handleFormActive(){this.formActive=!this.formActive}},filters:{timeSince(t){var e=Math.floor((new Date-new Date(t))/1e3),s=e/31536e3;return s>1?Math.floor(s)+" lat":(s=e/2592e3,s>1?Math.floor(s)+" misięcy":(s=e/86400,s>1?Math.floor(s)+" dni":(s=e/3600,s>1?Math.floor(s)+" godzin":(s=e/60,s>1?Math.floor(s)+" minut":Math.floor(e)+" sekund"))))}},mounted(){}},ct=rt,at=(0,p.Z)(ct,nt,it,!1,null,"173fb195",null),lt=at.exports,mt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ImageLoaderComponent"},[e("div",{staticClass:"spinners-container"},[e("div",{staticClass:"spinners-container__spinners"},[e("SpinnerComponent",{attrs:{color:"red"}}),e("SpinnerComponent",{attrs:{color:"green"}}),e("SpinnerComponent",{attrs:{color:"blue"}}),e("SpinnerComponent",{attrs:{color:"orange"}})],1),t._m(0)])])},pt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spinners-container__text"},[e("div",{staticClass:"spinners-container__text__content"},[t._v(" Trwa generowanie podglądu... ")]),e("div",{staticClass:"spinners-container__text__content"},[t._v(" Możesz już napisać komentarz ")])])}],dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"SpinnerComponent",style:{color:t.color}})},ut=[],_t={name:"SpinnerComponent",props:{color:{type:String,default:"black"}}},vt=_t,Ct=(0,p.Z)(vt,dt,ut,!1,null,null,null),ht=Ct.exports,ft={name:"ImageLoaderComponent",components:{SpinnerComponent:ht}},gt=ft,wt=(0,p.Z)(gt,mt,pt,!1,null,null,null),Tt=wt.exports,St={name:"TopicView",components:{CommentFormComponent:ot,CommentComponent:lt,ImageLoaderComponent:Tt},data(){return{timeInterval:""}},computed:{...(0,r.rn)({activeTopic:t=>t.topicModule.activeTopic,comments:t=>t.topicModule.comments}),...(0,r.Se)({apiUrl:"apiUrl",commentsWithSubComments:"topicModule/commentsWithSubComments",activeTopicPrintScreen:"topicModule/activeTopicPrintScreen"})},methods:{...(0,r.nv)({setTopics:"topicModule/setTopics",getTopicData:"topicModule/getTopicData",postNewTopic:"topicModule/postNewTopic",postNewComment:"topicModule/postNewComment",setPrintScreens:"topicModule/setPrintScreens"}),commentFormSent(t){console.log(this.$refs[`comment--${t}`][0].handleFormActive())}},mounted(){this.setTopics(),this.getTopicData(this.$route.params.id),this.timeInterval=setInterval((()=>{this.getTopicData(this.$route.params.id)}),2e3)},beforeDestroy(){clearInterval(this.timeInterval)}},yt=St,xt=(0,p.Z)(yt,Q,R,!1,null,null,null),kt=xt.exports;o.ZP.use(k.ZP);const Pt=[{path:"/",name:"home",component:K},{path:"/:id",name:"TopicView",component:kt}],bt=new k.ZP({routes:Pt,scrollBehavior(t,e,s){return{x:0,y:0}}});var Mt=bt,At=s(4161),Nt={namespaced:!0,state(){return{topics:[],activeTopic:{_id:"",url:"",createdAt:"",updatedAt:"",comments:[]},comments:[],allComments:[],printScreens:[],status:{setTopics:"ready",setPrintScreens:"ready",getTopicData:"ready",setAllComments:"ready"}}},getters:{activeTopicPrintScreen(t){return t.printScreens.find((e=>e.topic===t.activeTopic._id))},commentsWithSubComments(t){const e=t.comments.length?[...t.comments]:[...t.activeTopic.comments];return e.forEach((t=>{const s=e.filter((e=>t._id===e.parent));t.subComments=[...s],t.subComments.reverse()})),e},topicsWithPrintScreens(t){const e=[...t.topics],s=[...t.printScreens];return e.forEach((e=>{const o=s.find((t=>e._id===t.topic));e.printScreen={...o};const n=t.allComments.filter((t=>t.topic===e._id));e.comments=[...n]})),e}},mutations:{setTopics(t,e){t.topics=[...e]},setActiveTopic(t,e){t.activeTopic={...e}},setComments(t,e){t.comments=[...e]},setAllComents(t,e){t.allComments=[...e]},setPrintScreens(t,e){t.printScreens=[...e]}},actions:{async setTopics({state:t,rootGetters:e,commit:s,dispatch:o}){if("pending"===t.status.setTopics)return!1;try{t.status.setTopics="pending";const n=await At.Z.get(`${e.apiUrl}/topics`);s("setTopics",n.data),t.status.setTopics="ready",o("saveToStorage",{name:"topics",data:n.data})}catch(n){t.status.setTopics="ready"}},postNewTopic({state:t,rootGetters:e,commit:s,dispatch:o},n){return new Promise((async(t,s)=>{try{const s=await At.Z.post(`${e.apiUrl}/topics`,{url:n});t(s.data)}catch(o){s(o.response.data)}}))},async getTopicData({state:t,rootGetters:e,commit:s},o){if("pending"===t.status.setTopics)return!1;try{t.status.setTopics="pending";const n=await At.Z.get(`${e.apiUrl}/topics/${o}`);s("setActiveTopic",{...n.data.topic,comments:[]}),s("setComments",n.data.comments),t.status.setTopics="ready"}catch(n){t.status.setTopics="ready"}},setActiveTopic({commit:t},e){t("setActiveTopic",e)},resetActiveTopic({commit:t}){t("setActiveTopic",{_id:"",url:"",createdAt:"",updatedAt:"",comments:[]})},postNewComment({state:t,rootState:e,rootGetters:s,commit:o,dispatch:n},{text:i,nickName:r,parent:c=null}){return new Promise((async(e,o)=>{try{await At.Z.post(`${s.apiUrl}/comments`,{text:i,nickName:r,parent:c,topic:t.activeTopic._id});n("getTopicData",t.activeTopic._id),e()}catch(a){o({errors:a.response.data.errors})}}))},setComments({commit:t},e){t("setComments",e)},async setAllComments({rootGetters:t,commit:e,state:s}){if("pending"===s.status.setAllComents)return!1;try{s.status.setAllComents="pending";const o=await At.Z.get(`${t.apiUrl}/comments`);e("setAllComents",o.data),s.status.setAllComents="ready",dispatch("saveToStorage",{name:"allComments",data:o.data})}catch(o){s.status.setAllComents="ready"}},async setPrintScreens({state:t,rootGetters:e,dispatch:s,commit:o},n){if("pending"===t.status.setPrintScreens)return!1;try{t.status.setPrintScreens="pending";const n=await At.Z.get(`${e.apiUrl}/printScreens`);o("setPrintScreens",n.data),t.status.setPrintScreens="ready",s("saveToStorage",{name:"printScreens",data:n.data})}catch(i){t.status.setPrintScreens="ready"}},saveToStorage({state:t,rootGetters:e,commit:s},{name:o,data:n}){localStorage.setItem(o,JSON.stringify(n))},loadTopicsFromStorage({commit:t}){console.log("storage setTopics");const e=localStorage.getItem("topics");t("setTopics",e?JSON.parse(e):[])},loadPrintScreensFromStorage({commit:t}){console.log("storage printScreens");const e=localStorage.getItem("printScreens");t("setPrintScreens",e?JSON.parse(e):[])}}};o.ZP.use(r.ZP);var Ft=new r.ZP.Store({modules:{topicModule:Nt},state:{},getters:{apiUrl(){return-1===location.href.indexOf("localhost")?"https://ef79-109-95-201-127.ngrok-free.app/":"http://localhost:2000"},frontUrl(){return-1===location.href.indexOf("localhost")?"https://dyskutuje.pl":"http://localhost:8080"}},mutations:{},actions:{}});o.ZP.config.productionTip=!1,new o.ZP({router:Mt,store:Ft,render:t=>t(y)}).$mount("#app")},7670:function(t,e,s){t.exports=s.p+"img/logo-330.592166e9.png"}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,o,n,i){if(!o){var r=1/0;for(m=0;m<t.length;m++){o=t[m][0],n=t[m][1],i=t[m][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](o[a])}))?o.splice(a--,1):(c=!1,i<r&&(r=i));if(c){t.splice(m--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var m=t.length;m>0&&t[m-1][2]>i;m--)t[m]=t[m-1];t[m]=[o,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,r=o[0],c=o[1],a=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in c)s.o(c,n)&&(s.m[n]=c[n]);if(a)var m=a(s)}for(e&&e(o);l<r.length;l++)i=r[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(m)},o=self["webpackChunkdyskutuje_pl"]=self["webpackChunkdyskutuje_pl"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(7216)}));o=s.O(o)})();
//# sourceMappingURL=app.d7a57b4d.js.map