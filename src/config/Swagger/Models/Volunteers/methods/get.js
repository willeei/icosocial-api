const get = {
  summary: 'Busca Voluntários',
  tags: ['volunteers'],
  security: [{ bearerAuth: [] }],
  description: 'Busca todos os Voluntários na plataforma.',
  responses: {
    200: {
      description: 'Busca efetuada com sucesso',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
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
    },
    401: { description: 'Token não existe ou está inválido' },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

const profile = {
  summary: 'Busca Voluntário',
  tags: ['volunteers'],
  security: [{ bearerAuth: [] }],
  description: 'Busca dados do voluntário logado na plataforma.',
  responses: {
    200: {
      description: 'Busca efetuado com sucesso',
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
    401: { description: 'Token não existe ou está inválido' },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

const getById = {
  summary: 'Busca Voluntário',
  tags: ['volunteers'],
  description: 'Busca dados do voluntário pelo ID na plataforma.',
  responses: {
    200: {
      description: 'Busca efetuado com sucesso',
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
    401: { description: 'Token não existe ou está inválido' },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

export { get, profile, getById };
