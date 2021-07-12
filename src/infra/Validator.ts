import Report from './Report';

export abstract class Validator {
  public reports: Report[];

  constructor() {
    this.reports = [];
  }

  public isRequired(value: any, name: string, message: string) {
    if (!value || value.length <= 0) {
      this.reports.push({ name, message });
    }
  }

  public isGreaterThan(valuea: number, valueb: number, name: string, message: string) {
    if (valuea > valueb) {
      this.reports.push({ name, message });
    }
  }

  public isGreaterOrEqualsThan(valuea: number, valueb: number, name: string, message: string) {
    if (valuea >= valueb) {
      this.reports.push({ name, message });
    }
  }

  public isLessThan(valuea: number, valueb: number, name: string, message: string) {
    if (valuea < valueb) {
      this.reports.push({ name, message });
    }
  }

  public hasMinLen(value: string, min: number, name: string, message: string) {
    if (!value || value.length < min) {
      this.reports.push({ name, message });
    }
  }

  public hasMaxLen(value: any, max: number, name: string, message: string) {
    if (!value || value.length > max) {
      this.reports.push({ name, message });
    }
  }

  public isValidEmail(value: string, name: string, message: string) {
    const REGULAR_EXPRESSION = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!REGULAR_EXPRESSION.test(value)) {
      this.reports.push({ name, message });
    }
  }

  public isValidNumber(value: any, name: string, message: string) {
    if (isNaN(Number(value))) {
      this.reports.push({ name, message });
    }
  }
}
