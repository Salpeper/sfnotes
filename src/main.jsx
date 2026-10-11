import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Pin, PinOff, Plus, Search, X, Link as LinkIcon, Image as ImageIcon, FileText, Clipboard, Copy, Trash2, Scissors, Sparkles } from 'lucide-react';
import './style.css';

const starter = [
  {id:'a1',type:'url',value:'https://www.are.na/',title:'Are.na — collect and connect ideas'},
  {id:'a2',type:'text',value:'Las buenas ideas no siempre llegan cuando estás sentado frente al escritorio. Captúralas aquí y vuelve a ellas cuando las necesites.'},
  {id:'a3',type:'text',value:'SFNotes: un pequeño espacio para guardar lo que importa.'}
];
const identify = (value) => /^https?:\/\//i.test(value.trim()) ? 'url' : 'text';
function App(){
  const [items,setItems]=useState(()=>{try{return JSON.parse(localStorage.getItem('sfnotes-items'))||starter}catch{return starter}});
  const [loaded,setLoaded]=useState(!window.sfnotes);
  const [pinned,setPinned]=useState(true), [query,setQuery]=useState(''), [edit,setEdit]=useState(null), [menu,setMenu]=useState(null), [toast,setToast]=useState('');
  const inputRef=useRef(null);
  useEffect(()=>{if(!window.sfnotes)return;let alive=true;(async()=>{try{const saved=await window.sfnotes.readItems();if(alive&&saved)setItems(saved)}catch(error){console.error('No se pudieron cargar los fragmentos',error)}finally{if(alive)setLoaded(true)}})();return()=>{alive=false}},[]);
  useEffect(()=>{if(!loaded)return;localStorage.setItem('sfnotes-items',JSON.stringify(items));window.sfnotes?.saveItems(items)},[items,loaded]);
  useEffect(()=>{if(menu){const close=()=>setMenu(null);window.addEventListener('click',close);return()=>window.removeEventListener('click',close)}},[menu]);
  const notify=(s)=>{setToast(s);setTimeout(()=>setToast(''),1600)};
  const add=(kind,value)=>{if(!value)return;setItems(old=>[{id:crypto.randomUUID(),type:kind,value},...old]);notify('Añadido a la nota')};
  const paste=async()=>{try{let clip=window.sfnotes?await window.sfnotes.readClipboard():null;if(clip?.kind==='image'){add('image',clip.value);return}if(clip?.value){add(identify(clip.value),clip.value);return}const text=await navigator.clipboard.readText();if(text)add(identify(text),text)}catch{try{const text=await navigator.clipboard.readText();if(text)add(identify(text),text);else notify('No hay contenido para pegar')}catch{notify('No se pudo leer el portapapeles')}}};
  useEffect(()=>{const key=(e)=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='v'&&!edit){e.preventDefault();paste()}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)});
  const copy=async(item,cut=false)=>{try{if(window.sfnotes)await window.sfnotes.writeClipboard({kind:item.type==='image'?'image':'text',value:item.value});else await navigator.clipboard.writeText(item.value);if(cut)setItems(old=>old.filter(x=>x.id!==item.id));notify(cut?'Cortado y copiado':'Copiado')}catch{notify('No se pudo copiar')}};
  const remove=(id)=>setItems(old=>old.filter(x=>x.id!==id));
  const togglePin=()=>{let v=!pinned;setPinned(v);window.sfnotes?.setPinned(v)};
  const filtered=items.filter(x=>x.value.toLowerCase().includes(query.toLowerCase()));
  return <main className="window"><header className="top"><div className="brand"><div className="brandmark"><Sparkles size={17}/></div><div><b>SFNotes</b><span>tu rincón de ideas</span></div></div><div className="head-actions"><button className={`iconbtn ${pinned?'active':''}`} title={pinned?'Desfijar':'Fijar en el escritorio'} onClick={togglePin}>{pinned?<Pin size={17}/>:<PinOff size={17}/>}</button><button className="iconbtn close" title="Cerrar" onClick={()=>window.sfnotes?.close()}><X size={17}/></button></div></header>
   <section className="intro"><div><div className="eyebrow">TU PIZARRA PERSONAL <span>✳</span></div><h1>Un lugar para<br/><em>no olvidar.</em></h1></div><div className="counter"><strong>{String(items.length).padStart(2,'0')}</strong><span>fragmentos<br/>guardados</span></div></section>
   <div className="toolbar"><label className="search"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar en tus notas"/><kbd>⌘ F</kbd></label><button className="addbtn" onClick={paste}><Plus size={16}/><span>Pegar</span></button></div>
   <div className="hint"><span className="hintdot"/> Pega algo con <b>⌘ V</b> o usa el botón <Clipboard size={12}/></div>
   <section className="board">{filtered.map((item,i)=><article className={`card ${item.type==='image'?'imagecard':''}`} key={item.id} onClick={()=>copy(item)} onContextMenu={e=>{e.preventDefault();setMenu({id:item.id,x:e.clientX,y:e.clientY})}} onMouseDown={e=>{if(e.button===1){e.preventDefault();setEdit(item)}}} onClickCapture={e=>{if(e.shiftKey){e.stopPropagation();copy(item,true)}}}>
    <div className="cardtop"><span className="number">{String(items.indexOf(item)+1).padStart(2,'0')}</span><div className="typeicon">{item.type==='url'?<LinkIcon size={14}/>:item.type==='image'?<ImageIcon size={14}/>:<FileText size={14}/>}</div><span className="type-label">{item.type==='url'?'ENLACE':item.type==='image'?'IMAGEN':'TEXTO'}</span><button className="cardmore" title="Opciones" onClick={e=>{e.stopPropagation();setMenu({id:item.id,x:e.clientX,y:e.clientY})}}>···</button></div>
    {item.type==='image'?<img className="thumb" src={item.value} alt="Imagen guardada"/>:item.type==='url'?<div className="urlrow"><img className="favicon" src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(new URL(item.value).hostname)}&sz=64`} onError={e=>e.currentTarget.style.display='none'}/><div className="urltext"><b>{item.title||new URL(item.value).hostname.replace(/^www\./,'')}</b><span>{item.value}</span></div></div>:<p className="preview">{item.value.length>175?item.value.slice(0,175).trim()+'…':item.value}</p>}
    <div className="cardfoot"><span>{item.type==='image'?'PNG · imagen':item.type==='url'?'WEB · enlace':'TEXTO · fragmento'}</span><span className="copyhint"><Copy size={12}/> copiar</span></div>
   </article>)}</section>
   {filtered.length===0&&<div className="empty">{items.length?'No hay resultados para esa búsqueda.':'Tu nota está vacía. Pega algo para empezar.'}</div>}
   <footer><span>SFNOTES <i>·</i> TU MEMORIA EXTERNA</span><span><b>⌘</b> + V para capturar</span></footer>
   {menu&&<div className="context" style={{left:Math.min(menu.x,window.innerWidth-180),top:Math.min(menu.y,window.innerHeight-120)}} onClick={e=>e.stopPropagation()}><button onClick={()=>{const it=items.find(x=>x.id===menu.id);if(it)copy(it);setMenu(null)}}><Copy size={14}/> Copiar</button><button onClick={()=>{const it=items.find(x=>x.id===menu.id);if(it)copy(it,true);setMenu(null)}}><Scissors size={14}/> Cortar <small>⇧ click</small></button><button className="danger" onClick={()=>{remove(menu.id);setMenu(null)}}><Trash2 size={14}/> Eliminar</button></div>}
   {edit&&<div className="modalback" onClick={()=>setEdit(null)}><div className="editmodal" onClick={e=>e.stopPropagation()}><div className="modalhead"><div><span className="eyebrow">EDITAR FRAGMENTO</span><h2>Hazlo tuyo.</h2></div><button className="iconbtn" onClick={()=>setEdit(null)}><X size={17}/></button></div><textarea autoFocus defaultValue={edit.value} ref={inputRef}/><div className="modalfoot"><span>Guardado solo en este dispositivo</span><button className="addbtn" onClick={()=>{let value=inputRef.current.value;setItems(old=>old.map(x=>x.id===edit.id?{...x,value,type:'text'}:x));setEdit(null);notify('Cambios guardados')}}>Guardar</button></div></div></div>}
   {toast&&<div className="toast">{toast}</div>}
  </main>
}
createRoot(document.getElementById('root')).render(<App/>);
