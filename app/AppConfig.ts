export interface IAppConfig {
  isDevMode: boolean;
  isTestnet: boolean;
}

class AppConfig implements IAppConfig {
  public isDevMode!: boolean;
  public isTestnet!: boolean;

  public init(config: IAppConfig) {
    Object.assign(this, config);
  }
}

export default new AppConfig();
