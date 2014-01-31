class NickiKeszler < Sinatra::Application

	get '/contact' do 
		@success = params[:success]
		@img_src = '/images/trio.jpg'
		haml :contact
	end

	post '/send' do 
		require 'pony'

		begin
			Pony.mail({
				:from => params[:from],
		    :to => 'nkeszler10@gmail.com',
		    :subject => 'nickikeszler.com - ' + params[:subject],
		    :body => params[:email_content]
	    })
	  rescue error 
	  	redirect('/contact?success=false')
	  end

    redirect('/contact?success=true')
	end

end