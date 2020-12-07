import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import ProductList from '../../components/ProductList';
import PostList from '../../components/PostList';
import Featured from '../../components/Featured';
import WhereToFind from '../../components/WhereToFind';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

const products = [
    {
        category: 'Tênis',
        image: {
            src: 'https://picsum.photos/230/363?random=1',
            alt: 'Imagem 1'
        },
        title: 'Nike Shoks',
        flag: false,
        price: 'R$ 230,55',
        link: {
            name: 'Call to action',
            target: 'http://google.com'
        }
    },{
        category: 'Botas',
        image: {
            src: 'https://picsum.photos/230/363?random=2',
            alt: 'Imagem 2'
        },
        title: 'Bota de chuva',
        flag: false,
        price: 'R$ 340,66',
        link: {
            name: 'Call to action',
            target: 'http://google.com'
        }
    },{
        category: 'Sandalias',
        image: {
            src: 'https://picsum.photos/230/363?random=3',
            alt: 'Imagem 3'
        },
        title: 'Rasteirinha',
        flag: true,
        price: 'R$ 67,69',
        link: {
            name: 'Call to action',
            target: 'http://google.com'
        }
    },{
        category: 'Salto alto',
        image: {
            src: 'https://picsum.photos/230/363?random=4',
            alt: 'Imagem 4'
        },
        title: 'Sandalia alta',
        flag: false,
        price: 'R$ 222,34',
        link: {
            name: 'Call to action',
            target: 'http://google.com'
        }
    }
];

const products2 = [
    {
        category: 'Botas',
        image: {
            src: 'https://picsum.photos/230/363?random=7',
            alt: 'Imagem 1'
        },
        title: 'Bull Terrier',
        flag: true,
        price: 'R$ 330,55',
        link: {
            name: 'Call to action',
            target: 'http://google.com'
        }
    },{
        category: 'Sapato',
        image: {
            src: 'https://picsum.photos/230/363?random=5',
            alt: 'Imagem 2'
        },
        title: 'Torrenezzi',
        flag: false,
        price: 'R$ 540,66',
        link: {
            name: 'Call to action',
            target: 'http://google.com'
        }
    },{
        category: 'Chinelo',
        image: {
            src: 'https://picsum.photos/230/363?random=8',
            alt: 'Imagem 3'
        },
        title: 'Havaiana',
        flag: true,
        price: 'R$ 222,69',
        link: {
            name: 'Call to action',
            target: 'http://google.com'
        }
    },{
        category: 'Sapatenis',
        image: {
            src: 'https://picsum.photos/230/363?random=9',
            alt: 'Imagem 4'
        },
        title: 'Samelo',
        flag: false,
        price: 'R$ 233,34',
        link: {
            name: 'Call to action',
            target: 'http://google.com'
        }
    }
];

const posts = [
    {
        image: {
            src: 'https://picsum.photos/348/348?random=1',
            alt: 'Post 1'
        },
        theme: {
            name: 'Tema',
            target: 'http://...'
        },
        id: '01',
        title: 'Título do post lorem ipsum',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        link: {
            name: 'More info',
            target: 'http://www.teste.com'
        }
    },{
        image: {
            src: 'https://picsum.photos/348/540?random=3',
            alt: 'Post 2'
        },
        theme: {
            name: 'Tema',
            target: 'http://...'
        },
        id: '01',
        title: 'Título do post lorem ipsum',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        link: {
            name: 'More info',
            target: 'http://www.teste.com'
        }
    },{
        image: {
            src: 'https://picsum.photos/348/348?random=5',
            alt: 'Post 2'
        },
        theme: {
            name: 'Tema',
            target: 'http://...'
        },
        id: '01',
        title: 'Título do post lorem ipsum',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        link: {
            name: 'More info',
            target: 'http://www.teste.com'
        }
    }
];

const Home = () => {
    return (
        <>
            <Header />
            <Carousel />
            <section className="home">
                <article>
                    <h2>Título da seção int occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="#call1" className="btn-primary">Call to action</Link>
                </article>
                <article className="no-bg">
                    <h2>Título da seção int occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link to="#call2" className="btn-primary">Call to action</Link>
                </article>
                <ProductList 
                    title="Sapatos femininos"
                    items={products}
                />
                <ProductList 
                    title="Sapatos masculinos"
                    items={products2}
                />
                <strong>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</strong>
                <div className="box">
                    <img src="https://picsum.photos/544/736?random=55" alt="" />
                    <article>
                        <h2>Título da seção int occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Link to="#call3" className="btn-primary">Call to action</Link>
                    </article>
                    <PostList items={posts} />
                </div>
                <div className="gallery">
                    <img className="pos1" src="https://picsum.photos/358/421?random=11" alt="" />
                    <img className="pos2" src="https://picsum.photos/279/421?random=22" alt="" />
                    <img className="pos3" src="https://picsum.photos/442/454?random=33" alt="" />
                    <img className="pos4" src="https://picsum.photos/546/736?random=44" alt="" />
                </div>
                <Featured />
                <WhereToFind />
                <Newsletter />
            </section>
            <Footer />
        </>
    )
}

export default Home;