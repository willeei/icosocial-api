const remove = {
  summary: 'Desativa Doador',
  tags: ['donors'],
  security: [{ bearerAuth: [] }],
  description: 'Desativa os dados de um doador na plataforma.',
  responses: {
    204: { description: 'Atualização efetuada com sucesso' },
    401: { description: 'Token não existe ou está inválido' },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

export default remove;
