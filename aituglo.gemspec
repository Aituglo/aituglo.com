# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "aituglo.com"
    spec.version       = "4.0.5"
    spec.authors       = ["Cassim Khouani"]
    spec.email         = ["contact@aituglo.com"]
  
    spec.summary       = "A simple website."
    spec.homepage      = "https://github.com/aituglo/aituglo.com"
    spec.license       = "MIT"
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }
  
    spec.add_runtime_dependency "jekyll", "~> 3.8.5"
  
    spec.add_development_dependency "bundler", "~> 2.0.1"
    spec.add_development_dependency "rake", "~> 12.0"
  end
  