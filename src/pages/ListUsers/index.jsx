import Button from "../../components/Buttons"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import api from "../../services/api"
import TopBackground from "../../components/TopBackground"
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from "./styles"
import Trash from "../../assets/lixo.svg"
import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark/dark.scss';



function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        Swal.fire({
            title: "Você deseja excluir este Usuário?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, deletar!"
        }).then( async (result) => {
            if (result.isConfirmed) {
                
                Swal.fire({
                    title: "Deletado!",
                    text: "Este Usuário foi deletado com sucesso.",
                    icon: "success"
                });
                await api.delete(`/usuarios/${id}`)
                const updatedUsers = users.filter(user => user.id !== id)
                setUsers(updatedUsers)
                
            }
        });

        


    }

    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>
            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button type='button' theme='primary' onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}


export default ListUsers