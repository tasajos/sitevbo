import React from 'react';
import './Promo.css'; // Importa la hoja de estilos

const Promo = () => {
    return (
        <div className="promo-section">
            <div className="promo-content">
                <h1>Better, Faster and Cheaper Cloud.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <button className="get-started">Get Started</button>
                <div className="features">
                    <p>✔ Available in 7 Locations</p>
                    <p>✔ Premium Internet Backbone</p>
                    <p>✔ 99.99% Uptime SLA</p>
                </div>
            </div>
            <div className="promo-quote">
                <blockquote>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    <footer>— Charlotte Hale, Delos Inc.</footer>
                </blockquote>
            </div>
        </div>
    );
};

export default Promo;
