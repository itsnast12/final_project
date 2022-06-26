import React from 'react'
import Resource from '../Resource/Resource'
import s from './ResourcesContainer.module.sass'

export default function ResourcesContainer() {

    const data =[
        {
            "id": 1,
            "photo": "fff",
            "text": "Significant reading has more info number",
            "description": "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
            "date": "October 6, 2021"
        },
        {
            "id": 2,
            "photo": "fff",
            "text": "Many variations of pass majority have suffered",
            "description": "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
            "date": "October 6, 2021"
        },
        {
            "id": 1,
            "photo": "fff",
            "text": "Words which don’t look even slightly believable",
            "description": "Podcasting operational change management inside of workflows to establish a framework.",
            "date": "October 6, 2021"
        }
    ]

  return (
    <div className={s.container}>
         <div className={s.up}>
            <p className={s.header}>Articles & Resources</p>
            <div className={s.line}></div>
        </div>

        <div className={s.main}>
              {data.map(resource => <Resource key={resource.id} data={resource}/>)}
        </div>

    </div>
  )
}
