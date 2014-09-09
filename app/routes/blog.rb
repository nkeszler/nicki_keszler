require 'json'

class NickiKeszler < Sinatra::Application

  def make_paperclip_mash(file_hash)
    mash = Mash.new
    mash['tempfile'] = file_hash[:tempfile]
    mash['filename'] = file_hash[:filename]
    mash['content_type'] = file_hash[:type]
    mash['size'] = file_hash[:tempfile].size
    mash
  end

  get '/blog' do 
    @img_src = '/images/selfie.jpg'
    @posts = Post.all
    haml :'/blog/index'
  end

  get '/blog/new' do
    haml :'/blog/new'
  end

  post '/blog' do
    @post = Post.new
    @post.title = params[:title]
    @post.text = params[:text]
    @post.photo = Photo.new()
    time = Time.new
    @post.date = time.strftime("%d/%m/%y")
    if @post.save
      redirect('/blog')
    end
  end

  get '/blog_posts' do
    content_type :json

    posts = Post.all

    return {posts: posts}.to_json

  end

end