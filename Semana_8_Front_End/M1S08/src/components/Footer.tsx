import './Footer.css'

function Footer() {
    return(
    
    <section>
        <footer id='footer'>
        
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Mamamia Massas</h2>
                    <p>O sabor da tradição em cada Garfada!</p>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>
                    <p>📍 Rua das Delícias, 123 - Centro</p>
                    <p>📞 (55) 99999-9999</p>
                    <p>📧 contato@mamamiamassas.com</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Mamamia Massas - Todos os direitos reservados.</p>
            </div>

        </footer>
    </section>

    );
}

export default Footer;