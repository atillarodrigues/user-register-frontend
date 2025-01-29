import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title, Container, Form, ContainerInputs, Input, InputLabel } from './styles'
import api from '../../services/api'
import Button from '../../components/Buttons'
import TopBackground from '../../components/TopBackground'
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.scss';

function sucessAlerta() {

  Swal.fire({
    title: "Sucesso",
    text: "Usuário cadastrado com sucesso",
    icon: "success"
  });
}

function errorAlerta(customText) {
  Swal.fire({
    title: "ERROR",
    text: customText || "Este Email ja está em uso",
    icon: "error"
  });
}

function Home() {


  const inputName = useRef()

  const inputAge = useRef()

  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    try {
      const age = parseInt(inputAge.current.value);
      if (age <= 18) {
        errorAlerta('Idade inválida. O usuário precisa ter mais de 18 anos.');
        return;
      }
  
      const data = await api.post('/usuarios', {
        email: inputEmail.current.value,
        name: inputName.current.value,
        age: age
      })
      console.log(data)
      if (data.status === 201) {
        sucessAlerta()
      }
    } catch (error) {
      console.error(error)
      errorAlerta() 
    }
  }
  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuários</Title>
        <ContainerInputs>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do Usuário' ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type='number' placeholder='Idade do Usuário' ref={inputAge} />
          </div>
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type='email' placeholder='Email do Usuário' ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>
      </Form>
      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Lista de Usuários</Button>
    </Container>
  )
}


export default Home
