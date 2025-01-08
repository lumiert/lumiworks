import './Planos.css';

import {MessageSquareShare, Check, X, Disc3, Library} from 'lucide-react'

function Planos() {
    return(
        <div id="planos" className="Planos">
            <div className="starter">
                <div className="vinyl-icon"><h1 className="plan-name">Starter</h1><Disc3 size="64" /></div>
                
                <h1 className="price-risk">R$ 299</h1>
                <h1 className="price">R$ 199</h1>
                <ul>
                    <li><X color="red" />Assessoria detalhada</li>
                    <li><Check color="green" />Produção</li>
                    <li><Check color="green" />Mixagem</li>
                    <li><Check color="green" />Masterização</li>
                    <li><X color="red" />Distribuição</li>
                </ul>    
                <a className="button" href="https://wa.me/54997122776"><MessageSquareShare />Contratar</a>
            </div>

            <spam className="horz-divider" />

            <div className="pro">
            <div className="vinyl-icon"><h1 className="plan-name">Pro</h1><Library size="64" /></div>
                
                <h1 className="price-risk">R$ 399</h1>
                <h1 className="price">R$ 299</h1>
                <ul>
                    <li><Check color="green" />Assessoria detalhada</li>
                    <li><Check color="green" />Produção</li>
                    <li><Check color="green" />Mixagem</li>
                    <li><Check color="green" />Masterização</li>
                    <li><Check color="green" />Distribuição</li>
                </ul>   
                <a className="button" href="https://wa.me/54997122776"><MessageSquareShare />Contratar</a>
            </div>
        </div>
    );
}


export default Planos