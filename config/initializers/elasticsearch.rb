config = {
    host: "https://si0axwows9:qsxa253qud@dogwood-75549.us-east-1.bonsaisearch.net",
    transport_options: {
      request: { timeout: 5 }
    }
  }
  
  if File.exists?("config/elasticsearch.yml")
    config.merge!(YAML.load_file("config/elasticsearch.yml")[Rails.env].symbolize_keys)
  end
  
  Elasticsearch::Model.client = Elasticsearch::Client.new(config)