import './style.css';

function Users() {
   function handleSubmit (event) {
    event.preventDefault();
    console.log(nome,email,senha)

}
    //variavei
    //funções
    return(
        <>
        <h2>criar conta</h2>
        <form onSubmit={handleSubmit}>
            <label>nome</label>
            <input
             type="text" 
             value={nome}
             onChange={(event)=> setNome(event.target.value) }
             />

              <label>email</label>
              <input
               type="email" 
               value={email}
             onChange={(event)=> setEmail(event.target.value) }
               />
                <label>senha</label>
                 <input
                  type="passaword" 
                  value={senha}
             onChange={(event)=> setSenha(event.target.value) }
                  />
                  <button type="submit">Cadastrar</button>

                
        </form>

        
        </>
    )
}
export default Users