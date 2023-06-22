import fetch from 'isomorphic-unfetch'
import xml2js from 'xml2js'

const parser = new xml2js.Parser()

export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://s3-eu-west-1.amazonaws.com/feeds.agents-society.com/643-ai-feed-1294373676.xml'
    )
    const content = await response.text()
    const data = await parser.parseStringPromise(content)

    res.status(200).json(data)
  } catch (e) {
    console.log({ e })
  }
}
