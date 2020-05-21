interface IServerConfig {
  PORT: string | number;
  DB: {
    URI: string;
  }
}

const ServerConfig: IServerConfig = {
  PORT: process.env.VCF_PORT || 3000,
  DB: {
    URI: process.env.VCF_DB_URI || ''
  }
}

export default ServerConfig;