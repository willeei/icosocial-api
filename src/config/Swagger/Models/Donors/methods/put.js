const put = {
  summary: 'Atualiza Doador',
  tags: ['donors'],
  security: [{ bearerAuth: [] }],
  description: 'Atualiza os dados de um doador na plataforma.',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'Williams Gomes',
              required: true,
            },
            cell_phone: {
              type: 'string',
              example: '81999998888',
              required: false,
            },
            telephone: {
              type: 'string',
              example: '8135250000',
              required: false,
            },
            state: {
              type: 'string',
              example: 'PE',
              required: true,
            },
            country: {
              type: 'string',
              example: 'Brasil',
              required: true,
            },
            city: {
              type: 'string',
              example: 'Recife',
              required: false,
            },
            address: {
              type: 'string',
              example: 'Rua Esperança',
              required: false,
            },
            zip_code: {
              type: 'string',
              example: '54737200',
              required: false,
            },
            number: {
              type: 'string',
              example: '111',
              required: false,
            },
            complement: {
              type: 'string',
              example: 'Em frente ao Banco',
              required: false,
            },
            date_of_birth: {
              type: 'string',
              example: '11101987',
              required: false,
            },
          },
        },
      },
    },
  },
  responses: {
    204: { description: 'Atualização efetuada com sucesso' },
    401: { description: 'Token não existe ou está inválido' },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

export default put;
