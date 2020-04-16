import packageInfo from '../../package.json';

const swaggerDocuments = {
  openapi: '3.0.1',
  schemes: ['http', 'https'],
  host: process.env.APP_URL,
  basePath: '/api/v1',
  info: {
    version: packageInfo.version,
    title: 'Icósocial API',
    description: packageInfo.description,
    termsOfService: '',
    contact: {
      name: 'Suporte',
      email: 'son.hoang01@gmail.com',
      url: 'https://hoangtran.co',
    },
    license: {
      nome: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  consumes: 'application/json',
  produces: 'application/json',
  tags: [
    {
      name: 'Auth',
    },
    {
      name: 'Users',
    },
    {
      name: 'Files',
    },
    {
      name: 'Donors',
    },
    {
      name: 'Accounts',
    },
  ],
  definitions: {},
  paths: {
    '/auth': {
      post: {
        summary: 'Autenticação do usuário',
        tags: ['Auth'],
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
    },
    '/users': {
      post: {
        summary: 'Cadastra Usuário',
        tags: ['Users'],
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
        tags: ['Users'],
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
    },
    '/users/passwd/recover': {
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
    },
    '/users/passwd/update': {
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
    },
    '/donors': {},
    '/donors/anonymous': {},
    '/account/active': {
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
    },
    '/account/disable': {
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
    },
    '/files': {
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
    },
  },
  servers: [
    {
      url: process.env.APP_URL,
      description: 'Servidor da API',
    },
  ],
};

export default swaggerDocuments;
