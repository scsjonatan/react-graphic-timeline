// Dependencies
import React, { useContext, useState } from 'react'

// Context
import { DateContext } from '../../contexts'

// Styles
import styles from './styles.css'


function renderTopItem({ title, image, color, id }) {
  return (
    <div className={styles.TopItem}>
      <p style={{ color }}>{title}</p>
      <img src={image} alt={title} />
    </div>
  )
}

export default function TopElement() {
  const { topItem } = useContext(DateContext)
  return topItem ? renderTopItem(topItem) : null
}
