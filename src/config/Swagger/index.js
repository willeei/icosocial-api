import Models, {
  Accounts,
  Auth,
  Files,
  Users,
  UsersPasswd,
  Donors,
  Volunteers,
} from './Models';

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
    '/donors': Donors.Donor,
    '/donors/profile': Donors.profile,
    '/donors/anon': Donors.AnonymousDonor.post,
    '/donors/anon/:cpf': Donors.AnonymousDonor.get,
    '/donors/anon/:id': Donors.AnonymousDonor.byId,
    '/account/active': Accounts.active,
    '/account/disable': Accounts.disable,
    '/volunteers': Volunteers.Voluntary,
    '/volunteers/:id': Volunteers.findById,
    '/volunteers/profile': Volunteers.profiles,
    '/volunteers/active/:id': Volunteers.activeById,
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
