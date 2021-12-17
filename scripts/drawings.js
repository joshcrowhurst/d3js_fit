(function() {
  var cities = [
    {
      'name': 'boop',
      'pop': '100'
    },
    {
      'name': 'hodor',
      'pop': '200'
    }]
  var widthScale = d3.scaleLinear().domain([0, 200]).range([0,100])
  var heightScale = d3.scaleOrdinal().domain(['boop','hodor']).range([0,50])
console.log(heightScale)
  var svg = d3.select('svg')
  svg.selectAll('rect')
    .data(cities)
    .enter().append('rect')
    .attr('height', 10)
    .attr('width', function(d) {
      return widthScale(d.pop)
    })
    .attr('fill', 'black')
    .attr('y', function(d) {
      console.log(heightScale(d.name))
      return heightScale(d.name)
    })
}())
