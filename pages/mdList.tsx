import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import marked from 'marked'

type Props = {
  filename: string,
  markdown: string
}

const parseMd = (md: string) => {
  const splitted = md.split('\n')
  const splitter =
    splitted.findIndex(line => line.trim().startsWith('---'))
  const headers =
    splitted
      .slice(0, splitter)
      .filter(line => line.trim().length > 0)
      .reduce((accum, line) => {
        const index = line.indexOf(':')
        const key = line.substring(0, index).trim()
        const value = line.substring(index + 1).trim()
        return {
          ...accum,
          [key]: value
        }
      }, {})
  console.log(headers)
  const mdHtml =
    marked(
      splitted.slice(splitter + 1).join('\n')
    )
  return [headers, mdHtml]
}

export function MdList(props: Props) {
  const {filename, markdown} = props
  const [headers, mdHtml] = parseMd(markdown)

  return (
    <div className={styles.card}>
      <h3>{headers.title} &rarr; </h3>
      <p>{headers.abstract}</p>
    </div>
  )
}