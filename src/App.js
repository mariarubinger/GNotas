import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      notas:[]
    }
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

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1); //deletar itens
    this.setState({notas:arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
      </section>
    );
  } 
}

//o que tem abaixo do return é uma arvore de renderização
//tem que encapsular os dois elementos que são irmãos, que são o form e o ul em uma section ou div 

export default App;
