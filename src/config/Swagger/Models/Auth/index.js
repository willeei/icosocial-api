const auth = {
  post: {
    summary: 'Autenticação do usuário',
    tags: ['auth'],
    description: 'Realiza login do usuário na plataforma.',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              login: {
                type: 'string',
                format: 'email',
                example: 'example@example.com',
                required: true,
              },
              password: {
                type: 'string',
                format: 'password',
                example: '947857wr#',
                required: true,
                minLength: 6,
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Login efetuado com sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                user: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '5e97c9515b14a454c8dd8460',
                    },
                    login: {
                      type: 'string',
                      example: 'example@example.com',
                    },
                    name: {
                      type: 'string',
                      example: 'Janete Silva',
                    },
                    type: {
                      type: 'string',
                      example: 'DOADOR',
                    },
                    active: {
                      type: 'boolean',
                      example: true,
                    },
                  },
                },
                token: {
                  type: 'string',
                  example:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzgxZDJiOGQ4ZDY0MmFkYzVmNTZiZSIsIm5hb',
                },
              },
            },
          },
        },
      },
      400: { description: 'Requisição inválida' },
      500: { description: 'Erro interno no servidor' },
    },
  },
};

export default auth;
