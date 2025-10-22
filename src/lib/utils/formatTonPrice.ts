const tonFormatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
});

export const formatTonPrice = (value: number): string =>
  tonFormatter.format(value);
