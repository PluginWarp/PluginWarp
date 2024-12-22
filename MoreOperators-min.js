// This extension by Sharkpool has been minified and modified by "Mistium" to remove code that goes unused within originOS
// DO NOT USE THIS
// Go here: https://sharkpool-sp.github.io/SharkPools-Extensions/

!function(e){"use strict";if(!e.extensions.unsandboxed)throw new Error("More Operators must run unsandboxed");e.vm;const t=["SPmoreOPs_getLetter","SPmoreOPs_getIndex"];e.gui&&e.gui.getBlockly().then((e=>{const r=e.scratchBlocksUtils.isShadowArgumentReporter;e.scratchBlocksUtils.isShadowArgumentReporter=function(e){return!!r(e)||e.isShadow()&&t.includes(e.type)}}));e.extensions.register(new class{getInfo(){return{id:"SPmoreOPs",name:"More Operators",color1:"#59C059",color2:"#50ad50",color3:"#479a47",blocks:[{opcode:"isPrime",extensions:["colours_operators"],blockType:e.BlockType.BOOLEAN,text:"is [NUM] prime?",arguments:{NUM:{type:e.ArgumentType.NUMBER,defaultValue:2}}},{blockType:e.BlockType.LABEL,text:"Math"},{opcode:"root",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"[N] âˆš [NUM]",arguments:{N:{type:e.ArgumentType.NUMBER,defaultValue:2},NUM:{type:e.ArgumentType.NUMBER,defaultValue:25}}},{opcode:"percent",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"[NUM1] % of [NUM2]",arguments:{NUM1:{type:e.ArgumentType.NUMBER,defaultValue:50},NUM2:{type:e.ArgumentType.NUMBER,defaultValue:50}}},"---",{opcode:"lcm",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"lcm of [NUM1] and [NUM2]",arguments:{NUM1:{type:e.ArgumentType.NUMBER,defaultValue:5},NUM2:{type:e.ArgumentType.NUMBER,defaultValue:15}}},{opcode:"gcd",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"gcd of [NUM1] and [NUM2]",arguments:{NUM1:{type:e.ArgumentType.NUMBER,defaultValue:5},NUM2:{type:e.ArgumentType.NUMBER,defaultValue:15}}},{opcode:"simplifyFrac",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"simplify fraction [NUM] / [DENOM]",arguments:{NUM:{type:e.ArgumentType.NUMBER,defaultValue:4},DENOM:{type:e.ArgumentType.NUMBER,defaultValue:8}}},{opcode:"roundNear",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"round [NUMBER] to nearest [ROUND_TYPE]",arguments:{NUMBER:{type:e.ArgumentType.NUMBER,defaultValue:3.1415},ROUND_TYPE:{type:e.ArgumentType.NUMBER,defaultValue:3}}},{blockType:e.BlockType.LABEL,text:"Strings"},{opcode:"trim",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"trim [STRING]",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"apple    "}}},{opcode:"insertString",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"insert [STRING2] after letter [NUM] in [STRING1]",arguments:{STRING1:{type:e.ArgumentType.STRING,defaultValue:"bana"},NUM:{type:e.ArgumentType.NUMBER,defaultValue:3},STRING2:{type:e.ArgumentType.STRING,defaultValue:"an"}}},{opcode:"padding",extensions:["colours_operators"],blockType:e.BlockType.REPORTER,text:"pad [STRING1] at [TYPE] with [STRING2] at length [NUM]",arguments:{STRING1:{type:e.ArgumentType.STRING,defaultValue:"anana"},TYPE:{type:e.ArgumentType.STRING,menu:"PADS"},STRING2:{type:e.ArgumentType.STRING,defaultValue:"b"},NUM:{type:e.ArgumentType.NUMBER,defaultValue:10}}}],menus:{EVEN_ODD:["even","odd"],PADS:["start","end","both"]}}}typeString(e){return"||"===e.TYPE?e.STRING1||e.STRING2:"undefined"===e.STRING1||"null"===e.STRING1?e.STRING2:e.STRING1}evenOdd(t){const r=e.Cast.toNumber(t.NUM);return"even"===t.TYPE?r%2==0:r%2!=0}isPrime(t){const r=Math.abs(e.Cast.toNumber(t.NUM));if(r<=1)return!1;if(r<=3)return!0;if(r%2==0||r%3==0)return!1;for(let e=5;e*e<=r;e+=6)if(r%e==0||r%(e+2)==0)return!1;return!0}root(t){return Math.pow(e.Cast.toNumber(t.NUM),1/e.Cast.toNumber(t.N))}percent(t){return e.Cast.toNumber(t.NUM2)*(.01*e.Cast.toNumber(t.NUM1))}simplifyFrac(t){const r=e.Cast.toNumber(t.NUM),o=e.Cast.toNumber(t.DENOM),n=(e,t)=>t?n(t,e%t):e,a=n(r,o),u=JSON.stringify([r/a,o/a]);return u.includes("null")?"[undefined]":u}gcd(t){let r=e.Cast.toNumber(t.NUM1),o=e.Cast.toNumber(t.NUM2);for(;0!==o;){let e=o;o=r%o,r=e}return r}lcm(t){const r=e.Cast.toNumber(t.NUM1),o=e.Cast.toNumber(t.NUM2);return Math.abs(r*o)/this.gcd({NUM1:r,NUM2:o})}roundNear(t){const r=Math.max(0,Math.round(e.Cast.toNumber(t.ROUND_TYPE))),o=Math.pow(10,r);return Math.round(t.NUMBER*o)/o}trim(t){return e.Cast.toString(t.STRING).trim()}padding(t){const r=e.Cast.toNumber(t.NUM),o=e.Cast.toString(t.STRING1);return"start"===t.TYPE?o.padStart(r,t.STRING2):"end"===t.TYPE?o.padEnd(r,t.STRING2):t.STRING1.padStart(o.length+(r-o.length)/2,t.STRING2).padEnd(r,t.STRING2)}insertString(t){const r=e.Cast.toString(t.STRING1),o=e.Cast.toString(t.STRING2),n=e.Cast.toNumber(t.NUM),a=r.split("");return a.splice(n,0,...o.split("")),a.join("")}randomLetter(e){let t="abcdefghijklmnopqrstuvwxyz";return"uppercase"===e.LETTER_TYPE&&(t=t.toUpperCase()),t.charAt(Math.floor(26*Math.random()))}})}(Scratch);