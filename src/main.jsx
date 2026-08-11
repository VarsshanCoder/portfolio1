import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import gsap from 'gsap';
import Lenis from 'lenis';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Menu, X, Sparkles, Cpu, Code2, Layers3, BrainCircuit } from 'lucide-react';
import './styles.css';

const LINKS = {
  github: 'https://github.com/AMIRTHAVARSSHAN',
  instagram: 'https://www.instagram.com/build.with_varsshan/',
  linkedin: 'https://www.linkedin.com/in/amirthavarsshan-k-90860341/',
};

const projects = [
  { n:'01', title:'JARVIS OS', kicker:'AGENTIC DESKTOP', desc:'A personal AI operating layer concept for turning natural-language intent into actions, tools and workflows.', tags:['AI Agents','Automation','Python'], repo:'https://github.com/AMIRTHAVARSSHAN' },
  { n:'02', title:'VarshGPT', kicker:'GENAI SYSTEM', desc:'A conversational AI direction focused on model orchestration, interface design and practical productivity workflows.', tags:['LLM','GenAI','Web'], repo:'https://github.com/AMIRTHAVARSSHAN' },
  { n:'03', title:'Disease Prediction AI', kicker:'ML / HEALTHCARE', desc:'Machine-learning experimentation around symptom-driven prediction and intelligent healthcare assistance.', tags:['ML','NLP','Healthcare'], repo:'https://github.com/AMIRTHAVARSSHAN' },
  { n:'04', title:'Zoho Finance Lite', kicker:'FULL-STACK PRODUCT', desc:'A finance-management product concept combining application UX, data flows and a practical dashboard.', tags:['React','Node.js','Product'], repo:'https://github.com/AMIRTHAVARSSHAN' },
  { n:'05', title:'VarshGPT 2.0', kicker:'MULTIMODAL / AGENTS', desc:'The next iteration of the AI workspace idea: multimodal interaction, tools, memory and an agentic architecture.', tags:['Agents','Memory','Multimodal'], repo:'https://github.com/AMIRTHAVARSSHAN' },
];

const stack = ['Python','PyTorch','TensorFlow','React','Next.js','Node.js','FastAPI','Docker','Hugging Face','LLMs','RAG','AI Agents','Three.js','Git'];
const posts = [
  { type:'BUILD', title:'From idea to interface', text:'Sharing the process behind building and debugging AI products.', href:LINKS.instagram },
  { type:'DEBUG', title:'Shipping through the bugs', text:'Real build logs, experiments and lessons from the engineering loop.', href:LINKS.instagram },
  { type:'LEARN', title:'Learning in public', text:'AI/ML concepts, tools and experiments turned into practical builds.', href:LINKS.linkedin },
];

function Scene(){
  const mount = useRef(null);
  useEffect(()=>{
    const el=mount.current; if(!el) return;
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(48, innerWidth/innerHeight,.1,100); camera.position.z=8;
    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.6)); renderer.setSize(innerWidth,innerHeight); renderer.outputColorSpace=THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);
    const group=new THREE.Group(); scene.add(group);
    const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.42,5),new THREE.MeshPhysicalMaterial({color:0x11131a,roughness:.18,metalness:.85,transmission:.22,transparent:true,opacity:.95})); group.add(core);
    const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.56,2),new THREE.MeshBasicMaterial({color:0x8f7cff,wireframe:true,transparent:true,opacity:.32})); group.add(wire);
    const ringMat=new THREE.MeshBasicMaterial({color:0xb9adff,transparent:true,opacity:.38});
    [2.1,2.55,3].forEach((r,i)=>{const ring=new THREE.Mesh(new THREE.TorusGeometry(r,.012,8,160),ringMat); ring.rotation.x=i*.72; ring.rotation.y=i*.48; group.add(ring);});
    const count=1300; const positions=new Float32Array(count*3); const colors=new Float32Array(count*3);
    for(let i=0;i<count;i++){const r=3+Math.random()*5, a=Math.random()*Math.PI*2, z=(Math.random()-.5)*6; positions[i*3]=Math.cos(a)*r; positions[i*3+1]=Math.sin(a)*r*.55; positions[i*3+2]=z; const c=new THREE.Color().setHSL(.68+Math.random()*.08,.65,.55+Math.random()*.3); colors.set([c.r,c.g,c.b],i*3);}
    const geo=new THREE.BufferGeometry(); geo.setAttribute('position',new THREE.BufferAttribute(positions,3)); geo.setAttribute('color',new THREE.BufferAttribute(colors,3));
    const pts=new THREE.Points(geo,new THREE.PointsMaterial({size:.018,vertexColors:true,transparent:true,opacity:.75})); scene.add(pts);
    const clock=new THREE.Clock(); let raf;
    const onResize=()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);};
    addEventListener('resize',onResize);
    const animate=()=>{const t=clock.getElapsedTime(); group.rotation.y=t*.085; group.rotation.x=Math.sin(t*.22)*.08; core.rotation.x=t*.12; wire.rotation.y=-t*.18; pts.rotation.y=t*.012; pts.rotation.x=Math.sin(t*.08)*.03; renderer.render(scene,camera); raf=requestAnimationFrame(animate);}; animate();
    return()=>{cancelAnimationFrame(raf);removeEventListener('resize',onResize);renderer.dispose();geo.dispose();el.removeChild(renderer.domElement);};
  },[]);
  return <div className="scene" ref={mount}/>;
}

function App(){
  const [menu,setMenu]=useState(false); const [repos,setRepos]=useState([]); const cursor=useRef(null); const progress=useRef(null);
  useEffect(()=>{
    const lenis=new Lenis({duration:1.15,smoothWheel:true});
    const raf=(t)=>{lenis.raf(t);requestAnimationFrame(raf)}; requestAnimationFrame(raf);
    const onMove=e=>{if(cursor.current){cursor.current.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`}};
    addEventListener('mousemove',onMove);
    const bars=document.querySelectorAll('[data-reveal]'); const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in')}}),{threshold:.12}); bars.forEach(x=>io.observe(x));
    const onScroll=()=>{const p=scrollY/(document.body.scrollHeight-innerHeight); if(progress.current)progress.current.style.transform=`scaleX(${Math.max(0,Math.min(1,p))})`}; addEventListener('scroll',onScroll,{passive:true}); onScroll();
    fetch('https://api.github.com/users/AMIRTHAVARSSHAN/repos?per_page=8&sort=updated').then(r=>r.ok?r.json():[]).then(d=>setRepos(Array.isArray(d)?d:[])).catch(()=>{});
    return()=>{removeEventListener('mousemove',onMove);removeEventListener('scroll',onScroll);io.disconnect();lenis.destroy()};
  },[]);
  const scrollTo=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
  return <>
    <div className="cursor" ref={cursor}/><div className="progress" ref={progress}/><Scene/>
    <header className="nav"><button className="brand" onClick={()=>scrollTo('top')}><span>AV</span><small>AMIRTHA VARSSHAN</small></button><nav className={menu?'open':''}>{[['work','WORK'],['about','ABOUT'],['build','BUILD LOG'],['contact','CONTACT']].map(([id,label])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}</nav><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>

    <main id="top">
      <section className="hero section"><div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> AVAILABLE TO BUILD</p><h1>BUILDING<br/><em>INTELLIGENT</em><br/>SYSTEMS.</h1><p className="lede">AI engineer & product builder exploring GenAI, agents, machine learning, automation and immersive interfaces.</p><div className="hero-actions"><button className="primary" onClick={()=>scrollTo('work')}>EXPLORE WORK <ArrowUpRight size={17}/></button><a className="ghost" href={LINKS.github} target="_blank" rel="noreferrer"><Github size={17}/> GITHUB</a></div></div><div className="hero-meta"><span>SCROLL TO ENTER</span><span className="line"/><span>01 — 08</span></div></section>

      <section id="about" className="section about"><div className="section-head" data-reveal><span>01 / IDENTITY</span><span>WHO I AM</span></div><div className="about-grid"><h2 data-reveal>FROM<br/><em>IDEA</em><br/>TO SYSTEM.</h2><div data-reveal><p className="big-copy">I like turning ambitious ideas into working software — from the model layer and agent logic to the interface people actually use.</p><p className="muted">My work sits at the intersection of artificial intelligence, full-stack engineering and product thinking. The portfolio is a living build log, not a static résumé.</p></div></div></section>

      <section className="section stack-section"><div className="section-head" data-reveal><span>02 / STACK</span><span>THE TOOLBOX</span></div><div className="stack-orbit" data-reveal><div className="orbit-core"><Cpu/><span>AI<br/>STACK</span></div>{stack.map((x,i)=><span key={x} className="stack-pill" style={{'--i':i}}>{x}</span>)}</div></section>

      <section id="work" className="section projects"><div className="section-head" data-reveal><span>03 / SELECTED WORK</span><span>PROJECT UNIVERSE</span></div><div className="project-list">{projects.map((p,i)=><article className="project" data-reveal key={p.title}><div className="project-index">{p.n}</div><div className="project-main"><p className="eyebrow">{p.kicker}</p><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><a href={p.repo} target="_blank" rel="noreferrer" className="project-link">VIEW REPO <ArrowUpRight size={19}/></a><div className="project-glow"/></article>)}</div><a className="all-link" href={LINKS.github} target="_blank" rel="noreferrer">EXPLORE FULL CODEBASE <ArrowUpRight size={18}/></a></section>

      <section id="build" className="section process"><div className="section-head" data-reveal><span>04 / METHOD</span><span>HOW I BUILD</span></div><div className="process-title" data-reveal><span>IDEA</span><b>→</b><span>RESEARCH</span><b>→</b><span>ARCHITECT</span><b>→</b><span>BUILD</span><b>→</b><span>SHIP</span></div><div className="process-cards">{[['01','IDEATE','Start with the problem, not the framework.'],['02','ARCHITECT','Break the product into models, APIs, data and interfaces.'],['03','BUILD','Prototype fast, test the edges and keep the feedback loop short.'],['04','SHIP','Turn experiments into reliable, usable systems.']].map(x=><div className="process-card" data-reveal key={x[0]}><span>{x[0]}</span><h4>{x[1]}</h4><p>{x[2]}</p></div>)}</div></section>

      <section className="section social"><div className="section-head" data-reveal><span>05 / BUILDING IN PUBLIC</span><span>SOCIAL SIGNAL</span></div><div className="social-grid">{posts.map((p,i)=><a href={p.href} target="_blank" rel="noreferrer" className="post" data-reveal key={p.title}><div className="post-top"><span>{p.type}</span><ArrowUpRight size={18}/></div><div><h3>{p.title}</h3><p>{p.text}</p></div><div className="post-number">0{i+1}</div></a>)}</div><div className="social-links" data-reveal><a href={LINKS.instagram} target="_blank" rel="noreferrer"><Instagram/> @build.with_varsshan</a><a href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn / Amirtha Varsshann</a></div></section>

      <section className="section github-section"><div className="section-head" data-reveal><span>06 / CODEBASE</span><span>GITHUB LIVE</span></div><div className="github-intro" data-reveal><div><p className="eyebrow">OPEN SOURCE / EXPERIMENTS</p><h2>THE CODE<br/><em>BEHIND</em> THE BUILDS.</h2></div><a className="primary" href={LINKS.github} target="_blank" rel="noreferrer"><Github size={17}/> OPEN GITHUB <ArrowUpRight size={17}/></a></div><div className="repo-grid">{(repos.length?repos:projects.slice(0,4).map(p=>({name:p.title,description:p.desc,html_url:p.repo,language:p.tags[0],stargazers_count:0}))).map((r,i)=><a href={r.html_url} target="_blank" rel="noreferrer" className="repo" data-reveal key={r.name+i}><span>0{i+1}</span><div><h4>{r.name}</h4><p>{r.description||'Experimental engineering project.'}</p></div><small>{r.language||'BUILD'}</small><ArrowUpRight size={18}/></a>)}</div></section>

      <section id="contact" className="section contact"><div className="contact-orb"><div className="orb-ring r1"/><div className="orb-ring r2"/><div className="orb-ring r3"/><span>AV</span></div><div className="contact-copy" data-reveal><p className="eyebrow">07 / NEXT BUILD</p><h2>LET'S BUILD<br/><em>SOMETHING</em><br/>USEFUL.</h2><p>Have an idea, a product problem or an AI system worth exploring?</p><a className="primary" href="mailto:hello@amirthavarsshann.dev"><Mail size={17}/> START A CONVERSATION <ArrowUpRight size={17}/></a></div></section>
    </main>
    <footer><span>© 2026 AMIRTHA VARSSHAN</span><span>AI · ENGINEERING · SYSTEMS</span><div><a href={LINKS.github} target="_blank" rel="noreferrer"><Github/></a><a href={LINKS.instagram} target="_blank" rel="noreferrer"><Instagram/></a><a href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
