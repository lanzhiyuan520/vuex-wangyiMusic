(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{E18C:function(t,e,n){"use strict";n.r(e);var i=n("pSzy"),r=n.n(i),s=function(){function t(){this.dmp=new r.a,this.dmp.Diff_EditCost=4}return t.prototype.compare=function(t,i){if(!t||!i)return{actualHTML:t,expectHTML:i};var s=this.dmp,r="",h="";function a(t,e){var n=s.diff_main(t,e);s.diff_cleanupEfficiency(n);var i=n.filter(function(t){return t[0]<=0}),r=n.filter(function(t){return 0<=t[0]});return{actual:s.diff_prettyHtml(i),expect:s.diff_prettyHtml(r)}}if(t.forEach(function(t,e){var n=a(t,i[e]||"");r+=n.actual+"<br>",h+=n.expect+"<br>"}),i.length>t.length){var e=a("",i.slice(t.length).join("\n"));r+=e.actual+"<br>",h+=e.expect+"<br>"}return{actualHTML:r.replace(/&para;/gi,""),expectHTML:h.replace(/&para;/gi,"")}},t}();e.default=s},a5FY:function(t,e){function d(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32}var E=-1;d.prototype.diff_main=function(t,e,n,i){void 0===i&&(i=this.Diff_Timeout<=0?Number.MAX_VALUE:(new Date).getTime()+1e3*this.Diff_Timeout);var r=i;if(null==t||null==e)throw new Error("Null input. (diff_main)");if(t==e)return t?[[0,t]]:[];void 0===n&&(n=!0);var s=n,h=this.diff_commonPrefix(t,e),a=t.substring(0,h);t=t.substring(h),e=e.substring(h),h=this.diff_commonSuffix(t,e);var f=t.substring(t.length-h);t=t.substring(0,t.length-h),e=e.substring(0,e.length-h);var l=this.diff_compute_(t,e,s,r);return a&&l.unshift([0,a]),f&&l.push([0,f]),this.diff_cleanupMerge(l),l},d.prototype.diff_compute_=function(t,e,n,i){var r;if(!t)return[[1,e]];if(!e)return[[E,t]];var s=t.length>e.length?t:e,h=t.length>e.length?e:t,a=s.indexOf(h);if(-1!=a)return r=[[1,s.substring(0,a)],[0,h],[1,s.substring(a+h.length)]],t.length>e.length&&(r[0][0]=r[2][0]=E),r;if(1==h.length)return[[E,t],[1,e]];var f=this.diff_halfMatch_(t,e);if(f){var l=f[0],g=f[1],o=f[2],c=f[3],u=f[4],p=this.diff_main(l,o,n,i),d=this.diff_main(g,c,n,i);return p.concat([[0,u]],d)}return n&&100<t.length&&100<e.length?this.diff_lineMode_(t,e,i):this.diff_bisect_(t,e,i)},d.prototype.diff_lineMode_=function(t,e,n){t=(g=this.diff_linesToChars_(t,e)).chars1,e=g.chars2;var i=g.lineArray,r=this.diff_main(t,e,!1,n);this.diff_charsToLines_(r,i),this.diff_cleanupSemantic(r),r.push([0,""]);for(var s=0,h=0,a=0,f="",l="";s<r.length;){switch(r[s][0]){case 1:a++,l+=r[s][1];break;case E:h++,f+=r[s][1];break;case 0:if(1<=h&&1<=a){r.splice(s-h-a,h+a),s=s-h-a;for(var g,o=(g=this.diff_main(f,l,!1,n)).length-1;0<=o;o--)r.splice(s,0,g[o]);s+=g.length}h=a=0,l=f=""}s++}return r.pop(),r},d.prototype.diff_bisect_=function(t,e,n){for(var i=t.length,r=e.length,s=Math.ceil((i+r)/2),h=s,a=2*s,f=new Array(a),l=new Array(a),g=0;g<a;g++)f[g]=-1,l[g]=-1;f[h+1]=0;for(var o=i-r,c=o%2!=(l[h+1]=0),u=0,p=0,d=0,_=0,b=0;b<s&&!((new Date).getTime()>n);b++){for(var v=-b+u;v<=b-p;v+=2){for(var m=h+v,x=(k=v==-b||v!=b&&f[m-1]<f[m+1]?f[m+1]:f[m-1]+1)-v;k<i&&x<r&&t.charAt(k)==e.charAt(x);)k++,x++;if(i<(f[m]=k))p+=2;else if(r<x)u+=2;else if(c){if(0<=(w=h+o-v)&&w<a&&-1!=l[w])if((y=i-l[w])<=k)return this.diff_bisectSplit_(t,e,k,x,n)}}for(var M=-b+d;M<=b-_;M+=2){for(var y,w=h+M,A=(y=M==-b||M!=b&&l[w-1]<l[w+1]?l[w+1]:l[w-1]+1)-M;y<i&&A<r&&t.charAt(i-y-1)==e.charAt(r-A-1);)y++,A++;if(i<(l[w]=y))_+=2;else if(r<A)d+=2;else if(!c){if(0<=(m=h+o-M)&&m<a&&-1!=f[m]){var k;x=h+(k=f[m])-m;if((y=i-y)<=k)return this.diff_bisectSplit_(t,e,k,x,n)}}}}return[[E,t],[1,e]]},d.prototype.diff_bisectSplit_=function(t,e,n,i,r){var s=t.substring(0,n),h=e.substring(0,i),a=t.substring(n),f=e.substring(i),l=this.diff_main(s,h,!1,r),g=this.diff_main(a,f,!1,r);return l.concat(g)},d.prototype.diff_linesToChars_=function(t,e){var h=[],a={};function n(t){for(var e="",n=0,i=-1,r=h.length;i<t.length-1;){-1==(i=t.indexOf("\n",n))&&(i=t.length-1);var s=t.substring(n,i+1);n=i+1,(a.hasOwnProperty?a.hasOwnProperty(s):void 0!==a[s])?e+=String.fromCharCode(a[s]):(e+=String.fromCharCode(r),a[s]=r,h[r++]=s)}return e}return h[0]="",{chars1:n(t),chars2:n(e),lineArray:h}},d.prototype.diff_charsToLines_=function(t,e){for(var n=0;n<t.length;n++){for(var i=t[n][1],r=[],s=0;s<i.length;s++)r[s]=e[i.charCodeAt(s)];t[n][1]=r.join("")}},d.prototype.diff_commonPrefix=function(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,i=Math.min(t.length,e.length),r=i,s=0;n<r;)t.substring(s,r)==e.substring(s,r)?s=n=r:i=r,r=Math.floor((i-n)/2+n);return r},d.prototype.diff_commonSuffix=function(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,i=Math.min(t.length,e.length),r=i,s=0;n<r;)t.substring(t.length-r,t.length-s)==e.substring(e.length-r,e.length-s)?s=n=r:i=r,r=Math.floor((i-n)/2+n);return r},d.prototype.diff_commonOverlap_=function(t,e){var n=t.length,i=e.length;if(0==n||0==i)return 0;i<n?t=t.substring(n-i):n<i&&(e=e.substring(0,n));var r=Math.min(n,i);if(t==e)return r;for(var s=0,h=1;;){var a=t.substring(r-h),f=e.indexOf(a);if(-1==f)return s;h+=f,0!=f&&t.substring(r-h)!=e.substring(0,h)||(s=h,h++)}},d.prototype.diff_halfMatch_=function(t,e){if(this.Diff_Timeout<=0)return null;var n=t.length>e.length?t:e,i=t.length>e.length?e:t;if(n.length<4||2*i.length<n.length)return null;var c=this;function r(t,e,n){for(var i,r,s,h,a=t.substring(n,n+Math.floor(t.length/4)),f=-1,l="";-1!=(f=e.indexOf(a,f+1));){var g=c.diff_commonPrefix(t.substring(n),e.substring(f)),o=c.diff_commonSuffix(t.substring(0,n),e.substring(0,f));l.length<o+g&&(l=e.substring(f-o,f)+e.substring(f,f+g),i=t.substring(0,n-o),r=t.substring(n+g),s=e.substring(0,f-o),h=e.substring(f+g))}return 2*l.length>=t.length?[i,r,s,h,l]:null}var s,h,a,f,l,g=r(n,i,Math.ceil(n.length/4)),o=r(n,i,Math.ceil(n.length/2));return g||o?(s=o?g&&g[4].length>o[4].length?g:o:g,t.length>e.length?(h=s[0],a=s[1],f=s[2],l=s[3]):(f=s[0],l=s[1],h=s[2],a=s[3]),[h,a,f,l,s[4]]):null},d.prototype.diff_cleanupSemantic=function(t){for(var e=!1,n=[],i=0,r=null,s=0,h=0,a=0,f=0,l=0;s<t.length;)0==t[s][0]?(h=f,a=l,l=f=0,r=t[n[i++]=s][1]):(1==t[s][0]?f+=t[s][1].length:l+=t[s][1].length,r&&r.length<=Math.max(h,a)&&r.length<=Math.max(f,l)&&(t.splice(n[i-1],0,[E,r]),t[n[i-1]+1][0]=1,i--,s=0<--i?n[i-1]:-1,l=f=a=h=0,e=!(r=null))),s++;for(e&&this.diff_cleanupMerge(t),this.diff_cleanupSemanticLossless(t),s=1;s<t.length;){if(t[s-1][0]==E&&1==t[s][0]){var g=t[s-1][1],o=t[s][1],c=this.diff_commonOverlap_(g,o),u=this.diff_commonOverlap_(o,g);u<=c?(c>=g.length/2||c>=o.length/2)&&(t.splice(s,0,[0,o.substring(0,c)]),t[s-1][1]=g.substring(0,g.length-c),t[s+1][1]=o.substring(c),s++):(u>=g.length/2||u>=o.length/2)&&(t.splice(s,0,[0,g.substring(0,u)]),t[s-1][0]=1,t[s-1][1]=o.substring(0,o.length-u),t[s+1][0]=E,t[s+1][1]=g.substring(u),s++),s++}s++}},d.prototype.diff_cleanupSemanticLossless=function(t){function e(t,e){if(!t||!e)return 6;var n=t.charAt(t.length-1),i=e.charAt(0),r=n.match(d.nonAlphaNumericRegex_),s=i.match(d.nonAlphaNumericRegex_),h=r&&n.match(d.whitespaceRegex_),a=s&&i.match(d.whitespaceRegex_),f=h&&n.match(d.linebreakRegex_),l=a&&i.match(d.linebreakRegex_),g=f&&t.match(d.blanklineEndRegex_),o=l&&e.match(d.blanklineStartRegex_);return g||o?5:f||l?4:r&&!h&&a?3:h||a?2:r||s?1:0}for(var n=1;n<t.length-1;){if(0==t[n-1][0]&&0==t[n+1][0]){var i=t[n-1][1],r=t[n][1],s=t[n+1][1],h=this.diff_commonSuffix(i,r);if(h){var a=r.substring(r.length-h);i=i.substring(0,i.length-h),r=a+r.substring(0,r.length-h),s=a+s}for(var f=i,l=r,g=s,o=e(i,r)+e(r,s);r.charAt(0)===s.charAt(0);){i+=r.charAt(0),r=r.substring(1)+s.charAt(0),s=s.substring(1);var c=e(i,r)+e(r,s);o<=c&&(o=c,f=i,l=r,g=s)}t[n-1][1]!=f&&(f?t[n-1][1]=f:(t.splice(n-1,1),n--),t[n][1]=l,g?t[n+1][1]=g:(t.splice(n+1,1),n--))}n++}},d.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,d.whitespaceRegex_=/\s/,d.linebreakRegex_=/[\r\n]/,d.blanklineEndRegex_=/\n\r?\n$/,d.blanklineStartRegex_=/^\r?\n\r?\n/,d.prototype.diff_cleanupEfficiency=function(t){for(var e=!1,n=[],i=0,r=null,s=0,h=!1,a=!1,f=!1,l=!1;s<t.length;)0==t[s][0]?(t[s][1].length<this.Diff_EditCost&&(f||l)?(h=f,a=l,r=t[n[i++]=s][1]):(i=0,r=null),f=l=!1):(t[s][0]==E?l=!0:f=!0,r&&(h&&a&&f&&l||r.length<this.Diff_EditCost/2&&h+a+f+l==3)&&(t.splice(n[i-1],0,[E,r]),t[n[i-1]+1][0]=1,i--,r=null,h&&a?(f=l=!0,i=0):(s=0<--i?n[i-1]:-1,f=l=!1),e=!0)),s++;e&&this.diff_cleanupMerge(t)},d.prototype.diff_cleanupMerge=function(t){t.push([0,""]);for(var e,n=0,i=0,r=0,s="",h="";n<t.length;)switch(t[n][0]){case 1:r++,h+=t[n][1],n++;break;case E:i++,s+=t[n][1],n++;break;case 0:1<i+r?(0!==i&&0!==r&&(0!==(e=this.diff_commonPrefix(h,s))&&(0<n-i-r&&0==t[n-i-r-1][0]?t[n-i-r-1][1]+=h.substring(0,e):(t.splice(0,0,[0,h.substring(0,e)]),n++),h=h.substring(e),s=s.substring(e)),0!==(e=this.diff_commonSuffix(h,s))&&(t[n][1]=h.substring(h.length-e)+t[n][1],h=h.substring(0,h.length-e),s=s.substring(0,s.length-e))),0===i?t.splice(n-r,i+r,[1,h]):0===r?t.splice(n-i,i+r,[E,s]):t.splice(n-i-r,i+r,[E,s],[1,h]),n=n-i-r+(i?1:0)+(r?1:0)+1):0!==n&&0==t[n-1][0]?(t[n-1][1]+=t[n][1],t.splice(n,1)):n++,i=r=0,h=s=""}""===t[t.length-1][1]&&t.pop();var a=!1;for(n=1;n<t.length-1;)0==t[n-1][0]&&0==t[n+1][0]&&(t[n][1].substring(t[n][1].length-t[n-1][1].length)==t[n-1][1]?(t[n][1]=t[n-1][1]+t[n][1].substring(0,t[n][1].length-t[n-1][1].length),t[n+1][1]=t[n-1][1]+t[n+1][1],t.splice(n-1,1),a=!0):t[n][1].substring(0,t[n+1][1].length)==t[n+1][1]&&(t[n-1][1]+=t[n+1][1],t[n][1]=t[n][1].substring(t[n+1][1].length)+t[n+1][1],t.splice(n+1,1),a=!0)),n++;a&&this.diff_cleanupMerge(t)},d.prototype.diff_xIndex=function(t,e){var n,i=0,r=0,s=0,h=0;for(n=0;n<t.length&&(1!==t[n][0]&&(i+=t[n][1].length),t[n][0]!==E&&(r+=t[n][1].length),!(e<i));n++)s=i,h=r;return t.length!=n&&t[n][0]===E?h:h+(e-s)},d.prototype.diff_prettyHtml=function(t){for(var e=[],n=/&/g,i=/</g,r=/>/g,s=/\n/g,h=0;h<t.length;h++){var a=t[h][0],f=t[h][1].replace(n,"&amp;").replace(i,"&lt;").replace(r,"&gt;").replace(s,"&para;<br>");switch(a){case 1:e[h]='<ins style="background:#e6ffe6;">'+f+"</ins>";break;case E:e[h]='<del style="background:#ffe6e6;">'+f+"</del>";break;case 0:e[h]="<span>"+f+"</span>"}}return e.join("")},d.prototype.diff_text1=function(t){for(var e=[],n=0;n<t.length;n++)1!==t[n][0]&&(e[n]=t[n][1]);return e.join("")},d.prototype.diff_text2=function(t){for(var e=[],n=0;n<t.length;n++)t[n][0]!==E&&(e[n]=t[n][1]);return e.join("")},d.prototype.diff_levenshtein=function(t){for(var e=0,n=0,i=0,r=0;r<t.length;r++){var s=t[r][0],h=t[r][1];switch(s){case 1:n+=h.length;break;case E:i+=h.length;break;case 0:e+=Math.max(n,i),i=n=0}}return e+=Math.max(n,i)},d.prototype.diff_toDelta=function(t){for(var e=[],n=0;n<t.length;n++)switch(t[n][0]){case 1:e[n]="+"+encodeURI(t[n][1]);break;case E:e[n]="-"+t[n][1].length;break;case 0:e[n]="="+t[n][1].length}return e.join("\t").replace(/%20/g," ")},d.prototype.diff_fromDelta=function(t,e){for(var n=[],i=0,r=0,s=e.split(/\t/g),h=0;h<s.length;h++){var a=s[h].substring(1);switch(s[h].charAt(0)){case"+":try{n[i++]=[1,decodeURI(a)]}catch(t){throw new Error("Illegal escape in diff_fromDelta: "+a)}break;case"-":case"=":var f=parseInt(a,10);if(isNaN(f)||f<0)throw new Error("Invalid number in diff_fromDelta: "+a);var l=t.substring(r,r+=f);"="==s[h].charAt(0)?n[i++]=[0,l]:n[i++]=[E,l];break;default:if(s[h])throw new Error("Invalid diff operation in diff_fromDelta: "+s[h])}}if(r!=t.length)throw new Error("Delta length ("+r+") does not equal source text length ("+t.length+").");return n},d.prototype.match_main=function(t,e,n){if(null==t||null==e||null==n)throw new Error("Null input. (match_main)");return n=Math.max(0,Math.min(n,t.length)),t==e?0:t.length?t.substring(n,n+e.length)==e?n:this.match_bitap_(t,e,n):-1},d.prototype.match_bitap_=function(t,r,s){if(r.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var e=this.match_alphabet_(r),h=this;function n(t,e){var n=t/r.length,i=Math.abs(s-e);return h.Match_Distance?n+i/h.Match_Distance:i?1:n}var i=this.Match_Threshold,a=t.indexOf(r,s);-1!=a&&(i=Math.min(n(0,a),i),-1!=(a=t.lastIndexOf(r,s+r.length))&&(i=Math.min(n(0,a),i)));var f,l,g=1<<r.length-1;a=-1;for(var o,c=r.length+t.length,u=0;u<r.length;u++){for(f=0,l=c;f<l;)n(u,s+l)<=i?f=l:c=l,l=Math.floor((c-f)/2+f);c=l;var p=Math.max(1,s-l+1),d=Math.min(s+l,t.length)+r.length,_=Array(d+2);_[d+1]=(1<<u)-1;for(var b=d;p<=b;b--){var v=e[t.charAt(b-1)];if(_[b]=0===u?(_[b+1]<<1|1)&v:(_[b+1]<<1|1)&v|(o[b+1]|o[b])<<1|1|o[b+1],_[b]&g){var m=n(u,b-1);if(m<=i){if(i=m,!(s<(a=b-1)))break;p=Math.max(1,2*s-a)}}}if(n(u+1,s)>i)break;o=_}return a},d.prototype.match_alphabet_=function(t){for(var e={},n=0;n<t.length;n++)e[t.charAt(n)]=0;for(n=0;n<t.length;n++)e[t.charAt(n)]|=1<<t.length-n-1;return e},d.prototype.patch_addContext_=function(t,e){if(0!=e.length){for(var n=e.substring(t.start2,t.start2+t.length1),i=0;e.indexOf(n)!=e.lastIndexOf(n)&&n.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)i+=this.Patch_Margin,n=e.substring(t.start2-i,t.start2+t.length1+i);i+=this.Patch_Margin;var r=e.substring(t.start2-i,t.start2);r&&t.diffs.unshift([0,r]);var s=e.substring(t.start2+t.length1,t.start2+t.length1+i);s&&t.diffs.push([0,s]),t.start1-=r.length,t.start2-=r.length,t.length1+=r.length+s.length,t.length2+=r.length+s.length}},d.prototype.patch_make=function(t,e,n){var i,r;if("string"==typeof t&&"string"==typeof e&&void 0===n)i=t,2<(r=this.diff_main(i,e,!0)).length&&(this.diff_cleanupSemantic(r),this.diff_cleanupEfficiency(r));else if(t&&"object"==typeof t&&void 0===e&&void 0===n)r=t,i=this.diff_text1(r);else if("string"==typeof t&&e&&"object"==typeof e&&void 0===n)i=t,r=e;else{if("string"!=typeof t||"string"!=typeof e||!n||"object"!=typeof n)throw new Error("Unknown call format to patch_make.");i=t,r=n}if(0===r.length)return[];for(var s=[],h=new d.patch_obj,a=0,f=0,l=0,g=i,o=i,c=0;c<r.length;c++){var u=r[c][0],p=r[c][1];switch(a||0===u||(h.start1=f,h.start2=l),u){case 1:h.diffs[a++]=r[c],h.length2+=p.length,o=o.substring(0,l)+p+o.substring(l);break;case E:h.length1+=p.length,h.diffs[a++]=r[c],o=o.substring(0,l)+o.substring(l+p.length);break;case 0:p.length<=2*this.Patch_Margin&&a&&r.length!=c+1?(h.diffs[a++]=r[c],h.length1+=p.length,h.length2+=p.length):p.length>=2*this.Patch_Margin&&a&&(this.patch_addContext_(h,g),s.push(h),h=new d.patch_obj,a=0,g=o,f=l)}1!==u&&(f+=p.length),u!==E&&(l+=p.length)}return a&&(this.patch_addContext_(h,g),s.push(h)),s},d.prototype.patch_deepCopy=function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n],r=new d.patch_obj;r.diffs=[];for(var s=0;s<i.diffs.length;s++)r.diffs[s]=i.diffs[s].slice();r.start1=i.start1,r.start2=i.start2,r.length1=i.length1,r.length2=i.length2,e[n]=r}return e},d.prototype.patch_apply=function(t,e){if(0==t.length)return[e,[]];t=this.patch_deepCopy(t);var n=this.patch_addPadding(t);e=n+e+n,this.patch_splitMax(t);for(var i=0,r=[],s=0;s<t.length;s++){var h,a,f=t[s].start2+i,l=this.diff_text1(t[s].diffs),g=-1;if(l.length>this.Match_MaxBits?-1!=(h=this.match_main(e,l.substring(0,this.Match_MaxBits),f))&&(-1==(g=this.match_main(e,l.substring(l.length-this.Match_MaxBits),f+l.length-this.Match_MaxBits))||g<=h)&&(h=-1):h=this.match_main(e,l,f),-1==h)r[s]=!1,i-=t[s].length2-t[s].length1;else if(r[s]=!0,i=h-f,l==(a=-1==g?e.substring(h,h+l.length):e.substring(h,g+this.Match_MaxBits)))e=e.substring(0,h)+this.diff_text2(t[s].diffs)+e.substring(h+l.length);else{var o=this.diff_main(l,a,!1);if(l.length>this.Match_MaxBits&&this.diff_levenshtein(o)/l.length>this.Patch_DeleteThreshold)r[s]=!1;else{this.diff_cleanupSemanticLossless(o);for(var c,u=0,p=0;p<t[s].diffs.length;p++){var d=t[s].diffs[p];0!==d[0]&&(c=this.diff_xIndex(o,u)),1===d[0]?e=e.substring(0,h+c)+d[1]+e.substring(h+c):d[0]===E&&(e=e.substring(0,h+c)+e.substring(h+this.diff_xIndex(o,u+d[1].length))),d[0]!==E&&(u+=d[1].length)}}}}return[e=e.substring(n.length,e.length-n.length),r]},d.prototype.patch_addPadding=function(t){for(var e=this.Patch_Margin,n="",i=1;i<=e;i++)n+=String.fromCharCode(i);for(i=0;i<t.length;i++)t[i].start1+=e,t[i].start2+=e;var r=t[0],s=r.diffs;if(0==s.length||0!=s[0][0])s.unshift([0,n]),r.start1-=e,r.start2-=e,r.length1+=e,r.length2+=e;else if(e>s[0][1].length){var h=e-s[0][1].length;s[0][1]=n.substring(s[0][1].length)+s[0][1],r.start1-=h,r.start2-=h,r.length1+=h,r.length2+=h}if(0==(s=(r=t[t.length-1]).diffs).length||0!=s[s.length-1][0])s.push([0,n]),r.length1+=e,r.length2+=e;else if(e>s[s.length-1][1].length){h=e-s[s.length-1][1].length;s[s.length-1][1]+=n.substring(0,h),r.length1+=h,r.length2+=h}return n},d.prototype.patch_splitMax=function(t){for(var e=this.Match_MaxBits,n=0;n<t.length;n++)if(!(t[n].length1<=e)){var i=t[n];t.splice(n--,1);for(var r=i.start1,s=i.start2,h="";0!==i.diffs.length;){var a=new d.patch_obj,f=!0;for(a.start1=r-h.length,a.start2=s-h.length,""!==h&&(a.length1=a.length2=h.length,a.diffs.push([0,h]));0!==i.diffs.length&&a.length1<e-this.Patch_Margin;){var l=i.diffs[0][0],g=i.diffs[0][1];1===l?(a.length2+=g.length,s+=g.length,a.diffs.push(i.diffs.shift()),f=!1):l===E&&1==a.diffs.length&&0==a.diffs[0][0]&&g.length>2*e?(a.length1+=g.length,r+=g.length,f=!1,a.diffs.push([l,g]),i.diffs.shift()):(g=g.substring(0,e-a.length1-this.Patch_Margin),a.length1+=g.length,r+=g.length,0===l?(a.length2+=g.length,s+=g.length):f=!1,a.diffs.push([l,g]),g==i.diffs[0][1]?i.diffs.shift():i.diffs[0][1]=i.diffs[0][1].substring(g.length))}h=(h=this.diff_text2(a.diffs)).substring(h.length-this.Patch_Margin);var o=this.diff_text1(i.diffs).substring(0,this.Patch_Margin);""!==o&&(a.length1+=o.length,a.length2+=o.length,0!==a.diffs.length&&0===a.diffs[a.diffs.length-1][0]?a.diffs[a.diffs.length-1][1]+=o:a.diffs.push([0,o])),f||t.splice(++n,0,a)}}},d.prototype.patch_toText=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=t[n];return e.join("")},d.prototype.patch_fromText=function(t){var e=[];if(!t)return e;for(var n=t.split("\n"),i=0,r=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;i<n.length;){var s=n[i].match(r);if(!s)throw new Error("Invalid patch string: "+n[i]);var h=new d.patch_obj;for(e.push(h),h.start1=parseInt(s[1],10),""===s[2]?(h.start1--,h.length1=1):"0"==s[2]?h.length1=0:(h.start1--,h.length1=parseInt(s[2],10)),h.start2=parseInt(s[3],10),""===s[4]?(h.start2--,h.length2=1):"0"==s[4]?h.length2=0:(h.start2--,h.length2=parseInt(s[4],10)),i++;i<n.length;){var a=n[i].charAt(0);try{var f=decodeURI(n[i].substring(1))}catch(t){throw new Error("Illegal escape in patch_fromText: "+f)}if("-"==a)h.diffs.push([E,f]);else if("+"==a)h.diffs.push([1,f]);else if(" "==a)h.diffs.push([0,f]);else{if("@"==a)break;if(""!==a)throw new Error('Invalid patch mode "'+a+'" in: '+f)}i++}}return e},(d.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0}).prototype.toString=function(){for(var t,e=["@@ -"+(0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1)+" +"+(0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2)+" @@\n"],n=0;n<this.diffs.length;n++){switch(this.diffs[n][0]){case 1:t="+";break;case E:t="-";break;case 0:t=" "}e[n+1]=t+encodeURI(this.diffs[n][1])+"\n"}return e.join("").replace(/%20/g," ")},this.diff_match_patch=d,this.DIFF_DELETE=E,this.DIFF_INSERT=1,this.DIFF_EQUAL=0},pSzy:function(t,e,n){t.exports=n("a5FY").diff_match_patch},"qPA+":function(t,e,n){"use strict";n.r(e);var a=n("E18C");function i(t,i,e){var r=this,s=e,h=new a.default;r.actual="",r.expect="",r.compare=function(t,e){var n=h.compare(t,e);r.actual=s.trustAsHtml(n.actualHTML),r.expect=s.trustAsHtml(n.expectHTML)},t.$on("fetched",function(t,e,n){r.compare(e,n),i.$broadcast("diff_completed")})}i.$inject=["$scope","$rootScope","$sce"],angular.module("codeDiff",["ngSanitize"]).config(["$interpolateProvider",function(t){t.startSymbol("{[{"),t.endSymbol("}]}")}]).controller("DiffCtrl",i)}},[["qPA+",0]]]);