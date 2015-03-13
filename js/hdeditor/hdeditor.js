window.onerror = function () {
    return false
};
function hdeditor_resize(a) {
    if (HD.g[HD.id].suitsize !== false) {
        var b = document.documentElement.clientWidth || document.body.clientWidth;
        if (! (HD.CW && HD.CW == b)) {
            HD.CW = b;
            var c = HD.util.isIE6(),
            d = document.getElementsByTagName("BODY")[0],
            e = document.getElementById("hd_container");
            HD.util.getDocOffsetWidth();
            if (b > 1440) {
                d.style.marginLeft = "auto";
                d.style.marginRight = "auto";
                e.style.width = "1420px";
                e.style.left = (b - 1440) / 2 + "px";
                if (c) d.style.width = "1440px"
            } else {
                d.style.marginLeft = "10px";
                d.style.marginRight = "10px";
                e.style.width = b - 40 + "px";
                e.style.left = "10px"
            }
            if (c) e.style.left = "0px";
            HD.util.autoToolbarTop(null, a)
        }
    }
}
var UnloadConfirm = {
    info: ["\u60a8\u5bf9\u8bcd\u6761\u5185\u5bb9\u7684\u4fee\u6539\u8fd8\u6ca1\u6709\u8fdb\u884c\u4fdd\u5b58\uff01", "\u60a8\u5bf9\u8bcd\u6761\u5185\u5bb9\u7684\u4fee\u6539\u5c1a\u672a\u53d1\u5e03\uff01"],
    set: function (a) {
        var b = 0;
        /hudong\.com/i.test(location.hostname) || (b = 1);
        a = a || this.info[b];
        window.onbeforeunload = function (c) {
            c = c || window.event;
            c.returnValue = a
        }
    },
    clear: function () {
        window.onbeforeunload = function () {}
    }
},
HD = {};
HD.lang = {
    save: "\u4fdd\u5b58",
    source: "\u67e5\u770b\u6e90\u7801",
    preview: "\u9884\u89c8",
    zoom: "\u653e\u5927",
    undo: "\u64a4\u9500 Ctrl+Z",
    redo: "\u91cd\u505a Ctrl+Y",
    cut: "\u526a\u5207 Ctrl+X",
    copy: "\u590d\u5236 Ctrl+C",
    dopaste: "\u7c98\u8d34\u6570\u636e",
    paste: "\u7c98\u8d34 Ctrl+V",
    plainpaste: "\u7c98\u8d34\u4e3a\u65e0\u683c\u5f0f\u6587\u672c",
    wordpaste: "\u4eceWord\u7c98\u8d34",
    selectall: "\u5168\u9009",
    justifymore: "\u5c45\u4e2d \u53f3\u5bf9\u9f50",
    justifyleft: "\u5de6\u5bf9\u9f50 Ctrl+L",
    justifycenter: "\u5c45\u4e2d Ctrl+E",
    justifyright: "\u53f3\u5bf9\u9f50 Ctrl+R",
    justifyfull: "\u4e24\u7aef\u5bf9\u9f50",
    insertorderedlist: "\u7f16\u53f7",
    insertunorderedlist: "\u9879\u76ee\u7b26\u53f7",
    indent: "\u589e\u52a0\u7f29\u8fdb",
    outdent: "\u51cf\u5c11\u7f29\u8fdb",
    sub: "\u4e0b\u6807",
    sup: "\u4e0a\u6807",
    date: "\u63d2\u5165\u5f53\u524d\u65e5\u671f",
    time: "\u63d2\u5165\u5f53\u524d\u65f6\u95f4",
    title: "\u6807\u9898",
    title1: "\u4e00\u7ea7\u6807\u9898 Ctrl+1",
    title2: "\u4e8c\u7ea7\u6807\u9898 Ctrl+2",
    fontname: "\u5b57\u4f53",
    fontsize: "\u6587\u5b57\u5927\u5c0f",
    textcolor: "\u6587\u5b57\u989c\u8272",
    bgcolor: "\u6587\u5b57\u80cc\u666f",
    fontstyle: "\u659c\u4f53 \u4e0b\u5212\u7ebf",
    bold: "\u7c97\u4f53 Ctrl+B",
    italic: "\u659c\u4f53 Ctrl+I",
    underline: "\u4e0b\u5212\u7ebf Ctrl+U",
    strikethrough: "\u5220\u9664\u7ebf",
    removeformat: "\u5220\u9664\u683c\u5f0f",
    image: "\u63d2\u5165\u56fe\u7247",
    flash: "\u63d2\u5165Flash",
    media: "\u63d2\u5165\u591a\u5a92\u4f53",
    layer: "\u63d2\u5165\u5c42",
    table: "\u8868\u683c",
    specialchar: "\u63d2\u5165\u7279\u6b8a\u5b57\u7b26",
    hr: "\u63d2\u5165\u6a2a\u7ebf",
    emoticons: "\u63d2\u5165\u7b11\u8138",
    link: "\u8d85\u7ea7\u8fde\u63a5",
    innerlink: "\u5185\u90e8\u94fe\u63a5 Ctrl+Q",
    unlink: "\u53d6\u6d88\u8d85\u7ea7\u8fde\u63a5",
    fullscreen: "\u5168\u5c4f\u663e\u793a",
    about: "\u5173\u4e8e",
    print: "\u6253\u5370",
    yes: "\u786e\u5b9a",
    no: "\u53d6\u6d88",
    close: "\u5173\u95ed",
    clean: "\u6574\u7406\u5185\u5bb9",
    refer: "\u53c2\u8003\u8d44\u6599",
    charTable2: [
        ["\u00b1", "\u00d7", "\u00f7", "\u2236", "\u2211", "\u220f", "\u222a", "\u2229", "\u2208", "\u2237"],
        ["\u221a", "\u22a5", "\u2225", "\u2220", "\u2312", "\u222b", "\u222e", "\u2261", "\u224c", "\u2248"],
        ["\u221d", "\u2260", "\u226e", "\u226f", "\u2264", "\u2265", "\u221e", "\u2235", "\u2234", "\u33d1"],
        ["\u33d2"],
        ["\uff04", "\uffe0", "\uffe1", "\u33ce", "\u338e", "\u338f", "\u339c", "\u339d", "\u339e", "\u33a1"],
        ["\u33c4", "\u33d5", "\u2116"],
        ["\u0101", "\u00e1", "\u01ce", "\u00e0", "\u0113", "\u00e9", "\u011b", "\u00e8", "\u012b", "\u00ed"],
        ["\u01d0", "\u00ec", "\u014d", "\u00f3", "\u01d2", "\u00f2", "\u016b", "\u00fa", "\u01d4", "\u00f9"],
        ["\u01d6", "\u01d8", "\u01da", "\u01dc", "\u00fc"]],
    colorTable: [],
    hdTable: {
        insertTable: "\u63d2\u5165\u8868\u683c",
        insertRowUp: "\u5411\u4e0a\u63d2\u5165\u4e00\u884c",
        insertRowDown: "\u5411\u4e0b\u63d2\u5165\u4e00\u884c",
        insertColumnLeft: "\u5411\u5de6\u63d2\u5165\u4e00\u5217",
        insertColumnRight: "\u5411\u53f3\u63d2\u5165\u4e00\u5217",
        deleteTable: "\u5220\u9664\u8868\u683c",
        deleteRow: "\u5220\u9664\u884c",
        deleteColumn: "\u5220\u9664\u5217"
    },
    invalidSwf: "\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002\n\u53ea\u5141\u8bb8swf\u683c\u5f0f\u3002",
    invalidImg: "\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002\n\u53ea\u5141\u8bb8jpg,gif,bmp,png\u683c\u5f0f\u3002",
    invalidMedia: "\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002\n\u53ea\u5141\u8bb8mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb\u683c\u5f0f\u3002",
    invalidWidth: "\u5bbd\u5ea6\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
    invalidHeight: "\u9ad8\u5ea6\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
    invalidBorder: "\u8fb9\u6846\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
    invalidUrl: "URL\u4e0d\u6b63\u786e\u3002",
    pleaseInput: "\u8bf7\u8f93\u5165\u5185\u5bb9"
};
HD.$ = function (a, b) {
    b = b || document;
    return b.getElementById(a)
};
HD.$$ = function (a, b) {
    b = b || document;
    return b.createElement(a)
};
HD.event = {
    add: function (a, b, c, d) {
        if (a.addEventListener) a.addEventListener(b, c, d || false);
        else a.attachEvent && a.attachEvent("on" + b, c)
    },
    remove: function (a, b, c) {
        if (a.removeEventListener) a.removeEventListener(b, c, false);
        else a.detachEvent && a.detachEvent("on" + b, c)
    }
};
HD.each = function (a, b) {
    for (var c in a) a.hasOwnProperty(c) && b(c, a[c])
};
HD.util = {
    filter65279: function (a) {
        for (var b = String.fromCharCode(65279), c = new RegExp(b, "g"); a.indexOf(b) > -1;) a = a.replace(c, "");
        return a
    },
    cursorToNext: function (a, b) {
        if (HD.browser == "IE") try {
            b.insertAdjacentHTML("afterEnd", '<a name="temp_ref">&nbsp;</a><a name="temp_ref">&nbsp;</a>');
            HD.util.selection(a);
            var c = HD.g[a].idocument;
            range = c.body.createTextRange();
            range.moveToElementText(b);
            range.collapse(false);
            range.move("character", 1);
            range.select();
            var d = c.getElementsByName("temp_ref");
            if (d.length > 0) {
                d[0].parentNode.removeChild(d[0]);
                d[0].parentNode.removeChild(d[0])
            }
        } catch(e) {} else {
            HD.util.selection(a);
            range = HD.g[a].range;
            range.setStartAfter(b);
            range.collapse(true)
        }
    },
    input: function (a) {
        if (!a) return a;
        return a = a.replace(/\n/g, "").replace(/<.*?>/g, "")
    },
    addSubmitIframe: function () {
        if (!HD.$("hd_iframe_submit")) {
            var a = HD.$$("iframe");
            a.id = "hd_iframe_submit";
            a.name = "hd_iframe_submit";
            a.style.display = "none";
            document.body.appendChild(a);
            window.frames.hd_iframe_submit.name = "hd_iframe_submit"
        }
    },
    resetSubmitIframe: function () {
        var a = HD.$("hd_iframe_submit");
        a.parentNode.removeChild(a);
        this.addSubmitIframe()
    },
    isHudong: function () {
        if (/^http:\/\/kaiyuan\.hudong\.com/i.test(location.href)) return false;
        return /^http:\/\/(\w+\.){1,2}hudong\.com/i.test(location.href)
    },
    filterIgnore: function () {
        if (/^http:\/\/(www\.hudong\.com\/navigation\.wiki)/i.test(location.href)) return true;
        return false
    },
    isChange: function (a) {
        return HD.g[a].undoStack.length > 1
    },
    isIE6: function () {
        var a = navigator.userAgent;
        if (/MSIE [78]/.test(a)) return false;
        if (/MSIE [56]/.test(a)) return true;
        return false
    },
    isIE: function () {
        return /MSIE/.test(navigator.userAgent)
    },
    strlen: function (a) {
        return a.replace(/[^\x00-\xff]/g, "mm").length
    },
    trim: function (a) {
        if (typeof a != "string") return a;
        return a.replace(/(^\s*)|(\s*$)/g, "")
    },
    getDocumentElement: function () {
        return document.compatMode != "CSS1Compat" ? document.body : document.documentElement
    },
    getDocumentHeight: function () {
        var a = this.getDocumentElement();
        return Math.max(a.scrollHeight, a.clientHeight)
    },
    getDocOffsetWidth: function () {
        return parseInt(document.getElementsByTagName("body")[0].offsetWidth)
    },
    scrollTop: function (a) {
        a = a || document;
        return a.documentElement.scrollTop || a.body.scrollTop
    },
    getDocumentWidth: function () {
        var a = this.getDocumentElement();
        return Math.max(a.scrollWidth, a.clientWidth)
    },
    getScriptPath: function () {
        for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) if (a[b].src && a[b].src.match(/hdeditor[\w\-\.]*\.js/) != null) return a[b].src.substring(0, a[b].src.lastIndexOf("/") + 1)
    },
    getHtmlPath: function () {
        return location.href.substring(0, location.href.lastIndexOf("/") + 1)
    },
    getBrowser: function () {
        var a = "",
        b = navigator.userAgent.toLowerCase();
        if (b.indexOf("msie") > -1) a = "IE";
        else if (b.indexOf("chrome") > -1) a = "CHROME";
        else if (b.indexOf("gecko") > -1) a = "GECKO";
        else if (b.indexOf("opera") > -1) a = "OPERA";
        return a
    },
    loadStyle: function (a) {
        var b = HD.$$("link");
        b.setAttribute("type", "text/css");
        b.setAttribute("rel", "stylesheet");
        b.setAttribute("href", a);
        document.getElementsByTagName("head")[0].appendChild(b)
    },
    inArray: function (a, b) {
        for (var c = 0; c < b.length; c++) if (a == b[c]) return true;
        return false
    },
    escape: function (a) {
        a = a.replace(/&/g, "&amp;");
        a = a.replace(/</g, "&lt;");
        a = a.replace(/>/g, "&gt;");
        a = a.replace(/ /g, "&nbsp;");
        a = a.replace(/\xA0/g, "&nbsp;");
        return a = a.replace(/\x20/g, " ")
    },
    getElementPos: function (a, b) {
        var c = 0,
        d = 0;
        if (a.getBoundingClientRect) {
            d = a.getBoundingClientRect();
            b = b || this.getDocumentElement();
            c = d.left;
            d = d.top;
            if (b.scrollLeft) c += b.scrollLeft;
            if (b.scrollTop) d += b.scrollTop;
            if (b.clientLeft) c -= b.clientLeft;
            if (b.clientTop) d -= b.clientTop
        } else {
            c = a.offsetLeft;
            d = a.offsetTop;
            for (b = a.offsetParent; b;) {
                c += b.offsetLeft;
                d += b.offsetTop;
                b = b.offsetParent
            }
        }
        if (/safari/i.test(HD.userAgent)) c += 55;
        return {
            x: c,
            y: d
        }
    },
    getCoords: function (a) {
        a = a || window.event;
        var b = this.getDocumentElement();
        if (a.pageX) return {
            x: a.pageX,
            y: a.pageY
        };
        return {
            x: a.clientX + b.scrollLeft - b.clientLeft,
            y: a.clientY + b.scrollTop - b.clientTop
        }
    },
    setOpacity: function (a, b) {
        if (HD.browser == "IE") try {
            a.style.filter = b == 100 ? "" : "alpha(opacity=" + b + ")"
        } catch(c) {} else a.style.opacity = b == 100 ? "" : "0." + b.toString()
    },
    showBottom: function (a) {
        HD.g[a].bottom.style.display = "block"
    },
    hideBottom: function (a) {
        HD.g[a].bottom.style.display = "none"
    },
    drag: function (a, b, c, d) {
        var e = HD.g[a];
        b.onmousedown = function (f) {
            HD.browser != "IE" && f.preventDefault();
            f = HD.util.getCoords(f || window.event);
            var g = parseInt(c.style.top),
            h = parseInt(c.style.left),
            l = parseInt(c.style.width),
            r = parseInt(c.style.height),
            o = f.y,
            s = f.x,
            p = true,
            q = function (v) {
                if (p) {
                    v = HD.util.getCoords(v || window.event);
                    d(g, h, l, r, v.y - o, v.x - s)
                }
                return false
            },
            t = function () {
                if (e.wyswygMode) e.iframe.style.display = "";
                p = false;
                HD.event.remove(document, "mousemove", q);
                HD.event.remove(document, "mouseup", t)
            };
            HD.event.add(document, "mousemove", q);
            HD.event.add(document, "mouseup", t)
        }
    },
    setDefaultPlugin: function () {
        for (var a = ["cut", "copy", "justifyleft", "justifycenter", "justifyright"], b = 0; b < a.length; b++) HD.plugin[a[b]] = {
            click: new Function("id", 'HD.util.execCommand(id, "' + a[b] + '", null);')
        }
    },
    getIframeDoc: function (a) {
        var b = a.contentWindow,
        c = null;
        return c = a.contentDocument ? a.contentDocument : b.document
    },
    getFullHtml: function (a, b) {
        b = b ? HD.util.filterData(b) : "";
        var c = "<html>";
        c += "<head>";
        c += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
        c += '<meta http-equiv="Content-Language" content="zh-CN" />';
        c += '<base href="' + HD.htmlPath + '" />';
        c += "<title>editor</title>";
        if (HD.g[a].cssPath) c += '<link href="' + HD.g[a].cssPath + '" rel="stylesheet" type="text/css" />';
        c += "</head>\n<body>\n" + b + "\n</body>\n</html>";
        return c
    },
    gotoTop: function () {
        window.scrollTo(0, 0)
    },
    resize: function (a, b, c) {
        a = HD.g[a];
        if (c > a.maxHeight) c = a.maxHeight;
        if (c <= a.minHeight) c = a.minHeight;
        a.formDiv.style.height = c + "px";
        b = a.formDiv.offsetHeight - a.formDiv.clientHeight;
        if (HD.browser == "IE") {
            var d = a.container.offsetWidth - a.container.clientWidth;
            if (document.compatMode != "CSS1Compat") {
                c -= d;
                a.formDiv.style.height = c + b + "px"
            } else a.formDiv.style.height = c + "px"
        } else a.formDiv.style.height = c + "px";
        a.iframe.style.height = c + "px";
        this.isIE6() && HD.util.autoToolbarTop(null, "resize")
    },
    autoHeight: function (a) {
        if (!HD.g[a].autoHeight) return 0;
        var b = HD.g[a],
        c = 0;
        c += HD.browser == "IE" ? b.iframe.Document.body.scrollHeight : HD.browser == "OPERA" ? b.iframe.contentDocument.body.scrollHeight : b.iframe.contentDocument.body.offsetHeight;
        if (/firefox/i.test(HD.userAgent)) c += 30;
        if (HD.browser != "IE") {
            b = HD.g[a].idocument.images;
            var d = 0;
            for (i = 0; i < b.length; i++) {
                var e = HD.util.getElementPos(b[i], HD.g[a].idocument);
                if (! (b[i].offsetHeight + e.y <= c)) {
                    if (d == 0) c += b[i].offsetHeight + 60;
                    else if (d != e.y) c += e.y - d;
                    d = e.y
                }
            }
        }
        HD.util.resize(a, 800, c)
    },
    autoToolbarTop: function (a, b) {
        a = a || HD.id;
        if (!HD.g[a].autoHeight) return 0;
        if (HD.g[a].toolbarDiv) {
            var c = this.isIE6(),
            d = HD.util.scrollTop();
            if (! (d > 200 && HD.g[a].toolbarDiv.className == "fixedElement" && !c && b == "scroll")) {
                HD.g[a].toolbarDiv.className = HD.g[a].toolbarTop > d ? "" : "fixedElement";
                if (HD.$("editor_right")) {
                    HD.$("editor_right").style.left = null;
                    if (!c) if (HD.g[a].toolbarTop >= d) {
                        HD.$("editor_right").className = "hd-box";
                        HD.$("editor_right").style.top = "80px";
                        HD.$("editor_right").style.right = "0px"
                    } else {
                        var e = document.documentElement.clientWidth || document.body.clientWidth;
                        HD.$("editor_right").style.top = "60px";
                        if (e > 1440) HD.$("editor_right").style.right = (e - 1440) / 2 + "px";
                        else if (e > 1E3) HD.$("editor_right").style.right = "10px";
                        else if (e < 969) HD.$("editor_right").style.left = "730px";
                        else HD.$("editor_right").style.left = e - 240 + "px";
                        HD.$("editor_right").className = "hd-box fixedElement"
                    }
                }
                if (c) if (b == "resize") {
                    HD.g[a].toolbarDiv.style.top = d + "px";
                    if (HD.$("editor_right")) if (HD.g[a].toolbarTop >= d) {
                        HD.$("editor_right").className = "hd-box";
                        HD.$("editor_right").style.top = "80px";
                        HD.$("editor_right").style.right = "0px"
                    } else {
                        e = document.documentElement.clientWidth || document.body.clientWidth;
                        HD.$("editor_right").style.top = d + 60 + "px";
                        HD.$("editor_right").className = "hd-box fixedElement"
                    }
                } else {
                    HD.g[a].toolbarDiv.style.display = "none";
                    HD.timeout && clearTimeout(HD.timeout);
                    HD.timeout = setTimeout(function () {
                        HD.g[a].toolbarDiv.style.top = d + "px";
                        HD.g[a].toolbarDiv.style.display = "";
                        if (HD.$("editor_right")) if (HD.g[a].toolbarTop >= d) {
                            HD.$("editor_right").className = "hd-box";
                            HD.$("editor_right").style.top = "80px";
                            HD.$("editor_right").style.right = "0px"
                        } else {
                            HD.$("editor_right").style.top = d + 60 + "px";
                            HD.$("editor_right").className = "hd-box fixedElement"
                        }
                        HD.timeout = null
                    },
                    200)
                }
            }
        }
    },
    filterData: function (a) {
        a = a.replace(/class=">/ig, ">");
        a = a.replace(/class=""/ig, "");
        a = a.replace(/class=" ?error"/ig, "");
        a = a.replace(/<a([^>]+?)\?>/ig, "<a$1>");
        a = a.replace(/(<\/?font.*?>)+/ig, "");
        a = a.replace(/\.hoodong.com\//ig, ".hudong.com/");
        a = a.replace(/<(div|strong|span|a|p)[^>]*?> *<\/\1>/ig, "");
        a = a.replace(/<a[^>]*?>(<\/?strong>)?<\/a>/ig, "$1");
        a = a.replace(/<strong([^>]*?>.+?)<\/strong>/ig, "<_strong_$1</_strong_>");
        a = a.replace(/(<\/?strong.*?>)+/ig, "");
        a = a.replace(/_strong_/ig, "strong");
        HD.util.isHudong() || (a = a.replace(/http:[^ '"]*?(index\.php\?doc-innerlink-)/ig, "$1"));
        return a
    },
    changeData: function (a, b) {
        b = this.filterData(b);
        HD.g[a].idocument.body.innerHTML = b;
        HD.g[a].newTextarea.value = b;
        this.checkExternalLink(a);
        return true
    },
    repairInnerLink: function (a) {
        var b = a.innerText || a.textContent,
        c = "";
        c = a.getElementsByTagName("img");
        b = HD.util.trim(b);
        if (! (c.length > 0)) {
            if (!b) return a.parentNode.removeChild(a);
            location.hostname.toLowerCase();
            if (b.indexOf("http://") == -1 && (a.className == "innerlink" || /\/?wiki\/|innerlink/i.test(a.href))) {
                if (HD.util.isHudong()) {
                    if (!/^http:\/\/www\.hudong\.com/i.test(a.href) && /^http:\/\/(\w+\.){1,2}hudong\.com/i.test(a.href)) return;
                    c = "http://www.hudong.com/wiki/"
                } else c = "index.php?doc-innerlink-";
                a.href = c + encodeURI(b)
            }
        }
    },
    clearEmptyTag: function (a) {
        var b, c, d = ["STRONG", "SPAN", "P"];
        for (j = 0; j < d.length; j++) {
            c = HD.g[a].idocument.getElementsByTagName(d[j]);
            for (i = 0; i < c.length; i++) HD.util.trim(c[i].innerHTML) == "" && c[i].parentNode.removeChild(c[i])
        }
        c = HD.g[a].idocument.getElementsByTagName("TABLE");
        d = 0;
        var e;
        for (i = 0; i < c.length; i++) {
            b = true;
            a = c[i].getElementsByTagName("TD");
            for (j = 0; j < a.length; j++) if (a[j].innerHTML != "") {
                b = false;
                break
            }
            if (b) {
                d++;
                c[i].parentNode.removeChild(c[i])
            } else {
                b = c[i].getElementsByTagName("img");
                e = c[i].innerText || c[i].textContent;
                e = HD.util.trim(e);
                b.length == 1 && a.length <= 2 && e !== null && e.length < 50 && HD.shortcutMenu._img_add_des_div(c[i], b[0])
            }
        }
    },
    checkExternalLink: function (a) {
        if (! (HD.isCheckExternalLink || HD.util.filterIgnore())) {
            HD.isCheckExternalLink = 1;
            var b = /^http:\/\/(\w+\.){1,2}hudong\.com/i;
            a = a || HD.id;
            HD.util.scrollTop();
            var c, d = 0,
            e = location.hostname.toLowerCase(),
            f = HD.g[a].idocument.getElementsByTagName("A");
            for (i = 0; i < f.length; i++) {
                c = f[i].href.toLowerCase();
                if (HD.browser == "IE" && !f[i].ondragenter) f[i].ondragenter = function () {
                    return false
                };
                if (HD.util.trim(f[i].innerHTML) == "") f[i].parentNode.removeChild(f[i]);
                else if (!HD.util.isHudong() && HD.g[a].filterExternal && c.indexOf("http") == 0 && c.indexOf(e) == -1 && !b.test(c) || HD.util.isHudong() && !b.test(f[i].href)) {
                    if (f[i].innerHTML.indexOf("<") == -1) {
                        var g = HD.g[a].idocument.createTextNode(f[i].innerHTML);
                        f[i].parentNode.insertBefore(g, f[i])
                    } else for (j = f[i].childNodes.length - 1; j >= 0; j--) f[i].parentNode.insertBefore(f[i].childNodes[j].cloneNode(true), f[i]);
                    f[i].parentNode.removeChild(f[i])
                } else { if (/<img/i.test(f[i].innerHTML)) {
                        c = f[i].getElementsByTagName("img")[0];
                        if (HD.util.isHudong()) if (!b.test(c.src)) {
                            f[i].parentNode.insertBefore(c.cloneNode(true), f[i]);
                            f[i].parentNode.removeChild(f[i]);
                            continue
                        }
                    }
                    this.repairInnerLink(f[i]);
                    if (HD.g[a].filterExternal) if (HD.util.isHudong()) if (b.test(f[i].href)) f[i].className = f[i].className.replace(/ *error/i, "");
                    else if (f[i].href.toLowerCase().indexOf("http:") == -1 && f[i].href.toLowerCase().indexOf("wiki/") > -1) f[i].className = f[i].className.replace(/ *error/i, "");
                    else { if (f[i].className.indexOf("error") == -1) f[i].className += " error";
                        d++
                    } else if (/^http:/i.test(f[i].href)) if ((new RegExp("http:\\/\\/(" + e + "|(\\w+\\.){1,2}hudong\\.com)", "i")).test(f[i].href)) f[i].className = f[i].className.replace(/ *error/i, "");
                    else { if (f[i].className.indexOf("error") == -1) f[i].className += " error";
                        d++
                    }
                }
            }
            f = HD.g[a].idocument.images;
            for (i = 0; i < f.length; i++) {
                el = f[i];
                if (/^javascript:/i.test(el.src)) el.parentNode.removeChild(el);
                else {
                    el.removeAttribute("width");
                    el.removeAttribute("height");
                    el.removeAttribute("style");
                    if (HD.g[a].filterExternal) if (HD.util.isHudong()) if (b.test(el.src)) {
                        if (!/_(140|s)\.\w{3}$/i.test(el.src) && !HD.util.filterIgnore()) el.src = el.src.replace(/\.(\w{3})$/i, "_s.$1");
                        el.className = el.className.replace(/ *error/i, "")
                    } else { if (el.className.indexOf("error") == -1) el.className += " error";
                        d++
                    } else if (/^http:/i.test(el.src)) if ((new RegExp("http:\\/\\/(" + e + "|(\\w+\\.){1,2}hudong\\.com)", "i")).test(el.src)) el.className = el.className.replace(/ *error/i, "");
                    else { if (el.className.indexOf("error") == -1) el.className += " error";
                        d++
                    }
                    if ((c = HD.util.getParent(el, "div")) && /img img_[rl]/i.test(c.className) && el.width) c.style.width = el.width
                }
            }
            if (d > 0 && HD.$("editor_tip")) {
                HD.$("editor_tip").style.display = "";
                HD.$("editor_tip").innerHTML = '\u63d0\u793a\uff1a<br /><font color="red">\u5185\u5bb9\u542b\u6709\u5916\u90e8\u94fe\u63a5\uff0c\u5df2\u88ab\u7ea2\u8272\u4e0b\u5212\u7ebf\u6807\u8bb0\uff0c\u4fdd\u5b58\u540e\u5916\u94fe\u5c06\u88ab\u8fc7\u6ee4\u3002</font>'
            } else if (d == 0 && HD.$("editor_tip")) {
                HD.$("editor_tip").style.display = "none";
                HD.$("editor_tip").innerHTML = ""
            }
            HD.isCheckExternalLink = 0
        }
    },
    filterExternalLink: function (a, b) {
        var c = /^http:\/\/(\w+\.){1,2}hudong\.com/i;
        a = a || HD.id;
        if (!HD.g[a].filterExternal || HD.util.filterIgnore()) return b;
        var d = /<a[^>]*?>(.*?)<\/a>/ig;
        a = /href=['"]?([^'" ]+)['"]?/i;
        var e = /href=['"]?\.+\/wiki\/([^'" ]+)['"]?/i,
        f, g, h = b.match(d),
        l = location.hostname.toLowerCase();
        if (h) for (i = 0; i < h.length; i++) {
            f = h[i];
            if ((g = f.match(a)) && g.length == 2) {
                g = g[1];
                if (HD.util.isHudong()) if (g.indexOf("http://") > -1) c.test(g) || (b = b.replace(f, f.replace(d, "$1")));
                else { if (e.test(f)) b = b.replace(f, f.replace(e, 'href="http://www.hudong.com/wiki/$1"'))
                } else if (/^http:/i.test(g))(new RegExp("http:\\/\\/(" + l + "|(\\w+\\.){1,2}hudong\\.com)", "i")).test(g) || (b = b.replace(f, f.replace(d, "$1")))
            }
        }
        d = /<img[^>]*?>/ig;
        a = /src=['"]?([^'" ]+)['"]?/i;
        h = b.match(d);
        d = "";
        if (h) for (i = 0; i < h.length; i++) {
            f = h[i];
            if ((g = f.match(a)) && g.length == 2) {
                d = g[1];
                if (HD.util.isHudong()) c.test(d) || (b = b.replace(f, ""));
                else if (/^http:/i.test(d)) {
                    if (d.indexOf(l) == -1 && !c.test(d)) b = b.replace(f, "")
                } else if (/^javascript:/i.test(d)) b = b.replace(f, "")
            }
        }
        return b
    },
    getData: function (a, b) {
        a = a || HD.id;
        b = typeof b == "undefined" ? true : b;
        if (HD.g[a].wyswygMode) if (b) {
            HD.plugin.refer && HD.plugin.refer.order_on_submit();
            b = HD.g[a].isClean ? HD.g[a].idocument.body.innerHTML : this.domFilter(a);
            b = this.filterExternalLink(a, b);
            b = this.filterData(b)
        } else b = HD.g[a].idocument.body.innerHTML;
        else b = HD.g[a].newTextarea.value;
        if (b != "" && b.length < 1E3) if (HD.util.trim(b.replace(/<.*?>/gi, "")) == "") b = "";
        return b
    },
    setData: function (a) {
        var b = this.getData(a, HD.g[a].filterMode);
        HD.g[a].srcTextarea.value = b
    },
    getPureData: function (a) {
        a = this.getData(a, false);
        a = a.replace(/<br[\s\/]{0,2}>/ig, "\r\n");
        return a = a.replace(/<.*?>/ig, "")
    },
    setPureData: function (a) {
        var b = this.getPureData(a);
        HD.g[a].srcTextarea.value = b
    },
    focus: function (a) {
        HD.g[a].wyswygMode ? HD.g[a].iframeWin.focus() : HD.g[a].newTextarea.focus()
    },
    click: function (a, b) {
        HD.util.selection(a);
        HD.layout.hide(a);
        HD.util.focus(a);
        if (b == "paste") b = "dopaste";
        HD.plugin[b].click(a)
    },
    selection: function (a) {
        var b = HD.g[a].iframeWin,
        c = HD.g[a].idocument;
        b = b.getSelection ? b.getSelection() : c.selection;
        var d;
        try {
            d = b.rangeCount > 0 ? b.getRangeAt(0) : b.createRange ? b.createRange() : c.createRange()
        } catch(e) {}
        d || (d = HD.browser == "IE" ? c.body.createTextRange() : c.createRange());
        HD.g[a].selection = b;
        HD.g[a].range = d
    },
    select: function (a) {
        if (HD.browser == "IE" && HD.g[a].range) try {
            HD.g[a].range.select()
        } catch(b) {}
    },
    getParentElement: function (a) {
        HD.util.selection(a);
        var b = HD.g[a].range;
        if (HD.browser == "IE") switch (HD.g[a].selection.type) {
        case "Text":
        case "None":
            return b.parentElement();
        case "Control":
            return b.item(0);
        default:
            return HD.g[a].idocument.body
        } else try {
            var c = b.commonAncestorContainer;
            if (!b.collapsed && b.startContainer == b.endContainer && b.startOffset - b.endOffset <= 1 && b.startContainer.hasChildNodes()) c = b.startContainer.childNodes[b.startOffset];
            for (; c.nodeType == 3;) c = c.parentNode;
            return c
        } catch(d) {
            return null
        }
    },
    moveToAncestorNode: function (a, b) {
        HD.util.select(a);
        for (a = HD.util.getParentElement(a); a;) {
            if (b == a.nodeName) return a;
            a = a.parentNode
        }
        return a
    },
    getParent: function (a, b) {
        for (a = a.parentNode; a && a.nodeName != "BODY";) {
            if (a.nodeName.toUpperCase() == b.toUpperCase()) break;
            a = a.parentNode
        }
        return a.nodeName.toUpperCase() == b.toUpperCase() ? a : null
    },
    getSelectedText: function (a, b) {
        HD.util.selection(a);
        b = b == "htmlText" || b == "html" ? "htmlText" : "text";
        if (HD.browser == "IE") a = HD.g[a].range[b];
        else if (b == "text") a = HD.g[a].range.toString();
        else {
            b = HD.$$("div");
            b.appendChild(HD.g[a].range.cloneContents());
            a = b.innerHTML
        }
        return a
    },
    editorEvent: function (a, b) {
        if (a.keyCode == 13) {
            var c = HD.util.getParentElement(b);
            if (c.nodeName == "DIV" && c.className.indexOf("hdwiki_tmml") > -1 || c.nodeName == "A") {
                b = HD.$$("br", HD.g[b].idocument);
                HD.clientX && HD.clientX < 20 ? c.parentNode.insertBefore(b, c) : c.parentNode.insertBefore(b, c.nextSibling);
                if (HD.browser == "IE") {
                    HD.iframeClickTag = "";
                    a.returnValue = false
                } else a.preventDefault();
                HD.shortcutMenu.hide();
                return false
            }
        }
        if (a.ctrlKey && !a.altKey) {
            c = null;
            switch (String.fromCharCode(a.keyCode || a.charCode || a.which).toLowerCase()) {
            case "a":
                HD.toolbar.disable(b, ["save", "preview", "cut", "copy", "source"]);
                HD.iframeClickTag = "";
                break;
            case "b":
                c = "bold";
                break;
            case "i":
                c = "italic";
                break;
            case "u":
                c = "underline";
                break;
            case "l":
                c = "justifyleft";
                break;
            case "e":
                c = "justifycenter";
                break;
            case "r":
                c = "justifyright";
                break;
            case "z":
                c = "undo";
                break;
            case "y":
                c = "redo";
                break;
            case "v":
                break;
            case "q":
                c = "innerlink";
                break;
            case "x":
                HD.shortcutMenu.hide();
                break;
            case "w":
            case "1":
                c = "title1";
                break;
            case "2":
                c = "title2";
                break;
            case "3":
            case "4":
            case "5":
            case "6":
                break
            }
            if (c) {
                if (HD.browser == "IE") {
                    a.cancelBubble = true;
                    a.returnValue = false
                } else {
                    a.preventDefault();
                    a.stopPropagation()
                }
                HD.plugin[c] ? HD.plugin[c].click(b) : HD.util.execCommand(b, c, null)
            }
        }
    },
    execCommand: function (a, b, c) {
        try {
            var d = this.getSelectedText(a, "html");
            if (d && b == "bold") if (/<h3>|<div\s+class=\"?hdwiki_tmm/i.test(d)) {
                this.showTip(a, "\u8bf7\u4e0d\u8981\u9009\u4e2d\u4e00\u7ea7\u6807\u9898\u6216\u4e8c\u7ea7\u6807\u9898\uff01");
                return false
            }
            HD.g[a].idocument.execCommand(b, false, c);
            var e = HD.g[a].toolbarIcon[b];
            if (e) e.className = e.className.replace(/ *hd-icon-selected/i, "")
        } catch(f) {
            var g;
            switch (b) {
            case "cut":
                g = "Ctrl + X";
                break;
            case "copy":
                g = "Ctrl + C";
                break;
            case "paste":
                g = "Ctrl + V";
                break
            }
            g && alert("\u6b64\u529f\u80fd\u5728IE\u6d4f\u89c8\u5668\u4e0b\u624d\u53ef\u4ee5\u6267\u884c\uff0c\u63a8\u8350\u60a8\u4f7f\u7528\u5bf9\u5e94\u7684\u5feb\u6377\u952e:" + g + "\u3002");
            return false
        }
        HD.history.add(a, false);
        HD.layout.hide(a);
        HD.util.focus(a)
    },
    insertHtml: function (a, b) {
        if (b != "") {
            HD.util.select(a);
            if (HD.browser == "IE") if (HD.g[a].selection.type.toLowerCase() == "control") HD.g[a].range.item(0).outerHTML = b;
            else HD.g[a].range.pasteHTML(b);
            else this.execCommand(a, "inserthtml", b);
            HD.history.add(a, false)
        }
    },
    removeDomain: function (a, b) {
        a = HD.g[a].siteDomains;
        for (var c = 0, d = a.length; c < d; c++) {
            var e = "http://" + a[c];
            if (b.indexOf(e) == 0) return b.substr(e.length)
        }
        return b
    },
    domFilter: function (a, b) {
        HD.g[a].domFilterResult = "";
        b = b || HD.g[a].htmlTags;
        var c = 0,
        d = 0,
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        l = [],
        r = ["onclick", "onmouseout", "onmouseover", "onmousemove", "align", "color", "font", "height", "vspace", "hspace", "id", "class", "style", "left", "right", "name", "rel", "size", "title", "width", "valign", "bgcolor", "dir"],
        o = function (s) {
            s = s.childNodes;
            for (var p = 0; p < s.length; p++) {
                var q = s[p];
                if (1 == q.nodeType) {
                    var t = q.tagName.toLowerCase();
                    if (b[t]) {
                        var v = HD.browser == "IE" ? r : q.attributes,
                        w = q.style;
                        if (HD.browser == "IE" && w.cssText) {
                            var m = [];
                            w = w.cssText.replace(/ /g, "").split(";");
                            for (var k = 0; k < w.length; k++) m.push(w[k].split(":")[0]);
                            w = m
                        }
                        t = b[t];
                        var n;
                        for (k = 0; k < v.length; k++) {
                            n = HD.browser == "IE" ? v[k] : v[k].name.toLowerCase();
                            c++;
                            if (!HD.util.inArray(n, t)) {
                                q.removeAttribute(n);
                                f++;
                                l[n] = q.getAttribute(n)
                            }
                        }
                        for (k = 0; k < w.length; k++) {
                            n = w[k];
                            d++;
                            if (!HD.util.inArray("." + n.toLowerCase(), t)) if (HD.browser == "IE") {
                                g++;
                                q.style.cssText = q.style.cssText.replace(new RegExp(n + ": \\w+", "gi"), "")
                            } else {
                                g++;
                                q.style[n] = ""
                            }
                        }
                        q.hasChildNodes() && o(q)
                    } else { if (q.hasChildNodes()) for (k = 0; k < q.childNodes.length; k++) {
                            o(q.childNodes[k]);
                            q.parentNode.insertBefore(q.childNodes[k].cloneNode(true), q)
                        }
                        q.parentNode.removeChild(q);
                        h++;
                        e++
                    }
                }
            }
        };
        o(HD.g[a].idocument.body);
        HD.g[a].domFilterResult = "\u8fc7\u6ee4\u6389" + h + "\u4e2a\u8282\u70b9\uff0c" + f + "\u4e2a\u5c5e\u6027\uff0c" + g + "\u4e2a\u6837\u5f0f\u3002";
        return HD.g[a].idocument.body.innerHTML
    },
    showTip: function (a, b, c, d) {
        b = '<li><div style="width:300px">' + b + "</div></li>";
        (new HD.dialog2({
            id: a,
            content: b,
            width: 350,
            height: d > 0 ? d : 200,
            title: "\u63d0\u793a",
            noButton: HD.lang.close,
            notFocus: c
        })).show();
        return true
    },
    showInput: function (a, b, c, d, e) {
        var f = "\u63d2\u5165" + HD.lang[b];
        e = e || 100;
        if (f.indexOf(" " > 0)) f = f.split(" ")[0];
        var g = "";
        if (d) g += '<li><div style="width:300px">' + d + "</div></li>";
        g += '<li><input id="hd_input_' + b + '" style="width:98%;border: 1px solid #AAAAAA;padding:3px;" maxlength="' + e + '" /></li>';
        (new HD.dialog2({
            id: a,
            cmd: b,
            content: g,
            width: 350,
            height: c > 0 ? c : 200,
            title: f,
            yesButton: HD.lang.yes,
            noButton: HD.lang.close
        })).show();
        HD.iframeClickTag = "";
        return true
    },
    uploading: function (a, b) {
        b = b || "\u6b63\u5728\u4fdd\u5b58...";
        html = '<li><div id="hd_dialog_tip" class="hd_img_uploading">' + b + "</div></li>";
        (new HD.dialog2({
            id: a,
            content: html,
            width: 350,
            height: 200,
            title: "\u63d0\u793a",
            close: false
        })).show();
        return true
    },
    autoCloseTip: function (a, b, c) {
        c = c || 1;
        HD.util.uploading(a, b);
        setTimeout(function () {
            HD.layout.hide(a)
        },
        c * 1E3)
    },
    isAtImg: function (a) {
        var b = false,
        c, d, e = 0,
        f = 0,
        g = 0,
        h = a = HD.util.getParentElement(a);
        if (a.nodeName == "TD") for (; h && h.nodeName != "BODY";) {
            if (h.nodeName == "TABLE") {
                c = h;
                break
            }
            h = h.parentNode
        } else for (; h && h.nodeName != "BODY";) {
            if (h.nodeName == "TD") a = h;
            else if (h.nodeName == "TABLE") {
                c = h;
                break
            }
            h = h.parentNode
        }
        if (c) {
            e = c.getElementsByTagName("TR").length;
            f = c.getElementsByTagName("TD").length;
            g = c.getElementsByTagName("IMG").length;
            if (e == 2 && f == 2 && g == 1) b = true
        } else {
            h = a;
            if (a.nodeName == "DIV") d = a;
            else for (; h && h.nodeName != "BODY";) {
                if (h.nodeName == "DIV") {
                    d = h;
                    break
                }
                h = h.parentNode
            }
            if (d && /img_[lr]/i.test(d.className)) {
                g = d.getElementsByTagName("IMG").length;
                if (g == 1) b = true
            }
        }
        return b
    }
};
HD.layout = {
    show: function (a, b) {
        HD.util.selection(a);
        HD.layout.hide(a);
        HD.g[a].hideDiv.appendChild(b);
        HD.g[a].hideDiv.style.display = "block";
        HD.g[a].layoutDiv = b
    },
    hide: function (a, b) {
        if (b) {
            if (/scroll/i.test(b.type)) if (HD.g[a].layoutDiv && /dialog/i.test(HD.g[a].layoutDiv.className)) return false;
            if ((b = b.target || b.srcElement) && /hd-common-icon/i.test(b.className)) return false;
            if (b && /dialog|hd-mask/i.test(b.className)) return false;
            if (b && /refrence_edita/i.test(b.className)) return false;
            for (; b && b.nodeName != "BODY";) {
                if ((b = b.parentNode) && /dialog|hd-menu|hd-toolbar-table/i.test(b.className)) return false;
                if (b && /pushbutton/i.test(b.className)) return false
            }
        }
        try {
            var c = HD.g[a].hideDiv.childNodes;
            for (i = 0; i < c.length; i++) HD.g[a].hideDiv.removeChild(c[i])
        } catch(d) {}
        HD.g[a].hideDiv.style.display = "none";
        HD.g[a].maskDiv.style.display = "none";
        HD.plugin.table && HD.plugin.table.hide(a);
        if (HD.imageUploading == 1) {
            HD.util.resetSubmitIframe();
            HD.imageUploading = 0
        }
    },
    make: function () {
        var a = HD.$$("div");
        a.style.position = "absolute";
        a.style.zIndex = 10020;
        return a
    }
};
HD.menu = function (a) {
    this.arg = a;
    var b = HD.g[a.id].layoutDiv;
    if (b) if (b.cmd == a.cmd) {
        HD.g[a.id].layoutDiv = null;
        return false
    }
    b = HD.layout.make(a.id);
    b.className = "hd-menu";
    b.cmd = a.cmd;
    if (this.arg.width) b.style.width = this.arg.width;
    var c = HD.g[a.id].toolbarIcon[a.cmd],
    d = HD.util.getElementPos(c),
    e = document.documentElement.clientWidth || document.body.clientWidth,
    f = document.getElementsByTagName("body")[0];
    f = parseInt(f.offsetWidth);
    d.x -= e > 1440 ? (e - f) / 2 : 10;
    if (a.cmd == "fontstyle" || a.cmd == "justifymore") d.x -= 23;
    b.style.top = d.y + c.offsetHeight + "px";
    b.style.left = d.x + "px";
    this.ul = HD.$$("ul");
    b.appendChild(this.ul);
    this.div = b;
    this.add = function (g, h, l) {
        var r = HD.$$("li");
        if (l) r.className = "hd-menu-disabled";
        else {
            r.className = "hd-menu-noselected";
            r.onmouseover = function () {
                var o = r.parentNode.childNodes;
                for (i in o) if (o[i].className != "hd-menu-disabled") o[i].className = "hd-menu-noselected";
                this.className = "hd-menu-selected"
            };
            r.onmouseout = function () {
                if (this.className != "hd-menu-disabled") this.className = "hd-menu-noselected"
            };
            r.onclick = function () {
                h();
                HD.g[a.id].layoutDiv = null
            }
        }
        r.innerHTML = g;
        this.append(r)
    };
    this.append = function (g) {
        this.ul.appendChild(g)
    };
    this.insert = function (g) {
        this.div.innerHTML = g
    };
    this.show = function () {
        HD.layout.show(this.arg.id, this.div)
    };
    this.picker = function () {
        this.div.style.width = "200px";
        var g = HD.lang.colorTable,
        h = HD.$$("table");
        h.className = "hd-picker-color";
        h.cellPadding = 0;
        h.cellSpacing = 0;
        h.border = 0;
        h.style.margin = 0;
        h.style.padding = 0;
        h.style.borderCollapse = "separate";
        for (var l = 0; l < g.length; l++) for (var r = h.insertRow(l), o = 0; o < g[l].length; o++) {
            var s = r.insertCell(o);
            s.style.backgroundColor = g[l][o];
            s.title = g[l][o];
            s.onmouseover = function () {
                this.style.borderColor = "#000000"
            };
            s.onmouseout = function () {
                this.style.borderColor = "#F0F0EE"
            };
            s.onclick = new Function('HD.plugin["' + this.arg.cmd + '"].exec("' + this.arg.id + '", "' + g[l][o] + '")');
            s.innerHTML = "&nbsp;"
        }
        this.append(h);
        this.show()
    }
};
HD.dialog2 = function (a) {
    a.id = a.id || HD.id;
    this.arg = a;
    this.getPos = function () {
        var b = this.arg,
        c = this.arg.id,
        d = HD.util.getElementPos(HD.g[c].container),
        e = b.height;
        b = Math.round(parseInt(HD.g[c].container.offsetWidth) / 2) - Math.round(b.width / 2);
        d = b < 0 ? d.x : d.x + b;
        b = document.documentElement.clientWidth || document.body.clientWidth;
        c = parseInt(document.getElementsByTagName("body")[0].offsetWidth);
        d -= (b - c) / 2;
        return {
            x: d,
            y: (document.body.scrollTop || document.documentElement.scrollTop) + ((document.documentElement.clientHeight || window.screen.availHeight) - e) / 2 - 30
        }
    };
    this.show = function () {
        var b = this.arg,
        c = b.id,
        d = HD.layout.make(b.id);
        d.id = "hd-dialog";
        d.className = "hd-dialog";
        var e = this.getPos();
        d.style.width = b.width + "px";
        var f = document.documentElement.clientWidth || document.body.clientWidth;
        if (f > 1440) e.x -= (f - 1440) / 2;
        d.style.top = e.y + "px";
        d.style.left = e.x + "px";
        e = HD.$$("h2");
        e.innerHTML = b.title;
        d.appendChild(e);
        if (b.close !== false) {
            e = HD.$$("img");
            e.src = HD.g[c].skinsPath + "spacer.gif";
            e.className = "close";
            e.alt = HD.lang.close;
            e.title = HD.lang.close;
            e.onclick = function () {
                HD.util.focus(c);
                HD.util.select(c);
                HD.layout.hide(c)
            };
            d.appendChild(e)
        }
        e = HD.$$("form");
        e.setAttribute("target", "hd_iframe_submit");
        e.setAttribute("method", "post");
        e.setAttribute("action", b.action || "");
        e.onsubmit = new Function("return HD.plugin['" + b.cmd + "'].exec('" + c + "');");
        if (HD.browser == "CHROME") e.setAttribute("enctype", "multipart/form-data");
        else e.encoding ? e.setAttribute("enctype", "multipart/form-data") : e.setAttribute("enctype", "multipart/form-data");
        if (b.content.substr(0, 3) == "<li") {
            f = HD.$$("ul");
            f.innerHTML = b.content;
            if (b.cmd != "source" && b.cmd != "dopaste" && b.cmd != "wordpaste") f.style.width = "300px";
            e.appendChild(f)
        } else e.innerHTML = b.content;
        d.appendChild(e);
        f = HD.$$("p");
        f.className = "pushbutton a-c pad-b-10";
        var g = null,
        h = null;
        if (b.yesButton) {
            h = HD.$$("input");
            h.className = "conserve";
            h.type = "button";
            h.name = "yesButton";
            h.id = "yesButton";
            h.value = b.yesButton;
            h.onclick = new Function("HD.plugin['" + b.cmd + "'].exec('" + c + "');");
            f.appendChild(h)
        }
        if (b.noButton) {
            g = HD.$$("input");
            g.type = "button";
            g.name = "noButton";
            g.id = "noButton";
            g.value = b.noButton;
            g.onclick = function () {
                if (!b.notFocus) {
                    HD.util.focus(c);
                    HD.util.select(c)
                }
                HD.layout.hide(c)
            };
            f.appendChild(g)
        }
        if (!b.yesButton && !b.noButton) {
            f = HD.$$("div");
            f.innerHTML = "&nbsp;"
        }
        d.appendChild(f);
        HD.layout.show(c, d);
        window.focus();
        d.focus();
        document.documentElement && document.documentElement.clientHeight > 500 && b.noButton && g.focus();
        HD.$("hd_input_" + b.cmd) && HD.$("hd_input_" + b.cmd).focus();
        HD.g[c].maskDiv.style.height = HD.util.getDocumentHeight() + "px";
        HD.g[c].maskDiv.style.display = "block";
        HD.g[c].noButton = g;
        HD.g[c].yesButton = h;
        HD.g[c].form = e
    };
    this.show2 = function () {
        var b = this.arg,
        c = b.id,
        d = HD.layout.make(b.id);
        d.id = "hd-dialog";
        d.className = "hd-dialog2";
        var e = this.getPos();
        d.style.width = b.width + "px";
        var f = document.documentElement.clientWidth || document.body.clientWidth;
        if (f > 1440) e.x -= (f - 1440) / 2;
        d.style.top = e.y + "px";
        d.style.left = e.x + "px";
        e = HD.$$("h2");
        e.innerHTML = b.title;
        d.appendChild(e);
        if (b.close !== false) {
            e = HD.$$("img");
            e.src = HD.g[c].skinsPath + "spacer.gif";
            e.className = "close";
            e.alt = HD.lang.close;
            e.title = HD.lang.close;
            e.onclick = function () {
                HD.util.focus(c);
                HD.util.select(c);
                HD.layout.hide(c);
                if (HD.plugin.refer) HD.plugin.refer.edit_name = ""
            };
            d.appendChild(e)
        }
        e = HD.$$("div");
        e.id = "hd-dialog-ref";
        e.className = "postil";
        e.innerHTML = b.content;
        d.appendChild(e);
        e = HD.$$("p");
        e.className = "pushbutton a-c pad-b-10";
        var g = f = null;
        if (b.yesButton) {
            g = HD.$$("input");
            g.className = "conserve";
            g.type = "button";
            g.name = "yesButton";
            g.id = "yesButton";
            g.value = b.yesButton;
            g.onclick = new Function("HD.plugin['" + b.cmd + "'].exec('" + c + "');");
            e.appendChild(g)
        }
        if (b.noButton) {
            f = HD.$$("input");
            f.type = "button";
            f.name = "noButton";
            f.id = "noButton";
            f.value = b.noButton;
            f.onclick = function () {
                if (!b.notFocus) {
                    HD.util.focus(c);
                    HD.util.select(c)
                }
                HD.layout.hide(c);
                if (HD.plugin.refer) HD.plugin.refer.edit_name = ""
            };
            e.appendChild(f)
        }
        if (!b.yesButton && !b.noButton) {
            e = HD.$$("div");
            e.innerHTML = "&nbsp;"
        }
        d.appendChild(e);
        HD.layout.show(c, d);
        window.focus();
        d.focus();
        document.documentElement && document.documentElement.clientHeight > 500 && b.noButton && f.focus();
        HD.$("hd_input_" + b.cmd) && HD.$("hd_input_" + b.cmd).focus();
        HD.g[c].maskDiv.style.height = HD.util.getDocumentHeight() + "px";
        HD.g[c].maskDiv.style.display = "block";
        HD.g[c].noButton = f;
        HD.g[c].yesButton = g
    }
};
HD.toolbar = {
    enable_one: function (a, b) {
        if (b == "redo" && HD.g[a].redoStack.length == 0) return false;
        if (b == "undo" && HD.g[a].undoStack.length < 2) return false;
        var c = HD.g[a].toolbarIcon[b];
        if (c) {
            c.className = "hd-icon";
            HD.util.setOpacity(c, 100);
            c.onmouseover = function () {
                this.className += " cursor"
            };
            c.onmouseout = function () {
                this.className = this.className.replace(/ *cursor/i, "")
            };
            c.onclick = new Function('HD.util.click("' + a + '", "' + b + '")')
        }
    },
    disable_one: function (a, b) {
        if (b == "redo" && HD.g[a].redoStack.length == 1) return false;
        if (b == "undo" && HD.g[a].undoStack.length > 1) return false;
        if (a = HD.g[a].toolbarIcon[b]) {
            a.className = "hd-icon-disabled";
            HD.util.setOpacity(a, 50);
            a.onmouseover = null;
            a.onmouseout = null;
            a.onclick = null
        }
    },
    able: function (a, b) {
        HD.each(HD.g[a].toolbarIcon, function (c) {
            HD.util.inArray(c, b) || HD.toolbar.enable_one(a, c)
        })
    },
    disable: function (a, b) {
        HD.each(HD.g[a].toolbarIcon, function (c) {
            HD.util.inArray(c, b) || HD.toolbar.disable_one(a, c)
        })
    },
    create: function (a) {
        HD.g[a].toolbarIcon = [];
        var b = HD.$$("table");
        b.oncontextmenu = function () {
            return false
        };
        b.onmousedown = function () {
            return false
        };
        b.onmousemove = function () {
            return false
        };
        b.className = "hd-toolbar-table l";
        b.cellPadding = 0;
        b.cellSpacing = 0;
        b.border = 0;
        for (var c = b.insertRow(0), d = HD.g[a].items.length, e = 0; e < d; e++) {
            var f = HD.g[a].items[e];
            if (f != "-") {
                var g = c.insertCell(e),
                h = HD.$$("img");
                h.src = HD.g[a].skinsPath + "spacer.gif";
                h.className = "hd-icon-" + f;
                h.alt = HD.lang[f];
                var l = HD.$$("div");
                l.onmouseover = function () {
                    this.className += " cursor"
                };
                l.onmouseout = function () {
                    this.className = this.className.replace(/ *cursor/i, "")
                };
                l.appendChild(h);
                l.onclick = new Function('HD.util.click("' + a + '", "' + f + '")');
                if (f == "bold" && HD.util.inArray("fontstyle", HD.g[a].items)) l.style.marginRight = "0px";
                if (f == "justifyleft" && HD.util.inArray("justifymore", HD.g[a].items)) l.style.marginRight = "0px";
                if (f == "fontstyle" || f == "justifymore") {
                    l.style.marginLeft = "0px";
                    l.style.width = "12px";
                    l.style.borderLeft = "0"
                }
                if (f == "save") {
                    l.style.width = "40px";
                    l.innerHTML = '<span class="hd-icon-save">\u4fdd \u5b58</span>'
                }
                if (f == "preview") {
                    l.style.width = "40px";
                    l.innerHTML = '<span class="hd-icon-preview">\u9884 \u89c8</span>'
                }
                if (f == "source") {
                    l.style.width = "45px";
                    l.innerHTML = '<span class="hd-icon-source">\u6e90\u4ee3\u7801</span>'
                }
                g.title = HD.lang[f];
                g.appendChild(l);
                HD.g[a].toolbarIcon[f] = l
            }
        }
        return b
    }
};
HD.history = {
    add: function (a, b) {
        var c = HD.g[a],
        d = HD.util.getData(a, false);
        if (c.undoStack.length > 0) {
            var e = c.undoStack[c.undoStack.length - 1];
            if (d == e) return true;
            if (b && Math.abs(d.length - e.length) < c.minChangeSize) return true
        }
        c.undoStack.push(d);
        c.redoStack = [];
        HD.toolbar.disable_one(a, "redo");
        if (c.undoStack.length > 1) {
            HD.toolbar.enable_one(a, "undo");
            UnloadConfirm.set()
        }
    },
    undo: function (a) {
        var b = HD.g[a];
        if (b.undoStack.length == 0) HD.toolbar.disable_one(a, "undo");
        else {
            var c = HD.util.getData(a, false);
            b.redoStack.push(c);
            HD.toolbar.enable_one(a, "redo");
            var d = b.undoStack.pop();
            if (c == d && b.undoStack.length > 0) d = b.undoStack.pop();
            HD.g[a].idocument.body.innerHTML = d;
            b.newTextarea.value = d
        }
    },
    redo: function (a) {
        var b = HD.g[a];
        if (b.redoStack.length == 0) HD.toolbar.disable_one(a, "redo");
        else {
            var c = HD.util.getData(a, false);
            b.undoStack.push(c);
            HD.toolbar.enable_one(a, "undo");
            c = b.redoStack.pop();
            HD.g[a].idocument.body.innerHTML = c;
            b.newTextarea.value = c
        }
    }
};
HD.remove = function (a, b) {
    b = typeof b == "undefined" ? 0 : b;
    var c = HD.g[a].container;
    b == 1 ? document.body.removeChild(c) : HD.$(a).parentNode.removeChild(c);
    document.body.removeChild(HD.g[a].hideDiv);
    document.body.removeChild(HD.g[a].maskDiv);
    HD.g[a].containner = null
};
HD.shortcutMenu = {
    id: null,
    element: null,
    talbe: null,
    init: function (a) {
        this.id = a;
        var b = HD.$$("div");
        b.innerHTML = '<div class="shortcut" id="shortcut_a" style="display:none"><span><a id="shortcut_a_goto" target="_blank">\u6253\u5f00\u94fe\u63a5</a></span><span><a id="shortcut_a_unlink">\u53d6\u6d88\u94fe\u63a5</a></span></div><div class="shortcut" id="shortcut_img" style="display:none"><span>\u4f4d\u7f6e\uff1a<a id="shortcut_img_left" title="\u5de6\u5bf9\u9f50">\u5de6\u5bf9\u9f50</a></span><span><a  id="shortcut_img_right" title="\u53f3\u5bf9\u9f50">\u53f3\u5bf9\u9f50</a></span>|<span>\u5c3a\u5bf8\uff1a<a id="shortcut_img_s" title="\u957f\u8fb9' + (typeof g_img_big == "undefined" ? "300" : g_img_big) + '\u50cf\u7d20">\u5927\u56fe</a></span><span><a id="shortcut_img_140" title="\u957f\u8fb9' + (typeof g_img_small == "undefined" ? "140" : g_img_small) + '\u50cf\u7d20">\u5c0f\u56fe</a></span><span id="shortcut_img_des">| <a title="\u70b9\u51fb\u540e\u5728\u5149\u6807\u5904\u8f93\u5165\u6587\u672c">\u6dfb\u52a0\u63cf\u8ff0</a></span>|<span><a id="shortcut_img_remove" title="\u5220\u9664\u56fe\u7247">\u5220\u9664</a></span></div><div class="shortcut" id="shortcut_h" style="display:none"><span><a id="shortcut_h_cancel">\u53d6\u6d88\u76ee\u5f55</a></span><span><a id="shortcut_h_remove" title="\u5220\u9664\u76ee\u5f55">\u5220\u9664</a></span></div><div class="shortcut" id="shortcut_ref" style="display:none"><span><a id="shortcut_ref_edit">\u7f16\u8f91</a></span><span><a id="shortcut_ref_remove">\u5220\u9664</a></span></div>';
        document.body.appendChild(b);
        setTimeout('HD.shortcutMenu.bind_event("' + a + '")', 2)
    },
    hide: function () {
        HD.$("shortcut_a").style.display = "none";
        HD.$("shortcut_img").style.display = "none";
        HD.$("shortcut_h").style.display = "none";
        HD.$("shortcut_ref").style.display = "none"
    },
    show: function (a, b, c) {
        HD.shortcutMenu.hide();
        a = a || this.id;
        b = b || this.element;
        this.table = null;
        this.id = a;
        this.element = b;
        HD.util.selection(a);
        var d = b.nodeName;
        if (d != "BODY") {
            if (d == "A" && b.getElementsByTagName("img").length > 0) {
                this.element = b = b.getElementsByTagName("img")[0];
                d = "IMG"
            }
            var e = HD.util.getElementPos(b, HD.g[a].idocument),
            f = HD.util.getElementPos(HD.g[a].iframe),
            g = b.offsetHeight,
            h = f.y + e.y + g;
            f = f.x + e.x;
            var l = document.documentElement.clientWidth || document.body.clientWidth,
            r = HD.util.getDocOffsetWidth();
            if (l > 1440) f -= (l - r) / 2;
            var o = b;
            if (d == "STRONG" || d == "B" || d == "EM" || d == "I" || d == "U") for (; o && o.nodeName != "BODY";) {
                if (o.nodeName == "A") {
                    d = "A";
                    this.element = b = o;
                    break
                }
                o = o.parentNode
            }
            switch (d) {
            case "A":
                HD.$("shortcut_a").style.top = h + "px";
                HD.$("shortcut_a").style.left = f + "px";
                HD.$("shortcut_a").style.display = "block";
                HD.$("shortcut_a_goto").href = b.href;
                if (HD.browser == "IE") HD.$("shortcut_a_goto").onclick = function () {
                    window.open(this.href)
                };
                break;
            case "IMG":
                HD.$("shortcut_img").style.top = h - g - 28 + "px";
                HD.$("shortcut_img").style.left = f + "px";
                HD.$("shortcut_img").style.display = "block";
                this.img_checked();
                break;
            case "DIV":
                if (c.clientX) HD.clientX = c.clientX;
                if (!/hdwiki_tmm/i.test(b.className) || c.clientY > e.y + g) return false;
                HD.$("shortcut_h").style.top = h + "px";
                HD.$("shortcut_h").style.left = f + "px";
                HD.$("shortcut_h").style.display = "block";
                break;
            case "H3":
                HD.$("shortcut_h").style.top = h + "px";
                HD.$("shortcut_h").style.left = f + "px";
                HD.$("shortcut_h").style.display = "block";
                break;
            case "SUP":
                if (/refer/i.test(b.className) && HD.plugin.refer) {
                    HD.$("shortcut_ref").style.top = h + "px";
                    HD.$("shortcut_ref").style.left = f + "px";
                    HD.$("shortcut_ref").style.display = "block"
                }
                break;
            default:
                this.hide()
            }
            c = [];
            if (d == "DIV" && b.className == "hdwiki_tmml") {
                HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source", "title1"]);
                c.push("title1")
            } else if (d == "DIV" && b.className == "hdwiki_tmmll") {
                HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source", "title2"]);
                c.push("title2")
            } else if (d == "A") {
                HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source", "bold", "fontstyle", "innerlink"]);
                c.push("innerlink");
                /(<b>|<strong>)/i.test(b.innerHTML) && c.push("bold")
            } else if (d == "IMG") {
                HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source", "image"]);
                c.push("image")
            } else if (d == "B" || d == "STRONG") c.push("bold");
           // else if (d == "SPAN") / bold / i.test(b.style.fontWeight) && c.push("bold");
            else if (d == "H3") {
                HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source", "title2"]);
                c.push("title2");
            } else if (d == "SUP" || d == "SUB") HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source", "specialchar", "fontstyle", "bold", "refer"]);
            for (; b && b.nodeName != "BODY";) {
                if (b.nodeName == "TD") {
                    HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "paste", "bold", "fontstyle", "justifyleft", "justifymore", "innerlink", "image", "media", "table", "specialchar", "source", "refer"]);
                    c.push("table");
                    HD.iframeClickTag = "";
                    break
                }
                b = b.parentNode
            }
            for (i in c) if (HD.g[a].toolbarIcon[c[i]]) HD.g[a].toolbarIcon[c[i]].className = "hd-icon-selected";
            return false
        }
    },
    bind_event: function (a) {
        HD.event.add(HD.g[a].idocument, "mouseup", function () {
            HD.shortcutMenu.img_reset()
        });
        HD.event.add(HD.$("shortcut_a_unlink"), "click", function () {
            HD.shortcutMenu.a_unlink()
        });
        HD.event.add(HD.$("shortcut_h_cancel"), "click", function () {
            HD.shortcutMenu.to_text()
        });
        HD.event.add(HD.$("shortcut_h_remove"), "click", function () {
            HD.shortcutMenu.remove()
        });
        HD.event.add(HD.$("shortcut_img_remove"), "click", function () {
            HD.shortcutMenu.remove()
        });
        HD.event.add(HD.$("shortcut_img_left"), "click", function () {
            HD.shortcutMenu.img_align("left")
        });
        HD.event.add(HD.$("shortcut_img_right"), "click", function () {
            HD.shortcutMenu.img_align("right")
        });
        HD.event.add(HD.$("shortcut_img_s"), "click", function () {
            HD.shortcutMenu.img_size("s")
        });
        HD.event.add(HD.$("shortcut_img_140"), "click", function () {
            HD.shortcutMenu.img_size("140")
        });
        HD.event.add(HD.$("shortcut_img_des"), "click", function () {
            HD.shortcutMenu.img_add_des_div()
        });
        HD.event.add(HD.$("shortcut_ref_edit"), "click", function () {
            HD.shortcutMenu.ref_edit()
        });
        HD.event.add(HD.$("shortcut_ref_remove"), "click", function () {
            HD.shortcutMenu.ref_remove()
        })
    },
    to_text: function (a, b) {
        var c = this.id || HD.id;
        b = b || this.element;
        HD.history.add(c, false);
        a = a || b.text || b.innerText || b.innerHTML;
        if (HD.browser == "IE" || HD.browser == "OPERA") b.outerHTML = a;
        else try {
            b.parentNode.removeChild(b);
            HD.util.selection(c);
            HD.util.insertHtml(c, a)
        } catch(d) {}
        HD.shortcutMenu.hide()
    },
    a_unlink: function () {
        var a = HD.g[this.id || HD.id].toolbarIcon.innerlink;
        a.className = a.className.replace(/ *hd-icon-selected/i, "");
        this.to_text(this.element.innerHTML)
    },
    remove: function () {
        var a = this.id,
        b = this.table,
        c = this.element;
        if (b) var d = b.getElementsByTagName("td").length,
        e = b.getElementsByTagName("img").length;
        try {
            b && d <= 2 && e == 1 ? b.parentNode.removeChild(b) : c.parentNode.removeChild(c);
            HD.history.add(a, false)
        } catch(f) {}
        HD.shortcutMenu.hide()
    },
    img_align: function (a) {
        var b = this.table || this.element;
        if (b.nodeName == "A" || b.nodeName == "TABLE") b.align = a;
        else if (b.nodeName == "DIV") b.className = a == "left" ? "img img_l" : "img img_r";
        else if (b.nodeName == "IMG") b.align = a;
        if (a == "left") {
            HD.$("shortcut_img_left").className = "checked";
            HD.$("shortcut_img_right").className = ""
        } else {
            HD.$("shortcut_img_left").className = "";
            HD.$("shortcut_img_right").className = "checked"
        }
        this.show()
    },
    img_size: function (a) {
        var b = this.element.src,
        c, d = new Image;
        if (! (a == "s" && b.indexOf("_s.") > -1 || a == "140" && b.indexOf("_140.") > -1)) {
            c = a == "s" ? b.replace("_140.", "_s.") : b.replace("_s.", "_140.");
            d.onload = function () {
                if (HD.shortcutMenu.table && HD.shortcutMenu.table.tagName == "DIV") HD.shortcutMenu.table.style.width = this.width;
                if (a == "s") {
                    HD.shortcutMenu.element.src = b.indexOf("_140.") > -1 ? b.replace("_140.", "_s.") : b.replace(/\.(\w{3})$/i, "_s.$1");
                    HD.$("shortcut_img_s").className = "checked";
                    HD.$("shortcut_img_140").className = ""
                } else {
                    HD.shortcutMenu.element.src = b.indexOf("_s.") > -1 ? b.replace("_s.", "_140.") : b.replace(/\.(\w{3})$/i, "_140.$1");
                    HD.$("shortcut_img_s").className = "";
                    HD.$("shortcut_img_140").className = "checked"
                }
                HD.shortcutMenu.show()
            };
            d.onerror = function () {
                alert("\u6ca1\u6709\u5bf9\u5e94\u5c3a\u5bf8\u7684\u56fe\u7247\uff01")
            };
            d.src = c
        }
    },
    _checked: function (a) {
        if (a) {
            if ((a.nodeName == "TABLE" || a.nodeName == "IMG") && a.align) {
                if (/left|right/i.test(a.align)) HD.$("shortcut_img_" + a.align).className = "checked"
            } else if (a.nodeName == "DIV") if (/img_l/i.test(a.className)) HD.$("shortcut_img_left").className = "checked";
            else HD.$("shortcut_img_right").className = "checked";
            if (this.element.src.indexOf("_s.") > 0) HD.$("shortcut_img_s").className = "checked";
            else if (this.element.src.indexOf("_140.") > 0) HD.$("shortcut_img_140").className = "checked"
        }
    },
    img_checked: function () {
        var a = this.element,
        b = a.parentNode,
        c = b.nodeName;
        HD.$("shortcut_img_left").className = "";
        HD.$("shortcut_img_right").className = "";
        HD.$("shortcut_img_s").className = "";
        HD.$("shortcut_img_140").className = "";
        HD.$("shortcut_img_des").style.display = "";
        if ((c == "A" || c == "P") && b.parentNode.nodeName == "TD") {
            if (b.parentNode.getElementsByTagName("IMG").length == 1) {
                c = "TD";
                b = b.parentNode
            }
        } else if (c == "A" && b.parentNode.nodeName == "DIV") {
            c = "DIV";
            b = b.parentNode
        } else if (c == "TD") if (b.parentNode.getElementsByTagName("IMG").length > 1) c = "IMG";
        switch (c) {
        case "P":
        case "BODY":
        case "A":
            if (/right/i.test(a.align)) {
                b = parseInt(HD.$("shortcut_img").style.left) - HD.$("shortcut_img").offsetWidth + a.offsetWidth;
                HD.$("shortcut_img").style.left = b + "px"
            }
            this._checked(a);
            break;
        case "DIV":
            c = b;
            var d = c.getElementsByTagName("strong") || c.getElementsByTagName("font");
            b = parseInt(HD.$("shortcut_img").style.left);
            var e = parseInt(HD.$("shortcut_img").style.top);
            if (HD.browser == "IE") {
                e -= 13;
                b -= 18
            } else {
                e -= 6;
                b -= 10
            }
            HD.$("shortcut_img").style.top = e + "px";
            HD.$("shortcut_img").style.left = b + "px";
            if (d.length == 1) HD.$("shortcut_img_des").style.display = "none";
            this.table = c;
            if (/img_r/i.test(c.className)) {
                b = parseInt(HD.$("shortcut_img").style.left) - HD.$("shortcut_img").offsetWidth + c.offsetWidth;
                HD.$("shortcut_img").style.left = b + "px"
            }
            this._checked(c);
            this._img_cursor_position(a);
            break;
        case "TD":
            b = b.parentNode.parentNode;
            this.table = c = b.nodeName == "TBODY" ? b.parentNode : b;
            b = b.getElementsByTagName("tr");
            d = b[0].getElementsByTagName("td");
            if (b.length == 2 && d.length == 1) HD.$("shortcut_img_des").style.display = "none";
            if (/right/i.test(c.align)) {
                b = parseInt(HD.$("shortcut_img").style.left) - HD.$("shortcut_img").offsetWidth + c.offsetWidth;
                HD.$("shortcut_img").style.left = b + "px"
            }
            this._checked(c);
            this._img_cursor_position(a);
            break;
        default:
            this._checked(a);
            break
        }
    },
    img_reset: function () {
        var a = this.element || this.table;
        if (a) {
            a.removeAttribute("width", false);
            a.removeAttribute("height", false);
            a.style.width = "";
            a.style.height = ""
        }
    },
    _img_cursor_position: function (a) {
        var b = this.id,
        c, d;
        pel = a.parentNode;
        if (pel.nodeName == "A" && pel.parentNode.nodeName == "TD") {
            d = pel;
            d = d.parentNode;
            d = d.parentNode.parentNode;
            this.table = d.nodeName == "TBODY" ? d.parentNode : d;
            this.element = a;
            d = d.getElementsByTagName("tr");
            if (d.length == 1) {
                d = d[0].getElementsByTagName("font");
                if (d.length == 0) return false;
                else {
                    d = d[0];
                    HD.$("shortcut_img_des").style.display = "none"
                }
            } else if (d.length == 2) {
                d = d[1].getElementsByTagName("td")[0];
                HD.$("shortcut_img_des").style.display = "none"
            } else return false
        } else if (pel.nodeName == "A" && pel.parentNode.nodeName == "DIV") {
            d = pel.parentNode;
            d = d.getElementsByTagName("strong") || d.getElementsByTagName("font");
            if (d.length == 1) d = d[0];
            else return false
        } else if (pel.nodeName == "DIV") {
            d = a.parentNode;
            d = d.getElementsByTagName("strong") || d.getElementsByTagName("font");
            if (d.length == 1) d = d[0];
            else return false
        }
        if (HD.browser == "IE") try {
            var e = a.cloneNode();
            pel.insertBefore(e, a);
            pel.removeChild(a);
            this.element = e;
            c = HD.g[b].idocument.body.createTextRange();
            c.moveToElementText(d);
            c.collapse(true);
            c.select()
        } catch(f) {} else if (d) {
            HD.util.selection(b);
            c = HD.g[b].range;
            if (d.hasChildNodes() && d.childNodes[0].nodeType == 1) d = d.childNodes[0];
            c.selectNodeContents(d);
            c.collapse(true)
        }
    },
    img_add_des_div: function () {
        var a = this.id,
        b = this.element;
        this._img_add_des_div(this.table, b);
        HD.history.add(a, false);
        b = HD.$("img_tmp_id", HD.g[a].idocument);
        b.removeAttribute("id");
        HD.shortcutMenu._img_cursor_position(b);
        HD.$("shortcut_img_des").style.display = "none"
    },
    _img_add_des_div: function (a, b) {
        var c = this.id,
        d = "",
        e = "img_r",
        f = "&nbsp;",
        g = 0,
        h = "";
        b = b || a.getElementsByTagName("IMG")[0];
        if (a) g = a.getElementsByTagName("IMG").length;
        if (a && g == 1) {
            f = a.innerText || a.textContent || "&nbsp;";
            f = HD.util.trim(f);
            e = a.align ? a.align == "right" ? "img_r" : "img_l" : /img_l/i.test(a.className) ? "img_l" : "img_r"
        } else e = b.align == "right" ? "img_r" : "img_l";
        d = '<IMG id="img_tmp_id" src="' + b.src + '"';
        if (b.alt) d += ' alt="' + b.alt + '"';
        if (b.title) d += ' title="' + b.title + '"';
        d += "/>";
        if (b.parentNode.nodeName == "A") h = b.parentNode.href;
        else if (HD.util.isHudong()) {
            h = b.src.match(/http:\/\/(a\d)\.att\.hudong\.com\/(\d{2})\/(\d{2})\/(\d{20,32})_[\w]{1,3}\.(\w{3})/i);
            h = "http://tupian.hudong.com/" + h[1] + "_" + h[2] + "_" + h[3] + "_" + h[4] + "_" + h[5] + ".html"
        } else {
            h = b.getAttribute("src");
            h = h.replace(/_(s|140)\./, ".")
        }
        d = '<A href="' + h + '" target="_blank" title="' + f + '">' + d + "</A>";
        d += "<STRONG>" + f + "</STRONG>";
        c = HD.$$("div", HD.g[c].idocument);
        c.className = "img " + e;
        c.style.width = b.width + "px";
        c.innerHTML = d;
        if (a && g == 1) {
            a.parentNode.insertBefore(c, a);
            a.parentNode.removeChild(a)
        } else { if (b.parentNode.nodeName == "A") b = b.parentNode;
            b.parentNode.insertBefore(c, b);
            b.parentNode.removeChild(b)
        }
    },
    ref_edit: function () {
        var a = this.element.getAttribute("name");
        HD.plugin.refer.ref_edit(a);
        HD.$("shortcut_ref").style.display = "none"
    },
    ref_remove: function () {
        var a = this.element,
        b = a.getAttribute("name");
        a.parentNode.removeChild(a);
        HD.$("shortcut_ref").style.display = "none";
        HD.plugin.refer.ref_remove(b)
    }
};
HD.create = function (a, b) {
    hdeditor_resize();
    if (HD.browser == "IE") try {
        document.execCommand("BackgroundImageCache", false, true)
    } catch(c) {}
    var d = HD.$(a);
    b = typeof b == "undefined" ? 0 : b;
    if (! (b == 0 && HD.g[a].container != null)) {
        var e = d.style.width,
        f = d.style.height,
        g;
        if (HD.g[a].id_container) g = HD.$(HD.g[a].id_container);
        else {
            g = HD.$$("div");
            g.className = "hd-container";
            g.style.width = e;
            g.style.height = f;
            b == 1 ? document.body.appendChild(g) : d.parentNode.insertBefore(g, d)
        }
        b = HD.toolbar.create(a);
        HD.g[a].position_toolbar ? HD.$(HD.g[a].position_toolbar).appendChild(b) : g.appendChild(b);
        if (HD.g[a].id_toolbar) b = HD.$(HD.g[a].id_toolbar);
        var h = HD.util.trim(d.value);
        h || (h = "<p>&nbsp;</p>");
        var l = HD.$$("iframe");
        l.className = "hd-iframe";
        l.setAttribute("frameBorder", "0");
        HD.g[a].autoHeight && l.setAttribute("scrolling", "no");
        l.style.height = HD.g[a].minHeight + "px";
        l.style.width = "100%";
        e = HD.$$("textarea");
        e.className = "hd-textarea";
        e.style.display = "none";
        if (HD.g[a].position_content) {
            HD.$(HD.g[a].position_content).appendChild(l);
            HD.$(HD.g[a].position_content).appendChild(e);
            f = HD.$(HD.g[a].position_content)
        } else {
            f = HD.$$("div");
            f.className = "hd-form";
            f.appendChild(l);
            f.appendChild(e);
            g.appendChild(f)
        }
        var r = HD.$$("table");
        r.className = "hd-bottom";
        r.cellPadding = 0;
        r.cellSpacing = 0;
        r.border = 0;
        var o = r.insertRow(0),
        s = o.insertCell(0);
        s.className = "hd-bottom-left";
        o = o.insertCell(1);
        o.className = "hd-bottom-right";
        var p = HD.$$("img");
        p.className = "hd-bottom-right-img";
        p.src = HD.g[a].skinsPath + "spacer.gif";
        o.appendChild(p);
        g.appendChild(r);
        var q = HD.$$("div");
        q.style.display = "none";
        document.body.appendChild(q);
        var t = HD.$$("div");
        t.className = "hd-mask";
        HD.util.setOpacity(t, 40);
        document.body.appendChild(t);
        d.style.display = "none";
        HD.util.setDefaultPlugin(a);
        var v = l.contentWindow;
        p = HD.util.getIframeDoc(l);
        p.designMode = "On";
        h = HD.util.getFullHtml(a, h);
        p.open();
        p.write(h);
        p.close();
        if (!HD.g[a].wyswygMode) {
            e.value = d.value;
            e.style.display = "block";
            l.style.display = "none";
            HD.toolbar.disable(a, ["save", "preview", "source", "preview", "fullscreen"])
        }
        if (HD.g[a].autoOnsubmitMode) {
            for (h = d.parentNode; h != null && h.tagName != "FORM";) h = h.parentNode;
            h != null && h.tagName == "FORM" && HD.event.add(h, "submit", new Function('HD.util.setData("' + a + '")'))
        }
        try {
            HD.event.add(p, "click", new Function('if(typeof HD!="undefined") HD.layout.hide("' + a + '")'));
            HD.event.add(p, "keyup", new Function('if(typeof HD!="undefined") HD.history.add("' + a + '", true)'))
        } catch(w) {}
        HD.g[a].container = g;
        HD.g[a].toolbarDiv = b;
        HD.g[a].formDiv = f;
        HD.g[a].iframe = l;
        HD.g[a].newTextarea = e;
        HD.g[a].srcTextarea = d;
        HD.g[a].bottom = r;
        HD.g[a].hideDiv = q;
        HD.g[a].maskDiv = t;
        HD.g[a].iframeWin = v;
        HD.g[a].idocument = p;
        e = g.offsetWidth;
        f = g.offsetHeight;
        HD.g[a].width = e + "px";
        HD.g[a].height = f + "px";
        HD.g[a].toolbarTop = HD.util.getElementPos(b).y;
        HD.g[a].domFilterResult = "";
        HD.util.resize(a, e, f);
        HD.util.drag(a, o, g, function (m, k, n, u, x, y) {
            if (HD.g[a].resizeMode == 2) HD.util.resize(a, n + y, u + x);
            else HD.g[a].resizeMode == 1 && HD.util.resize(a, n, u + x)
        });
        HD.util.drag(a, s, g, function (m, k, n, u, x) {
            HD.util.resize(a, n, u + x)
        });
        HD.g[a].resizeMode || HD.util.hideBottom(a);
        setTimeout(function () {
            HD.history.add(a, false);
            HD.util.autoHeight(a);
            hdeditor_resize();
            HD.util.checkExternalLink(a)
        },
        500);
        HD.toolbar.disable_one(a, "undo");
        HD.toolbar.disable_one(a, "redo");
        if (HD.browser == "IE") {
            setTimeout(function () {
                HD.util.selection(a);
                var m = HD.g[a].range;
                m.moveStart("sentence", -999999);
                m.moveEnd("sentence", -999999);
                m.collapse(true);
                m.select()
            },
            500);
            HD.$("hd_container").onselectstart = function () {
                return false
            };
            HD.event.add(p.body, "drop", function (m) {
                if (m.dataTransfer.getData("text")) {
                    HD.shortcutMenu.hide();
                    HD.history.add(a, false)
                } else return false
            })
        }
        setInterval(function () {
            HD.util.autoHeight(a)
        },
        1E3);
        HD.event.add(p, "keydown", function (m) {
            return HD.util.editorEvent(HD.browser == "IE" ? l.contentWindow.event : m, a)
        });
        HD.event.add(p, "click", function (m) {
            HD.g[a].layoutDiv = null;
            HD.shortcutMenu.show(a, HD.util.getParentElement(a), m);
            return HD.util.editorEvent(HD.browser == "IE" ? l.contentWindow.event : m, a)
        });
        HD.event.add(p, "keydown", function (m) {
            var k = m.keyCode,
            n = HD.util.getParentElement(a);
            if (n.tagName == "SUP" && /refer/i.test(n.className)) {
                if (k >= 37 && k <= 40) return true;
                else if (k == 8 || k == 46) {
                    HD.shortcutMenu.hide();
                    n.parentNode.removeChild(n);
                    if (HD.browser == "IE") m.returnValue = false;
                    else m.preventDefault();
                    return false
                }
                HD.util.cursorToNext(a, n)
            }
            HD.shortcutMenu.hide()
        });
        HD.event.add(p, "mousedown", function (m) {
            var k = m = m.target || m.srcElement,
            n = m.tagName;
            if (!HD.iframeClickTag || HD.iframeClickTag != n) {
                for (; k && k.nodeName != "BODY";) {
                    if (k.nodeName == "TD") break;
                    k = k.parentNode
                }
                k && k.nodeName == "TD" ? HD.toolbar.able(a, ["title1", "title2"]) : HD.toolbar.able(a, [])
            }
            if (n != "A" && /^strong|b|em|i|u$/i.test(m.tagName)) for (k = m; k && k.nodeName != "BODY";) {
                if (k.nodeName == "A") {
                    n = "A";
                    m = k;
                    break
                }
                k = k.parentNode
            }
            if (n == "A") {
                HD.iframeClickA = m;
                HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source", "bold", "fontstyle", "innerlink", "link"])
            }
            HD.iframeClickTag = n
        });
        HD.event.add(p, "mouseup", function (m) {
            m = m.target || m.srcElement;
            var k = m.tagName;
            if (/<\/table>|hdwiki_tmml/i.test(HD.util.getSelectedText(a, "html"))) {
                HD.iframeClickTag = "";
                HD.toolbar.disable(a, ["save", "preview", "copy", "refer", "source"])
            } else {
                var n = HD.util.getSelectedText(a);
                if (n) n = HD.util.trim(n);
                if (n) if (HD.util.strlen(n) > 40 || /[\n\r\*#%~><\/\\]/i.test(n)) {
                    HD.toolbar.disable_one(a, "title1");
                    HD.toolbar.disable_one(a, "title2");
                    HD.toolbar.disable_one(a, "innerlink");
                    HD.iframeClickTag = ""
                }
                HD.browser == "IE" && m.nodeName == "IMG" && HD.shortcutMenu.show(a, m);
                if (k != "A" && /^strong|b|em|i|u$/i.test(m.tagName)) for (var u = m; u && u.nodeName != "BODY";) {
                    if (u.nodeName == "A") {
                        k = "A";
                        m = u;
                        break
                    }
                    u = u.parentNode
                }
                if (HD.iframeClickTag == k) if (k == "A") HD.iframeClickA == m ? HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source", "bold", "fontstyle", "innerlink", "link"]) : HD.toolbar.disable(a, ["save", "preview", "copy", "source"]);
                else HD.iframeClickA = "";
                else { if (k == "A" || HD.iframeClickTag == "A") HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source"]);
                    HD.iframeClickTag = "";
                    HD.iframeClickA = ""
                }
            }
        });
        HD.event.add(HD.browser == "IE" ? p.body : p, "paste", function (m) {
            var k = HD.util.getParentElement(a);
            if (k.nodeName == "DIV" && k.className.indexOf("hdwiki_tmml") > -1) {
                HD.util.showTip(a, "\u8bf7\u4e0d\u8981\u5728\u76ee\u5f55\u4e0a\u6267\u884c\u7c98\u5e16\u64cd\u4f5c\u3002");
                if (HD.browser == "IE") m.returnValue = false;
                else m.preventDefault();
                return false
            }
            if (!HD.util.filterIgnore()) {
                if (HD.browser == "IE") {
                    k = window.clipboardData.getData("text");
                    if (!k) return false;
                    if (window.clipboardData.setData("Text", k)) {
                        k = window.clipboardData.getData("text");
                        k = HD.util.filter65279(k);
                        k = k.replace(/\n/g, "<br>");
                        HD.util.insertHtml(a, k)
                    } else HD.plugin.dopaste.click(a);
                    m.returnValue = false
                } else {
                    HD.plugin.dopaste.click(a);
                    m.preventDefault()
                }
                return false
            }
            HD.timeout && clearTimeout(HD.timeout);
            HD.timeout = setTimeout(function () {
                HD.util.checkExternalLink(a)
            },
            500)
        });
        setTimeout(function () {
            HD.plugin.refer && HD.plugin.refer.loaddata(1)
        },
        500);
        HD.timeout = setTimeout(function () {
            HD.util.checkExternalLink(a)
        },
        1E3);
        HD.timeout = setTimeout(function () {
            HD.util.clearEmptyTag(a)
        },
        2E3);
        HD.timeout = setTimeout(function () {
            HD.util.clearEmptyTag(a)
        },
        3E3);
        HD.timeout = setTimeout(function () {
            HD.util.clearEmptyTag(a)
        },
        5E3);
        setInterval(function () {
            HD.util.checkExternalLink(a)
        },
        2E4);
        HD.event.add(window, "scroll", function (m) {
            HD.util.autoToolbarTop(a, "scroll");
            HD.shortcutMenu.hide();
            HD.layout.hide(a, m);
            if (HD.g[a].layoutDiv && !/dialog/i.test(HD.g[a].layoutDiv.className)) HD.g[a].layoutDiv = null
        });
        HD.event.add(document, "keydown", function (m) {
            if (m.keyCode == 27) if (HD.g[a].hideDiv.innerHTML) {
                HD.util.select(a);
                HD.util.focus(a);
                HD.layout.hide(a)
            }
        });
        HD.event.add(document.body, "click", function (m) {
            var k = m.target || m.srcElement;
            k = k.nodeName.toLowerCase() == "span" ? k.parentNode || k : k;
            if (!k || k.id && k.id.indexOf("shortcut") > -1) return false;
            HD.shortcutMenu.hide();
            if (! (k && /hd-icon/i.test(k.className))) {
                k = HD.g[a].hideDiv.childNodes;
                if (k.length == 1) if ((k = k[0]) && /dialog/i.test(k.className)) return;
                HD.layout.hide(a, m);
                HD.g[a].layoutDiv = null
            }
        });
        HD.util.isIE6() ? setInterval(function () {
            hdeditor_resize("resize")
        },
        2E3) : HD.event.add(window, "resize", function () {
            hdeditor_resize()
        });
        HD.shortcutMenu.init(a);
        HD.util.addSubmitIframe()
    }
};
HD.version = "1.0";
HD.scriptPath = HD.util.getScriptPath();
HD.htmlPath = HD.util.getHtmlPath();
HD.browser = HD.util.getBrowser();
HD.userAgent = navigator.userAgent.toLowerCase();
HD.plugin = {};
HD.g = {};
HD.init = function (a) {
    a.wyswygMode = typeof a.wyswygMode == "undefined" ? true : a.wyswygMode;
    a.autoOnsubmitMode = typeof a.autoOnsubmitMode == "undefined" ? true : a.autoOnsubmitMode;
    a.resizeMode = typeof a.resizeMode == "undefined" ? 0 : a.resizeMode;
    a.filterMode = typeof a.filterMode == "undefined" ? true : a.filterMode;
    a.skinType = a.skinType || "default";
    a.cssPath = a.cssPath || "";
    a.skinsPath = a.skinsPath || HD.scriptPath + "skins/";
    a.pluginsPath = a.pluginsPath || HD.scriptPath + "plugins/";
    a.minWidth = a.minWidth || 200;
    a.minHeight = a.minHeight || 100;
    a.maxHeight = a.maxHeight || 5E4;
    a.minChangeSize = a.minChangeSize || 5;
    a.siteDomains = a.siteDomains || [];
    var b = ["copy", "cut", "paste", "fontstyle", "title1", "title2", "image", "media", "table", "source"];
    a.defaultItems = b;
    a.items = a.items || b;
    a.id_container = a.id_container || "";
    a.id_toolbar = a.id_toolbar || "";
    a.position_toolbar = a.position_toolbar || "";
    a.position_content = a.position_content || "";
    a.filterExternal = typeof a.filterExternal == "undefined" ? 1 : a.filterExternal;
    a.autoHeight = typeof a.autoHeight == "undefined" ? 1 : a.autoHeight;
    b = {
        font: [],
        span: ["class", "style", ".font-weight", ".font-style", ".text-decoration"],
        div: ["class", "style", ".width", ".text-align"],
        a: ["class", "href", "target", "title", "alt"],
        embed: ["style", "src", "type", "loop", "autostart", "quality", ".width", ".height", "flename", "width", "height", "volume", "pluginspage", "console", "controls", "/"],
        img: ["src", "alt", "title", "align", "class", "/"],
        hr: ["/"],
        br: ["/"],
        p: ["class", "align", "style", ".text-align"],
        table: ["class", "style", "width", ".width", "align"],
        tbody: [],
        tr: ["class"],
        td: ["class", "align", "colspan", "rowspan"],
        strong: ["class", "style", ".width"],
        b: ["class"],
        ol: ["class"],
        ul: ["class"],
        li: ["class"],
        sub: ["class"],
        sup: ["class", "name"],
        blockquote: ["class"],
        h2: ["class"],
        h3: ["class"],
        h4: ["class"],
        h5: ["class"],
        h6: ["class"],
        em: ["class"],
        i: ["class"],
        u: ["class"],
        strike: ["class"],
        object: ["classid", "class", "id", "width", "height", "codebase"],
        param: ["name", "value"]
    };
    a.htmlTags = a.htmlTags || b;
    HD.g[a.id] = a;
    HD.g[a.id].undoStack = [];
    HD.g[a.id].redoStack = [];
    HD.util.loadStyle(a.skinsPath + a.skinType + ".css");
    HD.id = HD.id || a.id
};
HD.show = function (a) {
    HD.init(a);
    HD.event.add(window, "load", new Function('HD.create("' + a.id + '")'))
};
HD.plugin.clean = {
    click: function (a) {
        if (HD.g[a].isClean == true) HD.util.autoCloseTip(a, "\u5185\u5bb9\u4e0d\u9700\u8981\u6574\u7406", 1.5);
        else {
            HD.history.add(a, false);
            HD.util.uploading(a, "\u6b63\u5728\u6574\u7406\u5185\u5bb9\uff0c\u8bf7\u7a0d\u7b49...");
            setTimeout(function () {
                if (HD.util.changeData(a, HD.util.getData(a))) {
                    HD.$("hd_dialog_tip").innerHTML = "\u6574\u7406\u5b8c\u6bd5\u3002";
                    setTimeout(function () {
                        HD.g[a].isClean = true;
                        HD.layout.hide(a)
                    },
                    1E3)
                }
            },
            500)
        }
    }
};
HD.plugin.tip = {
    callback: null,
    click: function (a, b, c, d) {
        this.callback = c;
        b = '<li><div style="width:300px">' + b + "</div></li>";
        (new HD.dialog2({
            id: a,
            cmd: "tip",
            content: b,
            width: 350,
            height: 200,
            title: "\u63d0\u793a",
            yesButton: "\u767b\u9646",
            noButton: HD.lang.close,
            notFocus: d
        })).show();
        return true
    },
    exec: function () {
        typeof this.callback == "function" && this.callback()
    }
};
HD.plugin.save = {
    click: function (a) {
        /hudong.com/i.test(location.host) ? HD.buttonEvent.saveDoc() : autoSave(0, function () {
            HD.util.showTip(a, "\u4fdd\u5b58\u6210\u529f");
            setTimeout(function () {
                HD.layout.hide(a)
            },
            1E3)
        })
    }
};
HD.plugin.preview = {
    click: function () {
        /hudong.com/i.test(location.host) ? HD.buttonEvent.previewDoc() : previewDoc()
    }
};
HD.plugin.undo = {
    click: function (a) {
        HD.history.undo(a)
    }
};
HD.plugin.redo = {
    click: function (a) {
        HD.history.redo(a)
    }
};
HD.plugin.bold = {
    click2: function () {},
    click: function (a) {
        HD.util.execCommand(a, "bold", null)
    }
};
HD.plugin.italic = {
    click2: function () {},
    click: function (a) {
        HD.util.select(a);
        HD.util.execCommand(a, "italic", null)
    }
};
HD.plugin.underline = {
    click2: function () {},
    click: function (a) {
        HD.util.selection(a);
        HD.util.execCommand(a, "underline", null)
    }
};
HD.plugin.source = {
    click: function (a) {
        var b;
        b = HD.g[a].idocument.body.innerHTML;
        b = HD.util.filterData(b);
        HD.objectList = [];
        if (/<\/object>/i.test(b)) {
            HD.objectList = b.match(/<object.*?>[\s\S]*?<\/object>/ig);
            for (var c = 0; c < HD.objectList.length; c++) b = b.replace(HD.objectList[c], "{object" + c + "}")
        } (new HD.dialog2({
            id: a,
            cmd: "source",
            content: '<li><textarea id="hd_input_source" style="width:720px;height:400px;"></textarea></li>',
            width: 780,
            height: 450,
            title: HD.lang.source,
            yesButton: HD.lang.yes,
            noButton: HD.lang.no,
            notFocus: true
        })).show();
        document.onselectstart = null;
        setTimeout(function () {
            HD.$("hd_input_source").value = b
        },
        500)
    },
    exec: function (a) {
        var b = HD.g[a];
        HD.g[a].isClean = false;
        try {
            var c = HD.util.trim(HD.$("hd_input_source").value);
            if (c.indexOf("<") == -1) c = "<p>" + c + "</p>";
            else if (c) {
                c = c.replace(/<(style|(no)?script|select|object|textarea|iframe|title|option|noframes|map|applet).*?>[\s\S]*?<\/\1>/gi, "");
                c = c.replace(/<!--[\s\S]*?--\>/gi, "");
                c = c.replace(/<(link|input|form|center|base|button|frame(set)?|area|meta)[^>]*?>/gi, "");
                c = c.replace(/<\/(form|center|frameset)>/gi, "");
                if (HD.objectList.length) for (var d = 0; d < HD.objectList.length; d++) c = c.replace("{object" + d + "}", HD.objectList[d])
            }
            c = HD.util.filter65279(c);
            b.idocument.body.innerHTML = c || "<p>&nbsp;</p>"
        } catch(e) {}
        HD.history.add(a, false);
        HD.layout.hide(a);
        document.onselectstart = function () {
            return false
        };
        setTimeout(function () {
            HD.util.checkExternalLink(a)
        },
        500)
    }
};
HD.plugin.dopaste = {
    click: function (a) {
        (new HD.dialog2({
            id: a,
            cmd: "dopaste",
            content: '<li><div>\u7531\u4e8e\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u5141\u8bb8\u7f16\u8f91\u5668\u8bbf\u95ee\u526a\u8d34\u677f\uff0c\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+V)\u628a\u5185\u5bb9\u7c98\u8d34\u5230\u65b9\u6846\u91cc\uff0c\u518d\u6309 <b>\u786e\u5b9a</b> \u6309\u94ae\u3002</div>\t\t<textarea name="hd_input_dopaste" id="hd_input_dopaste" style="width:720px;height:400px;"></textarea></li>',
            width: 780,
            height: 450,
            title: HD.lang.dopaste,
            yesButton: HD.lang.yes,
            noButton: HD.lang.close
        })).show();
        document.onselectstart = null
    },
    exec: function (a) {
        var b = HD.$("hd_input_dopaste").value;
        b = HD.util.filter65279(b);
        b = HD.util.escape(b);
        if (b != "") {
            b = b.replace(/\n/g, "<br>\n");
            HD.util.insertHtml(a, b)
        }
        HD.util.select(a);
        HD.layout.hide(a);
        HD.util.focus(a);
        return false
    }
};
HD.plugin.image = {
    id: "",
    changeSrc: function (a) {
        HD.imageSelectError = 0;
        var b = this,
        c = "",
        d = /\.(jpg|gif|png)$/i;
        c = HD.$("photofile").value;
        if (HD.util.isHudong()) d = /\.(jpg|gif)$/i;
        if (c == "" || !c.match(d)) {
            b.error("\u63d0\u793a\uff1a\u8bf7\u9009\u62e9\u4e00\u4e2a\u6709\u6548\u7684\u56fe\u7247\u6587\u4ef6\uff01");
            return false
        } else HD.$("hd_dialog_tip").style.display = "none";
        if (/MSIE/.test(navigator.userAgent)) {
            if (b = document.getElementById("hd_img_checker")) b.src = a.value
        } else if (/Firefox|Safari/i.test(navigator.userAgent)) {
            a = document.getElementById("photofile");
            if (a.files[0].fileSize > 1048576) {
                HD.imageSelectError = 1;
                b.error("\u63d0\u793a\uff1a\u56fe\u7247\u5927\u5c0f\u8d85\u8fc7\u9650\u5236\uff0c\u8bf7\u63a7\u5236\u57281M\u4ee5\u5185\uff01")
            } else HD.$("hd_dialog_tip").style.display = "none"
        }
    },
    click: function (a) {
        var b = this,
        c = HD.g[a].skinsPath,
        d = HD.$("_doc_title") ? HD.$("_doc_title").value : "",
        e = HD.$("curuser_iden") ? HD.$("curuser_iden").value : "",
        f = HD.$("editform") ? HD.$("editform").action : "";

        HD.imageUploading = 0;
        if (HD.util.isHudong() && e == "") return HD.plugin.tip.click(a, "\u63d0\u793a\uff1a\u53ea\u6709\u767b\u5f55\u7684\u7528\u6237\u624d\u53ef\u4ee5\u4e0a\u4f20\u56fe\u7247\u3002", function () {
            HD.plugin.login && HD.plugin.login.show()
        });
        if (/^http:\/\/www\.hudong\.com\/navigation\.wiki/i.test(location.href)) f = "/editDoc.do";
        if (HD.util.isAtImg(a)) return HD.util.showTip(a, "\u63d0\u793a\uff1a\u5f53\u524d\u5149\u6807\u6240\u5728\u4f4d\u7f6e\u4e0d\u9002\u5408\u518d\u6b21\u653e\u7f6e\u56fe\u7247\uff01");
        var g = "jpg\u3001gif\u3001png";
        if (HD.util.isHudong()) g = "jpg\u3001gif";
        c = '<li><strong>\u9009\u62e9\u56fe\u7247\uff1a</strong>\t\t<input class="inp_txt" name="photofile" type="file" id="photofile" size="38" \t\tstyle="height:22px;width:295px;" onpaste="return false" onchange="HD.plugin[\'image\'].changeSrc(this)"/>\t\t<input type="hidden" name="img_src_action" value="' + f + '"/>\t\t<label class="gray">\u56fe\u7247\u683c\u5f0f\u4e3a\uff1a' + g + '\uff0c\u5927\u5c0f\u4e3a1M(1024KB)\u4ee5\u5185</label>\t\t<img id="hd_img_checker" style="display:none"></li>\t\t<li><strong>\u56fe\u7247\u5927\u5c0f\uff1a</strong>\t\t<p><label for="hd_img_size_1"><img class="thumbnails" src="' + c + '/spacer.gif"/>\t\t<input name="picWidthHeight" id="hd_img_size_1" type="radio" value="1" checked/> \t\t\u5927\u56fe<span class="gray">\uff08\u957f\u8fb9\uff1a' + (typeof g_img_big == "undefined" ? "300" : g_img_big) + 'px\uff09</span></label></p>\t\t<p><label for="hd_img_size_2"><img class="enlarge" src="' + c + '/spacer.gif"/>\t\t<input name="picWidthHeight" id="hd_img_size_2" type="radio" value="2" /> \t\t\u5c0f\u56fe<span class="gray">\uff08\u957f\u8fb9\uff1a' + (typeof g_img_small == "undefined" ? "140" : g_img_small) + 'px\uff09</span></label></p>\t\t</li>\t\t<li><strong>\u5bf9\u9f50\u65b9\u5f0f\uff1a</strong>\t\t<p><label for="hd_img_align_left"><img class="toleft" src="' + c + '/spacer.gif"/>\t\t<input name="picAlign" id="hd_img_align_left" type="radio" value="left" /> \u56fe\u7247\u5c45\u5de6</p>\t\t<p><label for="hd_img_align_right"><img class="toright" src="' + c + '/spacer.gif"/>\t\t<input name="picAlign" id="hd_img_align_right" type="radio" value="right" checked/> \u56fe\u7247\u5c45\u53f3</p>\t\t</li>\t\t<li><strong>\u56fe\u7247\u63cf\u8ff0[<font color="red">\u5fc5\u586b</font>]\uff1a</strong>\t\t<textarea name="picAlt" maxlength="100" rows="2" style="width:290px;height:30px;"></textarea>\t\t</li>\t\t<li id="hd_dialog_tip" class="hd-dialog-tip"> </li>';
        HD.util.selection(a);
        a = {
            id: a,
            cmd: "image",
            width: 350,
            height: 440,
            title: HD.lang.image,
            content: c,
            yesButton: HD.lang.yes,
            noButton: HD.lang.no,
            action: "index.php?attachment-uploadimg-" + (typeof g_docid == "undefined" ? 0 : g_docid)
        };
        if (HD.util.isHudong()) a.action = "http://a5.att.hudong.com/uploadFileNew.wiki?curuser_iden=" + e + "&doc_title=" + encodeURI(d);
        (new HD.dialog2(a)).show();
        var h = document.getElementById("hd_img_checker");
        if (h) h.onreadystatechange = function () {

            if (h.readyState == "complete") if (h.fileSize > 1048576) {
                HD.imageSelectError = 1;
                b.error("\u63d0\u793a\uff1a\u56fe\u7247\u5927\u5c0f\u8d85\u8fc7\u9650\u5236\uff0c\u8bf7\u63a7\u5236\u57281M\u4ee5\u5185\uff01")
            } else HD.$("hd_dialog_tip").style.display = "none"
        }
    },
    check: function () {
        return true
    },
    exec: function (a) {
        if (HD.imageUploading == 1 || HD.imageSelectError == 1) return 0;
        this.id = a;
        var b = this,
        c = HD.g[a].form,
        d = HD.util.trim(c.picAlt.value);
        HD.util.select(a);
        a = "";
        var e = /\.(jpg|gif|png)$/i;
        a = HD.$("photofile").value;
        if (HD.util.isHudong()) e = /\.(jpg|gif)$/i;
        if (a == "" || !a.match(e)) {
            b.error("\u63d0\u793a\uff1a\u8bf7\u9009\u62e9\u4e00\u4e2a\u6709\u6548\u7684\u56fe\u7247\u6587\u4ef6\uff01");
            return false
        }
        if (d == "") {
            b.error("\u8bf7\u586b\u5199\u56fe\u7247\u63cf\u8ff0\uff0c\u6b63\u786e\u7684\u63cf\u8ff0\u53ef\u4ee5\u63d0\u9ad8\u56fe\u7247\u7684\u6d4f\u89c8\u610f\u4e49");
            c.picAlt.focus();
            return false
        }
        HD.$("photofile").disabled = 1;
        b.error('<div class="hd_img_uploading">\u56fe\u7247\u4e0a\u4f20\u4e2d...</div>');
        c.submit();
        HD.imageUploading = 1;
        HD.event.add(HD.$("hd_iframe_submit"), "load", function () {
            setTimeout(function () {
                HD.imageUploading == 1 && b.error();
                HD.imageUploading = 0
            },
            1E3)
        });
        return false
    },
    insert: function (a, b) {
        if (HD.imageUploading == 0) return 0;
        HD.imageUploading = 0;
        var c = this.id,
        d, e, f = HD.g[c].form;
        d = HD.util.trim(f.picAlt.value);
        d = HD.util.input(d);
        if (!d && HD.$("_doc_title")) d = HD.$("_doc_title").value;
        if (!d && HD.$("title")) d = HD.$("title").value;
        f = f.picAlign;
        for (i = 0; i < f.length; i++) if (f[i].checked) {
            e = f[i].value;
            break
        }
        var g = new Image;
        g.onload = function () {
            var h = "";
            if (HD.browser == "CHROME") {
                e = e == "left" ? "left" : "right";
                h = '<table align="' + e + '" class="img ' + (e == "left" ? "img_l" : "img_r") + '" style="width:' + parseInt(g.width) + 'px"><tr><td><A title="' + d + '" href="' + b + '" target=_blank><IMG title="' + d + '" alt="' + d + '" src="' + a + '"/></A></td></tr><tr><td>' + d + "</td></tr></table>"
            } else {
                e = e == "left" ? "img_l" : "img_r";
                h = '<DIV class="img ' + e + '" style="width:' + g.width + '"><A title="' + d + '" href="' + b + '" target=_blank><IMG title="' + d + '" alt="' + d + '" src="' + a + '"/></A><STRONG>' + d + "</STRONG></DIV>"
            }
            HD.util.insertHtml(c, h);
            HD.layout.hide(c);
            HD.util.focus(c);
            g.onload = function () {}
        };
        g.onerror = function () {};
        g.src = a
    },
    error: function (a) {
        a || (a = "\u63d0\u793a\uff1a\u56fe\u7247\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u56fe\u7247\u4e0a\u4f20\u3002");
        if (HD.$("photofile")) {
            HD.$("photofile").disabled = 0;
            HD.$("hd_dialog_tip").style.display = "block";
            HD.$("hd_dialog_tip").innerHTML = a
        }
    }
};
HD.plugin.media = {
    click: function (a) {
        if (HD.util.isAtImg(a)) return HD.util.showTip(a, "\u5f53\u524d\u5149\u6807\u6240\u5728\u4f4d\u7f6e\u4e0d\u9002\u5408\u653e\u7f6e\u591a\u5a92\u4f53\u6587\u4ef6\uff01");
        HD.util.selection(a);
        (new HD.dialog2({
            id: a,
            cmd: "media",
            content: '<li><strong>\u6587\u4ef6\u7f51\u7edc\u5730\u5740\uff1a</strong>\t\t<input type="text" class="inp_txt" id="hd_media_url" value="http://" style="width:280px;" />\t\t<label class="gray">\u652f\u6301.wmv .rmvb .mp3 .wma .swf\u6587\u4ef6\u683c\u5f0f</label>\t\t</li>\t\t<li><strong>\u6587\u4ef6\u663e\u793a\u5927\u5c0f\uff1a</strong>\t\t<p>\u5bbd\u5ea6 <input type="text" class="inp_txt" id="hd_media_width" value="320" maxlength="3" size="10" /></p>\t\t<p>\u9ad8\u5ea6 <input type="text" class="inp_txt" id="hd_media_height" value="240" maxlength="3" size="10" /></p>\t\t</li>\t\t<li id="hd_dialog_tip" class="hd-dialog-tip"></li>',
            width: 350,
            height: 260,
            title: HD.lang.media,
            yesButton: HD.lang.yes,
            noButton: HD.lang.no
        })).show()
    },
    check: function (a, b, c, d) {
        if (!b.match(/^\w+:\/\/.{3,}\.(swf|mp3|wma|wmv|mid|asf|rm|rmvb)(\?|$)/i)) {
            HD.$("hd_dialog_tip").style.display = "block";
            HD.$("hd_dialog_tip").innerHTML = "\u8bf7\u8f93\u5165\u4e00\u4e2a\u6709\u6548\u7684\u89c6\u9891\u6587\u4ef6\u5730\u5740\uff01";
            HD.$("hd_media_url").focus();
            return false
        }
        if (isNaN(parseInt(c)) || c < 200) {
            HD.$("hd_dialog_tip").style.display = "block";
            HD.$("hd_dialog_tip").innerHTML = "\u5bbd\u5ea6\u5fc5\u987b\u662f\u4e00\u4e2a\u5927\u4e8e 200 \u7684\u6574\u6570\u3002";
            HD.$("hd_media_width").focus();
            return false
        }
        if (isNaN(parseInt(d)) || d < 200) {
            HD.$("hd_dialog_tip").style.display = "block";
            HD.$("hd_dialog_tip").innerHTML = "\u9ad8\u5ea6\u5fc5\u987b\u662f\u4e00\u4e2a\u5927\u4e8e 200 \u7684\u6574\u6570\u3002";
            HD.$("hd_media_height").focus();
            return false
        }
        return true
    },
    exec: function (a) {
        HD.util.select(a);
        var b = HD.$("hd_media_url").value,
        c = HD.$("hd_media_width").value,
        d = HD.$("hd_media_height").value;
        b = HD.util.trim(b);
        c = HD.util.trim(c);
        d = HD.util.trim(d);
        if (!this.check(a, b, c, d)) return false;
        b = this.getHtml(c, d, b);
        HD.util.insertHtml(a, b);
        HD.layout.hide(a);
        HD.util.focus(a);
        return false
    },
    getHtml: function (a, b, c) {
        var d = "";
        if (/\.(rm|rmvb)$/i.test(c)) d = '<OBJECT ID=video1 CLASSID="clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA" HEIGHT=' + b + " WIDTH=" + a + '><param name="_ExtentX" value="9313"><param name="_ExtentY" value="7620"><param name="AUTOSTART" value="0"><param name="SHUFFLE" value="0"><param name="PREFETCH" value="0"><param name="NOLABELS" value="0"><param name="SRC" value="' + c + '"><param name="CONTROLS" value="ImageWindow"><param name="CONSOLE" value="Clip1"><param name="LOOP" value="0"><param name="NUMLOOP" value="0"><param name="CENTER" value="0"><param name="MAINTAINASPECT" value="0"><param name="BACKGROUNDCOLOR" value="#000000"><embed SRC="' + c + '" type="audio/x-pn-realaudio-plugin" CONSOLE="Clip1" CONTROLS="ImageWindow" HEIGHT="' + b + '" WIDTH="' + a + '" AUTOSTART="false"></OBJECT>';
        else if (/\.(wmv|asf)$/i.test(c)) d = "<object align=center classid=CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95 class=OBJECT id=MediaPlayer width=" + a + " height=" + b + ' ><param name=AUTOSTART VALUE=true ><param name=ShowStatusBar value=-1><param name=Filename value="' + c + '"><embed type=application/x-oleobject flename=mp src="' + c + '" width=' + a + " height=" + b + "></embed></object>";
        else if (/\.(wma)$/i.test(c)) d = '<object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" id="MediaPlayer1" ><param name="Filename" value="' + c + '"><param name="PlayCount" value="1"><param name="AutoStart" value="0"><param name="ClickToPlay" value="1"><param name="DisplaySize" value="0"><param name="EnableFullScreen Controls" value="1"><param name="ShowAudio Controls" value="1"><param name="EnableContext Menu" value="1"><param name="ShowDisplay" value="1"></object>';
        else if (/\.(mp3|mid)$/i.test(c)) d = '<EMBED src="' + c + '" width=' + a + " height=" + b + " volume=70 autostart=true></EMBED>";
        else if (/\.(swf)$/i.test(c)) d = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + a + '" height="' + b + '"><param name="movie" value="' + c + '" /><param name="quality" value="high" /><embed src="' + c + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + a + '" height="' + b + '"></embed></object>';
        return d
    }
};
HD.plugin.specialchar = {
    click: function (a) {
        var b = HD.lang.charTable2;
        HD.util.selection(a);
        var c = new HD.menu({
            id: a,
            cmd: "specialchar",
            width: "240px"
        });
        if (!c.add) return false;
        var d = HD.$$("table");
        d.cellPadding = 0;
        d.cellSpacing = 2;
        d.border = 0;
        d.className = "selectTable";
        for (var e = 0; e < b.length; e++) for (var f = d.insertRow(e), g = 0; g < b[e].length; g++) {
            var h = f.insertCell(g);
            h.onmouseover = function () {
                this.className = "hover"
            };
            h.onmouseout = function () {
                this.className = ""
            };
            h.onclick = new Function('HD.plugin["specialchar"].exec("' + a + '", "' + b[e][g] + '")');
            h.innerHTML = b[e][g]
        }
        a = HD.$$("div");
        a.className = "othermark";
        a.innerHTML = '<a href="http://service.hudong.com/ct_02.html#3" target="_black">\u63d2\u5165\u5176\u4ed6\u7b26\u53f7</a>';
        c.append(d);
        c.append(a);
        c.show()
    },
    exec: function (a, b) {
        HD.util.select(a);
        HD.util.insertHtml(a, b);
        HD.layout.hide(a);
        HD.util.focus(a);
        HD.g[a].layoutDiv = null
    }
};
HD.plugin.table = {
    click: function (a) {
        var b = HD.util.isAtImg(a);
        if (b) return HD.util.showTip(a, "\u5f53\u524d\u5149\u6807\u6240\u5728\u4f4d\u7f6e\u4e0d\u80fd\u8fdb\u884c\u8868\u683c\u64cd\u4f5c\uff01");
        var c = HD.lang.hdTable;
        HD.util.selection(a);
        var d = new HD.menu({
            id: a,
            cmd: "table"
        });
        if (!d.add) return false;
        for (var e = HD.util.getParentElement(a), f = e; f && f.nodeName != "BODY";) {
            if (f.nodeName == "TD") {
                e = f;
                break
            }
            f = f.parentNode
        }
        var g = false;
        HD.each(c, function (h, l) {
            if (h == "insertTable") l = (g = b ? true : e.nodeName == "TD") ? "<span>" + l + "</span>" : '<span onmouseover=\'HD.plugin["table"].selectTable("' + a + "\", this)'>" + l + "</span>";
            else {
                l = '<span onmouseover=\'HD.plugin["table"].hide("' + a + "\")'>" + l + "</span>";
                g = b ? true : e.nodeName != "TD"
            }
            h = new Function('HD.plugin["table"].' + h + '("' + a + '")');
            d.add(l, h, g)
        });
        d.show()
    },
    insertTable: function () {
        return false
    },
    insertRowUp: function (a, b) {
        var c = HD.util.moveToAncestorNode(a, "TR");
        if (null != c) {
            b = b || 0;
            b = c.parentNode.insertRow(c.rowIndex + b);
            c = c.cells.length;
            for (var d = 0; d < c; d++) {
                var e = b.insertCell(d);
                HD.browser != "IE" && e.appendChild(HD.$$("br"))
            }
            HD.layout.hide(a);
            HD.util.focus(a)
        }
    },
    insertRowDown: function (a) {
        this.insertRowUp(a, 1)
    },
    insertColumnLeft: function (a, b) {
        var c = HD.util.moveToAncestorNode(a, "TD");
        if (null != c) {
            b = b || 0;
            b = c.cellIndex + b;
            c = c.parentNode.parentNode;
            for (var d = 0; d < c.rows.length; d++) {
                var e = c.rows.item(d).insertCell(b);
                if (HD.browser != "IE") {
                    document.createElement("br");
                    e.appendChild(HD.$$("br"))
                }
            }
            HD.layout.hide(a);
            HD.util.focus(a)
        }
    },
    insertColumnRight: function (a) {
        this.insertColumnLeft(a, 1)
    },
    deleteTable: function (a) {
        var b = HD.util.moveToAncestorNode(a, "TABLE");
        b && b.parentNode.removeChild(b);
        HD.util.focus(a)
    },
    deleteRow: function (a) {
        var b = HD.util.moveToAncestorNode(a, "TR");
        b && b.parentNode.removeChild(b);
        HD.util.focus(a)
    },
    deleteColumn: function (a) {
        var b = HD.util.moveToAncestorNode(a, "TD");
        if (null != b) {
            var c = b.cellIndex;
            b = b.parentNode.parentNode;
            for (var d = 0; d < b.rows.length; d++) b.rows.item(d).deleteCell(c);
            HD.util.focus(a)
        }
    },
    selected: function (a, b, c) {
        var d = b.toString(10) + "\u884c " + c.toString(10) + "\u5217";
        HD.$("tableLocation" + a).innerHTML = d;
        for (d = 1; d <= 10; d++) for (var e = 1; e <= 10; e++) HD.$("tableTd" + a + d.toString(10) + "_" + e.toString(10) + "").className = d <= b && e <= c ? "hover" : ""
    },
    html: function (a) {
        for (var b = '<table class="selectTable">', c = 1; c <= 10; c++) {
            b += "<tr>";
            for (var d = 1; d <= 10; d++) {
                var e = c.toString(10) + "," + d.toString(10);
                b += '<td id="tableTd' + a + c.toString(10) + "_" + d.toString(10) + "\"onclick=\"javascript:HD.plugin['table'].exec('" + a + "', '" + e + "');\" onmouseover=\"javascript:HD.plugin['table'].selected('" + a + "', '" + c.toString(10) + "', '" + d.toString(10) + "');\">&nbsp;</td>"
            }
            b += "</tr>"
        }
        b += '<tr><td colspan="10" id="tableLocation' + a + '" class="tableLocation"></td></tr>';
        b += "</table>";
        return b
    },
    selectTable: function (a, b) {
        var c, d, e = HD.util.getElementPos(b),
        f = document.documentElement.clientWidth || document.body.clientWidth;
        c = document.getElementsByTagName("body")[0];
        var g = parseInt(c.offsetWidth);
        if (HD.$("selectTable")) {
            c = HD.$("selectTable");
            c.style.display = "block";
            c.style.top = e.y - 7 + "px";
            e.x -= f > 1440 ? (f - g) / 2 : 10;
            c.style.left = e.x + b.parentNode.offsetWidth - 5 + "px";
            c.onmouseover = function () {
                b.parentNode.className = "hd-menu-selected"
            };
            c.focus()
        } else {
            d = this.html(a);
            c = HD.$$("div");
            c.id = "selectTable";
            c.className = "hd-menu";
            e.x -= f > 1440 ? (f - g) / 2 : 10;
            c.style.width = "240px";
            c.style.top = e.y - 7 + "px";
            c.style.left = e.x + b.parentNode.offsetWidth - 5 + "px";
            c.innerHTML = d;
            c.onmouseover = function () {
                b.parentNode.className = "hd-menu-selected"
            };
            c.onselectstart = function () {
                return false
            };
            document.body.appendChild(c);
            c.focus();
            HD.event.add(HD.g[a].idocument, "click", function () {
                HD.plugin.table.hide(a)
            });
            HD.event.add(HD.g[a].toolbarDiv, "click", function () {
                HD.plugin.table.hide(a)
            })
        }
    },
    hide: function (a) {
        if (HD.$("selectTable")) {
            HD.$("selectTable").style.display = "none";
            for (var b = 1; b <= 10; b++) for (var c = 1; c <= 10; c++) HD.$("tableTd" + a + b.toString(10) + "_" + c.toString(10) + "").className = "";
            HD.$("tableLocation" + a).innerHTML = ""
        }
    },
    exec: function (a, b) {
        HD.util.select(a);
        b = b.split(",");
        for (var c = '<table class="table">', d = 0; d < b[0]; d++) {
            c += "<tr>";
            for (var e = 0; e < b[1]; e++) c += "<td>&nbsp;</td>";
            c += "</tr>"
        }
        c += "</table>";
        HD.util.insertHtml(a, c);
        HD.$("selectTable").style.display = "none";
        HD.layout.hide(a);
        HD.util.focus(a);
        HD.g[a].layoutDiv = null
    }
};
HD.plugin.fontstyle = {
    click: function (a) {
        var b = HD.g[a].skinsPath;
        HD.util.selection(a);
        var c = new HD.menu({
            id: a,
            cmd: "fontstyle"
        });
        if (!c.add) return false;
        c.add('<img class="hd-icon-bold" src="' + b + '/spacer.gif"/><a href="#" class="hd-menu-a" onclick="return false;">' + HD.lang.bold.replace(/ .+$/i, "") + "</a>", new Function('HD.plugin["bold"].click("' + a + '");'));
        c.add('<img class="hd-icon-italic" src="' + b + '/spacer.gif"/><a href="#" class="hd-menu-a" onclick="return false;">' + HD.lang.italic.replace(/ .+$/i, "") + "</a>", new Function('HD.plugin["italic"].click("' + a + '");'));
        c.add('<img class="hd-icon-underline" src="' + b + '/spacer.gif"/><a href="#" class="hd-menu-a" onclick="return false;">' + HD.lang.underline.replace(/ .+$/i, "") + "</a>", new Function('HD.plugin["underline"].click("' + a + '");'));
        c.add('<img class="hd-icon-sup" src="' + b + '/spacer.gif"/><a href="#" class="hd-menu-a" onclick="return false;">' + HD.lang.sup.replace(/ .+$/i, "") + "</a>", new Function('HD.plugin["sup"].click("' + a + '");'));
        c.add('<img class="hd-icon-sub" src="' + b + '/spacer.gif"/><a href="#" class="hd-menu-a" onclick="return false;">' + HD.lang.sub.replace(/ .+$/i, "") + "</a>", new Function('HD.plugin["sub"].click("' + a + '");'));
        c.show()
    }
};
HD.plugin.justifymore = {
    click: function (a) {
        var b = HD.g[a].skinsPath;
        HD.util.selection(a);
        var c = new HD.menu({
            id: a,
            cmd: "justifymore"
        });
        if (!c.add) return false;
        c.add('<img class="hd-icon-justifyleft" src="' + b + '/spacer.gif"/><span>' + HD.lang.justifyleft.replace(/ .+$/i, "") + "</span>", new Function('HD.util.select("' + a + '");HD.util.execCommand("' + a + '", "justifyleft", null);'));
        c.add('<img class="hd-icon-justifycenter" src="' + b + '/spacer.gif"/><span>' + HD.lang.justifycenter.replace(/ .+$/i, "") + "</span>", new Function('HD.util.select("' + a + '");HD.util.execCommand("' + a + '", "justifycenter", null);'));
        c.add('<img class="hd-icon-justifyright" src="' + b + '/spacer.gif"/><span>' + HD.lang.justifyright.replace(/ .+$/i, "") + "</span>", new Function('HD.util.select("' + a + '");HD.util.execCommand("' + a + '", "justifyright", null);'));
        c.show()
    }
};
HD.plugin.innerlink = {
    click: function (a, b) {
        var c = HD.g[a].toolbarIcon.innerlink;
        if (!c || c.className.indexOf("disabled") > -1) return false;
        HD.util.select(a);
        if ((c = HD.util.getSelectedText(a, "html")) && /<\/table>|hdwiki_tmml/i.test(c)) return HD.util.showTip(a, "\u5f53\u524d\u7684\u9009\u62e9\u8303\u56f4\u5f53\u4e2d\u5305\u542b\u8868\u683c\u6216\u6807\u9898\uff0c\u4e0d\u80fd\u8f6c\u4e3a\u5185\u90e8\u94fe\u63a5\uff01");
        b = b || HD.util.getSelectedText(a);
        c = HD.util.getParentElement(a);
        var d = c.nodeName;
        if ("" != b) {
            b = HD.util.trim(b);
            if (/[\r\n\*#%~><\/\\]/i.test(b)) HD.util.showTip(a, '\u5f53\u524d\u9009\u4e2d\u7684\u5185\u5bb9\u5305\u542b\u7a7a\u683c\u6216\u7279\u6b8a\u7b26\u53f7"% * \uff5e < > #  / +\uff3b\uff3d\u3010\u3011"\u7b49\uff0c\u4e0d\u80fd\u6dfb\u52a0\u4e3a\u5185\u90e8\u94fe\u63a5\uff01');
            else if (HD.util.strlen(b) > 40) HD.util.showTip(a, "\u5185\u94fe\u6700\u591a40\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01");
            else if (HD.util.inArray(c.className, ["hdwiki_tmml", "hdwiki_tmmll", "img"])) HD.util.showTip(a, "\u5f53\u524d\u9009\u4e2d\u7684\u5185\u5bb9\u4e0d\u80fd\u6dfb\u52a0\u4e3a\u5185\u90e8\u94fe\u63a5\uff01");
            else {
                b = b.replace(/\s+/g, " ");
                if (HD.util.isHudong()) {
                    c = "http://www.hudong.com/wiki/";
                    HD.util.insertHtml(a, '<a id="hd_temp_a" class="innerlink" title="' + b + '" href="' + c + encodeURI(b) + '">' + b + "</a>");
                    d = HD.$("hd_temp_a", HD.g[a].idocument);
                    d.removeAttribute("id", false);
                    d.href = c + encodeURI(b)
                } else {
                    c = "index.php?doc-innerlink-";
                    HD.util.insertHtml(a, '<a class="innerlink" title="' + b + '" href="' + c + encodeURI(b) + '">' + b + "</a>")
                }
                HD.util.focus(a);
                HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "paste", "source", "bold", "fontstyle", "innerlink"])
            }
        } else {
            pel = c.parentNode;
            if ((d == "STRONG" || d == "B") && pel.nodeName == "A") d = "A";
            "A" == d ? HD.shortcutMenu.a_unlink() : HD.util.showInput(a, "innerlink", 0, "\u6700\u591a\u8f93\u516540\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01", 40)
        }
        HD.iframeClickTag = ""
    },
    exec: function (a) {
        var b = HD.$("hd_input_innerlink").value;
        b = b.replace(/<.*?>/g, "");
        if (HD.util.strlen(b) > 40) return alert("\u5185\u94fe\u6700\u591a40\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01");
        HD.util.focus(a);
        b != "" && HD.plugin.innerlink.click(a, b);
        HD.layout.hide(a);
        return false
    }
};
HD.plugin.title1 = {
    click: function (a, b) {
        var c = HD.g[a].toolbarIcon.title1;
        if (!c || c.className.indexOf("disabled") > -1) return false;
        if (HD.util.isAtImg(a)) return HD.util.showTip(a, "\u5f53\u524d\u5149\u6807\u6240\u5728\u4f4d\u7f6e\u4e0d\u9002\u5408\u653e\u7f6e\u6807\u9898\uff01");
        var d = HD.util.getSelectedText(a, "html");
        if (d && /<\/table>|hdwiki_tmml/i.test(d)) return HD.util.showTip(a, "\u5f53\u524d\u7684\u9009\u62e9\u8303\u56f4\u5f53\u4e2d\u5305\u542b\u8868\u683c\u6807\u9898\uff0c\u4e0d\u80fd\u8f6c\u4e3a\u6807\u9898\uff01");
        b = b || HD.util.getSelectedText(a);
        if ("" != b) {
            b = b.replace(/\s+/g, " ");
            d = HD.util.getParentElement(a);
            HD.shortcutMenu.element && d.nodeName == "DIV" && /hdwiki_tmml/i.test(d.className) && d.parentNode.removeChild(d);
            if (HD.util.strlen(b) > 40) return HD.util.showTip(a, "\u6807\u9898\u6700\u591a40\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01");
            HD.util.insertHtml(a, '<div class="hdwiki_tmml">' + b + "</div>");
            HD.util.focus(a);
            HD.browser != "IE" && HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source"])
        } else {
            d = HD.util.getParentElement(a);
            if (HD.shortcutMenu.element && d.nodeName == "DIV" && d.className == "hdwiki_tmml") {
                c.className = c.className.replace(/ *hd-icon-selected/i, "");
                HD.shortcutMenu.to_text()
            } else HD.util.showInput(a, "title1", 0, "\u8bf7\u8f93\u5165\u8981\u8bbe\u4e3a\u4e00\u7ea7\u6807\u9898\u7684\u6587\u5b57\uff0c20\u6c49\u5b57\u4ee5\u5185\uff1a", 40)
        }
        HD.iframeClickTag = ""
    },
    exec: function (a) {
        var b = HD.$("hd_input_title1").value;
        b = b.replace(/<.*?>/g, "");
        b = HD.util.trim(b);
        if (HD.util.strlen(b) > 40) return alert("\u6807\u9898\u6700\u591a40\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01");
        HD.util.focus(a);
        if (b != "") {
            b = b.replace(/\s+/g, " ");
            HD.util.insertHtml(a, '<div class="hdwiki_tmml">' + b + "</div>");
            HD.browser != "IE" && HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source"])
        }
        HD.layout.hide(a);
        return false
    }
};
HD.plugin.title2 = {
    click: function (a, b) {
        var c = HD.g[a].toolbarIcon.title2;
        if (!c || c.className.indexOf("disabled") > -1) return false;
        if (HD.util.isAtImg(a)) return HD.util.showTip(a, "\u5f53\u524d\u5149\u6807\u6240\u5728\u4f4d\u7f6e\u4e0d\u9002\u5408\u653e\u7f6e\u6807\u9898\uff01");
        var d = HD.util.getSelectedText(a, "html");
        if (d && /<\/table>|hdwiki_tmml/i.test(d)) return HD.util.showTip(a, "\u5f53\u524d\u7684\u9009\u62e9\u8303\u56f4\u5f53\u4e2d\u5305\u542b\u8868\u683c\u6216\u6807\u9898\uff0c\u4e0d\u80fd\u8f6c\u4e3a\u6807\u9898\uff01");
        b = b || HD.util.getSelectedText(a);
        if ("" != b) {
            b = b.replace(/\s+/g, " ");
            d = HD.util.getParentElement(a);
            HD.shortcutMenu.element && d.nodeName == "DIV" && /hdwiki_tmml/i.test(d.className) && d.parentNode.removeChild(d);
            if (HD.util.strlen(b) > 40) return HD.util.showTip(a, "\u6807\u9898\u6700\u591a40\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01");
            HD.util.insertHtml(a, '<div class="hdwiki_tmmll">' + b + "</div>");
            HD.util.focus(a);
            HD.browser != "IE" && HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source"])
        } else {
            d = HD.util.getParentElement(a);
            if (HD.shortcutMenu.element && d.nodeName == "DIV" && d.className == "hdwiki_tmmll") {
                c.className = c.className.replace(/ *hd-icon-selected/i, "");
                HD.shortcutMenu.to_text()
            } else HD.util.showInput(a, "title2", 0, "\u8bf7\u8f93\u5165\u8981\u8bbe\u4e3a\u4e8c\u7ea7\u6807\u9898\u7684\u6587\u5b57\uff0c20\u6c49\u5b57\u4ee5\u5185\uff1a", 40)
        }
        HD.iframeClickTag = ""
    },
    exec: function (a) {
        var b = HD.$("hd_input_title2").value;
        b = b.replace(/<.*?>/g, "");
        b = HD.util.trim(b);
        if (HD.util.strlen(b) > 40) return alert("\u6807\u9898\u6700\u591a40\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01");
        HD.util.focus(a);
        if (b != "") {
            b = b.replace(/\s+/g, " ");
            HD.util.insertHtml(a, '<div class="hdwiki_tmmll">' + b + "</div>");
            HD.browser != "IE" && HD.toolbar.disable(a, ["save", "preview", "cut", "copy", "source"])
        }
        HD.layout.hide(a);
        return false
    }
};
HD.plugin.link = {
    click: function (a) {
        var b, c = HD.g[a].toolbarIcon.link;
        if (!c || c.className.indexOf("disabled") > -1) return false;
        if ((b = HD.util.getSelectedText(a, "html")) && /<\/table>/i.test(b)) return HD.util.showTip(a, "\u5f53\u524d\u7684\u9009\u62e9\u8303\u56f4\u4e0d\u80fd\u6dfb\u52a0\u94fe\u63a5\uff01");
        var d, e;
        if (HD.iframeClickA) {
            b = HD.iframeClickA;
            d = b.innerText || b.textContent;
            e = b.href
        } else {
            d = HD.util.getSelectedText(a);
            e = "http://"
        }
        b = HD.util.getParentElement(a);
        if (b.nodeName == "DIV") {
            c.className = c.className.replace(/ *hd-icon-selected/i, "");
            HD.shortcutMenu.to_text()
        } else {
            b = "";
            c = 200;
            b += '<li>\u6587\u5b57\uff1a<input id="hd_input_link_text" value="' + d + '" style="width:250px;border: 1px solid #AAAAAA;padding:3px;" maxlength="100" /></li>';
            b += '<li>\u7f51\u5740\uff1a<input id="hd_input_link_url" value="' + e + '" style="width:250px;border: 1px solid #AAAAAA;padding:3px;" maxlength="100" /></li>';
            c = 400;
            (new HD.dialog2({
                id: a,
                cmd: "link",
                content: b,
                width: 350,
                height: c,
                title: "\u63d2\u5165\u94fe\u63a5",
                yesButton: HD.lang.yes,
                noButton: HD.lang.close
            })).show()
        }
    },
    exec: function (a) {
        var b = HD.$("hd_input_link_text").value,
        c = HD.$("hd_input_link_url").value;
        c = HD.util.trim(c);
        HD.util.focus(a);
        if (c != "" && b != "") if (HD.iframeClickA) {
            var d = HD.iframeClickA;
            d.innerHTML = b;
            d.href = c
        } else HD.util.insertHtml(a, '<a href="' + c + '" target="_blank">' + b + "</a>");
        HD.layout.hide(a);
        return false
    }
};
HD.plugin.sup = {
    click: function (a, b) {
        if ((b = b || HD.util.getSelectedText(a)) && /<\/table>|hdwiki_tmml/i.test(b)) return HD.util.showTip(a, "\u5f53\u524d\u7684\u9009\u62e9\u8303\u56f4\u5f53\u4e2d\u5305\u542b\u8868\u683c\u6216\u6807\u9898\uff0c\u4e0d\u80fd\u8f6c\u4e3a\u4e0a\u6807\uff01");
        if ("" != b) {
            b = b.replace(/\s+/g, " ");
            var c = HD.util.getParentElement(a);
            if (HD.shortcutMenu.element && c.nodeName == "SUP" && !c.className) HD.shortcutMenu.to_text();
            else if (HD.shortcutMenu.element && c.nodeName == "SUP" && c.className) {
                c.removeAttribute("name");
                c.removeAttribute("class")
            } else { if (HD.util.strlen(b) > 20) return HD.util.showTip(a, "\u4e0a\u6807\u6700\u591a20\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01");
                c.nodeName == "SUB" && c.parentNode.removeChild(c);
                HD.util.insertHtml(a, "<sup>" + b + "</sup>");
                HD.util.focus(a)
            }
        }
        HD.iframeClickTag = "";
        HD.layout.hide(a);
        return false
    }
};
HD.plugin.sub = {
    click: function (a, b) {
        var c = HD.util.getSelectedText(a, "html");
        if (c && /<\/table>|hdwiki_tmml/i.test(c)) return HD.util.showTip(a, "\u5f53\u524d\u7684\u9009\u62e9\u8303\u56f4\u5f53\u4e2d\u5305\u542b\u8868\u683c\u6216\u6807\u9898\uff0c\u4e0d\u80fd\u8f6c\u4e3a\u4e0b\u6807\uff01");
        b = b || HD.util.getSelectedText(a);
        if ("" != b) {
            c = HD.util.getParentElement(a);
            b = b.replace(/\s+/g, " ");
            if (HD.shortcutMenu.element && c.nodeName == "SUB" && !c.className) HD.shortcutMenu.to_text();
            else if (HD.shortcutMenu.element && c.nodeName == "SUB" && c.className) {
                c.removeAttribute("name");
                c.removeAttribute("class")
            } else { if (HD.util.strlen(b) > 20) return HD.util.showTip(a, "\u4e0b\u6807\u6700\u591a20\u4e2a\u5b57\u7b26\uff0c\u4e00\u4e2a\u6c49\u5b57\u7b97\u4e24\u4e2a\u5b57\u7b26\uff01");
                c.nodeName == "SUP" && c.parentNode.removeChild(c);
                HD.util.insertHtml(a, "<sub>" + b + "</sub>");
                HD.util.focus(a)
            }
        }
        HD.iframeClickTag = "";
        HD.layout.hide(a);
        return false
    }
};