(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();

let v=0;
function L(t){return`${t}_callback_${Date.now()}_${v++}`}
function w(t,e){return typeof e>"u"&&(e={}),new Promise((r,i)=>{const s=L("exec");window[s]=(o,d,g)=>{r({errno:o,stdout:d,stderr:g}),n(s)};function n(o){delete window[o]}try{ksu.exec(t,JSON.stringify(e),s)}catch(o){i(o),n(s)}})}

function b(t){showToast(t)}
function showToast(t){const e=document.getElementById("toast");e.textContent=t,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},3000)}

let lineCount=0;
function logOutput(t){const e=document.getElementById("output-log");if(!e)return;const r=t.trim().split("\n");for(const i of r){lineCount++;const s=document.createElement("pre");s.textContent=`${lineCount.toString().padStart(3," ")} | ${i}`,e.appendChild(s),e.scrollTop=e.scrollHeight}}

const R=document.getElementById("app-template").content,h=document.getElementById("apps-list");
async function u(t){const{errno:e,stdout:r,stderr:i}=await w(t);if(e!==0){b(`stderr: ${i}`);return}return r}

function S(){[...h.children].sort((t,e)=>t.querySelector('input[type="checkbox"]').checked?-1:1).forEach(t=>h.appendChild(t))}
const f=[];
function $(t,e){const r=document.importNode(R,!0),i=r.querySelector(".app-name"),s=r.querySelector(".package-name");i.textContent=t,s&&(s.textContent=t);const n=r.querySelector('input[type="checkbox"]');n.checked=e,e&&f.push(t),n.addEventListener("change",async()=>{const{stdout:o}=await w(`grep "^${t}" /data/system/packages.list | awk '{print $2; exit}'`);if(!o||isNaN(o)){b(`Unable to fetch UID of ${t}.`),await p();return}if(n.checked)f.push(t),await w(`iptables -I OUTPUT -m owner --uid-owner ${o} -j REJECT`),await w(`ip6tables -I OUTPUT -m owner --uid-owner ${o} -j REJECT`),logOutput(`[+] Blocked: ${t}`);else{const d=f.indexOf(t);d!==-1&&f.splice(d,1),await w(`iptables -D OUTPUT -m owner --uid-owner ${o} -j REJECT`),await w(`ip6tables -D OUTPUT -m owner --uid-owner ${o} -j REJECT`),logOutput(`[-] Unblocked: ${t}`)}await p(),updateCounter()}),h.appendChild(r)}

async function p(){await w(`echo '${JSON.stringify(f)}' >/data/adb/net-switch/isolated.json`)}
async function T(){const t=await u("pm list packages");if(t===void 0)return;const e=await u("cat /data/adb/net-switch/isolated.json");let r=e?JSON.parse(e):[];const i=new Set(t.split(`
`).map(n=>n.split(":")[1]).filter(Boolean)),s=r.filter(n=>i.has(n));r.length!==s.length&&(await u(`echo '${JSON.stringify(s)}' >/data/adb/net-switch/isolated.json`),r=s);for(const n of i){const o=r.includes(n);$(n,o)}S(),document.getElementById("search")&&document.getElementById("search").addEventListener("input",n=>{const o=n.target.value.toLowerCase();[...h.children].forEach(d=>{const c=d.querySelector(".app-name"),m=d.querySelector(".package-name");if(c&&m){const g=c.textContent.toLowerCase(),y=m.textContent.toLowerCase();d.style.display=g.includes(o)||y.includes(o)?"":"none"}})})}

function updateCounter(){const e=document.getElementById("blocked-counter");e&&(e.textContent=f.length)}

// --- MAIN LOGIC ---
document.addEventListener("DOMContentLoaded",()=>{setTimeout(async()=>{try{await T(),updateCounter();const e=document.getElementById("clear-output");e&&(e.onclick=()=>{lineCount=0;const t=document.getElementById("output-log");t&&(t.innerHTML="")});const n=document.getElementById("search");if(n){const t=document.getElementById("search");t&&t.addEventListener("input",t=>{const o=t.target.value.toLowerCase();[...h.children].forEach(d=>{const c=d.querySelector(".app-name"),m=d.querySelector(".package-name");if(c&&m){const g=c.textContent.toLowerCase(),y=m.textContent.toLowerCase();d.style.display=g.includes(o)||y.includes(o)?"":"none"}})})}const o=document.getElementById("theme-toggle");if(o){const e=localStorage.getItem("theme");e==="dark"?(document.documentElement.classList.add("dark"),o.checked=!0):(document.documentElement.classList.remove("dark"),o.checked=!1),o.onchange=()=>{o.checked?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))}}const s=document.getElementById("unblock-all-btn");s&&s.addEventListener("click",async()=>{if(f.length===0){b("No apps blocked!");return}if(!confirm(`Unblock all ${f.length} apps?`))return;b("Unblocking all..."),logOutput("[*] Bulk unblock started...");let e=0;const t=[...f];for(const n of t){const{stdout:r}=await u(`grep "^${n}" /data/system/packages.list | awk '{print $2; exit}'`);if(!r||isNaN(r))continue;const o=f.indexOf(n);o!==-1&&(f.splice(o,1),await w(`iptables -D OUTPUT -m owner --uid-owner ${r} -j REJECT`),await w(`ip6tables -D OUTPUT -m owner --uid-owner ${r} -j REJECT`),e++)}await p(),b(`Unblocked ${e} apps`),logOutput(`[+] Unblocked ${e} apps`),updateCounter(),setTimeout(()=>location.reload(),600)})}catch(e){console.error("Fatal error:",e),b("Init failed")}},150)});

const x=q("net-switch");x.injectStyleSheets();
