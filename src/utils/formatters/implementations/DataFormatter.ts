import { IDataFormatter } from '@gentifly/zeraph/utils/formatters/interfaces/IDataFormatter';

import { Data } from '@gentifly/zeraph/utils/formatters/schemas';

export abstract class DataFormatter<T> implements IDataFormatter<T> {
  public abstract execute: (data: T) => Promise<Data>
}
