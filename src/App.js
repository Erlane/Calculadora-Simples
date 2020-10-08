import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubContainer = styled.div`
  width: 30%;
  height: 70vh;
  background-color: yellow;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerInput = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 5vh;
  margin-top: 0.3em;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  
  button {
    background-color: #d0782c;
    border: 1px solid #777;
    color: #FFFFFF;
    font-size: 2em;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const ContainerResult = styled.div`
`;

const ResultButton = styled.button`
  background-color: #1c191c;
  border-radius: 5px;
  color: #FFFFFF;
  font-weight: 900;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;


class App extends Component {
  state = {
    number1: 0,
    number2: 0,
    calcType: '',
    result: 0,
  }

  handleChangeNumber1 = (ev) => {
    this.setState({
      number1: ev.target.value,
    })
  }

  handleChangeNumber2 = (ev) => {
    this.setState({
      number2: ev.target.value,
    })
  }

  handleClick = (calcType) => {
    this.setState({
      calcType,
    })
  }

  // handleClickResult = () => {
  //   const { calcType, number1, number2 } = this.state;
  //   const firstNumber = Number(number1);
  //   const secondNumber = Number(number2)

  //   if ( calcType === '/') {
  //     this.setState({
  //       result: firstNumber / secondNumber
  //     })
  //   } if (calcType === '*') {
  //     this.setState({
  //       result: firstNumber * secondNumber
  //     })
  //   } if (calcType === '+') {
  //     this.setState({
  //       result: firstNumber + secondNumber
  //     })
  //   } if {
  //     this.setState({
  //       result: firstNumber - secondNumber
  //     })
  //   }
  // }

  //  meu if e meu switch e tem as mesmas funções .. 
  //  apenas coloquei pra saber que tem como fazer de duas formas diferentes mais
  // faz a mesma coisa.
  
handleClickResult = () => {
  const { calcType, number1, number2 } = this.state;
  const firstNumber = Number(number1);
  const secondNumber = Number(number2)

  switch (calcType) {
    case ('/'): 
      this.setState({
        result: firstNumber / secondNumber
      });
      break;
    case ('*'):
      this.setState({
        result: firstNumber * secondNumber
      });
      break;
    case ('+'):
      this.setState({
        result: firstNumber + secondNumber
      });
      break;
    case ('-'):
      this.setState({
        result: firstNumber - secondNumber
      });
      break;
    default:
      return "";
    }
  };

  render() {
    return (
      <Container>
        <SubContainer>
          <ContainerInput>
            <Input 
              type="number"
              onChange={this.handleChangeNumber1}
            />
            <Input
              type="number"
              onChange={this.handleChangeNumber2}
            />
          </ContainerInput>
          <ContainerButtons>
            <button onClick={() => this.handleClick('/')}>&#xf7;</button>
            <button onClick={() => this.handleClick('*')}>&#xd7;</button>
            <button onClick={() => this.handleClick('+')}>&#x2b;</button>
            <button onClick={() => this.handleClick('-')}>&#x2212;</button>
          </ContainerButtons>
          <ContainerResult>
            <ResultButton onClick={this.handleClickResult}>Resultado</ResultButton>
            <p>{this.state.result}</p> 
          </ContainerResult>
        </SubContainer>
      </Container>
    );
  }
}

export default App;
