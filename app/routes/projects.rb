class NickiKeszler < Sinatra::Application

	get '/' do 
		@img_src = '/images/trio.jpg'
		haml :projects
	end

end