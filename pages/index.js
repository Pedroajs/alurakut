import { MainGrid } from '../src/components/MainGrid/MainGrid';
import  Box  from '../src/components/Box/Box';
import {ProfileSideBar} from '../src/components/ProfileSideBar/ProfileSideBar'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations/ProfileRelations';

export default function Home() {
  const githubUser = 'pedroajs';
  const pessoasFavoritas = [
  'juunegreiros', 
  'peas', 
  'omariosouto', 
  'rafaballerini'
];

  return (
    <div>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: "profileArea"}}>
          <ProfileSideBar userImg={githubUser} />
        </div>
        <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
          <Box className='title'>
              Bem vindo(a)
          
            <OrkutNostalgicIconSet />

          </Box>

        </div>
        <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Comunidades {pessoasFavoritas.length}
              </h2>

              <ul>
                {pessoasFavoritas.map((itemAtual) => {
                  return (
                    <li key={`https://github.com/${itemAtual.id}`}>
                      <a href={`https://github.com/users/${itemAtual.title}`}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>

    </div>
  )
}
