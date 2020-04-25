interface BaseObject {
  id: number;
  parentId: number | null;
}

interface NestObject {
  id: number;
  parentId: number | null;
  children: NestObject[] | [];
}

const nest = (items: BaseObject[], id: number | null = null, link = 'parentId'): NestObject[] => items
  .filter((item) => item[link] === id)
  .map((item) => ({ ...item, children: nest(items, item.id) }));

export default nest;
