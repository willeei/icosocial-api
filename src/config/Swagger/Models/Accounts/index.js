const active = {
  put: {
    summary: 'Ativa conta',
    tags: ['Accounts'],
    description: 'Ativa uma conta que esteja desativada.',
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
            },
          },
        },
      },
    },
    responses: {
      204: { description: 'Conta ativada com sucesso' },
      400: { description: 'Requisição inválida' },
      500: { description: 'Erro interno no servidor' },
    },
  },
};
const disable = {
  delete: {
    summary: 'Desativa conta do usuário',
    tags: ['Accounts'],
    security: [{ bearerAuth: [] }],
    description: 'Desativa a conta do usuário logado.',
    responses: {
      204: { description: 'Conta desativada com sucesso' },
      401: { description: 'Token não existe ou está inválido' },
      400: { description: 'Requisição inválida' },
      500: { description: 'Erro interno no servidor' },
    },
  },
};

export { active, disable };
