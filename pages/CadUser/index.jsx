import './cadUser.css';
import api from '../../api';


function Index() {
    async function handleRegister(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [typeUser, setTypeUser] = useState('')


try{

    const data = {
        email, password, userName, typeUser
    }
    const response = await api.post('/user', data);
    alert(`Usuário cadastrado com sucesso.
        Bem vindo(a) ao sistema ${userName}`)

        setEmail('')
        setPassword('')
        setUserName('')

} catch(error) {
    alert(`Erro no cadastro. Tente novamente. \nCodigo Erro: &{error}`)
}

}



    return (
        <>

        <h1> Cine Nana</h1>
        <p> cadastre-se e receba promoções exclusivas!</p>
        <form>

            <form onSubmit={handleRegister}></form>
            <input type="email"
            placeholder='E-mail'
            required
            />

            <input type="password"
            placeholder='Senha'
            required
            />

            <input type="text"
            placeholder='Nome de Usuário'
            required
            />



            <select>
                <option value="" selected> Selecione...</option>
                <option value="Administrador" selected> Administrador</option>
                <option value="Comum" selected> Comum</option>
            </select>

            

            <button>
        
                Cadastre-se
                
            </button>

            
        </form>
        </>
    
    );
}

export default Index;