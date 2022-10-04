import{c as p,a as g,r as f,j as i,b as u,T as b,B as c,R as F,d as E}from"./vendor.bb6c66a9.js";const h=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}};h();const m=["A/C","condenser","acoustics","activity","ADA","addendum","agent","aggregate","agreement","allowance","alterations","alternate bid","application for payment","arcade","arch","architect","architects basic services","architect-engineer","architectural drawing","area wells","record drawings","astragal","atrium","back charge","backfill","backing","baffle","ballast","balloon framed wall","balustrade","barge","barge board","baseboard","bat","beam","bearing partition","bearing point","bearing wall","bearing header","bedrock","bid","bid bond","bid date","bid form","bid opening","bid price","bid tabulation","bid shopper","bidding documents","bidding period","bidding requirements","blue prints","blue stake","bonding company","breaker panel","breezeway","bridging","budget","building","building code","building envelope","building inspector","building permit","building process","built-up roof","butterfly roof","buttress","BTU","caisson","cantilever","cantilevered void","cavity wall","ceiling joist","CFM","change order","change order request","change order proposal","check valve","circuit","circuit breaker","Class A","Class C","closed bid","CO","codes","cold air return","collar beam","column","combustion air","compressor","concrete","condensate line","condensing unit","electrical conduit","construction documents","construct","construction","construction cost","construction documents","construction documents phase","construction document review","construction document review","construction management","construction management contract","construction phase","consultant","contract","contract administration","contract bond","contract documents","contract over-run","contract under-run","contract payment bond","contract performance bond","contract period","contract sum","contract time","contractual liability","contractor","contractor's option","contractor's qualification statement","contracting officer","control joint","cooling load","corbel","corner braces","cornice","cost codes","cost of work","cost plus fee agreement","cost-plus agreement","counter flashing","counterfort","crawl space","cricket","critical path","C.P.M.","cross bracing","cross bridging","cross tee","CSI","CSI master format","cull","cupola","cure","current date line","curtain wall","daily construction report","date of agreement","date of commencement of the work","date of substantial completion","dead load","demising walls","design","design-build","design-construct contract","design-development phase","detail","direct cost","direct expense","dormer","downspout","draw","drawings","drywall","duration","easement","eaves","egress","electrical rough","electrical trim","elevation","engineer","estimate","estimate of construction cost","estimating","excavation","expansion joint","fabrication","facade","facility","facility site analysis","fast track","FF&E","field order","field report","field work order","final acceptance","final inspection","final payment","finish date","fire resistive","fire rated","fire retardant","fire-stop","fixed fee","fixed limit","flashing","floating","floating-wall","form","footprint","foundation","foundation ties","gable","gambrel roof","gantt chart","general conditions","general contractor","girder","grade","grid","hard costs","heating load","heat rough","heat trim","hip","I-beram","independent contractor","improvements","indemnification","indirect cost","indirect expense","inspection","inspection for disbursement of funds","inspection list","punch list","inspection report ","inspector","interior finish","invoice","joist","labor and material","payment bond","leasehold improvements","mechanic's lien","material lien","lien release","lien waiver","lintel","live load","load bearing wall","loggia","lumens","lump sum bid","lump sum contract","mansard roof","masonry","meeting attendance form","meeting notes","milestone","millwork","monolithic","monopost","mylar","NEC","national electrical code","nonbearing wall","OC","on center","open bid","open estimate","orientation","outrigger","owner","onwner-architect agreement","owner-builder","owner-construction agreement","owner-construction management agreement","parapet","partition","performance bond","performance specifications","pergola","PERT","PERT Schedule","pier","pitch","plan view","planner","plans","plumbing trim","plumibing rough","post-and-beram","precast","pre-construction","predecessor","preliminary drawings","preliminary lien notice","pre-qualification of prospective bidders"];function C(r){return fetch(r).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>t.data)}function B(r){return r==="term"?m[Math.floor(Math.random()*m.length)]:C(`http://127.0.0.1:5000/${r}`)}async function s(r){return await B(r)}const o={blue:{100:"#F1F5FB",200:"#E8EFFB",300:"#E8EFFB",400:"#BED1F4",500:"#5585E2",600:"#2B67DB",700:"#1E4DA8",800:"#163B83",900:"#0C224B"},yellow:{100:"#FEFCEC",200:"#FFF8D8",300:"#FEF5C4",400:"#FEEF9D",500:"#FCE763",600:"#FDE13C",700:"#CEB104",800:"#B59B01",900:"#675802"},red:{100:"#FCEAE7",200:"#F8CDC7",300:"#F5B8B0",400:"#F2A39A",500:"#FF7676",600:"#EA5342",700:"#A11606",800:"#6E170D",900:"#4C1009"},orange:{100:"#FBF4E7",200:"#F8E8CF",300:"#F2D09F",400:"#FDCB7E",500:"#FFAC2F",600:"#E58A01",700:"#965A00",800:"#6E4202",900:"#462A02"},green:{100:"#EAFBE9",200:"#D6F7D2",300:"#C0F3BC",400:"#97EB90",500:"#7BF071",600:"#1FB312",700:"#167D0D",800:"#0D5008",900:"#083307"},dorado:{100:"#F3EDE7",200:"#E7DACF",300:"#BC997A",400:"#AE855F",500:"#816040",600:"#715439",700:"#604831"},sun:{100:"#FFF6DC",200:"#FFECA8",300:"#FFE074",400:"#FFD12F",500:"#E3B002",600:"#977601",700:"#644E00"},topaz:{100:"#FBEDD4",200:"#F5D492",300:"#F0BA51",400:"#EBA927",500:"#D19012",600:"#9D6C0D",700:"#573C08"},peridot:{100:"#E9FAE9",200:"#C8F2C8",300:"#A8EAA6",400:"#7CE07A",500:"#66DB63",600:"#2FBB2C",700:"#185E15"},olivine:{100:"#F7FAE2",200:"#EEF6C5",300:"#DCEB7D",400:"#D0E452",500:"#B1C821",600:"#899C19",700:"#4F590D"},turquoise:{100:"#E3F5F2",200:"#B7E6DE",300:"#7ED2C4",400:"#51C3B0",500:"#3AAC97",600:"#2A786B",700:"#18443D"},rose:{100:"#F7DFDE",200:"#ECAFAD",300:"#D85E5C",400:"#D13C3B",500:"#B52B2A",600:"#7F1E1E",700:"#5A1615"},amethyst:{100:"#F8EBF9",200:"#F0D9F2",300:"#E9C5EC",400:"#D38DD9",500:"#AA3CB4",600:"#94349D",700:"#551E5A"},tanzanite:{100:"#ECE9FA",200:"#D0C8F2",300:"#B3A5EA",400:"#7863DB",500:"#644AD5",600:"#4F34D0",700:"#442CBB"},opal:{100:"#C8EEFF",200:"#8FDFFF",300:"#22BCFF",400:"#00A2E7",500:"#007BAF",600:"#006692",700:"#004966"},sapphire:{100:"#D3E8FB",200:"#88C5F4",300:"#6BB7F2",400:"#4DA8EF",500:"#1C90EB",600:"#0F74C1",700:"#093A61"}};o.primary={main:o.blue[600]};o.success={main:o.green[700]};const D=p({palette:o}),w=g({"@global":{body:{margin:0,padding:0}},row:{display:"grid",gridAutoFlow:"column",justifyContent:"space-between"},app:{margin:0,padding:0,backgroundColor:"white",height:"100%",maxWidth:512}});function A(){const[r,t]=f.exports.useState(""),a=w();return i("div",{className:a.app,children:u(b,{theme:D,children:[i("h1",{children:"Click a button below to generate some BIM text!"}),i("textarea",{readOnly:!0,value:r,rows:20,cols:72}),u("div",{className:a.row,children:[i(c,{variant:"outlined",onClick:async()=>t(await s("term")),children:"construction term"}),i(c,{variant:"outlined",onClick:async()=>t(await s("sentence")),children:"sentence"}),i(c,{variant:"outlined",onClick:async()=>t(await s("paragraph")),children:"paragraph"}),i(c,{variant:"outlined",onClick:async()=>t(await s("story")),children:"story"})]})]})})}F.render(i(E.StrictMode,{children:i(A,{})}),document.getElementById("root"));
