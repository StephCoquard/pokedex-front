export interface FiltersList {
  filters: (IntegerFilter|StringFilter) []
}

export interface IntegerFilter {
  type: string;
  propertyName: string;
  operationType: OperationType;
  value: number;
}

export interface StringFilter {
  type: string;
  propertyName: string;
  value: string;
}

export enum OperationType {
  EQUALS = 'EQUALS',
  GREATER_THAN = 'GREATER_THAN',
  LOWER_THAN = 'LOWER_THAN'
}

export const OperationTypeMapping: Record<OperationType, string> = {
  [OperationType.EQUALS]: "Equals",
  [OperationType.GREATER_THAN]: "Greater than",
  [OperationType.LOWER_THAN]: "Lower than",
}
