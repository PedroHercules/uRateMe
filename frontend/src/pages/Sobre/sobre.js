import React from 'react';

import PageHeader from '../../components/PageHeader/pageHeader';
import Footer from '../../components/Footer/footer';

import './styles.css'

import image from '../../assets/images/sobreImage.png'

export default function Sobre() {
    return (
        <div className="sobre-container">
            <PageHeader />
            <main>
                <div className="sobre-main-header" style={{'backgroundSize': '100% 100%'}}>
                    <h1>Sobre o uRateMe</h1>
                    <p>Somos um site voltado para avaliações de filmes e séries, uma ideia extremamente inovadora. 
                        Nosso site é para todos tipo de usuário pois utilizamos técnicas de IHC para deixar a experiência 
                        do usuário a mais simples possível.</p>
                </div>
                <div className="sobre-main-body">
                    <h1>Quem somos?</h1>
                    <p>Somos um grupo de estudantes da UFPI, que resolveu desenvolver 
                        um site de avaliações de filmes e séries 
                        na disciplina de PDSI 1</p>
                    <div className="sobre-main-footer">
                        <div>
                            <h2>Calos Daniel</h2>
                            <h4>da Silveira santos</h4>
                            <p>Aluno da UFPI, atuamente no 7ª período do cuso de sistemas de informação</p>
                        </div>
                        <div>
                            <h2>José Fernando</h2>
                            <h4> de Carvalho Ferreira</h4>
                            <p>Aluno da UFPI, atuamente no 7ª período do cuso de sistemas de informação</p>
                        </div>
                        <div>
                            <h2>José Maria</h2>
                            <h4> dos Santos Leal</h4>
                            <p>Aluno da UFPI, atuamente no 7ª período do cuso de sistemas de informação</p>
                        </div>
                        <div>
                            <h2>Marcos Paulo</h2>
                            <h4>Fontes Feitosa</h4>
                            <p>Aluno da UFPI, atuamente no 7ª período do cuso de sistemas de informação</p>
                        </div>
                        <div>
                            <h2>Pedro Hércules</h2>
                            <h4>de Sousa Dantas</h4>
                            <p>Aluno da UFPI, atuamente no 7ª período do cuso de sistemas de informação</p>
                        </div>
                        <div>
                            <h2>Thamyres</h2>
                            <h4>dos Anjos Menezes</h4>
                            <p>Aluno da UFPI, atuamente no 7ª período do cuso de sistemas de informação</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}