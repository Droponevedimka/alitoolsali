!function(e){function t(t){for(var r,a,o=t[0],u=t[1],l=t[2],d=0,m=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);m.length;)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.src=function(e){return a.p+"assets/js/"+({}[e]||e)+".205b61c3118f836e9c56.js"}(e);var u=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}i[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;s.push([20,2]),n()}({16:function(e,t){window.globalNameOfItog=[0,0,0,0],window.globalUtm=window.location.search},17:function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(6)(r,i);r.locals&&(e.exports=r.locals)},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:"app"}},[t("vue-page-transition",{attrs:{name:"fade-in-left"}},[t("router-view")],1)],1)};s._withStripped=!0;var a={name:"app"},o=n(5),u=Object(o.a)(a,s,[],!1,null,null,null);u.options.__file="src/App.vue";var l=u.exports,c=n(7),d=n(9),m=n(10),p=(n(16),n(17),n(3));i.a.use(p.a);var f=new p.a({mode:"history",hashbang:!1,routes:[{path:"/test/:id",component:function(){return n.e(5).then(n.bind(null,22))}},{path:"*",component:function(){return n.e(4).then(n.bind(null,21))}},{path:"/final/:id",component:function(){return n.e(3).then(n.bind(null,23))}}]}),b=n(4);i.a.use(b.a);var g=new b.a.Store({state:{tests:[{id:1,ask:"Начнем с простого. <br>Где обычно узнаешь о скидках?",answers:[{item:"Слышу о них от женщины, орущей в рупор",answerId:4},{item:"Вижу на главной любимого сайта",answerId:2},{item:"Подписан на всякие паблики",answerId:1},{item:"Узнаю из листовок на двери подъезда",answerId:3}],image:"/assets/img/test/1.png",tiketName:"Специальные каналы и паблики собирают лучшие предложения и одними из первых рассказывают <br>о скидках — успеешь найти самую выгодную и купить вещь мечты!",btnFinally:!1},{id:2,ask:"Допустим, ты давно мечтал <br>о дозаторе для мыла в виде носа, но где его купить — хз. <br>Как будешь действовать?",answers:[{item:"Кину клич в соцсетях",answerId:1},{item:"Буду искать по картинкам в инете",answerId:3},{item:"Мысли материальны — продолжу мечтать",answerId:4},{item:"Сгоняю в пару магазов с барахлом",answerId:2}],image:"/assets/img/test/2.png",tiketName:"К счастью, мы живем в 21 веке и через специальное расширение можно легко найти то, что нужно, по фотке!",btnFinally:!1},{id:3,ask:"Представь: заходишь на сайт, <br>а там эирподсы за 284 ₽ вместо 11999 ₽. Что думаешь?",answers:[{item:"Пахнет разводом сильнее, чем протухшее мясо",answerId:1},{item:"Эирподсы за три сотки — зачем переплачивать?",answerId:3},{item:"Проверю-ка я цену на других сайтах…",answerId:2},{item:"Добавлю промик и дело в шляпе",answerId:4}],image:"/assets/img/test/4.png",tiketName:"Попробуй посмотреть товары-аналоги. <br>В сравнении рождается истина!",btnFinally:!1},{id:4,ask:"Решил почитать о новеньком навигаторе, а там: несколько одинаковых отзывов, странные юзеры и мутные фото. Как быть?",answers:[{item:"Спрошу у друзей — они шарят в технике",answerId:1},{item:"80% отзывов — вранье, но чему еще верить",answerId:2},{item:"Рискну, все равно он стоит копейки",answerId:3},{item:"Это же супер новинка! некогда ждать",answerId:4}],image:"/assets/img/test/3.png",tiketName:"Отзывы, собранные в одном месте — вот это тема. Сэкономишь кучу времени и точно будешь знать, хотят ли тебя обдурить.",btnFinally:!1},{id:5,ask:"Распродажа — отличное время купить легендарную шмотку не за мильон рублей. Как провернете покупку, чтобы не привезли гулливерский размер?",answers:[{item:"Фото не дадут соврать",answerId:4},{item:"Подружаня заказывала — все ок",answerId:2},{item:"Достану поддержку магазина",answerId:1},{item:"Тщательно выберу размер, держа кулачки",answerId:3}],image:"/assets/img/test/5.png",tiketName:"Иногда картинки не соответствуют действительности, ведь главное сфоткать красиво. <br>А вот видеообзоры — другое дело. Попробуй сам!",btnFinally:!1},{id:6,ask:"На носу праздники — пора покупать подарки семье, друзьям, Олегу этажом ниже. Чем затариваться?",answers:[{item:"Специальная подборка в помощь",answerId:2},{item:"Конфеты в ближайшем супермаркете",answerId:4},{item:"Что-нибудь дешевое и убийственное",answerId:3},{item:"Попрошу у всех вишлист",answerId:1}],image:"/assets/img/test/6.png",tiketName:"Есть местечко, где можно купить что угодно и не разориться. Догадался?",btnFinally:!0}],testFinal:[{id:1,title:"Ты — Mister Money",desc:"Да у тебя просто сумасшедший результат! Ты точно король распродаж, повелитель скидок и владыка всех специальных предложений. <br><br>Лови в арсенал уловок <b>бесплатное</b> расширение AliTools для Алиэкспресс. Оно покажет реальные отзывы и поможет определить, настоящая скидка или фейковая. А еще можно будет искать товары по фотке и смотреть на них видеообзоры! ",img:"/assets/img/rez/rez1.png",socDescr:"Я — повелитель скидок и владыка специальных предложений! Сможешь переплюнуть меня в умении найти выгоду?"},{id:2,title:"Ты — Предприимчивый пройдоха",desc:"Гром и молнии разбиваются о землю с невероятным грохотом, когда ты в очередной раз экономишь в онлайн-шоппинге! <br><br>А вот кое-что, что поможет вырубать еще больше скидок на Алиэкспресс — <b>бесплатное</b> расширение AliTools. Оно покажет, какая скидка настоящая, а какая — фейковая и быстро найдет трушные отзывы о любом продукте. А еще сможешь искать товары по фотке и смотреть на них подробные видеообзоры! ",img:"/assets/img/rez/rez2.png",socDescr:"Новички прячутся, когда я выхожу на шоппинг-охоту. Осмелишься побороться со мной за звание самого находчивого?"},{id:3,title:"Ты — Искатель сокровищ",desc:"У тебя нестандартный ход мысли — чуешь золотце, но не всегда его находишь. Ремесло экономии у тебя почти в кармане, просто будь более внимательным. <br><br>Есть отличный сервис, чтобы тренировать скидочное чутье — <b>бесплатное</b> расширение AliTools. Сможешь отличать настоящую скидку от фейковой, искать аналоги по фотке и быстро находить отзывы о любом продукте на Алиэкспресс!",img:"/assets/img/rez/rez3.png",socDescr:"В кругах шопоголиков меня называют «искатель сокровищ». А какого звания достоин ты?"},{id:4,title:"Ты — Щедрая душа",desc:"Если приложить чуть больше усилий и применить чуть больше знаний, сможешь добиться господства в мире распродаж. <br><br>А вот и помощь подъехала. AliTools — <b>бесплатный</b> сервис для поиска выгодных предложений на Алиэкспресс. С его помощью сможешь отличать настоящую скидку от фейковой, искать аналоги товаров по фотке и быстро находить правдивые отзывы и полезные обзоры покупателей!",img:"/assets/img/rez/rez4.png",socDescr:"Ретроградный Меркурий узрел во мне огромный шоппинг-потенциал. А ты сможешь показать себя"}]},getters:{getTestById:function(e,t){return function(t){return e.tests.find((function(e){return e.id==t}))}},getFinallyById:function(e,t){return function(t){return e.testFinal.find((function(e){return e.id==t}))}}}});i.a.use(c.a),i.a.use(d.default),Object(m.sync)(g,f);new i.a({store:g,router:f,render:function(e){return e(l)}}).$mount("#app")}});