export class Book {
  public id: number;
  public title: string;
  public edition: string;
  public language: string;
  public totalQuantity: number;
  public availableQuantity: number;
  public isbn: string;
  public author: string;
  public price: number;
  public publisherId: number;
  public mainCategoryId: number;

  constructor(
    id: number,
    title: string,
    edition: string,
    language: string,
    totalQuantity: number,
    availableQuantity: number,
    isbn: string,
    author: string,
    price: number,
    publisherId: number,
    mainCategoryId: number
  ) {
    this.id = id;
    this.title = title;
    this.edition = edition;
    this.language = language;
    this.totalQuantity = totalQuantity;
    this.availableQuantity = availableQuantity;
    this.isbn = isbn;
    this.author = author;
    this.price = price;
    this.publisherId = publisherId;
    this.mainCategoryId = mainCategoryId;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getEdition(): string {
    return this.edition;
  }

  public getLanguage(): string {
    return this.language;
  }

  public getTotalQuantity(): number {
    return this.totalQuantity;
  }

  public getAvailableQuantity(): number {
    return this.availableQuantity;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getPrice(): number {
    return this.price;
  }

  public getPublisherId(): number {
    return this.publisherId;
  }

  public getMainCategoryId(): number {
    return this.mainCategoryId;
  }
}
