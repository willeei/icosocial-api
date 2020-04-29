const donation = {
  post: {
    summary: 'Registra Doação',
    tags: ['donations'],
    security: [{ bearerAuth: [] }],
    description: 'Registra uma doação  na plataforma.',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              value: {
                type: 'number',
                format: 'double',
                example: '50.00',
                required: true,
              },
              donor_id: {
                type: 'string',
                example: '5e97c9515b14a454c8dd8460',
                required: true,
              },
            },
          },
        },
      },
    },
    responses: {
      204: {
        description: 'Cadastro efetuado com sucesso',
      },
      401: { description: 'Token não existe ou está inválido' },
      400: { description: 'Requisição inválida' },
      500: { description: 'Erro interno no servidor' },
    },
  },
};

export default donation;
