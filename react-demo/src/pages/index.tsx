import styles from './index.less';
import React from 'react';
window.React = React
import RemoteBaseComponent from '@/components/remote.js'

export default function IndexPage() {
  return (
    <div>
      <RemoteBaseComponent url="http://127.0.0.1:8080/index.js" />
      <h1 className={styles.title}>demo11111111111111111111111</h1>
    </div>
  );
}
