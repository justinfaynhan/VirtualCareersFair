interface IServerConfig {
  PORT: string | number;
  DB: {
    URL: string;
    options: {}
  };
  AUTH: {
    salt_rounds: string | number;
  }
}

const ServerConfig: IServerConfig = {
  PORT: process.env.VCF_PORT || 3000,
  DB: {
    URL: process.env.VCF_DB_URL || 'mongodb://localhost:27017/',
    options: {
      dbName: 'vcf',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  },
  AUTH: {
    salt_rounds: 10,
  }
}

export default ServerConfig;