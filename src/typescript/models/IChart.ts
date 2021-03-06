export interface IChart {
  active: boolean;
  antiWhale: any;
  aprDaily: number;
  aprWeekly: number;
  aprYearly: number;
  apyYearly: number;
  asset: string;
  assetAddress: any;
  assetId: string;
  assetLockup: boolean;
  assetPopupMessage: any;
  assetPrice: number;
  auditInfo: string;
  blockchain: string;
  category: any;
  collateralLockPeriod: any;
  d_active_reason: any;
  dateAdded: string;
  dateEnding: any;
  dateStarted: any;
  dateUpdated: string;
  daysRemaining: any;
  depositFee: any;
  exchangeName: any;
  exchangePicture: any;
  exchangeUrl: any;
  exchangeVersion: any;
  farm: string;
  farmId: string;
  farmImage: any;
  farmName: string;
  farmType: any;
  feeAprYearly: number;
  harvestLockup: any;
  harvestLockupInfo: any;
  impermanentLoss: any;
  impermanentLoss30d: any;
  info: any;
  investmentLink: any;
  manuallyCalculatedAPR: boolean;
  maxPoolCap: any;
  multiplier: any;
  nativeToken: any;
  nativeTokenAddress: any;
  nativeTokenInvestLink: any;
  nativeTokenMarketCap: number;
  nativeTokenPrice: number;
  new_asset: boolean;
  otherFees: any;
  otherPoolEconomicsInfo: any;
  pid: number;
  poolAlreadyFilled: boolean;
  priceCorrelation_30d: any;
  rewardTokenA: any;
  rewardTokenAAddress: any;
  rewardTokenAAprYearly: number;
  rewardTokenAAprYearlyMaxBoosted: number;
  rewardTokenAPrice: number;
  rewardTokenAWeeklyAmount: number;
  rewardTokenAWeeklyDollarAmount: number;
  rewardTokenB: any;
  rewardTokenBAddress: any;
  rewardTokenBAprYearly: number;
  rewardTokenBAprYearlyMaxBoosted: number;
  rewardTokenBPrice: number;
  rewardTokenBWeeklyAmount: number;
  rewardTokenBWeeklyDollarAmount: number;
  scam: boolean;
  scamInfo: any;
  selected_farm: ISelectedFarm[];
  stakingAddress: any;
  stakingLink: string;
  status: string;
  tokenA: any;
  tokenAAddress: any;
  tokenABacking: number;
  tokenAHolders: number;
  tokenAHoldersHistory: ITokenAHoldersHistory[];
  tokenAPicture: any;
  tokenAPrice: number;
  tokenAPriceHistory: ITokenAPriceHistory[];
  tokenB: any;
  tokenBAddress: any;
  tokenBBacking: number;
  tokenBHolders: number;
  tokenBPicture: any;
  tokenBPrice: number;
  tokenC: any;
  tokenCAddress: any;
  tokenCBacking: number;
  tokenCHolders: number;
  tokenCPicture: any;
  tokenCPrice: number;
  tokenD: any;
  tokenDAddress: any;
  tokenDBacking: number;
  tokenDHolders: number;
  tokenDPicture: any;
  tokenDPrice: number;
  tokenE: any;
  tokenEAddress: any;
  tokenEBacking: number;
  tokenEHolders: number;
  tokenEPicture: any;
  tokenEPrice: number;
  transferTax: any;
  transferTaxInfo: any;
  tvlChange24h: string;
  tvlChange24hValue: number;
  tvlExchange: number;
  tvlFarm: number;
  tvlStaked: number;
  underlyingFarm: any;
  url: string;
  vaultAddress: any;
  volume_24h: any;
  weight: any;
  withdrawalFee: any;
  yearlyTokenRewardPool: number;
  yieldType: string;
}

export interface ISelectedFarm {
  active: boolean;
  blockchain: string;
  dateAdded: string;
  dateUpdated: string;
  farmId: string;
  farmName: string;
  farmType: string;
  lastFullUpdate: string;
  scam: boolean;
  scamInfo: string;
  tvlChange24h: string;
  tvlChange24hValue: number;
  tvlStaked: number;
  tvlStakedHistory: ITvlStakedHistory[];
}

export interface ITvlStakedHistory {
  date: string;
  value: number;
}

export interface ITokenAHoldersHistory {
  date: string;
  value: number;
}

export interface ITokenAPriceHistory {
  date: string;
  value: number;
}
