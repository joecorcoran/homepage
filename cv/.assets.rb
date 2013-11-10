require 'sass'
require 'yui/compressor'

input  'styles'
output 'assets'

package :main do
  assets '**/*.scss'

  modify { |content, _| [Sass.compile(content), _] }
  concat 'main.min.css'
  modify { |content, _| [YUI::CssCompressor.new.compress(content), _] }
end
