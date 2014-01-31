class NickiKeszler < Sinatra::Application

	get '/' do 
		@img_src = '/images/leaping.jpg'
		haml :home
	end

end