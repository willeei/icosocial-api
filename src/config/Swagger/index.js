import Models, { Accounts, Auth, Files, Users, UsersPasswd } from './Models';

const swaggerDocuments = {
  openapi: '3.0.1',
  info: Models.info,
  components: Models.components,
  tags: Models.tags,
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
      url: `${process.env.APP_URL}/${process.env.BASE_PATH}`,
      description: 'Servidor da API',
    },
  ],
};

export default swaggerDocuments;
