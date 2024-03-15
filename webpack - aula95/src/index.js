import { GeraCPF } from './modules/GeraCPF';
import './assets/css/style.css';



const cpfGerado = document.querySelector('.cpf-gerado');
cpfGerado.innerHTML = GeraCPF();
