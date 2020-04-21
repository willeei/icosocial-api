const put = {
  summary: 'Atualiza Doador',
  tags: ['volunteers'],
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
            },
            cpf: {
              type: 'string',
              example: '11122233344',
            },
            cell_phone: {
              type: 'string',
              example: '81999998888',
            },
            telephone: {
              type: 'string',
              example: '8135250000',
            },
            state: {
              type: 'string',
              example: 'PE',
            },
            country: {
              type: 'string',
              example: 'Brasil',
            },
            city: {
              type: 'string',
              example: 'Recife',
            },
            address: {
              type: 'string',
              example: 'Rua Esperança',
            },
            zip_code: {
              type: 'string',
              example: '54737200',
            },
            number: {
              type: 'string',
              example: '111',
            },
            complement: {
              type: 'string',
              example: 'Em frente ao Banco',
            },
            date_of_birth: {
              type: 'string',
              example: '11101987',
            },
            info: {
              type: 'string',
              example: 'Ajudar com aulas de inglês.',
            },
            disabled: {
              type: 'boolean',
              example: false,
            },
            user_id: {
              type: 'string',
              example: '5e97c9515b14a454c8dd8460',
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

const putActiveById = {
  summary: 'Ativa Voluntário',
  tags: ['volunteers'],
  security: [{ bearerAuth: [] }],
  description: 'Ativa o cadastro de um voluntário na plataforma.',
  responses: {
    204: { description: 'Atualização efetuada com sucesso' },
    401: { description: 'Token não existe ou está inválido' },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

export { put, putActiveById };
