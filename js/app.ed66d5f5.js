(function(t){function e(e){for(var a,l,o=e[0],c=e[1],i=e[2],u=0,p=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);b&&b(e);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},n={app:0},s=[];function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/consalting-dev/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var b=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1192:function(t,e,r){},2449:function(t,e,r){},2843:function(t){t.exports=JSON.parse('{"clients":[{"name":"Коляски NOORDLINE:","img":"https://static.wixstatic.com/media/fd1946_cfac76b0a3fc458cbc6e7044bfe92a6d~mv2.png/v1/fill/w_294,h_154,al_c,lg_1,q_85/fd1946_cfac76b0a3fc458cbc6e7044bfe92a6d~mv2.webp"},{"name":"Сладкий ХОЛСТ","img":"https://static.wixstatic.com/media/fd1946_c6096b913f5b4dd994bddf154a1e3c12~mv2.png/v1/fill/w_174,h_176,al_c,lg_1,q_85/fd1946_c6096b913f5b4dd994bddf154a1e3c12~mv2.webp"}]}')},"2a6c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("TopHeader"),r("section",{staticClass:"content-width mt-3"},[r("router-view")],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"navigation"},[r("div",{staticClass:"content-width"},[r("nav",{staticClass:"navbar navbar-expand-lg px-0"},[r("router-link",{staticClass:"navbar-brand mb-1",attrs:{to:{name:"home"}}},[r("span",{staticClass:"rubic-mono-one"},[t._v("CON-ING")])]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.headerLinks,(function(e,a){return r("li",{key:a,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{path:e.path}}},[r("span",[t._v(t._s(e.runame||e.name))])])],1)})),0)])],1)])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main col-12 row no-gutters"},[r("div",{staticClass:"col-md-4 col-12"},[r("h2",[t._v("Перечень услуг")]),r("ul",t._l(t.services,(function(e,a){return r("li",{key:a},[t._v(t._s(e.name))])})),0)]),r("div",{staticClass:"col-md-8 col-12"},[t._m(0),r("router-link",{staticClass:"col-12",attrs:{to:{name:"calculator"}}},[t._v("Рассчитать стоимость")]),r("h5",[t._v("Статьи")]),t._l(t.articles,(function(t,e){return r("articleBlog",{key:e,attrs:{article:t}})}))],2)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12"},[r("h2",[t._v("О главном")]),r("h5",[t._v("Как это работает")]),r("h4",{staticClass:"d-inline"},[t._v("1 SOME →")]),r("h4",{staticClass:"d-inline"},[t._v("2 SOME →")]),r("h4",{staticClass:"d-inline"},[t._v("3 SOME")]),r("h6",[t._v("some")]),r("h4",{staticClass:"d-inline"},[t._v("1 SOME →")]),r("h4",{staticClass:"d-inline"},[t._v("2 SOME →")]),r("h4",{staticClass:"d-inline"},[t._v("3 SOME")])])}],b=(r("fb6a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"row no-gutters col-12 mb-5"},[r("p",{staticClass:"col-12"},[t._v(t._s(t.article.date))]),r("h2",[t._v(t._s(t.article.title))]),r("div",{staticClass:"article__html",domProps:{innerHTML:t._s(t.article.html)}}),r("button",{staticClass:"mt-2"},[t._v("Читать дальше →")])])}),u=[],p={props:{article:{type:Object,required:!0}}},m=p,h=(r("effe"),r("2877")),d=Object(h["a"])(m,b,u,!1,null,null,null),f=d.exports,g={components:{articleBlog:f},data:function(){return{services:this.$store.state.services.services,articles:this.$store.state.articles.articles.slice(0,4)}}},v=g,_=Object(h["a"])(v,c,i,!1,null,null,null),w=_.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"services col-12 row no-gutters"},t._l(t.services,(function(t,e){return r("service-card",{key:e,staticClass:"col-lg-4 col-md-6 col-12",attrs:{service:t}})})),1)},x=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-4 check"},[r("h6",[t._v(t._s(t.service.name))]),r("p",[t._v(t._s(t.service.desc))])])},k=[],j={props:{service:Object}},O=j,S=Object(h["a"])(O,C,k,!1,null,null,null),E=S.exports,B={components:{serviceCard:E},data:function(){return{services:this.$store.state.services.services}}},$=B,q=Object(h["a"])($,y,x,!1,null,null,null),z=q.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clients"},[r("h1",[t._v("Наши клиенты")]),t._l(t.clients,(function(t,e){return r("clientCard",{key:e,attrs:{client:t}})}))],2)},P=[],A=r("2843"),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"client-card"},[r("img",{attrs:{src:t.client.img}}),r("p",[t._v(t._s(t.client.name))])])},D=[],I={props:{client:Object}},N=I,T=Object(h["a"])(N,R,D,!1,null,null,null),L=T.exports,V={components:{clientCard:L},data:function(){return{clients:A.clients}}},J=V,K=Object(h["a"])(J,M,P,!1,null,null,null),G=K.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contacts"},[r("h1",[t._v("Свяжитесь с нами")]),r("p",[t._v(" г. Ростов-на-Дону, Ростов ")]),r("p",[t._v("+7(928)-619-99-59")]),r("p",[t._v("Office@bhsystem61.com")]),r("div",{staticClass:"contanc_form col-4"},[r("input",{staticClass:"col-12",attrs:{placeholder:"name",type:"text"}}),r("input",{staticClass:"col-12",attrs:{placeholder:"name",type:"email"}}),r("textarea",{staticClass:"col-12",attrs:{placeholder:"message"}})])])}],Q={},X=Object(h["a"])(Q,H,Y,!1,null,null,null),Z=X.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog row no-gutters"},[r("div",{staticClass:"col-md-10 col-12 mx-auto"},t._l(t.articles,(function(t,e){return r("articleBlog",{key:e,attrs:{article:t}})})),1)])},F=[],W={data:function(){return{articles:this.$store.state.articles.articles}},components:{articleBlog:f}},tt=W,et=Object(h["a"])(tt,U,F,!1,null,null,null),rt=et.exports,at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row no-gutters col-12 v-select-container"},[r("h1",{staticClass:"col-12"},[t._v("calculator")]),t._l([1,2,3,4],(function(t,e){return r("div",{key:e,staticClass:"col-lg-3 col-md-6 col-12"},[r("v-select"),r("my-checkbox",{staticClass:"col-3",attrs:{nameBox:"some"}}),r("my-checkbox",{staticClass:"col-3",attrs:{nameBox:"some"}}),r("my-checkbox",{staticClass:"col-3",attrs:{nameBox:"some"}}),r("my-checkbox",{staticClass:"col-3",attrs:{nameBox:"some"}})],1)}))],2),t._m(0)])},nt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12"},[r("p",[t._v("total cost: 500$")])])}],st=r("4a7a"),lt=r.n(st),ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.valueBox,expression:"valueBox"}],attrs:{type:"checkbox"},domProps:{value:t.nameBox,checked:Array.isArray(t.valueBox)?t._i(t.valueBox,t.nameBox)>-1:t.valueBox},on:{change:function(e){var r=t.valueBox,a=e.target,n=!!a.checked;if(Array.isArray(r)){var s=t.nameBox,l=t._i(r,s);a.checked?l<0&&(t.valueBox=r.concat([s])):l>-1&&(t.valueBox=r.slice(0,l).concat(r.slice(l+1)))}else t.valueBox=n}}}),r("label",{on:{click:function(e){t.valueBox=!t.valueBox}}},[t._v(t._s(t.nameBox))])])},ct=[],it={props:{nameBox:{type:String,required:!0}},data:function(){return{valueBox:Math.random()>=.5}}},bt=it,ut=(r("ec0b"),Object(h["a"])(bt,ot,ct,!1,null,"419eefd5",null)),pt=ut.exports,mt={components:{vSelect:lt.a,myCheckbox:pt}},ht=mt,dt=Object(h["a"])(ht,at,nt,!1,null,null,null),ft=dt.exports,gt=[{path:"/home",name:"home",component:w,runame:"Главная"},{path:"/services",name:"services",component:z,runame:"Услуги"},{path:"/contacts",name:"contacts",component:Z,runame:"Контакты"},{path:"/blog",name:"blog",component:rt,runame:"Блог"},{path:"/calculator",name:"calculator",component:ft,runame:"Калькулятор"},{path:"/clients",name:"clients",component:G,runame:"Клиенты"}],vt=gt,_t={data:function(){return{headerLinks:vt}}},wt=_t,yt=Object(h["a"])(wt,l,o,!1,null,null,null),xt=yt.exports,Ct={components:{TopHeader:xt}},kt=Ct,jt=Object(h["a"])(kt,n,s,!1,null,null,null),Ot=jt.exports,St=(r("99af"),r("8c4f"));a["a"].use(St["a"]);var Et=[{path:"/",redirect:{name:"home"}}],Bt=new St["a"]({mode:"history",base:"/consalting-dev/",routes:vt.concat(Et),scrollBehavior:function(t,e,r){return t.hash?{selector:t.hash}:r||{x:0,y:0}}}),$t=r("1dce"),qt=r.n($t),zt=r("2f62"),Mt=r("ae81"),Pt=r("a3b4");a["a"].use(zt["a"]);var At=new zt["a"].Store({state:{articles:Mt,services:Pt},getters:{},mutations:{},actions:{}});r("ab8b"),r("4989"),r("cf5c"),r("fb98"),r("ecba"),r("1192"),r("2a6c"),r("e92b");window.$=window.jQuery=r("1157"),a["a"].config.productionTip=!1,a["a"].use(qt.a),new a["a"]({store:At,router:Bt,render:function(t){return t(Ot)}}).$mount("#app")},a205:function(t,e,r){},a3b4:function(t){t.exports=JSON.parse('{"services":[{"name":"Диагностика системы продаж","desc":"description"},{"name":"План развития","desc":"description"},{"name":"Построение отдела продаж","desc":"description"},{"name":"Оптимизация отдела продаж","desc":"description"},{"name":"Диагностика системы продаж","desc":"description"},{"name":"Книга продаж","desc":"description"},{"name":"Контроль работы менеджеров","desc":"description"},{"name":"Обучение менеджеров","desc":"description"},{"name":"Бизнес коучинг","desc":"description"}]}')},ae81:function(t){t.exports=JSON.parse('{"articles":[{"title":"История моей трудовой деятельности в ООО «Опен Продукт»","date":"вчера в 02:26","html":"<img src=\\"https://habrastorage.org/webt/up/mk/bi/upmkbinbp-x7iemi5kyqreplvuq.jpeg\\"/> <br/>\\n<br/>\\n<h2>Часть первая. Конфликт</h2><br/>\\n<br/>\\n<b>Среда, 4 марта 2020, полдень</b><br/>\\n<br/>\\r\\nЯ отдыхаю дома. Звонит наш техдир Рома:<br/>\\r\\n— Миша, когда ты будешь на работе?<br/>\\r\\n— Я решил сегодня остаться дома.<br/>\\r\\n— Хорошо, я передам руководству<br/>\\r\\n— По ТК есть норма, что если 15 дней задержка, то можно не выходить<br/>\\r\\n(на тот момент я не видел зарплаты больше месяца)<br/>\\r\\n— Да, я знаю<br/>\\r\\nРома перезванивает мне через 15 мин:<br/>\\r\\n— Во сколько ты можешь приехать за зарплатой?<br/>\\r\\n— Давай уже завтра, как обычно<br/>\\r\\n— Хорошо, тогда до завтра<br/>\\n<br/>"},{"title":"В софте всё восхитительно, но все недовольны","date":"вчера в 12:14","html":"<img src=\\"https://habrastorage.org/webt/9k/px/gn/9kpxgn6vlip7qlotzvi1hxakymk.jpeg\\"/><br/>\\n<br/>\\r\\nЕсть типичная позиция, которую можно встретить на Хабре и не только: «хотя железо с годами всё лучше, человечество свело эффект на нет тем, что пишет софт всё хуже».<br/>\\n<br/>\\r\\nМол, ядер в процессорах стало больше, но тормозит всё пуще прежнего. Electron и Slack — порождения тьмы, пришедшие лишить нас счастья и памяти. Мобильные приложения стали прожорливее, чем старые операционные системы. А в самих операционных системах уже толком нет прогресса, но почему-то они продолжают разбухать в размерах. То ли дело было, когда люди умели уместить ОС на дискету!<br/>\\n<br/>\\r\\nСкажу прямо: когда я вижу подобные заявления, у меня бомбит. По-моему, в них упускают целый ряд важных факторов. А в итоге ситуация напоминает классическую речь Луи Си Кея «<a href=\\"https://www.youtube.com/watch?v=MkS3hyzarrA\\" rel=\\"nofollow\\">Everything\'s amazing and nobody\'s happy</a>»: всё стало удивительно хорошо, а люди сидят и жалуются.<br/>\\n<br/>\\r\\nПоэтому решил описать эти упущенные факторы. Поскольку текст получился резким, хочу подчеркнуть, что мнение сугубо моё личное (хоть я и ссылаюсь на конференции компании, в которой работаю).<br/>"},{"title":"Нужно ли курить для защиты от SARS-CoV-2","date":"вчера в 12:52","html":"<img src=\\"https://habrastorage.org/webt/mq/vc/8l/mqvc8lv2ywmuipt3lrgtpwpmj0c.jpeg\\"/><br/>\\n<i>Неимоверно крутые арты китайских художников, посвященные борьбе с эпидемией. <a href=\\"https://colonelcassad.livejournal.com/5721835.html\\" rel=\\"nofollow\\">Брал тут</a>.</i><br/>\\n<br/>\\r\\nНовый вирус быстро расширяет свой ареал, разгоняя население целых стран на удаленку и заставляя бояться друг друга. У меня есть ощущение, что скоро будет не слишком весело. Я придерживаюсь прогноза, что большинство так или иначе <a href=\\"https://www.imperial.ac.uk/media/imperial-college/medicine/sph/ide/gida-fellowships/Imperial-College-COVID19-NPI-modelling-16-03-2020.pdf\\" rel=\\"nofollow\\">переболеет SARS-CoV-2</a>. Тем не менее, это не значит, что вам надо кидаться в окно трамвая при первом кашлянувшем соседе.<br/>\\n<br/>\\r\\nНашел несколько интересных фактов по курению. Есть подозрение, что будет бонус у вейперов и потребителей никотиновой жвачки. Но это не точно.<br/>\\n<br/>\\r\\nПопробуем сухо пробежаться по основным фактам и выбрать наиболее правильную стратегию с точки зрения теории игр. Например, что выгоднее, заболеть сейчас или прятаться до последнего? А еще крайне рекомендую <a href=\\"https://habr.com/ru/post/493250/\\">посмотреть пост</a> от <a class=\\"user_link\\" href=\\"https://habr.com/ru/users/milfgard/\\">Milfgard</a>, чтобы знать в каком транспорте безопаснее перемещаться и что делать, если рядом кто-то кашляет в вагоне.<br/>\\n<br/>\\n<i>Пока писал этот материал, вышло множество других на эту тему. Сразу прошу прощения, если буду где-то повторяться.</i><br/>"},{"title":"Что происходит с путешествиями прямо сейчас — и как защититься в транспорте","date":"вчера в 10:00","html":"<img src=\\"https://habrastorage.org/webt/n2/uw/iz/n2uwizk8rwawv9xezuak4ltsu9s.jpeg\\"/><br/>\\n<sup>Визуализация нашего датасета передвижений по стране</sup><br/>\\n<br/>\\n<b>Самое важное</b><br/>\\n<br/>\\n<ul>\\n<li>Хороший сценарий: человечеству удастся локализовать вирус. Но некоторые страны вроде Голландии в него уже, похоже, не верят. Плохой сценарий означает, что он с нами надолго (больше года) и болеть им будет около 60% населения. В этом случае хорошо бы сейчас переждать, а потом переболеть, когда больницы не будут перегружены — поэтому карантин. Или дождаться вакцины. </li>\\n<li>Два механизма распространения (<a href=\\"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses\\" rel=\\"nofollow\\">ВОЗ</a>): если в вас кашлянули или если больной кашлянул и засыпал всё вирионами вокруг, а вы потрогали это и пальцами занесли на лицо. Второй вектор опаснее из-за своей незаметности. </li>\\n<li>На улице куда безопаснее, чем в помещении. В замкнутом помещении маски (даже из шарфа) чуть поднимают ваши шансы, но правильно использовать плотно прилегающие специальные респираторы. </li>\\n<li>Рассматриваем шансы заразиться в самолёте, поезде и автобусе. </li>\\n</ul><br/>\\n<b>Путешествовать?</b><br/>\\n<br/>\\r\\nКороткий совет — не путешествуйте. По крайней мере, без сильной нужды. <br/>\\n<br/>\\n<b>Статусы</b>:<br/>\\n<br/>\\n<ul>\\n<li>Иностранцы <a href=\\"https://yandex.ru/news/story/Rossiya_zakryvaet_granicy_dlya_inostrancev_do_1_maya--bd9cc792ab26787e0ca5c41723bf7397?from=newswizard&amp;lang=ru&amp;persistent_id=90810865&amp;rubric=koronavirus&amp;stid=0wouZmQp51E7ZSBYmzXe\\" rel=\\"nofollow\\">не могут</a> въехать в Россию до 1 мая.</li>\\n<li>Рейсы по России пока выполняются почти в полном объёме.</li>\\n<li>Для отменённых рейсов (и рейсов, где нужная остановка пропускается из-за карантина) в подавляющем числе случаев есть возврат без потерь. В просто «неблагополучных регионах» — увы, по стандартной схеме. С турами хуже. </li>\\n</ul><br/>\\r\\nДетали дальше, и там ссылка на очень подробную нашу инструкцию, как с этим жить. <br/>"},{"title":"RBK.money выпустила первый в мире open-source платежный процессинг — творим будущее вместе","date":"вчера в 11:04","html":"<p><a href=\\"https://habr.com/ru/company/rbkmoney/blog/493202/\\"><img src=\\"https://habrastorage.org/webt/so/j-/go/soj-gosr69fuhijnmjnckqcam3m.png\\"/></a></p><br/>\\n<p>Привет! </p><br/>\\n<p>Если вы читали наши <a href=\\"https://habr.com/ru/company/rbkmoney/\\">предыдущие посты</a> (читали же?), то точно помните, что мы в RBK.money очень сильно за опенсорс. Настолько, что выложили в открытый доступ наш антифрод в виде открытых исходников под лицензией Apache 2.0.</p><br/>\\n<p>Как вы понимаете, нам понравилось. Одного антифрода нам показалось мало, поэтому мы взяли и выложили в опенсорс всю нашу платежную платформу. Вообще всю. От самого первого микросервиса до навороченных систем аналитики, маршрутизации платежей, системы обработки и хранения карточных данных и десятков других микросервисов и пользовательских интерфейсов. Это именно тот код, на котором сейчас, в этот момент работает наш процессинг.</p><br/>\\n<p>Зачем мы это сделали? Как это работает внутри? Как теперь жить дальше? Читайте под катом. Я гарантирую, что такого вы еще не встречали — еще никто в мире не опенсорсил платежную систему такого уровня. </p><br/>\\n<p>История меняется прямо сейчас на ваших глазах!</p>"},{"title":"MIP* = RE: эпохальное доказательство из сферы компьютерной науки, которое вызвало эффект домино в физике и математике","date":"вчера в 12:30","html":"Учёные-информатики вышли на новые рубежи в деле проверки решений задач вычислительными методами. При этом они нашли ответы на важнейшие открытые вопросы квантовой механики и чистой математики.<br/>\\n<br/>\\r\\nВ 1935 году Альберт Эйнштейн, работая с Борисом Подольским и Натаном Розеном, исследовал возможность, открытую новыми законами квантовой физики: две частицы могут находиться в запутанном состоянии, когда их взаимосвязь не нарушают даже огромные расстояния.<br/>\\n<br/>\\n<a href=\\"https://habr.com/ru/company/ruvds/blog/492502/\\"><img src=\\"https://habrastorage.org/webt/cy/m_/f5/cym_f5kk-thrsva6gvycjgogzne.jpeg\\"/></a><br/>\\n<br/>\\r\\nВ следующем году Алан Тьюринг сформулировал первую общую теорию вычислений, и доказал, что существуют задачи, которые никогда не смогут быть решены компьютерами. <br/>\\n<br/>\\r\\nЭти две идеи произвели революцию в тех областях наук, к которым они относятся. Кроме того, казалось, что они не имеют никакого отношения друг к другу. Но теперь <a href=\\"https://arxiv.org/abs/2001.04383\\" rel=\\"nofollow\\">доказательство</a> MIP* = RE их скомбинировало, что привело к решению множества задач в сфере информатики, физики и математики.<br/>"},{"title":"Сравнение стоимости на Managed Kubernetes (2020)","date":"вчера в 10:48","html":"<i><b>Прим. перев.</b>: Американский DevOps-инженер Sid Palas, пользуясь <a href=\\"https://www.reddit.com/r/kubernetes/comments/fdgblk/google_gke_to_introduce_management_fees_by_june/\\" rel=\\"nofollow\\">недавним анонсом Google Cloud</a> как инфоповодом, провёл сравнение стоимости услуги Managed Kubernetes (в разных конфигурациях) от ведущих мировых облачных провайдеров. Дополнительным плюсом его работы стала публикация соответствующего Jupyter Notebook, позволяющего (при наличии минимальных знаний Python) подкорректировать производимые расчёты под свои нужды.</i><br/>\\n<br/>\\n<b>TL;DR</b>: Azure и Digital Ocean не взимают плату за вычислительные ресурсы, используемые для управляющего слоя (control plane), что делает их подходящим выбором для развертывания множества небольших кластеров. Для запуска малого количества крупных кластеров лучше всего подходит GKE. Кроме того, можно серьезно сократить затраты, используя спотовые/вытесняемые/низкоприоритетные узлы или «подписавшись» на длительное использование одних и тех же узлов (это касается всех платформ)."},{"title":"Калькулятор пипифакса","date":"вчера в 09:54","html":"Забавно наблюдать, как по всему миру люди сегодня истерично скупают продукты длительного хранения (голода боятся, понимаем), соль (туда же) и… туалетную бумагу. Загадочное явление: чистота укромного уголка тела во многих странах сегодня подсознательно возводится на уровень первой необходимости. Почему так? Вероятно, эта тема ещё ждёт своих исследователей. Ну а мы сделали удобное решение для подсчета запасов.<br/>\\n<br/>\\n<a href=\\"https://habr.com/ru/company/ruvds/blog/493168/\\"><img src=\\"https://habrastorage.org/webt/i3/c2/0d/i3c20dobkuqzq9banix7yji4otu.jpeg\\"/></a><br/>"},{"title":"Рубрика «Читаем статьи за вас». Январь — Февраль 2020","date":"вчера в 15:15","html":"<img src=\\"https://habrastorage.org/webt/gx/-y/xl/gx-yxlo7xiz-5y8krpyoj3rgswq.png\\"/><br/>\\n<p><br/>\\r\\nПривет, Хабр! Продолжаем публиковать рецензии на научные статьи от членов сообщества Open Data Science из канала #article_essense. Хотите получать их раньше всех — вступайте в <a href=\\"http://ods.ai/\\" rel=\\"nofollow\\">сообщество</a>!</p><br/>\\n<p>Представлены обзоры 11 статей по Computer Vision, Natural Language Processing, Reinforcement learning и другим темам.</p>"},{"html":"Каждый год одно и то же: птицы улетают в теплые страны, а мои друзья и коллеги достают сноуборды, горные лыжи и ждут снега. Дожидаются не всегда, а потому или тоже улетают к далеким горнолыжным трассам, или ноют, что кататься негде. И как-то раз на очередное нытье я честно ответил, что этот мэйнстрим столько сил и денег не стоит и проще отдохнуть за городом. И началось: «там слишком холодно», «там нечего делать» — говорили на мою идею съездить на выходных за город.\\r\\n"},{"title":"Make «udalenka» great again: как перевести всю компанию на удаленную работу в 4 этапа","date":"вчера в 17:44","html":"В то время как коронавирус шагает по планете, на рынке ценных бумаг лидирует туалетная и целые страны закрывают на карантин, все больше компаний вынуждены переводить сотрудников на удаленную работу. Мы в RUVDS не стали исключением и решили поделиться с Хабром своим опытом организации удаленного рабочего процесса в масштабах всей компании. Сразу стоит оговориться, что в статье не будет капитанских советов вроде «будучи дома — наденьте штаны», только суровая действительность и руководство к действию.<br/>\\n<br/>\\n<a href=\\"https://habr.com/ru/company/ruvds/blog/493348/\\"><img src=\\"https://habrastorage.org/webt/pr/-a/m_/pr-am_vwbko7fqgi9cj7ec7zb4s.jpeg\\"/></a>"},{"title":"Как мы создавали галерею нейросетевого искусства и почему не даём копировать картины","date":"вчера в 12:24","html":"Мы сегодня запустили виртуальную <a href=\\"https://ya.cc/t/5kgS4KX3ANsnn\\" rel=\\"nofollow\\">галерею</a>, где все картины созданы нейронной сетью. Её особенность в том, что каждую картину в полном размере может забрать себе только один человек. Почти как в настоящей галерее. <br/>\\n<br/>\\r\\nВ этом посте я расскажу о том, как родилась эта идея и как мы реализовали её с помощью двух нейросетей, одна из которых используется в поиске Яндекса. <br/>\\n<br/>\\n<a href=\\"https://habr.com/ru/company/yandex/blog/493190/\\"><img src=\\"https://habrastorage.org/webt/7w/ge/up/7wgeupvzbfnaze2xnkflpwzjz5g.jpeg\\"/></a><br/>"},{"title":"Игра в бога: искусственные организмы","date":"вчера в 14:33","html":"Что-то вроде тизера. Ксеноморфы существуют. Учёные создают ксеноморфов. Учёные создают ксеноморфов из соображений безопасности. Я сам в шоке. Под катом подробнее об этом (а это, кстати, совершенно официально называется ксенобиология) и о много другом, чем занимаются современные биологи. Не всё ж вам про COVID-19 читать!<br/>\\n<br/>\\r\\nЭто первая часть текста, написанного по мотивам <a href=\\"https://teleg.run/progulka/79\\" rel=\\"nofollow\\">эпизода подкаста</a> про искусственные организмы.<br/>\\n<br/>\\n<img src=\\"https://habrastorage.org/webt/vw/nw/ds/vwnwds3quopceaqf8_acv7cldrg.jpeg\\"/><br/>"},{"title":"Кручу-верчу, запутать хочу: манипуляции с двухслойным графеном","date":"вчера в 10:50","html":"<img src=\\"https://habrastorage.org/webt/qn/sa/tf/qnsatf766ztdx4wl03-qnwjtitg.png\\"/><br/>\\n<br/>\\r\\nВ 2004 году научное сообщество впервые познакомилось с графеном в его физической форме. Ранее на протяжении многих десятилетий существовало множество теорий об этом удивительном материале. С момент получения реального графена мы узнали много нового о нем, но еще далеко не все. Ученые из Иллинойсского университета в Урбане-Шампейне (США) решили провести довольно необычные опыты с пластинами графена. Исследование показало, что габариты графеновых пластин и температура окружающей среды напрямую влияют на стабильность структуры, что можно использовать для получения структуры определенной формы, тем самым меняя ее свойства. Как именно проводили эксперименты, какие новые данные о двухслойном графене были получены, и как применить полученные знания на практике? Об этом мы узнаем из доклада ученых. Поехали."},{"title":"Интервью с Вячеславом Уточкиным, директором образовательных программ по геймдеву ВШБИ НИУ ВШЭ: 20 вопросов о геймдеве","date":"вчера в 14:52","html":"<p>Весь мир — театр. В нём женщины, мужчины — все актёры. У них свои есть выходы, уходы. И каждый не одну играет роль. Вильям ПотрясающийКопьём предвосхитил появления не только социальной психологии и монументального труда Эрика Берна «Игры, в которые играют люди». Но и саму игровую индустрию, которая позволяет людям отыгрывать самые невероятные роли, не выходя из дома и не вставая из-за стола. </p><br/>\\n<p>Роли героев, рыцарей, королей, полководцев, врачей, наёмных убийц, путешественников, лётчиков, космонавтов, сказочных существа, странников по радиоактивным пустошам, исследователей Вселенной. </p><br/>\\n<p>Игровая индустрия всего за 40 лет прошла огромный, динамичный и невероятный путь — и заняла особую нишу в жизни человечества. </p><br/>\\n<p>Я предложил Вячеславу Уточкину, директору образовательных программ по игровой индустрии в Высшей школе бизнес-информатики НИУ ВШЭ, ряд вопросов о геймедеве — роль и перспективы VR, мотивационные манипулятивные инструменты, защита здоровья игрока, перспективные жанры игр и эксперименты с жанровой составляющей, изменения модели мотивации от лутбоксов к перспективным механикам, как рынок меняется сейчас во время всеобщей истерии из-за COVID-19. Итогом стало это интервью. </p><br/>\\n<p><img src=\\"https://habrastorage.org/webt/v2/kh/tn/v2khtn1p-kauwbecnote2ux9x_g.jpeg\\"/></p><br/>"},{"title":"SLAE — Security Linux Assembly Expert Exam","date":"вчера в 05:00","html":"<div style=\\"text-align:center;\\"><img alt=\\"image\\" src=\\"https://habrastorage.org/webt/nj/sc/fb/njscfbnkoirqggp_ns8h9upvies.png\\"/></div><br/>\\r\\nSecurity Linux Assembly Expert — онлайн-курс и экзамен по основам 32-битного языка ассемблера процессоров семейства Intel в Linux-системах в контексте информационной безопасности. Курс будет полезен пентестерам, инженерам по информационной безопасности и всем, кто желает разобраться в основах ассемблера и научиться писать простые шеллкоды. После прохождения курса вы научитесь пользоваться основными системными вызовами Linux\'a, писать простые шеллкоды, начнете понимать базовые принципы работы операционной системы на уровне ядра. В данной статье будут рассмотрены задания, необходимые для прохождения экзамена по этому <a href=\\"http://securitytube-training.com/online-courses/securitytube-linux-assembly-expert/\\" rel=\\"nofollow\\">курсу</a>. <br/>\\n<br/>\\r\\nПо условиям экзамена необходимо выполнить 7 заданий:<br/>\\n<br/>\\n<ol>\\n<li>Написать TCP Bind Shell</li>\\n<li>Написать Reverse TCP Shell</li>\\n<li>Разобраться с техникой egghunter и предоставить пример этой техники</li>\\n<li>Написать кодировщик кода</li>\\n<li>Проанализировать 3 шеллкода, сгенерированных msfvenom\'ом при помощи GDB/ndisasm/libemu</li>\\n<li>Выполнить полиморфное преобразование 3 любых шеллкодов и shellstorm\'а.</li>\\n<li>Написать шифровальщик кода</li>\\n</ol>"},{"title":"Мы успели перевести офисы на удаленку, а вы?","date":"вчера в 18:21","html":"Всем привет из карантина! Давно хотел написать пост про жизнь и работу в Испании, но совсем по другому поводу. Однако сложившаяся ситуация диктует другие правила. Поэтому сегодня об опыте по переводу офисов на удаленную работу, до того как это стало вынужденным. А еще про жизнь, работу и общение с клиентами в условиях форс-мажора и военных на улицах.<br/>\\n<br/>\\n<img src=\\"https://habrastorage.org/webt/6d/lu/st/6dlusttnvs_esbc90ccsramtjrc.jpeg\\"/><br/>"},{"title":"Круглосуточная трансляции своих видео на YouTube","date":"вчера в 17:34","html":"Последнее время в качестве хобби снимаю на видео лекции знакомого психолога. Отснятый материал монтирую и публикую на своём сайте. Месяц назад я загорелся идеей организовать круглосуточную трансляцию этих лекций на YouTube в режиме 24/7. Этакий тематический «телеканал», посвященный личностному росту.<br>\\n<br>\\r\\nКак сделать обычную трансляцию я знаю. А вот как сделать так, чтобы это была трансляция именно видео-файлов? Чтобы она шла 24/7, была гибкой, максимально автономной и при этом никак не зависела от моего домашнего компьютера. Это мне и предстояло выяснить. <br>\\n<br>\\n<img src=\\"https://habrastorage.org/webt/ti/vn/5u/tivn5utlpr-vmldtf9dh5hh7fku.jpeg\\"><br>\\n<br>\\r\\nНа поиск решения ушло несколько дней. Я изучил множество форумов и различных мануалов без которых моя трансляция просто бы не получилась. И теперь, когда шалость удалась, я чувствую потребность поделиться своим решением. Так появилась эта статья.<br>\\n<br>\\r\\nЕсли коротко, то итоговое решение получилось следующим: <b>VPS + ffmeg + bash-скрипт</b>. Под катом я описываю проделанные шаги и рассказываю про «подводные камни», которые обнаружились при организации трансляции.<br>\\n</br></br></br></br></br></img></br></br></br></br>"},{"title":"Синдром бога: история о том, как главный инфекционист Ставропольского края коронавирус распространял(а)*","date":"сегодня в 00:09","html":"<i>* диагноз на момент 22:40 пятницы 20 марта 2020 года все еще окончательно не подтвержден лабораторией из Новосибирска.</i><br/>\\n<br/>\\n<img alt=\\"image\\" src=\\"https://habrastorage.org/getpro/habr/post_images/6a6/2b5/70b/6a62b570b638573d5e02153da09906d2.jpg\\"/><br/>\\n<br/>\\r\\nЯ три дня наблюдал за развитием этой истории и сначала она напоминала начало сюжета проходного фильма про очередную эпидемию, но по после того, как губернатор Ставропольского края трижды записал видеообращения для своих подписчиков, стало понятно, что все мега-серьезно. Ситуация быстро развилась от смешного к страшному.<br/>\\n<br/>\\r\\nЯ постараюсь изложить сухие факты, которые можно перекрестно проверить по нескольким источникам.<br/>\\n<br/>\\r\\nИ так знакомьтесь, <a href=\\"http://stgmu.ru/?s=academy&amp;k=chairs&amp;id=47&amp;page=employees&amp;mode=1&amp;eid=593\\" rel=\\"nofollow\\">Санникова Ирина Викторовна</a>, д.м.н., профессор, преподаватель Ставропольского государственного медицинского университета. В течение 13 лет (с 2002 г.) осуществляет по совмещению с основной трудовой деятельностью обязанности главного <a href=\\"https://spb.docdoc.ru/library/infectologia/chto_lechit_infekcionist\\" rel=\\"nofollow\\">инфекциониста</a> министерства здравоохранения Ставропольского края.<br/>\\n<br/>\\n<img alt=\\"image\\" src=\\"https://habrastorage.org/getpro/habr/post_images/1ba/ad9/d92/1baad9d92e9d2396e32b9596792c18b9.jpg\\"/><br/>\\n<br/>"},{"title":"Как лечат коронавирус?","date":"вчера в 21:48","html":"На сегодняшний день не существует подтвержденного лекарства от COVID-19. Организм заболевших сам побеждает (или не побеждает) вирус с помощью иммунитета. <br/>\\n<br/>\\r\\nВ некоторых случаях болезнь протекает тяжелее, развивается пневмония, и тогда пациентам нужна поддерживающая и симптоматическая терапия: внутривенное вливание жидкостей для предотвращения обезвоживания и дополнительный кислород, если легкие функционируют хуже. В наиболее тяжелых случаях пациентам требуются аппараты искусственной вентиляции легких (ИВЛ) или даже экстракорпоральная мембранная оксигенация (ЭКМО). Количество аппаратов ИВЛ и ЭКМО очень ограничено, а тяжелые пациенты с коронавирусом проводят в реанимации по <a href=\\"https://www.bmj.com/content/bmj/368/bmj.m1065.full.pdf\\" rel=\\"nofollow\\">несколько недель</a>. Поэтому велика опасность, что места в реанимации быстро закончатся, как это уже произошло в Италии. <br/>\\n<br/>\\n<h4>Очевидно, встает вопрос, что еще может помочь организму бороться с вирусом?</h4><br/>\\n<b>К сожалению, хорошего ответа на этот вопрос пока нет. <br/>\\n</b><br/>\\r\\nИдеальное лекарство против COVID-19 должно помочь выживать пациентам с ослабленным иммунным статусом, ускорить выздоровление остальных, а также снизить число случаев пневмонии и синдрома острой дыхательной недостаточности, которые, собственно, и вызывают такую высокую смертность от вируса. <br/>"}]}')},cf5c:function(t,e,r){},ec0b:function(t,e,r){"use strict";var a=r("a205"),n=r.n(a);n.a},ecba:function(t,e,r){},effe:function(t,e,r){"use strict";var a=r("2449"),n=r.n(a);n.a},fb98:function(t,e,r){}});
//# sourceMappingURL=app.ed66d5f5.js.map