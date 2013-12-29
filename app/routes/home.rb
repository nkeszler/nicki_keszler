class NickiKeszler < Sinatra::Application

	get '/' do 
		haml :home
	end

end