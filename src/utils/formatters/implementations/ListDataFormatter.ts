import { IDataFormatter } from '@gentifly/zeraph/utils/formatters/interfaces/IDataFormatter';

import { ListData } from '@gentifly/zeraph/utils/formatters/schemas';

export abstract class ListDataFormatter<T> implements IDataFormatter<T> {
  public abstract execute: (data: T) => Promise<ListData>
}
