const crackedSteps = [
  {title:"Back up your phone",simple:"Back up to iCloud or a computer first.",detailed:"Back up to iCloud or a computer before you open the phone. If a repair goes wrong, that copy protects your photos and messages.",check:"You can see a recent backup in Settings."},
  {title:"Switch the phone off",simple:"Turn the phone off before opening it.",detailed:"Hold the side button and a volume button, then slide to power off. Wait until the screen is fully dark.",check:"The display is dark and the phone no longer responds to touch.",offline:true},
  {title:"Remove the bottom screws",simple:"Take out the two screws beside the port.",detailed:"Use a P2 pentalobe driver. Keep the left and right screws apart so each returns to its original hole.",check:"Both screws are out and safely set aside.",offline:true},
  {title:"Warm the screen edge",simple:"Warm the edge to soften the seal.",detailed:"Use a heat pad on the edge for a short time. The glass should feel warm, never too hot to touch.",check:"The adhesive is soft enough for a suction handle.",offline:true},
  {title:"Lift the screen a little",simple:"Use a suction handle and a plastic pick.",detailed:"Pull gently with the suction handle and slide a plastic pick into the small gap. Do not push the pick far inside.",check:"A thin gap opens without bending the screen.",offline:true},
  {title:"Open the screen carefully",simple:"Lift the screen from the left edge.",detailed:"Open the display like a book from the left. The cables on the right edge are short and easy to tear.",check:"The screen is supported and its cables are not stretched.",offline:true},
  {title:"Disconnect the battery",simple:"Unplug the battery before other cables.",detailed:"Remove the cover, then lift the battery connector straight up with a plastic tool. Do this before touching the display connectors.",check:"The battery connector is no longer touching its socket.",offline:true},
  {title:"Fit the new screen",simple:"Connect the new screen and close the phone.",detailed:"Connect the display, test touch before sealing, then fit the new adhesive and reinstall the screws.",check:"Touch works across the screen and the edge sits flat."},
];
const batterySteps = [
  {title:"Back up your phone",simple:"Make a backup before the repair.",detailed:"Back up to iCloud or a computer. A recent backup protects your information if the phone needs extra service.",check:"You can see a recent backup in Settings."},
  {title:"Switch the phone off",simple:"Turn the phone off before it is opened.",detailed:"Power off fully before opening the phone. Battery repairs involve heat and electrical connectors.",check:"The screen is fully dark.",offline:true},
  {title:"Open the screen",simple:"Warm the edge and lift the screen carefully.",detailed:"Soften the edge adhesive and use a suction handle with a plastic pick. Keep the pick shallow to protect cables.",check:"The screen lifts without bending.",offline:true},
  {title:"Unplug the battery",simple:"Disconnect the battery before removing it.",detailed:"Remove the connector cover, then lift the battery connector straight up with a plastic tool.",check:"The battery connector is clear of its socket.",offline:true},
  {title:"Remove the old battery",simple:"Loosen the adhesive and lift the battery out.",detailed:"Use the pull tabs if present. Do not bend or puncture the battery; stop if it resists or looks swollen.",check:"The old battery is out without bending or puncturing it.",offline:true},
  {title:"Fit and test the new battery",simple:"Connect the new battery and test the phone.",detailed:"Fit the new adhesive, connect the replacement battery, and check charging before sealing the phone.",check:"The phone starts and shows that it is charging."},
];

const scenarios={
 clear:{headline:"Everything looks good",subtitle:"Nothing on record for this iPhone.",score:100,word:"Good shape",tint:"good",issues:[],ticket:null},
 cracked:{headline:"One thing needs fixing",subtitle:"Start with the red one below — it is affecting your phone now.",score:68,word:"Needs attention",tint:"critical",issues:[
  {id:"screen",title:"Your screen is cracked",part:"The screen · On the front",level:"Needs fixing now",kind:"critical",summary:"The glass is broken. The seal that keeps water out is broken too.",meaning:"The glass is broken. Touch still works everywhere. The seal that keeps water out is broken too, so treat your phone as no longer water resistant.",actions:["Put clear tape over the crack","Keep it away from water — the seal is broken","Back up your photos today"],guide:"screen"},
  {id:"wireless",title:"Wireless charging is slow",part:"Wireless charging · On the back",level:"Good to know",kind:"info",summary:"Charging may take longer than usual.",meaning:"The wireless charging coil may not be lining up or working as well as it should.",actions:["Take off a thick case","Try a different charging pad"],guide:null},
  {id:"frame",title:"The frame is very slightly bent",part:"The metal frame · Around the edge",level:"Good to know",kind:"info",summary:"The phone still works, but the frame is bent.",meaning:"A bent frame can put pressure on the screen and make a good seal harder to keep.",actions:["Keep the phone in a protective case","Do not try to bend it back"],guide:null},
 ],ticket:{stage:"Waiting for parts",detail:"The parts are on their way. Nothing for you to do.",current:2}},
 battery:{headline:"3 things to look at",subtitle:"None are urgent. Each one has a step-by-step guide below.",score:81,word:"Good shape",tint:"warning",issues:[
  {id:"battery",title:"Your battery is wearing out",part:"The battery · Inside the phone",level:"Fix soon",kind:"warning",summary:"Your battery does not hold as much charge as it used to.",meaning:"Your battery has less capacity than when it was new. You may need to charge more often, and the phone could slow down when power is low.",actions:["Turn on Low Power Mode","Keep a recent backup","Book a battery check if it keeps shutting down"],guide:"battery"},
  {id:"port",title:"Charging is unreliable",part:"The charging port · On the bottom edge",level:"Good to know",kind:"info",summary:"The cable may not be making a good connection.",meaning:"Pocket lint or wear can stop the cable from reaching the contacts in the port.",actions:["Try another cable","Do not put metal into the port"],guide:null},
  {id:"wireless-battery",title:"Wireless charging is slow",part:"Wireless charging · On the back",level:"Good to know",kind:"info",summary:"Charging may take longer than usual.",meaning:"The wireless charging coil may not be lining up or working as well as it should.",actions:["Take off a thick case","Try a different charging pad"],guide:null},
 ],ticket:{stage:"Being fixed",detail:"A technician is working on your phone right now.",current:3}},
 water:{headline:"1 thing needs fixing",subtitle:"Start with the red one below — it is affecting your phone now.",score:61,word:"Needs fixing",tint:"critical",issues:[
  {id:"water",title:"Liquid may have reached the main board",part:"The main board inside · Example",level:"Needs fixing now",kind:"critical",summary:"The phone needs a repair shop. Do not charge it.",meaning:"Liquid can cause a short circuit even if the phone still turns on. A technician needs to check the inside before it is powered again.",actions:["Unplug it now","Do not charge or switch it on","Take it to a repair shop as soon as you can"],guide:null},
  {id:"speaker",title:"The speaker sounds muffled",part:"The speaker · On the bottom edge",level:"Fix soon",kind:"warning",summary:"Water or debris may be blocking the speaker.",meaning:"Sound is quieter than normal. Let a repair shop check it while they inspect the phone.",actions:["Keep the phone switched off","Do not use heat to dry it"],guide:null},
  {id:"backglass",title:"The glass on the back may be damaged",part:"The glass on the back · Example",level:"Good to know",kind:"info",summary:"A crack can let moisture get inside.",meaning:"The back glass may be damaged. Keep the phone away from water until a repair shop has checked the seals.",actions:["Keep it dry","Do not press on the cracked area"],guide:null},
 ],ticket:{stage:"Being checked",detail:"A technician is checking the phone to confirm what is wrong.",current:1}},
};

const stageLabels=["Dropped off","Being checked","Waiting for parts","Being fixed","Final checks","Ready to pick up"];
let currentScenario="clear",expandedIssue=null,guideFor=null,stepIndex=0,detailed=false,showAll=false,technicalIssue=null;
const resolvedIssues=new Set();
const screen=document.querySelector("#interactive-screen"),toast=document.querySelector("#toast");
function esc(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

function render(resetPhoneScroll=false){
 const pageScroll=window.scrollY;
 const phoneScroll=screen.querySelector(".sim-scroll")?.scrollTop??0;
 const data=scenarios[currentScenario];
 const activeIssues=data.issues.filter(issue=>!resolvedIssues.has(issue.id));
 const criticalCount=activeIssues.filter(issue=>issue.kind==="critical").length;
 const penalties={critical:24,warning:11,info:4};
 const score=Math.max(4,100-activeIssues.reduce((sum,issue)=>sum+(penalties[issue.kind]||0),0));
 const tint=criticalCount?"critical":activeIssues.length?"warning":"good";
 const word=score>=85?"Good shape":score>=60?"Needs attention":"Needs fixing";
 const headline=activeIssues.length===0?"Everything looks good":criticalCount===1&&activeIssues.length===1?"One thing needs fixing":criticalCount>0?`${criticalCount} thing${criticalCount===1?"":"s"} need fixing`:activeIssues.length===1?"One thing to look at":`${activeIssues.length} things to look at`;
 const subtitle=activeIssues.length===0?(data.issues.length?"We checked your iPhone and found nothing wrong.":"Nothing on record for this iPhone."):criticalCount?"Start with the red ones below — they are affecting your phone now.":activeIssues.length===1?"It is not urgent. There is a step-by-step guide below.":"None of them are urgent. Each one has a step-by-step guide below.";
 const cards=activeIssues.length?activeIssues.map(issue=>`<button class="sim-finding" data-open="${issue.id}" type="button" aria-expanded="${expandedIssue===issue.id}"><div class="finding-top"><span class="finding-sign ${issue.kind}">${issue.kind==="critical"?"!":issue.kind==="warning"?"⌁":"i"}</span><span>${esc(issue.part)}</span><span class="origin-badge">Example</span></div><div class="finding-title">${esc(issue.title)}</div><div class="finding-desc">${esc(issue.level)}</div></button>${expandedIssue===issue.id?renderExpanded(issue):""}`).join(""):`<div class="sim-card sim-empty"><div class="sim-empty-icon">✿</div><strong>Nothing to report</strong><p>We did not find anything wrong with your iPhone.</p></div>`;
 const ticket=data.ticket?`<div class="sim-card"><div class="sim-ticket-title">Your repair <span class="sim-example">Example</span></div><div class="sim-stage-name">${esc(data.ticket.stage)}</div><div class="sim-stage-detail">${esc(data.ticket.detail)}</div><div class="sim-track ${tint}"><i style="width:${Math.min(100,data.ticket.current/5*100)}%"></i></div><div class="sim-timeline">${stageLabels.map((label,i)=>`<div class="sim-stage ${i<data.ticket.current?"done":i===data.ticket.current?"current":""}">${esc(label)}</div>`).join("")}</div></div>`:"";
 const guide=guideFor?renderGuide(activeIssues.find(issue=>issue.id===guideFor)):"";
 screen.innerHTML=`<div class="sim-scroll"><div class="sim-title">My iPhone</div><div class="sim-card"><div class="sim-hero-row"><div class="sim-status-orb ${tint}">${tint==="good"?"✓":"!"}</div><div><div class="sim-headline">${esc(headline)}</div><div class="sim-subheadline">${esc(subtitle)}</div></div></div><div class="sim-health-row"><strong>${esc(word)}</strong><span>${score}/100</span></div><div class="sim-track ${tint}"><i style="width:${score}%"></i></div></div><div class="sim-section-title">What we found</div>${cards}${guide}${ticket}<div class="sim-section-title">About your iPhone</div><div class="sim-card sim-device-card"><div class="sim-device-icon">▯</div><div><strong>iPhone 18 Pro</strong><small>Battery now · — &nbsp; Storage · 82 GB free</small></div></div></div><div class="sim-toast" id="sim-toast"></div>`;
 const scrollArea=screen.querySelector(".sim-scroll");
 scrollArea.scrollTop=resetPhoneScroll?0:phoneScroll;
 window.scrollTo(0,pageScroll);
 screen.querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>{expandedIssue=expandedIssue===b.dataset.open?null:b.dataset.open;guideFor=null;technicalIssue=null;render();}));
 screen.querySelectorAll("[data-guide]").forEach(b=>b.addEventListener("click",()=>{guideFor=b.dataset.guide;stepIndex=0;showAll=false;render();screen.querySelector(".sim-scroll").scrollTo({top:screen.querySelector(".sim-scroll").scrollHeight,behavior:"smooth"});}));
 screen.querySelectorAll("[data-step]").forEach(b=>b.addEventListener("click",()=>{const steps=guideSteps();stepIndex=Math.max(0,Math.min(steps.length,stepIndex+Number(b.dataset.step)));render();}));
 screen.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{detailed=b.dataset.mode==="detailed";render();}));
 screen.querySelectorAll("[data-all]").forEach(b=>b.addEventListener("click",()=>{showAll=!showAll;render();}));
 screen.querySelectorAll("[data-share]").forEach(b=>b.addEventListener("click",()=>showSimToast(b.dataset.share==="send"?"Native share sheet shown in the iPhone app":"Guide QR handoff is shown in the iPhone app")));
 screen.querySelectorAll("[data-shop]").forEach(b=>b.addEventListener("click",()=>showSimToast("In the app, this finding is for a repair shop")));
 screen.querySelectorAll("[data-fix]").forEach(b=>b.addEventListener("click",()=>{resolvedIssues.add(b.dataset.fix);expandedIssue=null;guideFor=null;technicalIssue=null;render();}));
 screen.querySelectorAll("[data-technical]").forEach(b=>b.addEventListener("click",()=>{technicalIssue=technicalIssue===b.dataset.technical?null:b.dataset.technical;render();}));
}
function guideSteps(){return guideFor==="battery"?batterySteps:crackedSteps;}
function renderExpanded(issue){return `<div class="sim-expanded"><div class="sim-expand-label">What this means</div><div class="sim-meaning">${esc(issue.meaning)}</div><div class="sim-expand-label">Do this now</div>${issue.actions.map((a,i)=>`<div class="sim-action-line"><b>${i+1}</b>${esc(a)}</div>`).join("")}${issue.guide?`<button class="sim-mini-button" data-guide="${issue.id}">Fix it yourself · ${issue.id==="screen"?8:6} steps <span>→</span></button>`:`<button class="sim-mini-button" data-shop="${issue.id}">Find a repair shop <span>→</span></button>`}<div class="sim-minor-actions"><button data-fix="${issue.id}">Mark as fixed</button><button data-technical="${issue.id}">Technical details</button></div>${technicalIssue===issue.id?`<div class="sim-technical"><div class="sim-expand-label">${issue.technicalName||"Technical details"}</div>${esc(issue.technicalDetail||issue.meaning)}</div>`:""}</div>`;}
function renderGuide(issue){
 if(!issue?.guide)return "";
 const steps=guideSteps(),finished=stepIndex>=steps.length,step=steps[Math.min(stepIndex,steps.length-1)];
 return `<div class="sim-card"><div class="sim-ticket-title">Repair guide <span class="sim-example">${esc(issue.title)}</span></div><div class="sim-mode"><button class="${!detailed?"active":""}" data-mode="simple">Simple</button><button class="${detailed?"active":""}" data-mode="detailed">Detailed</button></div>${finished?`<div class="sim-stepper-done"><span>✓</span><strong>That’s the whole guide</strong><small>Nice work. You made it through all ${steps.length} steps.</small></div>`:`<div class="sim-guide-head"><span>Step ${stepIndex+1} of ${steps.length}</span><span class="muted">${step.offline?"5 min":"10 min"}</span></div><div class="sim-track sim-guide-progress"><i style="width:${(stepIndex+1)/steps.length*100}%"></i></div><div class="sim-guide-box"><div class="sim-step-title"><span class="sim-step-no">${stepIndex+1}</span>${esc(step.title)}</div><div class="sim-step-copy">${esc(detailed?step.detailed:step.simple)}${detailed?`<br><br><b>You will know it worked when…</b> ${esc(step.check)}`:""}</div></div>${step.offline?`<div class="sim-offline-banner"><strong>Your phone is off for part of this</strong>Steps 2 to ${steps.length-1} of ${steps.length}. Get these steps onto another device before you switch off.</div>`:""}<div class="sim-share-row"><button data-share="send">↗ Send to another device</button><button data-share="code">▦ Show a code</button></div><div class="sim-guide-actions" style="margin-top:9px"><button data-step="-1" ${stepIndex===0?"disabled":""}>← Back</button><button class="primary" data-step="1">${stepIndex===steps.length-1?"Done — that’s all":"Done — next step →"}</button></div>${showAll?`<div class="sim-steps-list">${steps.map((s,i)=>`<div><b>${i+1}. ${esc(s.title)}</b>${s.offline?" · phone off":""}<br>${esc(detailed?s.detailed:s.simple)}</div>`).join("")}</div>`:""}<button class="sim-mini-button" data-all="true">${showAll?"Show one step at a time":`Show all ${steps.length} steps at once`}</button>`}</div>`;
}
function showSimToast(message){const node=screen.querySelector("#sim-toast");if(!node)return;node.textContent=message;node.classList.add("show");setTimeout(()=>node.classList.remove("show"),1800);}
function showToast(message){toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2200);}
document.querySelectorAll(".scenario-button").forEach(b=>b.addEventListener("click",()=>{currentScenario=b.dataset.scenario;expandedIssue=null;guideFor=null;stepIndex=0;detailed=false;showAll=false;technicalIssue=null;resolvedIssues.clear();document.querySelectorAll(".scenario-button").forEach(item=>item.classList.toggle("is-active",item===b));render(true);}));
document.querySelector("#copy-link").addEventListener("click",async()=>{const text=document.querySelector("#lan-address").dataset.url||location.origin;try{await navigator.clipboard.writeText(text);showToast("Demo link copied");}catch{showToast(text);}});
async function loadLocalConfig(){
 const address=document.querySelector("#lan-address"),qr=document.querySelector("#demo-qr");
 const demoUrl=new URL(location.href);demoUrl.hash="demo";
 try{
  const response=await fetch(new URL("api/presentation-url",location.href),{cache:"no-store"});
  if(!response.ok)throw Error();
  const config=await response.json();
  address.textContent=config.lanUrl;address.dataset.url=config.lanUrl;
  qr.src=`assets/demo-qr.png?v=${encodeURIComponent(config.lanUrl)}`;
  qr.alt=`QR code linking to ${config.lanUrl}`;
 }catch{
  address.textContent=demoUrl.href;address.dataset.url=demoUrl.href;
  qr.src="assets/demo-qr-public.png";
  qr.alt=`QR code linking to ${demoUrl.href}`;
 }
}
render();loadLocalConfig();
