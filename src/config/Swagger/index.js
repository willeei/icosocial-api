import Models, { Accounts, Auth, Files, Users, UsersPasswd } from './Models';

const swaggerDocuments = {
  openapi: '3.0.1',
  schemes: ['http', 'https'],
  host: process.env.APP_URL,
  basePath: '/api/v1',
  info: Models.info,
  components: Models.components,
  tags: Models.tags,
  definitions: {},
  paths: {
    '/auth': Auth,
    '/users': Users,
    '/users/passwd/recover': UsersPasswd.recover,
    '/users/passwd/update': UsersPasswd.update,
    '/donors': {},
    '/donors/anonymous': {},
    '/account/active': Accounts.active,
    '/account/disable': Accounts.disable,
    '/files': Files,
  },
  servers: [
    {
      url: process.env.APP_URL,
      description: 'Servidor da API',
    },
  ],
};

export default swaggerDocuments;
