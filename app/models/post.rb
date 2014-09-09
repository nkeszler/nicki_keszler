class Post

  include DataMapper::Resource

  property :id, Serial                       
  property :title, String
  property :text, Text 
  property :date, String

  has 1, :photo

end