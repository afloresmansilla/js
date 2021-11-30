function getCookie(n) {
    for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) === " "; )
            t = t.substring(1);
        if (t.indexOf(r) === 0)
            return t.substring(r.length, t.length)
    }
    return ""
}
function GetGTMTokenHost() {
    return document.URL.indexOf("localhost") >= 0 ? "http://localhost:54701" : document.URL.indexOf("rastreator.com") >= 0 ? "https://gtm.rastreator.com" : document.URL.indexOf("rastreatortest.com") >= 0 ? "https://gtm.rastreatortest.com" : void 0
}
function IsGtmTokenEnable() {
    for (var t = ["coches-ocasion.rastreator", "accesoriosparamoviles.rastreator", "viajes.rastreator", "adopta-un-perro.rastreator", "tarifas-adsl-fibra.rastreator"], n = 0; n < t.length; n++)
        if (document.URL.toLowerCase().indexOf(t[n]) > -1)
            return !0;
    return !1
}
function GetTrackerUrl() {
    return document.URL.indexOf("localhost") >= 0 ? trackerUrlLocal : document.URL.indexOf(".rastreatorlocal.com") >= 0 ? trackerUrlRTRLocal : document.URL.indexOf("rastreatortest.com") >= 0 ? trackerUrlTest : document.URL.indexOf("rastreator.com") >= 0 ? trackerUrlProduction : document.URL.indexOf("altas-internet.com") >= 0 ? trackerUrlAltas : document.URL.indexOf("altas-seguros.com") >= 0 ? trackerUrlProduction : void 0
}
function GetGTMUrl() {
    if (document.URL.indexOf("localhost") >= 0 || document.URL.indexOf("rastreatortest.com") >= 0 || document.URL.indexOf(".rastreatorlocal.com") >= 0) {
        gtmId = "GTM-NRC6WMJ";
        gtmAuth = "6jPowJv4B_pnUOhW5MgEKg";
        gtmPreview = "env-5";
        var n = trackerUrlLocal;
        switch (!0) {
        case document.URL.indexOf("localhost") >= 0:
            n = trackerUrlLocal;
            break;
        case document.URL.indexOf(".rastreatorlocal.com") >= 0:
            n = trackerUrlRTRLocal;
            break;
        case document.URL.indexOf("rastreatortest.com") >= 0:
            n = trackerUrlTest
        }
        return n + "/Tracker/GetGtmScriptV2"
    }
    return document.URL.indexOf("rastreator.com") >= 0 ? (gtmId = "GTM-NRC6WMJ",
    gtmAuth = "mxRNCcgZUIAFul50k1K_pg",
    gtmPreview = "env-2",
    trackerUrlProduction + "/Tracker/GetGtmScriptV2") : document.URL.indexOf("altas-internet.com") >= 0 ? (gtmId = "GTM-F5H2",
    trackerUrlAltas + "/Tracker/GetGtmScriptV2") : document.URL.indexOf("altas-seguros.com") >= 0 ? (gtmId = "GTM-F5H2",
    trackerUrlProduction + "/Tracker/GetGtmScriptV2") : void 0
}
function GetGTMFileName() {
    return "GTMScript.txt"
}
function SaveTracker(n, t) {
    var f = document.referrer, i, r, u, e;
    typeof _vwo_s == "function" && typeof _vwo_s().R == "function" && String(_vwo_s().R()).length > 0 && (f = String(_vwo_s().R()).trim());
    i = "";
    document.visibilityState == "prerender" ? (i = GetTrackerUrl() + "/Tracker/SavePrerenderDetail",
    CommonJsonPRequest.send(i + "?callback=SaveTrackerCallback&browserState=" + document.visibilityState, {
        callbackName: "SaveTrackerCallback",
        onSuccess: function() {},
        onTimeout: function() {},
        timeout: 30
    })) : (typeof n == "string" ? (r = n,
    u = !0) : (r = JSON.stringify(n),
    u = !1),
    e = {
        counterName: r,
        refererUrl: f,
        type: u,
        productID: t
    },
    PostTrackerCounter(e))
}
function ProcessGtmToken(n) {
    jQuery.ajax({
        type: "GET",
        url: GetGTMTokenHost() + "/api/seomanage",
        async: !0,
        cache: !1,
        crossDomain: !0,
        dataType: "json",
        xhrFields: {
            withCredentials: !0
        },
        success: function(t) {
            n.clientAdd = t;
            PostTrackerCounter(n)
        },
        error: function(t, i) {
            PostTrackerCounter(n);
            console.log(t ? t.status + ", " + t.statusText + ", " + i : i)
        }
    })
}
function PostTrackerCounter(n) {
    CommonJsonPRequest.send(GetTrackerUrl() + "/Tracker/SaveTracker?callback=SaveTrackerCallback&counterName=" + n.counterName + "&refererUrl=" + n.refererUrl + "&type=" + n.type + "&productID=" + n.productID, {
        callbackName: "SaveTrackerCallback",
        onSuccess: function() {},
        onTimeout: function() {},
        timeout: 30
    })
}
function SaveTrackerMultiple(n, t) {
    SaveTracker(n, t)
}
function RenderGTMScript() {
    var n = GetGTMUrl();
    n && CommonJsonPRequest.send(n + "?callback=RenderGTMScriptCallback&filename=DataLayerEvents.txt", {
        callbackName: "RenderGTMScriptCallback",
        onSuccess: function(n) {
            var t = document.createElement("script");
            t.type = "text/javascript";
            t.setAttribute("defer", "true");
            t.innerText = n;
            document.body.appendChild(t);
            RenderGtmFile()
        },
        onTimeout: function() {},
        timeout: 30
    })
}
function RenderGtmFile() {
    var n = GetGTMUrl()
      , t = GetGTMFileName();
    CommonJsonPRequest.send(n + "?callback=RenderGtmFileCallback&filename=" + t, {
        callbackName: "RenderGtmFileCallback",
        onSuccess: function(n) {
            var t = document.createElement("script"), i;
            t.type = "text/javascript";
            t.setAttribute("defer", "true");
            t.innerText = n;
            document.body.appendChild(t);
            i = document.createElement("noscript");
            i.innerText = '<iframe src="//www.googletagmanager.com/ns.html?id=' + gtmId + "&gtm_auth=" + gtmAuth + "&gtm_preview" + gtmPreview + '" height="0" width="0" style="display:none;visibility:hidden"><\/iframe>';
            document.body.appendChild(i)
        },
        onTimeout: function() {},
        timeout: 30
    })
}
function GetSessionId(n) {
    var t = GetTrackerUrl() + "/Tracker/GetSessionId";
    CommonJsonPRequest.send(t + "?callback=GetSessionIdCallback", {
        callbackName: "GetSessionIdCallback",
        onSuccess: function(t) {
            n(t)
        },
        onTimeout: function() {},
        timeout: 30
    })
}
function SaveConsentCookie(n, t) {
    CommonJsonPRequest.send(GetTrackerUrl() + "/Consent/CreateConsentCookie?name=" + n + "&value=" + t, {
        callbackName: "SaveConsentCallback",
        onSuccess: function() {},
        onTimeout: function() {},
        error: function() {},
        timeout: 30
    })
}
function ReadConsentCookie() {
    CommonJsonPRequest.send(GetTrackerUrl() + "/Consent/ReadConsentCookie", {
        callbackName: "ReadConsentCallback",
        onSuccess: function(n) {
            return n
        },
        onTimeout: function() {},
        error: function() {},
        timeout: 30
    })
}
function SaveUserIPAddress(n) {
    CommonJsonPRequest.send(GetTrackerUrl() + "/Tracker/SaveUserIP?&callback=SaveUserIPCallBack&sessionId=" + n.SessionId + "&ipAddress=" + n.IpAddress + "&lattitude=" + n.Lattitude + "&longitude=" + n.Longitude + "&zipCode=" + n.ZipCode + "&city=" + n.City + "&autonomousSystemNumber=" + n.AutonomousSystemNumber, {
        callbackName: "SaveUserIPCallBack",
        onSuccess: function(n) {
            return n
        },
        onTimeout: function() {},
        error: function() {},
        timeout: 30
    })
}
var trackerUrlLocal = "http://localhost:55991"
  , trackerUrlRTRLocal = "http://tracker.rastreatorlocal.com"
  , trackerUrlTest = "https://tracker.rastreatortest.com"
  , trackerUrlProduction = "https://tracker.rastreator.com"
  , trackerUrlAltas = "https://tracker.altas-internet.com"
  , dataLayer = window.dataLayer || []
  , initializer = {
    init: function() {
        this.timerHandle = setInterval(initializer.onloadScripts, 300)
    },
    onloadScripts: function() {
        document.body != null && (clearInterval(initializer.timerHandle),
        RenderGTMScript())
    }
}
  , CommonJsonPRequest = function() {
    var n = {};
    return n.send = function(n, t) {
        var r = t.callbackName || "callback", u = t.onSuccess || function() {}
        , f = t.onTimeout || function() {}
        , e = t.timeout || 10, o = window.setTimeout(function() {
            window[r] = function() {}
            ;
            f()
        }, e * 1e3), i;
        window[r] = function(n) {
            window.clearTimeout(o);
            u(n)
        }
        ;
        i = document.createElement("script");
        i.type = "text/javascript";
        i.async = !0;
        i.src = n;
        document.getElementsByTagName("head")[0].appendChild(i)
    }
    ,
    n
}()
  , gtmId = ""
  , gtmAuth = ""
  , gtmPreview = "";
initializer.init();
