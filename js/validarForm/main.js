let btnEnviar = document.getElementById('enviar');
let campopsw = document.getElementById('senha');
class validarFormulario {
    constructor() {
        this.formulario = document.getElementById('formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const cvalidInput = this.validInputs();

        if(this.validInputs) {
            alert('Formulário enviado')
        }
    }

    validInputs() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            if(!campo.value ) {
                const label = campo.previousElementSibling.innerText;
                this.createError(campo, `Campo "${label}" não pode estar em branco.`)
                valid = false;
            }
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
            if(campo.classList.contains('senha')) {
                if(!this.validaSenha(campo)) valid = false;
            }
            if(campo.classList.contains('repetirSenha')) {
                if(!this.validaRepetirSenha(campo)) valid = false;
            }
        }
    }
    
    validaCPF(campo) {
        const cpf = ValidaCPF(campo.value);
        if(!cpf) {
          this.createError(campo, 'CPF inválido.');
          return false;
        }
    
        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12) { // tamanho
            this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
          }
      
          if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { //só pode ter entre esses caracteres
            this.createError(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
          }
    }

    validaSenha(campo) {
        const senha = campo.value;
        if(senha.length < 6 || senha.length > 12) { // tamanho
            this.createError(campo, 'A senha precisa ter entre 6 e 12 caracteres.');
            valid = false;
          }
    }
    
    validaRepetirSenha(campo) {
        const repetirSenha = campo.value;
        if(repetirSenha != campopsw.value) {
            this.createError(campo, 'Senhas diferentes!')
            valid = false;
        }
    }
    

    createError(campo, msg) {
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');
            campo.insertAdjacentElement('afterend', div);
    }

}


const valida = new validarFormulario();

