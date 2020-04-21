const remove = {
  summary: 'Desativa Voluntário',
  tags: ['volunteers'],
  security: [{ bearerAuth: [] }],
  description: 'Desativa os dados de um voluntário na plataforma.',
  responses: {
    204: { description: 'Desativação efetuada com sucesso' },
    401: { description: 'Token não existe ou está inválido' },
    400: { description: 'Requisição inválida' },
    500: { description: 'Erro interno no servidor' },
  },
};

export default remove;
