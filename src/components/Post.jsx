import styles from './Post.module.css'





export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/renanmarinhof.png"
          />
          <div className={styles.authorInfo}>
            <strong>Renan Marinho</strong>
            <span>Web Developer</span>

            <time title='03 de Outubro às 14:01' dateTime='2023-10-03 14:01:10'>Publicado há 1h</time>
          </div>
        </div>
      </header>

      <div className={styles.content}>

        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>

      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}