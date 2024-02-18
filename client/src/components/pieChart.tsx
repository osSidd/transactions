import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

export default function PieChart({categories}){
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        makeChart(svgRef)
    }, [])

    function makeChart(svgRef: React.RefObject<SVGSVGElement>){

        const width = 500
        const height = 500

        const svg = d3.select(svgRef.current).attr('width', width).attr('height', height)

        const pieGenerator = d3.pie().value(d => d.total)
        const pie = pieGenerator(categories)

        const arcGenerator = d3.arc()
        const arcs = pie.map(p => arcGenerator({
            innerRadius: 0,
            outerRadius:25,
            startAngle: p.startAngle,
            endAngle: p.endAngle,
        }))

        const pieContainer = svg.append('g')
        pieContainer.selectAll('path')
                    .datum(arcs)
                    .enter()
                    .append('path')
                    .attr('d', d => d)
                    .attr('fill', 'none')
                    .attr('stroke', 'gray')
    }

    return (
        <svg ref={svgRef}></svg>
    )
}