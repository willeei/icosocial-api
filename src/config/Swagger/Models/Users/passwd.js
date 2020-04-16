const recover = {
  put: {
    summary: 'Recuperação de senha',
    tags: ['Users'],
    description:
      'Cria uma nova senha para o usuário que é enviada direto para seu e-mail cadastrado.',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: {
                type: 'string',
                format: 'email',
                example: 'example@example.com',
                required: true,
              },
            },
          },
        },
      },
    },
    responses: {
      204: { description: 'Senha enviada para o e-mail cadastrado' },
      400: { description: 'Requisição inválida' },
      500: { description: 'Erro interno no servidor' },
    },
  },
};

const update = {
  put: {
    summary: 'Altera senha',
    tags: ['Users'],
    security: [{ bearerAuth: [] }],
    description:
      'Altera senha de usuário após a solicitação de recuperação da senha.',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              password: {
                type: 'string',
                format: 'password',
                example: '947857wr#',
                required: true,
                minLength: 6,
              },
              confirmPassword: {
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
      200: {
        description: 'Cadastro efetuado com sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'string',
                  example: 'Password changed',
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
  },
};

export { recover, update };
