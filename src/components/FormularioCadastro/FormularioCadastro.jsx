import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
    this.categoria="Sem categoria";
    this.state = {categorias:[]} //é um array vazio
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value
    //console.log(this.titulo)
  }
  
  _handleMudancaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value
    //console.log(this.texto)
  }

  _criarNota(evento){
    evento.preventDefault(); //o comportamento do onSubmit é recarregar a página, e isso vai fazer com quem ela não recarregue
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
    //console.log(`uma nova nota foi criada` + this.titulo + " " + this.texto)
  }

  render() {
    return (
      <form className="form-cadastro"
      onSubmit={this._criarNota.bind(this)}
      >
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) =>{
            return <option key={index} >
            {categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
          />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
          />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
