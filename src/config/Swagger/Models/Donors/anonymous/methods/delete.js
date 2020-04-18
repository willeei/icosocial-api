const remove = {
  summary: 'Desativa Doador (Anônimo)',
  tags: ['donors'],
  description: 'Desativa os dados de um doador anônimo na plataforma.',
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
  responses: {
    204: { description: 'Atualização efetuada com sucesso' },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

export default remove;
