import styles from "../styles/Forms.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Forms() { 
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)
  return (
    <div className={styles.forms}>   
    <div>
      <Cartao bgcolor="#c0392c">
        <h1>Monty Hall</h1>
      </Cartao>
      <Cartao>
        <EntradaNumerica text="Quantidade de Portas" value={qtdePortas} onChange={novaQtded => setQtdePortas(novaQtded)}></EntradaNumerica>
        </Cartao>         
       </div>
       <div>
      <Cartao>
      <EntradaNumerica text="Porta com Presente ?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}></EntradaNumerica>
      </Cartao>
      <Cartao bgcolor="#28a085">

      <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
        <h2 className={styles.link}>Iniciar</h2>
      </Link>
      </Cartao>
      </div>
    </div>
    

    

  )
}