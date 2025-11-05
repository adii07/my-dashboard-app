export type RangeKey = "7d" | "1m" | "1y" | "all";

export type FilterProps = {
  value?: RangeKey;
  onChange?: (val: RangeKey) => void;
  label?: string;
};
