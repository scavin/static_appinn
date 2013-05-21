/* 
Author: Sofish Lin
Created: 2009-10-03
Url: http://www.happinesz.cn/
*/
 
(function($){$.fn.easyTooltip=function(options){var defaults={xOffset:30,yOffset:56,tooltipId:"easyTooltip",clickRemove:false,content:"",useElement:""};var options=$.extend(defaults,options);var content;this.each(function(){var title=$(this).attr("title");$(this).hover(function(e){content=(options.content!="")?options.content:title;content=(options.useElement!="")?$("#"+options.useElement).html():content;$(this).attr("title","");if(content!=""&&content!=undefined){$("body").append("<div id='"+options.tooltipId+"'>"+content+"</div>");$("#"+options.tooltipId).css("position","absolute").css("opacity","0.85").css("top",(e.pageY-options.yOffset)+"px").css("left",(e.pageX+options.xOffset)+"px").css("display","none").fadeIn("fast")}},function(){$("#"+options.tooltipId).remove();$(this).attr("title",title)});$(this).mousemove(function(e){$("#"+options.tooltipId).css("top",(e.pageY-options.yOffset)+"px").css("left",(e.pageX+options.xOffset)+"px")});if(options.clickRemove){$(this).mousedown(function(e){$("#"+options.tooltipId).remove();$(this).attr("title",title)})}})}})(jQuery);

$(document).ready(function(){
  $('.flogo').html('');
  $('.feed').hover(function(){var sFeed=$('#feedurl').html();$('.ilogin').animate({width:'toggle'},100).html(sFeed).animate({width:'toggle'},500)}, function(){$(this).remove()})
  $('#topnav ul li').hover(function(){$('#topnav ul li').removeClass('current_page_item');$('#topnav ul li').removeClass('current');$(this).attr('class','current').children('ul').css('opacity','1').slideDown(100)},function(){$(this).addClass('current').children('ul').slideUp(200)} );
  if ($('#author').val().length>0) {
    $("#author_info").hide();
  }

  $('#eidt_info').click(function() {
    $('#author_info').slideDown('fast');
    $('#author').focus();
  });
})

$(window).load(function(){$("#loading").fadeOut(500);})
$('a[href*=#]').not('a[href$="#comments"]').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var $target=$(this.hash);$target=$target.length&&$target||$('[id='+this.hash.slice(1)+']');if($target.length){var targetOffset=$target.offset().top;$('html,body').animate({scrollTop:targetOffset},1000);return false}}});
function externallinks() {if (!document.getElementsByTagName) return;var anchors = document.getElementsByTagName("a");for (var i=0; i<anchors.length; i++) {var anchor = anchors[i];if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "nofollow external")anchor.target = "_blank";}}window.onload = externallinks;


$(".comment-meta span a").attr("href",function(){return this.href.replace('http://www.appinn.com/out/','')})
$(".entry-content a[href*='www.appinn.com'],.entry-content a:has(img)").css({background: "none", padding: "0"}).attr("rel","inlinks");
$(".entry-content a[rel!='inlinks']").click(function(){window.open(this.href);return false;});

(function() {
var f = document.getElementById('cse-search-box');
if (!f) {
f = document.getElementById('searchbox_demo');
}
if (f && f['q']) {
var q = f['q'];
var n = navigator;
var l = location;
var du = function(n, v) {
var u = document.createElement('input');
u.name = n;
u.value = v;
u.type = 'hidden';
f.appendChild(u);
return u;
};
var su = function (n, t, v, l) {
if (!encodeURIComponent || !decodeURIComponent) {
return;
}
var regexp = new RegExp('(?:[?&]' + n + '=)([^&#]*)');
var existing = regexp.exec(t);
if (existing) {
v = decodeURIComponent(existing[1]);
}
var delimIndex = v.indexOf('://');
if (delimIndex >= 0) {
v = v.substring(delimIndex + '://'.length, v.length);
}
var v_sub = v.substring(0, l);
while (encodeURIComponent(v_sub).length > l) {
v_sub = v_sub.substring(0, v_sub.length - 1);
}
du(n, v_sub);
};
var pl = function(he) {
var ti = 0, tsi = 0, tk = 0, pt;
return function() {
var ct = (new Date).getTime();
if (pt) {
var i = ct - pt;
ti += i;
tsi += i*i;
}
tk++;
pt = ct;
he.value = [ti, tsi, tk].join('j');
};
};
var append = false;
if (n.appName == 'Microsoft Internet Explorer') {
var s = f.parentNode.childNodes;
for (var i = 0; i < s.length; i++) {
        if (s[i].nodeName == 'SCRIPT' &&
            s[i].attributes['src'] &&
            s[i].attributes['src'].nodeValue == unescape('http:\x2F\x2Fwww.google.com\x2Fcse\x2Fbrand?form=cse-search-box\x26lang=en')) {
          append = true;
          break;
        }
      }
    } else {
      append = true;
    }
    if (append) {
      
      var loc = document.location.toString(); var ref = document.referrer;
      su('siteurl', loc, loc, 250);
      su('ref', loc, ref, 750);

      
      
      if (q.addEventListener) {
        q.addEventListener('keyup', pl(du('ss', '')), false);
      } else if (q.attachEvent) {
        q.attachEvent('onkeyup', pl(du('ss', '')));
      }
    }

    
    if (n.platform == 'Win32') {
      q.style.cssText = 'border: 1px solid #7e9db9; padding: 2px;';
    }

    
    if (window.history.navigationMode) {
      window.history.navigationMode = 'compatible';
    }

    var b = function() {
      if (q.value == '') {
        q.style.background = '#FFFFFF url(http:\x2F\x2Fwww.google.com\x2Fcse\x2Fintl\x2Fen\x2Fimages\x2Fgoogle_custom_search_watermark.gif) left no-repeat';
      }
    };

    var f = function() {
      q.style.background = '#ffffff';
    };

    q.onfocus = f;
    q.onblur = b;

    
    if (!/[&?]q=[^&]/.test(l.search)) {
      b();
    }
  }
})();
(function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function j(){var b=0;g.each(function(){var c=a(this);if(i.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,i)&&!a.leftofbegin(this,i))if(!a.belowthefold(this,i)&&!a.rightoffold(this,i))c.trigger("appear"),b=0;else if(++b>i.failure_limit)return!1})}var g=this,h,i={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(i,f)),h=i.container===d||i.container===b?e:a(i.container),0===i.event.indexOf("scroll")&&h.bind(i.event,function(a){return j()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(i.appear){var d=g.length;i.appear.call(b,d,i)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(i.data_attribute))[i.effect](i.effect_speed),b.loaded=!0;var d=a.grep(g,function(a){return!a.loaded});g=a(d);if(i.load){var e=g.length;i.load.call(b,e,i)}}).attr("src",c.data(i.data_attribute))}}),0!==i.event.indexOf("scroll")&&c.bind(i.event,function(a){b.loaded||c.trigger("appear")})}),e.bind("resize",function(a){j()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent.persisted&&g.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){j()}),this},a.belowthefold=function(c,f){var g;return f.container===d||f.container===b?g=e.height()+e.scrollTop():g=a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return f.container===d||f.container===b?g=e.width()+e.scrollLeft():g=a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return f.container===d||f.container===b?g=e.scrollTop():g=a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return f.container===d||f.container===b?g=e.scrollLeft():g=a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightoffold(b,c)&&!a.leftofbegin(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})})(jQuery,window,document)
GoTop=function(){this.config={pageWidth:930,nodeId:'go-top',nodeWidth:50,distanceToBottom:120,distanceToPage:20,hideRegionHeight:90,text:''};this.cache={topLinkThread:null}};GoTop.prototype={init:function(config){this.config=config||this.config;var _self=this;jQuery(window).scroll(function(){_self._scrollScreen({_self:_self});});jQuery(window).resize(function(){_self._resizeWindow({_self:_self});});_self._insertNode({_self:_self});},_insertNode:function(args){var _self=args._self;var topLink=jQuery('<a id="'+_self.config.nodeId+'" href="#">'+_self.config.text+'</a>');topLink.click(function(){jQuery('html,body').animate({scrollTop:0},400);return false;}).appendTo(jQuery('body'));var right=_self._getDistanceToBottom({_self:_self});if(/MSIE 6/i.test(navigator.userAgent)){topLink.css({'display':'none','position':'absolute','right':right+'px'});}else{topLink.css({'display':'none','position':'fixed','right':right+'px','top':(jQuery(window).height()-_self.config.distanceToBottom)+'px'});}},_scrollScreen:function(args){var _self=args._self;var topLink=jQuery('#'+_self.config.nodeId);if(jQuery(document).scrollTop()<=_self.config.hideRegionHeight){clearTimeout(_self.cache.topLinkThread);topLink.hide();return;}if(/MSIE 6/i.test(navigator.userAgent)){clearTimeout(_self.cache.topLinkThread);topLink.hide();_self.cache.topLinkThread=setTimeout(function(){var top=jQuery(document).scrollTop()+jQuery(window).height()-_self.config.distanceToBottom;topLink.css({'top':top+'px'}).fadeIn();},400);}else{topLink.fadeIn();}},_resizeWindow:function(args){var _self=args._self;var topLink=jQuery('#'+_self.config.nodeId);var right=_self._getDistanceToBottom({_self:_self});var top=jQuery(window).height()-_self.config.distanceToBottom;if(/MSIE 6/i.test(navigator.userAgent)){top+=jQuery(document).scrollTop();}topLink.css({'right':right+'px','top':top+'px'});},_getDistanceToBottom:function(args){var _self=args._self;var right=parseInt((jQuery(window).width()-_self.config.pageWidth+1)/2-_self.config.nodeWidth-_self.config.distanceToPage,10);if(right<10){right=10;}return right;}};
$("img.avatar").lazyload({effect:"fadeIn"});
$("img.thumbnail_index").lazyload({effect:"fadeIn",threshold : 200});
jQuery(document).ready(function($){$('.wpfp-link').live('click',function(){dhis=$(this);wpfp_do_js(dhis,1);if(dhis.hasClass('remove-parent')){dhis.parent("li").fadeOut()}return false})});function wpfp_do_js(dhis,doAjax){loadingImg=dhis.prev();loadingImg.show();beforeImg=dhis.prev().prev();beforeImg.hide();url=document.location.href.split('#')[0];params=dhis.attr('href').replace('?','')+'&ajax=1';if(doAjax){jQuery.get(url,params,function(data){dhis.parent().html(data);if(typeof wpfp_after_ajax=='function'){wpfp_after_ajax(dhis)}loadingImg.hide()})}}
(function(d,c,e){if(typeof(window.qrius)=="undefined"){window.qrius={};}window.qrius.l="zh-cn";window.qrius.ty="inline";var b,a=d.getElementsByTagName(c)[0];if(!d.getElementById(e)){b=d.createElement(c);b.id=e;b.src="http://js.qrius.me/widget.js";a.parentNode.insertBefore(b,a);}}(document,"script","qrius-wjs"));