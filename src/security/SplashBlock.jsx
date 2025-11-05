export default function SplashBlock({ title='Acesso restrito', desc='Agente automatizado detectado.' }) {
  return (
    <div style={{position:'fixed', inset:0, display:'grid', placeItems:'center', background:'#000', color:'#fff', zIndex:99999}}>
      <div style={{textAlign:'center', maxWidth:520, padding:'24px'}}>
        <h2 style={{margin:'0 0 10px'}}>{title}</h2>
        <p style={{opacity:.85}}>{desc}</p>
      </div>
    </div>
  );
}
