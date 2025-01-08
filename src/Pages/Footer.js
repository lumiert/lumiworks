import './Footer.css';
import {CornerDownRight} from 'lucide-react';

function Footer() {
    return(
        <div className="Footer">
                <div className="footer-left">
                    <div className="footer">
                        <div className="footer-top">
                            <img src="logo.png" width="200px" />
                        </div>
                        <div className="footer-bottom">
                            <ul>
                                <li>+55 54 9 9712 2776</li>
                                <li>contato@lumiert.com</li>
                                <li>@djlumiert</li>
                            </ul>
                        </div>
                    </div>
                
                <div className="easy-links">
                    <ul>
                        <li><CornerDownRight size="12" /><a href="#inicio">Início</a></li>
                        <li><CornerDownRight size="12" /><a href="#planos">Planos</a></li>

                        <li><CornerDownRight size="12" /><a href="#sobre">Sobre</a></li>
                    </ul>
                </div>
                </div>
            <p>© 2025 Lumiworks. Todos os direitos reservados.</p>
        </div>
    );
}


export default Footer;