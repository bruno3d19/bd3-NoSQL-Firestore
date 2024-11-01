//RENDERIZAÇÃO DA LISTA DE DADOS
const listAlunos = document.querySelector('#alunos-list')

function renderList(doc) {

    let li = document.createElement('li');
    let cod_aluno = document.createElement('span');
    let nome = document.createElement('span');
    let cpf = document.createElement('span');
    let rg = document.createElement('span');
    let telefone_aluno = document.createElement('span');
    let telefone_responsavel = document.createElement('span');
    let email = document.createElement('span');
    let data_nascimento = document.createElement('span');

    autor.textContent = doc.cod_aluno;
    titulo.textContent = doc.nome;
    cpf.textContent = doc.cpf;
    rg.textContent = doc.rg;
    telefone_aluno.textContent = doc.telefone_aluno;
    telefone_responsavel.textContent = doc.telefone_responsavel;
    email.textContent = doc.email;
    data_nascimento.textContent = doc.data_nascimento;

    li.appendChild(cod_aluno);
    li.appendChild(nome);
    li.appendChild(cpf);
    li.appendChild(rg);
    li.appendChild(telefone_aluno);
    li.appendChild(telefone_responsavel);
    li.appendChild(email);
    li.appendChild(data_nascimento);

    listAlunos.appendChild(li);
}

//LISTA OS DADOS DA COLEÇÃO DO FIRESTORE
db.collection('libri-alunos')
    .get()
    .then((snapshot) =>{
        // console.log(snapshot.docs)
        snapshot.docs.forEach(
            doc=>{
                console.log(doc.data())
                renderList(doc.data())
            }
        )
    });

    // INSERÇÃO DE DADOS
    const form = document.querySelector('#add-alunos-form');

    form.addEventListener('submit', (event)=>{
        event.preventDefault();        
        // alert('Formulário funcionando!');
        db.collection('libri-alunos').add({
            cod_aluno: form.cod_aluno.value,
            nome: form.nome.value,
            cpf: form.cpf.value,
            rg: form.rg.value,
            telefone_aluno: form.telefone_aluno.value,
            telefone_responsavel: form.telefone_responsavel.value,
            email: form.email.value,
            data_nascimento: form.data_nascimento.value
            
            
        }).then(()=>{
            form.cod_aluno.value = '';
            form.nome.value = '';
            form.cpf.value = '';
            form.rg.value = '';
            form.telefone_aluno.value = '';
            form.telefone_responsavel.value = '';
            form.email.value = '';
            form.data_nascimento.value = '';
            window.location.reload();
        });

    });