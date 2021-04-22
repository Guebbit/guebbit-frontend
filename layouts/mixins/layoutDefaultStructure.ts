import Vue from "vue";

export default Vue.extend({
	data(){
		return {
			//default, tanto è necessario anche isCompatible = false
			compatibilityModal: true as boolean,
		}
	},
	computed: {
		isCompatible() :boolean {
			if(!process.client)
				return true;
			// @ts-ignore Chrome 1 - 79
			let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
				// @ts-ignore Opera
				//isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
				// @ts-ignore Firefox 1.0+
				//isFirefox = typeof InstallTrigger !== 'undefined',
				// @ts-ignore Safari 3.0+ "[object HTMLElementConstructor]"
				//isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
				// @ts-ignore Internet Explorer 6-11
				isIE = /*@cc_on!@*/false || !!document.documentMode,
				// @ts-ignore Edge 20+
				isEdge = !isIE && !!window.StyleMedia,
				// @ts-ignore Edge (based on chromium) detection
				isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
			return !(isIE || (isEdge && !isEdgeChromium));
		}
	},
	mounted(){
		setTimeout(() => {
			console.log(Object.assign([],this.$store));
		}, 5000);
	},
});
