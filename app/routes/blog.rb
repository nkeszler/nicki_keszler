require 'json'

class NickiKeszler < Sinatra::Application

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
    @post.photo = params[:image]
    time = Time.now
    @post.date = "#{time.day}/#{time.month}/#{time.year}"
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