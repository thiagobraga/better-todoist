// ==UserScript==
// @name          Better Todoist
// @description   A better appearance for Todoist
// @version       0.1.0
// @author        Thiago Braga <contato@thiagobraga.org>
// @license       MIT
// @namespace     https://github.com/thiagobraga
// @homepageURL   https://github.com/thiagobraga/better-todoist
// @supportURL    https://github.com/thiagobraga/better-todoist/issues
// @updateURL     https://github.com/thiagobraga/better-todoist/raw/master/release/theme.meta.js
// @downloadURL   https://github.com/thiagobraga/better-todoist/raw/master/release/theme.user.js
// @run-at        document-start
// @include       http://todoist.com/*
// @include       https://todoist.com/*
// @include       http://*.todoist.com/*
// @include       https://*.todoist.com/*
// ==/UserScript==
(function() {var css = [
  "  @font-face{font-family:PT Sans;font-style:normal;font-weight:400;src:local(\"PT Sans\"),local(\"PTSans-Regular\"),url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0-ExdGM.woff2) format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:PT Sans;font-style:normal;font-weight:400;src:local(\"PT Sans\"),local(\"PTSans-Regular\"),url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0aExdGM.woff2) format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:PT Sans;font-style:normal;font-weight:400;src:local(\"PT Sans\"),local(\"PTSans-Regular\"),url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0yExdGM.woff2) format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:PT Sans;font-style:normal;font-weight:400;src:local(\"PT Sans\"),local(\"PTSans-Regular\"),url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0KExQ.woff2) format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:PT Mono;font-style:normal;font-weight:400;src:local(\"PT Mono\"),local(\"PTMono-Regular\"),url(https://fonts.gstatic.com/s/ptmono/v5/9oRONYoBnWILk-9AnCIzM-Py.woff2) format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:PT Mono;font-style:normal;font-weight:400;src:local(\"PT Mono\"),local(\"PTMono-Regular\"),url(https://fonts.gstatic.com/s/ptmono/v5/9oRONYoBnWILk-9AnCszM-Py.woff2) format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:PT Mono;font-style:normal;font-weight:400;src:local(\"PT Mono\"),local(\"PTMono-Regular\"),url(https://fonts.gstatic.com/s/ptmono/v5/9oRONYoBnWILk-9AnCEzM-Py.woff2) format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:PT Mono;font-style:normal;font-weight:400;src:local(\"PT Mono\"),local(\"PTMono-Regular\"),url(https://fonts.gstatic.com/s/ptmono/v5/9oRONYoBnWILk-9AnC8zMw.woff2) format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}*{font-family:PT Sans,sans-serif!important}code{font-family:PT Mono,monospace}.theme_dark #app_holder>#content .items .text,.theme_dark #app_holder>#content .project_history .text,.theme_dark #app_holder>#left_menu .expansion_panel .panel_summary h5{color:hsla(0,0%,100%,.7)}#left_menu,#list_holder{width:230px}#content{margin-left:249px}#editor{width:auto!important;padding-right:0}#quick_find{margin-left:292px}.priority_1 .ist_checkbox,.priority_2 .ist_checkbox,.priority_3 .ist_checkbox,.priority_4 .ist_checkbox{background-color:transparent}body .priority_1 .ist_checkbox,body .priority_2 .ist_checkbox,body .priority_3 .ist_checkbox,body .priority_4 .ist_checkbox{-webkit-border-radius:0;border-radius:0}body .priority_2 .ist_checkbox,body .priority_3 .ist_checkbox,body .priority_4 .ist_checkbox{border-width:1px!important;width:16px;height:16px}.priority_1 .ist_checkbox:hover,.priority_2 .ist_checkbox:hover,.priority_3 .ist_checkbox:hover,.priority_4 .ist_checkbox:hover{background-color:transparent}:not(.theme_dark) .priority_1 .ist_checkbox{border-color:#d1d1d1}.theme_dark .priority_1 .ist_checkbox{border-color:#666}.task_item .checker{padding-right:10px}.subsection_header{margin-right:30px}.theme_dark #app_holder>#content .items .task_item .content,.theme_dark #app_holder>#content .items .task_item .task_content_item,.theme_dark #app_holder>#content .items .task_item td.checker,.theme_dark #app_holder>#content .project_history .task_item .content,.theme_dark #app_holder>#content .project_history .task_item .task_content_item,.theme_dark #app_holder>#content .project_history .task_item td.checker,.theme_dark #app_holder>#content .subsection_header,.theme_dark #app_holder>#left_menu .expansion_panel{border-bottom-color:hsla(0,0%,100%,.03)}.agenda_item__time{border:1px solid #d1d1d1;font-size:11px;margin-right:8px;min-width:inherit!important;padding-left:5px}#agenda_view .column_time div{line-height:16px}.theme_dark .agenda_item__time{border-color:#666}#agenda_view .agenda_item__time_overdue span{color:#d04949!important}.project_item__color{-webkit-border-radius:8px;border-radius:8px;width:8px;height:8px;margin-top:5px}#ist_complete_result .project:before,#projects_archived_ul .project:before,#projects_list .project:before{width:8px;height:8px}.generic_left_list li table td.td_color{min-width:28px}span.emoji{font-size:12px}img.emoji{width:12px;height:12px}.project_item__name span.emoji{font-size:9.6px}.project_item__name img.emoji{width:9.6px;height:9.6px}.project_shared svg{-webkit-transform:scale(.8);transform:scale(.8)}.note_content code,.task_content_item code{font-size:12px;padding:1px 4px}",
  ""
].join("\n");
if (typeof GM_addStyle != "undefined") {
  GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
  PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
  addStyle(css);
} else {
  var node = document.createElement("style");
  node.type = "text/css";
  node.appendChild(document.createTextNode(css));
  var heads = document.getElementsByTagName("head");
  if (heads.length > 0) {
    heads[0].appendChild(node);
  } else {
    // no head yet, stick it whereever
    document.documentElement.appendChild(node);
  }
}
})();
