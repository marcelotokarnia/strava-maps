#!/bin/node
import fs from 'fs'
import puppeteer from 'puppeteer-core'
import wait from 'waait'

const authenticatePuppeteer = async page => {
  const loginUrl = `https://wiki4fit.com.br/login.php`
  await page.goto(loginUrl)
  await page.type('#email', process.env.WIKI4FIT_EMAIL)
  await page.type('[type="password"]', process.env.WIKI4FIT_PASSWORD)
  await page.click('.login100-form-btn')
  await page.waitForNavigation({ waitUntil: 'load' })
}

const criarAluno = async page => {
  const alunosUrl = `https://wiki4fit.com.br/alunos.php`
  await page.goto(alunosUrl)

  await page.waitForSelector('.page-content > .row > form > .col-md-6 > .btn-outline')
  await page.click('.page-content > .row > form > .col-md-6 > .btn-outline.inserir')

  await page.waitForSelector('#nome')

  const nome = 'TESTE'
  await page.type('#nome', nome)

  const sobrenome = 'TESTESTE'
  await page.type('#sobrenome', sobrenome)

  const email = 'marcelo.tokarnia@gmail.com'
  await page.type('#email', email)

  const matricula = '123123123'
  await page.type('#matricula', matricula)

  const whatsapp = '61998106079'
  await page.type(
    '#formAluno > .modal-body > #formgroup-whatsapp > #whatsappNumero > .vti__input',
    whatsapp
  )

  const professor = '12041' // ID do Grilo
  await page.select('#equipe_id', professor)

  await page.type('#dt_nascimento', '26/09/1990')

  await page.click('.modal-footer .btn-salvar')
  await page.waitForSelector('.swal-modal')

  await page.click('.swal-modal .swal-footer .swal-button--confirm')
  await page.waitForNavigation({ waitUntil: 'load' })
}

const criarTreino = async page => {
  await page.waitForSelector('#treinoDiv > #divTreino > .portlet-title > .actions > .btn')
  await page.click('#treinoDiv > #divTreino > .portlet-title > .actions > .btn')

  const nome = 'nome do treino'
  await page.type('#nome', nome)

  await page.type('#periodo_treino', `20/07/2022 até 30/08/2022`)

  const professor = '12041' // ID do Grilo
  await page.select('#equipe_id', professor)

  await page.type('#objetivo', 'BIRLLLL')
  await page.click(
    '#modalTreino > .modal-dialog > .modal-content > form > .modal-footer > .btn-primary'
  )
  await page.waitForNavigation({ waitUntil: 'load' })
}

const getPuppeteerOptions = () => ({
  product: 'chrome',
  args: [],
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: false,
})

const main = async () => {
  const browser = await puppeteer.launch(getPuppeteerOptions())
  const page = await browser.newPage()
  await page.setViewport({ width: 1680, height: 1030, deviceScaleFactor: 1 })
  await authenticatePuppeteer(page)
  await criarAluno(page)
  await criarTreino(page)
}

main()
