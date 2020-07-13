queue()
    .defer(d3.csv, "data/ls-view.csv")
    .await(makeGraphs);

    
function makeGraphs(mbrData, error) {
    var ndx = crossfilter(mbrData);
    


function show_membership_type_split(ndx) {   
    var dim = ndx.dimension(dc.pluck('gender'));
    var group = dim.group();
    
    dc.barChart("#membership-type")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxis().ticks(20);
}
  

    dc.renderAll();
}
