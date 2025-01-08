import './Intro.css';

function Intro() {
    return(
        <div className="Intro">
            <img id="inicio" src="/intro-background.gif" alt="Background animation" className="video-background" />
            <div className="header">
                <div className="header-top">
                    <h1 className="intro-brand">Lumiworks</h1>
                </div>
                <div className="header-bottom">
                    <a href='#inicio'>Início</a>
                    <a href='#planos'>Planos</a>
                    <a href='#sobre'>Sobre</a>
                    <a href='#clientes'>Clientes</a>
                </div>
                
            </div>
            <div className="intro-text">
                <p className="intro-title">Assessoria, produção musical e distribuição para artistas.</p>
                <a className="button button-small hover-glow" href="#planos">Ver Planos</a>
            </div>
            <span></span>
        </div>
    );
}


export default Intro