(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{N3W9:function(i,n,e){"use strict";e.r(n),e.d(n,"ion_loading",function(){return m});var t=e("YrOr"),o=e("TJLY"),s=e("vTwt"),a=e("KSOA"),r=e("IvgT");const d=(i,n)=>{const e=new i,t=new i;t.addElement(n.querySelector("ion-backdrop"));const o=new i;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.3),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))},l=(i,n)=>{const e=new i,t=new i;t.addElement(n.querySelector("ion-backdrop"));const o=new i;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.3,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))},c=(i,n)=>{const e=new i,t=new i;t.addElement(n.querySelector("ion-backdrop"));const o=new i;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.01,.32),o.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))},p=(i,n)=>{const e=new i,t=new i;t.addElement(n.querySelector("ion-backdrop"));const o=new i;return o.addElement(n.querySelector(".loading-wrapper")),t.fromTo("opacity",.32,0),o.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(e.addElement(n).easing("ease-in-out").duration(200).add(t).add(o))};class m{constructor(i){Object(t.m)(this,i),this.presented=!1,this.mode=Object(t.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},this.didPresent=Object(t.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(t.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(t.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(t.d)(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=Object(t.e)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}}async present(){await Object(s.e)(this,"loadingEnter",d,c,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(i,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.f)(this,i,n,"loadingLeave",l,p)}onDidDismiss(){return Object(s.g)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(s.g)(this.el,"ionLoadingWillDismiss")}render(){const{message:i,spinner:n}=this,e=Object(t.e)(this);return Object(t.i)(t.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign({},Object(a.b)(this.cssClass),{[e]:!0,"loading-translucent":this.translucent})},Object(t.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(t.i)("div",{class:"loading-wrapper",role:"dialog"},n&&Object(t.i)("div",{class:"loading-spinner"},Object(t.i)("ion-spinner",{name:n})),i&&Object(t.i)("div",{class:"loading-content",innerHTML:Object(r.a)(i)})))}get el(){return Object(t.f)(this)}static get style(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}}]);