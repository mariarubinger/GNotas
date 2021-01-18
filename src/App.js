import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      notas:[],
      categorias:[],
    };
  }

  //criarNota é uma propriedade props do FormularioCadastro
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota] 
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)

   // console.log(this.notas.length)
   //console.log(`uma nova nota foi criada` + titulo + " " + texto)
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado)

  }


  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1); //deletar itens
    this.setState({notas:arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}/>
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}/>

        </main>
      </section>
    );
  } 
}

//o que tem abaixo do return é uma arvore de renderização
//tem que encapsular os dois elementos que são irmãos, que são o form e o ul em uma section ou div 

export default App;
