require 'sinatra'
require 'haml'
# require 'data_mapper'
# require 'dm-paperclip'

require_relative './routes/init'

set :public_folder, 'public'

class NickiKeszler < Sinatra::Application


end

env = ENV["RACK_ENV"] || "development"

# DataMapper.setup(:default, "postgres:#{Dir.pwd}/data/nicki_keszler_app_#{env}")

# require_relative './models/init'

# DataMapper.finalize
# DataMapper.auto_upgrade!
