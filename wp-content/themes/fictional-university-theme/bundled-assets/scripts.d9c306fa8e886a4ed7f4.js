!function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],h=0,u=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(t);u.length;)u.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={0:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([3,1]),s()}([,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(2);var a=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},n=s(1);var i=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let s=0;s<e;s++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${s}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new n.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}},r=s(0),o=s.n(r);var l=class{constructor(){this.addSearchHTML(),this.resultsDiv=o()("#search-overlay__results"),this.openButton=o()(".js-search-trigger"),this.closeButton=o()(".search-overlay__close"),this.searchOverlay=o()(".search-overlay"),this.searchField=o()("#search-term"),this.events(),this.isOverlayOpen=!1,this.isSpinnerVisible=!1,this.previousValue,this.typingTimer}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this)),o()(document).on("keydown",this.keyPressDispatcher.bind(this)),this.searchField.on("keyup",this.typingLogic.bind(this))}typingLogic(){this.searchField.val()!=this.previousValue&&(clearTimeout(this.typingTimer),this.searchField.val()?(this.isSpinnerVisible||(this.resultsDiv.html('<div class="spinner-loader"></div>'),this.isSpinnerVisible=!0),this.typingTimer=setTimeout(this.getResults.bind(this),750)):(this.resultsDiv.html(""),this.isSpinnerVisible=!1)),this.previousValue=this.searchField.val()}getResults(){o.a.getJSON(universityData.root_url+"/wp-json/university/v1/search?term="+this.searchField.val(),e=>{this.resultsDiv.html(`\n      <div class="row">\n      <div class="one-third">\n      <h2 class="search-overlay__section-title">General Information</h2>\n      ${e.generalInfo.length?'<ul class="link-list min-list">':"<p>No general information matches that search.</p>"}\n${e.generalInfo.map(e=>`<li><a href="${e.permalink}">${e.title}</a> ${"post"==e.postType?"by "+e.authorName:""}</li>`).join("")}\n${e.generalInfo.length?"</ul>":""}\n      </div>\n      <div class="one-third">\n      <h2 class="search-overlay__section-title">Programs</h2>\n      ${e.programs.length?'<ul class="link-list min-list">':`<p>No programs match that search. <a href="${universityData.root_url}/programs">View all programs</a></p>`}\n${e.programs.map(e=>`<li><a href="${e.permalink}">${e.title}</a></li>`).join("")}\n${e.programs.length?"</ul>":""}\n      <h2 class="search-overlay__section-title">Professors</h2>\n      ${e.professors.length?'<ul class="professor-cards">':"<p>No professors match that search.</p>"}\n${e.professors.map(e=>`\n<li class="professor-card__list-item">\n   <a class="professor-card" href="${e.permalink}">\n   <img class="professor-card__image" src="${e.image}">\n<span class="professor-card__name">${e.title}</span>\n  </a>\n</li>\n`).join("")}\n${e.professors.length?"</ul>":""}\n      </div>\n      <div class="one-third">\n      <h2 class="search-overlay__section-title">Campuses</h2>\n      ${e.campuses.length?'<ul class="link-list min-list">':`<p>No campuses match that search. <a href="${universityData.root_url}/campuses">View all campuses</a></p>`}\n      ${e.campuses.map(e=>`<li><a href="${e.permalink}">${e.title}</a> ${"post"==e.postType?"by "+e.authorName:""}</li>`).join("")}\n      ${e.campuses.length?"</ul>":""}\n\n      <h2 class="search-overlay__section-title">Events</h2>\n      ${e.events.length?"":`<p>No events match that search. <a href="${universityData.root_url}/events">View all events</a></p>`}\n      ${e.events.map(e=>`\n      <div class="event-summary">\n          <a class="event-summary__date t-center" href="${e.permalink}">\n            <span class="event-summary__month">${e.month}</span>\n            <span class="event-summary__day">${e.day}</span>  \n          </a>\n          <div class="event-summary__content">\n            <h5 class="event-summary__title headline headline--tiny"><a href="${e.permalink}">${e.title}</a></h5>\n            <p>${e.description}<a href="${e.permalink}" class="nu gray">Learn more</a></p>\n          </div>\n        </div>\n      `).join("")}\n      </div>\n      </div>\n      `),this.isSpinnerVisible=!1})}keyPressDispatcher(e){83!=e.keyCode||this.isOverlayOpen||o()("input, textarea").is(":focus")||this.openOverlay(),27==e.keyCode&&this.isOverlayOpen&&this.closeOverlay()}openOverlay(){return this.searchOverlay.addClass("search-overlay--active"),o()("body").addClass("body-no-scroll"),this.searchField.val(""),setTimeout(()=>this.searchField.focus(),301),console.log("our open method just ran!"),this.isOverlayOpen=!0,!1}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active"),o()("body").removeClass("body-no-scroll"),console.log("our close method just ran!"),this.isOverlayOpen=!1}addSearchHTML(){o()("body").append('\n    <div class="search-overlay">\n  <div class="search-overlay__top">\n    <div class="container">\n      <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>\n<input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">\n<i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>\n    </div>\n  </div>\n\n<div class="container">\n<div id="search-overlay__results"></div>\n\n</div>\n</div>\n    ')}};var c=class{constructor(){this.events()}events(){o()("#my-notes").on("click",".delete-note",this.deleteNote),o()("#my-notes").on("click",".edit-note",this.editNote.bind(this)),o()("#my-notes").on("click",".update-note",this.updateNote.bind(this)),o()(".submit-note").on("click",this.createNote.bind(this))}editNote(e){var t=o()(e.target).parents("li");"editable"==t.data("state")?this.makeNoteReadOnly(t):this.makeNoteEditable(t)}makeNoteEditable(e){e.find(".edit-note").html('<i class="fa fa-times" aria-hidden="true"></i> Cancel'),e.find(".note-title-field, .note-body-field").removeAttr("readonly").addClass("note-active-field"),e.find(".update-note").addClass("update-note--visible"),e.data("state","editable")}makeNoteReadOnly(e){e.find(".edit-note").html('<i class="fa fa-pencil" aria-hidden="true"></i> Edit'),e.find(".note-title-field, .note-body-field").attr("readonly","readonly").removeClass("note-active-field"),e.find(".update-note").removeClass("update-note--visible"),e.data("state","cancel")}deleteNote(e){var t=o()(e.target).parents("li");o.a.ajax({beforeSend:e=>{e.setRequestHeader("X-WP-Nonce",universityData.nonce)},url:universityData.root_url+"/wp-json/wp/v2/note/"+t.data("id"),type:"DELETE",success:e=>{t.slideUp(),console.log("Congrats"),console.log(e),e.userNoteCount<5&&o()(".note-limit-message").removeClass("active")},error:e=>{console.log("Sorry"),console.log(e)}})}updateNote(e){var t=o()(e.target).parents("li"),s={title:t.find(".note-title-field").val(),content:t.find(".note-body-field").val()};o.a.ajax({beforeSend:e=>{e.setRequestHeader("X-WP-Nonce",universityData.nonce)},url:universityData.root_url+"/wp-json/wp/v2/note/"+t.data("id"),type:"POST",data:s,success:e=>{this.makeNoteReadOnly(t),console.log("Congrats"),console.log(e)},error:e=>{console.log("Sorry"),console.log(e)}})}createNote(e){var t={title:o()(".new-note-title").val(),content:o()(".new-note-body").val(),status:"publish"};o.a.ajax({beforeSend:e=>{e.setRequestHeader("X-WP-Nonce",universityData.nonce)},url:universityData.root_url+"/wp-json/wp/v2/note/",type:"POST",data:t,success:e=>{o()(".new-note-title, .new-note-body").val(""),o()(`\n    <li data-id="${e.id}">\n    <input readonly class="note-title-field" value="${e.title.raw}">\n    <span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</span>\n    <span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</span>\n    <textarea readonly class="note-body-field">${e.content.raw}</textarea>\n    <span class="update-note btn btn--blue btn--small"><i class="fa fa-arrow-right" aria-hidden="true"></i>Save</span>\n    </li>\n    `).prependTo("#my-notes").hide().slideDown(),console.log("Congrats"),console.log(e)},error:e=>{"You have reached your note limit."==e.responseText&&o()(".note-limit-message").addClass("active"),console.log("Sorry"),console.log(e)}})}};var d=class{constructor(){this.events()}events(){o()(".like-box").on("click",this.ourClickDispatcher.bind(this))}ourClickDispatcher(e){var t=o()(e.target).closest(".like-box");"yes"==t.attr("data-exists")?this.deleteLike(t):this.createLike(t)}createLike(e){o.a.ajax({beforeSend:e=>{e.setRequestHeader("X-WP-Nonce",universityData.nonce)},url:universityData.root_url+"/wp-json/university/v1/manageLike",type:"POST",data:{professorId:e.data("professor")},success:t=>{e.attr("data-exists","yes");var s=parseInt(e.find(".like-count").html(),10);s++,e.find(".like-count").html(s),e.attr("date-like",t),console.log(t)},error:e=>{console.log(e)}})}deleteLike(e){o.a.ajax({beforeSend:e=>{e.setRequestHeader("X-WP-Nonce",universityData.nonce)},url:universityData.root_url+"/wp-json/university/v1/manageLike",data:{like:e.attr("data-like")},type:"DELETE",success:t=>{e.attr("data-exists","no");var s=parseInt(e.find(".like-count").html(),10);s--,e.find(".like-count").html(s),e.attr("date-like",""),console.log(t)},error:e=>{console.log(e)}})}};new a,new i;new l,new c,new d}]);