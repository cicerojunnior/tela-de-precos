import './App.css'

import CheckIcon from './assets/check-icon.svg'
import InfoIcon from './assets/info-icon.svg'
import InfoIconCenter from './assets/info-icon-center.svg'
import CheckIconCenter from './assets/check-icon-center.svg'

const App = () => {
  return (
    <main className='cartoes flex'>
      <div className="cartao comecar flex">
        <div className='conteudo flex'>
          <div className='conteudo-topo flex'>
            <span className='titulo'>para você começar</span>
            <div className='plano flex'>
              <span className='essencial'>Essentials</span>
              <span className='preco'>R$ <b>19,97/mês</b></span>
            </div>
          </div>
          <button type='button'>Assinar agora</button>
          <span className='divisor'></span>
          <div className='lista-grid'>
            <img src={CheckIcon} alt='Ícone de checagem'/>
            <span>Até 3 usuários</span>
            <img src={InfoIcon} />      

            <img src={CheckIcon} alt='Ícone de checagem'/>
            <span>Autoatendimento</span>
            <img src={InfoIcon} />
          </div>
        </div>
      </div>
      <div className="cartao decolar flex">
        <div className='conteudo flex'>
          <div className='conteudo-topo flex'>
            <span className='titulo'>para você decolar</span>
            <div className='plano flex'>
              <span className='ultimate'>Ultimate</span>
              <span className='preco'>R$ <b> 19,97/mês</b></span>
            </div>
          </div>
          <button type='button'>Assinar agora</button>
          <span className='divisor divisor-center'></span>
          <div className='lista-grid cinza'>
              <img src={CheckIconCenter} alt='Ícone de checagem'/>
              <span>Usuários ilimitados</span>
              <img src={InfoIconCenter} />
              
              <img src={CheckIconCenter} alt='Ícone de checagem'/> 
              <span>Suporte 24/7</span>       
              <img src={InfoIconCenter} />

              <img src={CheckIconCenter} alt='Ícone de checagem'/>
              <span>CSM Dedicado</span>        
              <img src={InfoIconCenter} />
              
              <img src={CheckIconCenter} alt='Ícone de checagem'/> 
              <span>Treinamentos</span>       
              <img src={InfoIconCenter} />
          </div>
        </div>
        <div className='tag flex'>
          <span>mais vantajoso</span>
        </div>
      </div>
      <div className="cartao empresa flex">
        <div className='conteudo flex'>
          <div className='conteudo-topo flex'>
            <span className='titulo'>para sua empresa</span>
            <div className='plano flex'>
              <span className='empresa'>Enterprise</span>
              <span className='preco'>R$ <b> 19,97/mês</b></span>
            </div>
          </div>
          <button type='button'>Fale com a gente</button>
          <span className='divisor'></span>
          <div className='lista-grid'>
            <img src={CheckIcon} alt='Ícone de checagem'/>
            <span>Plano customizado especialmente para a necessidade do seu negócio</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App