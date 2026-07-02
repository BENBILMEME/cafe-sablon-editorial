import { Component } from 'react';
export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  componentDidCatch(e, i) { console.error('[ErrorBoundary]', e, i?.componentStack); }
  render() {
    if (this.state.error) return (<div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',background:'white',color:'#0A0A0A',fontFamily:'Georgia,serif',padding:'24px',textAlign:'center',flexDirection:'column',gap:'16px'}}><p style={{fontSize:'1.5rem'}}>Bir hata oluştu</p><p style={{fontSize:'0.9rem',color:'#6B6B6B'}}>Lütfen sayfayı yenileyin.</p><button onClick={()=>window.location.reload()} style={{padding:'12px 24px',background:'#0A0A0A',color:'white',border:'none',fontWeight:600,cursor:'pointer'}}>Yenile</button></div>);
    return this.props.children;
  }
}
