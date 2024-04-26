export type FilterType = {
  all: boolean;
  noTransfers: boolean;
  transfers: Record<number, boolean>;
};
