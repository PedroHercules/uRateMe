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
import cadFilmeSerie from '../../assets/images/cadastrarFilmeSerie.png';
import perfil from '../../assets/images/PerfilAvaliacoes.png';
import reaAvaliacao from '../../assets/images/avaliacoes.png';

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
                        <h2>Informações sobre as páginas</h2>
                        <p>Informações sobre todas as páginas do site, dicas iniciais e mais...</p>
                    </div>
                    <div className="ajuda-main-function" onClick={() => {window.scrollTo(0, 4680)}}>
                        <img src={imgAjuda} />
                        <h2>Como funciona</h2>
                        <p>Tutoriais sobre as funcionalidades do sistema.</p>
                    </div>

                </div>
                <div className="ajuda-main-sep">
                    <span></span>
                    <h2>Informações sobre as páginas</h2>
                    <span></span>
                </div>

                <section>
                    <div className='ajuda-main-card'>
                        <img src={imgHome}/>

                        <div className="ajuda-main-section-right">
                            <h1>Home</h1>
                            <p>A página home é tela inicial que  será  acessada  pelo  usuário após se autenticar no sistema,  nela  serão exibidos alguns filmes e séries já cadastrados no site.</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={imgDetalhes}/>

                        <div className="ajuda-main-section-right">
                            <h1>Detalhes</h1>
                            <p>A página de detalhes apresenta alguns detalhes do filme ou série, tais como descrição, nota da crítica, nota dos usuários e comentários feitos por usuários. E caso o usuário que esta logado acessar os detalhes do filme ou série e não tenha feito um comentário aparecerá um campo pra que o usuário possa fazer sua avaliação sobre aquele filme ou série.</p>
                        </div>
                    </div>

                    <div className='ajuda-main-card'>
                        <img src={imgFilmes}/>

                        <div className="ajuda-main-section-right">
                            <h1>Filmes</h1>
                            <p>A página de filmes contém todos os filmes que foram cadastrados pelo administrador do site, onde usuários que estão logados no sistema podem escolher um filme e realizar sua crítica. Ao clicar em um dos filmes o usuário será direcionado para a página de detalhes.</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={imgSeries}/>

                        <div className="ajuda-main-section-right">
                            <h1>Séries</h1>
                            <p>A página de séries é uma página que possui todas as séries que foram cadastradas pelo administrador do site e também o número de temporadas de cada série, onde usuários que estão logados no sistema podem escolher uma série e avaliá-la.  Ao clicar em uma das séries o usuário será direcionado para a página de detalhes.</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={imgCadastro}/>

                        <div className="ajuda-main-section-right">
                            <h1>Cadastro</h1>
                            <p>A página de cadastro apresenta onde o usuário efetuará seu cadastro, primeiramente é efetuada a validação dos dados do usuário, caso eles já existam no sistema, o cadastro não é realizado.</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={imgLogin}/>

                        <div className="ajuda-main-section-right">
                            <h1>Login</h1>
                            <p>A página de Login traz de forma visual a tela de login desenvolvida para o usuário, por meio dela caso o usuário já possua uma conta cadastrada ele poderá conseguir acessar as demais funcionalidades do sistema.</p>
                        </div>
                    </div>

                    <div className='ajuda-main-card'>
                        <img src={cadFilmeSerie}/>

                        <div className="ajuda-main-section-right">
                            <h1>Cadastro de Filmes e Séries</h1>
                            <p>A página de cadastrar filmes e séries é onde o administrador do site irá realizar a requisições de novos conteúdos para serem cadastrados no site de avaliações.</p>
                        </div>
                    </div>
                    <div className='ajuda-main-card'>
                        <img src={perfil}/>

                        <div className="ajuda-main-section-right">
                            <h1>Perfil</h1>
                            <p>A página de perfil possui todos os dados do usuário e também todas as avaliações feitas dentro da plataforma pelo mesmo.</p>
                        </div>
                    </div>
                </section>
                <div className="ajuda-main-sep">
                    <span></span>
                    <h2>Como Funciona?</h2>
                    <span></span>
                </div>
                <section>
                    <div className='ajuda-main-card'>
                        <img src={reaAvaliacao}/>

                        <div className="ajuda-main-section-right">
                            <h1>Realizar Avaliação</h1>
                            <p>Na imagem a esquerda temos a página de detalhes com o fomulário para que o usuário possa realizar sua avaliação, para isso basta informa a nota do filme delizando a bolinha azul até a nota desejada, após isso informará o comentário desejado e clicar em enviar. Na parte inferior temos uma demostração de como ficará sua avaliação após enviada, note que possui dois botões que o usuário pode editar sua avaliação ou remover.</p>
                        </div>
                    </div>

                    <div className='ajuda-main-card'>
                        <img src={imgFilmes}/>

                        <div className="ajuda-main-section-right">
                            <h1>Pesquisar filme ou série</h1>
                            <p>Para procurar um filme ou série basta acessar a página de filme ou série e informar o nome desejado, a medida que esta sendo digitado o nome no campo de procura o sistema será atualizado com resultado da pesquisa.</p>
                        </div>
                    </div>

                    <div className='ajuda-main-card'>
                        <img src={perfil}/>

                        <div className="ajuda-main-section-right">
                            <h1>Encontrar todas suas avaliações</h1>
                            <p>Para encontrar todas as avaliações realizadas pelo usuário logado, basta clicar no icone de usuário no canto superior direito e clicar na opção de pefil, após será direcionado para a página de perfil com alguns informações do usuário e as suas avaliações como mostra a imagem a esquerda. Aqui o usuário pode clicar na sua avaliação o sistema será direcionado para a pagina de detalhes correspondente a sua avaliação.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}