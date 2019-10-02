import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      curtida: false,
      comentario: false,
    }
  }

  onClickCurtir = () => {
    const curtidaAtual = this.state.curtida;
    const novaCurtida = {
      curtida: !curtidaAtual
    }

    this.setState(novaCurtida)
  }

  onClickAbrirCaixaDeComentarios = () => {
    const caixaDeComentariosAtual = this.state.comentario;
    const novoComentario = {
      comentario: !caixaDeComentariosAtual
    }

    this.setState(novoComentario)
  }
  
  
  
  
  render (){  
    let numeroDeCurtidas = 0;
    let caixaDeComentarios;
    
    if (this.state.curtida === true) {
      numeroDeCurtidas = 1
    }

    if (this.state.comentario) {
      caixaDeComentarios = (<div>
                              <input></input>
                              <button>Comentar</button>
                            </div>)
    }

    return (
    <div className="App">
      <section className="box-post">
        <div className="topo">

        </div>
        <img />
        <div className="icones">
          <div className="curti">
            <svg onClick={this.onClickCurtir} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
            {numeroDeCurtidas}
          </div>
          <div className="comentar">
            <svg onClick={this.onClickAbrirCaixaDeComentarios} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"/></svg>
            
          </div>
        </div>
          {caixaDeComentarios}
      </section>
    </div>
  );}
}

export default App;
