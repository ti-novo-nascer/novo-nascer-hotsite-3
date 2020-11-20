export default function emailTemplate(
  origin: string,
  name: string,
  email: string,
  phone: string,
  city: string,
  healthPlan: string,
  details: string
) {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contato de Cliente</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
        .wrapper {
          max-width: 720px;
          padding: 20px 40px;
          background-color: #EFECE5;
          border-radius: 8px;
        }
        .heading {
          font-family: 'DM Serif Text', serif;
          font-size: 32px;
          color: #5076B8;
          text-align: center;
        }
        .label {
          font-family: 'Poppins', sans-serif;
          font-weight: bold;
          font-size: 16px;
          color: #A09678;
        }
        .label span {
          font-weight: normal;
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <h1 class="heading">Contato de Cliente</h1>
        <p class="label">Origem: <span>${origin}</span></p>
        <p class="label">Nome: <span>${name}</span></p>
        <p class="label">Email: <span>${email}</span></p>
        <p class="label">Telefone: <span>${phone}</span></p>
        <p class="label">Cidade: <span>${city}</span></p>
        <p class="label">Plano de Saúde: <span>${healthPlan}</span></p>
        <p class="label">Detalhes: <span>${details}</span></p>
      </div>
    </body>
    </html>
  `
}
