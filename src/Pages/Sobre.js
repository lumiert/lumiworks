import './Sobre.css';

function Sobre() {
    return(
        <div id="sobre" className="Sobre">
            <div className="sobre">
                <h1>Quem Somos?</h1>
                <p>Lumiworks é um workshop fundado por Lumiert para oferecer serviços de produção musical para artistas independentes. Nosso objetivo é trazer excelência em assessoria, mixagem, masterização e distribuição.</p>
            </div>
            <img className="sobre-img" src="studio.jpg" />
        </div>
    );
}


export default Sobre;