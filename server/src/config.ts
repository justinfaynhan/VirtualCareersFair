interface IServerConfig {
  PORT: string | number;
  DB: {
    URL: string;
    options: {}
  };
  AUTH: {
    salt_rounds: string | number;
    JWT: {
      SECRET: string;
    }
  };
  ADMIN: {
    default: {
      EMAIL: string;
      PASSWORD: string;
    }
  };
  MODE: 'DEV' | 'PROD'
}

const ServerConfig: IServerConfig = {
  PORT: process.env.VCF_PORT || 3000,
  DB: {
    URL: process.env.VCF_DB_URL || 'mongodb://localhost:27017/',
    options: {
      dbName: 'vcf',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      autoIndex: true
    }
  },
  AUTH: {
    salt_rounds: 10,
    JWT: {
      SECRET: process.env.VCF_AUTH_JWT_SECRET || 'hellohihithisisaV3ryImportantS3CreTh@h@h@_'
    }
  },
  ADMIN: {
    default: {
      EMAIL: process.env.VCF_ADMIN_DEFAULT_EMAIL || 'justinnhan@hotmail.com',
      PASSWORD: process.env.VCF_ADMIN_DEFAULT_PASSWORD || 'hihihihihihi123'
    }
  },
  MODE: process.env.VCF_MODE === 'PROD' ? 'PROD' : 'DEV'
}

export default ServerConfig;