//Importação da LIB Axios para a conexão via API do Front-end ao Back-end:
import axios from 'axios';

//Criando a instância API para o Front-end acessar ás rotas do Back-end:
const api = axios.create({
    baseURL: 'http://192.168.15.164:3335/routes'
});

// 192.168.15.164
//Cas 192.168.43.233


//Exportando á página API:
export default api;
