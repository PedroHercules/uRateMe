import React from 'react';

import PageHeader from '../../components/PageHeader/pageHeader';
import Footer from '../../components/Footer/footer';

import imgHome from '../../assets/images/home.png';
import imgAjuda from '../../assets/images/ajuda.png';
import imgInfo from '../../assets/images/info.png';
import imgDetalhes from '../../assets/images/detalhes.png';
import imgFilmes from '../../assets/images/Filmes.png';
import imgSeries from '../../assets/images/series.png';
import imgCadastro from'../../assets/images/cadastro.png'
import imgLogin from '../../assets/images/login.png';

import './styles.css';

export default function Ajuda() {
    return (
        <div className="ajuda-container">
            <PageHeader />
            <div className="ajuda-main">
                <div className="ajuda-main-header">
                    <h1>Como podemos ajudar?</h1>
                </div>
                <div className="ajuda-main-buttons">
                    <div className="ajuda-main-info" onClick={() => {window.scrollTo(0, 555)}}>
                        <img src={imgInfo} />
                        <h2>Informações sobre as paginas</h2>
                        <p>Informações sobre todas as paginas do site, dicas iniciais e mais...</p>
                    </div>
                    <div className="ajuda-main-function" onClick={() => {window.scrollTo(0, 4000)}}>
                        <img src={imgAjuda} />
                        <h2>Como funciona</h2>
                        <p>Tutoriais sobre as funcionalidades do sistema.</p>
                    </div>

                </div>
                <div className="ajuda-main-sep">
                    <span></span>
                    <h2>Informações sobre as paginas</h2>
                    <span></span>
                </div>

                <section>
                    <div className='ajuda-main-card'>
                        <img src={imgHome}/>

                        <div className="ajuda-main-section-right">
                            <h1>Home</h1>
                            <p>A pagina Home mostrar alguns filmes e séries ja cadastrados no sistema, alem disso ... encher linguiça</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={imgDetalhes}/>

                        <div className="ajuda-main-section-right">
                            <h1>Detalhes</h1>
                            <p>A pagina de Detalhes... bla bla bla</p>
                        </div>
                    </div>

                    <div className='ajuda-main-card'>
                        <img src={imgFilmes}/>

                        <div className="ajuda-main-section-right">
                            <h1>Filmes</h1>
                            <p>A pagina de Filmes... bla bla bla</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={imgSeries}/>

                        <div className="ajuda-main-section-right">
                            <h1>Séries</h1>
                            <p>A pagina de Séries... bla bla bla</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={imgCadastro}/>

                        <div className="ajuda-main-section-right">
                            <h1>Cadastro</h1>
                            <p>A pagina de Cadastro... bla bla bla</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={imgLogin}/>

                        <div className="ajuda-main-section-right">
                            <h1>Login</h1>
                            <p>A pagina de Login... bla bla bla</p>
                        </div>
                    </div>
                </section>
                <div className="ajuda-main-sep">
                    <span></span>
                    <h2>Como Funciona?</h2>
                    <span></span>
                </div>
                <section>
                    
                </section>
            </div>
            <Footer />
        </div>
    );
}