import styles from '../styles/Home.module.css'
import {markdown} from './markdown'

export type Props = {
  filename: string,
  markdown: string
}

export function MdList(props: Props) {
  const {filename, markdown: raw} = props
  const [mdHtml, headers] = markdown(filename, raw).parse()

  return (
    <div className={styles.card} key={filename}>
      <h3>{headers.title} &rarr; </h3>
      <p>{headers.abstract}</p>
    </div>
  )
}
