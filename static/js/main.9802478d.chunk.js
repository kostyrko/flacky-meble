(this["webpackJsonpflacky-meble"]=this["webpackJsonpflacky-meble"]||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),o=(t(27),t(28),t(9)),i=t(2),m=function(){return c.a.createElement("main",{className:"services-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text-info-1"},c.a.createElement("h2",null,"Wykonujemy meble na wymiar."),c.a.createElement("p",null,"Specjalizujemy si\u0119 w zabudowach kuchennych."),c.a.createElement("div",{className:"offer"},c.a.createElement("h3",{className:"offer-header"},"Oferujemy:"),c.a.createElement("ul",{className:"offer-list"},c.a.createElement("li",null,"pomiar, projekt i wycen\u0119"),c.a.createElement("li",null,"profesjonalne doradztwo dotycz\u0105ce mo\u017cliwych rozwi\u0105za\u0144"),c.a.createElement("li",null,"wykonanie mebli wed\u0142ug naszego projektu lub wed\u0142ug projektu innego projektanta"),c.a.createElement("li",null,"transport i monta\u017c mebli u klienta")))),c.a.createElement("div",{className:"about-photo-1"}),c.a.createElement("div",{className:"text-info-2"},c.a.createElement("h3",{className:"work-header"},"Jak pracujemy?"),c.a.createElement("ol",{className:"work-list"},c.a.createElement("li",null,"Zaczynamy od spotkania i rozmowy, podczas kt\xf3rej chcemy uzyska\u0107 jak najwi\u0119cej informacji na temat potrzeb klient\xf3w i ich wyobra\u017cenia na temat planowanej zabudowy. Dysponujemy wzornikami, katalogami oraz wiedz\u0105 na temat wad i zalet r\xf3\u017cnych rozwi\u0105za\u0144. Wsp\xf3\u0142pracujemy z najlepszymi dostawcami r\xf3\u017cnorodnych materia\u0142\xf3w, oku\u0107 i system\xf3w meblowych. Osoby, kt\xf3re rozmawiaj\u0105 z klientami wykonuj\u0105 p\xf3\u017aniej projekt dla nich i montuj\u0105 meble, co oznacza, \u017ce naprawd\u0119 wiedz\u0105 o czym m\xf3wi\u0105."),c.a.createElement("li",null,"Po ustaleniu szczeg\xf3\u0142\xf3w i dokonaniu pomiar\xf3w u klienta, wykonujemy projekt oraz wizualizacj\u0119. Nast\u0119pnie projekt jest ponownie konsultowany."),c.a.createElement("li",null,"Zatwierdzony projekt jest indywidualnie wyceniany (z uwzgl\u0119dnieniem cen wybranych przez klienta materia\u0142\xf3w, oku\u0107 i system\xf3w) oraz gabaryt\xf3w planowanej zabudowy meblowej."),c.a.createElement("li",null,"Nast\u0119pnie realizujemy projekt w terminie i na warunkach indywidualnie ustalonych z klientami."))),c.a.createElement("div",{className:"about-photo-2"})))},s=t(3),u="0fdf2fb844ae7522e3cb66f51d688f90",p="https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=".concat(u,"&user_id=").concat("190195340@N08","&format=json&nojsoncallback=?"),d=function(e){var a=e.albumId,t=Object(n.useState)([]),r=Object(s.a)(t,2),l=r[0],o=r[1],i=a.id,m=a.title;return Object(n.useEffect)((function(){(function(e){var a="https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat(u,"&photoset_id=").concat(e,"&user_id=").concat("190195340@N08","&extras=").concat("url_m","&format=json&nojsoncallback=?");return fetch(a).then((function(e){if(e.ok)return e.json();throw new Error("B\u0142\u0105d sieci")}))})(i).then((function(e){var a=[];e.photoset.photo.forEach((function(e){a.push(e.url_m)})),o(a)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"photo-album"},c.a.createElement("h3",null,m),c.a.createElement("ul",{className:"photo-list"},l.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:e,alt:""}))}))))},y=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch(p).then((function(e){if(e.ok)return e.json();throw new Error("B\u0142\u0105d sieci")})).then((function(e){var a=[];e.photosets.photoset.forEach((function(e){a.push({id:e.id,title:e.title._content})})),r(a)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("main",{className:"portfolio"},c.a.createElement("div",{className:"portfolio-container"},c.a.createElement("h2",null,"Zrealizowane przez nas projekty"),c.a.createElement("div",{className:"albums-container"},t.length>0?t.map((function(e){return c.a.createElement(d,{key:e.id,albumId:e})})):null)))},w=t(8),h=t(1),E=function(e){var a=e.onChange;return c.a.createElement("div",{className:"walls-option"},c.a.createElement("label",{htmlFor:"wallNum"},"Ilo\u015b\u0107 \u015bcian do zabudowy"),c.a.createElement("div",{onChange:function(e){return a(e)}},c.a.createElement("input",{type:"radio",value:1,name:"wallNum"})," 1",c.a.createElement("input",{type:"radio",value:2,name:"wallNum"})," 2"))},k={upperUnits:{type1:{name:"typ-1",width:60,height:100,price:600,src:"https://0.allegroimg.com/s512/01bb1a/353539834e5bafa3415988702360/Szafka-kuchenna-wiszaca-sonoma-80cm"},type2:{name:"typ-2",width:55,height:100,price:500,src:"https://sklep.akord.net.pl/4006-large_default/wiszaca-szafka-kuchenna-oliwia-w-60cm-biala.jpg"},type3:{name:"typ-3",width:55,height:80,lining:"lakier",price:450,src:"https://0.allegroimg.com/s512/01bb1a/353539834e5bafa3415988702360/Szafka-kuchenna-wiszaca-sonoma-80cm"}},lowerUnits:{type3:{name:"typ-3",width:50,height:100,price:400,src:"https://github.com/kostyrko/flacky-meble/blob/dev/img/typ1.jpg?raw=true"},type4:{name:"typ-4",width:45,height:100,price:300,src:"https://github.com/kostyrko/flacky-meble/blob/dev/img/typ1.jpg?raw=true"}}},f=function(e){var a=e.addNewUnit,t=e.typeOfUnits,n=e.type,r=e.info,l=r.name,o=r.height,i=r.width,m=r.price,s=r.src;return c.a.createElement("div",{className:"option"},c.a.createElement("h3",null,"Szafka ",l),c.a.createElement("p",null,"Cena wyj\u015bciowa: ",m," pln"),c.a.createElement("p",null,"Wysoko\u015b\u0107: ",o," cm"),c.a.createElement("p",null,"Szeroko\u015b\u0107 wyj\u015bciowa: ",i," cm"),c.a.createElement("img",{src:s,alt:l}),c.a.createElement("button",{className:"btn-1",onClick:function(e){return function(e){e.preventDefault(),a({name:l,price:m,width:i,height:o,type:n,typeOfUnits:t})}(e)}},"Dodaj"))},b=function(e){var a=e.addNewUnit,t=e.kitchenUnits,n=Object.keys(t.upperUnits),r=Object.keys(t.lowerUnits);return c.a.createElement("div",{className:"kitchen-units"},c.a.createElement("h4",null,"Szafki wisz\u0105ce"),c.a.createElement("div",{className:"options"},n.map((function(e,n){return c.a.createElement(f,{type:e,key:n,info:t.upperUnits[e],addNewUnit:a,typeOfUnits:"upperUnits"})}))),c.a.createElement("h4",null,"Szafki stoj\u0105ce"),c.a.createElement("div",{className:"options"},r.map((function(e,n){return c.a.createElement(f,{type:e,key:n,info:t.lowerUnits[e],addNewUnit:a,typeOfUnits:"lowerUnits"})}))))},j=function(e){var a=e.info,t=a.id,n=a.width,r=a.height,l=a.name,o=a.typeOfUnits,i={width:n,border:"1px solid black",height:r},m=Object(h.a)({},i);return c.a.createElement("div",{className:o,style:m},c.a.createElement("p",null,l),c.a.createElement("p",null,"nr ",t))},z=function(e){var a=e.info,t=e.handleInput,n=e.handleDelete,r=e.elem,l=a.id,o=a.name,i=a.width,m=a.price,s=a.height,u=a.typeOfUnits;return c.a.createElement("li",null,c.a.createElement("h3",null,"Nazwa ",o),c.a.createElement("p",null,"nr: ",l),c.a.createElement("p",null,"Cena ",m),c.a.createElement("p",null,"Wysoko\u015b\u0107 ",s," cm"),c.a.createElement("p",null,"Szeroko\u015b\u0107 ",i," cm"),c.a.createElement("input",{type:"number","data-type":u,value:i,name:r,onChange:t}),c.a.createElement("button",{name:r,"data-type":u,onClick:function(e){return function(e){e.preventDefault(),n(e)}(e)},className:"btn-2 btn-3"},"Usu\u0144"))},g=function(e){var a=e.type,t=e.handleInput,n=e.handleDelete;e.handleRadio;return c.a.createElement(c.a.Fragment,null,a&&Object.keys(a).map((function(e){return c.a.createElement(z,{key:e,elem:e,handleInput:t,handleDelete:n,info:a[e]})})))},v=function(e){var a=e.num,t=e.handleConfirmation,r=Object(n.useState)({width:350,height:250}),l=Object(s.a)(r,2),o=l[0],i=l[1],m=o.width,u=o.height,p=Object(h.a)({backgroundColor:"lightgray"},o);Object(n.useEffect)((function(){window.matchMedia("(max-width: 400px)").matches&&(console.log("matches"),i({height:250,width:250}))}),[]);var d=function(e){var a=e.target,t=a.name,n=a.value;i(Object(h.a)(Object(h.a)({},o),{},Object(w.a)({},t,parseInt(n))))},y=Object(n.useState)({}),E=Object(s.a)(y,2),f=E[0],z=E[1],v=f.lowerUnits,N=f.upperUnits,O=Object(n.useState)(1),S=Object(s.a)(O,2),U=S[0],x=S[1],C=Object(n.useState)(0),D=Object(s.a)(C,2),F=D[0],I=D[1],P=Object(n.useState)(0),W=Object(s.a)(P,2),R=W[0],_=W[1],M=Object(n.useState)("lakier"),Z=Object(s.a)(M,2),A=Z[0],T=Z[1],B=function(){var e=[];Object.keys(f).forEach((function(a){return Object.keys(f[a]).forEach((function(t){return e.push(f[a][t].price)}))}));var a=e.reduce((function(e,a){return e+a}),0);I(a)},L=function(){var e;"lakier"===A&&(e=0),"fornir"===A&&(e=50),"melamina"===A&&(e=75),_(F+e)};Object(n.useEffect)((function(){B()}),[f,B]),Object(n.useEffect)((function(){L()}),[F,A,L]);var q=function(e){var a=e.target,t=a.value,n=a.name,c=a.dataset;z(Object(h.a)(Object(h.a)({},f),{},Object(w.a)({},c.type,Object(h.a)(Object(h.a)({},f[c.type]),{},Object(w.a)({},n,Object(h.a)(Object(h.a)({},f[c.type][n]),{},{price:10*parseInt(t),width:parseInt(t)}))))))},H=function(e){var a=e.target,t=a.dataset,n=a.name,c=Object(h.a)({},f);delete c[t.type][n],z(Object(h.a)({},c))},J={type:"radio",name:"lining",onChange:function(e){var a=e.target.value;console.log("value handleRadioInput:",a),T(a)}};return c.a.createElement("div",{className:"wall-container"},c.a.createElement("h3",null,"\u015aciana nr ",a),c.a.createElement("p",null,"prosz\u0119 wpisa\u0107 wymiary (w cm)"),c.a.createElement("label",{htmlFor:"width"},"Szeroko\u015b\u0107 \u015bciany w cm"),c.a.createElement("input",{name:"width",type:"number",value:m,onChange:d,className:"cm-input"}),c.a.createElement("label",{htmlFor:"height"},"Wysoko\u015b\u0107 \u015bciany w cm"),c.a.createElement("input",{name:"height",type:"number",value:u,onChange:d,className:"cm-input"}),c.a.createElement("div",{className:"walls-drawing"},c.a.createElement("div",{className:"wall",style:p},c.a.createElement("div",{className:"upperUnitsDrawing"},N&&Object.keys(N).map((function(e){return c.a.createElement(j,{key:e,info:N[e]})}))),c.a.createElement("div",{className:"lowerUnitsDrawing"},v&&Object.keys(v).map((function(e){return c.a.createElement(j,{key:e,info:v[e]})}))))),c.a.createElement("div",{className:"summery"},c.a.createElement("p",null,"Suma: ",R),c.a.createElement("label",{htmlFor:"lining-options"},"Rodzaj ok\u0142adziny"),c.a.createElement("div",{name:"lining-options",className:"radio-form"},c.a.createElement("input",Object.assign({},J,{value:"lakier",id:"lakier"}))," Lakierowana",c.a.createElement("input",Object.assign({},J,{value:"fornir",id:"fornir"}))," Fornir",c.a.createElement("input",Object.assign({},J,{value:"melamina",id:"melamina"}))," Melamina"),c.a.createElement("button",{className:"btn-1 confirm",onClick:function(e){return function(e){console.log("clicked"),e.preventDefault(),t(f,R,A,a,o)}(e)}},"Zatwierdzam wyb\xf3r")),c.a.createElement("ul",{className:"upperUnits"},c.a.createElement(g,{type:N,handleInput:q,handleDelete:H})),c.a.createElement("ul",{className:"lowerUnits"},c.a.createElement(g,{type:v,handleInput:q,handleDelete:H})),c.a.createElement(b,{addNewUnit:function(e){var a=e.type,t=e.typeOfUnits;x((function(e){return e+1})),z(Object(h.a)(Object(h.a)({},f),{},Object(w.a)({},t,Object(h.a)(Object(h.a)({},f[t]),{},Object(w.a)({},"".concat(a,"_").concat(U),Object(h.a)(Object(h.a)({},e),{},{id:U}))))))},kitchenUnits:k}))},N=function(e){var a=e.data;return c.a.createElement(c.a.Fragment,null,Object.keys(a).map((function(e){var t=a[e],n=t.num,r=t.price,l=t.lining,o=t.upperUnits,i=t.lowerUnits,m=t.dimensions;return c.a.createElement("div",{key:n},c.a.createElement("h3",null,"\u015aciana ",n),c.a.createElement("p",null,"Podane wymiary \u015bciany szeroko\u015b\u0107: ",m.width," cm, wysoko\u015b\u0107 ",m.height," cm "),c.a.createElement("p",null," \u0141\u0105czna cena szafek na podstawie podanych danych ",r," pln"),c.a.createElement("p",null,"rodzaj ok\u0142adziny ",l),c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"upperUnits"},o&&Object.keys(o).map((function(e){var a=o[e],t=a.type,n=a.width,r=a.price;return c.a.createElement("li",{key:e}," typ: ",t," szeroko\u015b\u0107: ",n," cena: ",r)}))),c.a.createElement("ul",{className:"lowerUnits"},i&&Object.keys(i).map((function(e){var a=i[e],t=a.type,n=a.width,r=a.price;return c.a.createElement("li",{key:e}," typ: ",t," szeroko\u015b\u0107: ",n," cena: ",r)})))))})))},O=t(21),S=function(e){var a=e.data,t=Object(n.useState)(""),r=Object(s.a)(t,2),l=r[0],o=r[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],p=m[1],d=Object(n.useState)(""),y=Object(s.a)(d,2),w=y[0],h=y[1],E=Object(n.useState)(""),k=Object(s.a)(E,2),f=k[0],b=k[1],j=Object(n.useState)([]),z=Object(s.a)(j,2),g=z[0],v=z[1];Object(n.useEffect)((function(){var e=[];Object.keys(a).forEach((function(t){var n=a[t],c=n.num,r=n.price,l=n.lining,o=n.dimensions,i=n.upperUnits,m=n.lowerUnits,s=[],u=[];i&&Object.keys(i).forEach((function(e){var a=i[e],t=a.id,n=a.name,c=a.width,r=a.price;s.push(" Nr. ".concat(t," - ").concat(n," / szeroko\u015b\u0107: ").concat(c," / cena: ").concat(r,"pln "))})),m&&Object.keys(m).forEach((function(e){var a=m[e],t=a.id,n=a.name,c=a.width,r=a.price;u.push(" Nr. ".concat(t," - ").concat(n," / szeroko\u015b\u0107: ").concat(c," / cena: ").concat(r," pln"))})),e.push("\n>>\u015aciana nr ".concat(c,"<<\n\nprzewidywany koszt ").concat(r," pln \n\nrodzaj frontu: ").concat(l,"\n\n--Szafki wisz\u0105ce--\n").concat(s,"\n\n--Szafki stoj\u0105ce--\n").concat(u,"\n\nInformacje dodatkowe:\nwymiary \u015bciany - d\u0142ugo\u015b\u0107 ").concat(o.width,", wysoko\u015b\u0107 ").concat(o.height,"\n\n----------------------------\n      "))})),p([].concat(e).join(" "))}),[a]);return c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),console.log("clicked"),f.length<7||-1===f.indexOf("@"))v([].concat(Object(O.a)(g),["Email musi by\u0107 podany i mie\u0107 przynajmniej 7 znak\xf3w oraz posiada\u0107 @"]));else{v([]);var a=e.target;console.log(a);var t=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(a.reset(),h("SUCCESS")):h("ERROR"))},n.send(t)}},action:"https://formspree.io/mwkwpbjl",method:"POST",className:"contact-form"},c.a.createElement("div",{className:"validation"},g.length>0&&g.map((function(e,a){return c.a.createElement("p",{key:a},e)}))),c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",name:"email",value:f,onChange:function(e){return b(e.target.value)}}),c.a.createElement("label",{htmlFor:"textArea"},"Tu mo\u017cna wpisa\u0107 dodatkowe uwagi lub dane kontaktowe"),c.a.createElement("textarea",{name:"textArea",className:"project-summery",value:l,onChange:function(e){return o(e.target.value)}}),c.a.createElement("div",{className:"submit"},"SUCCESS"===w?c.a.createElement("p",{className:"feedback-inf"},"Dzi\u0119kujemy za przes\u0142anie projektu \u263a"):c.a.createElement("button",{className:"submit-project btn-2"},"Przesy\u0142am sw\xf3j projekt i prosz\u0119 o kontakt"),"ERROR"===w&&c.a.createElement("p",null," Ups! Co\u015b posz\u0142o nie tak \u2639 Sprawd\u017a prosz\u0119 czy adres email zosta\u0142 wpisany poprawnie ")),c.a.createElement("textarea",{name:"textArea",className:"project-summery2",value:u}))},U=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)({}),o=Object(s.a)(l,2),i=o[0],m=o[1],u=Array.from(Array(t),(function(e,a){return a+1})),p=function(e,a,t,n,c){m(Object(h.a)(Object(h.a)({},i),{},Object(w.a)({},"wall"+n,Object(h.a)({num:n,price:a,lining:t,dimensions:c},e))))};return c.a.createElement("main",{className:"calculator-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"calculator-info"},c.a.createElement("h2",null,"Zaprojektuj swoj\u0105 kuchni\u0119"),c.a.createElement("p",null,"W tym miejscu mo\u017cesz stworzy\u0107 projekt swojej kuchni, pozna\u0107 jego wst\u0119pn\u0105 wycen\u0119 oraz wys\u0142a\u0107 go do nas, a my si\u0119 z Tob\u0105 skontaktujemy w celu realizacji Twojego pomys\u0142u"),c.a.createElement("p",null,"Projekt powstanie na podstawie zaproponowanego przez nas zestawu szafek wisz\u0105cych oraz stoj\u0105cych. Mo\u017cesz dopasowa\u0107 ich szeroko\u015b\u0107 oraz wybra\u0107 odpowiedni dla Ciebie front (lakier,fornir, melamina), w cenie szafki wliczony jest uchwyt (spo\u015br\xf3d 40 do wyboru na p\xf3\u017aniejszym etapie realizacji projektu) "),c.a.createElement("div",null,c.a.createElement("p",null,"Post\u0119puj zgodnie z poni\u017cszymi krokami dzia\u0142ania"),c.a.createElement("ol",{className:"instruction-list"},c.a.createElement("li",{className:"instruction-elem"}," Wybierz ilo\u015bci \u015bcian (powierzchni), kt\xf3re maj\u0105 zosta\u0107 zabudowane (dostosuje jej wielko\u015b\u0107) "),c.a.createElement("li",{className:"instruction-elem"},"Dobierz z listy interesuj\u0105ce Ci\u0119 szafki",c.a.createElement("span",{className:"additional-info"},"(lista pojawi si\u0119 po wyborze liczby \u015bcian do zabudowy)")),c.a.createElement("li",{className:"instruction-elem"},"Dopasuj szeroko\u015b\u0107 wybranych szafek"),c.a.createElement("li",{className:"instruction-elem"},"Wybierz rodzaj pokrycia frontu"),c.a.createElement("li",{className:"instruction-elem"},"Zatwierd\u017a wyb\xf3r"),c.a.createElement("li",{className:"instruction-elem"},"W dolnej cz\u0119\u015bci strony pojawi si\u0119 wst\u0119pnie wype\u0142niony formularz  z wprowadzonymi przez Ciebie danymi, kt\xf3re mo\u017cesz do nas wys\u0142a\u0107, a my si\u0119 z Tob\u0105 skontaktujemy")))),c.a.createElement("form",{className:"project-form"},c.a.createElement(E,{onChange:function(e){r(parseInt(e.target.value))}}),u&&u.map((function(e){return c.a.createElement(v,{key:e,num:e,handleConfirmation:p})}))),Object.keys(i).length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{data:i}),c.a.createElement(S,{data:i}))))},x=function(){return c.a.createElement("main",{className:"about-section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text-info-1"},"Firma FCmeble funkcjonuje na rynku od 2009 roku, jednak mo\u017cemy pochwali\u0107 si\u0119 znacznie d\u0142u\u017cszym do\u015bwiadczeniem w bran\u017cy. Projektujemy i wykonujemy przede wszystkim zabudowy kuchenne, cho\u0107 potrafimy znacznie wi\u0119cej."),c.a.createElement("div",{className:"about-photo-1"}),c.a.createElement("div",{className:"text-info-2"},c.a.createElement("p",null,"Przychodz\u0105c do nas, mo\u017cecie Pa\u0144stwo liczy\u0107 na profesjonalne doradztwo, w kwestii pomys\u0142u na zabudow\u0119, projektu, rozwi\u0105za\u0144 technologicznych czy materia\u0142owych, oku\u0107 itp."),c.a.createElement("p",null,"Wykonujemy r\xf3wnie\u017c meble wed\u0142ug gotowych projekt\xf3w. Mamy g\u0142owy pe\u0142ne pomys\u0142\xf3w, z pasj\u0105 \u015bledzimy trendy i nowe rozwi\u0105zania na rynku (np. systemy, kt\xf3re mo\u017cna montowa\u0107 w meblach czy nowo\u015bci materia\u0142owe) i ch\u0119tnie o nich opowiadamy. Zapraszamy do skorzystania z naszych us\u0142ug.")),c.a.createElement("div",{className:"about-photo-2"})))},C=function(){return c.a.createElement("section",{className:"contact-section"},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"Wszelkie pytania oraz zam\xf3wienia prosimy kierowa\u0107 na adresy:"),c.a.createElement("p",null,"fcmeble@gmail.com"),c.a.createElement("p",null,"lub dzwoni\u0107 pod numer:  519 872 216"),c.a.createElement("p",null,"Meble na zam\xf3wienie wykonujemy g\u0142\xf3wnie na terenie Poznania. P\xf3\u0142ki wysy\u0142amy kurierem UPS do ka\u017cdego miejsca w Polsce."),c.a.createElement("p",null,"Zapraszamy do korzystania z naszej oferty!")))},D=Object(i.f)((function(e){var a=e.location;return c.a.createElement("nav",{className:"/"===a.pathname?"home":"main-nav"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo-container"},c.a.createElement("h1",{className:"logo"},c.a.createElement(o.b,{exact:!0,to:"/"}," ",c.a.createElement("span",{className:"name-1"},"Flacky"),c.a.createElement("span",{className:"name-2"}," combination"),c.a.createElement("p",{className:"logo-desc"}," ",c.a.createElement("span",null,"MEBLE na MIAR\u0118")," Twoich potrzeb")))),c.a.createElement("input",{type:"checkbox",name:"hamburger-btn",id:"toggle"}),c.a.createElement("label",{className:"toggle",htmlFor:"toggle"},c.a.createElement("div",{className:"menu-btn"},c.a.createElement("div",{className:"menu-btn__burger"}))),c.a.createElement("ul",{className:"menu hamburger-nav"},c.a.createElement("li",{className:"nav-item services"},c.a.createElement(o.b,{exact:!0,to:"/uslugi"},"Nasze us\u0142ugi")),c.a.createElement("li",{className:"nav-item about"},c.a.createElement(o.b,{exact:!0,to:"/onas"},"O nas")),c.a.createElement("li",{className:"nav-item portfolio"},c.a.createElement(o.b,{exact:!0,to:"/projekty"},"Zrealizowane projekty")),c.a.createElement("li",{className:"nav-item calculator"},c.a.createElement(o.b,{exact:!0,to:"/kalkulator"},"Wycena projektu")),c.a.createElement("li",{className:"nav-item contact"},c.a.createElement(o.b,{exact:!0,to:"/kontakt"},"Kontakt")))))})),F=function(){var e=(new Date).getFullYear();return c.a.createElement("footer",{className:"main-footer"},c.a.createElement("p",{className:"footer-desc"}," \xa9 Flacky Combination ",e," "),c.a.createElement("p",{className:"footer-author"},"projekt i wykonanie: Kostyrko"))},I=function(){return c.a.createElement(o.a,null,c.a.createElement(D,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/uslugi",component:m}),c.a.createElement(i.a,{exact:!0,path:"/projekty",component:y}),c.a.createElement(i.a,{exact:!0,path:"/kalkulator",component:U}),c.a.createElement(i.a,{exact:!0,path:"/onas",component:x}),c.a.createElement(i.a,{exact:!0,path:"/kontakt",component:C})),c.a.createElement(F,null))};var P=function(){return c.a.createElement(I,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9802478d.chunk.js.map