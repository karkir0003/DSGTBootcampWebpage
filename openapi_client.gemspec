# -*- encoding: utf-8 -*-

=begin
#dsgt

#DSGT

The version of the OpenAPI document: 1.0.0
Contact: achau3910@gmail.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.3.1

=end

$:.push File.expand_path("../lib", __FILE__)
require "openapi_client/version"

Gem::Specification.new do |s|
  s.name        = "openapi_client"
  s.version     = OpenapiClient::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["OpenAPI-Generator"]
  s.email       = ["achau3910@gmail.com"]
  s.homepage    = "https://openapi-generator.tech"
  s.summary     = "dsgt Ruby Gem"
  s.description = "DSGT"
  s.license     = "Unlicense"
  s.required_ruby_version = ">= 2.4"

  s.add_runtime_dependency 'typhoeus', '~> 1.0', '>= 1.0.1'

  s.add_development_dependency 'rspec', '~> 3.6', '>= 3.6.0'

  s.files         = `find *`.split("\n").uniq.sort.select { |f| !f.empty? }
  s.test_files    = `find spec/*`.split("\n")
  s.executables   = []
  s.require_paths = ["lib"]
end
