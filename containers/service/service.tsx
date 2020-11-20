import Fade from 'react-reveal/Fade'
import MedicalHistory from '../../components/medical-history'
import Female from '../../components/female'
import Telemarketer from '../../components/telemarketer'
import Family from '../../components/family'
import Breakfast from '../../components/breakfast'
import AirConditioner from '../../components/air-conditioner'
import Community from '../../components/community'
import Medicine from '../../components/medicine'
import Ambulance from '../../components/ambulance'
import styles from './service.module.scss'

const service = [
  { icon: MedicalHistory, title: 'Cuidados intensivos de enfermagem', content: 'Liderados e orientados por nossa equipe médica clínica e psiquiátrica, os enfermeiros garantem o prosseguir das terapêuticas aplicadas diariamente, 24h por dia' },
  { icon: Female, title: 'Espaço exclusivo para mulheres', content: 'Desde o momento da chegada, a paciente encontra espaços somente para mulheres' },
  { icon: Telemarketer, title: 'Atendimento e monitoramento pessoal e eletrônico 24 horas', content: 'O atendimento recebe demandas de segunda a segunda, em todas as horas, para estarmos acessível às demandas que não têm hora para acontecer por natureza'},
  { icon: Family, title: 'Tratamento com família presente', content: 'Buscamos incluir a família em cada fase do tratamento e que conta com um grupo terapêutico para a troca de experiências entre familiares e o fortalecimento mútuo na jornada da superação' },
  { icon: Breakfast, title: 'Refeições saborosas e balanceadas', content: 'A alimentação de cada paciente é coordenada por nutricionistas que elaboram dietas especiais variadas no caso de necessidades de saúde' },
  { icon: AirConditioner, title: 'Suítes climatizadas', content: 'Todas as nossas suítes são climatizadas e possuem têm TV LCD ou LED, chuveiros aquecidos à gás, armários, camas tipo box ou hospitalar residencial (camas HR) caso necessário' },
  { icon: Community, title: 'Grupos terapêuticos e atendimentos individuais', content: 'O paciente tem acesso a terapias ora em grupos, ora individualmente, para aquisição de novas posturas e conhecimentos para o próprio empoderamento e enriquecimento pessoal' },
  { icon: Medicine, title: 'Exames e medicamentos de última geração', content: 'Temos um portfólio medicamento de ponta, moderno, em nossa farmácia que é própria e dentro da instituição' },
  { icon: Ambulance, title: 'Equipagem hospitalar', content: 'A equipagem hospitalar está presente em vários ambientes, como os carrinhos de emergência (para PCRs ou paradas cardiorrespiratórias), camas hospitalares residenciais e nossa ambulância' }
]

export default function Service() {
  return (
    <Fade bottom duration={1000}>
      <div className={styles.service}>
        <div className={styles.wrapper}>
          <div className={styles.head}>
            <h2>O que oferecemos</h2>
            <h3>Não medimos esforços para garantir uma recuperação efetiva e estadia segura</h3>
          </div>
          <div className={styles.body}>
            <ul>
              {service.map(({ icon: Icon, title, content }, idx) => (
                <li key={idx}>
                  <Icon/>
                  <div>
                    <h4>{title}</h4>
                    <p>{content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  )
}
