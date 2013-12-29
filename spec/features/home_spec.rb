require 'spec_helper'

feature 'user visits homepage' do 

	scenario 'views page' do 
		visit ('/')
		expect(page).to have_content('Hello')
	end

end