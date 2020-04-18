import { recover, update } from './passwd';

const users = {
  post: {
    summary: 'Cadastra Usuário',
    tags: ['users'],
    description: 'Cadastra um novo usuário na plataforma.',
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
              name: {
                type: 'string',
                example: 'Janete Silva',
                required: true,
              },
              password: {
                type: 'string',
                format: 'password',
                example: '947857wr#',
                required: true,
                minLength: 6,
              },
              type: {
                type: 'string',
                enum: ['DOADOR', 'INSTITUICAO', 'VOLUNTARIO'],
                example: 'DOADOR',
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
                avatar: {
                  type: 'string',
                  example: '5e97c9515b14a454c8dd8460',
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
  put: {
    summary: 'Altera Usuário',
    tags: ['users'],
    security: [{ bearerAuth: [] }],
    description: 'Altera um usuário que esteja logado na plataforma.',
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
                required: false,
              },
              name: {
                type: 'string',
                example: 'Janete Silva',
                required: false,
              },
              oldPassword: {
                type: 'string',
                format: 'password',
                example: '947857wr#',
                required: false,
                minLength: 6,
              },
              password: {
                type: 'string',
                format: 'password',
                example: '778857wr#',
                required: false,
                minLength: 6,
              },
              confirmPassword: {
                type: 'string',
                format: 'password',
                example: '778857wr#',
                required: false,
                minLength: 6,
              },
              type: {
                type: 'string',
                enum: ['DOADOR', 'INSTITUICAO', 'VOLUNTARIO'],
                example: 'DOADOR',
                required: false,
              },
              avatar: {
                type: 'string',
                format: 'uuid',
                example: '5e97c9515b14a454c8dd8460',
                required: false,
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
                avatar: {
                  type: 'string',
                  example: '5e97c9515b14a454c8dd8460',
                },
              },
            },
          },
        },
      },
      401: { description: 'Token não informado ou inválido!' },
      400: { description: 'Requisição inválida' },
      500: { description: 'Erro interno no servidor' },
    },
  },
};

export default users;
export { recover, update };
