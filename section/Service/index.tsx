import Container from '@/app/components/common/Container'
import Heading from '@/app/components/common/Heading'
import ServiceItem from '@/app/components/display/ServiceItem'
import "./style.scss"
import { dataService } from './data'

function Service() {
  return (
    <Container className='service' id='h-section' key="service">
      <Heading label='Services' description='Voici un aperçu des services que je peux offrir pour votre projet.' />
      <ul className='service_content'>
        {
          dataService.map((dt, id) => {
            return <ServiceItem key={`dt-${id}`} service={dt.service} title={dt.title} icon={dt.icon} />
          })
        }
      </ul>
    </Container>
  )
}

export default Service