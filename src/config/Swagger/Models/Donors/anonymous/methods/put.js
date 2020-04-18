const put = {
  summary: 'Atualiza Doador (Anônimo)',
  tags: ['donors'],
  description: 'Atualiza os dados de um doador anônimo na plataforma.',
  parameters: [
    {
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'string',
        example: '5e9a0f5f2f6df55a20576ea1',
      },
      style: 'simple',
    },
  ],
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
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

export default put;
