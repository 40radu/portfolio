import React from 'react'
import Icon, { IconType } from '../../Icon'
import "./style.scss"

export interface ServiceItemProps {
  title: string;
  service: string[];
  icon: keyof IconType
}

function ServiceItem(props: ServiceItemProps) {
  const { service, title, icon } = props
  return (
    <div className='service-item'>
      <Icon name={icon} />
      <div className='service-item_text'>
        <h4>{title}</h4>
        <ul>
          {service.map((s, id) => {
            return <li key={`service-${id}`}>{s}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ServiceItem