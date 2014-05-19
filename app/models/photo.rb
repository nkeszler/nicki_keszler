class Photo

  include DataMapper::Resource
  include Paperclip::Resource

  property :id, Serial

  belongs_to :post

  has_attached_file :picture,
            :url => "/system/:attachment/:id/:style/:basename.:extension",
            :path => "/Users/Nicki/Projects/nicki_keszler/public/system/:attachment/:id/:style/:basename.:extension"

end