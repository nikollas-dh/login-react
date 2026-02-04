import './styles/theme.css'
import './styles/global.css'
export function App() {
  return (
    <>
      <body>
        <main>
          <article>
            <h1>Seja Bem-Vindo</h1>
            <section>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <input type="senha" />
              </div>
              <button type='submit'>Acessar</button>
            </section>
          </article>
        </main>
      </body>
    </>)
}

