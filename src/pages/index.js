import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
      <Container>
        <Content>
          <Infos>
            <Name>Dev Felipe Nunes</Name>
            <Function>FullStack Developer Jr</Function>
            <Intro>Cursando Análise e Desenvolvimento de Sistemas,
              Dedicando horas de estudo para me tornar um programador FullStack.
            </Intro>
            <Link href={"projects"}>
              <LinkProjects>PROJETOS<FaArrowRight /></LinkProjects>
            </Link>
          </Infos>
          <Logo>
            <Img src='/images/Perfil.jpg' alt='' />
          </Logo>
        </Content>
      </Container>
    )
}
