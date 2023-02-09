import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeConteiner } from './style'

export default function Home() {
  return (
    <HomeConteiner>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <input id="task" />

          <label>durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
        </button>
      </form>
    </HomeConteiner>
  )
}
