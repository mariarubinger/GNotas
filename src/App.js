import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

    //está guardando todos os dados da aplicação
    //ele passa essas informaçoes pros filhos FormularioCadastro, ListaDeCategorias, ListaDeNotas
 /*    this.state = {
      notas:[],
      categorias:["Games", "Música"],
    };
  }
 */
  //criarNota é uma propriedade props do FormularioCadastro
/*   criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota] 
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)

   // console.log(this.notas.length)
   //console.log(`uma nova nota foi criada` + titulo + " " + texto)
  }
 */
 /*  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado)
  }
 */
/*   deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1); //deletar itens
    this.setState({notas:arrayNotas})
  }
 */

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}


//o que tem abaixo do return é uma arvore de renderização
//tem que encapsular os dois elementos que são irmãos, que são o form e o ul em uma section ou div 

export default App;
