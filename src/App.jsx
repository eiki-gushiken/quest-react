import './App.css'
import Paragraph from './components/paragraph/paragraph'
import Button from './components/button/button'

const color = "orange"
const showLabel = (label) => {
  alert(`A label desse botão é ${label}`)
}

function App() {
  return (
    <>
      <Paragraph color={color}>
        Parágrafo colorido e com todas as letras maiúsculas
      </Paragraph>

      <Button label="Baixar CV" showLabel={showLabel}>
        Clique aqui para ver a label
      </Button>
    </>
  )
}

export default App
