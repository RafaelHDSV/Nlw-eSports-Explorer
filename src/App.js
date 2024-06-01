import './index.css';

import Header from "./components/Header.js";
import Section from "./components/Section.js";
import ListItem from "./components/ListItem";
import gameListData from "./gameListData.json"
import channelListData from "./channelListData.json"
import socialListData from "./socialListData.json"

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main>
        <Section
          class="games-list"
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!">

          {
            gameListData.map((item) => {
              return (
                <ListItem
                  href={item.href}
                  src={item.src}
                  alt={item.alt}
                >
                </ListItem>
              )
            })
          }
        </Section>

        <Section
          class="channel-list"
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco">

          {
            channelListData.map((item) => {
              return (
                <ListItem
                  href={item.href}
                  src={item.src}
                  alt={item.alt}
                >
                </ListItem>
              )
            })
          }
        </Section>

        <Section
          class="social-list"
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!">

          {
            socialListData.map((item) => {
              return (
                <ListItem
                  href={item.href}
                  src={item.src}
                  alt={item.alt}
                >
                </ListItem>
              )
            })
          }
        </Section>
      </main>
    </div>
  );
}

export default App;
