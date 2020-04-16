import { object, string } from 'yup';
import packageInfo from '../../package.json';

const swaggerDocuments = {
  swagger: '2.0',
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
    licença: {
      nome: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  securityDefinitions: {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  security: {
    BearerAuth: [],
  },
  consumes: 'application/json',
  produces: 'application/json',
  tags: [
    {
      name: 'User',
    },
    {
      name: 'File',
    },
    {
      name: 'Donor',
    },
  ],
  definitions: {
    UserResponse: {
      type: object,
      properties: {
        _id: {
          type: 'string',
          example: 123,
        },
        login: {
          type: 'string',
          example: 'Janete Silva',
        },
        name: {
          type: 'string',
          example: 'Janete Silva',
        },
        password: {
          type: 'string',
          example: 'Janete Silva',
        },
        active: {
          type: 'boolean',
          example: true,
        },
        type: {
          type: 'string',
          example: 'Janete Silva',
        },
        avatar: {
          type: 'string',
          example: 'Janete Silva',
        },
      },
    },
    UserRequest: {},
  },
  paths: {
    '/users': {
      post: {
        tags: ['User'],
        summary: 'Cadastra Usuário',
        description: 'Cadastra um novo usuário na plataforma.',
        parameters: [
          {
            in: 'body',
            name: 'user',
            schema: {
              type: object,
              properties: {
                login: {
                  type: 'string',
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
                  example: '947857wr#',
                  required: true,
                },
                type: {
                  type: 'string',
                  enum: ['DOADOR', 'INSTITUICAO', 'VOLUNTARIO'],
                  example: 'DOADOR',
                  required: false,
                },
                avatar: {
                  type: 'string',
                  example: '5e97c9515b14a454c8dd8460',
                  required: false,
                },
              },
            },
          },
        ],
        responses: {
          201: {
            description: 'Cadastro efetuado com sucesso',
            schema: {
              type: object,
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
          400: { description: 'Requisição inválida' },
          500: { description: 'Erro interno no servidor' },
        },
      },
      update: {},
    },
    '/users/recoverPasswd': {},
    '/auth': {},
    '/donors': {},
    '/donors/anonymous': {},
    '/account/active': {},
    '/account/disable': {},
    '/files': {},
  },
  servers: [
    {
      url: 'http://localhost:3333/',
      description: 'Local server',
    },
  ],
};

export default swaggerDocuments;
