!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{HHV2:function(t,i,s){"use strict";s.d(i,"a",(function(){return k})),s.d(i,"b",(function(){return f}));var a=s("8Y7J"),n=s("2Vo4"),r=s("SVse");s("pLZG"),s("nYR2"),s("iInd"),s("IheW"),s("cUpR");var l,d=function(e){return e.ballScaleMultiple="ball-scale-multiple",e.ballSpin="ball-spin",e.ballSpinClockwise="ball-spin-clockwise",e.ballSpinClockwiseFadeRotating="ball-spin-clockwise-fade-rotating",e.ballSpinFadeRotating="ball-spin-fade-rotating",e.chasingDots="chasing-dots",e.circle="circle",e.cubeGrid="cube-grid",e.doubleBounce="double-bounce",e.fadingCircle="fading-circle",e.foldingCube="folding-cube",e.pulse="pulse",e.rectangleBounce="rectangle-bounce",e.rectangleBounceParty="rectangle-bounce-party",e.rectangleBouncePulseOut="rectangle-bounce-pulse-out",e.rectangleBouncePulseOutRapid="rectangle-bounce-pulse-out-rapid",e.rotatingPlane="rotating-plane",e.squareJellyBox="square-jelly-box",e.squareLoader="square-loader",e.threeBounce="three-bounce",e.threeStrings="three-strings",e.wanderingCubes="wandering-cubes",e}({}),u=function(e){return e.bottomCenter="bottom-center",e.bottomLeft="bottom-left",e.bottomRight="bottom-right",e.centerCenter="center-center",e.centerLeft="center-left",e.centerRight="center-right",e.topCenter="top-center",e.topLeft="top-left",e.topRight="top-right",e}({}),h={},c={bgsColor:"#00ACC1",bgsOpacity:.5,bgsPosition:u.bottomRight,bgsSize:60,bgsType:d.ballSpinClockwise,blur:5,delay:0,fastFadeOut:!1,fgsColor:"#00ACC1",fgsPosition:u.centerCenter,fgsSize:60,fgsType:d.ballSpinClockwise,gap:24,logoPosition:u.centerCenter,logoSize:120,logoUrl:"",masterLoaderId:"master",overlayBorderRadius:"0",overlayColor:"rgba(40, 40, 40, 0.8)",pbColor:"#00ACC1",pbDirection:(l={},l.leftToRight="ltr",l.rightToLeft="rtl",l).leftToRight,pbThickness:3,hasProgressBar:!0,text:"",textColor:"#FFFFFF",textPosition:u.centerCenter,maxTime:-1,minTime:300},g=new a.r("ngxUiLoaderCustom.config"),f=function(){var t=function(){function t(o){e(this,t),this.config=o,this.defaultConfig=Object.assign({},c),this.config&&(this.config.minTime&&this.config.minTime<0&&(this.config.minTime=0),this.defaultConfig=Object.assign(Object.assign({},this.defaultConfig),this.config)),this.loaders={},this.showForeground=new n.a({loaderId:"",isShow:!1}),this.showForeground$=this.showForeground.asObservable(),this.showBackground=new n.a({loaderId:"",isShow:!1}),this.showBackground$=this.showBackground.asObservable(),this.fgClosing=new n.a({loaderId:"",isShow:!1}),this.foregroundClosing$=this.fgClosing.asObservable(),this.bgClosing=new n.a({loaderId:"",isShow:!1}),this.backgroundClosing$=this.bgClosing.asObservable()}return o(t,[{key:"bindLoaderData",value:function(e){var t=e===this.defaultConfig.masterLoaderId;if(this.loaders[e]){if(this.loaders[e].isBound)throw new Error('[ngx-ui-loader] - loaderId "'.concat(e,'" is duplicated.'));this.loaders[e].isBound=!0,this.loaders[e].isMaster=t,this.hasRunningTask(!0,e)?this.showForeground.next({loaderId:e,isShow:!0}):this.hasRunningTask(!1,e)&&this.showBackground.next({loaderId:e,isShow:!0})}else this.createLoaderData(e,t,!0)}},{key:"destroyLoaderData",value:function(e){this.stopAllLoader(e),delete this.loaders[e]}},{key:"getDefaultConfig",value:function(){return Object.assign({},this.defaultConfig)}},{key:"getLoaders",value:function(){return JSON.parse(JSON.stringify(this.loaders))}},{key:"getLoader",value:function(e){return this.loaders[e=e||this.defaultConfig.masterLoaderId]?JSON.parse(JSON.stringify(this.loaders[e])):null}},{key:"startLoader",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fg-default",o=arguments.length>2?arguments[2]:void 0;this.readyToStart(e,t,!0,o)&&(this.loaders[e].tasks[t].isOtherRunning||(this.hasRunningTask(!1,e)&&(this.backgroundCloseout(e),this.showBackground.next({loaderId:e,isShow:!1})),this.showForeground.next({loaderId:e,isShow:!0})))}},{key:"start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fg-default",t=arguments.length>1?arguments[1]:void 0;this.startLoader(this.defaultConfig.masterLoaderId,e,t)}},{key:"startBackgroundLoader",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-default",o=arguments.length>2?arguments[2]:void 0;this.readyToStart(e,t,!1,o)&&(this.hasRunningTask(!0,e)||this.loaders[e].tasks[t].isOtherRunning||this.showBackground.next({loaderId:e,isShow:!0}))}},{key:"startBackground",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bg-default",t=arguments.length>1?arguments[1]:void 0;this.startBackgroundLoader(this.defaultConfig.masterLoaderId,e,t)}},{key:"stopLoader",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fg-default";this.readyToStop(e,o)&&(this.hasRunningTask(!0,e)||(this.foregroundCloseout(e),this.showForeground.next({loaderId:e,isShow:!1}),this.hasRunningTask(!1,e)&&setTimeout((function(){t.hasRunningTask(!1,e)&&t.showBackground.next({loaderId:e,isShow:!0})}),this.defaultConfig.fastFadeOut?300:500)))}},{key:"stop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fg-default";this.stopLoader(this.defaultConfig.masterLoaderId,e)}},{key:"stopBackgroundLoader",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-default";this.readyToStop(e,t)&&(this.hasRunningTask(!0,e)||this.hasRunningTask(!1,e)||(this.backgroundCloseout(e),this.showBackground.next({loaderId:e,isShow:!1})))}},{key:"stopBackground",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bg-default";this.stopBackgroundLoader(this.defaultConfig.masterLoaderId,e)}},{key:"stopAllLoader",value:function(e){this.loaders[e]?(this.hasRunningTask(!0,e)?(this.foregroundCloseout(e),this.showForeground.next({loaderId:e,isShow:!1})):this.hasRunningTask(!1,e)&&(this.backgroundCloseout(e),this.showBackground.next({loaderId:e,isShow:!1})),this.clearAllTimers(this.loaders[e].tasks),this.loaders[e].tasks={}):console.warn('[ngx-ui-loader] - loaderId "'.concat(e,'" does not exist.'))}},{key:"stopAll",value:function(){this.stopAllLoader(this.defaultConfig.masterLoaderId)}},{key:"createLoaderData",value:function(e,t,o){this.loaders[e]||(this.loaders[e]={loaderId:e,tasks:{},isMaster:t,isBound:o})}},{key:"foregroundCloseout",value:function(e){var t=this;this.fgClosing.next({loaderId:e,isShow:!0}),setTimeout((function(){t.fgClosing.next({loaderId:e,isShow:!1})}),this.defaultConfig.fastFadeOut?601:1001)}},{key:"backgroundCloseout",value:function(e){var t=this;this.bgClosing.next({loaderId:e,isShow:!0}),setTimeout((function(){t.bgClosing.next({loaderId:e,isShow:!1})}),this.defaultConfig.fastFadeOut?601:1001)}},{key:"clearTimers",value:function(e){clearTimeout(e.delayTimer),clearTimeout(e.maxTimer),clearTimeout(e.minTimer)}},{key:"clearAllTimers",value:function(e){var t=this;Object.keys(e).map((function(o){t.clearTimers(e[o])}))}},{key:"hasRunningTask",value:function(e,t,o){if(this.loaders[t]){var i=this.loaders[t].tasks;return o?!!i[o]&&!!i[o].startAt:Object.keys(i).some((function(t){return!!i[t].startAt&&i[t].isForeground===e}))}return!1}},{key:"readyToStart",value:function(e,t,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h;this.createLoaderData(e,void 0,!1);var s=this.hasRunningTask(o,e);if(this.loaders[e].tasks[t]){if(this.loaders[e].tasks[t].isForeground!==o)throw new Error('[ngx-ui-loader] - taskId "'.concat(t,'" is duplicated.'))}else this.loaders[e].tasks[t]={taskId:t,isForeground:o,minTime:i.minTime>=0?i.minTime:this.defaultConfig.minTime,maxTime:i.maxTime?i.maxTime:this.defaultConfig.maxTime,delay:i.delay>=0?i.delay:this.defaultConfig.delay};return!this.setDelayTimer(this.loaders[e].tasks[t],e)&&(this.loaders[e].tasks[t]=Object.assign(Object.assign({},this.loaders[e].tasks[t]),{isOtherRunning:s,startAt:Date.now()}),this.setMaxTimer(this.loaders[e].tasks[t],e),!!this.loaders[e].isBound)}},{key:"readyToStop",value:function(e,t){if(!this.loaders[e])return console.warn('[ngx-ui-loader] - loaderId "'.concat(e,'" does not exist.')),!1;var o=this.loaders[e].tasks[t];return!(!o||(o.isDelayed?(this.clearTimers(o),delete this.loaders[e].tasks[t],1):this.setMinTimer(o,e)||(this.clearTimers(o),delete this.loaders[e].tasks[t],0)))}},{key:"setDelayTimer",value:function(e,t){var o=this;if(e.delay>0){if(e.isDelayed)return!0;if(!e.delayTimer)return e.isDelayed=!0,e.delayTimer=setTimeout((function(){e.isDelayed=!1,e.isForeground?o.startLoader(t,e.taskId):o.startBackgroundLoader(t,e.taskId)}),e.delay),!0}return!1}},{key:"setMaxTimer",value:function(e,t){var o=this;e.maxTime>e.minTime&&(clearTimeout(e.maxTimer),e.maxTimer=setTimeout((function(){e.isForeground?o.stopLoader(t,e.taskId):o.stopBackgroundLoader(t,e.taskId)}),e.maxTime))}},{key:"setMinTimer",value:function(e,t){var o=this,i=Date.now();return!!(e.startAt&&e.startAt+e.minTime>i)&&(e.minTimer=setTimeout((function(){e.isForeground?o.stopLoader(t,e.taskId):o.stopBackgroundLoader(t,e.taskId)}),e.startAt+e.minTime-i),!0)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.fc(g,8))},t.\u0275prov=Object(a.Nb)({factory:function(){return new t(Object(a.fc)(g,8))},token:t,providedIn:"root"}),t}(),k=function(){var t=function(){function t(){e(this,t)}return o(t,null,[{key:"forRoot",value:function(e){return{ngModule:t,providers:[{provide:g,useValue:e}]}}}]),t}();return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(e){return new(e||t)},imports:[[r.c]]}),t}()}}])}();