source 'https://rubygems.org'

gem 'sinatra', '2.0.0.beta2'
gem 'puma'
gem 'econfig'
gem 'activesupport'
gem 'simplecov'
gem 'weatai', '0.1.7'
gem 'json'
gem 'sequel'  #sequel: Our object-relational mapper
gem 'rake'
gem 'slim'
gem 'rack-flash3'
gem 'rubocop'
gem 'http'

gem 'roar'
gem 'multi_json'
gem 'dry-monads'
gem 'dry-validation'
gem 'dry-container'
gem 'dry-transaction'

gem 'gmaps4rails'

group :development, :test do
	gem 'sqlite3'  #sqlite3: Local file-based database server
end

group :development do
  gem 'rerun'  #rerun: Lets us restart our app on any code change
  gem 'tux'  #tux: Local console for interacting with Sinatra app
  gem 'hirb'  #hirb: Shows us pretty database records in tux
  
  gem 'flog'  
  gem 'flay'
end

#needed for our test deployment environment
group :test do 
  gem 'minitest' 
  gem 'minitest-rg' 

  gem 'rack-test' #testing methods for web app.
  gem 'rake'

  gem 'vcr'
  gem 'webmock'

end

group :production do
  gem 'pg'
  gem 'tux'
  gem 'hirb'
end





