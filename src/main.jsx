import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft, Check, Clipboard, Copy, Image as ImageIcon,
  Link as LinkIcon, MoreHorizontal, MoreVertical, Pin, PinOff, Plus, Search,
  Settings as SettingsIcon, StickyNote, Scissors, Trash2, X
} from 'lucide-react';
import './style.css';

const starter = [
  { id: 'a1', type: 'url', value: 'https://www.are.na/', title: 'Are.na — collect and connect ideas' },
  { id: 'a2', type: 'text', value: 'Las buenas ideas no siempre llegan cuando estás sentado frente al escritorio. Captúralas aquí y vuelve a ellas cuando las necesites.' },
  { id: 'a3', type: 'text', value: 'SFNotes: un pequeño espacio para guardar lo que importa.' }
];

const defaultSettings = {
  theme: 'light', accent: 'yellow', fontSize: 'medium', density: 'comfortable',
  pinOnStart: true, showNumbers: true
};

function readSettings() {
  try { return { ...defaultSettings, ...JSON.parse(localStorage.getItem('sfnotes-settings')) }; }
  catch { return defaultSettings; }
}

const identify = (value) => /^https?:\/\//i.test(value.trim()) ? 'url' : 'text';
const itemType = (type) => type === 'url' ? 'Enlace' : type === 'image' ? 'Imagen' : 'Texto';

function App() {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('sfnotes-items')) || starter; }
    catch { return starter; }
  });
  const [loaded, setLoaded] = useState(!window.sfnotes);
  const [settings, setSettings] = useState(readSettings);
  const [pinned, setPinned] = useState(() => readSettings().pinOnStart);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [edit, setEdit] = useState(null);
  const [itemMenu, setItemMenu] = useState(null);
  const [appMenu, setAppMenu] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [toast, setToast] = useState('');
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (!window.sfnotes) return;
    let alive = true;
    (async () => {
      try {
        const saved = await window.sfnotes.readItems();
        if (alive && saved) setItems(saved);
      } catch (error) { console.error('No se pudieron cargar las notas', error); }
      finally { if (alive) setLoaded(true); }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem('sfnotes-items', JSON.stringify(items));
    window.sfnotes?.saveItems(items);
  }, [items, loaded]);

  useEffect(() => { localStorage.setItem('sfnotes-settings', JSON.stringify(settings)); }, [settings]);
  useEffect(() => { if (loaded) window.sfnotes?.setPinned(settings.pinOnStart); }, [loaded]);

  useEffect(() => {
    if (!itemMenu && !appMenu) return;
    const close = () => { setItemMenu(null); setAppMenu(false); };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [itemMenu, appMenu]);

  const notify = (message) => { setToast(message); setTimeout(() => setToast(''), 1600); };
  const add = (kind, value) => {
    if (!value) return;
    setItems((old) => [{ id: crypto.randomUUID(), type: kind, value }, ...old]);
    notify('Añadido a Notas');
  };

  const paste = async () => {
    try {
      const clip = window.sfnotes ? await window.sfnotes.readClipboard() : null;
      if (clip?.kind === 'image') { add('image', clip.value); return; }
      if (clip?.value) { add(identify(clip.value), clip.value); return; }
      const text = await navigator.clipboard.readText();
      if (text) add(identify(text), text);
      else notify('No hay nada que pegar');
    } catch {
      try {
        const text = await navigator.clipboard.readText();
        if (text) add(identify(text), text);
        else notify('No hay nada que pegar');
      } catch { notify('No se pudo leer el portapapeles'); }
    }
  };

  useEffect(() => {
    const key = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'v' && !edit) {
        event.preventDefault(); paste();
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'f') {
        event.preventDefault(); searchRef.current?.focus();
      }
      if (event.key === 'Escape') { setSettingsOpen(false); setEdit(null); setItemMenu(null); setAppMenu(false); }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  });

  const copy = async (item, cut = false) => {
    try {
      if (window.sfnotes) await window.sfnotes.writeClipboard({ kind: item.type === 'image' ? 'image' : 'text', value: item.value });
      else await navigator.clipboard.writeText(item.value);
      if (cut) setItems((old) => old.filter((entry) => entry.id !== item.id));
      notify(cut ? 'Copiado y quitado de Notas' : 'Copiado');
    } catch { notify('No se pudo copiar'); }
  };

  const togglePin = () => {
    const next = !pinned;
    setPinned(next);
    window.sfnotes?.setPinned(next);
  };

  const setPreference = (key, value) => setSettings((old) => ({ ...old, [key]: value }));
  const visibleItems = items.filter((item) => {
    const matchesQuery = item.value.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (filter === 'all' || item.type === filter);
  });

  return (
    <main className="window" data-theme={settings.theme} data-accent={settings.accent} data-size={settings.fontSize} data-density={settings.density}>
      <header className="topbar">
        <div className="brand"><span className="brandmark"><StickyNote size={17} /></span><b>SFNotes</b></div>
        <div className="top-actions">
          <button className="round-button" title="Buscar" onClick={() => searchRef.current?.focus()}><Search size={16} /></button>
          <button className="round-button" title="Pegar del portapapeles" onClick={paste}><Plus size={18} /></button>
          <button className="round-button" title="Más opciones" onClick={(event) => { event.stopPropagation(); setAppMenu(!appMenu); }}><MoreHorizontal size={18} /></button>
        </div>
      </header>

      <section className="notes-view">
        <label className="search-field"><Search size={15} /><input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar en todas las notas" /><kbd>⌘ F</kbd></label>
        <div className="section-heading"><h1>Notas</h1><span>{items.length} {items.length === 1 ? 'nota' : 'notas'}</span></div>
        <nav className="filters" aria-label="Filtrar notas">
          {[['all', 'Todas'], ['text', 'Texto'], ['url', 'Enlaces'], ['image', 'Imágenes']].map(([value, label]) => (
            <button key={value} className={filter === value ? 'selected' : ''} onClick={() => setFilter(value)}>{label}</button>
          ))}
        </nav>

        <section className="notes-list">
          {visibleItems.map((item, index) => (
            <article
              className={`note-card ${item.type === 'image' ? 'note-image' : ''}`}
              key={item.id}
              onClick={() => copy(item)}
              onContextMenu={(event) => { event.preventDefault(); setItemMenu({ id: item.id, x: event.clientX, y: event.clientY }); }}
              onMouseDown={(event) => { if (event.button === 1) { event.preventDefault(); setEdit(item); } }}
              onClickCapture={(event) => { if (event.shiftKey) { event.stopPropagation(); copy(item, true); } }}
            >
              <div className="note-meta">
                {settings.showNumbers && <span className="note-number">{String(items.indexOf(item) + 1).padStart(2, '0')}</span>}
                <span>{itemType(item.type)}</span>
                <button className="note-more" title="Opciones de la nota" onClick={(event) => { event.stopPropagation(); setItemMenu({ id: item.id, x: event.clientX, y: event.clientY }); }}><MoreVertical size={15} /></button>
              </div>
              {item.type === 'image' ? (
                <div className="image-preview"><img src={item.value} alt="Imagen guardada" /><div><h3>Imagen guardada</h3><p>Imagen pegada</p></div></div>
              ) : item.type === 'url' ? (
                <div className="link-preview">
                  <span className="link-mark"><LinkIcon size={15} /></span>
                  <div><h3>{item.title || (() => { try { return new URL(item.value).hostname.replace(/^www\./, ''); } catch { return item.value; } })()}</h3><p>{item.value}</p></div>
                </div>
              ) : (
                <p className="note-preview">{item.value.length > 150 ? `${item.value.slice(0, 150).trim()}…` : item.value}</p>
              )}
              <span className="copy-label"><Copy size={12} /> Pulsa para copiar</span>
            </article>
          ))}
          {visibleItems.length === 0 && <div className="empty-state">{items.length ? 'No hay notas con ese filtro.' : 'Pega algo para guardarlo aquí.'}</div>}
        </section>
      </section>

      <footer className="bottom-bar">
        <button className={`footer-action ${pinned ? 'is-pinned' : ''}`} onClick={togglePin}><span className="footer-icon">{pinned ? <Pin size={15} /> : <PinOff size={15} />}</span>{pinned ? 'Fijada' : 'Fijar en escritorio'}</button>
        <button className="new-note-button" title="Pegar del portapapeles" onClick={paste}><Plus size={20} /></button>
        <button className="footer-action settings-action" onClick={() => setSettingsOpen(true)}><SettingsIcon size={15} /><span>Ajustes</span></button>
      </footer>

      {appMenu && <div className="app-menu" onClick={(event) => event.stopPropagation()}>
        <button onClick={() => { togglePin(); setAppMenu(false); }}>{pinned ? <PinOff size={14} /> : <Pin size={14} />}{pinned ? 'Desfijar ventana' : 'Fijar ventana'}</button>
        <button onClick={() => { setSettingsOpen(true); setAppMenu(false); }}><SettingsIcon size={14} /> Ajustes</button>
        <button onClick={() => window.sfnotes?.close()}><X size={14} /> Cerrar SFNotes</button>
      </div>}

      {itemMenu && <div className="context-menu" style={{ left: Math.min(itemMenu.x, window.innerWidth - 178), top: Math.min(itemMenu.y, window.innerHeight - 118) }} onClick={(event) => event.stopPropagation()}>
        <button onClick={() => { const item = items.find((entry) => entry.id === itemMenu.id); if (item) copy(item); setItemMenu(null); }}><Copy size={14} /> Copiar</button>
        <button onClick={() => { const item = items.find((entry) => entry.id === itemMenu.id); if (item) copy(item, true); setItemMenu(null); }}><Scissors size={14} /> Cortar <small>⇧ + clic</small></button>
        <button className="danger" onClick={() => { setItems((old) => old.filter((entry) => entry.id !== itemMenu.id)); setItemMenu(null); }}><Trash2 size={14} /> Eliminar</button>
      </div>}

      {settingsOpen && <div className="settings-backdrop" onClick={() => setSettingsOpen(false)}>
        <section className="settings-panel" onClick={(event) => event.stopPropagation()}>
          <header className="settings-header"><button className="back-button" onClick={() => setSettingsOpen(false)}><ArrowLeft size={18} /></button><h2>Ajustes</h2><button className="back-button" onClick={() => setSettingsOpen(false)} aria-label="Cerrar ajustes"><X size={17} /></button></header>
          <div className="settings-content">
            <p className="settings-label">APARIENCIA</p>
            <h3>Tema</h3>
            <div className="theme-options">
              {[['light', 'Claro'], ['dark', 'Oscuro'], ['lavender', 'Lavanda']].map(([value, label]) => (
                <button key={value} className={`theme-option theme-${value} ${settings.theme === value ? 'chosen' : ''}`} onClick={() => setPreference('theme', value)}>
                  <span className="theme-swatch"><i /><i /></span><span>{label}</span>{settings.theme === value && <span className="theme-check"><Check size={11} /></span>}
                </button>
              ))}
            </div>

            <h3>Color de acento</h3>
            <div className="accent-options" role="group" aria-label="Color de acento">
              {[['yellow', 'Amarillo'], ['blue', 'Azul'], ['green', 'Verde']].map(([value, label]) => (
                <button key={value} aria-label={label} title={label} className={`accent-dot accent-${value} ${settings.accent === value ? 'chosen' : ''}`} onClick={() => setPreference('accent', value)}>{settings.accent === value && <Check size={13} />}</button>
              ))}
            </div>

            <div className="settings-divider" />
            <p className="settings-label">LECTURA</p>
            <div className="setting-row"><div><b>Tamaño de texto</b><span>Elige el tamaño de las notas</span></div><select value={settings.fontSize} onChange={(event) => setPreference('fontSize', event.target.value)}><option value="small">Pequeño</option><option value="medium">Medio</option><option value="large">Grande</option></select></div>
            <div className="setting-row"><div><b>Densidad de notas</b><span>Espacio entre fragmentos</span></div><select value={settings.density} onChange={(event) => setPreference('density', event.target.value)}><option value="comfortable">Cómoda</option><option value="compact">Compacta</option></select></div>

            <div className="settings-divider" />
            <p className="settings-label">COMPORTAMIENTO</p>
            <button className="toggle-row" onClick={() => { const next = !settings.pinOnStart; setPreference('pinOnStart', next); setPinned(next); window.sfnotes?.setPinned(next); }}><span><b>Fijar al iniciar</b><small>Mantener la nota sobre otras ventanas</small></span><i className={`switch ${settings.pinOnStart ? 'on' : ''}`} /></button>
            <button className="toggle-row" onClick={() => setPreference('showNumbers', !settings.showNumbers)}><span><b>Mostrar numeración</b><small>Identificar notas de un vistazo</small></span><i className={`switch ${settings.showNumbers ? 'on' : ''}`} /></button>
            <p className="settings-note"><Clipboard size={13} /> Tus notas y preferencias se guardan en este dispositivo.</p>
          </div>
        </section>
      </div>}

      {edit && <div className="edit-backdrop" onClick={() => setEdit(null)}><div className="edit-panel" onClick={(event) => event.stopPropagation()}>
        <div className="edit-header"><div><span>EDITAR NOTA</span><h2>Tu texto</h2></div><button className="back-button" onClick={() => setEdit(null)}><X size={17} /></button></div>
        <textarea autoFocus defaultValue={edit.value} ref={inputRef} />
        <div className="edit-footer"><span>Guardado en este dispositivo</span><button onClick={() => { const value = inputRef.current.value; setItems((old) => old.map((item) => item.id === edit.id ? { ...item, value, type: 'text' } : item)); setEdit(null); notify('Cambios guardados'); }}>Guardar</button></div>
      </div></div>}

      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
