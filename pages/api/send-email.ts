import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { host } = req.headers

  const {
    name,
    email,
    phone,
    city,
    healthPlan,
    details
  } = req.body

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const message = {
    to: 'novonascercontato@gmail.com',
    from: 'ti@novonascer.com.br',
    subject: 'CONTATO DE CLIENTE',
    text: `
      Origem: ${host}
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone}
      Cidade: ${city}
      Plano de Saúde: ${healthPlan}
      Detalhes: ${details}
    `
  }

  sgMail
    .send(message)
    .then(() => {
      res.status(200).send('Mensagem enviada com sucesso')
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send('Erro ao enviar a mensagem')
    })
}
