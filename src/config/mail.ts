interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}
export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'tonn.oliveira2011@gmail.com',
      name: 'Everton Desenvolvedor',
    },
  },
} as IMailConfig;
