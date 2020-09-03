import { DataValue } from './data-value.model';

export interface ItemData<T> {
  item: T;
  weight: DataValue;
}
