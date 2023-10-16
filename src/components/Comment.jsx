import { useState } from "react";
import styles from './Comment.module.css';

import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react';


export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/renanmarinhof.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Renan Marinho</strong>
              <time title='03 de Outubro às 14:01' dateTime='2023-10-03 14:01:10'>Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>

        </div>
        <footer>
         <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
         </button>
        </footer>
      </div>
    </div>
  )
}