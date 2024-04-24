namespace my.bookshop;

entity Books {
  key ID : UUID;
  AuthorName:String;
  title  : String;
  Stock  : Integer;
  AuthorNumber:String;
}
