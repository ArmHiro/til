import styles from '../styles/Home.module.css'
import {MdList, Props as MdListProps} from '../components/mdList'
import { useEffect, useState } from 'react'

const fetchMd = async (filename: string) => {
  const res = await fetch(
    `md/${filename}`
  )
  const text = await res.text()

  return text
}

const fetchMdList = async () => {
  const res = await fetch(
    'md/md.lst'
  )
  const text = await res.text()
  return text
    .split('\n')
    .map(t => t.trim())
    .filter(t => t.length > 0)
}

const NUM_OF_MD_IN_PAGE = 10

export default function Main() {
  const [mdNameList, setMdNameList] = useState([] as string[])
  const [index, setIndex] = useState(0)
  const [mdList, setMdList] = useState([] as MdListProps[])

  useEffect(() => {
    (async () => {
      const list = await fetchMdList()

      setMdNameList(list)
    })()
    
  }, []);

  useEffect(() => {
    (async () => {
      const mds = await Promise.all(
        mdNameList.slice(
          index * NUM_OF_MD_IN_PAGE,
          (index + 1) * NUM_OF_MD_IN_PAGE
        ).map(async name => ({
          filename: name,
          markdown: await fetchMd(name)
        } as MdListProps))
      )
      setMdList(mds)
    })()
  }, [mdNameList, index])

  return (<>
    <div className={styles.grid}>
      {mdList.length > 0 ?
        mdList.map(MdList) :
        <div>Loading</div>
      }
    </div>
  </>)
}
