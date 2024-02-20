import './App.css'
import Paragraph from './components/StyledText'
import Button from './components/AlertButton'

const color = "orange"

function App() {
  return (
    <>
      <Paragraph color={color}>
        Parágrafo colorido e com todas as letras maiúsculas
      </Paragraph>

      <Button label="Baixar CV">
        Clique aqui para ver a label
      </Button>
    </>
  )
}

export default App
