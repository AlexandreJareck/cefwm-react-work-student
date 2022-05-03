export class MoneyFormatter {
  private static formatter: Intl.NumberFormat;

  private constructor() {}

  private static getInstance(): Intl.NumberFormat {
    if (!MoneyFormatter.formatter) {
      MoneyFormatter.formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
    return MoneyFormatter.formatter;
  }

  public static format(value?: number) {
    value = value || 0;

    return MoneyFormatter.getInstance().format(value);
  }
}
