import marked from 'marked'

export type Markdown = {
  filename: string,
  raw: string,
  parse: () => [string, {[key: string]: string}]
}

const parseMd = (md: string) => {
  const splitted = md.split('\n')
  const splitter =
    splitted.findIndex(line => line.trim().startsWith('---'))
  const headers: {[key: string]: string} =
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

  const mdHtml =
    marked(
      splitted.slice(splitter + 1).join('\n')
    )
  return [mdHtml, headers]
}

export function markdown(filename: string, raw: string) {
  return {
    filename, raw,
    parse: () => parseMd(raw)
  } as Markdown
}
