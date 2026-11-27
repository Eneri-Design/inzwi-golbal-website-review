const ROOT=document.documentElement.dataset.root||"/",IDX=location.protocol=="file:"?"index.html":"";

const WA="27740101111",$=s=>document.querySelector(s);
const FAQ=[
["Can I import a vehicle into my country from South Africa?","Yes. We assist customers across Africa and beyond with sourcing, export documentation and clearance, including Zimbabwe, Zambia, Botswana, Mozambique, Namibia, Malawi, the DRC and many others."],
["Do you sell both new and pre-owned vehicles?","Yes. We source brand-new and quality pre-owned vehicles from reputable dealerships, manufacturers, fleet operators and trusted suppliers across South Africa."],
["Can you source a specific vehicle model for me?","Absolutely. Give us the make, model, year, specification or budget and our sourcing team will search our network for the best options."],
["How do I purchase a vehicle through Inzwi Global?","Contact us with your requirements. We source options, send quotations and vehicle details, assist with export documentation and guide you from start to finish."],
["What documents are required to export a vehicle?","Requirements vary by destination country. Our team will guide you through the specific requirements for yours."],
["How long does export documentation take?","Export documentation typically takes 2–5 working days."],
["What is a Vehicle Export Clearance Certificate?","An official document required to legally export a vehicle from South Africa. It confirms the vehicle is approved for export and complies with the regulations."],
["Do you assist with ITAC export permits?","Yes. We assist with applications and documentation for vehicle export permits and compliance requirements where applicable."],
["Can you arrange delivery to the border?","Yes. We can assist with transport and delivery to designated border posts or export points within South Africa."],
["Can I buy a vehicle without visiting South Africa?","Yes. Many clients buy remotely. We provide details, photographs, specifications and quotations so you can decide with confidence."],
["Do you inspect vehicles before export?","Yes. We strive to source quality vehicles and can provide additional vehicle information and inspection details where available."],
["What vehicle brands do you supply?","A wide range of leading brands including Toyota, Volkswagen, BMW, Nissan, Honda, Isuzu, Lexus, Haval, Hino and many more."],
["Can businesses purchase multiple vehicles or fleets?","Yes. We work with businesses, NGOs, government departments, transport operators and fleet owners who need multiple vehicles."],
["Do you supply trucks and commercial vehicles?","Yes. Besides passenger vehicles we source trucks, bakkies and pickups, SUVs, commercial vans, fleet vehicles and heavy-duty vehicles."],
["Do you supply automotive spare parts?","Yes. We source quality parts and accessories for a wide range of makes and models."],
["What payment methods do you accept?","Payment options are discussed during the quotation. We give secure payment instructions once a vehicle has been selected and approved."],
["Can you help me choose the right vehicle?","Certainly. We recommend vehicles based on your budget, intended use, fuel economy needs, passenger capacity and destination country."],
["Why choose Inzwi Global?","We are a registered South African vehicle exporter with professional sourcing, export documentation help, reliable support, competitive pricing, access to leading brands, parts supply and extensive industry experience."],
["What does it mean when Inzwi Global facilitates a vehicle purchase?","If you have found a vehicle at a dealership, auction or private seller, we help negotiate the price, verify its history, inspect its condition and make sure it meets your expectations before you buy."],
["How long from payment to the vehicle being ready for delivery?","Once payment is confirmed, vehicle preparation and documentation typically take 7–10 working days. This can vary with the vehicle, documentation and destination regulations."],
["Can you source a vehicle on my behalf?","Yes. We find vehicles to your make, model, year, budget and specification. If you have already found one, we can inspect it and assist with purchase, export documentation and delivery."]];
const INFO=[
["contact phone whatsapp email call address where located office reach","You can reach us on +27 74 010 1111 (call or WhatsApp) or info@inzwi.co.za. We are at 992 Clifton Ave, Die Hoewes, Gauteng 0157."],
["who founder owner director managing lisah","Inzwi Global was founded by Lisah Tais Mwenda, Founder & Managing Director. Reach her on +27 74 010 1111 or lisahtais@inzwi.co.za."],
["services offer do what provide","We offer vehicle sourcing and sales, export documentation and clearance support, automotive parts supply and cross-border logistics. We also run a concierge service from OR Tambo airport to your driveway."],
["registered registration vat customs company number legit legal","Inzwi Global (Pty) Ltd. Registration 2024/167754/07, VAT 4360323523, Customs code CU25760256."],
["airport pickup concierge accommodation hotel fly","Fly into OR Tambo and we arrange your airport pickup, help with sourcing and buying, process the export documents, book accommodation and arrange delivery to your door."],
["parts engine suspension brake filter electrical body panel accessories truck","We supply engine components, suspension parts, brake systems, filters, electrical components, body panels, accessories and truck parts, genuine or aftermarket."],
["countries country export exports ship destination zimbabwe zambia botswana mozambique namibia malawi drc congo africa deliver","We help export to Zimbabwe, Zambia, Botswana, Mozambique, Namibia, Malawi, the DRC and many other countries."],
["price cost quote quotation how much cheap budget free","Quotes are free. Tell us the vehicle and destination and the team will send a quotation. Use the contact page or WhatsApp +27 74 010 1111."]];
const KB=[...FAQ.map(x=>({k:x[0],x:x[1],a:x[1]})),...INFO.map(x=>({k:x[0],x:"",a:x[1]}))];
const stop=new Set("the a an and or to of for in on is are do you your can i me my we it with from how what does this that be at by".split(" "));
const tok=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter(w=>w.length>2&&!stop.has(w)).map(w=>w.replace(/ies$/,"y").replace(/(ing|es|s)$/,""));
const DF={};KB.forEach(e=>new Set(tok(e.k+" "+e.x)).forEach(w=>DF[w]=(DF[w]||0)+1));
const wt=w=>Math.log(KB.length/(DF[w]||1))+.3;
function answer(q){const t=[...new Set(tok(q))];if(!t.length)return null;let best=0,hit=null;
KB.forEach(e=>{const k=new Set(tok(e.k)),x=new Set(tok(e.x));let sc=0;t.forEach(w=>{if(k.has(w))sc+=2*wt(w);if(x.has(w))sc+=wt(w)});if(e.x==="")sc*=1.25;if(sc>best){best=sc;hit=e}});
return best>=2.6?hit.a:null}
// FAQ list
// planner
if($("#plan")){
const D=["Zimbabwe","Zambia","Botswana","Mozambique","Namibia","Malawi","DRC","Other"],V=["Passenger car","SUV or 4x4","Double cab pickup","Truck or commercial","Fleet","Parts"];
const vl=()=>st.veh.toLowerCase().replace('suv','SUV');const st={dest:"Zimbabwe",veh:"SUV or 4x4"};
function chips(k,a){const el=$(`[data-k=${k}]`);el.innerHTML=a.map(x=>`<button type=button aria-pressed="${x==st[k]}">${x}</button>`).join("");
el.onclick=e=>{if(e.target.tagName!="BUTTON")return;st[k]=e.target.textContent;chips(k,a);route()}}
function route(){const p=st.veh=="Parts";
$("#route").innerHTML=p?`<li><b>You send the part details</b><span>Make, model, year and part needed.</span></li><li><b>We source it</b><span>Genuine or aftermarket from trusted suppliers.</span></li><li><b>Cross-border supply to ${st.dest}</b><span>We support delivery to your destination.</span></li>`
:`<li><b>We source your ${vl()}</b><span>Options, photos and quotations. You can buy remotely.</span></li><li><b>Export paperwork: 2–5 working days</b><span>Permits, clearance certificate and customs documents for ${st.dest}.</span></li><li><b>Ready for delivery: 7–10 working days after payment</b><span>Timing varies with the vehicle and destination rules.</span></li><li><b>Delivery to the border or your door</b><span>We help move it to ${st.dest}.</span></li>`;
$("#planGo").href=`https://wa.me/${WA}?text=`+encodeURIComponent(`Hello Inzwi Global, I need ${p?"parts":"a "+vl()} exported to ${st.dest}. Please send me a quotation.`)}
chips("dest",D);chips("veh",V);route();}
// gallery
if($("#gal")){
document.querySelector(".filters").onclick=e=>{const b=e.target.closest("button");if(!b)return;
document.querySelectorAll(".filters button").forEach(x=>x.setAttribute("aria-pressed",x==b));
document.querySelectorAll("#gal figure").forEach(f=>f.hidden=b.dataset.f!="all"&&f.dataset.c!=b.dataset.f)};
$("#gal").onclick=e=>{const i=e.target.closest("figure img");if(i){$("#lb img").src=i.src;$("#lb img").alt=i.alt;$("#lb").classList.add("on")}};
$("#lb").onclick=()=>$("#lb").classList.remove("on");}
document.onkeydown=e=>{if(e.key=="Escape"){$("#lb")&&$("#lb").classList.remove("on");$("#cbp").classList.remove("on")}};
// contact form
if($("#cf")){
function msg(){return `Hello Inzwi Global, I'm ${$("#n").value} ${$("#s").value}.\nSubject: ${$("#sb").value}\n${$("#m").value}\nEmail: ${$("#e").value}\nPhone: ${$("#p").value}`}
const TO="lisahtais@inzwi.co.za",CC="raisheinzwi@gmail.com,info@inzwi.co.za",st=$("#st");
$("#cf").onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;st.textContent="Sending…";
try{const r=await fetch("https://formsubmit.co/ajax/"+TO,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_cc:CC,_subject:"Website enquiry: "+$("#sb").value,_template:"table",_captcha:"false",Name:$("#n").value+" "+$("#s").value,Email:$("#e").value,Phone:$("#p").value,Subject:$("#sb").value,Message:$("#m").value,_honey:$("#hp").value})});
const d=await r.json();if(!r.ok||d.success==="false")throw 0;st.textContent="Thank you. Your message has been sent and the team will be in touch.";$("#cf").reset()}
catch(_){st.innerHTML='We couldn’t send that just now. Please use WhatsApp or <a href="mailto:'+TO+'?cc='+CC+'">email us directly</a>.'}b.disabled=false};
}
// chatbot
const M=$("#cbm");let started=0;
function say(h,u){const d=document.createElement("div");d.className="m"+(u?" u":"");d[u?"textContent":"innerHTML"]=h;M.appendChild(d);M.scrollTop=M.scrollHeight}
const QUICK=["Which countries do you export to?","How long does it take?","Can I buy remotely?","Do you sell parts?","Contact details"];
$("#cbq").innerHTML=QUICK.map(q=>`<button type=button>${q}</button>`).join("");
function ask(q){say(q,1);const a=answer(q);setTimeout(()=>say(a?a+`<br><br><a href="${ROOT}contact-us/${IDX}">Get a free quote</a>`:`I couldn’t find that in our FAQ. The team can answer directly on <a target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent(q)}">WhatsApp</a> or at info@inzwi.co.za.`),350)}
$("#cbq").onclick=e=>{if(e.target.tagName=="BUTTON")ask(e.target.textContent)};
$("#cbf").onsubmit=e=>{e.preventDefault();const v=$("#cbi").value.trim();if(v){$("#cbi").value="";ask(v)}};
$("#cbt").onclick=()=>{const o=$("#cbp").classList.toggle("on");$("#cbt").setAttribute("aria-expanded",o);if(o&&!started){started=1;say("Hello 👋 I’m the Inzwi Global assistant. Ask me about vehicle sourcing, export documents, parts or delivery.")}};

const mt=$("#mt");if(mt)mt.onclick=()=>{const o=$("#nav").classList.toggle("open");mt.setAttribute("aria-expanded",o)};
if(location.protocol=="file:")document.querySelectorAll("a[href]").forEach(a=>{const h=a.getAttribute("href");if(h&&!/^(https?:|mailto:|tel:|#)/.test(h)){const[p,x]=h.split("#");if(p===""||p.endsWith("/"))a.setAttribute("href",(p||"./")+IDX+(x?"#"+x:""))}});
