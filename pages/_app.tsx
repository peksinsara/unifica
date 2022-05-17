import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

//Rineeby network
const supportedChainIds=[4]

//connection method used by Metamask
const connectors={
  injected:{}
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
