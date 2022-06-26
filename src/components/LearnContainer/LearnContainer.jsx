import React from 'react'
import Learn from '../Learn/Learn'
import s from './LearnContainer.module.sass'
import photo from './photo.png'

export default function LearnContainer() {

  const data =[
    {
      "id": "01",
      "description": "Use HDFS & Map Reduce for storing & analyzing data at scale."
    },
    {
      "id": "02",
      "description": "Consume streaming data using Spark Streaming, Flink, and Storm."
    },
    {
      "id": "03",
      "description": "Choose an appropriate data storage technology for your application"
    },
    {
      "id": "04",
      "description": "Analyze non-relational data using HBase, Cassandra, and MongoDB."
    }
  ]

  return (
    <div>
        <div className={s.up}>
            <p className={s.header}>What Will You Learn?</p>
            <div className={s.line}></div>
        </div>

        <div className={s.main}>
            <div className={s.card}>
              {data.map(learn => <Learn key={learn.id} data={learn}/>)}
            </div>

            <div className={s.photo}>
              <div className={s.frame}>
                <img src={photo}></img>
              </div>
            </div>

        </div>

    </div>
  )
}
