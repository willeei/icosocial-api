const files = {
  post: {
    summary: 'Registra Arquivo',
    tags: ['Files'],
    security: [{ bearerAuth: [] }],
    description: 'Registra um novo arquivo para ser usado na plataforma.',
    requestBody: {
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              file: {
                type: 'string',
                format: 'binary',
                required: true,
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Arquivo salvo com sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '5e9885925615df23600b691f',
                },
                name: {
                  type: 'string',
                  example: '031b183e58733b1ae2a87d808a7722e2.jpg',
                },
                path: {
                  type: 'string',
                  example: '031b183e58733b1ae2a87d808a7722e2.jpg',
                },
                url: {
                  type: 'string',
                  example: `${process.env.APP_URL}/files/05281bbc7c90eefe275dadcd77f743e3.jpg`,
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

export default files;
