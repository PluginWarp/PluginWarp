// This extension by Sharkpool has been minified and modified by "Mistium" to remove code that goes unused within originOS
// DO NOT USE THIS
// Go here: https://sharkpool-sp.github.io/SharkPools-Extensions/

!function(e){"use strict";if(!e.extensions.unsandboxed)throw new Error("Tune Shark extension must be run unsandboxed");let t=!0,o=!1;e.extensions.register(new class{constructor(){this.sounds={},this.overlappables={},this.overriddenVol={},e.vm.runtime.on("PROJECT_START",(()=>{o&&this.controlAllSounds({CONTROL:"stop"})})),e.vm.runtime.on("PROJECT_STOP_ALL",(()=>{o&&this.controlAllSounds({CONTROL:"stop"})}))}getInfo(){return{id:"SPtuneShark",name:"Tune Shark",color1:"#848484",color2:"#676767",color3:"#4e4e4e",blocks:[{opcode:"importSound",blockType:e.BlockType.COMMAND,text:"import sound from URL/URI [URL] named [NAME]",arguments:{URL:{type:e.ArgumentType.STRING,defaultValue:"https://tinyurl.com/Resonance-Home"},NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"}}},{func:"enableTest",blockType:e.BlockType.BUTTON,text:"Enable Sprite Sound Block",hideFromPalette:!t},{opcode:"importMenuSound",blockType:e.BlockType.COMMAND,hideFromPalette:t,arguments:{SOUND:{type:e.ArgumentType.SOUND},NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"}}},{opcode:"convertURLToURI",blockType:e.BlockType.COMMAND,text:"convert sound [INPUT_NAME] from URL to URI and save it to sound [OUTPUT_NAME]",arguments:{INPUT_NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},OUTPUT_NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound2"}}},{blockType:e.BlockType.LABEL,text:"Audio Playback"},{opcode:"playSound",blockType:e.BlockType.COMMAND,text:"play sound [NAME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"}}},{opcode:"playSoundAt",blockType:e.BlockType.COMMAND,text:"start sound [NAME] at time [START_TIME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},START_TIME:{type:e.ArgumentType.NUMBER,defaultValue:0}}},{opcode:"startAndStop",blockType:e.BlockType.COMMAND,text:"play sound [NAME] and stop at [MAX] seconds",hideFromPalette:!0,arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},MAX:{type:e.ArgumentType.NUMBER,defaultValue:2}}},{opcode:"lateStartAndStop",blockType:e.BlockType.COMMAND,text:"start sound [NAME] at time [START_TIME] and stop at [MAX] seconds",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},START_TIME:{type:e.ArgumentType.NUMBER,defaultValue:0},MAX:{type:e.ArgumentType.NUMBER,defaultValue:2}}},{opcode:"stopSound",blockType:e.BlockType.COMMAND,text:"stop sound [NAME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"}}},{opcode:"controlAllSounds",blockType:e.BlockType.COMMAND,text:"[CONTROL] all sounds",arguments:{CONTROL:{type:e.ArgumentType.STRING,menu:"control"}}},"---",{opcode:"pauseUnpauseSound",blockType:e.BlockType.COMMAND,text:"[PAUSE_UNPAUSE] sound [NAME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},PAUSE_UNPAUSE:{type:e.ArgumentType.STRING,menu:"pauseUnpauseMenu"}}},{opcode:"pauseUnpauseAllSounds",blockType:e.BlockType.COMMAND,text:"[PAUSE_UNPAUSE] all sounds",arguments:{PAUSE_UNPAUSE:{type:e.ArgumentType.STRING,menu:"pauseUnpauseMenu"}}},{blockType:e.BlockType.LABEL,text:"Audio Effects"},{opcode:"setSoundVolume",blockType:e.BlockType.COMMAND,text:"set volume of sound [NAME] to [VOLUME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},VOLUME:{type:e.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"setSoundSpeed",blockType:e.BlockType.COMMAND,text:"set speed of sound [NAME] to [SPEED]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},SPEED:{type:e.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setSoundPitch",blockType:e.BlockType.COMMAND,text:"set pitch of sound [NAME] to [PITCH]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},PITCH:{type:e.ArgumentType.NUMBER,defaultValue:1}}},{blockType:e.BlockType.LABEL,text:"Audio Operations"},{opcode:"toggleLoopSound",blockType:e.BlockType.COMMAND,text:"set sound [NAME] to [LOOP_STATE]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},LOOP_STATE:{type:e.ArgumentType.STRING,menu:"loopMenu"}}},{opcode:"toggleOverlap",blockType:e.BlockType.COMMAND,text:"toggle sound [NAME] overlapping [OVERLAP]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},OVERLAP:{type:e.ArgumentType.STRING,menu:"overlapMenu"}}},"---",{opcode:"soundProperty",blockType:e.BlockType.REPORTER,text:"sound [NAME] [PROPERTY]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},PROPERTY:{type:e.ArgumentType.STRING,menu:"soundProperties"}}},{opcode:"currentSoundTime",blockType:e.BlockType.REPORTER,text:"current time of sound [NAME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"}}},{opcode:"getLoudnessAtTime",blockType:e.BlockType.REPORTER,text:"loudness of sound [NAME] at time [TIME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},TIME:{type:e.ArgumentType.NUMBER,defaultValue:0}}},"---",{opcode:"returnInfo",blockType:e.BlockType.REPORTER,text:"URL used by sound [NAME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"}}},{opcode:"soundCheck",blockType:e.BlockType.BOOLEAN,text:"sound [NAME] [CONTROL]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"},CONTROL:{type:e.ArgumentType.STRING,menu:"control2"}}},{opcode:"allSounds",blockType:e.BlockType.REPORTER,text:"all sounds",disableMonitor:!0},{opcode:"deleteSound",blockType:e.BlockType.COMMAND,text:"delete sound [NAME]",arguments:{NAME:{type:e.ArgumentType.STRING,defaultValue:"MySound"}}},{opcode:"deleteAllSounds",blockType:e.BlockType.COMMAND,text:"delete all sounds"},{blockType:e.BlockType.LABEL,text:"Array Sound Grouping"},{opcode:"playSounds",blockType:e.BlockType.COMMAND,text:"play sounds [NAMES]",arguments:{NAMES:{type:e.ArgumentType.STRING,defaultValue:'["MySound", "MySound2"]'}}},{opcode:"playSoundsAt",blockType:e.BlockType.COMMAND,text:"start sounds [NAMES] at time [START_TIME]",arguments:{NAMES:{type:e.ArgumentType.STRING,defaultValue:'["MySound", "MySound2"]'},START_TIME:{type:e.ArgumentType.NUMBER,defaultValue:0}}},{opcode:"stopSounds",blockType:e.BlockType.COMMAND,text:"stop sounds [NAMES]",arguments:{NAMES:{type:e.ArgumentType.STRING,defaultValue:'["MySound", "MySound2"]'}}},{opcode:"pauseUnpauseSounds",blockType:e.BlockType.COMMAND,text:"[PAUSE_UNPAUSE] sounds [NAMES]",arguments:{NAMES:{type:e.ArgumentType.STRING,defaultValue:'["MySound", "MySound2"]'},PAUSE_UNPAUSE:{type:e.ArgumentType.STRING,menu:"pauseUnpauseMenu"}}},{blockType:e.BlockType.LABEL,text:"Group Effects"},{opcode:"setSoundsVolume",blockType:e.BlockType.COMMAND,text:"set volume of sounds [NAMES] to [VOLUME]",arguments:{NAMES:{type:e.ArgumentType.STRING,defaultValue:'["MySound", "MySound2"]'},VOLUME:{type:e.ArgumentType.NUMBER,defaultValue:100}}},{opcode:"setSoundSpeeds",blockType:e.BlockType.COMMAND,text:"set speed of sounds [NAMES] to [SPEED]",arguments:{NAMES:{type:e.ArgumentType.STRING,defaultValue:'["MySound", "MySound2"]'},SPEED:{type:e.ArgumentType.NUMBER,defaultValue:1}}},{opcode:"setSoundsPitch",blockType:e.BlockType.COMMAND,text:"set pitch of sounds [NAMES] to [PITCH]",arguments:{NAMES:{type:e.ArgumentType.STRING,defaultValue:'["MySound", "MySound2"]'},PITCH:{type:e.ArgumentType.NUMBER,defaultValue:1}}}],menus:{pauseUnpauseMenu:["pause","unpause"],soundProperties:{acceptReporters:!0,items:["length","volume","speed","pitch","paused?","looping?"]},loopMenu:["loopable","unloopable"],control:["play","stop"],control2:["exists?","playing?"],overlapMenu:["on","off"]}}}enableTest(){confirm(['This will enable the "Import Sound from Sprite Menu" Block. WARNING! Although this Block will Import Sounds from the Sprite Libary, it might not always work for every sound.',"Continue?"].join("\n\n"))&&(t=!1,e.vm.extensionManager.refreshBlocks())}async pauseListener(){let e=[];try{const t=vm.runtime.ioDevices.clock._paused;if(false!==t&&t){const t=Object.keys(this.sounds);t.length>0&&t.forEach((t=>{const o=this.sounds[t];o&&o.length>0&&o.forEach((t=>{t.paused||(e.push(t),t.pause())}))})),await async function(){return new Promise((e=>{const t=()=>{vm.runtime.ioDevices.clock._paused?setTimeout(t,10):e()};t()}))}();for(let t=0;t<e.length;t++)e[t].play()}}catch(e){console.log(e)}}importSound(e){void 0!==this.sounds[e.NAME]&&this.deleteSound(e);const t=new Audio(e.URL);this.sounds[e.NAME]=[t],this.overriddenVol[e.NAME]={val:100}}importMenuSound(e,t){void 0!==this.sounds[e.NAME]&&this.deleteSound(e);const o=this.SoundIndex(e.SOUND,t);if(o<0)return;const n=t.target.sprite.sounds[o].asset.encodeDataURI(),{URI:s=n,NAME:u}=e,a=new Audio(n);this.sounds[u]=[a]}SoundIndex(e,t){const o=t.target.sprite.sounds;return o.indexOf(o.filter((t=>t.name==e))[0])}playSound(e){const t=this.sounds[e.NAME];t&&t.length>0&&t.forEach((t=>{t.currentTime>.2&&t.currentTime!==t.duration&&this.checkOverlap(e),t.play()}))}playSoundAt(e){const t=this.sounds[e.NAME];t&&t.length>0&&t.forEach((t=>{t.currentTime!==e.START_TIME&&t.currentTime>.2&&this.checkOverlap(e),t.currentTime=e.START_TIME,t.play()}))}async startAndStop(e){await this.playSoundandStop(e.NAME,e.MAX,0)}async lateStartAndStop(e){await this.playSoundandStop(e.NAME,e.MAX,e.START_TIME)}async playSoundandStop(e,t,o){const n=this.sounds[e];n&&n.length>0&&n.forEach((e=>{e.currentTime=o,e.play()})),await new Promise(((n,s)=>{setTimeout((()=>{const t=this.sounds[e];t&&t.length>0&&t.forEach((e=>{e.pause(),e.currentTime=0})),n()}),1e3*(t-o))}))}stopSound(e){const t=this.sounds[e.NAME];t&&t.length>0&&t.forEach((e=>{e.pause(),e.currentTime=0}))}controlAllSounds(e){Object.values(this.sounds).forEach((t=>{t.forEach((t=>{"play"===e.CONTROL?t.play():(t.pause(),t.currentTime=0)}))}))}setSoundVolume(e){e.VOLUME=Math.max(0,Math.min(100,e.VOLUME));const t=this.sounds[e.NAME];t&&t.length>0&&(t.forEach((t=>{t.volume=e.VOLUME/100})),this.overriddenVol[e.NAME]={val:e.VOLUME})}setSoundSpeed(e){e.SPEED<0&&(e.SPEED=0);const t=this.sounds[e.NAME];t&&t.length>0&&t.forEach((t=>{t.playbackRate=e.SPEED}))}setSoundPitch(e){const t=this.sounds[e.NAME];t&&t.length>0&&t.forEach((t=>{t.mozPreservesPitch=!1,t.playbackRate=1;const o=Math.pow(2,1/12),n=Math.pow(o,e.PITCH);t.playbackRate=n}))}toggleLoopSound(e){const t=this.sounds[e.NAME];if(t&&t.length>0){const o="loopable"===e.LOOP_STATE;t.forEach((e=>{e.loop=o}))}}toggleOverlap(e){if("on"===e.OVERLAP){const t=this.returnInfo(e);"Audio Doesnt Exist!"!==t&&(this.overlappables[e.NAME]={src:t})}else delete this.overlappables[e.NAME]}pauseUnpauseSound(e){const t=this.sounds[e.NAME];if(t&&t.length>0){const o="pause"===e.PAUSE_UNPAUSE;t.forEach((e=>{o&&!e.paused?e.pause():!o&&e.paused&&e.play()}))}}pauseUnpauseAllSounds(e){const t="pause"===e.PAUSE_UNPAUSE;Object.values(this.sounds).forEach((e=>{e.forEach((e=>{t&&!e.paused?e.pause():!t&&e.paused&&e.play()}))}))}soundCheck(e){if("exists?"===e.CONTROL)return this.sounds.hasOwnProperty(e.NAME);{const t=this.sounds[e.NAME];if(t&&t.length>0){const e=t[0];return 0!==e.currentTime&&!e.paused}return!1}}soundProperty(e){const t=this.sounds[e.NAME];if(t&&t.length>0){const o=t[0];switch(e.PROPERTY){case"length":return o.duration;case"volume":return this.overriddenVol[e.NAME].val;case"speed":return o.playbackRate;case"pitch":return this.getPitchFromAudio(o);case"paused?":return o.paused;case"looping?":return o.loop}}return 0}getPitchFromAudio(e){const t=Math.pow(2,1/12),o=Math.log(e.playbackRate)/Math.log(t);return Math.round(10*o)/10}currentSoundTime(e){const t=this.sounds[e.NAME];if(t&&t.length>0){return t[0].currentTime}return 0}allSounds(){return JSON.stringify(Object.keys(this.sounds))}deleteAllSounds(){this.controlAllSounds("stop"),this.sounds={},this.overlappables={}}deleteSound(e){this.stopSound(e),delete this.sounds[e.NAME],delete this.overlappables[e.NAME]}enableControllers(e){o="on"===e.ON_OFF}playSounds(e){JSON.parse(e.NAMES).forEach((e=>{const t=this.sounds[e];t&&t.length>0&&t.forEach((e=>{e.play()}))}))}playSoundsAt(e){JSON.parse(e.NAMES).forEach((t=>{const o=this.sounds[t];o&&o.length>0&&o.forEach((t=>{t.currentTime=e.START_TIME,t.play()}))}))}stopSounds(e){JSON.parse(e.NAMES).forEach((e=>{const t=this.sounds[e];t&&t.length>0&&t.forEach((e=>{e.pause(),e.currentTime=0}))}))}pauseUnpauseSounds(e){const t=JSON.parse(e.NAMES),o="pause"===e.PAUSE_UNPAUSE;t.forEach((e=>{const t=this.sounds[e];t&&t.length>0&&t.forEach((e=>{o&&!e.paused?e.pause():!o&&e.paused&&e.play()}))}))}setSoundsVolume(e){const t=Math.max(0,Math.min(100,e.VOLUME));JSON.parse(e.NAMES).forEach((e=>{const o=this.sounds[e];o&&o.length>0&&(o.forEach((e=>{e.volume=t/100})),this.overriddenVol[e]={val:t})}))}setSoundSpeeds(e){e.SPEED<0&&(e.SPEED=0);JSON.parse(e.NAMES).forEach((t=>{const o=this.sounds[t];o&&o.length>0&&o.forEach((t=>{t.playbackRate=e.SPEED}))}))}setSoundsPitch(e){JSON.parse(e.NAMES).forEach((t=>{const o=this.sounds[t];o&&o.length>0&&o.forEach((t=>{t.mozPreservesPitch=!1,t.playbackRate=1;const o=Math.pow(2,1/12),n=Math.pow(o,e.PITCH);t.playbackRate=n}))}))}getLoudnessAtTime(e){const{NAME:t,TIME:o}=e,n=this.sounds[t];if(n&&n.length>0){const e=n[0],t=e.duration;if(o>=0&&o<=t){let n=e.src;if(!n.startsWith("data:"))return"Audio URLs DO NOT WORK, convert to URI!";const s=Math.floor(n.length*(o/t));if(s>=0&&s<n.length){let e=n.charAt(s).charCodeAt(0);return e=Math.PI/180*e,e=100*Math.sin(e/2)-50,e*=e<0?-2:3,e}}}return n?"Invalid Time Input!":"Audio Doesnt Exist!"}async convertURLToURI(e){const t=this.sounds[e.INPUT_NAME];if(t&&t.length>0){const o=t[0].src;try{const t=await fetch(o),n=await t.blob(),s=await new Promise((e=>{const t=new FileReader;t.onloadend=()=>e(t.result),t.readAsDataURL(n)}));this.sounds[e.OUTPUT_NAME]=[new Audio(s)],console.log("Conversion Success!")}catch(e){console.error("Error Converting: "+e.message)}}else console.log("Audio Doesnt Exist!")}returnInfo(t){const o=this.sounds[t.NAME];return o&&o.length>0?e.Cast.toString(this.sounds[t.NAME][0].src):"Audio Doesnt Exist!"}checkOverlap(e){if(void 0!==this.overlappables[e.NAME]){const t=this.sounds[e.NAME][0],o=new Audio(this.overlappables[e.NAME].src);o.playbackRate=t.playbackRate||o.defaultPlaybackRate,o.currentTime=e.START_TIME||0,o.volume=t.volume||1,o.play();const n=setInterval((()=>{o.playbackRate=t.playbackRate||o.defaultPlaybackRate,o.volume=t.volume||1;const e=Math.round(1e3*t.currentTime)/1e3,s=Math.round(1e3*t.duration)/1e3;if(t.paused&&e!==s){o.pause();const e=()=>{t.paused?setTimeout(e,10):o.play()};e()}t.paused&&0===t.currentTime&&(o.pause(),o.currentTime=0,o.src="",o.context&&o.context.close(),clearInterval(n))}),100)}}})}(Scratch),unsandboxed;