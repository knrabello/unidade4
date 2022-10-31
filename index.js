import Logo from '../../img/Logo.svg'

import './styles.css'

const Home = () => {
    return (
        <main className="container-home">
            <img src={Logo} alt="Logo.svg" />

            <div>
                <h1>SPA</h1>
                <p>SPA significa Aplicação de Página Única, e trata-se de um método - relativamente novo - para o desenvolvimento web baseado em técnicas de front-end, usando sobretudo de #JavaScript e seus frameworks.</p>
                <button>Matricule-se</button>
            </div>
        </main>
    )
}

export default Home;