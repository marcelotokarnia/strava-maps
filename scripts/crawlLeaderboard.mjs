#!/bin/node
import axios from 'axios'
import fs from 'fs'
import puppeteer from 'puppeteer-core'
import wait from 'waait'

const GENDER = 'M'
let i = 1 // just for consoling progress purpose
// const BOUNDS = [59.35068, 18.014816, 59.401343, 18.258195] // STOCKHOLM
const BOUNDS = [59.3784, 18.008432, 59.416227, 18.094667] // DANDERYD NEIGHBOURHOOD
const INC = 0.01
const divideBounds = () => {
  const [startLat, referenceLng, endLat, endLng] = BOUNDS
  const bounds = []
  let myLat = startLat
  while (myLat < endLat) {
    let myLng = referenceLng
    while (myLng < endLng) {
      bounds.push([myLat, myLng, myLat + INC, myLng + INC])
      myLng += INC
    }
    myLat += INC
  }
  return bounds
}

const authenticatePuppeteer = async page => {
  const url = `https://www.strava.com/segments/14927298/leaderboard?filter=overall&gender=${GENDER}&partial=true`
  await page.goto(url)
  await page.click('.fb-button')
  await page.waitForNavigation({ waitUntil: 'load' })
  await page.type('#email', 'marcelo.tokarnia@gmail.com')
  await page.type('#pass', process.env.FACEBOOKPASS)
  await page.click('#loginbutton')
  await page.waitForNavigation({ waitUntil: 'load' })
}

const crawlLeaderboard = async (page, id) => {
  const url = `https://www.strava.com/segments/${id}/leaderboard?filter=overall&gender=${GENDER}&partial=true`
  await page.goto(url)
  await wait(500)

  const [
    myCurrentPosition,
    totalAthletes,
    myTime,
    bestPace,
    _,
    bestTime,
  ] = await page.evaluate(() => [
    ...[...document.querySelector('.standing .text-title1').textContent.split('/')].map(a =>
      a.trim()
    ),
    document.querySelector('.time .text-title1').textContent.trim(),
    ...document
      .querySelector('.table-leaderboard tbody tr')
      .textContent.split('\n')
      .filter(Boolean)
      .slice(-3),
  ])
  console.log(i++)
  return { bestPace, bestTime, myCurrentPosition, myTime, totalAthletes }
}

const getPuppeteerOptions = () => ({
  product: 'chrome',
  args: [],
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: false,
})

const main = async () => {
  const splitBounds = divideBounds()
  const segments = []
  for (const bound of splitBounds) {
    const { data } = await axios.get(
      `https://www.strava.com/api/v3/segments/explore?bounds=${decodeURIComponent(
        bound
      )}&activity_type=running&min_cat=0max_cat=5`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER}`,
        },
      }
    )
    segments.push(...data.segments)
    await wait(1000)
  }

  const browser = await puppeteer.launch(getPuppeteerOptions())
  const page = await browser.newPage()
  await page.setViewport({ width: 1680, height: 1030, deviceScaleFactor: 1 })
  await authenticatePuppeteer(page)
  const results = []
  console.log('segments length: ', segments.length)
  for (const seg of segments) {
    results.push({
      ...(await crawlLeaderboard(page, seg.id)),
      distance: seg.distance,
      elev_difference: seg.elev_difference,
      id: seg.id,
      name: seg.name,
    })
  }
  fs.writeFile(`private/crawled-leaderboard.json`, JSON.stringify(results), err => {
    if (err) {
      throw err
    }
  })
}

main()
