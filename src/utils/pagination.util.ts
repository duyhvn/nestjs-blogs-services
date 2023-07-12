import { QueryListModel } from 'src/common/dtos/queryList.dto';
import {ENDPOINT_URL} from "../constants/endpoint.url.constant";

export const generateCursor = (
  cursor: string,
  resourceType: ENDPOINT_URL,
  query: QueryListModel,
) => {
  const first = !!query?.$first ? `&$first=${query.$first}` : '';
  const expand = !!query?.$expand ? `&$expand=${query.$expand}` : '';
  return `${process.env.APP_API}${resourceType}?$cursor=${cursor}${first}${expand}`;
};
