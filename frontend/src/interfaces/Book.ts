export default interface BookType {
  id: number;
  attributes: {
    name: string;
    author: string;
    description?: string;
  }
}