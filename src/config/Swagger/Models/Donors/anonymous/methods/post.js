const post = {
  summary: 'Registra Doador (Anônimo)',
  tags: ['donors'],
  description: 'Registra os dados de um doador na plataforma.',
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
            cpf: {
              type: 'string',
              example: '11122233344',
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
            email: {
              type: 'string',
              format: 'email',
              example: 'example@example.com',
              required: true,
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
    201: {
      description: 'Cadastro efetuado com sucesso',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '5e97c9515b14a454c8dd8460',
              },
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
              email: {
                type: 'string',
                example: 'example@example.com',
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
              anonymous: {
                type: 'boolean',
                example: false,
              },
              disabled: {
                type: 'boolean',
                example: false,
              },
            },
          },
        },
      },
    },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

export default post;
