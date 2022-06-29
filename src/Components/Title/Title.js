import React from 'react';
import Text from './Text'
import Image from './Image';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.MainContainer}>
      <Text/>
      <Image/>
    </div>
  )
}

export default Title