class NickiKeszler < Sinatra::Application

	get '/contact' do 
		haml :contact
	end

end