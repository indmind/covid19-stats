(function(t){function e(e){for(var n,a,c=e[0],u=e[1],i=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"3d70":function(t,e,r){"use strict";var n=r("d034"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("4de4"),r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("COVID-19 Stats")]),r("br"),r("h2",[t._v("Global Statistics")]),r("stats",{attrs:{confirmed:t.stats.confirmed.value,deaths:t.stats.deaths.value,recovered:t.stats.recovered.value}}),r("br"),r("h2",[t._v("Country Statistics")]),r("country-stats")],1)},s=[],a=r("5530"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"stats"}},[r("div",{staticClass:"stat-item box-confirmed"},[r("h3",[t._v("Confirmed")]),r("p",[t._v(t._s(t._f("formatNumber")(t.confirmed)))])]),r("div",{staticClass:"stat-item box-deaths"},[r("h3",[t._v("Deaths")]),r("p",[t._v(t._s(t._f("formatNumber")(t.deaths)))])]),r("div",{staticClass:"stat-item box-recovered"},[r("h3",[t._v("Recovered")]),r("p",[t._v(t._s(t._f("formatNumber")(t.recovered)))])])])},u=[],i=(r("a9e3"),{props:{confirmed:{type:Number,default:0},deaths:{type:Number,default:0},recovered:{type:Number,default:0}}}),l=i,d=(r("3d70"),r("2877")),f=Object(d["a"])(l,c,u,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"country-stats"}},[r("model-select",{staticClass:"modal-select",attrs:{options:t.countries,placeholder:"select item2"},model:{value:t.currentSelectedCountry,callback:function(e){t.currentSelectedCountry=e},expression:"currentSelectedCountry"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:t.countryStatsError,expression:"countryStatsError"}]},[t._v(" "+t._s(t.countryStatsError)+" ")]),r("stats",{directives:[{name:"show",rawName:"v-show",value:!t.countryStatsError,expression:"!countryStatsError"}],attrs:{confirmed:t.selectedCountryStats.confirmed.value,deaths:t.selectedCountryStats.deaths.value,recovered:t.selectedCountryStats.recovered.value}})],1)},h=[],m=(r("d81d"),r("4fad"),r("3835")),b=r("b410"),y=r("2f62"),S={components:{Stats:p,ModelSelect:b["ModelSelect"]},mounted:function(){this.$store.dispatch("loadCountries"),this.$store.dispatch("setCountry","ID")},data:function(){return{currentSelectedCountry:"ID"}},computed:Object(a["a"])({countries:function(){return Object.entries(this.$store.state.countries).map((function(t){var e=Object(m["a"])(t,2),r=e[0],n=e[1];return{value:n,text:r}}))}},Object(y["b"])(["countryStatsError","selectedCountryStats"])),watch:{currentSelectedCountry:function(t){this.$store.dispatch("setCountry",t)}}},C=S,g=(r("83fe"),Object(d["a"])(C,v,h,!1,null,null,null)),_=g.exports,w={name:"App",components:{Stats:p,CountryStats:_},computed:Object(a["a"])({},Object(y["b"])(["stats"])),mounted:function(){this.$store.dispatch("loadGlobalStats")}},O=w,j=(r("034f"),Object(d["a"])(O,o,s,!1,null,null,null)),x=j.exports,E=r("9483");Object(E["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var N=r("bc3a"),k=r.n(N);n["a"].use(y["a"]);var $=new y["a"].Store({state:{stats:{confirmed:{value:0},deaths:{value:0},recovered:{value:0}},selectedCountryStats:{confirmed:{value:0},deaths:{value:0},recovered:{value:0}},countries:{},selectedCountry:"ID",statsError:!1,countryStatsError:!1},mutations:{setStats:function(t,e){t.stats=e},setCountries:function(t,e){t.countries=e},setSelectedCountry:function(t,e){t.selectedCountry=e},setCountryError:function(t,e){t.countryStatsError=e||!1}},actions:{loadGlobalStats:function(){var t=this;k.a.get("https://covid19.mathdro.id/api/").then((function(e){t.commit("setStats",e.data)}))},loadCountries:function(){var t=this;k.a.get("https://covid19.mathdro.id/api/countries").then((function(e){t.commit("setCountries",e.data.countries)}))},setCountry:function(t,e){var r=this;this.commit("setSelectedCountry",e),this.commit("setCountryError",!1),k.a.get("https://covid19.mathdro.id/api/countries/".concat(e)).then((function(t){r.commit("setSelectedCountry",t.data)})).catch((function(t){r.commit("setCountryError",t)}))}},modules:{}});r("41e9");n["a"].config.productionTip=!1,n["a"].filter("formatNumber",(function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})),new n["a"]({store:$,render:function(t){return t(x)}}).$mount("#app")},"83fe":function(t,e,r){"use strict";var n=r("c4a4"),o=r.n(n);o.a},"85ec":function(t,e,r){},c4a4:function(t,e,r){},d034:function(t,e,r){}});
//# sourceMappingURL=app.8f11e084.js.map