# frozen_string_literal: true

class CreateNewWeather
  extend Dry::Monads::Either::Mixin
  extend Dry::Container::Mixin
  
  def self.call(params)
    icons = [params[:icon_weather], params[:icon_situation], params[:icon_side],
             params[:icon_activity], params[:icon_emotion], params[:icon_festival]]
    result = ''
    icons.each do |icon|
      unless icon.nil?
        result = HTTP.post("#{WeataiApp.config.Weatai_API}user_weather/",
        #result = HTTP.post("localhost:9292/api/v0.1/user_weather/",
                            json:{lat: params[:lat],
                                  lng: params[:lng],
                                  icon: icon,
                                  upload_time: Time.now
                          })
      end
    end
    Right(result.body)
  rescue
    Left(Error.new(message: 'Our servers failed - we are investigating!'))
  end
end
