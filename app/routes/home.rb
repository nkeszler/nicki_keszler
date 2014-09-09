class NickiKeszler < Sinatra::Application

	get '/' do 
    redirect to('/blog')
		# @img_src = '/images/leaping.jpg'
		# haml :home
	end

end