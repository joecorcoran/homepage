require 'yui/compressor'
class Stylesheet < Rake::Pipeline::Filter
  def generate_output(inputs, output)
    inputs.each do |input|
      output.write compressor.compress(input.read)
    end
  end
  def compressor
    YUI::CssCompressor.new
  end
end